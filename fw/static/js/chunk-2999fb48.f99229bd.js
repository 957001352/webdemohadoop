(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2999fb48"],{"09f4":function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),Math.easeInOutQuad=function(t,e,a,n){return t/=n/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function s(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function i(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function o(t,e,a){var o=i(),r=t-o,l=20,c=0;e="undefined"===typeof e?500:e;var d=function t(){c+=l;var i=Math.easeInOutQuad(c,o,r,e);s(i),c<e?n(t):a&&"function"===typeof a&&a()};d()}},"13f1":function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return i})),a.d(e,"i",(function(){return o})),a.d(e,"g",(function(){return r})),a.d(e,"d",(function(){return l})),a.d(e,"e",(function(){return c})),a.d(e,"h",(function(){return d})),a.d(e,"j",(function(){return u})),a.d(e,"a",(function(){return p})),a.d(e,"f",(function(){return f}));var n=a("b775");function s(t){return Object(n["a"])({url:window.configs.api+"/qualityFirstendCheck/findList",method:"get",params:t})}function i(t){return Object(n["a"])({url:window.configs.api+"/qualityInspection/findList",method:"get",params:t})}function o(t){return Object(n["a"])({url:window.configs.api+"/qualityInspection/save",method:"post",data:t})}function r(t){return Object(n["a"])({url:window.configs.api+"/qualityInspection/change",method:"post",data:t})}function l(t){return Object(n["a"])({url:window.configs.api+"/qualityFirstendCheck/findAppearanceOrSizeInspectInfo",method:"get",params:t})}function c(t){return Object(n["a"])({url:window.configs.api+"/qualityInspection/findList",method:"get",params:t})}function d(t){return Object(n["a"])({url:window.configs.api+"/qualityStoreCheck/submit",method:"post",data:t})}function u(t){return Object(n["a"])({url:window.configs.api+"/qualityFirstendCheck/update",method:"post",data:t})}function p(t){return Object(n["a"])({url:window.configs.api+"/qualityFirstendCheck/coerceClose",method:"post",data:t})}function f(t){return Object(n["a"])({url:window.configs.api+"/qualityFirstendCheck/postponeExe",method:"post",data:t})}},"2ac3":function(t,e,a){"use strict";a.d(e,"e",(function(){return s})),a.d(e,"g",(function(){return i})),a.d(e,"d",(function(){return o})),a.d(e,"f",(function(){return r})),a.d(e,"a",(function(){return l})),a.d(e,"c",(function(){return c})),a.d(e,"b",(function(){return d}));var n=a("b775");function s(t){return Object(n["a"])({url:window.configs.api+"/mouldStorageHouse/findStorageList",method:"get",params:t})}function i(t){return Object(n["a"])({url:window.configs.api+"/mouldStorageHouse/saveStorage",method:"post",data:t})}function o(t){return Object(n["a"])({url:window.configs.api+"/mouldStorageHouse/findLocationList",method:"get",params:t})}function r(t){return Object(n["a"])({url:window.configs.api+"/mouldStorageHouse/saveLocation",method:"post",data:t})}function l(t){return Object(n["a"])({url:window.configs.api+"/mouldStorageHouse/deleteLocation",method:"get",params:{ids:t}})}function c(t){return Object(n["a"])({url:window.configs.api+"/mouldStorageHouse/findEmptyLocationList",method:"get",params:t})}function d(t){return Object(n["a"])({url:window.configs.api+"/logisticsProduct/getAllCode",method:"get",params:t})}},"33cc":function(t,e,a){"use strict";var n=a("dc14"),s=a.n(n);s.a},"347a":function(t,e,a){"use strict";var n=a("9a2f"),s=a.n(n);s.a},"47ee":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[t.dialogVisible?t._e():a("div",{staticClass:"searchInfo"},[a("span",{staticClass:"seachname"},[t._v(" 零件代码: ")]),a("el-input",{staticClass:"inputCls",staticStyle:{width:"180px"},attrs:{placeholder:"请输入零件代码"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.searchKey.code,callback:function(e){t.$set(t.searchKey,"code",e)},expression:"searchKey.code"}}),a("span",{staticClass:"seachname"},[t._v(" 零件名称: ")]),a("el-input",{staticClass:"inputCls",staticStyle:{width:"180px"},attrs:{placeholder:"请输入零件名称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.searchKey.productName,callback:function(e){t.$set(t.searchKey,"productName",e)},expression:"searchKey.productName"}}),a("el-button",{staticClass:"primaryBtn",staticStyle:{"margin-left":"7px"},attrs:{type:"primary"},on:{click:t.searchBtn}},[a("svg-icon",{attrs:{"icon-class":"search"}}),t._v(" 查询 ")],1),a("el-button",{staticClass:"resetBtn",staticStyle:{"margin-left":"7px"},attrs:{icon:"el-icon-refresh-right",type:"primary"},on:{click:t.searchrestBtn}},[t._v(" 重置 ")])],1),t.dialogVisible?t._e():a("div",{staticClass:"searchInfo"},[a("el-button",{staticClass:"addBtn",attrs:{type:"default",icon:"el-icon-plus"},on:{click:function(e){return t.bindBtn("","add")}}},[t._v(" 新建检验规范")])],1),t.dialogVisible?t._e():a("div",{staticClass:"el-tablenew"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.list,"row-class-name":t.tableRowClassName,border:"",height:"calc(100vh - 337px)"}},[a("el-table-column",{attrs:{prop:"date",label:"序号",width:"55",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index+1)+" ")]}}],null,!1,3056706777)}),a("el-table-column",{attrs:{prop:"name",label:"零件代码",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.code))])]}}],null,!1,2012011659)}),a("el-table-column",{attrs:{prop:"name",label:"零件名称",align:"center","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.productName))])]}}],null,!1,3302725738)}),a("el-table-column",{attrs:{prop:"keepCycle",label:"图纸编号",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(" "+t._s(e.row.drawing))])]}}],null,!1,3346118733)}),a("el-table-column",{attrs:{prop:"startTime",label:"变更原因",align:"center","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(" "+t._s(e.row.reason))])]}}],null,!1,684269385)}),a("el-table-column",{attrs:{prop:"lastTime",label:"变更时间",align:"center",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.createTime))])]}}],null,!1,2774630583)}),a("el-table-column",{attrs:{prop:"date",label:"操作",align:"center",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"defaultTextBtn",attrs:{type:"text"},on:{click:function(a){return t.bindBtn(e.row,"find")}}},[a("svg-icon",{attrs:{"icon-class":"search"}}),t._v(" 查看 ")],1),(!e.row.auditStatus||e.row.auditStatus.indexOf("待")<0)&&t.hasPermission("firstLastStandard/change")?a("el-button",{staticClass:"addTextBtn",attrs:{type:"text"},on:{click:function(a){return t.bindBtn(e.row,"edit")}}},[a("svg-icon",{attrs:{"icon-class":"edit"}}),t._v(" 变更 ")],1):t._e()]}}],null,!1,3469935723)})],1),a("pagination",{staticClass:"pagePadd",attrs:{total:t.total,page:t.searchKey.pageNum,limit:t.searchKey.pageSize},on:{"update:page":function(e){return t.$set(t.searchKey,"pageNum",e)},"update:limit":function(e){return t.$set(t.searchKey,"pageSize",e)},pagination:t.handleCurrentChange}})],1),t.dialogVisible?a("div",{staticClass:"repairsty"},[a("first-last-standard-info",{attrs:{objstr:t.objstr,type:t.type},on:{DetailCallBack:t.DetailCallBack}})],1):t._e()])},s=[],i=a("13f1"),o=a("333d"),r=a("a888"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-page-header",{attrs:{content:"首末件检验规范"},on:{back:function(e){return t.backClick(null)}}}),a("div",{staticClass:"content1"},[t._m(0),a("div",{staticClass:"contentBody"},[a("el-form",{ref:"forms",attrs:{model:t.forms,rules:t.rules,"label-position":"right","label-width":"120px"}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"零件编号:",prop:"code"}},[a("el-select",{staticStyle:{width:"90%"},attrs:{disabled:"add"!==t.type,placeholder:"请选择零件编号",filterable:""},on:{change:function(e){return t.handleMateriel()}},model:{value:t.forms.code,callback:function(e){t.$set(t.forms,"code",e)},expression:"forms.code"}},t._l(t.materielList,(function(t,e){return a("el-option",{key:e,attrs:{label:t.code,value:e}})})),1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"零件名称:",prop:"name"}},[a("el-input",{staticStyle:{width:"90%"},attrs:{disabled:!0,placeholder:"零件名称",maxlength:"20"},model:{value:t.forms.name,callback:function(e){t.$set(t.forms,"name",e)},expression:"forms.name"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"零件图号及版本:",prop:"version"}},[a("el-input",{staticStyle:{width:"90%"},attrs:{disabled:"add"!==t.type,placeholder:"零件图号及版本",maxlength:"20"},model:{value:t.forms.version,callback:function(e){t.$set(t.forms,"version",e)},expression:"forms.version"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"客户:",prop:"customer"}},[a("el-input",{staticStyle:{width:"90%"},attrs:{disabled:"add"!==t.type,placeholder:"客户",maxlength:"20"},model:{value:t.forms.customer,callback:function(e){t.$set(t.forms,"customer",e)},expression:"forms.customer"}})],1)],1)],1)],1)],1)]),a("div",{staticClass:"content1"},[t._m(1),a("div",{staticClass:"contentBody el-tablenew"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.list,"row-class-name":t.tableRowClassName,"span-method":t.objectSpanMethod,border:""}},[a("el-table-column",{attrs:{label:"检验项目",align:"center"}},[a("el-table-column",{attrs:{label:"产品特性",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(0===e.row.classify?"外观":1===e.row.classify?"包装":2===e.row.classify?"材质":3===e.row.classify?"尺寸":4===e.row.classify?"备注":"巡检时间")+" ")]}}])}),a("el-table-column",{attrs:{label:"工艺（过程）特性",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[4!==e.row.classify&&5!==e.row.classify?a("el-input",{attrs:{disabled:"find"===t.type,type:"textarea",autosize:"",placeholder:"内容",maxlength:"100"},model:{value:e.row.process,callback:function(a){t.$set(e.row,"process",a)},expression:"scope.row.process"}}):t._e(),4===e.row.classify?a("el-input",{attrs:{disabled:"find"===t.type,type:"textarea",autosize:"",placeholder:"内容",maxlength:"100"},model:{value:e.row.remark,callback:function(a){t.$set(e.row,"remark",a)},expression:"scope.row.remark"}}):t._e(),5===e.row.classify?a("el-input-number",{staticStyle:{"max-width":"300px"},attrs:{min:0,precision:0,controls:!1,disabled:"find"===t.type,placeholder:"小时"},model:{value:e.row.inspection,callback:function(a){t.$set(e.row,"inspection",a)},expression:"scope.row.inspection"}}):t._e(),5===e.row.classify?a("span",[t._v(" 小时")]):t._e()]}}])})],1),a("el-table-column",{attrs:{label:"特殊特性分类",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[4!==e.row.classify&&5!==e.row.classify?a("el-input",{attrs:{disabled:"find"===t.type,type:"textarea",autosize:"",placeholder:"内容",maxlength:"100"},model:{value:e.row.special,callback:function(a){t.$set(e.row,"special",a)},expression:"scope.row.special"}}):t._e(),5===e.row.classify?a("span",[t._v(" 小时")]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"name",label:"产品/过程规范/公差",align:"center",width:"280px"},scopedSlots:t._u([{key:"default",fn:function(e){return[3!==e.row.classify&&4!==e.row.classify&&5!==e.row.classify?a("el-input",{attrs:{disabled:"find"===t.type,placeholder:"内容",type:"textarea",autosize:"",maxlength:"100"},model:{value:e.row.standard,callback:function(a){t.$set(e.row,"standard",a)},expression:"scope.row.standard"}}):t._e(),3===e.row.classify?a("el-row",{staticStyle:{padding:"0"}},[a("el-col",{attrs:{span:11}},[a("el-input-number",{staticStyle:{width:"100%"},attrs:{min:0,precision:2,controls:!1,disabled:"find"===t.type,placeholder:"下限"},on:{blur:function(a){return t.handleChangeMin(e.$index)}},model:{value:e.row.standardmin,callback:function(a){t.$set(e.row,"standardmin",a)},expression:"scope.row.standardmin"}})],1),a("el-col",{attrs:{span:2}},[a("span",{staticStyle:{"line-height":"40px"}},[t._v(" ~ ")])]),a("el-col",{attrs:{span:11}},[a("el-input-number",{staticStyle:{width:"100%"},attrs:{min:0,precision:2,controls:!1,disabled:"find"===t.type,placeholder:"上限"},on:{blur:function(a){return t.handleChangeMax(e.$index)}},model:{value:e.row.standardmax,callback:function(a){t.$set(e.row,"standardmax",a)},expression:"scope.row.standardmax"}})],1)],1):t._e()]}}])}),a("el-table-column",{attrs:{prop:"devicesName",label:"评价/测量技术",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[4!==e.row.classify&&5!==e.row.classify?a("el-input",{attrs:{disabled:"find"===t.type,type:"textarea",autosize:"",placeholder:"内容",maxlength:"100"},model:{value:e.row.evaluate,callback:function(a){t.$set(e.row,"evaluate",a)},expression:"scope.row.evaluate"}}):t._e()]}}])}),a("el-table-column",{attrs:{label:"检验频率/控制方法",align:"center"}},[a("el-table-column",{attrs:{label:"控制方法",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[4!==e.row.classify&&5!==e.row.classify?a("el-input",{attrs:{disabled:"find"===t.type,type:"textarea",autosize:"",placeholder:"内容",maxlength:"100"},model:{value:e.row.control,callback:function(a){t.$set(e.row,"control",a)},expression:"scope.row.control"}}):t._e()]}}])}),a("el-table-column",{attrs:{label:"大小",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[4!==e.row.classify&&5!==e.row.classify?a("el-input",{attrs:{disabled:"find"===t.type,type:"textarea",autosize:"",placeholder:"内容",maxlength:"100"},model:{value:e.row.measure,callback:function(a){t.$set(e.row,"measure",a)},expression:"scope.row.measure"}}):t._e()]}}])}),a("el-table-column",{attrs:{label:"检验频率",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[4!==e.row.classify&&5!==e.row.classify?a("el-input",{attrs:{disabled:"find"===t.type,type:"textarea",autosize:"",placeholder:"内容",maxlength:"100"},model:{value:e.row.quota,callback:function(a){t.$set(e.row,"quota",a)},expression:"scope.row.quota"}}):t._e()]}}])})],1),a("el-table-column",{attrs:{prop:"devicesName",label:"附件",align:"center",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return["find"!==t.type&&4!==e.row.classify&&5!==e.row.classify?a("el-upload",{staticClass:"styeFile",attrs:{action:"","before-upload":t.beforeFile,"http-request":t.uploadImage,"show-file-list":!1}},[a("el-button",{staticClass:"primaryBtn",attrs:{size:"small",type:"primary"},on:{click:function(a){return t.getfile(e.$index)}}},[t._v("点击上传")])],1):t._e(),e.row.uploadFile?a("el-link",{on:{click:function(a){return t.download(e.row.uploadFile)}}},[t._v(t._s(e.row.uploadFile.name+"."+e.row.uploadFile.suffix))]):t._e()]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"90px"},scopedSlots:t._u([{key:"default",fn:function(e){return["find"!==t.type&&e.$index===e.row.start&&4!==e.row.classify&&5!==e.row.classify?a("el-button",{staticClass:"addTextBtn",attrs:{type:"text",icon:"el-icon-plus"},on:{click:function(a){return t.addBtn(e.row,e.$index)}}},[t._v(" 加项 ")]):t._e(),"find"!==t.type&&e.$index!==e.row.start&&4!==e.row.classify&&5!==e.row.classify?a("el-button",{staticClass:"deleteTextBtn",attrs:{type:"text",icon:"el-icon-minus"},on:{click:function(a){return t.deleteBtn(e.row,e.$index)}}},[t._v(" 减项 ")]):t._e()]}}])})],1)],1)]),"edit"===t.type?a("div",{staticClass:"content1"},[t._m(2),a("div",{staticClass:"contentBody",staticStyle:{overflow:"auto"}},[a("el-form",{ref:"upforms",attrs:{model:t.forms,rules:t.rules,"label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"变更原因:",prop:"upReason"}},[a("el-input",{staticStyle:{"max-width":"300px"},attrs:{placeholder:"变更原因",maxlength:"20"},model:{value:t.forms.upReason,callback:function(e){t.$set(t.forms,"upReason",e)},expression:"forms.upReason"}})],1),a("el-form-item",{attrs:{label:"变更内容:",prop:"dis"}},[a("el-input",{staticStyle:{"max-width":"300px"},attrs:{rows:5,resize:"none",type:"textarea",placeholder:"变更内容",maxlength:"50"},model:{value:t.forms.dis,callback:function(e){t.$set(t.forms,"dis",e)},expression:"forms.dis"}})],1)],1)],1)]):t._e(),"find"===t.type?a("div",{staticClass:"content1"},[t._m(3),a("div",{staticClass:"contentBody el-tablenew"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.logsList,"row-class-name":t.tableRowClassName,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"序号",align:"center",width:"55"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index+1)+" ")]}}],null,!1,3056706777)}),a("el-table-column",{attrs:{prop:"version",label:"版本",align:"center","show-overflow-tooltip":"",width:"70"}}),a("el-table-column",{attrs:{prop:"createTime",label:"变更时间",align:"center","show-overflow-tooltip":"",width:"160"}}),a("el-table-column",{attrs:{prop:"createUserName",label:"变更人员",align:"center",width:"90"}}),a("el-table-column",{attrs:{prop:"reason",label:"变更原因",align:"center","min-width":"100"}}),a("el-table-column",{attrs:{prop:"content",label:"变更内容",align:"center","min-width":"100"}}),a("el-table-column",{attrs:{prop:"auditStatus",label:"审核结果",align:"center","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.auditStatus)+" ")]}}],null,!1,3774294532)}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"defaultTextBtn",attrs:{type:"text"},on:{click:function(a){return t.findInfo(e.row)}}},[a("svg-icon",{attrs:{"icon-class":"search"}}),t._v(" 查看 ")],1)]}}],null,!1,94581656)})],1)],1)]):t._e(),a("div",{staticClass:"bottom"},["find"!==t.type?a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm()}}},[t._v("保存")]):t._e()],1)],1)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",{staticClass:"ganggang"},[t._v("-")]),t._v(" 基本信息")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",{staticClass:"ganggang"},[t._v("-")]),t._v(" 检验内容")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",{staticClass:"ganggang"},[t._v("-")]),t._v(" 变更操作")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",{staticClass:"ganggang"},[t._v("-")]),t._v(" 变更记录")])}],d=(a("c740"),a("a434"),a("b0c0"),a("ac1f"),a("1276"),a("b85c")),u=a("6ace"),p=a("2ac3"),f={name:"FirstLastStandardInfo",directives:{elDragDialog:r["a"]},props:{objstr:{type:Object,default:null},type:{type:String,default:"add"}},data:function(){return{loading:!1,baseUrl:window.configs.api,forms:{code:"",name:"",version:"",customer:"",upReason:"",dis:""},rules:{code:[{required:!0,message:"请输入零件编号",trigger:"blur"}],name:[{required:!0,message:"请输入零件名称",trigger:"blur"}],customer:[{required:!0,message:"请输入客户",trigger:"blur"}],upReason:[{required:!0,message:"请输入变更原因",trigger:"blur"}],dis:[{required:!0,message:"请输入变更内容",trigger:"blur"}]},uploadIndex:-1,logsList:[],materielList:[],list:[{classify:0,feature:"",special:"",process:"",standard:"",standardmin:"",standardmax:"",evaluate:"",measure:"",quota:"",control:"",inspectionId:"",uploadFile:"",start:0,end:0},{classify:3,feature:"",special:"",process:"",standard:"",standardmin:"",standardmax:"",evaluate:"",measure:"",quota:"",control:"",inspectionId:"",uploadFile:"",start:3,end:3},{classify:4,feature:"",special:"",process:"",standard:"",standardmin:"",standardmax:"",evaluate:"",measure:"",quota:"",control:"",inspectionId:"",uploadFile:"",remark:"",start:4,end:4},{classify:5,feature:"",special:"",process:"",standard:"",standardmin:"",standardmax:"",evaluate:"",measure:"",quota:"",control:"",inspectionId:"",uploadFile:"",inspection:"",start:4,end:4}]}},computed:{},mounted:function(){this.getAllCodeRequest(),this.setMerge(),console.log(this.objstr)},methods:{getAllCodeRequest:function(){var t=this;Object(p["b"])().then((function(e){if(0===e.code)if(e.data.length>0){if(t.materielList=e.data,"add"!==t.type){var a=t.materielList.findIndex((function(e){return e.id===t.objstr.productId}));t.logsList=t.objstr.qualityInspectionChangeLogs,t.forms={code:a,name:t.objstr.productName,version:t.objstr.drawing,customer:t.objstr.customer,upReason:"",dis:""},t.list=[];var n=t.objstr.qualityInspectionDetails;n.sort((function(t,e){return t.classify-e.classify}));var s,i=Object(d["a"])(n);try{for(i.s();!(s=i.n()).done;){var o=s.value;t.list.push({id:o.id,classify:o.classify,feature:o.feature,special:o.special,process:o.process,standard:o.standard,standardmin:3===o.classify?o.standard.split("-")[0]:"",standardmax:3===o.classify?o.standard.split("-")[1]:"",evaluate:o.evaluate,measure:o.measure,quota:o.quota,control:o.control,inspectionId:o.inspectionId,uploadFile:o.name?{path:o.path,webPath:o.webPath,name:o.name,suffix:o.suffix,dataId:o.id}:"",start:0,end:0})}}catch(r){i.e(r)}finally{i.f()}t.list.push({classify:4,feature:"",special:"",process:"",standard:"",standardmin:"",standardmax:"",evaluate:"",measure:"",quota:"",control:"",inspectionId:"",uploadFile:"",remark:t.objstr.note,start:4,end:4},{classify:5,feature:"",special:"",process:"",standard:"",standardmin:"",standardmax:"",evaluate:"",measure:"",quota:"",control:"",inspectionId:"",uploadFile:"",remark:t.objstr.note,inspection:t.objstr.inspection,start:4,end:4}),t.setMerge()}}else t.$message({type:"error",message:"没有零件信息!"});else t.$message({type:"error",message:"获取零件信息失败："+e.msg})}))},handleMateriel:function(t){this.forms.name=this.materielList[this.forms.code].name},tableRowClassName:function(t){t.row;var e=t.rowIndex;return e%2===1?"table-row":""},objectSpanMethod:function(t){var e=t.row,a=(t.column,t.rowIndex),n=t.columnIndex;return 0!==n&&8!==n||e.start===e.end||4===e.classify||5===e.classify?0===n||4!==e.classify&&5!==e.classify?void 0:1===n?[1,8]:[0,0]:e.start===a?{rowspan:e.end-e.start+1,colspan:1}:{rowspan:0,colspan:0}},download:function(t){var e=window.configs.api+"/attachment/downByPath?path="+t.path,a=window.open(encodeURI(e));setTimeout((function(){a.close()}),1e3)},backClick:function(t){this.$emit("DetailCallBack",{result:t})},getfile:function(t){this.uploadIndex=t},beforeFile:function(t){var e=t.size/1024/1024<5;if(!e)return this.$message.error("上传图片大小不能超过 5MB!"),!1},uploadImage:function(t){var e=this,a=new FormData;a.append("file",t.file),a.append("isAdd",!0),Object(u["c"])(a).then((function(t){0===t.code&&(e.list[e.uploadIndex].uploadFile=t.data,e.list[e.uploadIndex].id=t.data.dataId,e.$message({type:"success",message:"上传成功！"}))}))},handleChangeMin:function(t){this.list[t].standardmax&&parseFloat(this.list[t].standardmin+"")>=parseFloat(this.list[t].standardmax+"")&&(this.list[t].standardmin="",this.$message({type:"error",message:"尺寸下限必须小于上线！"})),this.getLink(t)},handleChangeMax:function(t){this.list[t].standardmin&&parseFloat(this.list[t].standardmin+"")>=parseFloat(this.list[t].standardmax+"")&&(this.list[t].standardmax=this.list[t].standardmin+1,this.$message({type:"error",message:"尺寸下限必须小于上线！"})),this.getLink(t)},getLink:function(t){this.list[t].standardmin&&this.list[t].standardmax?this.list[t].standard=this.list[t].standardmin+"-"+this.list[t].standardmax:this.list[t].standard=""},deleteBtn:function(t,e){this.list.splice(e,1),this.setMerge()},addBtn:function(t,e){var a={classify:t.classify,feature:"1",special:"",process:"",standard:"",standardmin:"",standardmax:"",evaluate:"",measure:"",quota:"",control:"",inspectionId:t.inspectionId,uploadFile:"",start:3,end:3};this.list.splice(e+(t.end-t.start)+1,0,a),this.setMerge()},setMerge:function(){for(var t=0,e=0,a=-1,n=0;n<this.list.length;n++){if(a!==this.list[n].classify){a=this.list[n].classify,t=n,e=n;for(var s=n;s<this.list.length;s++)if(a!==this.list[s].classify){e=s-1;break}}this.list[n].start=parseInt(t+""),this.list[n].end=parseInt(e+"")}console.log(this.list)},findInfo:function(t){this.list=JSON.parse(t.inspectionContent)},submitForm:function(){var t=this,e="add"===this.type?"forms":"upforms";this.$refs[e].validate((function(e){if(e){var a,n=!1,s=[],o="",r=0,l=Object(d["a"])(t.list);try{for(l.s();!(a=l.n()).done;){var c=a.value;if(4!==c.classify&&5!==c.classify){if(!c.standard||!c.evaluate||!c.measure||!c.quota||!c.control){n=!0;break}if(3===c.classify&&!c.special){n=!0;break}s.push({classify:c.classify,control:c.control,evaluate:c.evaluate,feature:c.feature,measure:c.measure,process:c.process,quota:c.quota,special:c.special,standard:c.standard,id:c.uploadFile?c.uploadFile.dataId:void 0})}else 4===c.classify?o=c.remark:5===c.classify&&(r=c.inspection)}}catch(f){l.e(f)}finally{l.f()}if(n)return t.$message({message:"请填写完整的检验规范",type:"error"}),!1;if("add"===t.type){var u={classify:1,customer:t.forms.customer,drawing:t.forms.version,note:o,inspection:r,productId:t.materielList[t.forms.code].id,qualityInspectionDetails:s};Object(i["i"])(u).then((function(e){0===e.code?(t.$message({message:"操作成功!",type:"success"}),t.backClick(1)):t.$message({message:e.msg,type:"error"})}))}else{var p={id:t.objstr.id,classify:1,customer:t.forms.customer,drawing:t.forms.version,productId:t.materielList[t.forms.code].id,qualityInspectionChangeLog:{content:t.forms.dis,inspectionContent:JSON.stringify(t.list),reason:t.forms.upReason},qualityInspectionDetails:s};Object(i["g"])(p).then((function(e){0===e.code?(t.$message({message:"操作成功!",type:"success"}),t.backClick(1)):t.$message({message:e.msg,type:"error"})}))}}}))}}},m=f,g=(a("33cc"),a("2877")),h=Object(g["a"])(m,l,c,!1,null,"0834407e",null),y=h.exports,b={name:"FirstLastStandard",directives:{elDragDialog:r["a"]},components:{Pagination:o["a"],"first-last-standard-info":y},data:function(){return{dialogVisible:!1,loading:!1,searchKey:{code:"",productName:"",classify:1,pageNum:1,pageSize:20},total:0,list:[],objstr:null}},computed:{},mounted:function(){this.getStorageLocationList()},methods:{tableRowClassName:function(t){t.row;var e=t.rowIndex;return e%2===1?"table-row":""},searchBtn:function(){this.getStorageLocationList()},searchrestBtn:function(){this.searchKey={code:"",productName:"",classify:1,pageNum:1,pageSize:20},this.getStorageLocationList()},handleCurrentChange:function(){this.getStorageLocationList()},bindBtn:function(t,e){this.type=e,this.objstr=t,this.dialogVisible=!0},getStorageLocationList:function(){var t=this;Object(i["c"])(this.searchKey).then((function(e){0===e.code&&(t.list=e.data.list,t.total=e.data.total)}))},DetailCallBack:function(t){this.dialogVisible=!1,1===t.result&&this.getStorageLocationList()}}},w=b,v=(a("347a"),Object(g["a"])(w,n,s,!1,null,"1b36141a",null));e["default"]=v.exports},"6ace":function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return o}));var n=a("b775");function s(t){return Object(n["a"])({url:window.configs.api+"/attachment/upload",method:"post",data:t,heards:{"Content-Type":"multipart/form-data"}})}function i(t){return Object(n["a"])({url:window.configs.e2cUrl+"/productDevices/findList",method:"get",params:t})}function o(){return Object(n["a"])({url:window.configs.e2cUrl+"/devicesClassify/findList",method:"get"})}},"9a2f":function(t,e,a){},a888:function(t,e,a){"use strict";a("99af"),a("caad"),a("ac1f"),a("2532"),a("5319");var n={bind:function(t,e,a){var n=t.querySelector(".el-dialog__header"),s=t.querySelector(".el-dialog");n.style.cssText+=";cursor:move;",s.style.cssText+=";top:0px;";var i=function(){return window.document.currentStyle?function(t,e){return t.currentStyle[e]}:function(t,e){return getComputedStyle(t,!1)[e]}}();n.onmousedown=function(t){var e=t.clientX-n.offsetLeft,o=t.clientY-n.offsetTop,r=s.offsetWidth,l=s.offsetHeight,c=document.body.clientWidth,d=document.body.clientHeight,u=s.offsetLeft,p=c-s.offsetLeft-r,f=s.offsetTop,m=d-s.offsetTop-l,g=i(s,"left"),h=i(s,"top");g.includes("%")?(g=+document.body.clientWidth*(+g.replace(/\%/g,"")/100),h=+document.body.clientHeight*(+h.replace(/\%/g,"")/100)):(g=+g.replace(/\px/g,""),h=+h.replace(/\px/g,"")),document.onmousemove=function(t){var n=t.clientX-e,i=t.clientY-o;-n>u?n=-u:n>p&&(n=p),-i>f?i=-f:i>m&&(i=m),s.style.cssText+=";left:".concat(n+g,"px;top:").concat(i+h,"px;"),a.child.$emit("dragDialog")},document.onmouseup=function(t){document.onmousemove=null,document.onmouseup=null}}}},s=function(t){t.directive("el-drag-dialog",n)};window.Vue&&(window["el-drag-dialog"]=n,Vue.use(s)),n.install=s;e["a"]=n},dc14:function(t,e,a){}}]);