(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6456c375"],{"09f4":function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),Math.easeInOutQuad=function(e,t,a,n){return e/=n/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function s(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function i(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function o(e,t,a){var o=i(),r=e-o,l=20,c=0;t="undefined"===typeof t?500:t;var d=function e(){c+=l;var i=Math.easeInOutQuad(c,o,r,t);s(i),c<t?n(e):a&&"function"===typeof a&&a()};d()}},"2ac3":function(e,t,a){"use strict";a.d(t,"e",(function(){return s})),a.d(t,"g",(function(){return i})),a.d(t,"d",(function(){return o})),a.d(t,"f",(function(){return r})),a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return d}));var n=a("b775");function s(e){return Object(n["a"])({url:window.configs.api+"/mouldStorageHouse/findStorageList",method:"get",params:e})}function i(e){return Object(n["a"])({url:window.configs.api+"/mouldStorageHouse/saveStorage",method:"post",data:e})}function o(e){return Object(n["a"])({url:window.configs.api+"/mouldStorageHouse/findLocationList",method:"get",params:e})}function r(e){return Object(n["a"])({url:window.configs.api+"/mouldStorageHouse/saveLocation",method:"post",data:e})}function l(e){return Object(n["a"])({url:window.configs.api+"/mouldStorageHouse/deleteLocation",method:"get",params:{ids:e}})}function c(e){return Object(n["a"])({url:window.configs.api+"/mouldStorageHouse/findEmptyLocationList",method:"get",params:e})}function d(e){return Object(n["a"])({url:window.configs.api+"/logisticsProduct/getAllCode",method:"get",params:e})}},3714:function(e,t,a){},"5eeb":function(e,t,a){"use strict";var n=a("e2ea"),s=a.n(n);s.a},"6ace":function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o}));var n=a("b775");function s(e){return Object(n["a"])({url:window.configs.api+"/attachment/upload",method:"post",data:e,heards:{"Content-Type":"multipart/form-data"}})}function i(e){return Object(n["a"])({url:window.configs.e2cUrl+"/productDevices/findList",method:"get",params:e})}function o(){return Object(n["a"])({url:window.configs.e2cUrl+"/devicesClassify/findList",method:"get"})}},a888:function(e,t,a){"use strict";a("99af"),a("caad"),a("ac1f"),a("2532"),a("5319");var n={bind:function(e,t,a){var n=e.querySelector(".el-dialog__header"),s=e.querySelector(".el-dialog");n.style.cssText+=";cursor:move;",s.style.cssText+=";top:0px;";var i=function(){return window.document.currentStyle?function(e,t){return e.currentStyle[t]}:function(e,t){return getComputedStyle(e,!1)[t]}}();n.onmousedown=function(e){var t=e.clientX-n.offsetLeft,o=e.clientY-n.offsetTop,r=s.offsetWidth,l=s.offsetHeight,c=document.body.clientWidth,d=document.body.clientHeight,u=s.offsetLeft,p=c-s.offsetLeft-r,f=s.offsetTop,m=d-s.offsetTop-l,h=i(s,"left"),g=i(s,"top");h.includes("%")?(h=+document.body.clientWidth*(+h.replace(/\%/g,"")/100),g=+document.body.clientHeight*(+g.replace(/\%/g,"")/100)):(h=+h.replace(/\px/g,""),g=+g.replace(/\px/g,"")),document.onmousemove=function(e){var n=e.clientX-t,i=e.clientY-o;-n>u?n=-u:n>p&&(n=p),-i>f?i=-f:i>m&&(i=m),s.style.cssText+=";left:".concat(n+h,"px;top:").concat(i+g,"px;"),a.child.$emit("dragDialog")},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}}},s=function(e){e.directive("el-drag-dialog",n)};window.Vue&&(window["el-drag-dialog"]=n,Vue.use(s)),n.install=s;t["a"]=n},b50b:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"e",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return r})),a.d(t,"a",(function(){return l}));var n=a("b775");function s(e){return Object(n["a"])({url:window.configs.api+"/qualityInspection/findList",method:"get",params:e})}function i(e){return Object(n["a"])({url:window.configs.api+"/qualityInspection/save",method:"post",data:e})}function o(e){return Object(n["a"])({url:window.configs.api+"/qualityInspection/getInspectionDetail",method:"get",params:e})}function r(e){return Object(n["a"])({url:window.configs.api+"/qualityInspection/change",method:"post",data:e})}function l(e){return Object(n["a"])({url:window.configs.api+"/qualityInspection/getInspectionChangeLog",method:"get",params:e})}},e2ea:function(e,t,a){},e7c6:function(e,t,a){"use strict";var n=a("3714"),s=a.n(n);s.a},fec5:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"searchInfo"},[a("span",{staticClass:"seachname"},[e._v(" 零件代码: ")]),a("el-input",{staticClass:"inputCls",staticStyle:{width:"240px","margin-right":"15px"},attrs:{placeholder:"请输入零件代码",clearable:""},model:{value:e.searchKey.code,callback:function(t){e.$set(e.searchKey,"code",t)},expression:"searchKey.code"}}),a("span",{staticClass:"seachname"},[e._v(" 零件名称: ")]),a("el-input",{staticClass:"inputCls",staticStyle:{width:"240px","margin-right":"15px"},attrs:{placeholder:"请输入零件名称",clearable:""},model:{value:e.searchKey.name,callback:function(t){e.$set(e.searchKey,"name",t)},expression:"searchKey.name"}}),a("el-button",{staticClass:"primaryBtn",staticStyle:{"margin-left":"7px"},attrs:{type:"primary"},on:{click:e.searchBtn}},[a("svg-icon",{attrs:{"icon-class":"search"}}),e._v(" 查询 ")],1),a("el-button",{staticClass:"resetBtn",staticStyle:{"margin-left":"7px"},attrs:{type:"default",icon:"el-icon-refresh-right"},on:{click:e.searchrestBtn}},[e._v(" 重置 ")])],1),a("div",{staticClass:"searchInfo"},[e.hasPermission("warehousingStandard/add")?a("el-button",{staticClass:"addBtn",attrs:{type:"default",icon:"el-icon-plus"},on:{click:e.addBtn}},[e._v(" 新建检验规范")]):e._e()],1),a("div",{staticClass:"el-tablenew"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"row-class-name":e.tableRowClassName,border:"",height:"calc(100vh - 337px)"}},[a("el-table-column",{attrs:{prop:"date",label:"序号",align:"center",width:"55"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index+1)+" ")]}}])}),a("el-table-column",{attrs:{prop:"code",label:"零件代码",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"productName",label:"零件名称",align:"center","min-width":"200","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"drawing",label:"图纸编号",align:"center",width:"150"}}),a("el-table-column",{attrs:{prop:"changeTime",label:"最近变更时间",align:"center",width:"160"}}),a("el-table-column",{attrs:{prop:"reason",label:"变更原因",align:"center","min-width":"200","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"defaultTextBtn",attrs:{type:"text"},on:{click:function(a){return e.findInfo(t.row)}}},[a("svg-icon",{attrs:{"icon-class":"search"}}),e._v(" 查看 ")],1),e.hasPermission("warehousingStandard/change")?a("el-button",{staticClass:"addTextBtn",attrs:{type:"text"},on:{click:function(a){return e.editBtn(t.row)}}},[a("svg-icon",{attrs:{"icon-class":"edit"}}),e._v(" 变更 ")],1):e._e()]}}])})],1),a("pagination",{staticClass:"pagePadd",attrs:{total:e.total,page:e.pageIndex,limit:e.pageSize},on:{"update:page":function(t){e.pageIndex=t},"update:limit":function(t){e.pageSize=t},pagination:e.handleCurrentChange}})],1),e.dialogVisible?a("div",{staticClass:"repairsty"},[a("warehousing-standard-info",{attrs:{objstr:e.objstr,type:e.type},on:{DetailCallBack:e.DetailCallBack}})],1):e._e()])},s=[],i=(a("c975"),a("b0c0"),a("b50b")),o=a("333d"),r=a("a888"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-page-header",{attrs:{content:"入库检验规范"},on:{back:function(t){return e.backClick(null)}}}),a("div",{staticClass:"content1"},[e._m(0),a("div",{staticClass:"contentBody"},[a("el-form",{ref:"forms",attrs:{model:e.forms,rules:e.rules,"label-position":"left","label-width":"90px"}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"零件编号:",prop:"productId"}},[a("el-select",{staticStyle:{width:"90%"},attrs:{disabled:"add"!==e.type,placeholder:"请选择零件编号"},on:{change:e.handleMateriel},model:{value:e.forms.productId,callback:function(t){e.$set(e.forms,"productId",t)},expression:"forms.productId"}},e._l(e.materielList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.code,value:e.id}})})),1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"零件名称:",prop:"name"}},[a("el-input",{staticStyle:{width:"90%"},attrs:{readonly:"",disabled:"add"!==e.type,placeholder:"零件名称",maxlength:"20"},model:{value:e.forms.name,callback:function(t){e.$set(e.forms,"name",t)},expression:"forms.name"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"图纸编号:",prop:"drawing"}},[a("el-input",{staticStyle:{width:"90%"},attrs:{disabled:"add"!==e.type,placeholder:"图纸编号",maxlength:"20"},model:{value:e.forms.drawing,callback:function(t){e.$set(e.forms,"drawing",t)},expression:"forms.drawing"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"客户:",prop:"customer"}},[a("el-input",{staticStyle:{width:"90%"},attrs:{disabled:"add"!==e.type,placeholder:"客户",maxlength:"20"},model:{value:e.forms.customer,callback:function(t){e.$set(e.forms,"customer",t)},expression:"forms.customer"}})],1)],1)],1)],1)],1)]),a("div",{staticClass:"content1"},[e._m(1),a("div",{staticClass:"contentBody el-tablenew"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"row-class-name":e.tableRowClassName,"span-method":e.objectSpanMethod,border:"","header-cell-style":e.headerClassName}},[a("el-table-column",{attrs:{label:"检验项目",align:"center"}},[a("el-table-column",{attrs:{label:"产品特性",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(0===t.row.classify?"外观":1===t.row.classify?"包装":2===t.row.classify?"材质":3===t.row.classify?"尺寸":4===t.row.classify?"备注":"巡检时间")+" ")]}}])}),a("el-table-column",{attrs:{label:"工艺（过程）特性",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[4!==t.row.classify?a("el-input",{attrs:{disabled:"find"===e.type,type:"textarea",autosize:"",placeholder:"内容",maxlength:"100"},model:{value:t.row.process,callback:function(a){e.$set(t.row,"process",a)},expression:"scope.row.process"}}):e._e(),4===t.row.classify?a("el-input",{attrs:{disabled:"find"===e.type,type:"textarea",autosize:"",placeholder:"内容",maxlength:"100"},model:{value:t.row.remark,callback:function(a){e.$set(t.row,"remark",a)},expression:"scope.row.remark"}}):e._e()]}}])})],1),a("el-table-column",{attrs:{prop:"name",label:"特殊特性分类",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[4!==t.row.classify?a("el-input",{attrs:{disabled:"find"===e.type,type:"textarea",autosize:"",placeholder:"内容",maxlength:"100"},model:{value:t.row.special,callback:function(a){e.$set(t.row,"special",a)},expression:"scope.row.special"}}):e._e()]}}])}),a("el-table-column",{attrs:{prop:"name",label:"产品/过程规范/公差",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[3!==t.row.classify&&4!==t.row.classify?a("el-input",{attrs:{disabled:"find"===e.type,type:"textarea",autosize:"",placeholder:"内容",maxlength:"100"},model:{value:t.row.standard,callback:function(a){e.$set(t.row,"standard",a)},expression:"scope.row.standard"}}):e._e(),3===t.row.classify?a("el-row",{staticStyle:{padding:"0"}},[a("el-col",{attrs:{span:11}},[a("el-input-number",{staticStyle:{width:"100%"},attrs:{min:0,precision:2,controls:!1,disabled:"find"===e.type,placeholder:"下限"},on:{blur:function(a){return e.handleChangeMin(t.$index)}},model:{value:t.row.standardmin,callback:function(a){e.$set(t.row,"standardmin",a)},expression:"scope.row.standardmin"}})],1),a("el-col",{attrs:{span:2}},[a("span",{staticStyle:{"line-height":"40px"}},[e._v(" ~ ")])]),a("el-col",{attrs:{span:11}},[a("el-input-number",{staticStyle:{width:"100%"},attrs:{min:0,precision:2,controls:!1,disabled:"find"===e.type,placeholder:"上限"},on:{blur:function(a){return e.handleChangeMax(t.$index)}},model:{value:t.row.standardmax,callback:function(a){e.$set(t.row,"standardmax",a)},expression:"scope.row.standardmax"}})],1)],1):e._e()]}}])}),a("el-table-column",{attrs:{prop:"devicesName",label:"评价/测量技术",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[4!==t.row.classify?a("el-input",{attrs:{disabled:"find"===e.type,placeholder:"内容",type:"textarea",autosize:"",maxlength:"100"},model:{value:t.row.evaluate,callback:function(a){e.$set(t.row,"evaluate",a)},expression:"scope.row.evaluate"}}):e._e()]}}])}),a("el-table-column",{attrs:{label:"检验频率/控制方法",align:"center"}},[a("el-table-column",{attrs:{label:"大小",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[4!==t.row.classify?a("el-input",{staticStyle:{width:"95%"},attrs:{controls:!1,disabled:"find"===e.type,type:"textarea",autosize:"",placeholder:"内容",maxlength:"100"},model:{value:t.row.measure,callback:function(a){e.$set(t.row,"measure",a)},expression:"scope.row.measure"}}):e._e()]}}])}),a("el-table-column",{attrs:{label:"频度",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[4!==t.row.classify?a("el-input",{attrs:{disabled:"find"===e.type,placeholder:"内容",type:"textarea",autosize:"",maxlength:"100"},model:{value:t.row.quota,callback:function(a){e.$set(t.row,"quota",a)},expression:"scope.row.quota"}}):e._e()]}}])})],1),a("el-table-column",{attrs:{prop:"devicesName",label:"附件",align:"center",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return["find"!==e.type&&4!==t.row.classify?a("el-upload",{staticClass:"styeFile",attrs:{action:"","before-upload":e.beforeFile,"http-request":e.uploadImage,"show-file-list":!1}},[a("el-button",{staticClass:"primaryBtn",attrs:{size:"small",type:"primary"},on:{click:function(a){return e.getfile(t.$index)}}},[e._v("点击上传")])],1):e._e(),4!==t.row.classify&&null!=t.row.uploadFile.name&&0!=t.row.uploadFile.name.length?a("el-link",{on:{click:function(a){return e.handleDownFile(t.row.uploadFile.path)}}},[e._v(e._s(t.row.uploadFile.name)+"."+e._s(t.row.uploadFile.suffix))]):e._e()]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return["find"!==e.type&&t.$index===t.row.start&&4!==t.row.classify?a("el-button",{staticClass:"addTextBtn",attrs:{type:"text",icon:"el-icon-plus"},on:{click:function(a){return e.addBtn(t.row,t.$index)}}},[e._v("加项")]):e._e(),"find"!==e.type&&t.$index!==t.row.start&&4!==t.row.classify?a("el-button",{staticClass:"deleteTextBtn",attrs:{type:"text",icon:"el-icon-minus"},on:{click:function(a){return e.deleteBtn(t.row,t.$index)}}},[e._v("减项")]):e._e()]}}])})],1)],1)]),"edit"===e.type?a("div",{staticClass:"content1"},[e._m(2),a("div",{staticClass:"contentBody",staticStyle:{overflow:"auto"}},[a("el-form",{ref:"upforms",attrs:{model:e.forms,rules:e.rules,"label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"变更原因:",prop:"upReason"}},[a("el-input",{staticStyle:{"max-width":"300px"},attrs:{placeholder:"变更原因",maxlength:"20"},model:{value:e.forms.upReason,callback:function(t){e.$set(e.forms,"upReason",t)},expression:"forms.upReason"}})],1),a("el-form-item",{attrs:{label:"变更内容:",prop:"dis"}},[a("el-input",{staticStyle:{"max-width":"300px"},attrs:{rows:5,resize:"none",type:"textarea",placeholder:"变更内容",maxlength:"50"},model:{value:e.forms.dis,callback:function(t){e.$set(e.forms,"dis",t)},expression:"forms.dis"}})],1)],1)],1)]):e._e(),"find"===e.type?a("div",{staticClass:"content1"},[e._m(3),a("div",{staticClass:"contentBody el-tablenew"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.logsList,"row-class-name":e.tableRowClassName,"header-cell-style":e.headerClassName,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"序号",align:"center",width:"55"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index+1)+" ")]}}],null,!1,3056706777)}),a("el-table-column",{attrs:{prop:"version",label:"版本",align:"center",width:"70"}}),a("el-table-column",{attrs:{prop:"createTime",label:"变更时间",align:"center",width:"160"}}),a("el-table-column",{attrs:{prop:"createUserName",label:"变更人员",align:"center",width:"90"}}),a("el-table-column",{attrs:{prop:"reason",label:"变更原因",align:"center","min-width":"100","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"content",label:"变更内容",align:"center","min-width":"100","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"auditStatus",label:"审核结果",align:"center",width:"100","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"defaultTextBtn",attrs:{type:"text"},on:{click:function(a){return e.findInfo(t.row)}}},[a("svg-icon",{attrs:{"icon-class":"search"}}),e._v(" 查看 ")],1)]}}],null,!1,94581656)})],1)],1)]):e._e(),a("div",{staticClass:"bottom"},["find"!==e.type?a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("保存")]):e._e()],1)],1)},c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("span",{staticClass:"ganggang"},[e._v("-")]),e._v(" 基本信息")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("span",{staticClass:"ganggang"},[e._v("-")]),e._v(" 检验内容")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("span",{staticClass:"ganggang"},[e._v("-")]),e._v(" 变更操作")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("span",{staticClass:"ganggang"},[e._v("-")]),e._v(" 变更记录")])}],d=(a("99af"),a("c740"),a("d81d"),a("a434"),a("d3b7"),a("ac1f"),a("25f0"),a("3ca3"),a("1276"),a("ddb0"),a("2909")),u=a("2ac3"),p=a("6ace"),f={name:"WarehousingStandardInfo",directives:{elDragDialog:r["a"]},props:{objstr:{type:Object,default:null},type:{type:String,default:"add"}},data:function(){return{loading:!1,baseUrl:window.configs.api,forms:{productId:"",name:"",customer:"",drawing:"",note:"",upReason:"",dis:""},rules:{productId:[{required:!0,message:"请选择零件编号",trigger:"blur"}],name:[{required:!0,message:"请输入零件名称",trigger:"blur"}],customer:[{required:!0,message:"请输入客户",trigger:"blur"}],drawing:[{required:!0,message:"请输入图纸编号",trigger:"blur"}],upReason:[{required:!0,message:"请输入变更原因",trigger:"blur"}],dis:[{required:!0,message:"请输入变更内容",trigger:"blur"}]},uploadIndex:-1,materielList:[],oMateriel:{},logsList:[],list:[{classify:0,feature:"",special:"",process:"",standard:"",standardmin:"",standardmax:"",evaluate:"",measure:"",quota:"",control:"",inspectionId:"",uploadFile:{dataId:"",name:"",webPath:"",suffix:""},start:0,end:0},{classify:1,feature:"",special:"",process:"",standard:"",standardmin:"",standardmax:"",evaluate:"",measure:"",quota:"",control:"",inspectionId:"",uploadFile:"",start:1,end:1},{classify:3,feature:"",special:"",process:"",standard:"",standardmin:"",standardmax:"",evaluate:"",measure:"",quota:"",control:"",inspectionId:"",uploadFile:"",start:2,end:2},{classify:4,remark:"",start:3,end:3}]}},computed:{},created:function(){},mounted:function(){"add"===this.type?this.getAllCodeRequest():this.initData()},methods:{headerClassName:function(e){e.row,e.rowIndex;return"background-color: #FAFAFA"},tableRowClassName:function(e){e.row;var t=e.rowIndex;return t%2===1?"table-row":""},objectSpanMethod:function(e){var t=e.row,a=(e.column,e.rowIndex),n=e.columnIndex;return 0!==n&&7!==n||t.start===t.end?0!==n&&4===t.classify?1===n?[1,8]:[0,0]:void 0:t.start===a?{rowspan:t.end-t.start+1,colspan:1}:{rowspan:0,colspan:0}},backClick:function(e){this.$emit("DetailCallBack",{result:e})},getfile:function(e){this.uploadIndex=e},beforeFile:function(e){var t=e.size/1024/1024<5;if(!t)return this.$message.error("上传图片大小不能超过 5MB!"),!1},uploadImage:function(e){var t=this,a=new FormData;a.append("file",e.file),a.append("isAdd",!0),Object(p["c"])(a).then((function(e){0===e.code&&(t.list[t.uploadIndex].uploadFile=e.data,t.list[t.uploadIndex].id=e.data.dataId,t.$message({type:"success",message:"上传成功！"}))}))},handleChangeMin:function(e){this.list[e].standardmax&&parseFloat(this.list[e].standardmin+"")>=parseFloat(this.list[e].standardmax+"")&&(this.list[e].standardmin="",this.$message({type:"error",message:"尺寸下限必须小于上线！"}))},handleChangeMax:function(e){this.list[e].standardmin&&parseFloat(this.list[e].standardmin+"")>=parseFloat(this.list[e].standardmax+"")&&(this.list[e].standardmax=this.list[e].standardmin+1,this.$message({type:"error",message:"尺寸下限必须小于上线！"}))},handleDownFile:function(e){var t=this.baseUrl+"/attachment/downByPath?path="+e,a=window.open(encodeURI(t));setTimeout((function(){a.close()}),3e3)},deleteBtn:function(e,t){this.list.splice(t,1),this.setMerge()},addBtn:function(e,t){var a={classify:e.classify,feature:"1",special:"",process:"",standard:"",standardmin:"",standardmax:"",evaluate:"",measure:"",quota:"",control:"",inspectionId:e.inspectionId,uploadFile:"",start:3,end:3};this.list.splice(t+(e.end-e.start)+1,0,a),this.setMerge()},setMerge:function(){for(var e=0,t=0,a=-1,n=0;n<this.list.length;n++){if(a!==this.list[n].classify){a=this.list[n].classify,e=n,t=n;for(var s=n;s<this.list.length;s++)if(a!==this.list[s].classify){t=s-1;break}}this.list[n].start=parseInt(e+""),this.list[n].end=parseInt(t+"")}},findInfo:function(e){this.getchangeLogDetailRequest(e.id)},submitForm:function(){"add"===this.type?this.saveRequest():"edit"===this.type&&this.saveChangeRequest()},saveRequest:function(){var e=this,t=[];this.list.map((function(a){if(1*a.classify===4)e.forms.note=a.remark;else{var n=a.standard;1*a.classify===3&&(n=a.standardmin+"-"+a.standardmax),t.push({id:a.uploadFile.dataId,classify:a.classify,process:a.process,special:a.special,standard:n,evaluate:a.evaluate,measure:a.measure,quota:a.quota})}}));var a={classify:2,customer:this.forms.customer,drawing:this.forms.drawing,note:this.forms.note,productId:this.forms.productId,qualityInspectionDetails:t},n=this.formValidate(a);n&&Object(i["e"])(a).then((function(t){0===t.code?(e.$message({type:"success",message:"添加成功！"}),e.$emit("DetailCallBack",{result:1})):1e3===t.code&&e.$message({type:"error",message:"添加失败："+t.msg})}))},saveChangeRequest:function(){var e=this,t="add"===this.type?"forms":"upforms";this.$refs[t].validate((function(t){if(t){var a=[];e.list.map((function(t){if(4===t.classify)e.forms.note=t.remark;else{var n=t.standard;3===t.classify&&(n=t.standardmin+"-"+t.standardmax),a.push({id:t.uploadFile.dataId,classify:t.classify,process:t.process,special:t.special,standard:n,evaluate:t.evaluate,measure:t.measure,inspectionId:t.inspectionId,quota:t.quota,webPath:t.uploadFile.webPath,name:t.uploadFile.name,suffix:t.uploadFile.suffix})}}));var n=[].concat(a);n.push({classify:4,remark:e.forms.note,start:0,end:0});var s={content:e.forms.dis,reason:e.forms.upReason,inspectionContent:JSON.stringify(n)},o={id:e.forms.id,classify:2,customer:e.forms.customer,drawing:e.forms.drawing,productId:e.forms.productId,qualityInspectionDetails:a,qualityInspectionChangeLog:s},r=e.formValidate(o);if(!r)return;Object(i["d"])(o).then((function(t){0===t.code?(e.$message({type:"success",message:"保存变更成功！"}),e.$emit("DetailCallBack",{result:1})):1e3===t.code&&e.$message({type:"error",message:"保存变更失败："+t.msg})}))}}))},handleMateriel:function(e){var t=this.materielList.findIndex((function(t){return t.id===e}));-1!==t?(this.oMateriel=this.materielList[t],this.forms.productId=e,this.forms.name=this.oMateriel.name):(this.oMateriel={},this.forms.productId="",this.forms.name="")},getAllCodeRequest:function(){var e=this;Object(u["b"])().then((function(t){0===t.code?t.data.length>0?e.materielList=t.data:e.$message({type:"error",message:"没有零件信息!"}):e.$message({type:"error",message:"获取零件信息失败："+t.msg})}))},getchangeLogDetailRequest:function(e){var t=this,a={id:e};Object(i["a"])(a).then((function(e){if(0===e.code){var a=JSON.parse(e.data.inspectionContent),n=t.optTestContentData(a);t.list=Object(d["a"])(n),t.setMerge()}else t.$message({type:"error",message:"获取检验规范信息失败："+e.msg})}))},showData:function(e){this.forms={id:e.id,productId:e.productId,name:e.productName,customer:e.customer,drawing:e.drawing,note:e.note,upReason:null,dis:null},this.handleMateriel(e.productId);var t=e.qualityInspectionDetails;t.sort((function(e,t){return e.classify-t.classify}));var a=Object(d["a"])(t);a.push({classify:4,remark:e.note,start:0,end:0});var n=this.optTestContentData(a);this.list=Object(d["a"])(n),this.setMerge(),this.logsList=e.qualityInspectionChangeLogs},optTestContentData:function(e){var t=[];return e.map((function(e){var a=0,n=0,s={};if(1*e.classify===3){var i=e.standard.split("-");a=i[0],n=i[1]}s=1*e.classify===4?{classify:4,remark:e.remark,start:0,end:0}:{id:e.id,classify:e.classify,feature:e.feature,special:e.special,process:e.process,standard:e.standard,standardmin:a,standardmax:n,evaluate:e.evaluate,measure:e.measure,quota:e.quota,control:e.control,inspectionId:e.inspectionId,uploadFile:{dataId:e.id,name:e.name,webPath:e.webPath,path:e.path,suffix:e.suffix},start:0,end:0},t.push(s)})),t},initData:function(){var e=this,t=new Promise((function(e,t){Object(u["b"])().then((function(t){e(t)})).catch((function(e){t(e)}))})),a=new Promise((function(t,a){var n={id:e.objstr.id};Object(i["c"])(n).then((function(e){t(e)})).catch((function(e){a(e)}))}));Promise.all([t,a]).then((function(t){var a=t;0===a[0].code?a[0].data.length>0?e.materielList=a[0].data:e.$message({type:"error",message:"没有零件信息!"}):e.$message({type:"error",message:"获取零件信息失败："+a[0].msg}),0===a[1].code?e.showData(a[1].data):e.$message({type:"error",message:"获取检验规范信息失败："+a[1].msg})}))},formValidate:function(e){for(var t=!0,a=e.qualityInspectionDetails,n=!0,s=0;s<a.length;s++){if(0===a[s].standard.toString().length||0===a[s].evaluate.toString().length||0===a[s].measure.toString().length||0===a[s].quota.toString().length){n=!1;break}if(3===a[s].classify&&(1*a[s].standardMax===0||1*a[s].standardMin===0)){n=!1;break}}return 0===e.productId.toString().length?(this.$message({type:"warning",message:"零件编号不能为空!"}),t=!1):0===e.drawing.toString().length?(this.$message({type:"warning",message:"图纸编号不能为空!"}),t=!1):0===e.customer.length?(this.$message({type:"warning",message:"客户不能为空!"}),t=!1):n?t=!0:(this.$message({type:"warning",message:"请完善检验内容表格相关信息!"}),t=!1),t}}},m=f,h=(a("e7c6"),a("2877")),g=Object(h["a"])(m,l,c,!1,null,"402d0662",null),b=g.exports,w={name:"WarehousingStandard",directives:{elDragDialog:r["a"]},components:{Pagination:o["a"],"warehousing-standard-info":b},data:function(){return{loading:!1,dialogVisible:!1,disabled:!1,dialogTitle:"",searchKey:{name:"",code:""},type:"add",total:0,objstr:null,pageIndex:1,pageSize:10,currentId:0,list:[]}},computed:{},mounted:function(){var e=this;this.fetchDate(),this.computedTableHeight(),window.onresize=function(){return function(){e.computedTableHeight()}()}},methods:{headerClassName:function(e){e.row,e.rowIndex;return"background-color: #FAFAFA"},tableRowClassName:function(e){e.row;var t=e.rowIndex;return t%2===1?"table-row":""},fetchDate:function(){var e=this;this.list=[],this.multipleSelection=[],this.loading=!0;var t={productName:this.searchKey.name+""?this.searchKey.name:null,code:this.searchKey.code+""?this.searchKey.code:null,classify:2,pageNum:this.pageIndex,pageSize:this.pageSize};Object(i["b"])(t).then((function(t){e.loading=!1,0===t.code&&(e.list=t.data.list,e.total=t.data.total)}))},searchBtn:function(){this.fetchDate()},searchrestBtn:function(){this.searchKey={name:"",type:""},this.pageIndex=1,this.pageSize=10,this.fetchDate()},handleCurrentChange:function(){this.fetchDate()},DetailCallBack:function(e){this.dialogVisible=!1,1===e.result&&this.fetchDate()},findInfo:function(e){this.type="find",this.dialogVisible=!0,this.objstr=e},addBtn:function(){this.type="add",this.dialogVisible=!0},editBtn:function(e){!e.auditStatus||e.auditStatus.indexOf("待")<0?(this.dialogVisible=!0,this.type="edit",this.objstr=e):this.$message({message:"变更申请正在审核中...",type:"warning"})},computedTableHeight:function(){var e=document.body.clientHeight;e=e<768?768:e,this.tableHeight=e-315}}},y=w,v=(a("5eeb"),Object(h["a"])(y,n,s,!1,null,"fa49a376",null));t["default"]=v.exports}}]);