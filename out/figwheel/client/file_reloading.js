// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16819__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16819__auto__){
return or__16819__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16819__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22298_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22298_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__22303 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22304 = null;
var count__22305 = (0);
var i__22306 = (0);
while(true){
if((i__22306 < count__22305)){
var n = cljs.core._nth.call(null,chunk__22304,i__22306);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22307 = seq__22303;
var G__22308 = chunk__22304;
var G__22309 = count__22305;
var G__22310 = (i__22306 + (1));
seq__22303 = G__22307;
chunk__22304 = G__22308;
count__22305 = G__22309;
i__22306 = G__22310;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22303);
if(temp__4425__auto__){
var seq__22303__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22303__$1)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,seq__22303__$1);
var G__22311 = cljs.core.chunk_rest.call(null,seq__22303__$1);
var G__22312 = c__17622__auto__;
var G__22313 = cljs.core.count.call(null,c__17622__auto__);
var G__22314 = (0);
seq__22303 = G__22311;
chunk__22304 = G__22312;
count__22305 = G__22313;
i__22306 = G__22314;
continue;
} else {
var n = cljs.core.first.call(null,seq__22303__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22315 = cljs.core.next.call(null,seq__22303__$1);
var G__22316 = null;
var G__22317 = (0);
var G__22318 = (0);
seq__22303 = G__22315;
chunk__22304 = G__22316;
count__22305 = G__22317;
i__22306 = G__22318;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__22357_22364 = cljs.core.seq.call(null,deps);
var chunk__22358_22365 = null;
var count__22359_22366 = (0);
var i__22360_22367 = (0);
while(true){
if((i__22360_22367 < count__22359_22366)){
var dep_22368 = cljs.core._nth.call(null,chunk__22358_22365,i__22360_22367);
topo_sort_helper_STAR_.call(null,dep_22368,(depth + (1)),state);

var G__22369 = seq__22357_22364;
var G__22370 = chunk__22358_22365;
var G__22371 = count__22359_22366;
var G__22372 = (i__22360_22367 + (1));
seq__22357_22364 = G__22369;
chunk__22358_22365 = G__22370;
count__22359_22366 = G__22371;
i__22360_22367 = G__22372;
continue;
} else {
var temp__4425__auto___22373 = cljs.core.seq.call(null,seq__22357_22364);
if(temp__4425__auto___22373){
var seq__22357_22374__$1 = temp__4425__auto___22373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22357_22374__$1)){
var c__17622__auto___22375 = cljs.core.chunk_first.call(null,seq__22357_22374__$1);
var G__22376 = cljs.core.chunk_rest.call(null,seq__22357_22374__$1);
var G__22377 = c__17622__auto___22375;
var G__22378 = cljs.core.count.call(null,c__17622__auto___22375);
var G__22379 = (0);
seq__22357_22364 = G__22376;
chunk__22358_22365 = G__22377;
count__22359_22366 = G__22378;
i__22360_22367 = G__22379;
continue;
} else {
var dep_22380 = cljs.core.first.call(null,seq__22357_22374__$1);
topo_sort_helper_STAR_.call(null,dep_22380,(depth + (1)),state);

var G__22381 = cljs.core.next.call(null,seq__22357_22374__$1);
var G__22382 = null;
var G__22383 = (0);
var G__22384 = (0);
seq__22357_22364 = G__22381;
chunk__22358_22365 = G__22382;
count__22359_22366 = G__22383;
i__22360_22367 = G__22384;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22361){
var vec__22363 = p__22361;
var x = cljs.core.nth.call(null,vec__22363,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22363,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22363,x,xs,get_deps__$1){
return (function (p1__22319_SHARP_){
return clojure.set.difference.call(null,p1__22319_SHARP_,x);
});})(vec__22363,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22397 = cljs.core.seq.call(null,provides);
var chunk__22398 = null;
var count__22399 = (0);
var i__22400 = (0);
while(true){
if((i__22400 < count__22399)){
var prov = cljs.core._nth.call(null,chunk__22398,i__22400);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22401_22409 = cljs.core.seq.call(null,requires);
var chunk__22402_22410 = null;
var count__22403_22411 = (0);
var i__22404_22412 = (0);
while(true){
if((i__22404_22412 < count__22403_22411)){
var req_22413 = cljs.core._nth.call(null,chunk__22402_22410,i__22404_22412);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22413,prov);

var G__22414 = seq__22401_22409;
var G__22415 = chunk__22402_22410;
var G__22416 = count__22403_22411;
var G__22417 = (i__22404_22412 + (1));
seq__22401_22409 = G__22414;
chunk__22402_22410 = G__22415;
count__22403_22411 = G__22416;
i__22404_22412 = G__22417;
continue;
} else {
var temp__4425__auto___22418 = cljs.core.seq.call(null,seq__22401_22409);
if(temp__4425__auto___22418){
var seq__22401_22419__$1 = temp__4425__auto___22418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22401_22419__$1)){
var c__17622__auto___22420 = cljs.core.chunk_first.call(null,seq__22401_22419__$1);
var G__22421 = cljs.core.chunk_rest.call(null,seq__22401_22419__$1);
var G__22422 = c__17622__auto___22420;
var G__22423 = cljs.core.count.call(null,c__17622__auto___22420);
var G__22424 = (0);
seq__22401_22409 = G__22421;
chunk__22402_22410 = G__22422;
count__22403_22411 = G__22423;
i__22404_22412 = G__22424;
continue;
} else {
var req_22425 = cljs.core.first.call(null,seq__22401_22419__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22425,prov);

var G__22426 = cljs.core.next.call(null,seq__22401_22419__$1);
var G__22427 = null;
var G__22428 = (0);
var G__22429 = (0);
seq__22401_22409 = G__22426;
chunk__22402_22410 = G__22427;
count__22403_22411 = G__22428;
i__22404_22412 = G__22429;
continue;
}
} else {
}
}
break;
}

var G__22430 = seq__22397;
var G__22431 = chunk__22398;
var G__22432 = count__22399;
var G__22433 = (i__22400 + (1));
seq__22397 = G__22430;
chunk__22398 = G__22431;
count__22399 = G__22432;
i__22400 = G__22433;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22397);
if(temp__4425__auto__){
var seq__22397__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22397__$1)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,seq__22397__$1);
var G__22434 = cljs.core.chunk_rest.call(null,seq__22397__$1);
var G__22435 = c__17622__auto__;
var G__22436 = cljs.core.count.call(null,c__17622__auto__);
var G__22437 = (0);
seq__22397 = G__22434;
chunk__22398 = G__22435;
count__22399 = G__22436;
i__22400 = G__22437;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22397__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22405_22438 = cljs.core.seq.call(null,requires);
var chunk__22406_22439 = null;
var count__22407_22440 = (0);
var i__22408_22441 = (0);
while(true){
if((i__22408_22441 < count__22407_22440)){
var req_22442 = cljs.core._nth.call(null,chunk__22406_22439,i__22408_22441);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22442,prov);

var G__22443 = seq__22405_22438;
var G__22444 = chunk__22406_22439;
var G__22445 = count__22407_22440;
var G__22446 = (i__22408_22441 + (1));
seq__22405_22438 = G__22443;
chunk__22406_22439 = G__22444;
count__22407_22440 = G__22445;
i__22408_22441 = G__22446;
continue;
} else {
var temp__4425__auto___22447__$1 = cljs.core.seq.call(null,seq__22405_22438);
if(temp__4425__auto___22447__$1){
var seq__22405_22448__$1 = temp__4425__auto___22447__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22405_22448__$1)){
var c__17622__auto___22449 = cljs.core.chunk_first.call(null,seq__22405_22448__$1);
var G__22450 = cljs.core.chunk_rest.call(null,seq__22405_22448__$1);
var G__22451 = c__17622__auto___22449;
var G__22452 = cljs.core.count.call(null,c__17622__auto___22449);
var G__22453 = (0);
seq__22405_22438 = G__22450;
chunk__22406_22439 = G__22451;
count__22407_22440 = G__22452;
i__22408_22441 = G__22453;
continue;
} else {
var req_22454 = cljs.core.first.call(null,seq__22405_22448__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22454,prov);

var G__22455 = cljs.core.next.call(null,seq__22405_22448__$1);
var G__22456 = null;
var G__22457 = (0);
var G__22458 = (0);
seq__22405_22438 = G__22455;
chunk__22406_22439 = G__22456;
count__22407_22440 = G__22457;
i__22408_22441 = G__22458;
continue;
}
} else {
}
}
break;
}

var G__22459 = cljs.core.next.call(null,seq__22397__$1);
var G__22460 = null;
var G__22461 = (0);
var G__22462 = (0);
seq__22397 = G__22459;
chunk__22398 = G__22460;
count__22399 = G__22461;
i__22400 = G__22462;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22467_22471 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22468_22472 = null;
var count__22469_22473 = (0);
var i__22470_22474 = (0);
while(true){
if((i__22470_22474 < count__22469_22473)){
var ns_22475 = cljs.core._nth.call(null,chunk__22468_22472,i__22470_22474);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22475);

var G__22476 = seq__22467_22471;
var G__22477 = chunk__22468_22472;
var G__22478 = count__22469_22473;
var G__22479 = (i__22470_22474 + (1));
seq__22467_22471 = G__22476;
chunk__22468_22472 = G__22477;
count__22469_22473 = G__22478;
i__22470_22474 = G__22479;
continue;
} else {
var temp__4425__auto___22480 = cljs.core.seq.call(null,seq__22467_22471);
if(temp__4425__auto___22480){
var seq__22467_22481__$1 = temp__4425__auto___22480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22467_22481__$1)){
var c__17622__auto___22482 = cljs.core.chunk_first.call(null,seq__22467_22481__$1);
var G__22483 = cljs.core.chunk_rest.call(null,seq__22467_22481__$1);
var G__22484 = c__17622__auto___22482;
var G__22485 = cljs.core.count.call(null,c__17622__auto___22482);
var G__22486 = (0);
seq__22467_22471 = G__22483;
chunk__22468_22472 = G__22484;
count__22469_22473 = G__22485;
i__22470_22474 = G__22486;
continue;
} else {
var ns_22487 = cljs.core.first.call(null,seq__22467_22481__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22487);

var G__22488 = cljs.core.next.call(null,seq__22467_22481__$1);
var G__22489 = null;
var G__22490 = (0);
var G__22491 = (0);
seq__22467_22471 = G__22488;
chunk__22468_22472 = G__22489;
count__22469_22473 = G__22490;
i__22470_22474 = G__22491;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16819__auto__ = goog.require__;
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__22492__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22492 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22493__i = 0, G__22493__a = new Array(arguments.length -  0);
while (G__22493__i < G__22493__a.length) {G__22493__a[G__22493__i] = arguments[G__22493__i + 0]; ++G__22493__i;}
  args = new cljs.core.IndexedSeq(G__22493__a,0);
} 
return G__22492__delegate.call(this,args);};
G__22492.cljs$lang$maxFixedArity = 0;
G__22492.cljs$lang$applyTo = (function (arglist__22494){
var args = cljs.core.seq(arglist__22494);
return G__22492__delegate(args);
});
G__22492.cljs$core$IFn$_invoke$arity$variadic = G__22492__delegate;
return G__22492;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22496 = cljs.core._EQ_;
var expr__22497 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22496.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22497))){
var path_parts = ((function (pred__22496,expr__22497){
return (function (p1__22495_SHARP_){
return clojure.string.split.call(null,p1__22495_SHARP_,/[\/\\]/);
});})(pred__22496,expr__22497))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22496,expr__22497){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22499){if((e22499 instanceof Error)){
var e = e22499;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22499;

}
}})());
});
;})(path_parts,sep,root,pred__22496,expr__22497))
} else {
if(cljs.core.truth_(pred__22496.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22497))){
return ((function (pred__22496,expr__22497){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22496,expr__22497){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22496,expr__22497))
);

return deferred.addErrback(((function (deferred,pred__22496,expr__22497){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22496,expr__22497))
);
});
;})(pred__22496,expr__22497))
} else {
return ((function (pred__22496,expr__22497){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22496,expr__22497))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22500,callback){
var map__22503 = p__22500;
var map__22503__$1 = ((((!((map__22503 == null)))?((((map__22503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22503):map__22503);
var file_msg = map__22503__$1;
var request_url = cljs.core.get.call(null,map__22503__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22503,map__22503__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22503,map__22503__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__18986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto__){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto__){
return (function (state_22527){
var state_val_22528 = (state_22527[(1)]);
if((state_val_22528 === (7))){
var inst_22523 = (state_22527[(2)]);
var state_22527__$1 = state_22527;
var statearr_22529_22549 = state_22527__$1;
(statearr_22529_22549[(2)] = inst_22523);

(statearr_22529_22549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22528 === (1))){
var state_22527__$1 = state_22527;
var statearr_22530_22550 = state_22527__$1;
(statearr_22530_22550[(2)] = null);

(statearr_22530_22550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22528 === (4))){
var inst_22507 = (state_22527[(7)]);
var inst_22507__$1 = (state_22527[(2)]);
var state_22527__$1 = (function (){var statearr_22531 = state_22527;
(statearr_22531[(7)] = inst_22507__$1);

return statearr_22531;
})();
if(cljs.core.truth_(inst_22507__$1)){
var statearr_22532_22551 = state_22527__$1;
(statearr_22532_22551[(1)] = (5));

} else {
var statearr_22533_22552 = state_22527__$1;
(statearr_22533_22552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22528 === (6))){
var state_22527__$1 = state_22527;
var statearr_22534_22553 = state_22527__$1;
(statearr_22534_22553[(2)] = null);

(statearr_22534_22553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22528 === (3))){
var inst_22525 = (state_22527[(2)]);
var state_22527__$1 = state_22527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22527__$1,inst_22525);
} else {
if((state_val_22528 === (2))){
var state_22527__$1 = state_22527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22527__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22528 === (11))){
var inst_22519 = (state_22527[(2)]);
var state_22527__$1 = (function (){var statearr_22535 = state_22527;
(statearr_22535[(8)] = inst_22519);

return statearr_22535;
})();
var statearr_22536_22554 = state_22527__$1;
(statearr_22536_22554[(2)] = null);

(statearr_22536_22554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22528 === (9))){
var inst_22511 = (state_22527[(9)]);
var inst_22513 = (state_22527[(10)]);
var inst_22515 = inst_22513.call(null,inst_22511);
var state_22527__$1 = state_22527;
var statearr_22537_22555 = state_22527__$1;
(statearr_22537_22555[(2)] = inst_22515);

(statearr_22537_22555[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22528 === (5))){
var inst_22507 = (state_22527[(7)]);
var inst_22509 = figwheel.client.file_reloading.blocking_load.call(null,inst_22507);
var state_22527__$1 = state_22527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22527__$1,(8),inst_22509);
} else {
if((state_val_22528 === (10))){
var inst_22511 = (state_22527[(9)]);
var inst_22517 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22511);
var state_22527__$1 = state_22527;
var statearr_22538_22556 = state_22527__$1;
(statearr_22538_22556[(2)] = inst_22517);

(statearr_22538_22556[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22528 === (8))){
var inst_22513 = (state_22527[(10)]);
var inst_22507 = (state_22527[(7)]);
var inst_22511 = (state_22527[(2)]);
var inst_22512 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22513__$1 = cljs.core.get.call(null,inst_22512,inst_22507);
var state_22527__$1 = (function (){var statearr_22539 = state_22527;
(statearr_22539[(9)] = inst_22511);

(statearr_22539[(10)] = inst_22513__$1);

return statearr_22539;
})();
if(cljs.core.truth_(inst_22513__$1)){
var statearr_22540_22557 = state_22527__$1;
(statearr_22540_22557[(1)] = (9));

} else {
var statearr_22541_22558 = state_22527__$1;
(statearr_22541_22558[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18986__auto__))
;
return ((function (switch__18874__auto__,c__18986__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18875__auto__ = null;
var figwheel$client$file_reloading$state_machine__18875__auto____0 = (function (){
var statearr_22545 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22545[(0)] = figwheel$client$file_reloading$state_machine__18875__auto__);

(statearr_22545[(1)] = (1));

return statearr_22545;
});
var figwheel$client$file_reloading$state_machine__18875__auto____1 = (function (state_22527){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_22527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e22546){if((e22546 instanceof Object)){
var ex__18878__auto__ = e22546;
var statearr_22547_22559 = state_22527;
(statearr_22547_22559[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22560 = state_22527;
state_22527 = G__22560;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18875__auto__ = function(state_22527){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18875__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18875__auto____1.call(this,state_22527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18875__auto____0;
figwheel$client$file_reloading$state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18875__auto____1;
return figwheel$client$file_reloading$state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto__))
})();
var state__18988__auto__ = (function (){var statearr_22548 = f__18987__auto__.call(null);
(statearr_22548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto__);

return statearr_22548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto__))
);

return c__18986__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22561,callback){
var map__22564 = p__22561;
var map__22564__$1 = ((((!((map__22564 == null)))?((((map__22564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22564):map__22564);
var file_msg = map__22564__$1;
var namespace = cljs.core.get.call(null,map__22564__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22564,map__22564__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22564,map__22564__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22566){
var map__22569 = p__22566;
var map__22569__$1 = ((((!((map__22569 == null)))?((((map__22569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22569):map__22569);
var file_msg = map__22569__$1;
var namespace = cljs.core.get.call(null,map__22569__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16807__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16807__auto__){
var or__16819__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
var or__16819__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16819__auto____$1)){
return or__16819__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16807__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22571,callback){
var map__22574 = p__22571;
var map__22574__$1 = ((((!((map__22574 == null)))?((((map__22574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22574):map__22574);
var file_msg = map__22574__$1;
var request_url = cljs.core.get.call(null,map__22574__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22574__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18986__auto___22662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto___22662,out){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto___22662,out){
return (function (state_22644){
var state_val_22645 = (state_22644[(1)]);
if((state_val_22645 === (1))){
var inst_22622 = cljs.core.nth.call(null,files,(0),null);
var inst_22623 = cljs.core.nthnext.call(null,files,(1));
var inst_22624 = files;
var state_22644__$1 = (function (){var statearr_22646 = state_22644;
(statearr_22646[(7)] = inst_22622);

(statearr_22646[(8)] = inst_22623);

(statearr_22646[(9)] = inst_22624);

return statearr_22646;
})();
var statearr_22647_22663 = state_22644__$1;
(statearr_22647_22663[(2)] = null);

(statearr_22647_22663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (2))){
var inst_22627 = (state_22644[(10)]);
var inst_22624 = (state_22644[(9)]);
var inst_22627__$1 = cljs.core.nth.call(null,inst_22624,(0),null);
var inst_22628 = cljs.core.nthnext.call(null,inst_22624,(1));
var inst_22629 = (inst_22627__$1 == null);
var inst_22630 = cljs.core.not.call(null,inst_22629);
var state_22644__$1 = (function (){var statearr_22648 = state_22644;
(statearr_22648[(10)] = inst_22627__$1);

(statearr_22648[(11)] = inst_22628);

return statearr_22648;
})();
if(inst_22630){
var statearr_22649_22664 = state_22644__$1;
(statearr_22649_22664[(1)] = (4));

} else {
var statearr_22650_22665 = state_22644__$1;
(statearr_22650_22665[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (3))){
var inst_22642 = (state_22644[(2)]);
var state_22644__$1 = state_22644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22644__$1,inst_22642);
} else {
if((state_val_22645 === (4))){
var inst_22627 = (state_22644[(10)]);
var inst_22632 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22627);
var state_22644__$1 = state_22644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22644__$1,(7),inst_22632);
} else {
if((state_val_22645 === (5))){
var inst_22638 = cljs.core.async.close_BANG_.call(null,out);
var state_22644__$1 = state_22644;
var statearr_22651_22666 = state_22644__$1;
(statearr_22651_22666[(2)] = inst_22638);

(statearr_22651_22666[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (6))){
var inst_22640 = (state_22644[(2)]);
var state_22644__$1 = state_22644;
var statearr_22652_22667 = state_22644__$1;
(statearr_22652_22667[(2)] = inst_22640);

(statearr_22652_22667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (7))){
var inst_22628 = (state_22644[(11)]);
var inst_22634 = (state_22644[(2)]);
var inst_22635 = cljs.core.async.put_BANG_.call(null,out,inst_22634);
var inst_22624 = inst_22628;
var state_22644__$1 = (function (){var statearr_22653 = state_22644;
(statearr_22653[(12)] = inst_22635);

(statearr_22653[(9)] = inst_22624);

return statearr_22653;
})();
var statearr_22654_22668 = state_22644__$1;
(statearr_22654_22668[(2)] = null);

(statearr_22654_22668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__18986__auto___22662,out))
;
return ((function (switch__18874__auto__,c__18986__auto___22662,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18875__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18875__auto____0 = (function (){
var statearr_22658 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22658[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18875__auto__);

(statearr_22658[(1)] = (1));

return statearr_22658;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18875__auto____1 = (function (state_22644){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_22644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e22659){if((e22659 instanceof Object)){
var ex__18878__auto__ = e22659;
var statearr_22660_22669 = state_22644;
(statearr_22660_22669[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22670 = state_22644;
state_22644 = G__22670;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18875__auto__ = function(state_22644){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18875__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18875__auto____1.call(this,state_22644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18875__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18875__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto___22662,out))
})();
var state__18988__auto__ = (function (){var statearr_22661 = f__18987__auto__.call(null);
(statearr_22661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto___22662);

return statearr_22661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto___22662,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22671,opts){
var map__22675 = p__22671;
var map__22675__$1 = ((((!((map__22675 == null)))?((((map__22675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22675):map__22675);
var eval_body__$1 = cljs.core.get.call(null,map__22675__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22675__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16807__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16807__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16807__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22677){var e = e22677;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22678_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22678_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__22683){
var vec__22684 = p__22683;
var k = cljs.core.nth.call(null,vec__22684,(0),null);
var v = cljs.core.nth.call(null,vec__22684,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22685){
var vec__22686 = p__22685;
var k = cljs.core.nth.call(null,vec__22686,(0),null);
var v = cljs.core.nth.call(null,vec__22686,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22690,p__22691){
var map__22938 = p__22690;
var map__22938__$1 = ((((!((map__22938 == null)))?((((map__22938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22938):map__22938);
var opts = map__22938__$1;
var before_jsload = cljs.core.get.call(null,map__22938__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22938__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__22938__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__22939 = p__22691;
var map__22939__$1 = ((((!((map__22939 == null)))?((((map__22939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22939):map__22939);
var msg = map__22939__$1;
var files = cljs.core.get.call(null,map__22939__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__22939__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__22939__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto__,map__22938,map__22938__$1,opts,before_jsload,on_jsload,reload_dependents,map__22939,map__22939__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto__,map__22938,map__22938__$1,opts,before_jsload,on_jsload,reload_dependents,map__22939,map__22939__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23092){
var state_val_23093 = (state_23092[(1)]);
if((state_val_23093 === (7))){
var inst_22954 = (state_23092[(7)]);
var inst_22955 = (state_23092[(8)]);
var inst_22956 = (state_23092[(9)]);
var inst_22953 = (state_23092[(10)]);
var inst_22961 = cljs.core._nth.call(null,inst_22954,inst_22956);
var inst_22962 = figwheel.client.file_reloading.eval_body.call(null,inst_22961,opts);
var inst_22963 = (inst_22956 + (1));
var tmp23094 = inst_22954;
var tmp23095 = inst_22955;
var tmp23096 = inst_22953;
var inst_22953__$1 = tmp23096;
var inst_22954__$1 = tmp23094;
var inst_22955__$1 = tmp23095;
var inst_22956__$1 = inst_22963;
var state_23092__$1 = (function (){var statearr_23097 = state_23092;
(statearr_23097[(7)] = inst_22954__$1);

(statearr_23097[(8)] = inst_22955__$1);

(statearr_23097[(11)] = inst_22962);

(statearr_23097[(9)] = inst_22956__$1);

(statearr_23097[(10)] = inst_22953__$1);

return statearr_23097;
})();
var statearr_23098_23184 = state_23092__$1;
(statearr_23098_23184[(2)] = null);

(statearr_23098_23184[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (20))){
var inst_22996 = (state_23092[(12)]);
var inst_23004 = figwheel.client.file_reloading.sort_files.call(null,inst_22996);
var state_23092__$1 = state_23092;
var statearr_23099_23185 = state_23092__$1;
(statearr_23099_23185[(2)] = inst_23004);

(statearr_23099_23185[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (27))){
var state_23092__$1 = state_23092;
var statearr_23100_23186 = state_23092__$1;
(statearr_23100_23186[(2)] = null);

(statearr_23100_23186[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (1))){
var inst_22945 = (state_23092[(13)]);
var inst_22942 = before_jsload.call(null,files);
var inst_22943 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22944 = (function (){return ((function (inst_22945,inst_22942,inst_22943,state_val_23093,c__18986__auto__,map__22938,map__22938__$1,opts,before_jsload,on_jsload,reload_dependents,map__22939,map__22939__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22687_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22687_SHARP_);
});
;})(inst_22945,inst_22942,inst_22943,state_val_23093,c__18986__auto__,map__22938,map__22938__$1,opts,before_jsload,on_jsload,reload_dependents,map__22939,map__22939__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22945__$1 = cljs.core.filter.call(null,inst_22944,files);
var inst_22946 = cljs.core.not_empty.call(null,inst_22945__$1);
var state_23092__$1 = (function (){var statearr_23101 = state_23092;
(statearr_23101[(13)] = inst_22945__$1);

(statearr_23101[(14)] = inst_22942);

(statearr_23101[(15)] = inst_22943);

return statearr_23101;
})();
if(cljs.core.truth_(inst_22946)){
var statearr_23102_23187 = state_23092__$1;
(statearr_23102_23187[(1)] = (2));

} else {
var statearr_23103_23188 = state_23092__$1;
(statearr_23103_23188[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (24))){
var state_23092__$1 = state_23092;
var statearr_23104_23189 = state_23092__$1;
(statearr_23104_23189[(2)] = null);

(statearr_23104_23189[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (39))){
var inst_23046 = (state_23092[(16)]);
var state_23092__$1 = state_23092;
var statearr_23105_23190 = state_23092__$1;
(statearr_23105_23190[(2)] = inst_23046);

(statearr_23105_23190[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (46))){
var inst_23087 = (state_23092[(2)]);
var state_23092__$1 = state_23092;
var statearr_23106_23191 = state_23092__$1;
(statearr_23106_23191[(2)] = inst_23087);

(statearr_23106_23191[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (4))){
var inst_22990 = (state_23092[(2)]);
var inst_22991 = cljs.core.List.EMPTY;
var inst_22992 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_22991);
var inst_22993 = (function (){return ((function (inst_22990,inst_22991,inst_22992,state_val_23093,c__18986__auto__,map__22938,map__22938__$1,opts,before_jsload,on_jsload,reload_dependents,map__22939,map__22939__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22688_SHARP_){
var and__16807__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22688_SHARP_);
if(cljs.core.truth_(and__16807__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22688_SHARP_));
} else {
return and__16807__auto__;
}
});
;})(inst_22990,inst_22991,inst_22992,state_val_23093,c__18986__auto__,map__22938,map__22938__$1,opts,before_jsload,on_jsload,reload_dependents,map__22939,map__22939__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22994 = cljs.core.filter.call(null,inst_22993,files);
var inst_22995 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_22996 = cljs.core.concat.call(null,inst_22994,inst_22995);
var state_23092__$1 = (function (){var statearr_23107 = state_23092;
(statearr_23107[(17)] = inst_22992);

(statearr_23107[(12)] = inst_22996);

(statearr_23107[(18)] = inst_22990);

return statearr_23107;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23108_23192 = state_23092__$1;
(statearr_23108_23192[(1)] = (16));

} else {
var statearr_23109_23193 = state_23092__$1;
(statearr_23109_23193[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (15))){
var inst_22980 = (state_23092[(2)]);
var state_23092__$1 = state_23092;
var statearr_23110_23194 = state_23092__$1;
(statearr_23110_23194[(2)] = inst_22980);

(statearr_23110_23194[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (21))){
var inst_23006 = (state_23092[(19)]);
var inst_23006__$1 = (state_23092[(2)]);
var inst_23007 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23006__$1);
var state_23092__$1 = (function (){var statearr_23111 = state_23092;
(statearr_23111[(19)] = inst_23006__$1);

return statearr_23111;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23092__$1,(22),inst_23007);
} else {
if((state_val_23093 === (31))){
var inst_23090 = (state_23092[(2)]);
var state_23092__$1 = state_23092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23092__$1,inst_23090);
} else {
if((state_val_23093 === (32))){
var inst_23046 = (state_23092[(16)]);
var inst_23051 = inst_23046.cljs$lang$protocol_mask$partition0$;
var inst_23052 = (inst_23051 & (64));
var inst_23053 = inst_23046.cljs$core$ISeq$;
var inst_23054 = (inst_23052) || (inst_23053);
var state_23092__$1 = state_23092;
if(cljs.core.truth_(inst_23054)){
var statearr_23112_23195 = state_23092__$1;
(statearr_23112_23195[(1)] = (35));

} else {
var statearr_23113_23196 = state_23092__$1;
(statearr_23113_23196[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (40))){
var inst_23067 = (state_23092[(20)]);
var inst_23066 = (state_23092[(2)]);
var inst_23067__$1 = cljs.core.get.call(null,inst_23066,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23068 = cljs.core.get.call(null,inst_23066,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23069 = cljs.core.not_empty.call(null,inst_23067__$1);
var state_23092__$1 = (function (){var statearr_23114 = state_23092;
(statearr_23114[(21)] = inst_23068);

(statearr_23114[(20)] = inst_23067__$1);

return statearr_23114;
})();
if(cljs.core.truth_(inst_23069)){
var statearr_23115_23197 = state_23092__$1;
(statearr_23115_23197[(1)] = (41));

} else {
var statearr_23116_23198 = state_23092__$1;
(statearr_23116_23198[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (33))){
var state_23092__$1 = state_23092;
var statearr_23117_23199 = state_23092__$1;
(statearr_23117_23199[(2)] = false);

(statearr_23117_23199[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (13))){
var inst_22966 = (state_23092[(22)]);
var inst_22970 = cljs.core.chunk_first.call(null,inst_22966);
var inst_22971 = cljs.core.chunk_rest.call(null,inst_22966);
var inst_22972 = cljs.core.count.call(null,inst_22970);
var inst_22953 = inst_22971;
var inst_22954 = inst_22970;
var inst_22955 = inst_22972;
var inst_22956 = (0);
var state_23092__$1 = (function (){var statearr_23118 = state_23092;
(statearr_23118[(7)] = inst_22954);

(statearr_23118[(8)] = inst_22955);

(statearr_23118[(9)] = inst_22956);

(statearr_23118[(10)] = inst_22953);

return statearr_23118;
})();
var statearr_23119_23200 = state_23092__$1;
(statearr_23119_23200[(2)] = null);

(statearr_23119_23200[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (22))){
var inst_23014 = (state_23092[(23)]);
var inst_23006 = (state_23092[(19)]);
var inst_23009 = (state_23092[(24)]);
var inst_23010 = (state_23092[(25)]);
var inst_23009__$1 = (state_23092[(2)]);
var inst_23010__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23009__$1);
var inst_23011 = (function (){var all_files = inst_23006;
var res_SINGLEQUOTE_ = inst_23009__$1;
var res = inst_23010__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23014,inst_23006,inst_23009,inst_23010,inst_23009__$1,inst_23010__$1,state_val_23093,c__18986__auto__,map__22938,map__22938__$1,opts,before_jsload,on_jsload,reload_dependents,map__22939,map__22939__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22689_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22689_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23014,inst_23006,inst_23009,inst_23010,inst_23009__$1,inst_23010__$1,state_val_23093,c__18986__auto__,map__22938,map__22938__$1,opts,before_jsload,on_jsload,reload_dependents,map__22939,map__22939__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23012 = cljs.core.filter.call(null,inst_23011,inst_23009__$1);
var inst_23013 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23014__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23013);
var inst_23015 = cljs.core.not_empty.call(null,inst_23014__$1);
var state_23092__$1 = (function (){var statearr_23120 = state_23092;
(statearr_23120[(26)] = inst_23012);

(statearr_23120[(23)] = inst_23014__$1);

(statearr_23120[(24)] = inst_23009__$1);

(statearr_23120[(25)] = inst_23010__$1);

return statearr_23120;
})();
if(cljs.core.truth_(inst_23015)){
var statearr_23121_23201 = state_23092__$1;
(statearr_23121_23201[(1)] = (23));

} else {
var statearr_23122_23202 = state_23092__$1;
(statearr_23122_23202[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (36))){
var state_23092__$1 = state_23092;
var statearr_23123_23203 = state_23092__$1;
(statearr_23123_23203[(2)] = false);

(statearr_23123_23203[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (41))){
var inst_23067 = (state_23092[(20)]);
var inst_23071 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23072 = cljs.core.map.call(null,inst_23071,inst_23067);
var inst_23073 = cljs.core.pr_str.call(null,inst_23072);
var inst_23074 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23073)].join('');
var inst_23075 = figwheel.client.utils.log.call(null,inst_23074);
var state_23092__$1 = state_23092;
var statearr_23124_23204 = state_23092__$1;
(statearr_23124_23204[(2)] = inst_23075);

(statearr_23124_23204[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (43))){
var inst_23068 = (state_23092[(21)]);
var inst_23078 = (state_23092[(2)]);
var inst_23079 = cljs.core.not_empty.call(null,inst_23068);
var state_23092__$1 = (function (){var statearr_23125 = state_23092;
(statearr_23125[(27)] = inst_23078);

return statearr_23125;
})();
if(cljs.core.truth_(inst_23079)){
var statearr_23126_23205 = state_23092__$1;
(statearr_23126_23205[(1)] = (44));

} else {
var statearr_23127_23206 = state_23092__$1;
(statearr_23127_23206[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (29))){
var inst_23012 = (state_23092[(26)]);
var inst_23014 = (state_23092[(23)]);
var inst_23006 = (state_23092[(19)]);
var inst_23009 = (state_23092[(24)]);
var inst_23010 = (state_23092[(25)]);
var inst_23046 = (state_23092[(16)]);
var inst_23042 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23045 = (function (){var all_files = inst_23006;
var res_SINGLEQUOTE_ = inst_23009;
var res = inst_23010;
var files_not_loaded = inst_23012;
var dependencies_that_loaded = inst_23014;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23012,inst_23014,inst_23006,inst_23009,inst_23010,inst_23046,inst_23042,state_val_23093,c__18986__auto__,map__22938,map__22938__$1,opts,before_jsload,on_jsload,reload_dependents,map__22939,map__22939__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23044){
var map__23128 = p__23044;
var map__23128__$1 = ((((!((map__23128 == null)))?((((map__23128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23128):map__23128);
var namespace = cljs.core.get.call(null,map__23128__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23012,inst_23014,inst_23006,inst_23009,inst_23010,inst_23046,inst_23042,state_val_23093,c__18986__auto__,map__22938,map__22938__$1,opts,before_jsload,on_jsload,reload_dependents,map__22939,map__22939__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23046__$1 = cljs.core.group_by.call(null,inst_23045,inst_23012);
var inst_23048 = (inst_23046__$1 == null);
var inst_23049 = cljs.core.not.call(null,inst_23048);
var state_23092__$1 = (function (){var statearr_23130 = state_23092;
(statearr_23130[(28)] = inst_23042);

(statearr_23130[(16)] = inst_23046__$1);

return statearr_23130;
})();
if(inst_23049){
var statearr_23131_23207 = state_23092__$1;
(statearr_23131_23207[(1)] = (32));

} else {
var statearr_23132_23208 = state_23092__$1;
(statearr_23132_23208[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (44))){
var inst_23068 = (state_23092[(21)]);
var inst_23081 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23068);
var inst_23082 = cljs.core.pr_str.call(null,inst_23081);
var inst_23083 = [cljs.core.str("not required: "),cljs.core.str(inst_23082)].join('');
var inst_23084 = figwheel.client.utils.log.call(null,inst_23083);
var state_23092__$1 = state_23092;
var statearr_23133_23209 = state_23092__$1;
(statearr_23133_23209[(2)] = inst_23084);

(statearr_23133_23209[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (6))){
var inst_22987 = (state_23092[(2)]);
var state_23092__$1 = state_23092;
var statearr_23134_23210 = state_23092__$1;
(statearr_23134_23210[(2)] = inst_22987);

(statearr_23134_23210[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (28))){
var inst_23012 = (state_23092[(26)]);
var inst_23039 = (state_23092[(2)]);
var inst_23040 = cljs.core.not_empty.call(null,inst_23012);
var state_23092__$1 = (function (){var statearr_23135 = state_23092;
(statearr_23135[(29)] = inst_23039);

return statearr_23135;
})();
if(cljs.core.truth_(inst_23040)){
var statearr_23136_23211 = state_23092__$1;
(statearr_23136_23211[(1)] = (29));

} else {
var statearr_23137_23212 = state_23092__$1;
(statearr_23137_23212[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (25))){
var inst_23010 = (state_23092[(25)]);
var inst_23026 = (state_23092[(2)]);
var inst_23027 = cljs.core.not_empty.call(null,inst_23010);
var state_23092__$1 = (function (){var statearr_23138 = state_23092;
(statearr_23138[(30)] = inst_23026);

return statearr_23138;
})();
if(cljs.core.truth_(inst_23027)){
var statearr_23139_23213 = state_23092__$1;
(statearr_23139_23213[(1)] = (26));

} else {
var statearr_23140_23214 = state_23092__$1;
(statearr_23140_23214[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (34))){
var inst_23061 = (state_23092[(2)]);
var state_23092__$1 = state_23092;
if(cljs.core.truth_(inst_23061)){
var statearr_23141_23215 = state_23092__$1;
(statearr_23141_23215[(1)] = (38));

} else {
var statearr_23142_23216 = state_23092__$1;
(statearr_23142_23216[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (17))){
var state_23092__$1 = state_23092;
var statearr_23143_23217 = state_23092__$1;
(statearr_23143_23217[(2)] = recompile_dependents);

(statearr_23143_23217[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (3))){
var state_23092__$1 = state_23092;
var statearr_23144_23218 = state_23092__$1;
(statearr_23144_23218[(2)] = null);

(statearr_23144_23218[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (12))){
var inst_22983 = (state_23092[(2)]);
var state_23092__$1 = state_23092;
var statearr_23145_23219 = state_23092__$1;
(statearr_23145_23219[(2)] = inst_22983);

(statearr_23145_23219[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (2))){
var inst_22945 = (state_23092[(13)]);
var inst_22952 = cljs.core.seq.call(null,inst_22945);
var inst_22953 = inst_22952;
var inst_22954 = null;
var inst_22955 = (0);
var inst_22956 = (0);
var state_23092__$1 = (function (){var statearr_23146 = state_23092;
(statearr_23146[(7)] = inst_22954);

(statearr_23146[(8)] = inst_22955);

(statearr_23146[(9)] = inst_22956);

(statearr_23146[(10)] = inst_22953);

return statearr_23146;
})();
var statearr_23147_23220 = state_23092__$1;
(statearr_23147_23220[(2)] = null);

(statearr_23147_23220[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (23))){
var inst_23012 = (state_23092[(26)]);
var inst_23014 = (state_23092[(23)]);
var inst_23006 = (state_23092[(19)]);
var inst_23009 = (state_23092[(24)]);
var inst_23010 = (state_23092[(25)]);
var inst_23017 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23019 = (function (){var all_files = inst_23006;
var res_SINGLEQUOTE_ = inst_23009;
var res = inst_23010;
var files_not_loaded = inst_23012;
var dependencies_that_loaded = inst_23014;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23012,inst_23014,inst_23006,inst_23009,inst_23010,inst_23017,state_val_23093,c__18986__auto__,map__22938,map__22938__$1,opts,before_jsload,on_jsload,reload_dependents,map__22939,map__22939__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23018){
var map__23148 = p__23018;
var map__23148__$1 = ((((!((map__23148 == null)))?((((map__23148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23148):map__23148);
var request_url = cljs.core.get.call(null,map__23148__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23012,inst_23014,inst_23006,inst_23009,inst_23010,inst_23017,state_val_23093,c__18986__auto__,map__22938,map__22938__$1,opts,before_jsload,on_jsload,reload_dependents,map__22939,map__22939__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23020 = cljs.core.reverse.call(null,inst_23014);
var inst_23021 = cljs.core.map.call(null,inst_23019,inst_23020);
var inst_23022 = cljs.core.pr_str.call(null,inst_23021);
var inst_23023 = figwheel.client.utils.log.call(null,inst_23022);
var state_23092__$1 = (function (){var statearr_23150 = state_23092;
(statearr_23150[(31)] = inst_23017);

return statearr_23150;
})();
var statearr_23151_23221 = state_23092__$1;
(statearr_23151_23221[(2)] = inst_23023);

(statearr_23151_23221[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (35))){
var state_23092__$1 = state_23092;
var statearr_23152_23222 = state_23092__$1;
(statearr_23152_23222[(2)] = true);

(statearr_23152_23222[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (19))){
var inst_22996 = (state_23092[(12)]);
var inst_23002 = figwheel.client.file_reloading.expand_files.call(null,inst_22996);
var state_23092__$1 = state_23092;
var statearr_23153_23223 = state_23092__$1;
(statearr_23153_23223[(2)] = inst_23002);

(statearr_23153_23223[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (11))){
var state_23092__$1 = state_23092;
var statearr_23154_23224 = state_23092__$1;
(statearr_23154_23224[(2)] = null);

(statearr_23154_23224[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (9))){
var inst_22985 = (state_23092[(2)]);
var state_23092__$1 = state_23092;
var statearr_23155_23225 = state_23092__$1;
(statearr_23155_23225[(2)] = inst_22985);

(statearr_23155_23225[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (5))){
var inst_22955 = (state_23092[(8)]);
var inst_22956 = (state_23092[(9)]);
var inst_22958 = (inst_22956 < inst_22955);
var inst_22959 = inst_22958;
var state_23092__$1 = state_23092;
if(cljs.core.truth_(inst_22959)){
var statearr_23156_23226 = state_23092__$1;
(statearr_23156_23226[(1)] = (7));

} else {
var statearr_23157_23227 = state_23092__$1;
(statearr_23157_23227[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (14))){
var inst_22966 = (state_23092[(22)]);
var inst_22975 = cljs.core.first.call(null,inst_22966);
var inst_22976 = figwheel.client.file_reloading.eval_body.call(null,inst_22975,opts);
var inst_22977 = cljs.core.next.call(null,inst_22966);
var inst_22953 = inst_22977;
var inst_22954 = null;
var inst_22955 = (0);
var inst_22956 = (0);
var state_23092__$1 = (function (){var statearr_23158 = state_23092;
(statearr_23158[(7)] = inst_22954);

(statearr_23158[(32)] = inst_22976);

(statearr_23158[(8)] = inst_22955);

(statearr_23158[(9)] = inst_22956);

(statearr_23158[(10)] = inst_22953);

return statearr_23158;
})();
var statearr_23159_23228 = state_23092__$1;
(statearr_23159_23228[(2)] = null);

(statearr_23159_23228[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (45))){
var state_23092__$1 = state_23092;
var statearr_23160_23229 = state_23092__$1;
(statearr_23160_23229[(2)] = null);

(statearr_23160_23229[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (26))){
var inst_23012 = (state_23092[(26)]);
var inst_23014 = (state_23092[(23)]);
var inst_23006 = (state_23092[(19)]);
var inst_23009 = (state_23092[(24)]);
var inst_23010 = (state_23092[(25)]);
var inst_23029 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23031 = (function (){var all_files = inst_23006;
var res_SINGLEQUOTE_ = inst_23009;
var res = inst_23010;
var files_not_loaded = inst_23012;
var dependencies_that_loaded = inst_23014;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23012,inst_23014,inst_23006,inst_23009,inst_23010,inst_23029,state_val_23093,c__18986__auto__,map__22938,map__22938__$1,opts,before_jsload,on_jsload,reload_dependents,map__22939,map__22939__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23030){
var map__23161 = p__23030;
var map__23161__$1 = ((((!((map__23161 == null)))?((((map__23161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23161):map__23161);
var namespace = cljs.core.get.call(null,map__23161__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23161__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23012,inst_23014,inst_23006,inst_23009,inst_23010,inst_23029,state_val_23093,c__18986__auto__,map__22938,map__22938__$1,opts,before_jsload,on_jsload,reload_dependents,map__22939,map__22939__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23032 = cljs.core.map.call(null,inst_23031,inst_23010);
var inst_23033 = cljs.core.pr_str.call(null,inst_23032);
var inst_23034 = figwheel.client.utils.log.call(null,inst_23033);
var inst_23035 = (function (){var all_files = inst_23006;
var res_SINGLEQUOTE_ = inst_23009;
var res = inst_23010;
var files_not_loaded = inst_23012;
var dependencies_that_loaded = inst_23014;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23012,inst_23014,inst_23006,inst_23009,inst_23010,inst_23029,inst_23031,inst_23032,inst_23033,inst_23034,state_val_23093,c__18986__auto__,map__22938,map__22938__$1,opts,before_jsload,on_jsload,reload_dependents,map__22939,map__22939__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23012,inst_23014,inst_23006,inst_23009,inst_23010,inst_23029,inst_23031,inst_23032,inst_23033,inst_23034,state_val_23093,c__18986__auto__,map__22938,map__22938__$1,opts,before_jsload,on_jsload,reload_dependents,map__22939,map__22939__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23036 = setTimeout(inst_23035,(10));
var state_23092__$1 = (function (){var statearr_23163 = state_23092;
(statearr_23163[(33)] = inst_23029);

(statearr_23163[(34)] = inst_23034);

return statearr_23163;
})();
var statearr_23164_23230 = state_23092__$1;
(statearr_23164_23230[(2)] = inst_23036);

(statearr_23164_23230[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (16))){
var state_23092__$1 = state_23092;
var statearr_23165_23231 = state_23092__$1;
(statearr_23165_23231[(2)] = reload_dependents);

(statearr_23165_23231[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (38))){
var inst_23046 = (state_23092[(16)]);
var inst_23063 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23046);
var state_23092__$1 = state_23092;
var statearr_23166_23232 = state_23092__$1;
(statearr_23166_23232[(2)] = inst_23063);

(statearr_23166_23232[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (30))){
var state_23092__$1 = state_23092;
var statearr_23167_23233 = state_23092__$1;
(statearr_23167_23233[(2)] = null);

(statearr_23167_23233[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (10))){
var inst_22966 = (state_23092[(22)]);
var inst_22968 = cljs.core.chunked_seq_QMARK_.call(null,inst_22966);
var state_23092__$1 = state_23092;
if(inst_22968){
var statearr_23168_23234 = state_23092__$1;
(statearr_23168_23234[(1)] = (13));

} else {
var statearr_23169_23235 = state_23092__$1;
(statearr_23169_23235[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (18))){
var inst_23000 = (state_23092[(2)]);
var state_23092__$1 = state_23092;
if(cljs.core.truth_(inst_23000)){
var statearr_23170_23236 = state_23092__$1;
(statearr_23170_23236[(1)] = (19));

} else {
var statearr_23171_23237 = state_23092__$1;
(statearr_23171_23237[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (42))){
var state_23092__$1 = state_23092;
var statearr_23172_23238 = state_23092__$1;
(statearr_23172_23238[(2)] = null);

(statearr_23172_23238[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (37))){
var inst_23058 = (state_23092[(2)]);
var state_23092__$1 = state_23092;
var statearr_23173_23239 = state_23092__$1;
(statearr_23173_23239[(2)] = inst_23058);

(statearr_23173_23239[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (8))){
var inst_22953 = (state_23092[(10)]);
var inst_22966 = (state_23092[(22)]);
var inst_22966__$1 = cljs.core.seq.call(null,inst_22953);
var state_23092__$1 = (function (){var statearr_23174 = state_23092;
(statearr_23174[(22)] = inst_22966__$1);

return statearr_23174;
})();
if(inst_22966__$1){
var statearr_23175_23240 = state_23092__$1;
(statearr_23175_23240[(1)] = (10));

} else {
var statearr_23176_23241 = state_23092__$1;
(statearr_23176_23241[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18986__auto__,map__22938,map__22938__$1,opts,before_jsload,on_jsload,reload_dependents,map__22939,map__22939__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18874__auto__,c__18986__auto__,map__22938,map__22938__$1,opts,before_jsload,on_jsload,reload_dependents,map__22939,map__22939__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18875__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18875__auto____0 = (function (){
var statearr_23180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23180[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18875__auto__);

(statearr_23180[(1)] = (1));

return statearr_23180;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18875__auto____1 = (function (state_23092){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_23092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e23181){if((e23181 instanceof Object)){
var ex__18878__auto__ = e23181;
var statearr_23182_23242 = state_23092;
(statearr_23182_23242[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23243 = state_23092;
state_23092 = G__23243;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18875__auto__ = function(state_23092){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18875__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18875__auto____1.call(this,state_23092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18875__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18875__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto__,map__22938,map__22938__$1,opts,before_jsload,on_jsload,reload_dependents,map__22939,map__22939__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18988__auto__ = (function (){var statearr_23183 = f__18987__auto__.call(null);
(statearr_23183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto__);

return statearr_23183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto__,map__22938,map__22938__$1,opts,before_jsload,on_jsload,reload_dependents,map__22939,map__22939__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18986__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23246,link){
var map__23249 = p__23246;
var map__23249__$1 = ((((!((map__23249 == null)))?((((map__23249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23249):map__23249);
var file = cljs.core.get.call(null,map__23249__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23249,map__23249__$1,file){
return (function (p1__23244_SHARP_,p2__23245_SHARP_){
if(cljs.core._EQ_.call(null,p1__23244_SHARP_,p2__23245_SHARP_)){
return p1__23244_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23249,map__23249__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23255){
var map__23256 = p__23255;
var map__23256__$1 = ((((!((map__23256 == null)))?((((map__23256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23256):map__23256);
var match_length = cljs.core.get.call(null,map__23256__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23256__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23251_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23251_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args23258 = [];
var len__17877__auto___23261 = arguments.length;
var i__17878__auto___23262 = (0);
while(true){
if((i__17878__auto___23262 < len__17877__auto___23261)){
args23258.push((arguments[i__17878__auto___23262]));

var G__23263 = (i__17878__auto___23262 + (1));
i__17878__auto___23262 = G__23263;
continue;
} else {
}
break;
}

var G__23260 = args23258.length;
switch (G__23260) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23258.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23265_SHARP_,p2__23266_SHARP_){
return cljs.core.assoc.call(null,p1__23265_SHARP_,cljs.core.get.call(null,p2__23266_SHARP_,key),p2__23266_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23267){
var map__23270 = p__23267;
var map__23270__$1 = ((((!((map__23270 == null)))?((((map__23270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23270):map__23270);
var f_data = map__23270__$1;
var file = cljs.core.get.call(null,map__23270__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23272,files_msg){
var map__23279 = p__23272;
var map__23279__$1 = ((((!((map__23279 == null)))?((((map__23279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23279):map__23279);
var opts = map__23279__$1;
var on_cssload = cljs.core.get.call(null,map__23279__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23281_23285 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23282_23286 = null;
var count__23283_23287 = (0);
var i__23284_23288 = (0);
while(true){
if((i__23284_23288 < count__23283_23287)){
var f_23289 = cljs.core._nth.call(null,chunk__23282_23286,i__23284_23288);
figwheel.client.file_reloading.reload_css_file.call(null,f_23289);

var G__23290 = seq__23281_23285;
var G__23291 = chunk__23282_23286;
var G__23292 = count__23283_23287;
var G__23293 = (i__23284_23288 + (1));
seq__23281_23285 = G__23290;
chunk__23282_23286 = G__23291;
count__23283_23287 = G__23292;
i__23284_23288 = G__23293;
continue;
} else {
var temp__4425__auto___23294 = cljs.core.seq.call(null,seq__23281_23285);
if(temp__4425__auto___23294){
var seq__23281_23295__$1 = temp__4425__auto___23294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23281_23295__$1)){
var c__17622__auto___23296 = cljs.core.chunk_first.call(null,seq__23281_23295__$1);
var G__23297 = cljs.core.chunk_rest.call(null,seq__23281_23295__$1);
var G__23298 = c__17622__auto___23296;
var G__23299 = cljs.core.count.call(null,c__17622__auto___23296);
var G__23300 = (0);
seq__23281_23285 = G__23297;
chunk__23282_23286 = G__23298;
count__23283_23287 = G__23299;
i__23284_23288 = G__23300;
continue;
} else {
var f_23301 = cljs.core.first.call(null,seq__23281_23295__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23301);

var G__23302 = cljs.core.next.call(null,seq__23281_23295__$1);
var G__23303 = null;
var G__23304 = (0);
var G__23305 = (0);
seq__23281_23285 = G__23302;
chunk__23282_23286 = G__23303;
count__23283_23287 = G__23304;
i__23284_23288 = G__23305;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23279,map__23279__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23279,map__23279__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map