// Compiled by ClojureScript 1.7.170 {}
goog.provide('treegen.render');
goog.require('cljs.core');
goog.require('treegen.util');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * Wrap an element or selector in $(...)
 */
treegen.render.jquery = (function treegen$render$jquery(selector){
return $(selector);
});
treegen.render.canvas = document.getElementById("tree-canvas");
treegen.render.canvas_w = (function treegen$render$canvas_w(){
return (treegen.render.canvas["width"]);
});
treegen.render.canvas_h = (function treegen$render$canvas_h(){
return (treegen.render.canvas["height"]);
});
treegen.render.context = treegen.render.canvas.getContext("2d");
treegen.render.win_width = treegen.render.jquery.call(null,window).width();
treegen.render.win_height = treegen.render.jquery.call(null,window).height();
treegen.render.X_SCALE = (5);
treegen.render.Y_SCALE = (10);
treegen.render.BLOSSOM_SIZE = (16);
(treegen.render.canvas["width"] = treegen.render.win_width);
(treegen.render.canvas["height"] = treegen.render.win_height);
treegen.render.context.translate((treegen.render.canvas_w.call(null) / (2)),treegen.render.canvas_h.call(null));
(treegen.render.context["lineCap"] = "round");
(treegen.render.context["lineJoin"] = "round");
treegen.render.draw_tree;
treegen.render.cherry_blossom_image = (new Image());
(treegen.render.cherry_blossom_image["src"] = "./images/cherryblossom.png");
(treegen.render.cherry_blossom_image["onload"] = treegen.render.draw_tree);
treegen.render.scale_tree = (function treegen$render$scale_tree(p__5781){
var map__5784 = p__5781;
var map__5784__$1 = ((((!((map__5784 == null)))?((((map__5784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5784):map__5784);
var node = map__5784__$1;
var children = cljs.core.get.call(null,map__5784__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var length = cljs.core.get.call(null,map__5784__$1,new cljs.core.Keyword(null,"length","length",588987862));
var thickness = cljs.core.get.call(null,map__5784__$1,new cljs.core.Keyword(null,"thickness","thickness",-940175454));
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"length","length",588987862),treegen.util.floor.call(null,((length * treegen.render.canvas_h.call(null)) / treegen.render.Y_SCALE)),new cljs.core.Keyword(null,"thickness","thickness",-940175454),treegen.util.ceil.call(null,((thickness * treegen.render.canvas_w.call(null)) / treegen.render.X_SCALE)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.call(null,treegen$render$scale_tree,children));
});
/**
 * Determine where a branch should be rendered on the horizontal plane defined by the top of it's parent's branch
 */
treegen.render.get_branch_x_pos_on_parent = (function treegen$render$get_branch_x_pos_on_parent(node,p__5786,order_in_siblings){
var map__5789 = p__5786;
var map__5789__$1 = ((((!((map__5789 == null)))?((((map__5789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5789):map__5789);
var parent = map__5789__$1;
var children = cljs.core.get.call(null,map__5789__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(((parent == null)) || ((node == null)) || ((children == null))){
return (0);
} else {
var total_left_thickness = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"thickness","thickness",-940175454),cljs.core.take.call(null,order_in_siblings,children)));
return (((- new cljs.core.Keyword(null,"thickness","thickness",-940175454).cljs$core$IFn$_invoke$arity$1(parent)) / (2)) + (total_left_thickness + (new cljs.core.Keyword(null,"thickness","thickness",-940175454).cljs$core$IFn$_invoke$arity$1(node) / (2))));
}
});
treegen.render.draw_tree = (function treegen$render$draw_tree(var_args){
var args5791 = [];
var len__5729__auto___5804 = arguments.length;
var i__5730__auto___5805 = (0);
while(true){
if((i__5730__auto___5805 < len__5729__auto___5804)){
args5791.push((arguments[i__5730__auto___5805]));

var G__5806 = (i__5730__auto___5805 + (1));
i__5730__auto___5805 = G__5806;
continue;
} else {
}
break;
}

var G__5793 = args5791.length;
switch (G__5793) {
case 1:
return treegen.render.draw_tree.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return treegen.render.draw_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5791.length)].join('')));

}
});

treegen.render.draw_tree.cljs$core$IFn$_invoke$arity$1 = (function (node){
return treegen.render.draw_tree.call(null,treegen.render.scale_tree.call(null,node),null,(0));
});

treegen.render.draw_tree.cljs$core$IFn$_invoke$arity$3 = (function (p__5794,parent,order_in_siblings){
var map__5795 = p__5794;
var map__5795__$1 = ((((!((map__5795 == null)))?((((map__5795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5795):map__5795);
var node = map__5795__$1;
var thickness = cljs.core.get.call(null,map__5795__$1,new cljs.core.Keyword(null,"thickness","thickness",-940175454));
var length = cljs.core.get.call(null,map__5795__$1,new cljs.core.Keyword(null,"length","length",588987862));
var children = cljs.core.get.call(null,map__5795__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var x_offset = treegen.render.get_branch_x_pos_on_parent.call(null,node,parent,order_in_siblings);
var half_thickness = (thickness / (2));
var G__5797_5808 = treegen.render.context;
(G__5797_5808["lineWidth"] = thickness);

G__5797_5808.beginPath();

G__5797_5808.translate(x_offset,(0));

G__5797_5808.moveTo((0),(0));

G__5797_5808.beginPath();

G__5797_5808.arc((0),(0),(half_thickness + 0.2),(0),((2) * Math.PI),false);

G__5797_5808.fill();

G__5797_5808.closePath();

G__5797_5808.beginPath();

G__5797_5808.moveTo((0),(0));

G__5797_5808.lineTo((- half_thickness),(0));

G__5797_5808.quadraticCurveTo(((- half_thickness) / (2)),((- length) / (2)),(- half_thickness),(- length));

G__5797_5808.lineTo(half_thickness,(- length));

G__5797_5808.quadraticCurveTo((half_thickness / (2)),((- length) / (2)),half_thickness,(0));

G__5797_5808.fill();

G__5797_5808.translate((0),(- length));


if(cljs.core.empty_QMARK_.call(null,children)){
return treegen.render.context.drawImage(treegen.render.cherry_blossom_image,((- treegen.render.BLOSSOM_SIZE) / (2)),((- treegen.render.BLOSSOM_SIZE) / (2)),treegen.render.BLOSSOM_SIZE,treegen.render.BLOSSOM_SIZE);
} else {
var seq__5798 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.list,children,cljs.core.range.call(null)));
var chunk__5799 = null;
var count__5800 = (0);
var i__5801 = (0);
while(true){
if((i__5801 < count__5800)){
var vec__5802 = cljs.core._nth.call(null,chunk__5799,i__5801);
var child = cljs.core.nth.call(null,vec__5802,(0),null);
var index = cljs.core.nth.call(null,vec__5802,(1),null);
treegen.render.context.save();

treegen.render.context.rotate(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(child));

treegen.render.draw_tree.call(null,child,node,index);

treegen.render.context.restore();

var G__5809 = seq__5798;
var G__5810 = chunk__5799;
var G__5811 = count__5800;
var G__5812 = (i__5801 + (1));
seq__5798 = G__5809;
chunk__5799 = G__5810;
count__5800 = G__5811;
i__5801 = G__5812;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__5798);
if(temp__4425__auto__){
var seq__5798__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5798__$1)){
var c__5474__auto__ = cljs.core.chunk_first.call(null,seq__5798__$1);
var G__5813 = cljs.core.chunk_rest.call(null,seq__5798__$1);
var G__5814 = c__5474__auto__;
var G__5815 = cljs.core.count.call(null,c__5474__auto__);
var G__5816 = (0);
seq__5798 = G__5813;
chunk__5799 = G__5814;
count__5800 = G__5815;
i__5801 = G__5816;
continue;
} else {
var vec__5803 = cljs.core.first.call(null,seq__5798__$1);
var child = cljs.core.nth.call(null,vec__5803,(0),null);
var index = cljs.core.nth.call(null,vec__5803,(1),null);
treegen.render.context.save();

treegen.render.context.rotate(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(child));

treegen.render.draw_tree.call(null,child,node,index);

treegen.render.context.restore();

var G__5817 = cljs.core.next.call(null,seq__5798__$1);
var G__5818 = null;
var G__5819 = (0);
var G__5820 = (0);
seq__5798 = G__5817;
chunk__5799 = G__5818;
count__5800 = G__5819;
i__5801 = G__5820;
continue;
}
} else {
return null;
}
}
break;
}
}
});

treegen.render.draw_tree.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=render.js.map