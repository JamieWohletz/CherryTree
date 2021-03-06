(ns treegen.tree
  (:require [treegen.util :refer [rand-int-in-range
                                  rand-num-in-range
                                  clamp
                                  sort-middle]] ))

(enable-console-print!)

(def min-num-child-nodes 1)
(def max-num-child-nodes 3)
(def max-length-difference 0.2)
(def max-thickness-difference 0.5)
(def angle-arc-range 180)


(defn get-num-child-nodes []
  (rand-int-in-range min-num-child-nodes max-num-child-nodes))

(defn slice-into-random-parts [total num-slices min-slice-percent]
  (if (== 1 num-slices)
    [total]
    (let [min-slice-point (* min-slice-percent total)
          max-slice-point (* (- 1 min-slice-percent) total)
          slice-point (rand-num-in-range min-slice-point max-slice-point)]
      (conj (slice-into-random-parts (- total slice-point) (- num-slices 1) min-slice-percent) slice-point))))

(defn generate-child-nodes [create-node]
  (let [num-nodes (get-num-child-nodes)]
    (repeatedly num-nodes create-node)))

(defn generate-naked-tree [num-levels]
  (if (== num-levels 1)
    {:children (generate-child-nodes (fn []
                                       ;(println "Leaf node created")
                                       {:level num-levels}))}
    {:children (generate-child-nodes (fn []
                                       ;(println "Node created")
                                       (generate-naked-tree (dec num-levels))))
     :level num-levels}))

(defn add-property-to-tree [{:keys [children] :as tree} property root-value get-children-values]
  (if (empty? children)
    (assoc tree property root-value)
    (let [children-values (get-children-values {:parent-value root-value
                                                :num-children (count children)
                                                :parent       tree
                                                :children     children})
          children (map (fn [child value]
                          (add-property-to-tree child property value get-children-values))
                        children children-values)]
      (assoc tree property root-value :children children))))


(defn gen-length [{:keys [parent-value num-children parent children]}]
  (clamp (rand-num-in-range (- parent-value 0.2)
                            (+ (- parent-value 0.02) (:thickness parent)))
         0.1
         1))

(defn gen-lengths [{:keys [parent-value num-children parent children] :as args}]
  (repeatedly num-children #(gen-length args)))

(defn add-length [tree root-length]
  (add-property-to-tree tree :length root-length gen-lengths))

(defn add-thickness [tree root-thickness]
  (add-property-to-tree tree :thickness root-thickness
                        (fn [{:keys [parent-value num-children parent children]}]
                          (sort-middle                      ;keep the thickest branch in the middle
                            (slice-into-random-parts parent-value num-children 0.3)))))

(defn add-angle [tree root-angle]
  (add-property-to-tree tree :angle root-angle
                        (fn [{:keys [parent-value num-children parent children]}]
                          (let [angle-modifier (clamp (:level parent) 5 10)] ;generate straighter trees by having smaller angles on lower branches
                            (sort                            ;sort to keep branches from overlapping when they have opposing angles
                              (repeatedly num-children
                                          #(rand-num-in-range (- (/ js/Math.PI angle-modifier))
                                                              (/ js/Math.PI angle-modifier))))))))

(defn generate-tree* [num-levels]
  (add-length
    (add-thickness
      (add-angle
        (generate-naked-tree num-levels)
        (/ js/Math.PI 2))
      (/ 1 5))
    1))

(defn generate-tree [num-levels]
  (clj->js
    (generate-tree* num-levels)))
