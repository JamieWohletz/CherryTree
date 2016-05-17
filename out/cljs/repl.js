// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6527_6541 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6528_6542 = null;
var count__6529_6543 = (0);
var i__6530_6544 = (0);
while(true){
if((i__6530_6544 < count__6529_6543)){
var f_6545 = cljs.core._nth.call(null,chunk__6528_6542,i__6530_6544);
cljs.core.println.call(null,"  ",f_6545);

var G__6546 = seq__6527_6541;
var G__6547 = chunk__6528_6542;
var G__6548 = count__6529_6543;
var G__6549 = (i__6530_6544 + (1));
seq__6527_6541 = G__6546;
chunk__6528_6542 = G__6547;
count__6529_6543 = G__6548;
i__6530_6544 = G__6549;
continue;
} else {
var temp__4425__auto___6550 = cljs.core.seq.call(null,seq__6527_6541);
if(temp__4425__auto___6550){
var seq__6527_6551__$1 = temp__4425__auto___6550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6527_6551__$1)){
var c__5474__auto___6552 = cljs.core.chunk_first.call(null,seq__6527_6551__$1);
var G__6553 = cljs.core.chunk_rest.call(null,seq__6527_6551__$1);
var G__6554 = c__5474__auto___6552;
var G__6555 = cljs.core.count.call(null,c__5474__auto___6552);
var G__6556 = (0);
seq__6527_6541 = G__6553;
chunk__6528_6542 = G__6554;
count__6529_6543 = G__6555;
i__6530_6544 = G__6556;
continue;
} else {
var f_6557 = cljs.core.first.call(null,seq__6527_6551__$1);
cljs.core.println.call(null,"  ",f_6557);

var G__6558 = cljs.core.next.call(null,seq__6527_6551__$1);
var G__6559 = null;
var G__6560 = (0);
var G__6561 = (0);
seq__6527_6541 = G__6558;
chunk__6528_6542 = G__6559;
count__6529_6543 = G__6560;
i__6530_6544 = G__6561;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_6562 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4671__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_6562);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_6562)))?cljs.core.second.call(null,arglists_6562):arglists_6562));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6531 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6532 = null;
var count__6533 = (0);
var i__6534 = (0);
while(true){
if((i__6534 < count__6533)){
var vec__6535 = cljs.core._nth.call(null,chunk__6532,i__6534);
var name = cljs.core.nth.call(null,vec__6535,(0),null);
var map__6536 = cljs.core.nth.call(null,vec__6535,(1),null);
var map__6536__$1 = ((((!((map__6536 == null)))?((((map__6536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6536):map__6536);
var doc = cljs.core.get.call(null,map__6536__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__6536__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__6563 = seq__6531;
var G__6564 = chunk__6532;
var G__6565 = count__6533;
var G__6566 = (i__6534 + (1));
seq__6531 = G__6563;
chunk__6532 = G__6564;
count__6533 = G__6565;
i__6534 = G__6566;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6531);
if(temp__4425__auto__){
var seq__6531__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6531__$1)){
var c__5474__auto__ = cljs.core.chunk_first.call(null,seq__6531__$1);
var G__6567 = cljs.core.chunk_rest.call(null,seq__6531__$1);
var G__6568 = c__5474__auto__;
var G__6569 = cljs.core.count.call(null,c__5474__auto__);
var G__6570 = (0);
seq__6531 = G__6567;
chunk__6532 = G__6568;
count__6533 = G__6569;
i__6534 = G__6570;
continue;
} else {
var vec__6538 = cljs.core.first.call(null,seq__6531__$1);
var name = cljs.core.nth.call(null,vec__6538,(0),null);
var map__6539 = cljs.core.nth.call(null,vec__6538,(1),null);
var map__6539__$1 = ((((!((map__6539 == null)))?((((map__6539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6539):map__6539);
var doc = cljs.core.get.call(null,map__6539__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__6539__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__6571 = cljs.core.next.call(null,seq__6531__$1);
var G__6572 = null;
var G__6573 = (0);
var G__6574 = (0);
seq__6531 = G__6571;
chunk__6532 = G__6572;
count__6533 = G__6573;
i__6534 = G__6574;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map