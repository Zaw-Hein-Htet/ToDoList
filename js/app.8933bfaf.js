(function(t){function e(e){for(var n,o,l=e[0],a=e[1],c=e[2],d=0,f=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,l=1;l<s.length;l++){var a=s[l];0!==i[a]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},i={app:0},r=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=a;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12 col-md-4"},[t._m(0),s("AddSection",{on:{createList:t.create}}),s("div",{staticClass:"mb-4 d-flex justify-content-between align-items-center"},[s("p",{staticClass:"h3 font-weight-bold text-primary"},[t._v("List Item"+t._s(t.lists.length>1?"s":""))]),t.lists.length>0&&t.lists.length===t.totalDone?s("p",{staticClass:"badge badge-success badge-pill mb-0 py-2"},[t._v("all done "),s("i",{staticClass:"fas fa-check-circle"})]):s("p",{staticClass:"badge badge-primary badge-pill mb-0 py-2"},[t._v("done "+t._s(t.totalDone))])]),s("div",{staticClass:"gv"},[s("ul",{staticClass:"list-group shadow cus-li"},[0===t.lists.length?s("li",{staticClass:"list-group-item text-center"},[t._v(" There is no job 🥺 ")]):t._l(t.lists,(function(e){return s("List1",{key:e,attrs:{list:e},on:{del:t.del}})}))],2)])],1)])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my-4"},[s("h3",{staticClass:"text-center text-white font-weight-bold"},[t._v("To Do List ❤")])])}],o=(s("4de4"),s("d3b7"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-row mb-4"},[s("div",{staticClass:"col-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newMessage,expression:"newMessage"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.newMessage},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.create()},function(e){t.errorMessage=!1}],input:function(e){e.target.composing||(t.newMessage=e.target.value)}}})]),s("div",{staticClass:"col-2"},[s("button",{staticClass:"btn btn-primary text-white shadow",on:{click:function(e){return t.create()}}},[s("i",{staticClass:"fas fa-plus"})])]),s("div",{staticClass:"col-12"},[t.errorMessage?s("small",{staticClass:"text-danger font-weigth-bold"},[t._v("Do something Don't be lazy")]):t._e()])])}),l=[],a={name:"AddSection",data:function(){return{newMessage:"",errorMessage:!1}},methods:{create:function(){this.newMessage.length?(this.$emit("createList",this.newMessage),this.newMessage=""):this.errorMessage=!0}}},c=a,u=s("2877"),d=Object(u["a"])(c,o,l,!1,null,null,null),f=d.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{class:["list-group-item d-flex justify-content-between align-items-center showeffect",{dele:t.isDelect}]},[t.isEdit?s("input",{directives:[{name:"model",rawName:"v-model",value:t.list.message,expression:"list.message"}],staticClass:"custom-control-lg mr-2",attrs:{type:"text"},domProps:{value:t.list.message},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.isEdit=!1},input:function(e){e.target.composing||t.$set(t.list,"message",e.target.value)}}}):s("div",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.list.isDone,expression:"list.isDone"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customCheck"+t.list.id},domProps:{checked:Array.isArray(t.list.isDone)?t._i(t.list.isDone,null)>-1:t.list.isDone},on:{change:function(e){var s=t.list.isDone,n=e.target,i=!!n.checked;if(Array.isArray(s)){var r=null,o=t._i(s,r);n.checked?o<0&&t.$set(t.list,"isDone",s.concat([r])):o>-1&&t.$set(t.list,"isDone",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.list,"isDone",i)}}}),s("label",{class:["custom-control-label",{done:t.list.isDone}],attrs:{for:"customCheck"+t.list.id}},[t._v(t._s(t.list.message))])]),s("div",{},[s("button",{staticClass:"btn btn-primary mr-2",on:{click:function(e){t.isEdit=!0},dblclick:function(e){t.list.isEdit=!1}}},[s("i",{staticClass:"fas fa-pen"})]),s("button",{staticClass:"btn btn-danger",on:{click:function(e){t.isDelect=!0,t.del(t.list.id)}}},[s("i",{staticClass:"fas fa-trash"})])])])},m=[],g={name:"List1",data:function(){return{isEdit:!1,isDelect:!1}},props:{list:{type:Object,required:!0}},methods:{del:function(t){this.$emit("del",t)}}},h=g,v=Object(u["a"])(h,p,m,!1,null,null,null),b=v.exports,y={components:{AddSection:f,List1:b},name:"App",data:function(){return{currentId:0,lists:[]}},computed:{totalDone:function(){return this.lists.filter((function(t){return!0===t.isDone})).length}},methods:{create:function(t){this.currentId++,this.lists.push({id:this.currentId,message:t,isDone:!1}),this.newMessage=""},del:function(t){var e=this;setTimeout((function(){return e.lists=e.lists.filter((function(e){return e.id!==t}))}),600)}}},w=y,C=(s("034f"),Object(u["a"])(w,i,r,!1,null,null,null)),_=C.exports;s("f9e3"),s("15f5"),s("77ed");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(_)}}).$mount("#app")},"85ec":function(t,e,s){}});
//# sourceMappingURL=app.8933bfaf.js.map