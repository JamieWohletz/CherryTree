// Compiled by ClojureScript 1.7.170 {}
goog.provide('treegen.util');
goog.require('cljs.core');
treegen.util.rand_num_in_range = (function treegen$util$rand_num_in_range(start,end){
return _.random(start,end,true);
});
treegen.util.rand_int_in_range = (function treegen$util$rand_int_in_range(start,end){
return _.random(start,end,false);
});
treegen.util.clamp = (function treegen$util$clamp(num,lower,upper){
return _.clamp(num,lower,upper);
});
treegen.util.ceil = (function treegen$util$ceil(num){
return Math.ceil(num);
});
treegen.util.floor = (function treegen$util$floor(num){
return Math.floor(num);
});
/**
 * Sort the numbers in coll such that the largest value is in the middle with decreasing values on the left and right
 */
treegen.util.sort_middle = (function treegen$util$sort_middle(coll){
var half = ((cljs.core.count.call(null,coll) / (2)) | (0));
var left = cljs.core.sort.call(null,cljs.core.subvec.call(null,coll,(0),half));
var right = cljs.core.reverse.call(null,cljs.core.sort.call(null,cljs.core.subvec.call(null,coll,half)));
var sorted = cljs.core.concat.call(null,left,right);
return sorted;
});

//# sourceMappingURL=util.js.map