(ns treegen.core
  (:require [treegen.tree :as tree]
            [treegen.render :as render]))

(.ready (js/$ js/document)
        ;a timeout gives the cherry blossom image time to load
        #(js/setTimeout (fn [] (render/draw-tree (tree/generate-tree* 10))) 0))

;(js/setTimeout #(render/draw-tree (tree/generate-tree* 10)) 5000)
