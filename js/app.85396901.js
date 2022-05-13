(function(){"use strict";var t={1595:function(t,n,r){var o=r(9242),e=r(3396);const a=(0,e._)("br",null,null,-1),u=(0,e._)("hr",null,null,-1),i=(0,e._)("br",null,null,-1);function c(t,n,r,o,c,s){const l=(0,e.up)("LineChart"),f=(0,e.up)("DoughnutChart");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(l),a,u,i,(0,e.Wm)(f)],64)}function s(t,n,r,o,a,u){const i=(0,e.up)("DoughnutChart",!0);return(0,e.wg)(),(0,e.j4)(i,{chartData:t.testData},null,8,["chartData"])}var l=r(6610),f=r(5140);f.kL.register(...f.zX);var p=(0,e.aZ)({name:"donught-chart",components:{DoughnutChart:l.LD},setup(){const t={labels:["Paris","Nîmes","Toulon","Perpignan","Autre"],datasets:[{data:[30,40,60,70,5],backgroundColor:["#006ba6","#0496ff","#ffbc42","#d81159","#8f2d56"]}]};return{testData:t}}}),d=r(89);const h=(0,d.Z)(p,[["render",s]]);var v=h;function b(t,n,r,o,a,u){const i=(0,e.up)("LineChart",!0);return(0,e.wg)(),(0,e.j4)(i,{chartData:t.testData,options:t.options},null,8,["chartData","options"])}var g=r(4870);f.kL.register(...f.zX);var m=(0,e.aZ)({name:"line-chart",components:{LineChart:l.wW},setup(){const t=(0,g.iH)({responsive:!0,plugins:{legend:{position:"bottom"},title:{display:!0,text:"Stocks",padding:20,font:{size:24}}}}),n={labels:["January","February","March","April","May"],datasets:[{label:"NYSE: U",data:[105,101,93,90,67],borderColor:"#472d30",backgroundColor:"#472d30",pointStyle:"rectRot",pointRadius:8,pointHoverRadius:10},{label:"NASDAQ: FB",data:[331,219,224,217,191],borderColor:"#3185fc",backgroundColor:"#3185fc",pointStyle:"circle",pointRadius:8,pointHoverRadius:10}]};return{testData:n,options:t}}});const C=(0,d.Z)(m,[["render",b]]);var D=C,y={name:"App",components:{DoughnutChart:v,LineChart:D}};const w=(0,d.Z)(y,[["render",c]]);var k=w;(0,o.ri)(k).mount("#app")}},n={};function r(o){var e=n[o];if(void 0!==e)return e.exports;var a=n[o]={exports:{}};return t[o](a,a.exports,r),a.exports}r.m=t,function(){var t=[];r.O=function(n,o,e,a){if(!o){var u=1/0;for(l=0;l<t.length;l++){o=t[l][0],e=t[l][1],a=t[l][2];for(var i=!0,c=0;c<o.length;c++)(!1&a||u>=a)&&Object.keys(r.O).every((function(t){return r.O[t](o[c])}))?o.splice(c--,1):(i=!1,a<u&&(u=a));if(i){t.splice(l--,1);var s=e();void 0!==s&&(n=s)}}return n}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[o,e,a]}}(),function(){r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,{a:n}),n}}(),function(){r.d=function(t,n){for(var o in n)r.o(n,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};r.O.j=function(n){return 0===t[n]};var n=function(n,o){var e,a,u=o[0],i=o[1],c=o[2],s=0;if(u.some((function(n){return 0!==t[n]}))){for(e in i)r.o(i,e)&&(r.m[e]=i[e]);if(c)var l=c(r)}for(n&&n(o);s<u.length;s++)a=u[s],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(l)},o=self["webpackChunkvue_charts"]=self["webpackChunkvue_charts"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(1595)}));o=r.O(o)})();
//# sourceMappingURL=app.85396901.js.map