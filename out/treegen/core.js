// Compiled by ClojureScript 1.7.170 {}
goog.provide('treegen.core');
goog.require('cljs.core');
goog.require('treegen.tree');
goog.require('treegen.render');
$(document).ready((function (){
return setTimeout((function (){
return treegen.render.draw_tree.call(null,treegen.tree.generate_tree_STAR_.call(null,(10)));
}),(0));
}));

//# sourceMappingURL=core.js.map