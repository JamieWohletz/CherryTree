(defproject cherry-tree "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.5.3"

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/core.async "0.2.374"
                  :exclusions [org.clojure/tools.reader]]]

  :plugins [[lein-cljsbuild "1.1.2" :exclusions [[org.clojure/clojure]]]
            [lein-figwheel "0.5.0-6"]]

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {:builds
              [{:id           "dev"
                :figwheel true
                :source-paths ["app/scripts"]
                :compiler     {:main          treegen.core
                               :asset-path    "out"
                               :output-to     "app/out/treegen.js"
                               :output-dir    "app/out"
                               :optimizations :none}}
               ;; This next build is an compressed minified build for
               ;; production. You can build this with:
               ;; lein cljsbuild once min
               {:id           "min"
                :source-paths ["app/scripts"]
                :compiler     {:main          treegen.core
                               :asset-path    "out"
                               :output-to     "app/out/treegen.js"
                               :optimizations :advanced
                               :pretty-print  false}}]}
  )
