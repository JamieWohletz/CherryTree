// Compiled by ClojureScript 1.7.170 {}
goog.provide('treegen.tree');
goog.require('cljs.core');
goog.require('treegen.util');
cljs.core.enable_console_print_BANG_.call(null);
treegen.tree.min_num_child_nodes = (1);
treegen.tree.max_num_child_nodes = (3);
treegen.tree.max_length_difference = 0.2;
treegen.tree.max_thickness_difference = 0.5;
treegen.tree.angle_arc_range = (180);
treegen.tree.get_num_child_nodes = (function treegen$tree$get_num_child_nodes(){
return treegen.util.rand_int_in_range.call(null,treegen.tree.min_num_child_nodes,treegen.tree.max_num_child_nodes);
});
treegen.tree.slice_into_random_parts = (function treegen$tree$slice_into_random_parts(total,num_slices,min_slice_percent){
if(((1) === num_slices)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [total], null);
} else {
var min_slice_point = (min_slice_percent * total);
var max_slice_point = (((1) - min_slice_percent) * total);
var slice_point = treegen.util.rand_num_in_range.call(null,min_slice_point,max_slice_point);
return cljs.core.conj.call(null,treegen$tree$slice_into_random_parts.call(null,(total - slice_point),(num_slices - (1)),min_slice_percent),slice_point);
}
});
treegen.tree.generate_child_nodes = (function treegen$tree$generate_child_nodes(create_node){
var num_nodes = treegen.tree.get_num_child_nodes.call(null);
return cljs.core.repeatedly.call(null,num_nodes,create_node);
});
treegen.tree.generate_naked_tree = (function treegen$tree$generate_naked_tree(num_levels){
if((num_levels === (1))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),treegen.tree.generate_child_nodes.call(null,(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"level","level",1290497552),num_levels], null);
}))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",-940561982),treegen.tree.generate_child_nodes.call(null,(function (){
return treegen$tree$generate_naked_tree.call(null,(num_levels - (1)));
})),new cljs.core.Keyword(null,"level","level",1290497552),num_levels], null);
}
});
treegen.tree.add_property_to_tree = (function treegen$tree$add_property_to_tree(p__5823,property,root_value,get_children_values){
var map__5826 = p__5823;
var map__5826__$1 = ((((!((map__5826 == null)))?((((map__5826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5826):map__5826);
var tree = map__5826__$1;
var children = cljs.core.get.call(null,map__5826__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.empty_QMARK_.call(null,children)){
return cljs.core.assoc.call(null,tree,property,root_value);
} else {
var children_values = get_children_values.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"parent-value","parent-value",-1418094573),root_value,new cljs.core.Keyword(null,"num-children","num-children",-1656107233),cljs.core.count.call(null,children),new cljs.core.Keyword(null,"parent","parent",-878878779),tree,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
var children__$1 = cljs.core.map.call(null,((function (children_values,map__5826,map__5826__$1,tree,children){
return (function (child,value){
return treegen$tree$add_property_to_tree.call(null,child,property,value,get_children_values);
});})(children_values,map__5826,map__5826__$1,tree,children))
,children,children_values);
return cljs.core.assoc.call(null,tree,property,root_value,new cljs.core.Keyword(null,"children","children",-940561982),children__$1);
}
});
treegen.tree.gen_length = (function treegen$tree$gen_length(p__5828){
var map__5831 = p__5828;
var map__5831__$1 = ((((!((map__5831 == null)))?((((map__5831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5831):map__5831);
var parent_value = cljs.core.get.call(null,map__5831__$1,new cljs.core.Keyword(null,"parent-value","parent-value",-1418094573));
var num_children = cljs.core.get.call(null,map__5831__$1,new cljs.core.Keyword(null,"num-children","num-children",-1656107233));
var parent = cljs.core.get.call(null,map__5831__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var children = cljs.core.get.call(null,map__5831__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return treegen.util.clamp.call(null,treegen.util.rand_num_in_range.call(null,(parent_value - 0.2),((parent_value - 0.02) + new cljs.core.Keyword(null,"thickness","thickness",-940175454).cljs$core$IFn$_invoke$arity$1(parent))),0.1,(1));
});
treegen.tree.gen_lengths = (function treegen$tree$gen_lengths(p__5833){
var map__5836 = p__5833;
var map__5836__$1 = ((((!((map__5836 == null)))?((((map__5836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5836):map__5836);
var args = map__5836__$1;
var parent_value = cljs.core.get.call(null,map__5836__$1,new cljs.core.Keyword(null,"parent-value","parent-value",-1418094573));
var num_children = cljs.core.get.call(null,map__5836__$1,new cljs.core.Keyword(null,"num-children","num-children",-1656107233));
var parent = cljs.core.get.call(null,map__5836__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var children = cljs.core.get.call(null,map__5836__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.repeatedly.call(null,num_children,((function (map__5836,map__5836__$1,args,parent_value,num_children,parent,children){
return (function (){
return treegen.tree.gen_length.call(null,args);
});})(map__5836,map__5836__$1,args,parent_value,num_children,parent,children))
);
});
treegen.tree.add_length = (function treegen$tree$add_length(tree,root_length){
return treegen.tree.add_property_to_tree.call(null,tree,new cljs.core.Keyword(null,"length","length",588987862),root_length,treegen.tree.gen_lengths);
});
treegen.tree.add_thickness = (function treegen$tree$add_thickness(tree,root_thickness){
return treegen.tree.add_property_to_tree.call(null,tree,new cljs.core.Keyword(null,"thickness","thickness",-940175454),root_thickness,(function (p__5841){
var map__5842 = p__5841;
var map__5842__$1 = ((((!((map__5842 == null)))?((((map__5842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5842):map__5842);
var parent_value = cljs.core.get.call(null,map__5842__$1,new cljs.core.Keyword(null,"parent-value","parent-value",-1418094573));
var num_children = cljs.core.get.call(null,map__5842__$1,new cljs.core.Keyword(null,"num-children","num-children",-1656107233));
var parent = cljs.core.get.call(null,map__5842__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var children = cljs.core.get.call(null,map__5842__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return treegen.util.sort_middle.call(null,treegen.tree.slice_into_random_parts.call(null,parent_value,num_children,0.3));
}));
});
treegen.tree.add_angle = (function treegen$tree$add_angle(tree,root_angle){
return treegen.tree.add_property_to_tree.call(null,tree,new cljs.core.Keyword(null,"angle","angle",1622094254),root_angle,(function (p__5847){
var map__5848 = p__5847;
var map__5848__$1 = ((((!((map__5848 == null)))?((((map__5848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5848):map__5848);
var parent_value = cljs.core.get.call(null,map__5848__$1,new cljs.core.Keyword(null,"parent-value","parent-value",-1418094573));
var num_children = cljs.core.get.call(null,map__5848__$1,new cljs.core.Keyword(null,"num-children","num-children",-1656107233));
var parent = cljs.core.get.call(null,map__5848__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var children = cljs.core.get.call(null,map__5848__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var angle_modifier = treegen.util.clamp.call(null,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(parent),(5),(10));
return cljs.core.sort.call(null,cljs.core.repeatedly.call(null,num_children,((function (angle_modifier,map__5848,map__5848__$1,parent_value,num_children,parent,children){
return (function (){
return treegen.util.rand_num_in_range.call(null,(- (Math.PI / angle_modifier)),(Math.PI / angle_modifier));
});})(angle_modifier,map__5848,map__5848__$1,parent_value,num_children,parent,children))
));
}));
});
treegen.tree.generate_tree_STAR_ = (function treegen$tree$generate_tree_STAR_(num_levels){
return treegen.tree.add_length.call(null,treegen.tree.add_thickness.call(null,treegen.tree.add_angle.call(null,treegen.tree.generate_naked_tree.call(null,num_levels),(Math.PI / (2))),((1) / (5))),(1));
});
treegen.tree.generate_tree = (function treegen$tree$generate_tree(num_levels){
return cljs.core.clj__GT_js.call(null,treegen.tree.generate_tree_STAR_.call(null,num_levels));
});

//# sourceMappingURL=tree.js.map