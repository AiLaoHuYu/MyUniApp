"use strict";const t=require("../../../../common/vendor.js"),e=require("../../js_sdk/u-charts/u-charts.js"),i=require("../../js_sdk/u-charts/config-ucharts.js");function o(t={},...e){for(let i in e)for(let a in e[i])e[i].hasOwnProperty(a)&&(t[a]=e[i][a]&&"object"==typeof e[i][a]?o(Array.isArray(e[i][a])?[]:{},t[a],e[i][a]):e[i][a]);return t}function a(t,e){for(let i in t)t.hasOwnProperty(i)&&null!==t[i]&&"object"==typeof t[i]?a(t[i],e):"format"===i&&"string"==typeof t[i]&&(t.formatter=e[t[i]]?e[t[i]]:void 0);return t}var s=null;const n={name:"qiun-data-charts",mixins:[t.Vs.mixinDatacom],props:{type:{type:String,default:null},canvasId:{type:String,default:"uchartsid"},canvas2d:{type:Boolean,default:!1},background:{type:String,default:"rgba(0,0,0,0)"},animation:{type:Boolean,default:!0},chartData:{type:Object,default:()=>({categories:[],series:[]})},opts:{type:Object,default:()=>({})},eopts:{type:Object,default:()=>({})},loadingType:{type:Number,default:2},errorShow:{type:Boolean,default:!0},errorReload:{type:Boolean,default:!0},errorMessage:{type:String,default:null},inScrollView:{type:Boolean,default:!1},reshow:{type:Boolean,default:!1},reload:{type:Boolean,default:!1},disableScroll:{type:Boolean,default:!1},optsWatch:{type:Boolean,default:!0},onzoom:{type:Boolean,default:!1},ontap:{type:Boolean,default:!0},ontouch:{type:Boolean,default:!1},onmouse:{type:Boolean,default:!0},onmovetip:{type:Boolean,default:!1},echartsH5:{type:Boolean,default:!1},echartsApp:{type:Boolean,default:!1},tooltipShow:{type:Boolean,default:!0},tooltipFormat:{type:String,default:void 0},tooltipCustom:{type:Object,default:void 0},startDate:{type:String,default:void 0},endDate:{type:String,default:void 0},textEnum:{type:Array,default:()=>[]},groupEnum:{type:Array,default:()=>[]},pageScrollTop:{type:Number,default:0},directory:{type:String,default:"/"},tapLegend:{type:Boolean,default:!0},menus:{type:Array,default:()=>[]}},data:()=>({cid:"uchartsid",inWx:!1,inAli:!1,inTt:!1,inBd:!1,inH5:!1,inApp:!1,inWin:!1,type2d:!0,disScroll:!1,openmouse:!1,pixel:1,cWidth:375,cHeight:250,showchart:!1,echarts:!1,echartsResize:{state:!1},uchartsOpts:{},echartsOpts:{},drawData:{},lastDrawTime:null}),created(){if(this.cid=this.canvasId,"uchartsid"==this.canvasId||""==this.canvasId){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",e=t.length,i="";for(let o=0;o<32;o++)i+=t.charAt(Math.floor(Math.random()*e));this.cid=i}const e=t.index.getSystemInfoSync();"windows"!==e.platform&&"mac"!==e.platform||(this.inWin=!0),this.inWx=!0,!1===this.canvas2d||"windows"===e.platform||"mac"===e.platform?this.type2d=!1:(this.type2d=!0,this.pixel=e.pixelRatio),this.disScroll=this.disableScroll},mounted(){this.$nextTick((()=>{this.beforeInit()}));const e=this.inH5?500:200,i=this;t.index.onWindowResize(function(t,e){let i=!1;return function(){clearTimeout(i),i&&clearTimeout(i),i=setTimeout((()=>{i=!1,t.apply(this,arguments)}),e)}}((function(t){if(1==i.mixinDatacomLoading)return;let e=i.mixinDatacomErrorMessage;null!==e&&"null"!==e&&""!==e||(i.echarts?i.echartsResize.state=!i.echartsResize.state:i.resizeHandler())}),e))},destroyed(){!0===this.echarts?(delete cfe.option[this.cid],delete cfe.instance[this.cid]):(delete i.cfu.option[this.cid],delete i.cfu.instance[this.cid]),t.index.offWindowResize((()=>{}))},watch:{chartDataProps:{handler(t,e){"object"==typeof t?JSON.stringify(t)!==JSON.stringify(e)&&(this._clearChart(),t.series&&t.series.length>0?this.beforeInit():(this.mixinDatacomLoading=!0,this.showchart=!1,this.mixinDatacomErrorMessage=null)):(this.mixinDatacomLoading=!1,this._clearChart(),this.showchart=!1,this.mixinDatacomErrorMessage="参数错误：chartData数据类型错误")},immediate:!1,deep:!0},localdata:{handler(t,e){JSON.stringify(t)!==JSON.stringify(e)&&(t.length>0?this.beforeInit():(this.mixinDatacomLoading=!0,this._clearChart(),this.showchart=!1,this.mixinDatacomErrorMessage=null))},immediate:!1,deep:!0},optsProps:{handler(t,e){"object"==typeof t?JSON.stringify(t)!==JSON.stringify(e)&&!1===this.echarts&&1==this.optsWatch&&this.checkData(this.drawData):(this.mixinDatacomLoading=!1,this._clearChart(),this.showchart=!1,this.mixinDatacomErrorMessage="参数错误：opts数据类型错误")},immediate:!1,deep:!0},eoptsProps:{handler(t,e){"object"==typeof t?JSON.stringify(t)!==JSON.stringify(e)&&!0===this.echarts&&this.checkData(this.drawData):(this.mixinDatacomLoading=!1,this.showchart=!1,this.mixinDatacomErrorMessage="参数错误：eopts数据类型错误")},immediate:!1,deep:!0},reshow(t,e){!0===t&&!1===this.mixinDatacomLoading&&setTimeout((()=>{this.mixinDatacomErrorMessage=null,this.echartsResize.state=!this.echartsResize.state,this.checkData(this.drawData)}),200)},reload(t,e){!0===t&&(this.showchart=!1,this.mixinDatacomErrorMessage=null,this.reloading())},mixinDatacomErrorMessage(t,e){t&&(this.emitMsg({name:"error",params:{type:"error",errorShow:this.errorShow,msg:t,id:this.cid}}),this.errorShow&&console.log("[秋云图表组件]"+t))},errorMessage(t,e){t&&this.errorShow&&null!==t&&"null"!==t&&""!==t?(this.showchart=!1,this.mixinDatacomLoading=!1,this.mixinDatacomErrorMessage=t):(this.showchart=!1,this.mixinDatacomErrorMessage=null,this.reloading())}},computed:{optsProps(){return JSON.parse(JSON.stringify(this.opts))},eoptsProps(){return JSON.parse(JSON.stringify(this.eopts))},chartDataProps(){return JSON.parse(JSON.stringify(this.chartData))}},methods:{beforeInit(){this.mixinDatacomErrorMessage=null,"object"==typeof this.chartData&&null!=this.chartData&&void 0!==this.chartData.series&&this.chartData.series.length>0?(this.drawData=o({},this.chartData),this.mixinDatacomLoading=!1,this.showchart=!0,this.checkData(this.chartData)):this.localdata.length>0?(this.mixinDatacomLoading=!1,this.showchart=!0,this.localdataInit(this.localdata)):""!==this.collection?(this.mixinDatacomLoading=!1,this.getCloudData()):this.mixinDatacomLoading=!0},localdataInit(t){if(this.groupEnum.length>0)for(let i=0;i<t.length;i++)for(let e=0;e<this.groupEnum.length;e++)t[i].group===this.groupEnum[e].value&&(t[i].group=this.groupEnum[e].text);if(this.textEnum.length>0)for(let i=0;i<t.length;i++)for(let e=0;e<this.textEnum.length;e++)t[i].text===this.textEnum[e].value&&(t[i].text=this.textEnum[e].text);let e=!1,a={categories:[],series:[]},s=[],n=[];if(e=!0===this.echarts?cfe.categories.includes(this.type):i.cfu.categories.includes(this.type),!0===e){if(this.chartData&&this.chartData.categories&&this.chartData.categories.length>0)s=this.chartData.categories;else if(this.startDate&&this.endDate){let t=new Date(this.startDate),e=new Date(this.endDate);for(;t<=e;)s.push((r=void 0,c=void 0,l=void 0,r=(h=t).getFullYear(),c=h.getMonth()+1,l=h.getDate(),c>=1&&c<=9&&(c="0"+c),l>=0&&l<=9&&(l="0"+l),r+"-"+c+"-"+l)),t=t.setDate(t.getDate()+1),t=new Date(t)}else{let e={};t.map((function(t,i){null==t.text||e[t.text]||(s.push(t.text),e[t.text]=!0)}))}a.categories=s}var h,r,c,l;let p={};if(t.map((function(t,e){null==t.group||p[t.group]||(n.push({name:t.group,data:[]}),p[t.group]=!0)})),0==n.length)if(n=[{name:"默认分组",data:[]}],!0===e)for(let i=0;i<s.length;i++){let e=0;for(let o=0;o<t.length;o++)t[o].text==s[i]&&(e=t[o].value);n[0].data.push(e)}else for(let i=0;i<t.length;i++)n[0].data.push({name:t[i].text,value:t[i].value});else for(let i=0;i<n.length;i++)if(s.length>0)for(let e=0;e<s.length;e++){let o=0;for(let a=0;a<t.length;a++)n[i].name==t[a].group&&t[a].text==s[e]&&(o=t[a].value);n[i].data.push(o)}else for(let e=0;e<t.length;e++)n[i].name==t[e].group&&n[i].data.push(t[e].value);a.series=n,this.drawData=o({},a),this.checkData(a)},reloading(){!1!==this.errorReload&&(this.showchart=!1,this.mixinDatacomErrorMessage=null,""!==this.collection?(this.mixinDatacomLoading=!1,this.onMixinDatacomPropsChange(!0)):this.beforeInit())},checkData(t){let e=this.cid;!0===this.echarts?(cfe.option[e]=o({},this.eopts),cfe.option[e].id=e,cfe.option[e].type=this.type):this.type&&i.cfu.type.includes(this.type)?(i.cfu.option[e]=o({},i.cfu[this.type],this.opts),i.cfu.option[e].canvasId=e):(this.mixinDatacomLoading=!1,this.showchart=!1,this.mixinDatacomErrorMessage="参数错误：props参数中type类型不正确");let a=o({},t);void 0!==a.series&&a.series.length>0&&(this.mixinDatacomErrorMessage=null,!0===this.echarts?(cfe.option[e].chartData=a,this.$nextTick((()=>{this.init()}))):(i.cfu.option[e].categories=a.categories,i.cfu.option[e].series=a.series,this.$nextTick((()=>{this.init()}))))},resizeHandler(){let e=Date.now();e-(this.lastDrawTime?this.lastDrawTime:e-3e3)<1e3||t.index.createSelectorQuery().in(this).select("#ChartBoxId"+this.cid).boundingClientRect((t=>{this.showchart=!0,t.width>0&&t.height>0&&(t.width===this.cWidth&&t.height===this.cHeight||this.checkData(this.drawData))})).exec()},getCloudData(){1!=this.mixinDatacomLoading&&(this.mixinDatacomLoading=!0,this.mixinDatacomGet().then((t=>{this.mixinDatacomResData=t.result.data,this.localdataInit(this.mixinDatacomResData)})).catch((t=>{this.mixinDatacomLoading=!1,this.showchart=!1,this.mixinDatacomErrorMessage="请求错误："+t})))},onMixinDatacomPropsChange(t,e){1==t&&""!==this.collection&&(this.showchart=!1,this.mixinDatacomErrorMessage=null,this._clearChart(),this.getCloudData())},_clearChart(){let t=this.cid;if(!0!==this.echarts&&i.cfu.option[t]&&i.cfu.option[t].context){const e=i.cfu.option[t].context;"object"!=typeof e||i.cfu.option[t].update||(e.clearRect(0,0,this.cWidth*this.pixel,this.cHeight*this.pixel),e.draw())}},init(){let e=this.cid;t.index.createSelectorQuery().in(this).select("#ChartBoxId"+e).boundingClientRect((s=>{s.width>0&&s.height>0?(this.mixinDatacomLoading=!1,this.showchart=!0,this.lastDrawTime=Date.now(),this.cWidth=s.width,this.cHeight=s.height,!0!==this.echarts&&(i.cfu.option[e].background="rgba(0,0,0,0)"==this.background?"#FFFFFF":this.background,i.cfu.option[e].canvas2d=this.type2d,i.cfu.option[e].pixelRatio=this.pixel,i.cfu.option[e].animation=this.animation,i.cfu.option[e].width=s.width*this.pixel,i.cfu.option[e].height=s.height*this.pixel,i.cfu.option[e].onzoom=this.onzoom,i.cfu.option[e].ontap=this.ontap,i.cfu.option[e].ontouch=this.ontouch,i.cfu.option[e].onmouse=this.openmouse,i.cfu.option[e].onmovetip=this.onmovetip,i.cfu.option[e].tooltipShow=this.tooltipShow,i.cfu.option[e].tooltipFormat=this.tooltipFormat,i.cfu.option[e].tooltipCustom=this.tooltipCustom,i.cfu.option[e].inScrollView=this.inScrollView,i.cfu.option[e].lastDrawTime=this.lastDrawTime,i.cfu.option[e].tapLegend=this.tapLegend),this.inH5||this.inApp?1==this.echarts?(cfe.option[e].ontap=this.ontap,cfe.option[e].onmouse=this.openmouse,cfe.option[e].tooltipShow=this.tooltipShow,cfe.option[e].tooltipFormat=this.tooltipFormat,cfe.option[e].tooltipCustom=this.tooltipCustom,cfe.option[e].lastDrawTime=this.lastDrawTime,this.echartsOpts=o({},cfe.option[e])):(i.cfu.option[e].rotateLock=i.cfu.option[e].rotate,this.uchartsOpts=o({},i.cfu.option[e])):(i.cfu.option[e]=a(i.cfu.option[e],i.cfu.formatter),this.mixinDatacomErrorMessage=null,this.mixinDatacomLoading=!1,this.showchart=!0,this.$nextTick((()=>{if(!0===this.type2d){t.index.createSelectorQuery().in(this).select("#"+e).fields({node:!0,size:!0}).exec((t=>{if(t[0]){const o=t[0].node,a=o.getContext("2d");i.cfu.option[e].context=a,i.cfu.option[e].rotateLock=i.cfu.option[e].rotate,i.cfu.instance[e]&&i.cfu.option[e]&&!0===i.cfu.option[e].update?this._updataUChart(e):(o.width=s.width*this.pixel,o.height=s.height*this.pixel,o._width=s.width*this.pixel,o._height=s.height*this.pixel,setTimeout((()=>{i.cfu.option[e].context.restore(),i.cfu.option[e].context.save(),this._newChart(e)}),100))}else this.showchart=!1,this.mixinDatacomErrorMessage="参数错误：开启2d模式后，未获取到dom节点，canvas-id:"+e}))}else this.inAli&&(i.cfu.option[e].rotateLock=i.cfu.option[e].rotate),i.cfu.option[e].context=t.index.createCanvasContext(e,this),i.cfu.instance[e]&&i.cfu.option[e]&&!0===i.cfu.option[e].update?this._updataUChart(e):setTimeout((()=>{i.cfu.option[e].context.restore(),i.cfu.option[e].context.save(),this._newChart(e)}),100)})))):(this.mixinDatacomLoading=!1,this.showchart=!1,1==this.reshow&&(this.mixinDatacomErrorMessage="布局错误：未获取到父元素宽高尺寸！canvas-id:"+e))})).exec()},saveImage(){t.index.canvasToTempFilePath({canvasId:this.cid,success:e=>{t.index.saveImageToPhotosAlbum({filePath:e.tempFilePath,success:function(){t.index.showToast({title:"保存成功",duration:2e3})}})}},this)},getImage(){if(0==this.type2d)t.index.canvasToTempFilePath({canvasId:this.cid,success:t=>{this.emitMsg({name:"getImage",params:{type:"getImage",base64:t.tempFilePath}})}},this);else{t.index.createSelectorQuery().in(this).select("#"+this.cid).fields({node:!0,size:!0}).exec((t=>{if(t[0]){const e=t[0].node;this.emitMsg({name:"getImage",params:{type:"getImage",base64:e.toDataURL("image/png")}})}}))}},_newChart(t){1!=this.mixinDatacomLoading&&(this.showchart=!0,i.cfu.instance[t]=new e.uCharts(i.cfu.option[t]),i.cfu.instance[t].addEventListener("renderComplete",(()=>{this.emitMsg({name:"complete",params:{type:"complete",complete:!0,id:t,opts:i.cfu.instance[t].opts}}),i.cfu.instance[t].delEventListener("renderComplete")})),i.cfu.instance[t].addEventListener("scrollLeft",(()=>{this.emitMsg({name:"scrollLeft",params:{type:"scrollLeft",scrollLeft:!0,id:t,opts:i.cfu.instance[t].opts}})})),i.cfu.instance[t].addEventListener("scrollRight",(()=>{this.emitMsg({name:"scrollRight",params:{type:"scrollRight",scrollRight:!0,id:t,opts:i.cfu.instance[t].opts}})})))},_updataUChart(t){i.cfu.instance[t].updateData(i.cfu.option[t])},_tooltipDefault(t,e,i,o){if(e){let i=t.data;return"object"==typeof t.data&&(i=t.data.value),e+" "+t.name+":"+i}return t.properties&&t.properties.name?t.properties.name:t.name+":"+t.data},_showTooltip(t){let e=this.cid,o=i.cfu.option[e].tooltipCustom;if(o&&null!=o){let a;o.x>=0&&o.y>=0&&(a={x:o.x,y:o.y+10}),i.cfu.instance[e].showToolTip(t,{index:o.index,offset:a,textList:o.textList,formatter:(t,o,a,s)=>"string"==typeof i.cfu.option[e].tooltipFormat&&i.cfu.formatter[i.cfu.option[e].tooltipFormat]?i.cfu.formatter[i.cfu.option[e].tooltipFormat](t,o,a,s):this._tooltipDefault(t,o,a,s)})}else i.cfu.instance[e].showToolTip(t,{formatter:(t,o,a,s)=>"string"==typeof i.cfu.option[e].tooltipFormat&&i.cfu.formatter[i.cfu.option[e].tooltipFormat]?i.cfu.formatter[i.cfu.option[e].tooltipFormat](t,o,a,s):this._tooltipDefault(t,o,a,s)})},_tap(e,o){let a=this.cid,s=null,n=null;!0===this.inScrollView||this.inAli?t.index.createSelectorQuery().in(this).select("#ChartBoxId"+a).boundingClientRect((t=>{e.changedTouches=[],this.inAli?e.changedTouches.unshift({x:e.detail.clientX-t.left,y:e.detail.clientY-t.top}):e.changedTouches.unshift({x:e.detail.x-t.left,y:e.detail.y-t.top-this.pageScrollTop}),o?!0===this.tooltipShow&&this._showTooltip(e):(s=i.cfu.instance[a].getCurrentDataIndex(e),n=i.cfu.instance[a].getLegendDataIndex(e),!0===this.tapLegend&&i.cfu.instance[a].touchLegend(e),!0===this.tooltipShow&&this._showTooltip(e),this.emitMsg({name:"getIndex",params:{type:"getIndex",event:{x:e.detail.x-t.left,y:e.detail.y-t.top},currentIndex:s,legendIndex:n,id:a,opts:i.cfu.instance[a].opts}}))})).exec():o?!0===this.tooltipShow&&this._showTooltip(e):(e.changedTouches=[],e.changedTouches.unshift({x:e.detail.x-e.currentTarget.offsetLeft,y:e.detail.y-e.currentTarget.offsetTop}),s=i.cfu.instance[a].getCurrentDataIndex(e),n=i.cfu.instance[a].getLegendDataIndex(e),!0===this.tapLegend&&i.cfu.instance[a].touchLegend(e),!0===this.tooltipShow&&this._showTooltip(e),this.emitMsg({name:"getIndex",params:{type:"getIndex",event:{x:e.detail.x,y:e.detail.y-e.currentTarget.offsetTop},currentIndex:s,legendIndex:n,id:a,opts:i.cfu.instance[a].opts}}))},_touchStart(t){let e=this.cid;s=Date.now(),!0===i.cfu.option[e].enableScroll&&1==t.touches.length&&i.cfu.instance[e].scrollStart(t),this.emitMsg({name:"getTouchStart",params:{type:"touchStart",event:t.changedTouches[0],id:e,opts:i.cfu.instance[e].opts}})},_touchMove(t){let e=this.cid,o=Date.now(),a=o-s,n=i.cfu.option[e].touchMoveLimit||24;a<Math.floor(1e3/n)||(s=o,!0===i.cfu.option[e].enableScroll&&1==t.changedTouches.length&&i.cfu.instance[e].scroll(t),!0===this.ontap&&!1===i.cfu.option[e].enableScroll&&!0===this.onmovetip&&this._tap(t,!0),!0===this.ontouch&&!0===i.cfu.option[e].enableScroll&&!0===this.onzoom&&2==t.changedTouches.length&&i.cfu.instance[e].dobuleZoom(t),this.emitMsg({name:"getTouchMove",params:{type:"touchMove",event:t.changedTouches[0],id:e,opts:i.cfu.instance[e].opts}}))},_touchEnd(t){let e=this.cid;!0===i.cfu.option[e].enableScroll&&0==t.touches.length&&i.cfu.instance[e].scrollEnd(t),this.emitMsg({name:"getTouchEnd",params:{type:"touchEnd",event:t.changedTouches[0],id:e,opts:i.cfu.instance[e].opts}}),!0===this.ontap&&!1===i.cfu.option[e].enableScroll&&!0===this.onmovetip&&this._tap(t,!0)},_error(t){this.mixinDatacomErrorMessage=t.detail.errMsg},emitMsg(t){this.$emit(t.name,t.params)},getRenderType(){!0===this.echarts&&!1===this.mixinDatacomLoading&&this.beforeInit()},toJSON(){return this}}};if(!Array){(t.resolveComponent("qiun-loading")+t.resolveComponent("qiun-error"))()}Math||((()=>"../qiun-loading/qiun-loading.js")+(()=>"../qiun-error/qiun-error.js"))();const h=t._export_sfc(n,[["render",function(e,i,o,a,s,n){return t.e({a:e.mixinDatacomLoading},e.mixinDatacomLoading?{b:t.p({loadingType:o.loadingType})}:{},{c:e.mixinDatacomErrorMessage&&o.errorShow},e.mixinDatacomErrorMessage&&o.errorShow?{d:t.p({errorMessage:o.errorMessage}),e:t.o(((...t)=>n.reloading&&n.reloading(...t)))}:{},{f:s.type2d},s.type2d?t.e({g:o.ontouch},o.ontouch?{h:s.cid,i:s.cid,j:s.cWidth+"px",k:s.cHeight+"px",l:o.background,m:s.disScroll,n:t.o(((...t)=>n._touchStart&&n._touchStart(...t))),o:t.o(((...t)=>n._touchMove&&n._touchMove(...t))),p:t.o(((...t)=>n._touchEnd&&n._touchEnd(...t))),q:t.o(((...t)=>n._error&&n._error(...t))),r:s.showchart,s:t.o(((...t)=>n._tap&&n._tap(...t)))}:{},{t:!o.ontouch},o.ontouch?{}:{v:s.cid,w:s.cid,x:s.cWidth+"px",y:s.cHeight+"px",z:o.background,A:s.disScroll,B:t.o(((...t)=>n._error&&n._error(...t))),C:s.showchart,D:t.o(((...t)=>n._tap&&n._tap(...t)))}):{},{E:!s.type2d},s.type2d?{}:t.e({F:o.ontouch},o.ontouch?t.e({G:s.showchart},s.showchart?{H:s.cid,I:s.cid,J:s.cWidth+"px",K:s.cHeight+"px",L:o.background,M:t.o(((...t)=>n._touchStart&&n._touchStart(...t))),N:t.o(((...t)=>n._touchMove&&n._touchMove(...t))),O:t.o(((...t)=>n._touchEnd&&n._touchEnd(...t))),P:s.disScroll,Q:t.o(((...t)=>n._error&&n._error(...t)))}:{},{R:t.o(((...t)=>n._tap&&n._tap(...t)))}):{},{S:!o.ontouch},o.ontouch?{}:t.e({T:s.showchart},s.showchart?{U:s.cid,V:s.cid,W:s.cWidth+"px",X:s.cHeight+"px",Y:o.background,Z:s.disScroll,aa:t.o(((...t)=>n._tap&&n._tap(...t))),ab:t.o(((...t)=>n._error&&n._error(...t)))}:{})),{ac:"ChartBoxId"+s.cid})}],["__scopeId","data-v-03a40316"]]);wx.createComponent(h);
