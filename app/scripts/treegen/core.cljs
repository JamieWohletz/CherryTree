(ns treegen.core
  (:require [clojure.browser.repl :as repl]))


(enable-console-print!)

(def min-num-child-nodes 1)
(def max-num-child-nodes 3)
(def max-length-difference 0.2)
(def max-thickness-difference 0.5)
(def angle-arc-range 180)

(defn rand-num-in-range [start end]
  (. js/_ random start end true))

(defn rand-int-in-range [start end]
  (. js/_ random start end false))

(defn get-num-child-nodes []
  (rand-int-in-range min-num-child-nodes max-num-child-nodes))

(defn slice-into-random-parts [total num-slices]
  (if (== 1 num-slices)
    [total]
    (let [slice-point (rand-num-in-range 0 total)]
      (conj (slice-into-random-parts (- total slice-point) (- num-slices 1)) slice-point))))

(defn generate-child-nodes [create-node]
  (let [num-nodes (get-num-child-nodes)]
    (repeatedly num-nodes create-node)))

(defn generate-naked-tree [num-levels]
  (if (== num-levels 1)
    {:children (generate-child-nodes (fn [] (do (println "created node")
                                                {})))}
    {:children (generate-child-nodes (fn [] (generate-naked-tree (- num-levels 1))))}))

(defn add-property-to-tree [{:keys [children] :as tree} property root-value get-children-values]
  (if (empty? children)
    (assoc tree property root-value)
    (let [children-values (get-children-values root-value (count children))
          children (map (fn [child value]
                          (add-property-to-tree child property value get-children-values))
                        children children-values)]
      (assoc tree property root-value :children children))))

(defn add-length [tree root-length]
  (add-property-to-tree tree :length root-length
                        (fn [parent-length num-children]
                          (repeatedly num-children
                                      #(rand-num-in-range (- parent-length max-length-difference)
                                                          parent-length)))))

(defn add-thickness [tree root-thickness]
  (add-property-to-tree tree :thickness root-thickness
                        (fn [parent-thickness num-children]
                          (slice-into-random-parts parent-thickness num-children))))

(defn add-angle [tree root-angle]
  (add-property-to-tree tree :angle root-angle
                        (fn [parent-angle num-children]
                          (repeatedly num-children
                                      #(rand-num-in-range 0 js/Math.PI)))))

(defn generate-tree [num-levels]
  (clj->js
    (add-length
      (add-thickness
        (add-angle
          (generate-naked-tree num-levels)
          (/ js/Math.PI 2))
        (/ js/RENDER.VIEWBOX_WIDTH 10))
      1)))
