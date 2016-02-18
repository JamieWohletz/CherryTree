(ns treegen.util)

(defn rand-num-in-range [start end]
  (. js/_ random start end true))

(defn rand-int-in-range [start end]
  (. js/_ random start end false))

(defn clamp [num lower upper]
  (. js/_ clamp num lower upper))

(defn ceil [num]
  (js/Math.ceil num))

(defn floor [num]
  (js/Math.floor num))

(defn sort-middle
  "Sort the numbers in coll such that the largest value is in the middle with decreasing values on the left and right"
  [coll]
  (let [half (int (/ (count coll) 2))
        left (sort (subvec coll 0 half))
        right (reverse (sort (subvec coll half)))
        sorted (concat left right)]
    sorted))

