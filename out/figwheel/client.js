// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__23308 = cljs.core._EQ_;
var expr__23309 = (function (){var or__16819__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e23312){if((e23312 instanceof Error)){
var e = e23312;
return false;
} else {
throw e23312;

}
}})();
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23308.call(null,"true",expr__23309))){
return true;
} else {
if(cljs.core.truth_(pred__23308.call(null,"false",expr__23309))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23309)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e23314){if((e23314 instanceof Error)){
var e = e23314;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e23314;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17884__auto__ = [];
var len__17877__auto___23316 = arguments.length;
var i__17878__auto___23317 = (0);
while(true){
if((i__17878__auto___23317 < len__17877__auto___23316)){
args__17884__auto__.push((arguments[i__17878__auto___23317]));

var G__23318 = (i__17878__auto___23317 + (1));
i__17878__auto___23317 = G__23318;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((0) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17885__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq23315){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23315));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23319){
var map__23322 = p__23319;
var map__23322__$1 = ((((!((map__23322 == null)))?((((map__23322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23322):map__23322);
var message = cljs.core.get.call(null,map__23322__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23322__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16819__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16807__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16807__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16807__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18986__auto___23484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto___23484,ch){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto___23484,ch){
return (function (state_23453){
var state_val_23454 = (state_23453[(1)]);
if((state_val_23454 === (7))){
var inst_23449 = (state_23453[(2)]);
var state_23453__$1 = state_23453;
var statearr_23455_23485 = state_23453__$1;
(statearr_23455_23485[(2)] = inst_23449);

(statearr_23455_23485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (1))){
var state_23453__$1 = state_23453;
var statearr_23456_23486 = state_23453__$1;
(statearr_23456_23486[(2)] = null);

(statearr_23456_23486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (4))){
var inst_23406 = (state_23453[(7)]);
var inst_23406__$1 = (state_23453[(2)]);
var state_23453__$1 = (function (){var statearr_23457 = state_23453;
(statearr_23457[(7)] = inst_23406__$1);

return statearr_23457;
})();
if(cljs.core.truth_(inst_23406__$1)){
var statearr_23458_23487 = state_23453__$1;
(statearr_23458_23487[(1)] = (5));

} else {
var statearr_23459_23488 = state_23453__$1;
(statearr_23459_23488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (15))){
var inst_23413 = (state_23453[(8)]);
var inst_23428 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23413);
var inst_23429 = cljs.core.first.call(null,inst_23428);
var inst_23430 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23429);
var inst_23431 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_23430)].join('');
var inst_23432 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23431);
var state_23453__$1 = state_23453;
var statearr_23460_23489 = state_23453__$1;
(statearr_23460_23489[(2)] = inst_23432);

(statearr_23460_23489[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (13))){
var inst_23437 = (state_23453[(2)]);
var state_23453__$1 = state_23453;
var statearr_23461_23490 = state_23453__$1;
(statearr_23461_23490[(2)] = inst_23437);

(statearr_23461_23490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (6))){
var state_23453__$1 = state_23453;
var statearr_23462_23491 = state_23453__$1;
(statearr_23462_23491[(2)] = null);

(statearr_23462_23491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (17))){
var inst_23435 = (state_23453[(2)]);
var state_23453__$1 = state_23453;
var statearr_23463_23492 = state_23453__$1;
(statearr_23463_23492[(2)] = inst_23435);

(statearr_23463_23492[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (3))){
var inst_23451 = (state_23453[(2)]);
var state_23453__$1 = state_23453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23453__$1,inst_23451);
} else {
if((state_val_23454 === (12))){
var inst_23412 = (state_23453[(9)]);
var inst_23426 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23412,opts);
var state_23453__$1 = state_23453;
if(cljs.core.truth_(inst_23426)){
var statearr_23464_23493 = state_23453__$1;
(statearr_23464_23493[(1)] = (15));

} else {
var statearr_23465_23494 = state_23453__$1;
(statearr_23465_23494[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (2))){
var state_23453__$1 = state_23453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23453__$1,(4),ch);
} else {
if((state_val_23454 === (11))){
var inst_23413 = (state_23453[(8)]);
var inst_23418 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23419 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23413);
var inst_23420 = cljs.core.async.timeout.call(null,(1000));
var inst_23421 = [inst_23419,inst_23420];
var inst_23422 = (new cljs.core.PersistentVector(null,2,(5),inst_23418,inst_23421,null));
var state_23453__$1 = state_23453;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23453__$1,(14),inst_23422);
} else {
if((state_val_23454 === (9))){
var inst_23413 = (state_23453[(8)]);
var inst_23439 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23440 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23413);
var inst_23441 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23440);
var inst_23442 = [cljs.core.str("Not loading: "),cljs.core.str(inst_23441)].join('');
var inst_23443 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23442);
var state_23453__$1 = (function (){var statearr_23466 = state_23453;
(statearr_23466[(10)] = inst_23439);

return statearr_23466;
})();
var statearr_23467_23495 = state_23453__$1;
(statearr_23467_23495[(2)] = inst_23443);

(statearr_23467_23495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (5))){
var inst_23406 = (state_23453[(7)]);
var inst_23408 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23409 = (new cljs.core.PersistentArrayMap(null,2,inst_23408,null));
var inst_23410 = (new cljs.core.PersistentHashSet(null,inst_23409,null));
var inst_23411 = figwheel.client.focus_msgs.call(null,inst_23410,inst_23406);
var inst_23412 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23411);
var inst_23413 = cljs.core.first.call(null,inst_23411);
var inst_23414 = figwheel.client.autoload_QMARK_.call(null);
var state_23453__$1 = (function (){var statearr_23468 = state_23453;
(statearr_23468[(8)] = inst_23413);

(statearr_23468[(9)] = inst_23412);

return statearr_23468;
})();
if(cljs.core.truth_(inst_23414)){
var statearr_23469_23496 = state_23453__$1;
(statearr_23469_23496[(1)] = (8));

} else {
var statearr_23470_23497 = state_23453__$1;
(statearr_23470_23497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (14))){
var inst_23424 = (state_23453[(2)]);
var state_23453__$1 = state_23453;
var statearr_23471_23498 = state_23453__$1;
(statearr_23471_23498[(2)] = inst_23424);

(statearr_23471_23498[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (16))){
var state_23453__$1 = state_23453;
var statearr_23472_23499 = state_23453__$1;
(statearr_23472_23499[(2)] = null);

(statearr_23472_23499[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (10))){
var inst_23445 = (state_23453[(2)]);
var state_23453__$1 = (function (){var statearr_23473 = state_23453;
(statearr_23473[(11)] = inst_23445);

return statearr_23473;
})();
var statearr_23474_23500 = state_23453__$1;
(statearr_23474_23500[(2)] = null);

(statearr_23474_23500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (8))){
var inst_23412 = (state_23453[(9)]);
var inst_23416 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23412,opts);
var state_23453__$1 = state_23453;
if(cljs.core.truth_(inst_23416)){
var statearr_23475_23501 = state_23453__$1;
(statearr_23475_23501[(1)] = (11));

} else {
var statearr_23476_23502 = state_23453__$1;
(statearr_23476_23502[(1)] = (12));

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
});})(c__18986__auto___23484,ch))
;
return ((function (switch__18874__auto__,c__18986__auto___23484,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18875__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18875__auto____0 = (function (){
var statearr_23480 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23480[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18875__auto__);

(statearr_23480[(1)] = (1));

return statearr_23480;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18875__auto____1 = (function (state_23453){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_23453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e23481){if((e23481 instanceof Object)){
var ex__18878__auto__ = e23481;
var statearr_23482_23503 = state_23453;
(statearr_23482_23503[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23504 = state_23453;
state_23453 = G__23504;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18875__auto__ = function(state_23453){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18875__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18875__auto____1.call(this,state_23453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18875__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18875__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto___23484,ch))
})();
var state__18988__auto__ = (function (){var statearr_23483 = f__18987__auto__.call(null);
(statearr_23483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto___23484);

return statearr_23483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto___23484,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23505_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23505_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_23512 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23512){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23510 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23511 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23511;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23510;
}}catch (e23509){if((e23509 instanceof Error)){
var e = e23509;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23512], null));
} else {
var e = e23509;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23512))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23513){
var map__23520 = p__23513;
var map__23520__$1 = ((((!((map__23520 == null)))?((((map__23520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23520):map__23520);
var opts = map__23520__$1;
var build_id = cljs.core.get.call(null,map__23520__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23520,map__23520__$1,opts,build_id){
return (function (p__23522){
var vec__23523 = p__23522;
var map__23524 = cljs.core.nth.call(null,vec__23523,(0),null);
var map__23524__$1 = ((((!((map__23524 == null)))?((((map__23524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23524):map__23524);
var msg = map__23524__$1;
var msg_name = cljs.core.get.call(null,map__23524__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23523,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23523,map__23524,map__23524__$1,msg,msg_name,_,map__23520,map__23520__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23523,map__23524,map__23524__$1,msg,msg_name,_,map__23520,map__23520__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23520,map__23520__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23530){
var vec__23531 = p__23530;
var map__23532 = cljs.core.nth.call(null,vec__23531,(0),null);
var map__23532__$1 = ((((!((map__23532 == null)))?((((map__23532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23532):map__23532);
var msg = map__23532__$1;
var msg_name = cljs.core.get.call(null,map__23532__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23531,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23534){
var map__23544 = p__23534;
var map__23544__$1 = ((((!((map__23544 == null)))?((((map__23544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23544):map__23544);
var on_compile_warning = cljs.core.get.call(null,map__23544__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23544__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23544,map__23544__$1,on_compile_warning,on_compile_fail){
return (function (p__23546){
var vec__23547 = p__23546;
var map__23548 = cljs.core.nth.call(null,vec__23547,(0),null);
var map__23548__$1 = ((((!((map__23548 == null)))?((((map__23548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23548):map__23548);
var msg = map__23548__$1;
var msg_name = cljs.core.get.call(null,map__23548__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23547,(1));
var pred__23550 = cljs.core._EQ_;
var expr__23551 = msg_name;
if(cljs.core.truth_(pred__23550.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23551))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23550.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23551))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23544,map__23544__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto__,msg_hist,msg_names,msg){
return (function (state_23767){
var state_val_23768 = (state_23767[(1)]);
if((state_val_23768 === (7))){
var inst_23691 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
if(cljs.core.truth_(inst_23691)){
var statearr_23769_23815 = state_23767__$1;
(statearr_23769_23815[(1)] = (8));

} else {
var statearr_23770_23816 = state_23767__$1;
(statearr_23770_23816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (20))){
var inst_23761 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23771_23817 = state_23767__$1;
(statearr_23771_23817[(2)] = inst_23761);

(statearr_23771_23817[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (27))){
var inst_23757 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23772_23818 = state_23767__$1;
(statearr_23772_23818[(2)] = inst_23757);

(statearr_23772_23818[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (1))){
var inst_23684 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_23767__$1 = state_23767;
if(cljs.core.truth_(inst_23684)){
var statearr_23773_23819 = state_23767__$1;
(statearr_23773_23819[(1)] = (2));

} else {
var statearr_23774_23820 = state_23767__$1;
(statearr_23774_23820[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (24))){
var inst_23759 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23775_23821 = state_23767__$1;
(statearr_23775_23821[(2)] = inst_23759);

(statearr_23775_23821[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (4))){
var inst_23765 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23767__$1,inst_23765);
} else {
if((state_val_23768 === (15))){
var inst_23763 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23776_23822 = state_23767__$1;
(statearr_23776_23822[(2)] = inst_23763);

(statearr_23776_23822[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (21))){
var inst_23722 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23777_23823 = state_23767__$1;
(statearr_23777_23823[(2)] = inst_23722);

(statearr_23777_23823[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (31))){
var inst_23746 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_23767__$1 = state_23767;
if(cljs.core.truth_(inst_23746)){
var statearr_23778_23824 = state_23767__$1;
(statearr_23778_23824[(1)] = (34));

} else {
var statearr_23779_23825 = state_23767__$1;
(statearr_23779_23825[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (32))){
var inst_23755 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23780_23826 = state_23767__$1;
(statearr_23780_23826[(2)] = inst_23755);

(statearr_23780_23826[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (33))){
var inst_23744 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23781_23827 = state_23767__$1;
(statearr_23781_23827[(2)] = inst_23744);

(statearr_23781_23827[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (13))){
var inst_23705 = figwheel.client.heads_up.clear.call(null);
var state_23767__$1 = state_23767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23767__$1,(16),inst_23705);
} else {
if((state_val_23768 === (22))){
var inst_23726 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23727 = figwheel.client.heads_up.append_message.call(null,inst_23726);
var state_23767__$1 = state_23767;
var statearr_23782_23828 = state_23767__$1;
(statearr_23782_23828[(2)] = inst_23727);

(statearr_23782_23828[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (36))){
var inst_23753 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23783_23829 = state_23767__$1;
(statearr_23783_23829[(2)] = inst_23753);

(statearr_23783_23829[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (29))){
var inst_23737 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23784_23830 = state_23767__$1;
(statearr_23784_23830[(2)] = inst_23737);

(statearr_23784_23830[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (6))){
var inst_23686 = (state_23767[(7)]);
var state_23767__$1 = state_23767;
var statearr_23785_23831 = state_23767__$1;
(statearr_23785_23831[(2)] = inst_23686);

(statearr_23785_23831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (28))){
var inst_23733 = (state_23767[(2)]);
var inst_23734 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23735 = figwheel.client.heads_up.display_warning.call(null,inst_23734);
var state_23767__$1 = (function (){var statearr_23786 = state_23767;
(statearr_23786[(8)] = inst_23733);

return statearr_23786;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23767__$1,(29),inst_23735);
} else {
if((state_val_23768 === (25))){
var inst_23731 = figwheel.client.heads_up.clear.call(null);
var state_23767__$1 = state_23767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23767__$1,(28),inst_23731);
} else {
if((state_val_23768 === (34))){
var inst_23748 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23767__$1 = state_23767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23767__$1,(37),inst_23748);
} else {
if((state_val_23768 === (17))){
var inst_23713 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23787_23832 = state_23767__$1;
(statearr_23787_23832[(2)] = inst_23713);

(statearr_23787_23832[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (3))){
var inst_23703 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_23767__$1 = state_23767;
if(cljs.core.truth_(inst_23703)){
var statearr_23788_23833 = state_23767__$1;
(statearr_23788_23833[(1)] = (13));

} else {
var statearr_23789_23834 = state_23767__$1;
(statearr_23789_23834[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (12))){
var inst_23699 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23790_23835 = state_23767__$1;
(statearr_23790_23835[(2)] = inst_23699);

(statearr_23790_23835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (2))){
var inst_23686 = (state_23767[(7)]);
var inst_23686__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_23767__$1 = (function (){var statearr_23791 = state_23767;
(statearr_23791[(7)] = inst_23686__$1);

return statearr_23791;
})();
if(cljs.core.truth_(inst_23686__$1)){
var statearr_23792_23836 = state_23767__$1;
(statearr_23792_23836[(1)] = (5));

} else {
var statearr_23793_23837 = state_23767__$1;
(statearr_23793_23837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (23))){
var inst_23729 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_23767__$1 = state_23767;
if(cljs.core.truth_(inst_23729)){
var statearr_23794_23838 = state_23767__$1;
(statearr_23794_23838[(1)] = (25));

} else {
var statearr_23795_23839 = state_23767__$1;
(statearr_23795_23839[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (35))){
var state_23767__$1 = state_23767;
var statearr_23796_23840 = state_23767__$1;
(statearr_23796_23840[(2)] = null);

(statearr_23796_23840[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (19))){
var inst_23724 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_23767__$1 = state_23767;
if(cljs.core.truth_(inst_23724)){
var statearr_23797_23841 = state_23767__$1;
(statearr_23797_23841[(1)] = (22));

} else {
var statearr_23798_23842 = state_23767__$1;
(statearr_23798_23842[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (11))){
var inst_23695 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23799_23843 = state_23767__$1;
(statearr_23799_23843[(2)] = inst_23695);

(statearr_23799_23843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (9))){
var inst_23697 = figwheel.client.heads_up.clear.call(null);
var state_23767__$1 = state_23767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23767__$1,(12),inst_23697);
} else {
if((state_val_23768 === (5))){
var inst_23688 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_23767__$1 = state_23767;
var statearr_23800_23844 = state_23767__$1;
(statearr_23800_23844[(2)] = inst_23688);

(statearr_23800_23844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (14))){
var inst_23715 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_23767__$1 = state_23767;
if(cljs.core.truth_(inst_23715)){
var statearr_23801_23845 = state_23767__$1;
(statearr_23801_23845[(1)] = (18));

} else {
var statearr_23802_23846 = state_23767__$1;
(statearr_23802_23846[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (26))){
var inst_23739 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_23767__$1 = state_23767;
if(cljs.core.truth_(inst_23739)){
var statearr_23803_23847 = state_23767__$1;
(statearr_23803_23847[(1)] = (30));

} else {
var statearr_23804_23848 = state_23767__$1;
(statearr_23804_23848[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (16))){
var inst_23707 = (state_23767[(2)]);
var inst_23708 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23709 = figwheel.client.format_messages.call(null,inst_23708);
var inst_23710 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23711 = figwheel.client.heads_up.display_error.call(null,inst_23709,inst_23710);
var state_23767__$1 = (function (){var statearr_23805 = state_23767;
(statearr_23805[(9)] = inst_23707);

return statearr_23805;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23767__$1,(17),inst_23711);
} else {
if((state_val_23768 === (30))){
var inst_23741 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23742 = figwheel.client.heads_up.display_warning.call(null,inst_23741);
var state_23767__$1 = state_23767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23767__$1,(33),inst_23742);
} else {
if((state_val_23768 === (10))){
var inst_23701 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23806_23849 = state_23767__$1;
(statearr_23806_23849[(2)] = inst_23701);

(statearr_23806_23849[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (18))){
var inst_23717 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23718 = figwheel.client.format_messages.call(null,inst_23717);
var inst_23719 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23720 = figwheel.client.heads_up.display_error.call(null,inst_23718,inst_23719);
var state_23767__$1 = state_23767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23767__$1,(21),inst_23720);
} else {
if((state_val_23768 === (37))){
var inst_23750 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23807_23850 = state_23767__$1;
(statearr_23807_23850[(2)] = inst_23750);

(statearr_23807_23850[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (8))){
var inst_23693 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23767__$1 = state_23767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23767__$1,(11),inst_23693);
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
});})(c__18986__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18874__auto__,c__18986__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18875__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18875__auto____0 = (function (){
var statearr_23811 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23811[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18875__auto__);

(statearr_23811[(1)] = (1));

return statearr_23811;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18875__auto____1 = (function (state_23767){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_23767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e23812){if((e23812 instanceof Object)){
var ex__18878__auto__ = e23812;
var statearr_23813_23851 = state_23767;
(statearr_23813_23851[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23852 = state_23767;
state_23767 = G__23852;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18875__auto__ = function(state_23767){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18875__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18875__auto____1.call(this,state_23767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18875__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18875__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto__,msg_hist,msg_names,msg))
})();
var state__18988__auto__ = (function (){var statearr_23814 = f__18987__auto__.call(null);
(statearr_23814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto__);

return statearr_23814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto__,msg_hist,msg_names,msg))
);

return c__18986__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18986__auto___23915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto___23915,ch){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto___23915,ch){
return (function (state_23898){
var state_val_23899 = (state_23898[(1)]);
if((state_val_23899 === (1))){
var state_23898__$1 = state_23898;
var statearr_23900_23916 = state_23898__$1;
(statearr_23900_23916[(2)] = null);

(statearr_23900_23916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23899 === (2))){
var state_23898__$1 = state_23898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23898__$1,(4),ch);
} else {
if((state_val_23899 === (3))){
var inst_23896 = (state_23898[(2)]);
var state_23898__$1 = state_23898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23898__$1,inst_23896);
} else {
if((state_val_23899 === (4))){
var inst_23886 = (state_23898[(7)]);
var inst_23886__$1 = (state_23898[(2)]);
var state_23898__$1 = (function (){var statearr_23901 = state_23898;
(statearr_23901[(7)] = inst_23886__$1);

return statearr_23901;
})();
if(cljs.core.truth_(inst_23886__$1)){
var statearr_23902_23917 = state_23898__$1;
(statearr_23902_23917[(1)] = (5));

} else {
var statearr_23903_23918 = state_23898__$1;
(statearr_23903_23918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23899 === (5))){
var inst_23886 = (state_23898[(7)]);
var inst_23888 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_23886);
var state_23898__$1 = state_23898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23898__$1,(8),inst_23888);
} else {
if((state_val_23899 === (6))){
var state_23898__$1 = state_23898;
var statearr_23904_23919 = state_23898__$1;
(statearr_23904_23919[(2)] = null);

(statearr_23904_23919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23899 === (7))){
var inst_23894 = (state_23898[(2)]);
var state_23898__$1 = state_23898;
var statearr_23905_23920 = state_23898__$1;
(statearr_23905_23920[(2)] = inst_23894);

(statearr_23905_23920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23899 === (8))){
var inst_23890 = (state_23898[(2)]);
var state_23898__$1 = (function (){var statearr_23906 = state_23898;
(statearr_23906[(8)] = inst_23890);

return statearr_23906;
})();
var statearr_23907_23921 = state_23898__$1;
(statearr_23907_23921[(2)] = null);

(statearr_23907_23921[(1)] = (2));


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
});})(c__18986__auto___23915,ch))
;
return ((function (switch__18874__auto__,c__18986__auto___23915,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18875__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18875__auto____0 = (function (){
var statearr_23911 = [null,null,null,null,null,null,null,null,null];
(statearr_23911[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18875__auto__);

(statearr_23911[(1)] = (1));

return statearr_23911;
});
var figwheel$client$heads_up_plugin_$_state_machine__18875__auto____1 = (function (state_23898){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_23898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e23912){if((e23912 instanceof Object)){
var ex__18878__auto__ = e23912;
var statearr_23913_23922 = state_23898;
(statearr_23913_23922[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23923 = state_23898;
state_23898 = G__23923;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18875__auto__ = function(state_23898){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18875__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18875__auto____1.call(this,state_23898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18875__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18875__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto___23915,ch))
})();
var state__18988__auto__ = (function (){var statearr_23914 = f__18987__auto__.call(null);
(statearr_23914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto___23915);

return statearr_23914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto___23915,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto__){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto__){
return (function (state_23944){
var state_val_23945 = (state_23944[(1)]);
if((state_val_23945 === (1))){
var inst_23939 = cljs.core.async.timeout.call(null,(3000));
var state_23944__$1 = state_23944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23944__$1,(2),inst_23939);
} else {
if((state_val_23945 === (2))){
var inst_23941 = (state_23944[(2)]);
var inst_23942 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_23944__$1 = (function (){var statearr_23946 = state_23944;
(statearr_23946[(7)] = inst_23941);

return statearr_23946;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23944__$1,inst_23942);
} else {
return null;
}
}
});})(c__18986__auto__))
;
return ((function (switch__18874__auto__,c__18986__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18875__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18875__auto____0 = (function (){
var statearr_23950 = [null,null,null,null,null,null,null,null];
(statearr_23950[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18875__auto__);

(statearr_23950[(1)] = (1));

return statearr_23950;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18875__auto____1 = (function (state_23944){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_23944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e23951){if((e23951 instanceof Object)){
var ex__18878__auto__ = e23951;
var statearr_23952_23954 = state_23944;
(statearr_23952_23954[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23955 = state_23944;
state_23944 = G__23955;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18875__auto__ = function(state_23944){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18875__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18875__auto____1.call(this,state_23944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18875__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18875__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto__))
})();
var state__18988__auto__ = (function (){var statearr_23953 = f__18987__auto__.call(null);
(statearr_23953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto__);

return statearr_23953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto__))
);

return c__18986__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__23956){
var map__23963 = p__23956;
var map__23963__$1 = ((((!((map__23963 == null)))?((((map__23963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23963):map__23963);
var ed = map__23963__$1;
var formatted_exception = cljs.core.get.call(null,map__23963__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__23963__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__23963__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__23965_23969 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__23966_23970 = null;
var count__23967_23971 = (0);
var i__23968_23972 = (0);
while(true){
if((i__23968_23972 < count__23967_23971)){
var msg_23973 = cljs.core._nth.call(null,chunk__23966_23970,i__23968_23972);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_23973);

var G__23974 = seq__23965_23969;
var G__23975 = chunk__23966_23970;
var G__23976 = count__23967_23971;
var G__23977 = (i__23968_23972 + (1));
seq__23965_23969 = G__23974;
chunk__23966_23970 = G__23975;
count__23967_23971 = G__23976;
i__23968_23972 = G__23977;
continue;
} else {
var temp__4425__auto___23978 = cljs.core.seq.call(null,seq__23965_23969);
if(temp__4425__auto___23978){
var seq__23965_23979__$1 = temp__4425__auto___23978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23965_23979__$1)){
var c__17622__auto___23980 = cljs.core.chunk_first.call(null,seq__23965_23979__$1);
var G__23981 = cljs.core.chunk_rest.call(null,seq__23965_23979__$1);
var G__23982 = c__17622__auto___23980;
var G__23983 = cljs.core.count.call(null,c__17622__auto___23980);
var G__23984 = (0);
seq__23965_23969 = G__23981;
chunk__23966_23970 = G__23982;
count__23967_23971 = G__23983;
i__23968_23972 = G__23984;
continue;
} else {
var msg_23985 = cljs.core.first.call(null,seq__23965_23979__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_23985);

var G__23986 = cljs.core.next.call(null,seq__23965_23979__$1);
var G__23987 = null;
var G__23988 = (0);
var G__23989 = (0);
seq__23965_23969 = G__23986;
chunk__23966_23970 = G__23987;
count__23967_23971 = G__23988;
i__23968_23972 = G__23989;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__23990){
var map__23993 = p__23990;
var map__23993__$1 = ((((!((map__23993 == null)))?((((map__23993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23993):map__23993);
var w = map__23993__$1;
var message = cljs.core.get.call(null,map__23993__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16807__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16807__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16807__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24001 = cljs.core.seq.call(null,plugins);
var chunk__24002 = null;
var count__24003 = (0);
var i__24004 = (0);
while(true){
if((i__24004 < count__24003)){
var vec__24005 = cljs.core._nth.call(null,chunk__24002,i__24004);
var k = cljs.core.nth.call(null,vec__24005,(0),null);
var plugin = cljs.core.nth.call(null,vec__24005,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24007 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24001,chunk__24002,count__24003,i__24004,pl_24007,vec__24005,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24007.call(null,msg_hist);
});})(seq__24001,chunk__24002,count__24003,i__24004,pl_24007,vec__24005,k,plugin))
);
} else {
}

var G__24008 = seq__24001;
var G__24009 = chunk__24002;
var G__24010 = count__24003;
var G__24011 = (i__24004 + (1));
seq__24001 = G__24008;
chunk__24002 = G__24009;
count__24003 = G__24010;
i__24004 = G__24011;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24001);
if(temp__4425__auto__){
var seq__24001__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24001__$1)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,seq__24001__$1);
var G__24012 = cljs.core.chunk_rest.call(null,seq__24001__$1);
var G__24013 = c__17622__auto__;
var G__24014 = cljs.core.count.call(null,c__17622__auto__);
var G__24015 = (0);
seq__24001 = G__24012;
chunk__24002 = G__24013;
count__24003 = G__24014;
i__24004 = G__24015;
continue;
} else {
var vec__24006 = cljs.core.first.call(null,seq__24001__$1);
var k = cljs.core.nth.call(null,vec__24006,(0),null);
var plugin = cljs.core.nth.call(null,vec__24006,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24016 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24001,chunk__24002,count__24003,i__24004,pl_24016,vec__24006,k,plugin,seq__24001__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24016.call(null,msg_hist);
});})(seq__24001,chunk__24002,count__24003,i__24004,pl_24016,vec__24006,k,plugin,seq__24001__$1,temp__4425__auto__))
);
} else {
}

var G__24017 = cljs.core.next.call(null,seq__24001__$1);
var G__24018 = null;
var G__24019 = (0);
var G__24020 = (0);
seq__24001 = G__24017;
chunk__24002 = G__24018;
count__24003 = G__24019;
i__24004 = G__24020;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24021 = [];
var len__17877__auto___24024 = arguments.length;
var i__17878__auto___24025 = (0);
while(true){
if((i__17878__auto___24025 < len__17877__auto___24024)){
args24021.push((arguments[i__17878__auto___24025]));

var G__24026 = (i__17878__auto___24025 + (1));
i__17878__auto___24025 = G__24026;
continue;
} else {
}
break;
}

var G__24023 = args24021.length;
switch (G__24023) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24021.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17884__auto__ = [];
var len__17877__auto___24032 = arguments.length;
var i__17878__auto___24033 = (0);
while(true){
if((i__17878__auto___24033 < len__17877__auto___24032)){
args__17884__auto__.push((arguments[i__17878__auto___24033]));

var G__24034 = (i__17878__auto___24033 + (1));
i__17878__auto___24033 = G__24034;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((0) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17885__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24029){
var map__24030 = p__24029;
var map__24030__$1 = ((((!((map__24030 == null)))?((((map__24030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24030):map__24030);
var opts = map__24030__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24028){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24028));
});

//# sourceMappingURL=client.js.map