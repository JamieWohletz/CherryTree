// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19031 = [];
var len__17877__auto___19037 = arguments.length;
var i__17878__auto___19038 = (0);
while(true){
if((i__17878__auto___19038 < len__17877__auto___19037)){
args19031.push((arguments[i__17878__auto___19038]));

var G__19039 = (i__17878__auto___19038 + (1));
i__17878__auto___19038 = G__19039;
continue;
} else {
}
break;
}

var G__19033 = args19031.length;
switch (G__19033) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19031.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19034 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19034 = (function (f,blockable,meta19035){
this.f = f;
this.blockable = blockable;
this.meta19035 = meta19035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19036,meta19035__$1){
var self__ = this;
var _19036__$1 = this;
return (new cljs.core.async.t_cljs$core$async19034(self__.f,self__.blockable,meta19035__$1));
});

cljs.core.async.t_cljs$core$async19034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19036){
var self__ = this;
var _19036__$1 = this;
return self__.meta19035;
});

cljs.core.async.t_cljs$core$async19034.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19034.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19034.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19034.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19035","meta19035",-1047137705,null)], null);
});

cljs.core.async.t_cljs$core$async19034.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19034";

cljs.core.async.t_cljs$core$async19034.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async19034");
});

cljs.core.async.__GT_t_cljs$core$async19034 = (function cljs$core$async$__GT_t_cljs$core$async19034(f__$1,blockable__$1,meta19035){
return (new cljs.core.async.t_cljs$core$async19034(f__$1,blockable__$1,meta19035));
});

}

return (new cljs.core.async.t_cljs$core$async19034(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args19043 = [];
var len__17877__auto___19046 = arguments.length;
var i__17878__auto___19047 = (0);
while(true){
if((i__17878__auto___19047 < len__17877__auto___19046)){
args19043.push((arguments[i__17878__auto___19047]));

var G__19048 = (i__17878__auto___19047 + (1));
i__17878__auto___19047 = G__19048;
continue;
} else {
}
break;
}

var G__19045 = args19043.length;
switch (G__19045) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19043.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args19050 = [];
var len__17877__auto___19053 = arguments.length;
var i__17878__auto___19054 = (0);
while(true){
if((i__17878__auto___19054 < len__17877__auto___19053)){
args19050.push((arguments[i__17878__auto___19054]));

var G__19055 = (i__17878__auto___19054 + (1));
i__17878__auto___19054 = G__19055;
continue;
} else {
}
break;
}

var G__19052 = args19050.length;
switch (G__19052) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19050.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args19057 = [];
var len__17877__auto___19060 = arguments.length;
var i__17878__auto___19061 = (0);
while(true){
if((i__17878__auto___19061 < len__17877__auto___19060)){
args19057.push((arguments[i__17878__auto___19061]));

var G__19062 = (i__17878__auto___19061 + (1));
i__17878__auto___19061 = G__19062;
continue;
} else {
}
break;
}

var G__19059 = args19057.length;
switch (G__19059) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19057.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19064 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19064);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19064,ret){
return (function (){
return fn1.call(null,val_19064);
});})(val_19064,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args19065 = [];
var len__17877__auto___19068 = arguments.length;
var i__17878__auto___19069 = (0);
while(true){
if((i__17878__auto___19069 < len__17877__auto___19068)){
args19065.push((arguments[i__17878__auto___19069]));

var G__19070 = (i__17878__auto___19069 + (1));
i__17878__auto___19069 = G__19070;
continue;
} else {
}
break;
}

var G__19067 = args19065.length;
switch (G__19067) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19065.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17722__auto___19072 = n;
var x_19073 = (0);
while(true){
if((x_19073 < n__17722__auto___19072)){
(a[x_19073] = (0));

var G__19074 = (x_19073 + (1));
x_19073 = G__19074;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19075 = (i + (1));
i = G__19075;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19079 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19079 = (function (alt_flag,flag,meta19080){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19080 = meta19080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19081,meta19080__$1){
var self__ = this;
var _19081__$1 = this;
return (new cljs.core.async.t_cljs$core$async19079(self__.alt_flag,self__.flag,meta19080__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19079.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19081){
var self__ = this;
var _19081__$1 = this;
return self__.meta19080;
});})(flag))
;

cljs.core.async.t_cljs$core$async19079.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19079.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19079.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19079.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19079.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19080","meta19080",-420084429,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19079.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19079";

cljs.core.async.t_cljs$core$async19079.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async19079");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19079 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19079(alt_flag__$1,flag__$1,meta19080){
return (new cljs.core.async.t_cljs$core$async19079(alt_flag__$1,flag__$1,meta19080));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19079(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19085 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19085 = (function (alt_handler,flag,cb,meta19086){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19086 = meta19086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19087,meta19086__$1){
var self__ = this;
var _19087__$1 = this;
return (new cljs.core.async.t_cljs$core$async19085(self__.alt_handler,self__.flag,self__.cb,meta19086__$1));
});

cljs.core.async.t_cljs$core$async19085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19087){
var self__ = this;
var _19087__$1 = this;
return self__.meta19086;
});

cljs.core.async.t_cljs$core$async19085.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19085.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19085.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19085.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19085.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19086","meta19086",537645495,null)], null);
});

cljs.core.async.t_cljs$core$async19085.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19085";

cljs.core.async.t_cljs$core$async19085.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async19085");
});

cljs.core.async.__GT_t_cljs$core$async19085 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19085(alt_handler__$1,flag__$1,cb__$1,meta19086){
return (new cljs.core.async.t_cljs$core$async19085(alt_handler__$1,flag__$1,cb__$1,meta19086));
});

}

return (new cljs.core.async.t_cljs$core$async19085(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19088_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19088_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19089_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19089_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16819__auto__ = wport;
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19090 = (i + (1));
i = G__19090;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16819__auto__ = ret;
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16807__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16807__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16807__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17884__auto__ = [];
var len__17877__auto___19096 = arguments.length;
var i__17878__auto___19097 = (0);
while(true){
if((i__17878__auto___19097 < len__17877__auto___19096)){
args__17884__auto__.push((arguments[i__17878__auto___19097]));

var G__19098 = (i__17878__auto___19097 + (1));
i__17878__auto___19097 = G__19098;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((1) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17885__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19093){
var map__19094 = p__19093;
var map__19094__$1 = ((((!((map__19094 == null)))?((((map__19094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19094):map__19094);
var opts = map__19094__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19091){
var G__19092 = cljs.core.first.call(null,seq19091);
var seq19091__$1 = cljs.core.next.call(null,seq19091);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19092,seq19091__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args19099 = [];
var len__17877__auto___19149 = arguments.length;
var i__17878__auto___19150 = (0);
while(true){
if((i__17878__auto___19150 < len__17877__auto___19149)){
args19099.push((arguments[i__17878__auto___19150]));

var G__19151 = (i__17878__auto___19150 + (1));
i__17878__auto___19150 = G__19151;
continue;
} else {
}
break;
}

var G__19101 = args19099.length;
switch (G__19101) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19099.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18986__auto___19153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto___19153){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto___19153){
return (function (state_19125){
var state_val_19126 = (state_19125[(1)]);
if((state_val_19126 === (7))){
var inst_19121 = (state_19125[(2)]);
var state_19125__$1 = state_19125;
var statearr_19127_19154 = state_19125__$1;
(statearr_19127_19154[(2)] = inst_19121);

(statearr_19127_19154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (1))){
var state_19125__$1 = state_19125;
var statearr_19128_19155 = state_19125__$1;
(statearr_19128_19155[(2)] = null);

(statearr_19128_19155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (4))){
var inst_19104 = (state_19125[(7)]);
var inst_19104__$1 = (state_19125[(2)]);
var inst_19105 = (inst_19104__$1 == null);
var state_19125__$1 = (function (){var statearr_19129 = state_19125;
(statearr_19129[(7)] = inst_19104__$1);

return statearr_19129;
})();
if(cljs.core.truth_(inst_19105)){
var statearr_19130_19156 = state_19125__$1;
(statearr_19130_19156[(1)] = (5));

} else {
var statearr_19131_19157 = state_19125__$1;
(statearr_19131_19157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (13))){
var state_19125__$1 = state_19125;
var statearr_19132_19158 = state_19125__$1;
(statearr_19132_19158[(2)] = null);

(statearr_19132_19158[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (6))){
var inst_19104 = (state_19125[(7)]);
var state_19125__$1 = state_19125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19125__$1,(11),to,inst_19104);
} else {
if((state_val_19126 === (3))){
var inst_19123 = (state_19125[(2)]);
var state_19125__$1 = state_19125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19125__$1,inst_19123);
} else {
if((state_val_19126 === (12))){
var state_19125__$1 = state_19125;
var statearr_19133_19159 = state_19125__$1;
(statearr_19133_19159[(2)] = null);

(statearr_19133_19159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (2))){
var state_19125__$1 = state_19125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19125__$1,(4),from);
} else {
if((state_val_19126 === (11))){
var inst_19114 = (state_19125[(2)]);
var state_19125__$1 = state_19125;
if(cljs.core.truth_(inst_19114)){
var statearr_19134_19160 = state_19125__$1;
(statearr_19134_19160[(1)] = (12));

} else {
var statearr_19135_19161 = state_19125__$1;
(statearr_19135_19161[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (9))){
var state_19125__$1 = state_19125;
var statearr_19136_19162 = state_19125__$1;
(statearr_19136_19162[(2)] = null);

(statearr_19136_19162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (5))){
var state_19125__$1 = state_19125;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19137_19163 = state_19125__$1;
(statearr_19137_19163[(1)] = (8));

} else {
var statearr_19138_19164 = state_19125__$1;
(statearr_19138_19164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (14))){
var inst_19119 = (state_19125[(2)]);
var state_19125__$1 = state_19125;
var statearr_19139_19165 = state_19125__$1;
(statearr_19139_19165[(2)] = inst_19119);

(statearr_19139_19165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (10))){
var inst_19111 = (state_19125[(2)]);
var state_19125__$1 = state_19125;
var statearr_19140_19166 = state_19125__$1;
(statearr_19140_19166[(2)] = inst_19111);

(statearr_19140_19166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (8))){
var inst_19108 = cljs.core.async.close_BANG_.call(null,to);
var state_19125__$1 = state_19125;
var statearr_19141_19167 = state_19125__$1;
(statearr_19141_19167[(2)] = inst_19108);

(statearr_19141_19167[(1)] = (10));


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
});})(c__18986__auto___19153))
;
return ((function (switch__18874__auto__,c__18986__auto___19153){
return (function() {
var cljs$core$async$state_machine__18875__auto__ = null;
var cljs$core$async$state_machine__18875__auto____0 = (function (){
var statearr_19145 = [null,null,null,null,null,null,null,null];
(statearr_19145[(0)] = cljs$core$async$state_machine__18875__auto__);

(statearr_19145[(1)] = (1));

return statearr_19145;
});
var cljs$core$async$state_machine__18875__auto____1 = (function (state_19125){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_19125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e19146){if((e19146 instanceof Object)){
var ex__18878__auto__ = e19146;
var statearr_19147_19168 = state_19125;
(statearr_19147_19168[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19169 = state_19125;
state_19125 = G__19169;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
cljs$core$async$state_machine__18875__auto__ = function(state_19125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18875__auto____1.call(this,state_19125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18875__auto____0;
cljs$core$async$state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18875__auto____1;
return cljs$core$async$state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto___19153))
})();
var state__18988__auto__ = (function (){var statearr_19148 = f__18987__auto__.call(null);
(statearr_19148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto___19153);

return statearr_19148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto___19153))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19353){
var vec__19354 = p__19353;
var v = cljs.core.nth.call(null,vec__19354,(0),null);
var p = cljs.core.nth.call(null,vec__19354,(1),null);
var job = vec__19354;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18986__auto___19536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto___19536,res,vec__19354,v,p,job,jobs,results){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto___19536,res,vec__19354,v,p,job,jobs,results){
return (function (state_19359){
var state_val_19360 = (state_19359[(1)]);
if((state_val_19360 === (1))){
var state_19359__$1 = state_19359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19359__$1,(2),res,v);
} else {
if((state_val_19360 === (2))){
var inst_19356 = (state_19359[(2)]);
var inst_19357 = cljs.core.async.close_BANG_.call(null,res);
var state_19359__$1 = (function (){var statearr_19361 = state_19359;
(statearr_19361[(7)] = inst_19356);

return statearr_19361;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19359__$1,inst_19357);
} else {
return null;
}
}
});})(c__18986__auto___19536,res,vec__19354,v,p,job,jobs,results))
;
return ((function (switch__18874__auto__,c__18986__auto___19536,res,vec__19354,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____0 = (function (){
var statearr_19365 = [null,null,null,null,null,null,null,null];
(statearr_19365[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__);

(statearr_19365[(1)] = (1));

return statearr_19365;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____1 = (function (state_19359){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_19359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e19366){if((e19366 instanceof Object)){
var ex__18878__auto__ = e19366;
var statearr_19367_19537 = state_19359;
(statearr_19367_19537[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19538 = state_19359;
state_19359 = G__19538;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__ = function(state_19359){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____1.call(this,state_19359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto___19536,res,vec__19354,v,p,job,jobs,results))
})();
var state__18988__auto__ = (function (){var statearr_19368 = f__18987__auto__.call(null);
(statearr_19368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto___19536);

return statearr_19368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto___19536,res,vec__19354,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19369){
var vec__19370 = p__19369;
var v = cljs.core.nth.call(null,vec__19370,(0),null);
var p = cljs.core.nth.call(null,vec__19370,(1),null);
var job = vec__19370;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17722__auto___19539 = n;
var __19540 = (0);
while(true){
if((__19540 < n__17722__auto___19539)){
var G__19371_19541 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19371_19541) {
case "compute":
var c__18986__auto___19543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19540,c__18986__auto___19543,G__19371_19541,n__17722__auto___19539,jobs,results,process,async){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (__19540,c__18986__auto___19543,G__19371_19541,n__17722__auto___19539,jobs,results,process,async){
return (function (state_19384){
var state_val_19385 = (state_19384[(1)]);
if((state_val_19385 === (1))){
var state_19384__$1 = state_19384;
var statearr_19386_19544 = state_19384__$1;
(statearr_19386_19544[(2)] = null);

(statearr_19386_19544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19385 === (2))){
var state_19384__$1 = state_19384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19384__$1,(4),jobs);
} else {
if((state_val_19385 === (3))){
var inst_19382 = (state_19384[(2)]);
var state_19384__$1 = state_19384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19384__$1,inst_19382);
} else {
if((state_val_19385 === (4))){
var inst_19374 = (state_19384[(2)]);
var inst_19375 = process.call(null,inst_19374);
var state_19384__$1 = state_19384;
if(cljs.core.truth_(inst_19375)){
var statearr_19387_19545 = state_19384__$1;
(statearr_19387_19545[(1)] = (5));

} else {
var statearr_19388_19546 = state_19384__$1;
(statearr_19388_19546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19385 === (5))){
var state_19384__$1 = state_19384;
var statearr_19389_19547 = state_19384__$1;
(statearr_19389_19547[(2)] = null);

(statearr_19389_19547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19385 === (6))){
var state_19384__$1 = state_19384;
var statearr_19390_19548 = state_19384__$1;
(statearr_19390_19548[(2)] = null);

(statearr_19390_19548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19385 === (7))){
var inst_19380 = (state_19384[(2)]);
var state_19384__$1 = state_19384;
var statearr_19391_19549 = state_19384__$1;
(statearr_19391_19549[(2)] = inst_19380);

(statearr_19391_19549[(1)] = (3));


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
});})(__19540,c__18986__auto___19543,G__19371_19541,n__17722__auto___19539,jobs,results,process,async))
;
return ((function (__19540,switch__18874__auto__,c__18986__auto___19543,G__19371_19541,n__17722__auto___19539,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____0 = (function (){
var statearr_19395 = [null,null,null,null,null,null,null];
(statearr_19395[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__);

(statearr_19395[(1)] = (1));

return statearr_19395;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____1 = (function (state_19384){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_19384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e19396){if((e19396 instanceof Object)){
var ex__18878__auto__ = e19396;
var statearr_19397_19550 = state_19384;
(statearr_19397_19550[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19551 = state_19384;
state_19384 = G__19551;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__ = function(state_19384){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____1.call(this,state_19384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__;
})()
;})(__19540,switch__18874__auto__,c__18986__auto___19543,G__19371_19541,n__17722__auto___19539,jobs,results,process,async))
})();
var state__18988__auto__ = (function (){var statearr_19398 = f__18987__auto__.call(null);
(statearr_19398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto___19543);

return statearr_19398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(__19540,c__18986__auto___19543,G__19371_19541,n__17722__auto___19539,jobs,results,process,async))
);


break;
case "async":
var c__18986__auto___19552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19540,c__18986__auto___19552,G__19371_19541,n__17722__auto___19539,jobs,results,process,async){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (__19540,c__18986__auto___19552,G__19371_19541,n__17722__auto___19539,jobs,results,process,async){
return (function (state_19411){
var state_val_19412 = (state_19411[(1)]);
if((state_val_19412 === (1))){
var state_19411__$1 = state_19411;
var statearr_19413_19553 = state_19411__$1;
(statearr_19413_19553[(2)] = null);

(statearr_19413_19553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19412 === (2))){
var state_19411__$1 = state_19411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19411__$1,(4),jobs);
} else {
if((state_val_19412 === (3))){
var inst_19409 = (state_19411[(2)]);
var state_19411__$1 = state_19411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19411__$1,inst_19409);
} else {
if((state_val_19412 === (4))){
var inst_19401 = (state_19411[(2)]);
var inst_19402 = async.call(null,inst_19401);
var state_19411__$1 = state_19411;
if(cljs.core.truth_(inst_19402)){
var statearr_19414_19554 = state_19411__$1;
(statearr_19414_19554[(1)] = (5));

} else {
var statearr_19415_19555 = state_19411__$1;
(statearr_19415_19555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19412 === (5))){
var state_19411__$1 = state_19411;
var statearr_19416_19556 = state_19411__$1;
(statearr_19416_19556[(2)] = null);

(statearr_19416_19556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19412 === (6))){
var state_19411__$1 = state_19411;
var statearr_19417_19557 = state_19411__$1;
(statearr_19417_19557[(2)] = null);

(statearr_19417_19557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19412 === (7))){
var inst_19407 = (state_19411[(2)]);
var state_19411__$1 = state_19411;
var statearr_19418_19558 = state_19411__$1;
(statearr_19418_19558[(2)] = inst_19407);

(statearr_19418_19558[(1)] = (3));


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
});})(__19540,c__18986__auto___19552,G__19371_19541,n__17722__auto___19539,jobs,results,process,async))
;
return ((function (__19540,switch__18874__auto__,c__18986__auto___19552,G__19371_19541,n__17722__auto___19539,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____0 = (function (){
var statearr_19422 = [null,null,null,null,null,null,null];
(statearr_19422[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__);

(statearr_19422[(1)] = (1));

return statearr_19422;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____1 = (function (state_19411){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_19411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e19423){if((e19423 instanceof Object)){
var ex__18878__auto__ = e19423;
var statearr_19424_19559 = state_19411;
(statearr_19424_19559[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19560 = state_19411;
state_19411 = G__19560;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__ = function(state_19411){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____1.call(this,state_19411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__;
})()
;})(__19540,switch__18874__auto__,c__18986__auto___19552,G__19371_19541,n__17722__auto___19539,jobs,results,process,async))
})();
var state__18988__auto__ = (function (){var statearr_19425 = f__18987__auto__.call(null);
(statearr_19425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto___19552);

return statearr_19425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(__19540,c__18986__auto___19552,G__19371_19541,n__17722__auto___19539,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19561 = (__19540 + (1));
__19540 = G__19561;
continue;
} else {
}
break;
}

var c__18986__auto___19562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto___19562,jobs,results,process,async){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto___19562,jobs,results,process,async){
return (function (state_19447){
var state_val_19448 = (state_19447[(1)]);
if((state_val_19448 === (1))){
var state_19447__$1 = state_19447;
var statearr_19449_19563 = state_19447__$1;
(statearr_19449_19563[(2)] = null);

(statearr_19449_19563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (2))){
var state_19447__$1 = state_19447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19447__$1,(4),from);
} else {
if((state_val_19448 === (3))){
var inst_19445 = (state_19447[(2)]);
var state_19447__$1 = state_19447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19447__$1,inst_19445);
} else {
if((state_val_19448 === (4))){
var inst_19428 = (state_19447[(7)]);
var inst_19428__$1 = (state_19447[(2)]);
var inst_19429 = (inst_19428__$1 == null);
var state_19447__$1 = (function (){var statearr_19450 = state_19447;
(statearr_19450[(7)] = inst_19428__$1);

return statearr_19450;
})();
if(cljs.core.truth_(inst_19429)){
var statearr_19451_19564 = state_19447__$1;
(statearr_19451_19564[(1)] = (5));

} else {
var statearr_19452_19565 = state_19447__$1;
(statearr_19452_19565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (5))){
var inst_19431 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19447__$1 = state_19447;
var statearr_19453_19566 = state_19447__$1;
(statearr_19453_19566[(2)] = inst_19431);

(statearr_19453_19566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (6))){
var inst_19428 = (state_19447[(7)]);
var inst_19433 = (state_19447[(8)]);
var inst_19433__$1 = cljs.core.async.chan.call(null,(1));
var inst_19434 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19435 = [inst_19428,inst_19433__$1];
var inst_19436 = (new cljs.core.PersistentVector(null,2,(5),inst_19434,inst_19435,null));
var state_19447__$1 = (function (){var statearr_19454 = state_19447;
(statearr_19454[(8)] = inst_19433__$1);

return statearr_19454;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19447__$1,(8),jobs,inst_19436);
} else {
if((state_val_19448 === (7))){
var inst_19443 = (state_19447[(2)]);
var state_19447__$1 = state_19447;
var statearr_19455_19567 = state_19447__$1;
(statearr_19455_19567[(2)] = inst_19443);

(statearr_19455_19567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (8))){
var inst_19433 = (state_19447[(8)]);
var inst_19438 = (state_19447[(2)]);
var state_19447__$1 = (function (){var statearr_19456 = state_19447;
(statearr_19456[(9)] = inst_19438);

return statearr_19456;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19447__$1,(9),results,inst_19433);
} else {
if((state_val_19448 === (9))){
var inst_19440 = (state_19447[(2)]);
var state_19447__$1 = (function (){var statearr_19457 = state_19447;
(statearr_19457[(10)] = inst_19440);

return statearr_19457;
})();
var statearr_19458_19568 = state_19447__$1;
(statearr_19458_19568[(2)] = null);

(statearr_19458_19568[(1)] = (2));


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
});})(c__18986__auto___19562,jobs,results,process,async))
;
return ((function (switch__18874__auto__,c__18986__auto___19562,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____0 = (function (){
var statearr_19462 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19462[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__);

(statearr_19462[(1)] = (1));

return statearr_19462;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____1 = (function (state_19447){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_19447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e19463){if((e19463 instanceof Object)){
var ex__18878__auto__ = e19463;
var statearr_19464_19569 = state_19447;
(statearr_19464_19569[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19570 = state_19447;
state_19447 = G__19570;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__ = function(state_19447){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____1.call(this,state_19447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto___19562,jobs,results,process,async))
})();
var state__18988__auto__ = (function (){var statearr_19465 = f__18987__auto__.call(null);
(statearr_19465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto___19562);

return statearr_19465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto___19562,jobs,results,process,async))
);


var c__18986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto__,jobs,results,process,async){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto__,jobs,results,process,async){
return (function (state_19503){
var state_val_19504 = (state_19503[(1)]);
if((state_val_19504 === (7))){
var inst_19499 = (state_19503[(2)]);
var state_19503__$1 = state_19503;
var statearr_19505_19571 = state_19503__$1;
(statearr_19505_19571[(2)] = inst_19499);

(statearr_19505_19571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (20))){
var state_19503__$1 = state_19503;
var statearr_19506_19572 = state_19503__$1;
(statearr_19506_19572[(2)] = null);

(statearr_19506_19572[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (1))){
var state_19503__$1 = state_19503;
var statearr_19507_19573 = state_19503__$1;
(statearr_19507_19573[(2)] = null);

(statearr_19507_19573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (4))){
var inst_19468 = (state_19503[(7)]);
var inst_19468__$1 = (state_19503[(2)]);
var inst_19469 = (inst_19468__$1 == null);
var state_19503__$1 = (function (){var statearr_19508 = state_19503;
(statearr_19508[(7)] = inst_19468__$1);

return statearr_19508;
})();
if(cljs.core.truth_(inst_19469)){
var statearr_19509_19574 = state_19503__$1;
(statearr_19509_19574[(1)] = (5));

} else {
var statearr_19510_19575 = state_19503__$1;
(statearr_19510_19575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (15))){
var inst_19481 = (state_19503[(8)]);
var state_19503__$1 = state_19503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19503__$1,(18),to,inst_19481);
} else {
if((state_val_19504 === (21))){
var inst_19494 = (state_19503[(2)]);
var state_19503__$1 = state_19503;
var statearr_19511_19576 = state_19503__$1;
(statearr_19511_19576[(2)] = inst_19494);

(statearr_19511_19576[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (13))){
var inst_19496 = (state_19503[(2)]);
var state_19503__$1 = (function (){var statearr_19512 = state_19503;
(statearr_19512[(9)] = inst_19496);

return statearr_19512;
})();
var statearr_19513_19577 = state_19503__$1;
(statearr_19513_19577[(2)] = null);

(statearr_19513_19577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (6))){
var inst_19468 = (state_19503[(7)]);
var state_19503__$1 = state_19503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19503__$1,(11),inst_19468);
} else {
if((state_val_19504 === (17))){
var inst_19489 = (state_19503[(2)]);
var state_19503__$1 = state_19503;
if(cljs.core.truth_(inst_19489)){
var statearr_19514_19578 = state_19503__$1;
(statearr_19514_19578[(1)] = (19));

} else {
var statearr_19515_19579 = state_19503__$1;
(statearr_19515_19579[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (3))){
var inst_19501 = (state_19503[(2)]);
var state_19503__$1 = state_19503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19503__$1,inst_19501);
} else {
if((state_val_19504 === (12))){
var inst_19478 = (state_19503[(10)]);
var state_19503__$1 = state_19503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19503__$1,(14),inst_19478);
} else {
if((state_val_19504 === (2))){
var state_19503__$1 = state_19503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19503__$1,(4),results);
} else {
if((state_val_19504 === (19))){
var state_19503__$1 = state_19503;
var statearr_19516_19580 = state_19503__$1;
(statearr_19516_19580[(2)] = null);

(statearr_19516_19580[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (11))){
var inst_19478 = (state_19503[(2)]);
var state_19503__$1 = (function (){var statearr_19517 = state_19503;
(statearr_19517[(10)] = inst_19478);

return statearr_19517;
})();
var statearr_19518_19581 = state_19503__$1;
(statearr_19518_19581[(2)] = null);

(statearr_19518_19581[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (9))){
var state_19503__$1 = state_19503;
var statearr_19519_19582 = state_19503__$1;
(statearr_19519_19582[(2)] = null);

(statearr_19519_19582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (5))){
var state_19503__$1 = state_19503;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19520_19583 = state_19503__$1;
(statearr_19520_19583[(1)] = (8));

} else {
var statearr_19521_19584 = state_19503__$1;
(statearr_19521_19584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (14))){
var inst_19481 = (state_19503[(8)]);
var inst_19483 = (state_19503[(11)]);
var inst_19481__$1 = (state_19503[(2)]);
var inst_19482 = (inst_19481__$1 == null);
var inst_19483__$1 = cljs.core.not.call(null,inst_19482);
var state_19503__$1 = (function (){var statearr_19522 = state_19503;
(statearr_19522[(8)] = inst_19481__$1);

(statearr_19522[(11)] = inst_19483__$1);

return statearr_19522;
})();
if(inst_19483__$1){
var statearr_19523_19585 = state_19503__$1;
(statearr_19523_19585[(1)] = (15));

} else {
var statearr_19524_19586 = state_19503__$1;
(statearr_19524_19586[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (16))){
var inst_19483 = (state_19503[(11)]);
var state_19503__$1 = state_19503;
var statearr_19525_19587 = state_19503__$1;
(statearr_19525_19587[(2)] = inst_19483);

(statearr_19525_19587[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (10))){
var inst_19475 = (state_19503[(2)]);
var state_19503__$1 = state_19503;
var statearr_19526_19588 = state_19503__$1;
(statearr_19526_19588[(2)] = inst_19475);

(statearr_19526_19588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (18))){
var inst_19486 = (state_19503[(2)]);
var state_19503__$1 = state_19503;
var statearr_19527_19589 = state_19503__$1;
(statearr_19527_19589[(2)] = inst_19486);

(statearr_19527_19589[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (8))){
var inst_19472 = cljs.core.async.close_BANG_.call(null,to);
var state_19503__$1 = state_19503;
var statearr_19528_19590 = state_19503__$1;
(statearr_19528_19590[(2)] = inst_19472);

(statearr_19528_19590[(1)] = (10));


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
});})(c__18986__auto__,jobs,results,process,async))
;
return ((function (switch__18874__auto__,c__18986__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____0 = (function (){
var statearr_19532 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__);

(statearr_19532[(1)] = (1));

return statearr_19532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____1 = (function (state_19503){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_19503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e19533){if((e19533 instanceof Object)){
var ex__18878__auto__ = e19533;
var statearr_19534_19591 = state_19503;
(statearr_19534_19591[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19592 = state_19503;
state_19503 = G__19592;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__ = function(state_19503){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____1.call(this,state_19503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18875__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto__,jobs,results,process,async))
})();
var state__18988__auto__ = (function (){var statearr_19535 = f__18987__auto__.call(null);
(statearr_19535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto__);

return statearr_19535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto__,jobs,results,process,async))
);

return c__18986__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args19593 = [];
var len__17877__auto___19596 = arguments.length;
var i__17878__auto___19597 = (0);
while(true){
if((i__17878__auto___19597 < len__17877__auto___19596)){
args19593.push((arguments[i__17878__auto___19597]));

var G__19598 = (i__17878__auto___19597 + (1));
i__17878__auto___19597 = G__19598;
continue;
} else {
}
break;
}

var G__19595 = args19593.length;
switch (G__19595) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19593.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args19600 = [];
var len__17877__auto___19603 = arguments.length;
var i__17878__auto___19604 = (0);
while(true){
if((i__17878__auto___19604 < len__17877__auto___19603)){
args19600.push((arguments[i__17878__auto___19604]));

var G__19605 = (i__17878__auto___19604 + (1));
i__17878__auto___19604 = G__19605;
continue;
} else {
}
break;
}

var G__19602 = args19600.length;
switch (G__19602) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19600.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args19607 = [];
var len__17877__auto___19660 = arguments.length;
var i__17878__auto___19661 = (0);
while(true){
if((i__17878__auto___19661 < len__17877__auto___19660)){
args19607.push((arguments[i__17878__auto___19661]));

var G__19662 = (i__17878__auto___19661 + (1));
i__17878__auto___19661 = G__19662;
continue;
} else {
}
break;
}

var G__19609 = args19607.length;
switch (G__19609) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19607.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18986__auto___19664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto___19664,tc,fc){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto___19664,tc,fc){
return (function (state_19635){
var state_val_19636 = (state_19635[(1)]);
if((state_val_19636 === (7))){
var inst_19631 = (state_19635[(2)]);
var state_19635__$1 = state_19635;
var statearr_19637_19665 = state_19635__$1;
(statearr_19637_19665[(2)] = inst_19631);

(statearr_19637_19665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (1))){
var state_19635__$1 = state_19635;
var statearr_19638_19666 = state_19635__$1;
(statearr_19638_19666[(2)] = null);

(statearr_19638_19666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (4))){
var inst_19612 = (state_19635[(7)]);
var inst_19612__$1 = (state_19635[(2)]);
var inst_19613 = (inst_19612__$1 == null);
var state_19635__$1 = (function (){var statearr_19639 = state_19635;
(statearr_19639[(7)] = inst_19612__$1);

return statearr_19639;
})();
if(cljs.core.truth_(inst_19613)){
var statearr_19640_19667 = state_19635__$1;
(statearr_19640_19667[(1)] = (5));

} else {
var statearr_19641_19668 = state_19635__$1;
(statearr_19641_19668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (13))){
var state_19635__$1 = state_19635;
var statearr_19642_19669 = state_19635__$1;
(statearr_19642_19669[(2)] = null);

(statearr_19642_19669[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (6))){
var inst_19612 = (state_19635[(7)]);
var inst_19618 = p.call(null,inst_19612);
var state_19635__$1 = state_19635;
if(cljs.core.truth_(inst_19618)){
var statearr_19643_19670 = state_19635__$1;
(statearr_19643_19670[(1)] = (9));

} else {
var statearr_19644_19671 = state_19635__$1;
(statearr_19644_19671[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (3))){
var inst_19633 = (state_19635[(2)]);
var state_19635__$1 = state_19635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19635__$1,inst_19633);
} else {
if((state_val_19636 === (12))){
var state_19635__$1 = state_19635;
var statearr_19645_19672 = state_19635__$1;
(statearr_19645_19672[(2)] = null);

(statearr_19645_19672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (2))){
var state_19635__$1 = state_19635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19635__$1,(4),ch);
} else {
if((state_val_19636 === (11))){
var inst_19612 = (state_19635[(7)]);
var inst_19622 = (state_19635[(2)]);
var state_19635__$1 = state_19635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19635__$1,(8),inst_19622,inst_19612);
} else {
if((state_val_19636 === (9))){
var state_19635__$1 = state_19635;
var statearr_19646_19673 = state_19635__$1;
(statearr_19646_19673[(2)] = tc);

(statearr_19646_19673[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (5))){
var inst_19615 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19616 = cljs.core.async.close_BANG_.call(null,fc);
var state_19635__$1 = (function (){var statearr_19647 = state_19635;
(statearr_19647[(8)] = inst_19615);

return statearr_19647;
})();
var statearr_19648_19674 = state_19635__$1;
(statearr_19648_19674[(2)] = inst_19616);

(statearr_19648_19674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (14))){
var inst_19629 = (state_19635[(2)]);
var state_19635__$1 = state_19635;
var statearr_19649_19675 = state_19635__$1;
(statearr_19649_19675[(2)] = inst_19629);

(statearr_19649_19675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (10))){
var state_19635__$1 = state_19635;
var statearr_19650_19676 = state_19635__$1;
(statearr_19650_19676[(2)] = fc);

(statearr_19650_19676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (8))){
var inst_19624 = (state_19635[(2)]);
var state_19635__$1 = state_19635;
if(cljs.core.truth_(inst_19624)){
var statearr_19651_19677 = state_19635__$1;
(statearr_19651_19677[(1)] = (12));

} else {
var statearr_19652_19678 = state_19635__$1;
(statearr_19652_19678[(1)] = (13));

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
});})(c__18986__auto___19664,tc,fc))
;
return ((function (switch__18874__auto__,c__18986__auto___19664,tc,fc){
return (function() {
var cljs$core$async$state_machine__18875__auto__ = null;
var cljs$core$async$state_machine__18875__auto____0 = (function (){
var statearr_19656 = [null,null,null,null,null,null,null,null,null];
(statearr_19656[(0)] = cljs$core$async$state_machine__18875__auto__);

(statearr_19656[(1)] = (1));

return statearr_19656;
});
var cljs$core$async$state_machine__18875__auto____1 = (function (state_19635){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_19635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e19657){if((e19657 instanceof Object)){
var ex__18878__auto__ = e19657;
var statearr_19658_19679 = state_19635;
(statearr_19658_19679[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19680 = state_19635;
state_19635 = G__19680;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
cljs$core$async$state_machine__18875__auto__ = function(state_19635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18875__auto____1.call(this,state_19635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18875__auto____0;
cljs$core$async$state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18875__auto____1;
return cljs$core$async$state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto___19664,tc,fc))
})();
var state__18988__auto__ = (function (){var statearr_19659 = f__18987__auto__.call(null);
(statearr_19659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto___19664);

return statearr_19659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto___19664,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto__){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto__){
return (function (state_19744){
var state_val_19745 = (state_19744[(1)]);
if((state_val_19745 === (7))){
var inst_19740 = (state_19744[(2)]);
var state_19744__$1 = state_19744;
var statearr_19746_19767 = state_19744__$1;
(statearr_19746_19767[(2)] = inst_19740);

(statearr_19746_19767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (1))){
var inst_19724 = init;
var state_19744__$1 = (function (){var statearr_19747 = state_19744;
(statearr_19747[(7)] = inst_19724);

return statearr_19747;
})();
var statearr_19748_19768 = state_19744__$1;
(statearr_19748_19768[(2)] = null);

(statearr_19748_19768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (4))){
var inst_19727 = (state_19744[(8)]);
var inst_19727__$1 = (state_19744[(2)]);
var inst_19728 = (inst_19727__$1 == null);
var state_19744__$1 = (function (){var statearr_19749 = state_19744;
(statearr_19749[(8)] = inst_19727__$1);

return statearr_19749;
})();
if(cljs.core.truth_(inst_19728)){
var statearr_19750_19769 = state_19744__$1;
(statearr_19750_19769[(1)] = (5));

} else {
var statearr_19751_19770 = state_19744__$1;
(statearr_19751_19770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (6))){
var inst_19727 = (state_19744[(8)]);
var inst_19731 = (state_19744[(9)]);
var inst_19724 = (state_19744[(7)]);
var inst_19731__$1 = f.call(null,inst_19724,inst_19727);
var inst_19732 = cljs.core.reduced_QMARK_.call(null,inst_19731__$1);
var state_19744__$1 = (function (){var statearr_19752 = state_19744;
(statearr_19752[(9)] = inst_19731__$1);

return statearr_19752;
})();
if(inst_19732){
var statearr_19753_19771 = state_19744__$1;
(statearr_19753_19771[(1)] = (8));

} else {
var statearr_19754_19772 = state_19744__$1;
(statearr_19754_19772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (3))){
var inst_19742 = (state_19744[(2)]);
var state_19744__$1 = state_19744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19744__$1,inst_19742);
} else {
if((state_val_19745 === (2))){
var state_19744__$1 = state_19744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19744__$1,(4),ch);
} else {
if((state_val_19745 === (9))){
var inst_19731 = (state_19744[(9)]);
var inst_19724 = inst_19731;
var state_19744__$1 = (function (){var statearr_19755 = state_19744;
(statearr_19755[(7)] = inst_19724);

return statearr_19755;
})();
var statearr_19756_19773 = state_19744__$1;
(statearr_19756_19773[(2)] = null);

(statearr_19756_19773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (5))){
var inst_19724 = (state_19744[(7)]);
var state_19744__$1 = state_19744;
var statearr_19757_19774 = state_19744__$1;
(statearr_19757_19774[(2)] = inst_19724);

(statearr_19757_19774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (10))){
var inst_19738 = (state_19744[(2)]);
var state_19744__$1 = state_19744;
var statearr_19758_19775 = state_19744__$1;
(statearr_19758_19775[(2)] = inst_19738);

(statearr_19758_19775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (8))){
var inst_19731 = (state_19744[(9)]);
var inst_19734 = cljs.core.deref.call(null,inst_19731);
var state_19744__$1 = state_19744;
var statearr_19759_19776 = state_19744__$1;
(statearr_19759_19776[(2)] = inst_19734);

(statearr_19759_19776[(1)] = (10));


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
});})(c__18986__auto__))
;
return ((function (switch__18874__auto__,c__18986__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18875__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18875__auto____0 = (function (){
var statearr_19763 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19763[(0)] = cljs$core$async$reduce_$_state_machine__18875__auto__);

(statearr_19763[(1)] = (1));

return statearr_19763;
});
var cljs$core$async$reduce_$_state_machine__18875__auto____1 = (function (state_19744){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_19744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e19764){if((e19764 instanceof Object)){
var ex__18878__auto__ = e19764;
var statearr_19765_19777 = state_19744;
(statearr_19765_19777[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19778 = state_19744;
state_19744 = G__19778;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18875__auto__ = function(state_19744){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18875__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18875__auto____1.call(this,state_19744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18875__auto____0;
cljs$core$async$reduce_$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18875__auto____1;
return cljs$core$async$reduce_$_state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto__))
})();
var state__18988__auto__ = (function (){var statearr_19766 = f__18987__auto__.call(null);
(statearr_19766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto__);

return statearr_19766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto__))
);

return c__18986__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args19779 = [];
var len__17877__auto___19831 = arguments.length;
var i__17878__auto___19832 = (0);
while(true){
if((i__17878__auto___19832 < len__17877__auto___19831)){
args19779.push((arguments[i__17878__auto___19832]));

var G__19833 = (i__17878__auto___19832 + (1));
i__17878__auto___19832 = G__19833;
continue;
} else {
}
break;
}

var G__19781 = args19779.length;
switch (G__19781) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19779.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto__){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto__){
return (function (state_19806){
var state_val_19807 = (state_19806[(1)]);
if((state_val_19807 === (7))){
var inst_19788 = (state_19806[(2)]);
var state_19806__$1 = state_19806;
var statearr_19808_19835 = state_19806__$1;
(statearr_19808_19835[(2)] = inst_19788);

(statearr_19808_19835[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19807 === (1))){
var inst_19782 = cljs.core.seq.call(null,coll);
var inst_19783 = inst_19782;
var state_19806__$1 = (function (){var statearr_19809 = state_19806;
(statearr_19809[(7)] = inst_19783);

return statearr_19809;
})();
var statearr_19810_19836 = state_19806__$1;
(statearr_19810_19836[(2)] = null);

(statearr_19810_19836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19807 === (4))){
var inst_19783 = (state_19806[(7)]);
var inst_19786 = cljs.core.first.call(null,inst_19783);
var state_19806__$1 = state_19806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19806__$1,(7),ch,inst_19786);
} else {
if((state_val_19807 === (13))){
var inst_19800 = (state_19806[(2)]);
var state_19806__$1 = state_19806;
var statearr_19811_19837 = state_19806__$1;
(statearr_19811_19837[(2)] = inst_19800);

(statearr_19811_19837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19807 === (6))){
var inst_19791 = (state_19806[(2)]);
var state_19806__$1 = state_19806;
if(cljs.core.truth_(inst_19791)){
var statearr_19812_19838 = state_19806__$1;
(statearr_19812_19838[(1)] = (8));

} else {
var statearr_19813_19839 = state_19806__$1;
(statearr_19813_19839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19807 === (3))){
var inst_19804 = (state_19806[(2)]);
var state_19806__$1 = state_19806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19806__$1,inst_19804);
} else {
if((state_val_19807 === (12))){
var state_19806__$1 = state_19806;
var statearr_19814_19840 = state_19806__$1;
(statearr_19814_19840[(2)] = null);

(statearr_19814_19840[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19807 === (2))){
var inst_19783 = (state_19806[(7)]);
var state_19806__$1 = state_19806;
if(cljs.core.truth_(inst_19783)){
var statearr_19815_19841 = state_19806__$1;
(statearr_19815_19841[(1)] = (4));

} else {
var statearr_19816_19842 = state_19806__$1;
(statearr_19816_19842[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19807 === (11))){
var inst_19797 = cljs.core.async.close_BANG_.call(null,ch);
var state_19806__$1 = state_19806;
var statearr_19817_19843 = state_19806__$1;
(statearr_19817_19843[(2)] = inst_19797);

(statearr_19817_19843[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19807 === (9))){
var state_19806__$1 = state_19806;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19818_19844 = state_19806__$1;
(statearr_19818_19844[(1)] = (11));

} else {
var statearr_19819_19845 = state_19806__$1;
(statearr_19819_19845[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19807 === (5))){
var inst_19783 = (state_19806[(7)]);
var state_19806__$1 = state_19806;
var statearr_19820_19846 = state_19806__$1;
(statearr_19820_19846[(2)] = inst_19783);

(statearr_19820_19846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19807 === (10))){
var inst_19802 = (state_19806[(2)]);
var state_19806__$1 = state_19806;
var statearr_19821_19847 = state_19806__$1;
(statearr_19821_19847[(2)] = inst_19802);

(statearr_19821_19847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19807 === (8))){
var inst_19783 = (state_19806[(7)]);
var inst_19793 = cljs.core.next.call(null,inst_19783);
var inst_19783__$1 = inst_19793;
var state_19806__$1 = (function (){var statearr_19822 = state_19806;
(statearr_19822[(7)] = inst_19783__$1);

return statearr_19822;
})();
var statearr_19823_19848 = state_19806__$1;
(statearr_19823_19848[(2)] = null);

(statearr_19823_19848[(1)] = (2));


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
});})(c__18986__auto__))
;
return ((function (switch__18874__auto__,c__18986__auto__){
return (function() {
var cljs$core$async$state_machine__18875__auto__ = null;
var cljs$core$async$state_machine__18875__auto____0 = (function (){
var statearr_19827 = [null,null,null,null,null,null,null,null];
(statearr_19827[(0)] = cljs$core$async$state_machine__18875__auto__);

(statearr_19827[(1)] = (1));

return statearr_19827;
});
var cljs$core$async$state_machine__18875__auto____1 = (function (state_19806){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_19806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e19828){if((e19828 instanceof Object)){
var ex__18878__auto__ = e19828;
var statearr_19829_19849 = state_19806;
(statearr_19829_19849[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19850 = state_19806;
state_19806 = G__19850;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
cljs$core$async$state_machine__18875__auto__ = function(state_19806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18875__auto____1.call(this,state_19806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18875__auto____0;
cljs$core$async$state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18875__auto____1;
return cljs$core$async$state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto__))
})();
var state__18988__auto__ = (function (){var statearr_19830 = f__18987__auto__.call(null);
(statearr_19830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto__);

return statearr_19830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto__))
);

return c__18986__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17474__auto__ = (((_ == null))?null:_);
var m__17475__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,_);
} else {
var m__17475__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17475__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,ch);
} else {
var m__17475__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m);
} else {
var m__17475__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20072 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20072 = (function (mult,ch,cs,meta20073){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20073 = meta20073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20074,meta20073__$1){
var self__ = this;
var _20074__$1 = this;
return (new cljs.core.async.t_cljs$core$async20072(self__.mult,self__.ch,self__.cs,meta20073__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20074){
var self__ = this;
var _20074__$1 = this;
return self__.meta20073;
});})(cs))
;

cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20072.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20073","meta20073",1044284167,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20072.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20072.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20072";

cljs.core.async.t_cljs$core$async20072.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async20072");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20072 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20072(mult__$1,ch__$1,cs__$1,meta20073){
return (new cljs.core.async.t_cljs$core$async20072(mult__$1,ch__$1,cs__$1,meta20073));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20072(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18986__auto___20293 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto___20293,cs,m,dchan,dctr,done){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto___20293,cs,m,dchan,dctr,done){
return (function (state_20205){
var state_val_20206 = (state_20205[(1)]);
if((state_val_20206 === (7))){
var inst_20201 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
var statearr_20207_20294 = state_20205__$1;
(statearr_20207_20294[(2)] = inst_20201);

(statearr_20207_20294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (20))){
var inst_20106 = (state_20205[(7)]);
var inst_20116 = cljs.core.first.call(null,inst_20106);
var inst_20117 = cljs.core.nth.call(null,inst_20116,(0),null);
var inst_20118 = cljs.core.nth.call(null,inst_20116,(1),null);
var state_20205__$1 = (function (){var statearr_20208 = state_20205;
(statearr_20208[(8)] = inst_20117);

return statearr_20208;
})();
if(cljs.core.truth_(inst_20118)){
var statearr_20209_20295 = state_20205__$1;
(statearr_20209_20295[(1)] = (22));

} else {
var statearr_20210_20296 = state_20205__$1;
(statearr_20210_20296[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (27))){
var inst_20146 = (state_20205[(9)]);
var inst_20148 = (state_20205[(10)]);
var inst_20153 = (state_20205[(11)]);
var inst_20077 = (state_20205[(12)]);
var inst_20153__$1 = cljs.core._nth.call(null,inst_20146,inst_20148);
var inst_20154 = cljs.core.async.put_BANG_.call(null,inst_20153__$1,inst_20077,done);
var state_20205__$1 = (function (){var statearr_20211 = state_20205;
(statearr_20211[(11)] = inst_20153__$1);

return statearr_20211;
})();
if(cljs.core.truth_(inst_20154)){
var statearr_20212_20297 = state_20205__$1;
(statearr_20212_20297[(1)] = (30));

} else {
var statearr_20213_20298 = state_20205__$1;
(statearr_20213_20298[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (1))){
var state_20205__$1 = state_20205;
var statearr_20214_20299 = state_20205__$1;
(statearr_20214_20299[(2)] = null);

(statearr_20214_20299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (24))){
var inst_20106 = (state_20205[(7)]);
var inst_20123 = (state_20205[(2)]);
var inst_20124 = cljs.core.next.call(null,inst_20106);
var inst_20086 = inst_20124;
var inst_20087 = null;
var inst_20088 = (0);
var inst_20089 = (0);
var state_20205__$1 = (function (){var statearr_20215 = state_20205;
(statearr_20215[(13)] = inst_20089);

(statearr_20215[(14)] = inst_20088);

(statearr_20215[(15)] = inst_20086);

(statearr_20215[(16)] = inst_20087);

(statearr_20215[(17)] = inst_20123);

return statearr_20215;
})();
var statearr_20216_20300 = state_20205__$1;
(statearr_20216_20300[(2)] = null);

(statearr_20216_20300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (39))){
var state_20205__$1 = state_20205;
var statearr_20220_20301 = state_20205__$1;
(statearr_20220_20301[(2)] = null);

(statearr_20220_20301[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (4))){
var inst_20077 = (state_20205[(12)]);
var inst_20077__$1 = (state_20205[(2)]);
var inst_20078 = (inst_20077__$1 == null);
var state_20205__$1 = (function (){var statearr_20221 = state_20205;
(statearr_20221[(12)] = inst_20077__$1);

return statearr_20221;
})();
if(cljs.core.truth_(inst_20078)){
var statearr_20222_20302 = state_20205__$1;
(statearr_20222_20302[(1)] = (5));

} else {
var statearr_20223_20303 = state_20205__$1;
(statearr_20223_20303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (15))){
var inst_20089 = (state_20205[(13)]);
var inst_20088 = (state_20205[(14)]);
var inst_20086 = (state_20205[(15)]);
var inst_20087 = (state_20205[(16)]);
var inst_20102 = (state_20205[(2)]);
var inst_20103 = (inst_20089 + (1));
var tmp20217 = inst_20088;
var tmp20218 = inst_20086;
var tmp20219 = inst_20087;
var inst_20086__$1 = tmp20218;
var inst_20087__$1 = tmp20219;
var inst_20088__$1 = tmp20217;
var inst_20089__$1 = inst_20103;
var state_20205__$1 = (function (){var statearr_20224 = state_20205;
(statearr_20224[(13)] = inst_20089__$1);

(statearr_20224[(14)] = inst_20088__$1);

(statearr_20224[(15)] = inst_20086__$1);

(statearr_20224[(18)] = inst_20102);

(statearr_20224[(16)] = inst_20087__$1);

return statearr_20224;
})();
var statearr_20225_20304 = state_20205__$1;
(statearr_20225_20304[(2)] = null);

(statearr_20225_20304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (21))){
var inst_20127 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
var statearr_20229_20305 = state_20205__$1;
(statearr_20229_20305[(2)] = inst_20127);

(statearr_20229_20305[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (31))){
var inst_20153 = (state_20205[(11)]);
var inst_20157 = done.call(null,null);
var inst_20158 = cljs.core.async.untap_STAR_.call(null,m,inst_20153);
var state_20205__$1 = (function (){var statearr_20230 = state_20205;
(statearr_20230[(19)] = inst_20157);

return statearr_20230;
})();
var statearr_20231_20306 = state_20205__$1;
(statearr_20231_20306[(2)] = inst_20158);

(statearr_20231_20306[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (32))){
var inst_20146 = (state_20205[(9)]);
var inst_20148 = (state_20205[(10)]);
var inst_20147 = (state_20205[(20)]);
var inst_20145 = (state_20205[(21)]);
var inst_20160 = (state_20205[(2)]);
var inst_20161 = (inst_20148 + (1));
var tmp20226 = inst_20146;
var tmp20227 = inst_20147;
var tmp20228 = inst_20145;
var inst_20145__$1 = tmp20228;
var inst_20146__$1 = tmp20226;
var inst_20147__$1 = tmp20227;
var inst_20148__$1 = inst_20161;
var state_20205__$1 = (function (){var statearr_20232 = state_20205;
(statearr_20232[(9)] = inst_20146__$1);

(statearr_20232[(10)] = inst_20148__$1);

(statearr_20232[(20)] = inst_20147__$1);

(statearr_20232[(22)] = inst_20160);

(statearr_20232[(21)] = inst_20145__$1);

return statearr_20232;
})();
var statearr_20233_20307 = state_20205__$1;
(statearr_20233_20307[(2)] = null);

(statearr_20233_20307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (40))){
var inst_20173 = (state_20205[(23)]);
var inst_20177 = done.call(null,null);
var inst_20178 = cljs.core.async.untap_STAR_.call(null,m,inst_20173);
var state_20205__$1 = (function (){var statearr_20234 = state_20205;
(statearr_20234[(24)] = inst_20177);

return statearr_20234;
})();
var statearr_20235_20308 = state_20205__$1;
(statearr_20235_20308[(2)] = inst_20178);

(statearr_20235_20308[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (33))){
var inst_20164 = (state_20205[(25)]);
var inst_20166 = cljs.core.chunked_seq_QMARK_.call(null,inst_20164);
var state_20205__$1 = state_20205;
if(inst_20166){
var statearr_20236_20309 = state_20205__$1;
(statearr_20236_20309[(1)] = (36));

} else {
var statearr_20237_20310 = state_20205__$1;
(statearr_20237_20310[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (13))){
var inst_20096 = (state_20205[(26)]);
var inst_20099 = cljs.core.async.close_BANG_.call(null,inst_20096);
var state_20205__$1 = state_20205;
var statearr_20238_20311 = state_20205__$1;
(statearr_20238_20311[(2)] = inst_20099);

(statearr_20238_20311[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (22))){
var inst_20117 = (state_20205[(8)]);
var inst_20120 = cljs.core.async.close_BANG_.call(null,inst_20117);
var state_20205__$1 = state_20205;
var statearr_20239_20312 = state_20205__$1;
(statearr_20239_20312[(2)] = inst_20120);

(statearr_20239_20312[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (36))){
var inst_20164 = (state_20205[(25)]);
var inst_20168 = cljs.core.chunk_first.call(null,inst_20164);
var inst_20169 = cljs.core.chunk_rest.call(null,inst_20164);
var inst_20170 = cljs.core.count.call(null,inst_20168);
var inst_20145 = inst_20169;
var inst_20146 = inst_20168;
var inst_20147 = inst_20170;
var inst_20148 = (0);
var state_20205__$1 = (function (){var statearr_20240 = state_20205;
(statearr_20240[(9)] = inst_20146);

(statearr_20240[(10)] = inst_20148);

(statearr_20240[(20)] = inst_20147);

(statearr_20240[(21)] = inst_20145);

return statearr_20240;
})();
var statearr_20241_20313 = state_20205__$1;
(statearr_20241_20313[(2)] = null);

(statearr_20241_20313[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (41))){
var inst_20164 = (state_20205[(25)]);
var inst_20180 = (state_20205[(2)]);
var inst_20181 = cljs.core.next.call(null,inst_20164);
var inst_20145 = inst_20181;
var inst_20146 = null;
var inst_20147 = (0);
var inst_20148 = (0);
var state_20205__$1 = (function (){var statearr_20242 = state_20205;
(statearr_20242[(9)] = inst_20146);

(statearr_20242[(10)] = inst_20148);

(statearr_20242[(20)] = inst_20147);

(statearr_20242[(21)] = inst_20145);

(statearr_20242[(27)] = inst_20180);

return statearr_20242;
})();
var statearr_20243_20314 = state_20205__$1;
(statearr_20243_20314[(2)] = null);

(statearr_20243_20314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (43))){
var state_20205__$1 = state_20205;
var statearr_20244_20315 = state_20205__$1;
(statearr_20244_20315[(2)] = null);

(statearr_20244_20315[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (29))){
var inst_20189 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
var statearr_20245_20316 = state_20205__$1;
(statearr_20245_20316[(2)] = inst_20189);

(statearr_20245_20316[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (44))){
var inst_20198 = (state_20205[(2)]);
var state_20205__$1 = (function (){var statearr_20246 = state_20205;
(statearr_20246[(28)] = inst_20198);

return statearr_20246;
})();
var statearr_20247_20317 = state_20205__$1;
(statearr_20247_20317[(2)] = null);

(statearr_20247_20317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (6))){
var inst_20137 = (state_20205[(29)]);
var inst_20136 = cljs.core.deref.call(null,cs);
var inst_20137__$1 = cljs.core.keys.call(null,inst_20136);
var inst_20138 = cljs.core.count.call(null,inst_20137__$1);
var inst_20139 = cljs.core.reset_BANG_.call(null,dctr,inst_20138);
var inst_20144 = cljs.core.seq.call(null,inst_20137__$1);
var inst_20145 = inst_20144;
var inst_20146 = null;
var inst_20147 = (0);
var inst_20148 = (0);
var state_20205__$1 = (function (){var statearr_20248 = state_20205;
(statearr_20248[(9)] = inst_20146);

(statearr_20248[(10)] = inst_20148);

(statearr_20248[(20)] = inst_20147);

(statearr_20248[(29)] = inst_20137__$1);

(statearr_20248[(30)] = inst_20139);

(statearr_20248[(21)] = inst_20145);

return statearr_20248;
})();
var statearr_20249_20318 = state_20205__$1;
(statearr_20249_20318[(2)] = null);

(statearr_20249_20318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (28))){
var inst_20164 = (state_20205[(25)]);
var inst_20145 = (state_20205[(21)]);
var inst_20164__$1 = cljs.core.seq.call(null,inst_20145);
var state_20205__$1 = (function (){var statearr_20250 = state_20205;
(statearr_20250[(25)] = inst_20164__$1);

return statearr_20250;
})();
if(inst_20164__$1){
var statearr_20251_20319 = state_20205__$1;
(statearr_20251_20319[(1)] = (33));

} else {
var statearr_20252_20320 = state_20205__$1;
(statearr_20252_20320[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (25))){
var inst_20148 = (state_20205[(10)]);
var inst_20147 = (state_20205[(20)]);
var inst_20150 = (inst_20148 < inst_20147);
var inst_20151 = inst_20150;
var state_20205__$1 = state_20205;
if(cljs.core.truth_(inst_20151)){
var statearr_20253_20321 = state_20205__$1;
(statearr_20253_20321[(1)] = (27));

} else {
var statearr_20254_20322 = state_20205__$1;
(statearr_20254_20322[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (34))){
var state_20205__$1 = state_20205;
var statearr_20255_20323 = state_20205__$1;
(statearr_20255_20323[(2)] = null);

(statearr_20255_20323[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (17))){
var state_20205__$1 = state_20205;
var statearr_20256_20324 = state_20205__$1;
(statearr_20256_20324[(2)] = null);

(statearr_20256_20324[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (3))){
var inst_20203 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20205__$1,inst_20203);
} else {
if((state_val_20206 === (12))){
var inst_20132 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
var statearr_20257_20325 = state_20205__$1;
(statearr_20257_20325[(2)] = inst_20132);

(statearr_20257_20325[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (2))){
var state_20205__$1 = state_20205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20205__$1,(4),ch);
} else {
if((state_val_20206 === (23))){
var state_20205__$1 = state_20205;
var statearr_20258_20326 = state_20205__$1;
(statearr_20258_20326[(2)] = null);

(statearr_20258_20326[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (35))){
var inst_20187 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
var statearr_20259_20327 = state_20205__$1;
(statearr_20259_20327[(2)] = inst_20187);

(statearr_20259_20327[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (19))){
var inst_20106 = (state_20205[(7)]);
var inst_20110 = cljs.core.chunk_first.call(null,inst_20106);
var inst_20111 = cljs.core.chunk_rest.call(null,inst_20106);
var inst_20112 = cljs.core.count.call(null,inst_20110);
var inst_20086 = inst_20111;
var inst_20087 = inst_20110;
var inst_20088 = inst_20112;
var inst_20089 = (0);
var state_20205__$1 = (function (){var statearr_20260 = state_20205;
(statearr_20260[(13)] = inst_20089);

(statearr_20260[(14)] = inst_20088);

(statearr_20260[(15)] = inst_20086);

(statearr_20260[(16)] = inst_20087);

return statearr_20260;
})();
var statearr_20261_20328 = state_20205__$1;
(statearr_20261_20328[(2)] = null);

(statearr_20261_20328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (11))){
var inst_20086 = (state_20205[(15)]);
var inst_20106 = (state_20205[(7)]);
var inst_20106__$1 = cljs.core.seq.call(null,inst_20086);
var state_20205__$1 = (function (){var statearr_20262 = state_20205;
(statearr_20262[(7)] = inst_20106__$1);

return statearr_20262;
})();
if(inst_20106__$1){
var statearr_20263_20329 = state_20205__$1;
(statearr_20263_20329[(1)] = (16));

} else {
var statearr_20264_20330 = state_20205__$1;
(statearr_20264_20330[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (9))){
var inst_20134 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
var statearr_20265_20331 = state_20205__$1;
(statearr_20265_20331[(2)] = inst_20134);

(statearr_20265_20331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (5))){
var inst_20084 = cljs.core.deref.call(null,cs);
var inst_20085 = cljs.core.seq.call(null,inst_20084);
var inst_20086 = inst_20085;
var inst_20087 = null;
var inst_20088 = (0);
var inst_20089 = (0);
var state_20205__$1 = (function (){var statearr_20266 = state_20205;
(statearr_20266[(13)] = inst_20089);

(statearr_20266[(14)] = inst_20088);

(statearr_20266[(15)] = inst_20086);

(statearr_20266[(16)] = inst_20087);

return statearr_20266;
})();
var statearr_20267_20332 = state_20205__$1;
(statearr_20267_20332[(2)] = null);

(statearr_20267_20332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (14))){
var state_20205__$1 = state_20205;
var statearr_20268_20333 = state_20205__$1;
(statearr_20268_20333[(2)] = null);

(statearr_20268_20333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (45))){
var inst_20195 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
var statearr_20269_20334 = state_20205__$1;
(statearr_20269_20334[(2)] = inst_20195);

(statearr_20269_20334[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (26))){
var inst_20137 = (state_20205[(29)]);
var inst_20191 = (state_20205[(2)]);
var inst_20192 = cljs.core.seq.call(null,inst_20137);
var state_20205__$1 = (function (){var statearr_20270 = state_20205;
(statearr_20270[(31)] = inst_20191);

return statearr_20270;
})();
if(inst_20192){
var statearr_20271_20335 = state_20205__$1;
(statearr_20271_20335[(1)] = (42));

} else {
var statearr_20272_20336 = state_20205__$1;
(statearr_20272_20336[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (16))){
var inst_20106 = (state_20205[(7)]);
var inst_20108 = cljs.core.chunked_seq_QMARK_.call(null,inst_20106);
var state_20205__$1 = state_20205;
if(inst_20108){
var statearr_20273_20337 = state_20205__$1;
(statearr_20273_20337[(1)] = (19));

} else {
var statearr_20274_20338 = state_20205__$1;
(statearr_20274_20338[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (38))){
var inst_20184 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
var statearr_20275_20339 = state_20205__$1;
(statearr_20275_20339[(2)] = inst_20184);

(statearr_20275_20339[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (30))){
var state_20205__$1 = state_20205;
var statearr_20276_20340 = state_20205__$1;
(statearr_20276_20340[(2)] = null);

(statearr_20276_20340[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (10))){
var inst_20089 = (state_20205[(13)]);
var inst_20087 = (state_20205[(16)]);
var inst_20095 = cljs.core._nth.call(null,inst_20087,inst_20089);
var inst_20096 = cljs.core.nth.call(null,inst_20095,(0),null);
var inst_20097 = cljs.core.nth.call(null,inst_20095,(1),null);
var state_20205__$1 = (function (){var statearr_20277 = state_20205;
(statearr_20277[(26)] = inst_20096);

return statearr_20277;
})();
if(cljs.core.truth_(inst_20097)){
var statearr_20278_20341 = state_20205__$1;
(statearr_20278_20341[(1)] = (13));

} else {
var statearr_20279_20342 = state_20205__$1;
(statearr_20279_20342[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (18))){
var inst_20130 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
var statearr_20280_20343 = state_20205__$1;
(statearr_20280_20343[(2)] = inst_20130);

(statearr_20280_20343[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (42))){
var state_20205__$1 = state_20205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20205__$1,(45),dchan);
} else {
if((state_val_20206 === (37))){
var inst_20077 = (state_20205[(12)]);
var inst_20173 = (state_20205[(23)]);
var inst_20164 = (state_20205[(25)]);
var inst_20173__$1 = cljs.core.first.call(null,inst_20164);
var inst_20174 = cljs.core.async.put_BANG_.call(null,inst_20173__$1,inst_20077,done);
var state_20205__$1 = (function (){var statearr_20281 = state_20205;
(statearr_20281[(23)] = inst_20173__$1);

return statearr_20281;
})();
if(cljs.core.truth_(inst_20174)){
var statearr_20282_20344 = state_20205__$1;
(statearr_20282_20344[(1)] = (39));

} else {
var statearr_20283_20345 = state_20205__$1;
(statearr_20283_20345[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (8))){
var inst_20089 = (state_20205[(13)]);
var inst_20088 = (state_20205[(14)]);
var inst_20091 = (inst_20089 < inst_20088);
var inst_20092 = inst_20091;
var state_20205__$1 = state_20205;
if(cljs.core.truth_(inst_20092)){
var statearr_20284_20346 = state_20205__$1;
(statearr_20284_20346[(1)] = (10));

} else {
var statearr_20285_20347 = state_20205__$1;
(statearr_20285_20347[(1)] = (11));

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
});})(c__18986__auto___20293,cs,m,dchan,dctr,done))
;
return ((function (switch__18874__auto__,c__18986__auto___20293,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18875__auto__ = null;
var cljs$core$async$mult_$_state_machine__18875__auto____0 = (function (){
var statearr_20289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20289[(0)] = cljs$core$async$mult_$_state_machine__18875__auto__);

(statearr_20289[(1)] = (1));

return statearr_20289;
});
var cljs$core$async$mult_$_state_machine__18875__auto____1 = (function (state_20205){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_20205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e20290){if((e20290 instanceof Object)){
var ex__18878__auto__ = e20290;
var statearr_20291_20348 = state_20205;
(statearr_20291_20348[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20349 = state_20205;
state_20205 = G__20349;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18875__auto__ = function(state_20205){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18875__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18875__auto____1.call(this,state_20205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18875__auto____0;
cljs$core$async$mult_$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18875__auto____1;
return cljs$core$async$mult_$_state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto___20293,cs,m,dchan,dctr,done))
})();
var state__18988__auto__ = (function (){var statearr_20292 = f__18987__auto__.call(null);
(statearr_20292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto___20293);

return statearr_20292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto___20293,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args20350 = [];
var len__17877__auto___20353 = arguments.length;
var i__17878__auto___20354 = (0);
while(true){
if((i__17878__auto___20354 < len__17877__auto___20353)){
args20350.push((arguments[i__17878__auto___20354]));

var G__20355 = (i__17878__auto___20354 + (1));
i__17878__auto___20354 = G__20355;
continue;
} else {
}
break;
}

var G__20352 = args20350.length;
switch (G__20352) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20350.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,ch);
} else {
var m__17475__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,ch);
} else {
var m__17475__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m);
} else {
var m__17475__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,state_map);
} else {
var m__17475__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,mode);
} else {
var m__17475__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17884__auto__ = [];
var len__17877__auto___20367 = arguments.length;
var i__17878__auto___20368 = (0);
while(true){
if((i__17878__auto___20368 < len__17877__auto___20367)){
args__17884__auto__.push((arguments[i__17878__auto___20368]));

var G__20369 = (i__17878__auto___20368 + (1));
i__17878__auto___20368 = G__20369;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((3) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17885__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20361){
var map__20362 = p__20361;
var map__20362__$1 = ((((!((map__20362 == null)))?((((map__20362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20362):map__20362);
var opts = map__20362__$1;
var statearr_20364_20370 = state;
(statearr_20364_20370[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__20362,map__20362__$1,opts){
return (function (val){
var statearr_20365_20371 = state;
(statearr_20365_20371[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20362,map__20362__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_20366_20372 = state;
(statearr_20366_20372[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20357){
var G__20358 = cljs.core.first.call(null,seq20357);
var seq20357__$1 = cljs.core.next.call(null,seq20357);
var G__20359 = cljs.core.first.call(null,seq20357__$1);
var seq20357__$2 = cljs.core.next.call(null,seq20357__$1);
var G__20360 = cljs.core.first.call(null,seq20357__$2);
var seq20357__$3 = cljs.core.next.call(null,seq20357__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20358,G__20359,G__20360,seq20357__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20536 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20536 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20537){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20537 = meta20537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20538,meta20537__$1){
var self__ = this;
var _20538__$1 = this;
return (new cljs.core.async.t_cljs$core$async20536(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20537__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20536.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20538){
var self__ = this;
var _20538__$1 = this;
return self__.meta20537;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20536.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20536.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20536.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async20536.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20536.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20536.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20536.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20536.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20536.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20537","meta20537",638222919,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20536.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20536";

cljs.core.async.t_cljs$core$async20536.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async20536");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async20536 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20536(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20537){
return (new cljs.core.async.t_cljs$core$async20536(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20537));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20536(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18986__auto___20699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto___20699,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto___20699,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20636){
var state_val_20637 = (state_20636[(1)]);
if((state_val_20637 === (7))){
var inst_20554 = (state_20636[(2)]);
var state_20636__$1 = state_20636;
var statearr_20638_20700 = state_20636__$1;
(statearr_20638_20700[(2)] = inst_20554);

(statearr_20638_20700[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (20))){
var inst_20566 = (state_20636[(7)]);
var state_20636__$1 = state_20636;
var statearr_20639_20701 = state_20636__$1;
(statearr_20639_20701[(2)] = inst_20566);

(statearr_20639_20701[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (27))){
var state_20636__$1 = state_20636;
var statearr_20640_20702 = state_20636__$1;
(statearr_20640_20702[(2)] = null);

(statearr_20640_20702[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (1))){
var inst_20542 = (state_20636[(8)]);
var inst_20542__$1 = calc_state.call(null);
var inst_20544 = (inst_20542__$1 == null);
var inst_20545 = cljs.core.not.call(null,inst_20544);
var state_20636__$1 = (function (){var statearr_20641 = state_20636;
(statearr_20641[(8)] = inst_20542__$1);

return statearr_20641;
})();
if(inst_20545){
var statearr_20642_20703 = state_20636__$1;
(statearr_20642_20703[(1)] = (2));

} else {
var statearr_20643_20704 = state_20636__$1;
(statearr_20643_20704[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (24))){
var inst_20589 = (state_20636[(9)]);
var inst_20610 = (state_20636[(10)]);
var inst_20596 = (state_20636[(11)]);
var inst_20610__$1 = inst_20589.call(null,inst_20596);
var state_20636__$1 = (function (){var statearr_20644 = state_20636;
(statearr_20644[(10)] = inst_20610__$1);

return statearr_20644;
})();
if(cljs.core.truth_(inst_20610__$1)){
var statearr_20645_20705 = state_20636__$1;
(statearr_20645_20705[(1)] = (29));

} else {
var statearr_20646_20706 = state_20636__$1;
(statearr_20646_20706[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (4))){
var inst_20557 = (state_20636[(2)]);
var state_20636__$1 = state_20636;
if(cljs.core.truth_(inst_20557)){
var statearr_20647_20707 = state_20636__$1;
(statearr_20647_20707[(1)] = (8));

} else {
var statearr_20648_20708 = state_20636__$1;
(statearr_20648_20708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (15))){
var inst_20583 = (state_20636[(2)]);
var state_20636__$1 = state_20636;
if(cljs.core.truth_(inst_20583)){
var statearr_20649_20709 = state_20636__$1;
(statearr_20649_20709[(1)] = (19));

} else {
var statearr_20650_20710 = state_20636__$1;
(statearr_20650_20710[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (21))){
var inst_20588 = (state_20636[(12)]);
var inst_20588__$1 = (state_20636[(2)]);
var inst_20589 = cljs.core.get.call(null,inst_20588__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20590 = cljs.core.get.call(null,inst_20588__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20591 = cljs.core.get.call(null,inst_20588__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20636__$1 = (function (){var statearr_20651 = state_20636;
(statearr_20651[(9)] = inst_20589);

(statearr_20651[(12)] = inst_20588__$1);

(statearr_20651[(13)] = inst_20590);

return statearr_20651;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20636__$1,(22),inst_20591);
} else {
if((state_val_20637 === (31))){
var inst_20618 = (state_20636[(2)]);
var state_20636__$1 = state_20636;
if(cljs.core.truth_(inst_20618)){
var statearr_20652_20711 = state_20636__$1;
(statearr_20652_20711[(1)] = (32));

} else {
var statearr_20653_20712 = state_20636__$1;
(statearr_20653_20712[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (32))){
var inst_20595 = (state_20636[(14)]);
var state_20636__$1 = state_20636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20636__$1,(35),out,inst_20595);
} else {
if((state_val_20637 === (33))){
var inst_20588 = (state_20636[(12)]);
var inst_20566 = inst_20588;
var state_20636__$1 = (function (){var statearr_20654 = state_20636;
(statearr_20654[(7)] = inst_20566);

return statearr_20654;
})();
var statearr_20655_20713 = state_20636__$1;
(statearr_20655_20713[(2)] = null);

(statearr_20655_20713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (13))){
var inst_20566 = (state_20636[(7)]);
var inst_20573 = inst_20566.cljs$lang$protocol_mask$partition0$;
var inst_20574 = (inst_20573 & (64));
var inst_20575 = inst_20566.cljs$core$ISeq$;
var inst_20576 = (inst_20574) || (inst_20575);
var state_20636__$1 = state_20636;
if(cljs.core.truth_(inst_20576)){
var statearr_20656_20714 = state_20636__$1;
(statearr_20656_20714[(1)] = (16));

} else {
var statearr_20657_20715 = state_20636__$1;
(statearr_20657_20715[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (22))){
var inst_20595 = (state_20636[(14)]);
var inst_20596 = (state_20636[(11)]);
var inst_20594 = (state_20636[(2)]);
var inst_20595__$1 = cljs.core.nth.call(null,inst_20594,(0),null);
var inst_20596__$1 = cljs.core.nth.call(null,inst_20594,(1),null);
var inst_20597 = (inst_20595__$1 == null);
var inst_20598 = cljs.core._EQ_.call(null,inst_20596__$1,change);
var inst_20599 = (inst_20597) || (inst_20598);
var state_20636__$1 = (function (){var statearr_20658 = state_20636;
(statearr_20658[(14)] = inst_20595__$1);

(statearr_20658[(11)] = inst_20596__$1);

return statearr_20658;
})();
if(cljs.core.truth_(inst_20599)){
var statearr_20659_20716 = state_20636__$1;
(statearr_20659_20716[(1)] = (23));

} else {
var statearr_20660_20717 = state_20636__$1;
(statearr_20660_20717[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (36))){
var inst_20588 = (state_20636[(12)]);
var inst_20566 = inst_20588;
var state_20636__$1 = (function (){var statearr_20661 = state_20636;
(statearr_20661[(7)] = inst_20566);

return statearr_20661;
})();
var statearr_20662_20718 = state_20636__$1;
(statearr_20662_20718[(2)] = null);

(statearr_20662_20718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (29))){
var inst_20610 = (state_20636[(10)]);
var state_20636__$1 = state_20636;
var statearr_20663_20719 = state_20636__$1;
(statearr_20663_20719[(2)] = inst_20610);

(statearr_20663_20719[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (6))){
var state_20636__$1 = state_20636;
var statearr_20664_20720 = state_20636__$1;
(statearr_20664_20720[(2)] = false);

(statearr_20664_20720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (28))){
var inst_20606 = (state_20636[(2)]);
var inst_20607 = calc_state.call(null);
var inst_20566 = inst_20607;
var state_20636__$1 = (function (){var statearr_20665 = state_20636;
(statearr_20665[(7)] = inst_20566);

(statearr_20665[(15)] = inst_20606);

return statearr_20665;
})();
var statearr_20666_20721 = state_20636__$1;
(statearr_20666_20721[(2)] = null);

(statearr_20666_20721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (25))){
var inst_20632 = (state_20636[(2)]);
var state_20636__$1 = state_20636;
var statearr_20667_20722 = state_20636__$1;
(statearr_20667_20722[(2)] = inst_20632);

(statearr_20667_20722[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (34))){
var inst_20630 = (state_20636[(2)]);
var state_20636__$1 = state_20636;
var statearr_20668_20723 = state_20636__$1;
(statearr_20668_20723[(2)] = inst_20630);

(statearr_20668_20723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (17))){
var state_20636__$1 = state_20636;
var statearr_20669_20724 = state_20636__$1;
(statearr_20669_20724[(2)] = false);

(statearr_20669_20724[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (3))){
var state_20636__$1 = state_20636;
var statearr_20670_20725 = state_20636__$1;
(statearr_20670_20725[(2)] = false);

(statearr_20670_20725[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (12))){
var inst_20634 = (state_20636[(2)]);
var state_20636__$1 = state_20636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20636__$1,inst_20634);
} else {
if((state_val_20637 === (2))){
var inst_20542 = (state_20636[(8)]);
var inst_20547 = inst_20542.cljs$lang$protocol_mask$partition0$;
var inst_20548 = (inst_20547 & (64));
var inst_20549 = inst_20542.cljs$core$ISeq$;
var inst_20550 = (inst_20548) || (inst_20549);
var state_20636__$1 = state_20636;
if(cljs.core.truth_(inst_20550)){
var statearr_20671_20726 = state_20636__$1;
(statearr_20671_20726[(1)] = (5));

} else {
var statearr_20672_20727 = state_20636__$1;
(statearr_20672_20727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (23))){
var inst_20595 = (state_20636[(14)]);
var inst_20601 = (inst_20595 == null);
var state_20636__$1 = state_20636;
if(cljs.core.truth_(inst_20601)){
var statearr_20673_20728 = state_20636__$1;
(statearr_20673_20728[(1)] = (26));

} else {
var statearr_20674_20729 = state_20636__$1;
(statearr_20674_20729[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (35))){
var inst_20621 = (state_20636[(2)]);
var state_20636__$1 = state_20636;
if(cljs.core.truth_(inst_20621)){
var statearr_20675_20730 = state_20636__$1;
(statearr_20675_20730[(1)] = (36));

} else {
var statearr_20676_20731 = state_20636__$1;
(statearr_20676_20731[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (19))){
var inst_20566 = (state_20636[(7)]);
var inst_20585 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20566);
var state_20636__$1 = state_20636;
var statearr_20677_20732 = state_20636__$1;
(statearr_20677_20732[(2)] = inst_20585);

(statearr_20677_20732[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (11))){
var inst_20566 = (state_20636[(7)]);
var inst_20570 = (inst_20566 == null);
var inst_20571 = cljs.core.not.call(null,inst_20570);
var state_20636__$1 = state_20636;
if(inst_20571){
var statearr_20678_20733 = state_20636__$1;
(statearr_20678_20733[(1)] = (13));

} else {
var statearr_20679_20734 = state_20636__$1;
(statearr_20679_20734[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (9))){
var inst_20542 = (state_20636[(8)]);
var state_20636__$1 = state_20636;
var statearr_20680_20735 = state_20636__$1;
(statearr_20680_20735[(2)] = inst_20542);

(statearr_20680_20735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (5))){
var state_20636__$1 = state_20636;
var statearr_20681_20736 = state_20636__$1;
(statearr_20681_20736[(2)] = true);

(statearr_20681_20736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (14))){
var state_20636__$1 = state_20636;
var statearr_20682_20737 = state_20636__$1;
(statearr_20682_20737[(2)] = false);

(statearr_20682_20737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (26))){
var inst_20596 = (state_20636[(11)]);
var inst_20603 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20596);
var state_20636__$1 = state_20636;
var statearr_20683_20738 = state_20636__$1;
(statearr_20683_20738[(2)] = inst_20603);

(statearr_20683_20738[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (16))){
var state_20636__$1 = state_20636;
var statearr_20684_20739 = state_20636__$1;
(statearr_20684_20739[(2)] = true);

(statearr_20684_20739[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (38))){
var inst_20626 = (state_20636[(2)]);
var state_20636__$1 = state_20636;
var statearr_20685_20740 = state_20636__$1;
(statearr_20685_20740[(2)] = inst_20626);

(statearr_20685_20740[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (30))){
var inst_20589 = (state_20636[(9)]);
var inst_20596 = (state_20636[(11)]);
var inst_20590 = (state_20636[(13)]);
var inst_20613 = cljs.core.empty_QMARK_.call(null,inst_20589);
var inst_20614 = inst_20590.call(null,inst_20596);
var inst_20615 = cljs.core.not.call(null,inst_20614);
var inst_20616 = (inst_20613) && (inst_20615);
var state_20636__$1 = state_20636;
var statearr_20686_20741 = state_20636__$1;
(statearr_20686_20741[(2)] = inst_20616);

(statearr_20686_20741[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (10))){
var inst_20542 = (state_20636[(8)]);
var inst_20562 = (state_20636[(2)]);
var inst_20563 = cljs.core.get.call(null,inst_20562,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20564 = cljs.core.get.call(null,inst_20562,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20565 = cljs.core.get.call(null,inst_20562,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20566 = inst_20542;
var state_20636__$1 = (function (){var statearr_20687 = state_20636;
(statearr_20687[(7)] = inst_20566);

(statearr_20687[(16)] = inst_20564);

(statearr_20687[(17)] = inst_20565);

(statearr_20687[(18)] = inst_20563);

return statearr_20687;
})();
var statearr_20688_20742 = state_20636__$1;
(statearr_20688_20742[(2)] = null);

(statearr_20688_20742[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (18))){
var inst_20580 = (state_20636[(2)]);
var state_20636__$1 = state_20636;
var statearr_20689_20743 = state_20636__$1;
(statearr_20689_20743[(2)] = inst_20580);

(statearr_20689_20743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (37))){
var state_20636__$1 = state_20636;
var statearr_20690_20744 = state_20636__$1;
(statearr_20690_20744[(2)] = null);

(statearr_20690_20744[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (8))){
var inst_20542 = (state_20636[(8)]);
var inst_20559 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20542);
var state_20636__$1 = state_20636;
var statearr_20691_20745 = state_20636__$1;
(statearr_20691_20745[(2)] = inst_20559);

(statearr_20691_20745[(1)] = (10));


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
});})(c__18986__auto___20699,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18874__auto__,c__18986__auto___20699,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18875__auto__ = null;
var cljs$core$async$mix_$_state_machine__18875__auto____0 = (function (){
var statearr_20695 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20695[(0)] = cljs$core$async$mix_$_state_machine__18875__auto__);

(statearr_20695[(1)] = (1));

return statearr_20695;
});
var cljs$core$async$mix_$_state_machine__18875__auto____1 = (function (state_20636){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_20636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e20696){if((e20696 instanceof Object)){
var ex__18878__auto__ = e20696;
var statearr_20697_20746 = state_20636;
(statearr_20697_20746[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20747 = state_20636;
state_20636 = G__20747;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18875__auto__ = function(state_20636){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18875__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18875__auto____1.call(this,state_20636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18875__auto____0;
cljs$core$async$mix_$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18875__auto____1;
return cljs$core$async$mix_$_state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto___20699,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18988__auto__ = (function (){var statearr_20698 = f__18987__auto__.call(null);
(statearr_20698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto___20699);

return statearr_20698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto___20699,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17474__auto__ = (((p == null))?null:p);
var m__17475__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17475__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17474__auto__ = (((p == null))?null:p);
var m__17475__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,p,v,ch);
} else {
var m__17475__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args20748 = [];
var len__17877__auto___20751 = arguments.length;
var i__17878__auto___20752 = (0);
while(true){
if((i__17878__auto___20752 < len__17877__auto___20751)){
args20748.push((arguments[i__17878__auto___20752]));

var G__20753 = (i__17878__auto___20752 + (1));
i__17878__auto___20752 = G__20753;
continue;
} else {
}
break;
}

var G__20750 = args20748.length;
switch (G__20750) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20748.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17474__auto__ = (((p == null))?null:p);
var m__17475__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,p);
} else {
var m__17475__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17474__auto__ = (((p == null))?null:p);
var m__17475__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,p,v);
} else {
var m__17475__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args20756 = [];
var len__17877__auto___20881 = arguments.length;
var i__17878__auto___20882 = (0);
while(true){
if((i__17878__auto___20882 < len__17877__auto___20881)){
args20756.push((arguments[i__17878__auto___20882]));

var G__20883 = (i__17878__auto___20882 + (1));
i__17878__auto___20882 = G__20883;
continue;
} else {
}
break;
}

var G__20758 = args20756.length;
switch (G__20758) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20756.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16819__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16819__auto__,mults){
return (function (p1__20755_SHARP_){
if(cljs.core.truth_(p1__20755_SHARP_.call(null,topic))){
return p1__20755_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20755_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16819__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async20759 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20759 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20760){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20760 = meta20760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20761,meta20760__$1){
var self__ = this;
var _20761__$1 = this;
return (new cljs.core.async.t_cljs$core$async20759(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20760__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20759.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20761){
var self__ = this;
var _20761__$1 = this;
return self__.meta20760;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20759.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20759.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20759.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async20759.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20759.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20759.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20759.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20759.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20760","meta20760",698877431,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20759.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20759";

cljs.core.async.t_cljs$core$async20759.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async20759");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async20759 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20759(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20760){
return (new cljs.core.async.t_cljs$core$async20759(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20760));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20759(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18986__auto___20885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto___20885,mults,ensure_mult,p){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto___20885,mults,ensure_mult,p){
return (function (state_20833){
var state_val_20834 = (state_20833[(1)]);
if((state_val_20834 === (7))){
var inst_20829 = (state_20833[(2)]);
var state_20833__$1 = state_20833;
var statearr_20835_20886 = state_20833__$1;
(statearr_20835_20886[(2)] = inst_20829);

(statearr_20835_20886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (20))){
var state_20833__$1 = state_20833;
var statearr_20836_20887 = state_20833__$1;
(statearr_20836_20887[(2)] = null);

(statearr_20836_20887[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (1))){
var state_20833__$1 = state_20833;
var statearr_20837_20888 = state_20833__$1;
(statearr_20837_20888[(2)] = null);

(statearr_20837_20888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (24))){
var inst_20812 = (state_20833[(7)]);
var inst_20821 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20812);
var state_20833__$1 = state_20833;
var statearr_20838_20889 = state_20833__$1;
(statearr_20838_20889[(2)] = inst_20821);

(statearr_20838_20889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (4))){
var inst_20764 = (state_20833[(8)]);
var inst_20764__$1 = (state_20833[(2)]);
var inst_20765 = (inst_20764__$1 == null);
var state_20833__$1 = (function (){var statearr_20839 = state_20833;
(statearr_20839[(8)] = inst_20764__$1);

return statearr_20839;
})();
if(cljs.core.truth_(inst_20765)){
var statearr_20840_20890 = state_20833__$1;
(statearr_20840_20890[(1)] = (5));

} else {
var statearr_20841_20891 = state_20833__$1;
(statearr_20841_20891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (15))){
var inst_20806 = (state_20833[(2)]);
var state_20833__$1 = state_20833;
var statearr_20842_20892 = state_20833__$1;
(statearr_20842_20892[(2)] = inst_20806);

(statearr_20842_20892[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (21))){
var inst_20826 = (state_20833[(2)]);
var state_20833__$1 = (function (){var statearr_20843 = state_20833;
(statearr_20843[(9)] = inst_20826);

return statearr_20843;
})();
var statearr_20844_20893 = state_20833__$1;
(statearr_20844_20893[(2)] = null);

(statearr_20844_20893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (13))){
var inst_20788 = (state_20833[(10)]);
var inst_20790 = cljs.core.chunked_seq_QMARK_.call(null,inst_20788);
var state_20833__$1 = state_20833;
if(inst_20790){
var statearr_20845_20894 = state_20833__$1;
(statearr_20845_20894[(1)] = (16));

} else {
var statearr_20846_20895 = state_20833__$1;
(statearr_20846_20895[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (22))){
var inst_20818 = (state_20833[(2)]);
var state_20833__$1 = state_20833;
if(cljs.core.truth_(inst_20818)){
var statearr_20847_20896 = state_20833__$1;
(statearr_20847_20896[(1)] = (23));

} else {
var statearr_20848_20897 = state_20833__$1;
(statearr_20848_20897[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (6))){
var inst_20764 = (state_20833[(8)]);
var inst_20814 = (state_20833[(11)]);
var inst_20812 = (state_20833[(7)]);
var inst_20812__$1 = topic_fn.call(null,inst_20764);
var inst_20813 = cljs.core.deref.call(null,mults);
var inst_20814__$1 = cljs.core.get.call(null,inst_20813,inst_20812__$1);
var state_20833__$1 = (function (){var statearr_20849 = state_20833;
(statearr_20849[(11)] = inst_20814__$1);

(statearr_20849[(7)] = inst_20812__$1);

return statearr_20849;
})();
if(cljs.core.truth_(inst_20814__$1)){
var statearr_20850_20898 = state_20833__$1;
(statearr_20850_20898[(1)] = (19));

} else {
var statearr_20851_20899 = state_20833__$1;
(statearr_20851_20899[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (25))){
var inst_20823 = (state_20833[(2)]);
var state_20833__$1 = state_20833;
var statearr_20852_20900 = state_20833__$1;
(statearr_20852_20900[(2)] = inst_20823);

(statearr_20852_20900[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (17))){
var inst_20788 = (state_20833[(10)]);
var inst_20797 = cljs.core.first.call(null,inst_20788);
var inst_20798 = cljs.core.async.muxch_STAR_.call(null,inst_20797);
var inst_20799 = cljs.core.async.close_BANG_.call(null,inst_20798);
var inst_20800 = cljs.core.next.call(null,inst_20788);
var inst_20774 = inst_20800;
var inst_20775 = null;
var inst_20776 = (0);
var inst_20777 = (0);
var state_20833__$1 = (function (){var statearr_20853 = state_20833;
(statearr_20853[(12)] = inst_20775);

(statearr_20853[(13)] = inst_20777);

(statearr_20853[(14)] = inst_20776);

(statearr_20853[(15)] = inst_20774);

(statearr_20853[(16)] = inst_20799);

return statearr_20853;
})();
var statearr_20854_20901 = state_20833__$1;
(statearr_20854_20901[(2)] = null);

(statearr_20854_20901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (3))){
var inst_20831 = (state_20833[(2)]);
var state_20833__$1 = state_20833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20833__$1,inst_20831);
} else {
if((state_val_20834 === (12))){
var inst_20808 = (state_20833[(2)]);
var state_20833__$1 = state_20833;
var statearr_20855_20902 = state_20833__$1;
(statearr_20855_20902[(2)] = inst_20808);

(statearr_20855_20902[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (2))){
var state_20833__$1 = state_20833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20833__$1,(4),ch);
} else {
if((state_val_20834 === (23))){
var state_20833__$1 = state_20833;
var statearr_20856_20903 = state_20833__$1;
(statearr_20856_20903[(2)] = null);

(statearr_20856_20903[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (19))){
var inst_20764 = (state_20833[(8)]);
var inst_20814 = (state_20833[(11)]);
var inst_20816 = cljs.core.async.muxch_STAR_.call(null,inst_20814);
var state_20833__$1 = state_20833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20833__$1,(22),inst_20816,inst_20764);
} else {
if((state_val_20834 === (11))){
var inst_20774 = (state_20833[(15)]);
var inst_20788 = (state_20833[(10)]);
var inst_20788__$1 = cljs.core.seq.call(null,inst_20774);
var state_20833__$1 = (function (){var statearr_20857 = state_20833;
(statearr_20857[(10)] = inst_20788__$1);

return statearr_20857;
})();
if(inst_20788__$1){
var statearr_20858_20904 = state_20833__$1;
(statearr_20858_20904[(1)] = (13));

} else {
var statearr_20859_20905 = state_20833__$1;
(statearr_20859_20905[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (9))){
var inst_20810 = (state_20833[(2)]);
var state_20833__$1 = state_20833;
var statearr_20860_20906 = state_20833__$1;
(statearr_20860_20906[(2)] = inst_20810);

(statearr_20860_20906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (5))){
var inst_20771 = cljs.core.deref.call(null,mults);
var inst_20772 = cljs.core.vals.call(null,inst_20771);
var inst_20773 = cljs.core.seq.call(null,inst_20772);
var inst_20774 = inst_20773;
var inst_20775 = null;
var inst_20776 = (0);
var inst_20777 = (0);
var state_20833__$1 = (function (){var statearr_20861 = state_20833;
(statearr_20861[(12)] = inst_20775);

(statearr_20861[(13)] = inst_20777);

(statearr_20861[(14)] = inst_20776);

(statearr_20861[(15)] = inst_20774);

return statearr_20861;
})();
var statearr_20862_20907 = state_20833__$1;
(statearr_20862_20907[(2)] = null);

(statearr_20862_20907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (14))){
var state_20833__$1 = state_20833;
var statearr_20866_20908 = state_20833__$1;
(statearr_20866_20908[(2)] = null);

(statearr_20866_20908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (16))){
var inst_20788 = (state_20833[(10)]);
var inst_20792 = cljs.core.chunk_first.call(null,inst_20788);
var inst_20793 = cljs.core.chunk_rest.call(null,inst_20788);
var inst_20794 = cljs.core.count.call(null,inst_20792);
var inst_20774 = inst_20793;
var inst_20775 = inst_20792;
var inst_20776 = inst_20794;
var inst_20777 = (0);
var state_20833__$1 = (function (){var statearr_20867 = state_20833;
(statearr_20867[(12)] = inst_20775);

(statearr_20867[(13)] = inst_20777);

(statearr_20867[(14)] = inst_20776);

(statearr_20867[(15)] = inst_20774);

return statearr_20867;
})();
var statearr_20868_20909 = state_20833__$1;
(statearr_20868_20909[(2)] = null);

(statearr_20868_20909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (10))){
var inst_20775 = (state_20833[(12)]);
var inst_20777 = (state_20833[(13)]);
var inst_20776 = (state_20833[(14)]);
var inst_20774 = (state_20833[(15)]);
var inst_20782 = cljs.core._nth.call(null,inst_20775,inst_20777);
var inst_20783 = cljs.core.async.muxch_STAR_.call(null,inst_20782);
var inst_20784 = cljs.core.async.close_BANG_.call(null,inst_20783);
var inst_20785 = (inst_20777 + (1));
var tmp20863 = inst_20775;
var tmp20864 = inst_20776;
var tmp20865 = inst_20774;
var inst_20774__$1 = tmp20865;
var inst_20775__$1 = tmp20863;
var inst_20776__$1 = tmp20864;
var inst_20777__$1 = inst_20785;
var state_20833__$1 = (function (){var statearr_20869 = state_20833;
(statearr_20869[(12)] = inst_20775__$1);

(statearr_20869[(13)] = inst_20777__$1);

(statearr_20869[(14)] = inst_20776__$1);

(statearr_20869[(15)] = inst_20774__$1);

(statearr_20869[(17)] = inst_20784);

return statearr_20869;
})();
var statearr_20870_20910 = state_20833__$1;
(statearr_20870_20910[(2)] = null);

(statearr_20870_20910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (18))){
var inst_20803 = (state_20833[(2)]);
var state_20833__$1 = state_20833;
var statearr_20871_20911 = state_20833__$1;
(statearr_20871_20911[(2)] = inst_20803);

(statearr_20871_20911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (8))){
var inst_20777 = (state_20833[(13)]);
var inst_20776 = (state_20833[(14)]);
var inst_20779 = (inst_20777 < inst_20776);
var inst_20780 = inst_20779;
var state_20833__$1 = state_20833;
if(cljs.core.truth_(inst_20780)){
var statearr_20872_20912 = state_20833__$1;
(statearr_20872_20912[(1)] = (10));

} else {
var statearr_20873_20913 = state_20833__$1;
(statearr_20873_20913[(1)] = (11));

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
});})(c__18986__auto___20885,mults,ensure_mult,p))
;
return ((function (switch__18874__auto__,c__18986__auto___20885,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18875__auto__ = null;
var cljs$core$async$state_machine__18875__auto____0 = (function (){
var statearr_20877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20877[(0)] = cljs$core$async$state_machine__18875__auto__);

(statearr_20877[(1)] = (1));

return statearr_20877;
});
var cljs$core$async$state_machine__18875__auto____1 = (function (state_20833){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_20833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e20878){if((e20878 instanceof Object)){
var ex__18878__auto__ = e20878;
var statearr_20879_20914 = state_20833;
(statearr_20879_20914[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20915 = state_20833;
state_20833 = G__20915;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
cljs$core$async$state_machine__18875__auto__ = function(state_20833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18875__auto____1.call(this,state_20833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18875__auto____0;
cljs$core$async$state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18875__auto____1;
return cljs$core$async$state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto___20885,mults,ensure_mult,p))
})();
var state__18988__auto__ = (function (){var statearr_20880 = f__18987__auto__.call(null);
(statearr_20880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto___20885);

return statearr_20880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto___20885,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args20916 = [];
var len__17877__auto___20919 = arguments.length;
var i__17878__auto___20920 = (0);
while(true){
if((i__17878__auto___20920 < len__17877__auto___20919)){
args20916.push((arguments[i__17878__auto___20920]));

var G__20921 = (i__17878__auto___20920 + (1));
i__17878__auto___20920 = G__20921;
continue;
} else {
}
break;
}

var G__20918 = args20916.length;
switch (G__20918) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20916.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args20923 = [];
var len__17877__auto___20926 = arguments.length;
var i__17878__auto___20927 = (0);
while(true){
if((i__17878__auto___20927 < len__17877__auto___20926)){
args20923.push((arguments[i__17878__auto___20927]));

var G__20928 = (i__17878__auto___20927 + (1));
i__17878__auto___20927 = G__20928;
continue;
} else {
}
break;
}

var G__20925 = args20923.length;
switch (G__20925) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20923.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args20930 = [];
var len__17877__auto___21001 = arguments.length;
var i__17878__auto___21002 = (0);
while(true){
if((i__17878__auto___21002 < len__17877__auto___21001)){
args20930.push((arguments[i__17878__auto___21002]));

var G__21003 = (i__17878__auto___21002 + (1));
i__17878__auto___21002 = G__21003;
continue;
} else {
}
break;
}

var G__20932 = args20930.length;
switch (G__20932) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20930.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18986__auto___21005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto___21005,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto___21005,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20971){
var state_val_20972 = (state_20971[(1)]);
if((state_val_20972 === (7))){
var state_20971__$1 = state_20971;
var statearr_20973_21006 = state_20971__$1;
(statearr_20973_21006[(2)] = null);

(statearr_20973_21006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (1))){
var state_20971__$1 = state_20971;
var statearr_20974_21007 = state_20971__$1;
(statearr_20974_21007[(2)] = null);

(statearr_20974_21007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (4))){
var inst_20935 = (state_20971[(7)]);
var inst_20937 = (inst_20935 < cnt);
var state_20971__$1 = state_20971;
if(cljs.core.truth_(inst_20937)){
var statearr_20975_21008 = state_20971__$1;
(statearr_20975_21008[(1)] = (6));

} else {
var statearr_20976_21009 = state_20971__$1;
(statearr_20976_21009[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (15))){
var inst_20967 = (state_20971[(2)]);
var state_20971__$1 = state_20971;
var statearr_20977_21010 = state_20971__$1;
(statearr_20977_21010[(2)] = inst_20967);

(statearr_20977_21010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (13))){
var inst_20960 = cljs.core.async.close_BANG_.call(null,out);
var state_20971__$1 = state_20971;
var statearr_20978_21011 = state_20971__$1;
(statearr_20978_21011[(2)] = inst_20960);

(statearr_20978_21011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (6))){
var state_20971__$1 = state_20971;
var statearr_20979_21012 = state_20971__$1;
(statearr_20979_21012[(2)] = null);

(statearr_20979_21012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (3))){
var inst_20969 = (state_20971[(2)]);
var state_20971__$1 = state_20971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20971__$1,inst_20969);
} else {
if((state_val_20972 === (12))){
var inst_20957 = (state_20971[(8)]);
var inst_20957__$1 = (state_20971[(2)]);
var inst_20958 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20957__$1);
var state_20971__$1 = (function (){var statearr_20980 = state_20971;
(statearr_20980[(8)] = inst_20957__$1);

return statearr_20980;
})();
if(cljs.core.truth_(inst_20958)){
var statearr_20981_21013 = state_20971__$1;
(statearr_20981_21013[(1)] = (13));

} else {
var statearr_20982_21014 = state_20971__$1;
(statearr_20982_21014[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (2))){
var inst_20934 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20935 = (0);
var state_20971__$1 = (function (){var statearr_20983 = state_20971;
(statearr_20983[(7)] = inst_20935);

(statearr_20983[(9)] = inst_20934);

return statearr_20983;
})();
var statearr_20984_21015 = state_20971__$1;
(statearr_20984_21015[(2)] = null);

(statearr_20984_21015[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (11))){
var inst_20935 = (state_20971[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20971,(10),Object,null,(9));
var inst_20944 = chs__$1.call(null,inst_20935);
var inst_20945 = done.call(null,inst_20935);
var inst_20946 = cljs.core.async.take_BANG_.call(null,inst_20944,inst_20945);
var state_20971__$1 = state_20971;
var statearr_20985_21016 = state_20971__$1;
(statearr_20985_21016[(2)] = inst_20946);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20971__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (9))){
var inst_20935 = (state_20971[(7)]);
var inst_20948 = (state_20971[(2)]);
var inst_20949 = (inst_20935 + (1));
var inst_20935__$1 = inst_20949;
var state_20971__$1 = (function (){var statearr_20986 = state_20971;
(statearr_20986[(10)] = inst_20948);

(statearr_20986[(7)] = inst_20935__$1);

return statearr_20986;
})();
var statearr_20987_21017 = state_20971__$1;
(statearr_20987_21017[(2)] = null);

(statearr_20987_21017[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (5))){
var inst_20955 = (state_20971[(2)]);
var state_20971__$1 = (function (){var statearr_20988 = state_20971;
(statearr_20988[(11)] = inst_20955);

return statearr_20988;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20971__$1,(12),dchan);
} else {
if((state_val_20972 === (14))){
var inst_20957 = (state_20971[(8)]);
var inst_20962 = cljs.core.apply.call(null,f,inst_20957);
var state_20971__$1 = state_20971;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20971__$1,(16),out,inst_20962);
} else {
if((state_val_20972 === (16))){
var inst_20964 = (state_20971[(2)]);
var state_20971__$1 = (function (){var statearr_20989 = state_20971;
(statearr_20989[(12)] = inst_20964);

return statearr_20989;
})();
var statearr_20990_21018 = state_20971__$1;
(statearr_20990_21018[(2)] = null);

(statearr_20990_21018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (10))){
var inst_20939 = (state_20971[(2)]);
var inst_20940 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20971__$1 = (function (){var statearr_20991 = state_20971;
(statearr_20991[(13)] = inst_20939);

return statearr_20991;
})();
var statearr_20992_21019 = state_20971__$1;
(statearr_20992_21019[(2)] = inst_20940);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20971__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (8))){
var inst_20953 = (state_20971[(2)]);
var state_20971__$1 = state_20971;
var statearr_20993_21020 = state_20971__$1;
(statearr_20993_21020[(2)] = inst_20953);

(statearr_20993_21020[(1)] = (5));


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
});})(c__18986__auto___21005,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18874__auto__,c__18986__auto___21005,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18875__auto__ = null;
var cljs$core$async$state_machine__18875__auto____0 = (function (){
var statearr_20997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20997[(0)] = cljs$core$async$state_machine__18875__auto__);

(statearr_20997[(1)] = (1));

return statearr_20997;
});
var cljs$core$async$state_machine__18875__auto____1 = (function (state_20971){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_20971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e20998){if((e20998 instanceof Object)){
var ex__18878__auto__ = e20998;
var statearr_20999_21021 = state_20971;
(statearr_20999_21021[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21022 = state_20971;
state_20971 = G__21022;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
cljs$core$async$state_machine__18875__auto__ = function(state_20971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18875__auto____1.call(this,state_20971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18875__auto____0;
cljs$core$async$state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18875__auto____1;
return cljs$core$async$state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto___21005,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18988__auto__ = (function (){var statearr_21000 = f__18987__auto__.call(null);
(statearr_21000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto___21005);

return statearr_21000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto___21005,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args21024 = [];
var len__17877__auto___21080 = arguments.length;
var i__17878__auto___21081 = (0);
while(true){
if((i__17878__auto___21081 < len__17877__auto___21080)){
args21024.push((arguments[i__17878__auto___21081]));

var G__21082 = (i__17878__auto___21081 + (1));
i__17878__auto___21081 = G__21082;
continue;
} else {
}
break;
}

var G__21026 = args21024.length;
switch (G__21026) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21024.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18986__auto___21084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto___21084,out){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto___21084,out){
return (function (state_21056){
var state_val_21057 = (state_21056[(1)]);
if((state_val_21057 === (7))){
var inst_21035 = (state_21056[(7)]);
var inst_21036 = (state_21056[(8)]);
var inst_21035__$1 = (state_21056[(2)]);
var inst_21036__$1 = cljs.core.nth.call(null,inst_21035__$1,(0),null);
var inst_21037 = cljs.core.nth.call(null,inst_21035__$1,(1),null);
var inst_21038 = (inst_21036__$1 == null);
var state_21056__$1 = (function (){var statearr_21058 = state_21056;
(statearr_21058[(7)] = inst_21035__$1);

(statearr_21058[(8)] = inst_21036__$1);

(statearr_21058[(9)] = inst_21037);

return statearr_21058;
})();
if(cljs.core.truth_(inst_21038)){
var statearr_21059_21085 = state_21056__$1;
(statearr_21059_21085[(1)] = (8));

} else {
var statearr_21060_21086 = state_21056__$1;
(statearr_21060_21086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21057 === (1))){
var inst_21027 = cljs.core.vec.call(null,chs);
var inst_21028 = inst_21027;
var state_21056__$1 = (function (){var statearr_21061 = state_21056;
(statearr_21061[(10)] = inst_21028);

return statearr_21061;
})();
var statearr_21062_21087 = state_21056__$1;
(statearr_21062_21087[(2)] = null);

(statearr_21062_21087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21057 === (4))){
var inst_21028 = (state_21056[(10)]);
var state_21056__$1 = state_21056;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21056__$1,(7),inst_21028);
} else {
if((state_val_21057 === (6))){
var inst_21052 = (state_21056[(2)]);
var state_21056__$1 = state_21056;
var statearr_21063_21088 = state_21056__$1;
(statearr_21063_21088[(2)] = inst_21052);

(statearr_21063_21088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21057 === (3))){
var inst_21054 = (state_21056[(2)]);
var state_21056__$1 = state_21056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21056__$1,inst_21054);
} else {
if((state_val_21057 === (2))){
var inst_21028 = (state_21056[(10)]);
var inst_21030 = cljs.core.count.call(null,inst_21028);
var inst_21031 = (inst_21030 > (0));
var state_21056__$1 = state_21056;
if(cljs.core.truth_(inst_21031)){
var statearr_21065_21089 = state_21056__$1;
(statearr_21065_21089[(1)] = (4));

} else {
var statearr_21066_21090 = state_21056__$1;
(statearr_21066_21090[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21057 === (11))){
var inst_21028 = (state_21056[(10)]);
var inst_21045 = (state_21056[(2)]);
var tmp21064 = inst_21028;
var inst_21028__$1 = tmp21064;
var state_21056__$1 = (function (){var statearr_21067 = state_21056;
(statearr_21067[(10)] = inst_21028__$1);

(statearr_21067[(11)] = inst_21045);

return statearr_21067;
})();
var statearr_21068_21091 = state_21056__$1;
(statearr_21068_21091[(2)] = null);

(statearr_21068_21091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21057 === (9))){
var inst_21036 = (state_21056[(8)]);
var state_21056__$1 = state_21056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21056__$1,(11),out,inst_21036);
} else {
if((state_val_21057 === (5))){
var inst_21050 = cljs.core.async.close_BANG_.call(null,out);
var state_21056__$1 = state_21056;
var statearr_21069_21092 = state_21056__$1;
(statearr_21069_21092[(2)] = inst_21050);

(statearr_21069_21092[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21057 === (10))){
var inst_21048 = (state_21056[(2)]);
var state_21056__$1 = state_21056;
var statearr_21070_21093 = state_21056__$1;
(statearr_21070_21093[(2)] = inst_21048);

(statearr_21070_21093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21057 === (8))){
var inst_21035 = (state_21056[(7)]);
var inst_21028 = (state_21056[(10)]);
var inst_21036 = (state_21056[(8)]);
var inst_21037 = (state_21056[(9)]);
var inst_21040 = (function (){var cs = inst_21028;
var vec__21033 = inst_21035;
var v = inst_21036;
var c = inst_21037;
return ((function (cs,vec__21033,v,c,inst_21035,inst_21028,inst_21036,inst_21037,state_val_21057,c__18986__auto___21084,out){
return (function (p1__21023_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21023_SHARP_);
});
;})(cs,vec__21033,v,c,inst_21035,inst_21028,inst_21036,inst_21037,state_val_21057,c__18986__auto___21084,out))
})();
var inst_21041 = cljs.core.filterv.call(null,inst_21040,inst_21028);
var inst_21028__$1 = inst_21041;
var state_21056__$1 = (function (){var statearr_21071 = state_21056;
(statearr_21071[(10)] = inst_21028__$1);

return statearr_21071;
})();
var statearr_21072_21094 = state_21056__$1;
(statearr_21072_21094[(2)] = null);

(statearr_21072_21094[(1)] = (2));


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
});})(c__18986__auto___21084,out))
;
return ((function (switch__18874__auto__,c__18986__auto___21084,out){
return (function() {
var cljs$core$async$state_machine__18875__auto__ = null;
var cljs$core$async$state_machine__18875__auto____0 = (function (){
var statearr_21076 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21076[(0)] = cljs$core$async$state_machine__18875__auto__);

(statearr_21076[(1)] = (1));

return statearr_21076;
});
var cljs$core$async$state_machine__18875__auto____1 = (function (state_21056){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_21056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e21077){if((e21077 instanceof Object)){
var ex__18878__auto__ = e21077;
var statearr_21078_21095 = state_21056;
(statearr_21078_21095[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21096 = state_21056;
state_21056 = G__21096;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
cljs$core$async$state_machine__18875__auto__ = function(state_21056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18875__auto____1.call(this,state_21056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18875__auto____0;
cljs$core$async$state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18875__auto____1;
return cljs$core$async$state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto___21084,out))
})();
var state__18988__auto__ = (function (){var statearr_21079 = f__18987__auto__.call(null);
(statearr_21079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto___21084);

return statearr_21079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto___21084,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args21097 = [];
var len__17877__auto___21146 = arguments.length;
var i__17878__auto___21147 = (0);
while(true){
if((i__17878__auto___21147 < len__17877__auto___21146)){
args21097.push((arguments[i__17878__auto___21147]));

var G__21148 = (i__17878__auto___21147 + (1));
i__17878__auto___21147 = G__21148;
continue;
} else {
}
break;
}

var G__21099 = args21097.length;
switch (G__21099) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21097.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18986__auto___21150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto___21150,out){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto___21150,out){
return (function (state_21123){
var state_val_21124 = (state_21123[(1)]);
if((state_val_21124 === (7))){
var inst_21105 = (state_21123[(7)]);
var inst_21105__$1 = (state_21123[(2)]);
var inst_21106 = (inst_21105__$1 == null);
var inst_21107 = cljs.core.not.call(null,inst_21106);
var state_21123__$1 = (function (){var statearr_21125 = state_21123;
(statearr_21125[(7)] = inst_21105__$1);

return statearr_21125;
})();
if(inst_21107){
var statearr_21126_21151 = state_21123__$1;
(statearr_21126_21151[(1)] = (8));

} else {
var statearr_21127_21152 = state_21123__$1;
(statearr_21127_21152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21124 === (1))){
var inst_21100 = (0);
var state_21123__$1 = (function (){var statearr_21128 = state_21123;
(statearr_21128[(8)] = inst_21100);

return statearr_21128;
})();
var statearr_21129_21153 = state_21123__$1;
(statearr_21129_21153[(2)] = null);

(statearr_21129_21153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21124 === (4))){
var state_21123__$1 = state_21123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21123__$1,(7),ch);
} else {
if((state_val_21124 === (6))){
var inst_21118 = (state_21123[(2)]);
var state_21123__$1 = state_21123;
var statearr_21130_21154 = state_21123__$1;
(statearr_21130_21154[(2)] = inst_21118);

(statearr_21130_21154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21124 === (3))){
var inst_21120 = (state_21123[(2)]);
var inst_21121 = cljs.core.async.close_BANG_.call(null,out);
var state_21123__$1 = (function (){var statearr_21131 = state_21123;
(statearr_21131[(9)] = inst_21120);

return statearr_21131;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21123__$1,inst_21121);
} else {
if((state_val_21124 === (2))){
var inst_21100 = (state_21123[(8)]);
var inst_21102 = (inst_21100 < n);
var state_21123__$1 = state_21123;
if(cljs.core.truth_(inst_21102)){
var statearr_21132_21155 = state_21123__$1;
(statearr_21132_21155[(1)] = (4));

} else {
var statearr_21133_21156 = state_21123__$1;
(statearr_21133_21156[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21124 === (11))){
var inst_21100 = (state_21123[(8)]);
var inst_21110 = (state_21123[(2)]);
var inst_21111 = (inst_21100 + (1));
var inst_21100__$1 = inst_21111;
var state_21123__$1 = (function (){var statearr_21134 = state_21123;
(statearr_21134[(10)] = inst_21110);

(statearr_21134[(8)] = inst_21100__$1);

return statearr_21134;
})();
var statearr_21135_21157 = state_21123__$1;
(statearr_21135_21157[(2)] = null);

(statearr_21135_21157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21124 === (9))){
var state_21123__$1 = state_21123;
var statearr_21136_21158 = state_21123__$1;
(statearr_21136_21158[(2)] = null);

(statearr_21136_21158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21124 === (5))){
var state_21123__$1 = state_21123;
var statearr_21137_21159 = state_21123__$1;
(statearr_21137_21159[(2)] = null);

(statearr_21137_21159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21124 === (10))){
var inst_21115 = (state_21123[(2)]);
var state_21123__$1 = state_21123;
var statearr_21138_21160 = state_21123__$1;
(statearr_21138_21160[(2)] = inst_21115);

(statearr_21138_21160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21124 === (8))){
var inst_21105 = (state_21123[(7)]);
var state_21123__$1 = state_21123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21123__$1,(11),out,inst_21105);
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
});})(c__18986__auto___21150,out))
;
return ((function (switch__18874__auto__,c__18986__auto___21150,out){
return (function() {
var cljs$core$async$state_machine__18875__auto__ = null;
var cljs$core$async$state_machine__18875__auto____0 = (function (){
var statearr_21142 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21142[(0)] = cljs$core$async$state_machine__18875__auto__);

(statearr_21142[(1)] = (1));

return statearr_21142;
});
var cljs$core$async$state_machine__18875__auto____1 = (function (state_21123){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_21123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e21143){if((e21143 instanceof Object)){
var ex__18878__auto__ = e21143;
var statearr_21144_21161 = state_21123;
(statearr_21144_21161[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21162 = state_21123;
state_21123 = G__21162;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
cljs$core$async$state_machine__18875__auto__ = function(state_21123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18875__auto____1.call(this,state_21123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18875__auto____0;
cljs$core$async$state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18875__auto____1;
return cljs$core$async$state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto___21150,out))
})();
var state__18988__auto__ = (function (){var statearr_21145 = f__18987__auto__.call(null);
(statearr_21145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto___21150);

return statearr_21145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto___21150,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21170 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21170 = (function (map_LT_,f,ch,meta21171){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21171 = meta21171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21172,meta21171__$1){
var self__ = this;
var _21172__$1 = this;
return (new cljs.core.async.t_cljs$core$async21170(self__.map_LT_,self__.f,self__.ch,meta21171__$1));
});

cljs.core.async.t_cljs$core$async21170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21172){
var self__ = this;
var _21172__$1 = this;
return self__.meta21171;
});

cljs.core.async.t_cljs$core$async21170.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21170.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21170.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21170.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21170.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21173 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21173 = (function (map_LT_,f,ch,meta21171,_,fn1,meta21174){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21171 = meta21171;
this._ = _;
this.fn1 = fn1;
this.meta21174 = meta21174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21175,meta21174__$1){
var self__ = this;
var _21175__$1 = this;
return (new cljs.core.async.t_cljs$core$async21173(self__.map_LT_,self__.f,self__.ch,self__.meta21171,self__._,self__.fn1,meta21174__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21173.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21175){
var self__ = this;
var _21175__$1 = this;
return self__.meta21174;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21173.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21173.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21173.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21173.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21163_SHARP_){
return f1.call(null,(((p1__21163_SHARP_ == null))?null:self__.f.call(null,p1__21163_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21173.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21171","meta21171",117233913,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21170","cljs.core.async/t_cljs$core$async21170",1859392491,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21174","meta21174",-449014935,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21173.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21173";

cljs.core.async.t_cljs$core$async21173.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async21173");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21173 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21173(map_LT___$1,f__$1,ch__$1,meta21171__$1,___$2,fn1__$1,meta21174){
return (new cljs.core.async.t_cljs$core$async21173(map_LT___$1,f__$1,ch__$1,meta21171__$1,___$2,fn1__$1,meta21174));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21173(self__.map_LT_,self__.f,self__.ch,self__.meta21171,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16807__auto__ = ret;
if(cljs.core.truth_(and__16807__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16807__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21170.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21170.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21171","meta21171",117233913,null)], null);
});

cljs.core.async.t_cljs$core$async21170.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21170";

cljs.core.async.t_cljs$core$async21170.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async21170");
});

cljs.core.async.__GT_t_cljs$core$async21170 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21170(map_LT___$1,f__$1,ch__$1,meta21171){
return (new cljs.core.async.t_cljs$core$async21170(map_LT___$1,f__$1,ch__$1,meta21171));
});

}

return (new cljs.core.async.t_cljs$core$async21170(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21179 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21179 = (function (map_GT_,f,ch,meta21180){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21180 = meta21180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21181,meta21180__$1){
var self__ = this;
var _21181__$1 = this;
return (new cljs.core.async.t_cljs$core$async21179(self__.map_GT_,self__.f,self__.ch,meta21180__$1));
});

cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21181){
var self__ = this;
var _21181__$1 = this;
return self__.meta21180;
});

cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21180","meta21180",1849090054,null)], null);
});

cljs.core.async.t_cljs$core$async21179.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21179";

cljs.core.async.t_cljs$core$async21179.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async21179");
});

cljs.core.async.__GT_t_cljs$core$async21179 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21179(map_GT___$1,f__$1,ch__$1,meta21180){
return (new cljs.core.async.t_cljs$core$async21179(map_GT___$1,f__$1,ch__$1,meta21180));
});

}

return (new cljs.core.async.t_cljs$core$async21179(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21185 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21185 = (function (filter_GT_,p,ch,meta21186){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21186 = meta21186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21187,meta21186__$1){
var self__ = this;
var _21187__$1 = this;
return (new cljs.core.async.t_cljs$core$async21185(self__.filter_GT_,self__.p,self__.ch,meta21186__$1));
});

cljs.core.async.t_cljs$core$async21185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21187){
var self__ = this;
var _21187__$1 = this;
return self__.meta21186;
});

cljs.core.async.t_cljs$core$async21185.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21185.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21185.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21185.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21185.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21185.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21185.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21185.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21186","meta21186",-510321532,null)], null);
});

cljs.core.async.t_cljs$core$async21185.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21185.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21185";

cljs.core.async.t_cljs$core$async21185.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async21185");
});

cljs.core.async.__GT_t_cljs$core$async21185 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21185(filter_GT___$1,p__$1,ch__$1,meta21186){
return (new cljs.core.async.t_cljs$core$async21185(filter_GT___$1,p__$1,ch__$1,meta21186));
});

}

return (new cljs.core.async.t_cljs$core$async21185(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args21188 = [];
var len__17877__auto___21232 = arguments.length;
var i__17878__auto___21233 = (0);
while(true){
if((i__17878__auto___21233 < len__17877__auto___21232)){
args21188.push((arguments[i__17878__auto___21233]));

var G__21234 = (i__17878__auto___21233 + (1));
i__17878__auto___21233 = G__21234;
continue;
} else {
}
break;
}

var G__21190 = args21188.length;
switch (G__21190) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21188.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18986__auto___21236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto___21236,out){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto___21236,out){
return (function (state_21211){
var state_val_21212 = (state_21211[(1)]);
if((state_val_21212 === (7))){
var inst_21207 = (state_21211[(2)]);
var state_21211__$1 = state_21211;
var statearr_21213_21237 = state_21211__$1;
(statearr_21213_21237[(2)] = inst_21207);

(statearr_21213_21237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21212 === (1))){
var state_21211__$1 = state_21211;
var statearr_21214_21238 = state_21211__$1;
(statearr_21214_21238[(2)] = null);

(statearr_21214_21238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21212 === (4))){
var inst_21193 = (state_21211[(7)]);
var inst_21193__$1 = (state_21211[(2)]);
var inst_21194 = (inst_21193__$1 == null);
var state_21211__$1 = (function (){var statearr_21215 = state_21211;
(statearr_21215[(7)] = inst_21193__$1);

return statearr_21215;
})();
if(cljs.core.truth_(inst_21194)){
var statearr_21216_21239 = state_21211__$1;
(statearr_21216_21239[(1)] = (5));

} else {
var statearr_21217_21240 = state_21211__$1;
(statearr_21217_21240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21212 === (6))){
var inst_21193 = (state_21211[(7)]);
var inst_21198 = p.call(null,inst_21193);
var state_21211__$1 = state_21211;
if(cljs.core.truth_(inst_21198)){
var statearr_21218_21241 = state_21211__$1;
(statearr_21218_21241[(1)] = (8));

} else {
var statearr_21219_21242 = state_21211__$1;
(statearr_21219_21242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21212 === (3))){
var inst_21209 = (state_21211[(2)]);
var state_21211__$1 = state_21211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21211__$1,inst_21209);
} else {
if((state_val_21212 === (2))){
var state_21211__$1 = state_21211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21211__$1,(4),ch);
} else {
if((state_val_21212 === (11))){
var inst_21201 = (state_21211[(2)]);
var state_21211__$1 = state_21211;
var statearr_21220_21243 = state_21211__$1;
(statearr_21220_21243[(2)] = inst_21201);

(statearr_21220_21243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21212 === (9))){
var state_21211__$1 = state_21211;
var statearr_21221_21244 = state_21211__$1;
(statearr_21221_21244[(2)] = null);

(statearr_21221_21244[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21212 === (5))){
var inst_21196 = cljs.core.async.close_BANG_.call(null,out);
var state_21211__$1 = state_21211;
var statearr_21222_21245 = state_21211__$1;
(statearr_21222_21245[(2)] = inst_21196);

(statearr_21222_21245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21212 === (10))){
var inst_21204 = (state_21211[(2)]);
var state_21211__$1 = (function (){var statearr_21223 = state_21211;
(statearr_21223[(8)] = inst_21204);

return statearr_21223;
})();
var statearr_21224_21246 = state_21211__$1;
(statearr_21224_21246[(2)] = null);

(statearr_21224_21246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21212 === (8))){
var inst_21193 = (state_21211[(7)]);
var state_21211__$1 = state_21211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21211__$1,(11),out,inst_21193);
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
});})(c__18986__auto___21236,out))
;
return ((function (switch__18874__auto__,c__18986__auto___21236,out){
return (function() {
var cljs$core$async$state_machine__18875__auto__ = null;
var cljs$core$async$state_machine__18875__auto____0 = (function (){
var statearr_21228 = [null,null,null,null,null,null,null,null,null];
(statearr_21228[(0)] = cljs$core$async$state_machine__18875__auto__);

(statearr_21228[(1)] = (1));

return statearr_21228;
});
var cljs$core$async$state_machine__18875__auto____1 = (function (state_21211){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_21211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e21229){if((e21229 instanceof Object)){
var ex__18878__auto__ = e21229;
var statearr_21230_21247 = state_21211;
(statearr_21230_21247[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21248 = state_21211;
state_21211 = G__21248;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
cljs$core$async$state_machine__18875__auto__ = function(state_21211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18875__auto____1.call(this,state_21211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18875__auto____0;
cljs$core$async$state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18875__auto____1;
return cljs$core$async$state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto___21236,out))
})();
var state__18988__auto__ = (function (){var statearr_21231 = f__18987__auto__.call(null);
(statearr_21231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto___21236);

return statearr_21231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto___21236,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21249 = [];
var len__17877__auto___21252 = arguments.length;
var i__17878__auto___21253 = (0);
while(true){
if((i__17878__auto___21253 < len__17877__auto___21252)){
args21249.push((arguments[i__17878__auto___21253]));

var G__21254 = (i__17878__auto___21253 + (1));
i__17878__auto___21253 = G__21254;
continue;
} else {
}
break;
}

var G__21251 = args21249.length;
switch (G__21251) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21249.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto__){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto__){
return (function (state_21421){
var state_val_21422 = (state_21421[(1)]);
if((state_val_21422 === (7))){
var inst_21417 = (state_21421[(2)]);
var state_21421__$1 = state_21421;
var statearr_21423_21464 = state_21421__$1;
(statearr_21423_21464[(2)] = inst_21417);

(statearr_21423_21464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21422 === (20))){
var inst_21387 = (state_21421[(7)]);
var inst_21398 = (state_21421[(2)]);
var inst_21399 = cljs.core.next.call(null,inst_21387);
var inst_21373 = inst_21399;
var inst_21374 = null;
var inst_21375 = (0);
var inst_21376 = (0);
var state_21421__$1 = (function (){var statearr_21424 = state_21421;
(statearr_21424[(8)] = inst_21376);

(statearr_21424[(9)] = inst_21398);

(statearr_21424[(10)] = inst_21373);

(statearr_21424[(11)] = inst_21375);

(statearr_21424[(12)] = inst_21374);

return statearr_21424;
})();
var statearr_21425_21465 = state_21421__$1;
(statearr_21425_21465[(2)] = null);

(statearr_21425_21465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21422 === (1))){
var state_21421__$1 = state_21421;
var statearr_21426_21466 = state_21421__$1;
(statearr_21426_21466[(2)] = null);

(statearr_21426_21466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21422 === (4))){
var inst_21362 = (state_21421[(13)]);
var inst_21362__$1 = (state_21421[(2)]);
var inst_21363 = (inst_21362__$1 == null);
var state_21421__$1 = (function (){var statearr_21427 = state_21421;
(statearr_21427[(13)] = inst_21362__$1);

return statearr_21427;
})();
if(cljs.core.truth_(inst_21363)){
var statearr_21428_21467 = state_21421__$1;
(statearr_21428_21467[(1)] = (5));

} else {
var statearr_21429_21468 = state_21421__$1;
(statearr_21429_21468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21422 === (15))){
var state_21421__$1 = state_21421;
var statearr_21433_21469 = state_21421__$1;
(statearr_21433_21469[(2)] = null);

(statearr_21433_21469[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21422 === (21))){
var state_21421__$1 = state_21421;
var statearr_21434_21470 = state_21421__$1;
(statearr_21434_21470[(2)] = null);

(statearr_21434_21470[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21422 === (13))){
var inst_21376 = (state_21421[(8)]);
var inst_21373 = (state_21421[(10)]);
var inst_21375 = (state_21421[(11)]);
var inst_21374 = (state_21421[(12)]);
var inst_21383 = (state_21421[(2)]);
var inst_21384 = (inst_21376 + (1));
var tmp21430 = inst_21373;
var tmp21431 = inst_21375;
var tmp21432 = inst_21374;
var inst_21373__$1 = tmp21430;
var inst_21374__$1 = tmp21432;
var inst_21375__$1 = tmp21431;
var inst_21376__$1 = inst_21384;
var state_21421__$1 = (function (){var statearr_21435 = state_21421;
(statearr_21435[(8)] = inst_21376__$1);

(statearr_21435[(10)] = inst_21373__$1);

(statearr_21435[(11)] = inst_21375__$1);

(statearr_21435[(12)] = inst_21374__$1);

(statearr_21435[(14)] = inst_21383);

return statearr_21435;
})();
var statearr_21436_21471 = state_21421__$1;
(statearr_21436_21471[(2)] = null);

(statearr_21436_21471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21422 === (22))){
var state_21421__$1 = state_21421;
var statearr_21437_21472 = state_21421__$1;
(statearr_21437_21472[(2)] = null);

(statearr_21437_21472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21422 === (6))){
var inst_21362 = (state_21421[(13)]);
var inst_21371 = f.call(null,inst_21362);
var inst_21372 = cljs.core.seq.call(null,inst_21371);
var inst_21373 = inst_21372;
var inst_21374 = null;
var inst_21375 = (0);
var inst_21376 = (0);
var state_21421__$1 = (function (){var statearr_21438 = state_21421;
(statearr_21438[(8)] = inst_21376);

(statearr_21438[(10)] = inst_21373);

(statearr_21438[(11)] = inst_21375);

(statearr_21438[(12)] = inst_21374);

return statearr_21438;
})();
var statearr_21439_21473 = state_21421__$1;
(statearr_21439_21473[(2)] = null);

(statearr_21439_21473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21422 === (17))){
var inst_21387 = (state_21421[(7)]);
var inst_21391 = cljs.core.chunk_first.call(null,inst_21387);
var inst_21392 = cljs.core.chunk_rest.call(null,inst_21387);
var inst_21393 = cljs.core.count.call(null,inst_21391);
var inst_21373 = inst_21392;
var inst_21374 = inst_21391;
var inst_21375 = inst_21393;
var inst_21376 = (0);
var state_21421__$1 = (function (){var statearr_21440 = state_21421;
(statearr_21440[(8)] = inst_21376);

(statearr_21440[(10)] = inst_21373);

(statearr_21440[(11)] = inst_21375);

(statearr_21440[(12)] = inst_21374);

return statearr_21440;
})();
var statearr_21441_21474 = state_21421__$1;
(statearr_21441_21474[(2)] = null);

(statearr_21441_21474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21422 === (3))){
var inst_21419 = (state_21421[(2)]);
var state_21421__$1 = state_21421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21421__$1,inst_21419);
} else {
if((state_val_21422 === (12))){
var inst_21407 = (state_21421[(2)]);
var state_21421__$1 = state_21421;
var statearr_21442_21475 = state_21421__$1;
(statearr_21442_21475[(2)] = inst_21407);

(statearr_21442_21475[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21422 === (2))){
var state_21421__$1 = state_21421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21421__$1,(4),in$);
} else {
if((state_val_21422 === (23))){
var inst_21415 = (state_21421[(2)]);
var state_21421__$1 = state_21421;
var statearr_21443_21476 = state_21421__$1;
(statearr_21443_21476[(2)] = inst_21415);

(statearr_21443_21476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21422 === (19))){
var inst_21402 = (state_21421[(2)]);
var state_21421__$1 = state_21421;
var statearr_21444_21477 = state_21421__$1;
(statearr_21444_21477[(2)] = inst_21402);

(statearr_21444_21477[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21422 === (11))){
var inst_21373 = (state_21421[(10)]);
var inst_21387 = (state_21421[(7)]);
var inst_21387__$1 = cljs.core.seq.call(null,inst_21373);
var state_21421__$1 = (function (){var statearr_21445 = state_21421;
(statearr_21445[(7)] = inst_21387__$1);

return statearr_21445;
})();
if(inst_21387__$1){
var statearr_21446_21478 = state_21421__$1;
(statearr_21446_21478[(1)] = (14));

} else {
var statearr_21447_21479 = state_21421__$1;
(statearr_21447_21479[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21422 === (9))){
var inst_21409 = (state_21421[(2)]);
var inst_21410 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21421__$1 = (function (){var statearr_21448 = state_21421;
(statearr_21448[(15)] = inst_21409);

return statearr_21448;
})();
if(cljs.core.truth_(inst_21410)){
var statearr_21449_21480 = state_21421__$1;
(statearr_21449_21480[(1)] = (21));

} else {
var statearr_21450_21481 = state_21421__$1;
(statearr_21450_21481[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21422 === (5))){
var inst_21365 = cljs.core.async.close_BANG_.call(null,out);
var state_21421__$1 = state_21421;
var statearr_21451_21482 = state_21421__$1;
(statearr_21451_21482[(2)] = inst_21365);

(statearr_21451_21482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21422 === (14))){
var inst_21387 = (state_21421[(7)]);
var inst_21389 = cljs.core.chunked_seq_QMARK_.call(null,inst_21387);
var state_21421__$1 = state_21421;
if(inst_21389){
var statearr_21452_21483 = state_21421__$1;
(statearr_21452_21483[(1)] = (17));

} else {
var statearr_21453_21484 = state_21421__$1;
(statearr_21453_21484[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21422 === (16))){
var inst_21405 = (state_21421[(2)]);
var state_21421__$1 = state_21421;
var statearr_21454_21485 = state_21421__$1;
(statearr_21454_21485[(2)] = inst_21405);

(statearr_21454_21485[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21422 === (10))){
var inst_21376 = (state_21421[(8)]);
var inst_21374 = (state_21421[(12)]);
var inst_21381 = cljs.core._nth.call(null,inst_21374,inst_21376);
var state_21421__$1 = state_21421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21421__$1,(13),out,inst_21381);
} else {
if((state_val_21422 === (18))){
var inst_21387 = (state_21421[(7)]);
var inst_21396 = cljs.core.first.call(null,inst_21387);
var state_21421__$1 = state_21421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21421__$1,(20),out,inst_21396);
} else {
if((state_val_21422 === (8))){
var inst_21376 = (state_21421[(8)]);
var inst_21375 = (state_21421[(11)]);
var inst_21378 = (inst_21376 < inst_21375);
var inst_21379 = inst_21378;
var state_21421__$1 = state_21421;
if(cljs.core.truth_(inst_21379)){
var statearr_21455_21486 = state_21421__$1;
(statearr_21455_21486[(1)] = (10));

} else {
var statearr_21456_21487 = state_21421__$1;
(statearr_21456_21487[(1)] = (11));

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
});})(c__18986__auto__))
;
return ((function (switch__18874__auto__,c__18986__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18875__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18875__auto____0 = (function (){
var statearr_21460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21460[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18875__auto__);

(statearr_21460[(1)] = (1));

return statearr_21460;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18875__auto____1 = (function (state_21421){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_21421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e21461){if((e21461 instanceof Object)){
var ex__18878__auto__ = e21461;
var statearr_21462_21488 = state_21421;
(statearr_21462_21488[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21489 = state_21421;
state_21421 = G__21489;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18875__auto__ = function(state_21421){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18875__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18875__auto____1.call(this,state_21421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18875__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18875__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto__))
})();
var state__18988__auto__ = (function (){var statearr_21463 = f__18987__auto__.call(null);
(statearr_21463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto__);

return statearr_21463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto__))
);

return c__18986__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21490 = [];
var len__17877__auto___21493 = arguments.length;
var i__17878__auto___21494 = (0);
while(true){
if((i__17878__auto___21494 < len__17877__auto___21493)){
args21490.push((arguments[i__17878__auto___21494]));

var G__21495 = (i__17878__auto___21494 + (1));
i__17878__auto___21494 = G__21495;
continue;
} else {
}
break;
}

var G__21492 = args21490.length;
switch (G__21492) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21490.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args21497 = [];
var len__17877__auto___21500 = arguments.length;
var i__17878__auto___21501 = (0);
while(true){
if((i__17878__auto___21501 < len__17877__auto___21500)){
args21497.push((arguments[i__17878__auto___21501]));

var G__21502 = (i__17878__auto___21501 + (1));
i__17878__auto___21501 = G__21502;
continue;
} else {
}
break;
}

var G__21499 = args21497.length;
switch (G__21499) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21497.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args21504 = [];
var len__17877__auto___21555 = arguments.length;
var i__17878__auto___21556 = (0);
while(true){
if((i__17878__auto___21556 < len__17877__auto___21555)){
args21504.push((arguments[i__17878__auto___21556]));

var G__21557 = (i__17878__auto___21556 + (1));
i__17878__auto___21556 = G__21557;
continue;
} else {
}
break;
}

var G__21506 = args21504.length;
switch (G__21506) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21504.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18986__auto___21559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto___21559,out){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto___21559,out){
return (function (state_21530){
var state_val_21531 = (state_21530[(1)]);
if((state_val_21531 === (7))){
var inst_21525 = (state_21530[(2)]);
var state_21530__$1 = state_21530;
var statearr_21532_21560 = state_21530__$1;
(statearr_21532_21560[(2)] = inst_21525);

(statearr_21532_21560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21531 === (1))){
var inst_21507 = null;
var state_21530__$1 = (function (){var statearr_21533 = state_21530;
(statearr_21533[(7)] = inst_21507);

return statearr_21533;
})();
var statearr_21534_21561 = state_21530__$1;
(statearr_21534_21561[(2)] = null);

(statearr_21534_21561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21531 === (4))){
var inst_21510 = (state_21530[(8)]);
var inst_21510__$1 = (state_21530[(2)]);
var inst_21511 = (inst_21510__$1 == null);
var inst_21512 = cljs.core.not.call(null,inst_21511);
var state_21530__$1 = (function (){var statearr_21535 = state_21530;
(statearr_21535[(8)] = inst_21510__$1);

return statearr_21535;
})();
if(inst_21512){
var statearr_21536_21562 = state_21530__$1;
(statearr_21536_21562[(1)] = (5));

} else {
var statearr_21537_21563 = state_21530__$1;
(statearr_21537_21563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21531 === (6))){
var state_21530__$1 = state_21530;
var statearr_21538_21564 = state_21530__$1;
(statearr_21538_21564[(2)] = null);

(statearr_21538_21564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21531 === (3))){
var inst_21527 = (state_21530[(2)]);
var inst_21528 = cljs.core.async.close_BANG_.call(null,out);
var state_21530__$1 = (function (){var statearr_21539 = state_21530;
(statearr_21539[(9)] = inst_21527);

return statearr_21539;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21530__$1,inst_21528);
} else {
if((state_val_21531 === (2))){
var state_21530__$1 = state_21530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21530__$1,(4),ch);
} else {
if((state_val_21531 === (11))){
var inst_21510 = (state_21530[(8)]);
var inst_21519 = (state_21530[(2)]);
var inst_21507 = inst_21510;
var state_21530__$1 = (function (){var statearr_21540 = state_21530;
(statearr_21540[(10)] = inst_21519);

(statearr_21540[(7)] = inst_21507);

return statearr_21540;
})();
var statearr_21541_21565 = state_21530__$1;
(statearr_21541_21565[(2)] = null);

(statearr_21541_21565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21531 === (9))){
var inst_21510 = (state_21530[(8)]);
var state_21530__$1 = state_21530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21530__$1,(11),out,inst_21510);
} else {
if((state_val_21531 === (5))){
var inst_21510 = (state_21530[(8)]);
var inst_21507 = (state_21530[(7)]);
var inst_21514 = cljs.core._EQ_.call(null,inst_21510,inst_21507);
var state_21530__$1 = state_21530;
if(inst_21514){
var statearr_21543_21566 = state_21530__$1;
(statearr_21543_21566[(1)] = (8));

} else {
var statearr_21544_21567 = state_21530__$1;
(statearr_21544_21567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21531 === (10))){
var inst_21522 = (state_21530[(2)]);
var state_21530__$1 = state_21530;
var statearr_21545_21568 = state_21530__$1;
(statearr_21545_21568[(2)] = inst_21522);

(statearr_21545_21568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21531 === (8))){
var inst_21507 = (state_21530[(7)]);
var tmp21542 = inst_21507;
var inst_21507__$1 = tmp21542;
var state_21530__$1 = (function (){var statearr_21546 = state_21530;
(statearr_21546[(7)] = inst_21507__$1);

return statearr_21546;
})();
var statearr_21547_21569 = state_21530__$1;
(statearr_21547_21569[(2)] = null);

(statearr_21547_21569[(1)] = (2));


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
});})(c__18986__auto___21559,out))
;
return ((function (switch__18874__auto__,c__18986__auto___21559,out){
return (function() {
var cljs$core$async$state_machine__18875__auto__ = null;
var cljs$core$async$state_machine__18875__auto____0 = (function (){
var statearr_21551 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21551[(0)] = cljs$core$async$state_machine__18875__auto__);

(statearr_21551[(1)] = (1));

return statearr_21551;
});
var cljs$core$async$state_machine__18875__auto____1 = (function (state_21530){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_21530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e21552){if((e21552 instanceof Object)){
var ex__18878__auto__ = e21552;
var statearr_21553_21570 = state_21530;
(statearr_21553_21570[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21571 = state_21530;
state_21530 = G__21571;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
cljs$core$async$state_machine__18875__auto__ = function(state_21530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18875__auto____1.call(this,state_21530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18875__auto____0;
cljs$core$async$state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18875__auto____1;
return cljs$core$async$state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto___21559,out))
})();
var state__18988__auto__ = (function (){var statearr_21554 = f__18987__auto__.call(null);
(statearr_21554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto___21559);

return statearr_21554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto___21559,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args21572 = [];
var len__17877__auto___21642 = arguments.length;
var i__17878__auto___21643 = (0);
while(true){
if((i__17878__auto___21643 < len__17877__auto___21642)){
args21572.push((arguments[i__17878__auto___21643]));

var G__21644 = (i__17878__auto___21643 + (1));
i__17878__auto___21643 = G__21644;
continue;
} else {
}
break;
}

var G__21574 = args21572.length;
switch (G__21574) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21572.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18986__auto___21646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto___21646,out){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto___21646,out){
return (function (state_21612){
var state_val_21613 = (state_21612[(1)]);
if((state_val_21613 === (7))){
var inst_21608 = (state_21612[(2)]);
var state_21612__$1 = state_21612;
var statearr_21614_21647 = state_21612__$1;
(statearr_21614_21647[(2)] = inst_21608);

(statearr_21614_21647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21613 === (1))){
var inst_21575 = (new Array(n));
var inst_21576 = inst_21575;
var inst_21577 = (0);
var state_21612__$1 = (function (){var statearr_21615 = state_21612;
(statearr_21615[(7)] = inst_21577);

(statearr_21615[(8)] = inst_21576);

return statearr_21615;
})();
var statearr_21616_21648 = state_21612__$1;
(statearr_21616_21648[(2)] = null);

(statearr_21616_21648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21613 === (4))){
var inst_21580 = (state_21612[(9)]);
var inst_21580__$1 = (state_21612[(2)]);
var inst_21581 = (inst_21580__$1 == null);
var inst_21582 = cljs.core.not.call(null,inst_21581);
var state_21612__$1 = (function (){var statearr_21617 = state_21612;
(statearr_21617[(9)] = inst_21580__$1);

return statearr_21617;
})();
if(inst_21582){
var statearr_21618_21649 = state_21612__$1;
(statearr_21618_21649[(1)] = (5));

} else {
var statearr_21619_21650 = state_21612__$1;
(statearr_21619_21650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21613 === (15))){
var inst_21602 = (state_21612[(2)]);
var state_21612__$1 = state_21612;
var statearr_21620_21651 = state_21612__$1;
(statearr_21620_21651[(2)] = inst_21602);

(statearr_21620_21651[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21613 === (13))){
var state_21612__$1 = state_21612;
var statearr_21621_21652 = state_21612__$1;
(statearr_21621_21652[(2)] = null);

(statearr_21621_21652[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21613 === (6))){
var inst_21577 = (state_21612[(7)]);
var inst_21598 = (inst_21577 > (0));
var state_21612__$1 = state_21612;
if(cljs.core.truth_(inst_21598)){
var statearr_21622_21653 = state_21612__$1;
(statearr_21622_21653[(1)] = (12));

} else {
var statearr_21623_21654 = state_21612__$1;
(statearr_21623_21654[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21613 === (3))){
var inst_21610 = (state_21612[(2)]);
var state_21612__$1 = state_21612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21612__$1,inst_21610);
} else {
if((state_val_21613 === (12))){
var inst_21576 = (state_21612[(8)]);
var inst_21600 = cljs.core.vec.call(null,inst_21576);
var state_21612__$1 = state_21612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21612__$1,(15),out,inst_21600);
} else {
if((state_val_21613 === (2))){
var state_21612__$1 = state_21612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21612__$1,(4),ch);
} else {
if((state_val_21613 === (11))){
var inst_21592 = (state_21612[(2)]);
var inst_21593 = (new Array(n));
var inst_21576 = inst_21593;
var inst_21577 = (0);
var state_21612__$1 = (function (){var statearr_21624 = state_21612;
(statearr_21624[(10)] = inst_21592);

(statearr_21624[(7)] = inst_21577);

(statearr_21624[(8)] = inst_21576);

return statearr_21624;
})();
var statearr_21625_21655 = state_21612__$1;
(statearr_21625_21655[(2)] = null);

(statearr_21625_21655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21613 === (9))){
var inst_21576 = (state_21612[(8)]);
var inst_21590 = cljs.core.vec.call(null,inst_21576);
var state_21612__$1 = state_21612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21612__$1,(11),out,inst_21590);
} else {
if((state_val_21613 === (5))){
var inst_21585 = (state_21612[(11)]);
var inst_21580 = (state_21612[(9)]);
var inst_21577 = (state_21612[(7)]);
var inst_21576 = (state_21612[(8)]);
var inst_21584 = (inst_21576[inst_21577] = inst_21580);
var inst_21585__$1 = (inst_21577 + (1));
var inst_21586 = (inst_21585__$1 < n);
var state_21612__$1 = (function (){var statearr_21626 = state_21612;
(statearr_21626[(11)] = inst_21585__$1);

(statearr_21626[(12)] = inst_21584);

return statearr_21626;
})();
if(cljs.core.truth_(inst_21586)){
var statearr_21627_21656 = state_21612__$1;
(statearr_21627_21656[(1)] = (8));

} else {
var statearr_21628_21657 = state_21612__$1;
(statearr_21628_21657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21613 === (14))){
var inst_21605 = (state_21612[(2)]);
var inst_21606 = cljs.core.async.close_BANG_.call(null,out);
var state_21612__$1 = (function (){var statearr_21630 = state_21612;
(statearr_21630[(13)] = inst_21605);

return statearr_21630;
})();
var statearr_21631_21658 = state_21612__$1;
(statearr_21631_21658[(2)] = inst_21606);

(statearr_21631_21658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21613 === (10))){
var inst_21596 = (state_21612[(2)]);
var state_21612__$1 = state_21612;
var statearr_21632_21659 = state_21612__$1;
(statearr_21632_21659[(2)] = inst_21596);

(statearr_21632_21659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21613 === (8))){
var inst_21585 = (state_21612[(11)]);
var inst_21576 = (state_21612[(8)]);
var tmp21629 = inst_21576;
var inst_21576__$1 = tmp21629;
var inst_21577 = inst_21585;
var state_21612__$1 = (function (){var statearr_21633 = state_21612;
(statearr_21633[(7)] = inst_21577);

(statearr_21633[(8)] = inst_21576__$1);

return statearr_21633;
})();
var statearr_21634_21660 = state_21612__$1;
(statearr_21634_21660[(2)] = null);

(statearr_21634_21660[(1)] = (2));


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
});})(c__18986__auto___21646,out))
;
return ((function (switch__18874__auto__,c__18986__auto___21646,out){
return (function() {
var cljs$core$async$state_machine__18875__auto__ = null;
var cljs$core$async$state_machine__18875__auto____0 = (function (){
var statearr_21638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21638[(0)] = cljs$core$async$state_machine__18875__auto__);

(statearr_21638[(1)] = (1));

return statearr_21638;
});
var cljs$core$async$state_machine__18875__auto____1 = (function (state_21612){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_21612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e21639){if((e21639 instanceof Object)){
var ex__18878__auto__ = e21639;
var statearr_21640_21661 = state_21612;
(statearr_21640_21661[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21662 = state_21612;
state_21612 = G__21662;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
cljs$core$async$state_machine__18875__auto__ = function(state_21612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18875__auto____1.call(this,state_21612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18875__auto____0;
cljs$core$async$state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18875__auto____1;
return cljs$core$async$state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto___21646,out))
})();
var state__18988__auto__ = (function (){var statearr_21641 = f__18987__auto__.call(null);
(statearr_21641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto___21646);

return statearr_21641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto___21646,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args21663 = [];
var len__17877__auto___21737 = arguments.length;
var i__17878__auto___21738 = (0);
while(true){
if((i__17878__auto___21738 < len__17877__auto___21737)){
args21663.push((arguments[i__17878__auto___21738]));

var G__21739 = (i__17878__auto___21738 + (1));
i__17878__auto___21738 = G__21739;
continue;
} else {
}
break;
}

var G__21665 = args21663.length;
switch (G__21665) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21663.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18986__auto___21741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18986__auto___21741,out){
return (function (){
var f__18987__auto__ = (function (){var switch__18874__auto__ = ((function (c__18986__auto___21741,out){
return (function (state_21707){
var state_val_21708 = (state_21707[(1)]);
if((state_val_21708 === (7))){
var inst_21703 = (state_21707[(2)]);
var state_21707__$1 = state_21707;
var statearr_21709_21742 = state_21707__$1;
(statearr_21709_21742[(2)] = inst_21703);

(statearr_21709_21742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (1))){
var inst_21666 = [];
var inst_21667 = inst_21666;
var inst_21668 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21707__$1 = (function (){var statearr_21710 = state_21707;
(statearr_21710[(7)] = inst_21668);

(statearr_21710[(8)] = inst_21667);

return statearr_21710;
})();
var statearr_21711_21743 = state_21707__$1;
(statearr_21711_21743[(2)] = null);

(statearr_21711_21743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (4))){
var inst_21671 = (state_21707[(9)]);
var inst_21671__$1 = (state_21707[(2)]);
var inst_21672 = (inst_21671__$1 == null);
var inst_21673 = cljs.core.not.call(null,inst_21672);
var state_21707__$1 = (function (){var statearr_21712 = state_21707;
(statearr_21712[(9)] = inst_21671__$1);

return statearr_21712;
})();
if(inst_21673){
var statearr_21713_21744 = state_21707__$1;
(statearr_21713_21744[(1)] = (5));

} else {
var statearr_21714_21745 = state_21707__$1;
(statearr_21714_21745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (15))){
var inst_21697 = (state_21707[(2)]);
var state_21707__$1 = state_21707;
var statearr_21715_21746 = state_21707__$1;
(statearr_21715_21746[(2)] = inst_21697);

(statearr_21715_21746[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (13))){
var state_21707__$1 = state_21707;
var statearr_21716_21747 = state_21707__$1;
(statearr_21716_21747[(2)] = null);

(statearr_21716_21747[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (6))){
var inst_21667 = (state_21707[(8)]);
var inst_21692 = inst_21667.length;
var inst_21693 = (inst_21692 > (0));
var state_21707__$1 = state_21707;
if(cljs.core.truth_(inst_21693)){
var statearr_21717_21748 = state_21707__$1;
(statearr_21717_21748[(1)] = (12));

} else {
var statearr_21718_21749 = state_21707__$1;
(statearr_21718_21749[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (3))){
var inst_21705 = (state_21707[(2)]);
var state_21707__$1 = state_21707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21707__$1,inst_21705);
} else {
if((state_val_21708 === (12))){
var inst_21667 = (state_21707[(8)]);
var inst_21695 = cljs.core.vec.call(null,inst_21667);
var state_21707__$1 = state_21707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21707__$1,(15),out,inst_21695);
} else {
if((state_val_21708 === (2))){
var state_21707__$1 = state_21707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21707__$1,(4),ch);
} else {
if((state_val_21708 === (11))){
var inst_21675 = (state_21707[(10)]);
var inst_21671 = (state_21707[(9)]);
var inst_21685 = (state_21707[(2)]);
var inst_21686 = [];
var inst_21687 = inst_21686.push(inst_21671);
var inst_21667 = inst_21686;
var inst_21668 = inst_21675;
var state_21707__$1 = (function (){var statearr_21719 = state_21707;
(statearr_21719[(11)] = inst_21687);

(statearr_21719[(7)] = inst_21668);

(statearr_21719[(12)] = inst_21685);

(statearr_21719[(8)] = inst_21667);

return statearr_21719;
})();
var statearr_21720_21750 = state_21707__$1;
(statearr_21720_21750[(2)] = null);

(statearr_21720_21750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (9))){
var inst_21667 = (state_21707[(8)]);
var inst_21683 = cljs.core.vec.call(null,inst_21667);
var state_21707__$1 = state_21707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21707__$1,(11),out,inst_21683);
} else {
if((state_val_21708 === (5))){
var inst_21675 = (state_21707[(10)]);
var inst_21668 = (state_21707[(7)]);
var inst_21671 = (state_21707[(9)]);
var inst_21675__$1 = f.call(null,inst_21671);
var inst_21676 = cljs.core._EQ_.call(null,inst_21675__$1,inst_21668);
var inst_21677 = cljs.core.keyword_identical_QMARK_.call(null,inst_21668,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21678 = (inst_21676) || (inst_21677);
var state_21707__$1 = (function (){var statearr_21721 = state_21707;
(statearr_21721[(10)] = inst_21675__$1);

return statearr_21721;
})();
if(cljs.core.truth_(inst_21678)){
var statearr_21722_21751 = state_21707__$1;
(statearr_21722_21751[(1)] = (8));

} else {
var statearr_21723_21752 = state_21707__$1;
(statearr_21723_21752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (14))){
var inst_21700 = (state_21707[(2)]);
var inst_21701 = cljs.core.async.close_BANG_.call(null,out);
var state_21707__$1 = (function (){var statearr_21725 = state_21707;
(statearr_21725[(13)] = inst_21700);

return statearr_21725;
})();
var statearr_21726_21753 = state_21707__$1;
(statearr_21726_21753[(2)] = inst_21701);

(statearr_21726_21753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (10))){
var inst_21690 = (state_21707[(2)]);
var state_21707__$1 = state_21707;
var statearr_21727_21754 = state_21707__$1;
(statearr_21727_21754[(2)] = inst_21690);

(statearr_21727_21754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (8))){
var inst_21675 = (state_21707[(10)]);
var inst_21671 = (state_21707[(9)]);
var inst_21667 = (state_21707[(8)]);
var inst_21680 = inst_21667.push(inst_21671);
var tmp21724 = inst_21667;
var inst_21667__$1 = tmp21724;
var inst_21668 = inst_21675;
var state_21707__$1 = (function (){var statearr_21728 = state_21707;
(statearr_21728[(7)] = inst_21668);

(statearr_21728[(14)] = inst_21680);

(statearr_21728[(8)] = inst_21667__$1);

return statearr_21728;
})();
var statearr_21729_21755 = state_21707__$1;
(statearr_21729_21755[(2)] = null);

(statearr_21729_21755[(1)] = (2));


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
});})(c__18986__auto___21741,out))
;
return ((function (switch__18874__auto__,c__18986__auto___21741,out){
return (function() {
var cljs$core$async$state_machine__18875__auto__ = null;
var cljs$core$async$state_machine__18875__auto____0 = (function (){
var statearr_21733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21733[(0)] = cljs$core$async$state_machine__18875__auto__);

(statearr_21733[(1)] = (1));

return statearr_21733;
});
var cljs$core$async$state_machine__18875__auto____1 = (function (state_21707){
while(true){
var ret_value__18876__auto__ = (function (){try{while(true){
var result__18877__auto__ = switch__18874__auto__.call(null,state_21707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18877__auto__;
}
break;
}
}catch (e21734){if((e21734 instanceof Object)){
var ex__18878__auto__ = e21734;
var statearr_21735_21756 = state_21707;
(statearr_21735_21756[(5)] = ex__18878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21757 = state_21707;
state_21707 = G__21757;
continue;
} else {
return ret_value__18876__auto__;
}
break;
}
});
cljs$core$async$state_machine__18875__auto__ = function(state_21707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18875__auto____1.call(this,state_21707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18875__auto____0;
cljs$core$async$state_machine__18875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18875__auto____1;
return cljs$core$async$state_machine__18875__auto__;
})()
;})(switch__18874__auto__,c__18986__auto___21741,out))
})();
var state__18988__auto__ = (function (){var statearr_21736 = f__18987__auto__.call(null);
(statearr_21736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18986__auto___21741);

return statearr_21736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18988__auto__);
});})(c__18986__auto___21741,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map