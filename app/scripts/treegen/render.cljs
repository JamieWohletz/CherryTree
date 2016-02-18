(ns treegen.render
  (:require [treegen.util :refer [floor ceil]]))

(enable-console-print!)

(defn jquery
  "Wrap an element or selector in $(...)"
  [selector]
  (js/$ selector))

;constants
(def canvas (.getElementById js/document "tree-canvas"))
(defn canvas-w [] (aget canvas "width"))
(defn canvas-h [] (aget canvas "height"))
(def context (.getContext canvas "2d"))
(def win-width (.width (jquery js/window)))
(def win-height (.height (jquery js/window)))

(def X_SCALE 5)
(def Y_SCALE 10)
(def BLOSSOM_SIZE 16)

;(println "canvas: " canvas-w canvas-h)

;setup
(aset canvas "width" win-width)
(aset canvas "height" win-height)
(.translate context (/ (canvas-w) 2) (canvas-h))
(aset context "lineCap" "round")
(aset context "lineJoin" "round")

(declare draw-tree)
(def cherry-blossom-image (js/Image.))
(aset cherry-blossom-image "src" "./images/cherryblossom.png")
(aset cherry-blossom-image "onload" draw-tree)

(defn scale-tree [{:keys [children length thickness] :as node}]
  (assoc node :length (floor (/ (* length (canvas-h)) Y_SCALE))
              :thickness (ceil (/ (* thickness (canvas-w)) X_SCALE))
              :children (map scale-tree children)))

(defn get-branch-x-pos-on-parent
  "Determine where a branch should be rendered on the horizontal plane defined by the top of it's parent's branch"
  [node {:keys [children] :as parent} order-in-siblings]
  (if (or (nil? parent) (nil? node) (nil? children))
    0
    (let [total-left-thickness (->> (take order-in-siblings children)
                                    (map :thickness)
                                    (reduce +))]
      ;//the x offset is the thickness of all the preceeding nodes plus half this node's
      ;//thickness so that we can start drawing from the centerpoint
      (+ (/ (- (:thickness parent)) 2)
         (+ total-left-thickness (/ (:thickness node) 2))))))

(defn draw-tree
  ([node]
   (draw-tree (scale-tree node) nil 0))
  ([{:keys [thickness length children] :as node} parent order-in-siblings]
   (let [x-offset (get-branch-x-pos-on-parent node parent order-in-siblings)
         half-thickness (/ thickness 2)]

     (doto context
       (aset "lineWidth" thickness)
       (.beginPath)
       (.translate x-offset 0)
       (.moveTo 0 0)

       ;//draw a circle between branch joints to fill them in
       (.beginPath)
       (.arc 0 0 (+ half-thickness 0.2) 0 (* 2 js/Math.PI) false)
       (.fill)
       (.closePath)

       (.beginPath)
       (.moveTo 0 0)
       (.lineTo (- half-thickness) 0)
       (.quadraticCurveTo (/ (- half-thickness) 2) (/ (- length) 2) (- half-thickness) (- length))
       (.lineTo half-thickness (- length))
       (.quadraticCurveTo (/ half-thickness 2) (/ (- length) 2) half-thickness 0)
       (.fill)

       (.translate 0 (- length)))

     (if (empty? children)
       (.drawImage context cherry-blossom-image
                   (/ (- BLOSSOM_SIZE) 2)
                   (/ (- BLOSSOM_SIZE) 2)
                   BLOSSOM_SIZE
                   BLOSSOM_SIZE)
       (doseq [[child index] (map list children (range))]
         ;(println child index)
         (.save context)
         (.rotate context (:angle child))
         (draw-tree child node index)
         (.restore context))
       )

     )))
