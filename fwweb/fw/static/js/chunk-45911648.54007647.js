(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45911648"],{"09f4":function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),Math.easeInOutQuad=function(e,t,a,i){return e/=i/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function n(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(e,t,a){var l=o(),s=e-l,r=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=r;var o=Math.easeInOutQuad(u,l,s,t);n(o),u<t?i(e):a&&"function"===typeof a&&a()};c()}},"0adb":function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"e",(function(){return o})),a.d(t,"l",(function(){return l})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return r})),a.d(t,"g",(function(){return u})),a.d(t,"i",(function(){return c})),a.d(t,"k",(function(){return d})),a.d(t,"j",(function(){return h})),a.d(t,"h",(function(){return p})),a.d(t,"d",(function(){return m})),a.d(t,"f",(function(){return f}));var i=a("b775");function n(e){return Object(i["a"])({url:window.configs.api+"/devicesRepairItem/findList",method:"get",params:e})}function o(){return Object(i["a"])({url:window.configs.e2cUrl+"/devicesClassify/findList",method:"get"})}function l(e){return Object(i["a"])({url:window.configs.api+"/devicesRepairItem/save",method:"post",data:e})}function s(e){return Object(i["a"])({url:window.configs.api+"/devicesRepairItem/delete",method:"get",params:e})}function r(e){return Object(i["a"])({url:window.configs.api+"/devicesRepai/findList",method:"get",params:e})}function u(e){return Object(i["a"])({url:window.configs.api+"/devicesRepai/makeProject",method:"post",data:e})}function c(e){return Object(i["a"])({url:window.configs.api+"/devicesRepai/delete",method:"get",params:e})}function d(e){return Object(i["a"])({url:window.configs.api+"/devicesRepai/repairTaskExecute",method:"post",data:e})}function h(e){return Object(i["a"])({url:window.configs.api+"/devicesRepai/save",method:"post",data:e})}function p(e){return Object(i["a"])({url:window.configs.api+"/devicesProblem/findList",method:"get",params:e})}function m(e){return Object(i["a"])({url:window.configs.api+"/devicesRepairSpare/findSpareStoreAndUse",method:"get",params:e})}function f(e){return Object(i["a"])({url:window.configs.api+"/devicesRepai/getTask",method:"post",data:e})}},1750:function(e,t,a){"use strict";var i=a("f829"),n=a.n(i);n.a},"25c9":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("span",{staticClass:"seachname"},[e._v("出库单号:")]),a("el-input",{staticClass:"filter-item",attrs:{size:"small",placeholder:"输入出入库单号"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.outOrInNo,callback:function(t){e.$set(e.listQuery,"outOrInNo",t)},expression:"listQuery.outOrInNo"}}),a("span",{staticClass:"seachname"},[e._v("出入库类型:")]),a("el-select",{attrs:{size:"small",clearable:"",placeholder:"选择出入库类型"},model:{value:e.listQuery.operate,callback:function(t){e.$set(e.listQuery,"operate",t)},expression:"listQuery.operate"}},e._l(e.handleTypeList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.value,value:e.id}})})),1),a("span",{staticClass:"seachname"},[e._v("出入库日期:")]),a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",size:"small",type:"date",placeholder:"选择开始日期"},model:{value:e.listQuery.startTime,callback:function(t){e.$set(e.listQuery,"startTime",t)},expression:"listQuery.startTime"}}),a("span",{staticClass:"seachname"},[e._v("—")]),a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",size:"small",type:"date",placeholder:"选择结束日期"},model:{value:e.listQuery.stopTime,callback:function(t){e.$set(e.listQuery,"stopTime",t)},expression:"listQuery.stopTime"}}),a("el-button",{staticClass:"primaryBtn",attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("查询")]),a("el-button",{staticClass:"resetBtn",attrs:{type:"default",size:"mini",icon:"el-icon-refresh-right"},on:{click:e.handleReset}},[e._v("重置")])],1),a("div",{staticClass:"opt-container"},[e.hasPermission("warehouseOut/in")?a("el-button",{staticClass:"addBtn",attrs:{type:"default",icon:"el-icon-plus"},on:{click:e.handleWarehousingAdd}},[e._v("新建入库单")]):e._e(),e.hasPermission("warehouseOut/out")?a("el-button",{staticClass:"addBtn",attrs:{type:"default",icon:"el-icon-plus"},on:{click:e.handleWarehouseOutAdd}},[e._v("新建出库单")]):e._e()],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],key:e.tableKey,attrs:{stripe:"",data:e.warehouseOutList,border:"",fit:"","highlight-current-row":"","header-cell-style":e.headerClassName,height:e.tableHeight}},[a("el-table-column",{attrs:{label:"序号",type:"index",width:"55",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s((e.listQuery.pageNum-1)*e.listQuery.pageSize+t.$index+1)+" ")]}}])}),a("el-table-column",{attrs:{label:"单号",prop:"outInNo",align:"center"}}),a("el-table-column",{attrs:{label:"出入库类型",prop:"operate",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._v(" "+e._s(1===a.operate?"出库":"入库")+" ")]}}])}),a("el-table-column",{attrs:{label:"经办人",prop:"createUserName",align:"center"}}),a("el-table-column",{attrs:{label:"创建时间",prop:"createTime",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",[e._v(e._s(i.createTime))])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[e.hasPermission("warehouseOut/find")?a("el-button",{staticClass:"defaultTextBtn",attrs:{type:"text"},on:{click:function(t){return e.handleDetail(i)}}},[a("svg-icon",{attrs:{"icon-class":"search"}}),e._v(" 详情 ")],1):e._e()]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.pageNum,limit:e.listQuery.pageSize},on:{"update:page":function(t){return e.$set(e.listQuery,"pageNum",t)},"update:limit":function(t){return e.$set(e.listQuery,"pageSize",t)},pagination:e.getWarehouseOutList}}),e.setDialogVisible1?a("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],staticClass:"dialogs",attrs:{title:e.dialogTitle,visible:e.setDialogVisible1,"close-on-click-modal":!1,width:"1080px"},on:{"update:visible":function(t){e.setDialogVisible1=t}}},[e.warehousingDetail?e._e():a("WarehousingEdit",{on:{WarehouseOutEditCall:e.warehouseOutEditCall}}),e.warehousingDetail?a("WarehousingDetail",{attrs:{"warehouse-out-obj":e.oWarehouseOut},on:{WarehouseOutEditCall:e.warehouseOutEditCall}}):e._e()],1):e._e(),e.setDialogVisible2?a("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],staticClass:"dialogs",attrs:{title:e.dialogTitle,visible:e.setDialogVisible2,"close-on-click-modal":!1,width:"1080px"},on:{"update:visible":function(t){e.setDialogVisible2=t}}},[e.warehouseOutDetail?e._e():a("WarehouseOutEdit",{on:{WarehouseOutEditCall:e.warehouseOutEditCall}}),e.warehouseOutDetail?a("WarehouseOutDetail",{attrs:{"warehouse-out-obj":e.oWarehouseOut},on:{WarehouseOutEditCall:e.warehouseOutEditCall}}):e._e()],1):e._e()],1)},n=[],o=(a("d81d"),a("5530")),l=a("b775");function s(e){return Object(l["a"])({url:window.configs.api+"/devicesOutinDetail/findList",method:"get",params:e})}function r(e){return Object(l["a"])({url:window.configs.api+"/devicesSpareOutService/getProductDevicesSpare",method:"get",params:e})}function u(e){return Object(l["a"])({url:window.configs.api+"/devicesSpareInService/getProductDevicesSpare",method:"get",params:e})}function c(e){return Object(l["a"])({url:window.configs.api+"/devicesSpareInService/save",method:"post",data:e})}function d(e){return Object(l["a"])({url:window.configs.api+"/devicesSpareOutService/save",method:"post",data:e})}var h=a("333d"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container2"},[a("el-row",{staticClass:"optArea"},[a("el-col",{attrs:{span:12}},[a("label",[e._v("备注:")]),a("el-input",{attrs:{size:"mini",placeholder:"输入备注",maxlength:"100","show-word-limit":""},model:{value:e.remarks,callback:function(t){e.remarks=t},expression:"remarks"}})],1),a("el-col",{attrs:{span:12}},[a("el-button",{staticClass:"addBtn",attrs:{type:"default",icon:"el-icon-plus"},on:{click:e.handleOpen}},[e._v("选择备品")])],1)],1),a("div",{staticClass:"content1"},[a("div",{staticClass:"contentBody"},[a("el-table",{attrs:{stripe:"",data:e.warehousingList,fit:"","highlight-current-row":"",height:"393px","header-cell-style":e.headerClassName}},[a("el-table-column",{attrs:{label:"序号",type:"index",align:"center",width:"55",fixed:""}}),a("el-table-column",{attrs:{label:"物料编码",prop:"code",align:"center"}}),a("el-table-column",{attrs:{label:"物料名称",prop:"name",align:"center"}}),a("el-table-column",{attrs:{label:"当前库存",prop:"storeCount",align:"center"}}),a("el-table-column",{attrs:{label:"入库数量",prop:"number",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("el-input-number",{attrs:{size:"mini",step:1,min:1},model:{value:i.warehousingCount,callback:function(t){e.$set(i,"warehousingCount",t)},expression:"row.warehousingCount"}})]}}])}),a("el-table-column",{attrs:{label:"操作",width:"80px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row,n=t.index;return[a("el-button",{staticClass:"deleteTextBtn",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(t){return e.handleDel(i,n)}}},[e._v("删除")])]}}])})],1)],1)]),a("div",{staticClass:"footer"},[a("el-button",{attrs:{size:"mini"},on:{click:e.handleCancel}},[e._v("取消")]),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.handleSave}},[e._v("保存")])],1),e.dialogVisible?a("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],staticClass:"dialogs",attrs:{title:"选择备品",modal:!1,visible:e.dialogVisible,"close-on-click-modal":!1,width:"1080px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("StockInfoSelected",{on:{StockInfoSelectedCall:e.stockInfoSelectedCall}})],1):e._e()],1)},m=[],f=(a("c740"),a("4160"),a("a434"),a("b0c0"),a("159b"),a("2909")),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("span",{staticClass:"seachname"},[e._v("物料代码:")]),a("el-input",{staticClass:"filter-item",attrs:{size:"small",placeholder:"输入物料代码"},model:{value:e.listQuery.materialCode,callback:function(t){e.$set(e.listQuery,"materialCode",t)},expression:"listQuery.materialCode"}}),a("span",{staticClass:"seachname"},[e._v("物料名称:")]),a("el-input",{staticClass:"filter-item",attrs:{size:"small",placeholder:"输入物料名称"},model:{value:e.listQuery.materialName,callback:function(t){e.$set(e.listQuery,"materialName",t)},expression:"listQuery.materialName"}}),a("el-button",{staticClass:"filter-item primaryBtn",attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("查询")]),a("el-button",{staticClass:"filter-item resetBtn",attrs:{type:"default",size:"mini",icon:"el-icon-refresh-right"},on:{click:e.handleReset}},[e._v("重置")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],key:e.tableKey,ref:"tableRef",attrs:{stripe:"",data:e.stockInfoList,fit:"","highlight-current-row":"",height:"400px","header-cell-style":e.headerClassName},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",align:"center",width:"55"}}),a("el-table-column",{attrs:{label:"序号",type:"index",align:"center",width:"55"}}),a("el-table-column",{attrs:{label:"物料代码",prop:"code","min-width":"150px",align:"center"}}),a("el-table-column",{attrs:{label:"物料名称",prop:"name","min-width":"150px",align:"center"}}),a("el-table-column",{attrs:{label:"当前库存",prop:"storeCount",width:"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",[e._v(e._s(null===i.storeCount?0:i.storeCount))])]}}])}),a("el-table-column",{attrs:{label:"最大安全库存",prop:"maxStore",width:"150px",align:"center"}}),a("el-table-column",{attrs:{label:"最小安全库存",prop:"minStore",width:"150px",align:"center"}})],1),a("div",{staticClass:"footer"},[a("el-button",{attrs:{size:"mini"},on:{click:e.handleCancel}},[e._v("取消")]),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.handleConfirm}},[e._v("确定")])],1)],1)},b=[],v=(a("4de4"),a("c975"),a("dbcc")),w={name:"StockInfoSelected",components:{},data:function(){return{listQuery:{materialCode:"",materialName:""},tableKey:0,tableLoading:!0,stockInfoList:[],multipleSelection:[]}},watch:{checkboxVal:function(e){this.formThead=this.formTheadOptions.filter((function(t){return e.indexOf(t)>=0})),this.key=this.key+1}},created:function(){this.getStockInfoList()},methods:{headerClassName:function(e){e.row,e.rowIndex;return"background-color: #FAFAFA"},handleFilter:function(){this.getStockInfoList()},handleReset:function(){this.listQuery.materialCode="",this.listQuery.materialName="",this.getStockInfoList()},handleCancel:function(){this.$emit("StockInfoSelectedCall",[])},handleConfirm:function(){this.$emit("StockInfoSelectedCall",Object(f["a"])(this.multipleSelection))},handleSelectionChange:function(e){this.multipleSelection=e},getStockInfoList:function(){var e=this;this.tableLoading=!0;var t={code:this.listQuery.materialCode,name:this.listQuery.materialName};Object(v["c"])(t).then((function(t){0===t.code&&(e.stockInfoList=t.data.list),e.tableLoading=!1}))},optSelectedTable:function(){var e=[];return this.multipleSelection.length>0&&this.multipleSelection.map((function(t,a){e.push(t.id)})),e}}},y=w,O=(a("9ea9"),a("2877")),C=Object(O["a"])(y,g,b,!1,null,"50cc6ac0",null),k=C.exports,S=a("a888"),D={name:"WarehousingEdit",directives:{elDragDialog:S["a"]},components:{StockInfoSelected:k},data:function(){return{dialogVisible:!1,remarks:null,warehousingList:[]}},created:function(){},mounted:function(){},methods:{headerClassName:function(e){e.row,e.rowIndex;return"background-color: #FAFAFA"},stockInfoSelectedCall:function(e){this.dialogVisible=!1,this.optReturnData(e)},optReturnData:function(e){if(e.length>0){var t=Object(f["a"])(this.warehousingList);e.forEach((function(e){e["warehousingCount"]=1;var a=t.findIndex((function(t){return t.name===e.name}));-1===a&&t.push(e)})),this.warehousingList=JSON.parse(JSON.stringify(t))}},handleCancel:function(){this.$emit("WarehouseOutEditCall",!1)},handleOpen:function(){this.dialogVisible=!0},handleSave:function(){0!==this.warehousingList.length?this.addWarehousingRequest():this.$message({message:"请选择备品!",type:"warning"})},handleDel:function(e){this.warehousingList.splice(e,1)},addWarehousingRequest:function(){var e=this,t=this.optData(),a={note:this.remarks,productDevicesSparesAndOutInDetailList:t};c(a).then((function(t){0===t.code?(e.$message({message:"入库单新增成功!",type:"success"}),e.$emit("WarehouseOutEditCall",!0)):1e3===t.code&&e.$message({type:"warning",message:"入库单新增失败:"+t.msg})}))},optData:function(){var e=[];return this.warehousingList.forEach((function(t){var a={devicesOutinDetail:{useCount:t.warehousingCount},id:t.id};e.push(a)})),e}}},_=D,x=(a("982c"),Object(O["a"])(_,p,m,!1,null,"0297b5ff",null)),L=x.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container2"},[a("div",{staticClass:"content1"},[a("div",{staticClass:"contentBody"},[a("el-form",{ref:"warehousingForm",attrs:{model:e.warehousingForm,rules:e.rules,"label-width":"100px"}},[a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"入库时间:"}},[a("span",[e._v(e._s(e.warehouseDetail.createTime))])])],1),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"经办人:"}},[a("span",[e._v(e._s(e.warehouseDetail.createUser))])])],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"单号",prop:"value4"}},[a("span",[e._v(e._s(e.warehouseDetail.inNo))])])],1),a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{label:"备注:"}},[a("span",{staticClass:"oneRowShow",attrs:{title:e.warehouseDetail.note}},[e._v(e._s(e.warehouseDetail.note))])])],1)],1)],1)],1)]),a("div",{staticClass:"content1"},[a("div",{staticClass:"contentBody"},[a("el-table",{attrs:{stripe:"",data:e.warehouseDetail.productDevicesSparesAndOutInDetailList,fit:"","highlight-current-row":"","header-cell-style":e.headerClassName,height:"393px"}},[a("el-table-column",{attrs:{label:"序号",type:"index",align:"center",width:"55",fixed:""}}),a("el-table-column",{attrs:{label:"编号",prop:"id",align:"center"}}),a("el-table-column",{attrs:{label:"名称",prop:"name",align:"center"}}),a("el-table-column",{attrs:{label:"入库数量",prop:"devicesOutinDetail.useCount",align:"center"}})],1)],1)]),a("div",{staticClass:"footer"},[a("el-button",{attrs:{size:"mini"},on:{click:e.handleCancel}},[e._v("取消")])],1)])},W=[],T={name:"WarehousingDetail",components:{},props:{warehouseOutObj:{type:Object,required:!0}},data:function(){return{warehouseDetail:{}}},created:function(){this.getWarehousingDetailById()},mounted:function(){},methods:{headerClassName:function(e){e.row,e.rowIndex;return"background-color: #FAFAFA"},handleCancel:function(){this.$emit("WarehouseOutEditCall",!1)},handleExport:function(){this.$emit("WarehouseOutEditCall",!1)},getWarehousingDetailById:function(){var e=this;this.tableLoading=!0;var t={id:this.warehouseOutObj.outInId};u(t).then((function(t){0===t.code&&(e.warehouseDetail=t.data)}))}}},N=T,j=(a("2989"),Object(O["a"])(N,I,W,!1,null,"281e5032",null)),E=j.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container2"},[a("el-row",{staticClass:"optArea"},[a("el-col",{attrs:{span:12}},[a("label",[e._v("备注:")]),a("el-input",{attrs:{size:"mini",placeholder:"输入备注",maxlength:"100","show-word-limit":""},model:{value:e.remarks,callback:function(t){e.remarks=t},expression:"remarks"}})],1),a("el-col",{attrs:{span:8}},[a("label",[e._v("选维修工单号:")]),a("el-select",{attrs:{filterable:"",remote:"","reserve-keyword":"","remote-method":e.remoteMethod,loading:e.loading,size:"mini",clearable:"",placeholder:"请输入维修工单号查询"},on:{change:e.handleSelected},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}},e._l(e.repairOrders,(function(e){return a("el-option",{key:e.id,attrs:{label:e.code,value:e.id}})})),1)],1),a("el-col",{attrs:{span:4}},[a("el-button",{staticClass:"addBtn",attrs:{type:"default",icon:"el-icon-plus"},on:{click:e.handleOpen}},[e._v("选择备品")])],1)],1),a("div",{staticClass:"content1"},[a("div",{staticClass:"contentBody"},[a("el-table",{attrs:{stripe:"",data:e.warehouseOutList,fit:"","highlight-current-row":"",height:"393px","header-cell-style":e.headerClassName}},[a("el-table-column",{attrs:{label:"序号",type:"index",align:"center",width:"55"}}),a("el-table-column",{attrs:{label:"物料代码",prop:"code",align:"center"}}),a("el-table-column",{attrs:{label:"物料名称",prop:"name",align:"center"}}),a("el-table-column",{attrs:{label:"库存数量",prop:"storeCount",align:"center"}}),a("el-table-column",{attrs:{label:"出库数量",prop:"warehouseOutCount",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row,n=t.index;return[null!==i.storeCount?a("el-input-number",{key:n,attrs:{size:"mini",step:1,min:1,max:1*i.storeCount},model:{value:i.warehouseOutCount,callback:function(t){e.$set(i,"warehouseOutCount",t)},expression:"row.warehouseOutCount"}}):a("el-input-number",{key:n,attrs:{size:"mini",step:1,min:1},model:{value:i.warehouseOutCount,callback:function(t){e.$set(i,"warehouseOutCount",t)},expression:"row.warehouseOutCount"}})]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row,n=t.index;return[a("el-button",{staticClass:"deleteTextBtn",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(t){return e.handleDel(i,n)}}},[e._v("删除")])]}}])})],1)],1)]),a("div",{staticClass:"footer"},[a("el-button",{attrs:{size:"mini"},on:{click:e.handleCancel}},[e._v("取消")]),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.handleSave}},[e._v("保存")])],1),e.dialogVisible?a("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],staticClass:"dialogs",attrs:{title:"选择备品",modal:!1,visible:e.dialogVisible,"close-on-click-modal":!1,width:"1080px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("StockInfoSelected",{on:{StockInfoSelectedCall:e.stockInfoSelectedCall}})],1):e._e()],1)},$=[],A=(a("7db0"),a("d3b7"),a("25f0"),a("0adb")),z={name:"WarehouseOutEdit",directives:{elDragDialog:S["a"]},components:{StockInfoSelected:k},data:function(){return{list:[],code:"",loading:!1,dialogVisible:!1,remarks:"",repairOrders:[],warehouseOutList:[],storeCountZeroList:[]}},created:function(){},mounted:function(){},methods:{headerClassName:function(e){e.row,e.rowIndex;return"background-color: #FAFAFA"},stockInfoSelectedCall:function(e){this.dialogVisible=!1,this.optReturnData(e,1)},optReturnData:function(e,t){if(e.length>0){var a=Object(f["a"])(this.warehouseOutList);e.forEach((function(e){1===t&&(e["warehouseOutCount"]=1);var i=a.findIndex((function(t){return t.code===e.code}));-1===i&&a.push(e)})),this.warehouseOutList=JSON.parse(JSON.stringify(a))}},handleSelected:function(e){var t=[],a=this.repairOrders.find((function(t){return t.id===e}));0!==a.listSpare.length&&a.listSpare.forEach((function(e){var a={id:e.devicesSpareId,code:e.devicesSpareCode,name:e.devicesSpareName,storeCount:e.devicesSpareStoreCount,warehouseOutCount:e.useCount};t.push(a)})),this.warehouseOutList=[],this.optReturnData(t,2)},handleOpen:function(){this.dialogVisible=!0},handleCancel:function(){this.$emit("WarehouseOutEditCall",!1)},handleSave:function(){0!==this.warehouseOutList.length?this.addWarehouseOutRequest():this.$message({message:"请选择维修单或备品!",type:"warning"})},handleDel:function(e){this.warehouseOutList.splice(e,1)},handleSearch:function(){(this.code+"").length>0&&this.getWarehouseOutList()},addWarehouseOutRequest:function(){var e=this,t=this.optData();if(this.storeCountZeroList.length>0)this.$message({message:"物料代码为: [ "+this.storeCountZeroList.toString()+" ] 的物料库存数量为0，无法出库!",type:"warning"});else{var a={note:this.remarks,productDevicesSparesAndOutInDetailList:t};d(a).then((function(t){0===t.code?(e.$message({message:"出库单新增成功!",type:"success"}),e.$emit("WarehouseOutEditCall",!0)):1e3===t.code&&e.$message({type:"warning",message:"出库单新增失败:"+t.msg})}))}},optData:function(){var e=[],t=[];return this.warehouseOutList.forEach((function(a){var i={devicesOutinDetail:{useCount:a.warehouseOutCount},id:a.id};(null===a.storeCount||a.storeCount<=0)&&t.push(a.code),e.push(i)})),this.storeCountZeroList=t,e},getWarehouseOutList:function(){var e=this,t={code:this.code};Object(A["d"])(t).then((function(t){e.loading=!1,0===t.code&&(e.repairOrders=t.data)}))},remoteMethod:function(e){var t=this;""!==e?(this.code=e,this.loading=!0,setTimeout((function(){t.getWarehouseOutList()}),200)):this.repairOrders=[]}}},F=z,V=(a("1750"),Object(O["a"])(F,Q,$,!1,null,"09c2dbb4",null)),R=V.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container2"},[a("div",{staticClass:"content1"},[a("div",{staticClass:"contentBody"},[a("el-form",{ref:"warehouseOutForm",attrs:{model:e.warehouseOutForm,"label-width":"100px"}},[a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"出库时间:",prop:"value1"}},[a("span",[e._v(e._s(e.warehouseDetail.createTime))])])],1),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"经办人:"}},[a("span",[e._v(e._s(e.warehouseDetail.createUser))])])],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"单号"}},[a("span",[e._v(e._s(e.warehouseDetail.outNo))])])],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"备注"}},[a("span",{staticClass:"oneRowShow",attrs:{title:e.warehouseDetail.note}},[e._v(e._s(e.warehouseDetail.note))])])],1)],1)],1)],1)]),a("div",{staticClass:"content1"},[a("div",{staticClass:"contentBody"},[a("el-table",{attrs:{stripe:"",data:e.warehouseDetail.productDevicesSparesAndOutInDetailList,fit:"","highlight-current-row":"","header-cell-style":e.headerClassName,height:"393px"}},[a("el-table-column",{attrs:{label:"序号",type:"index",align:"center",width:"55"}}),a("el-table-column",{attrs:{label:"编号",prop:"id",align:"center"}}),a("el-table-column",{attrs:{label:"名称",prop:"name",align:"center"}}),a("el-table-column",{attrs:{label:"出库数量",prop:"devicesOutinDetail.useCount",align:"center"}})],1)],1)]),a("div",{staticClass:"footer"},[a("el-button",{attrs:{size:"mini"},on:{click:e.handleCancel}},[e._v("取消")])],1)])},q=[],H={name:"WarehouseOutEdit",components:{},props:{warehouseOutObj:{type:Object,required:!0}},data:function(){return{warehouseDetail:{}}},created:function(){this.getWarehouseOutDetailById()},mounted:function(){},methods:{headerClassName:function(e){e.row,e.rowIndex;return"background-color: #FAFAFA"},handleCancel:function(){this.$emit("WarehouseOutEditCall",!1)},handleExport:function(){this.$emit("WarehouseOutEditCall",!1)},getWarehouseOutDetailById:function(){var e=this;this.tableLoading=!0;var t={id:this.warehouseOutObj.outInId};r(t).then((function(t){0===t.code&&(e.warehouseDetail=t.data)}))}}},M=H,P=(a("8d94"),Object(O["a"])(M,B,q,!1,null,"481313c0",null)),J=P.exports,U={name:"WarehouseOut",directives:{elDragDialog:S["a"]},components:{Pagination:h["a"],WarehousingEdit:L,WarehousingDetail:E,WarehouseOutEdit:R,WarehouseOutDetail:J},data:function(){return{total:0,listQuery:{pageNum:1,pageSize:10,outOrInNo:null,operate:null,startTime:null,stopTime:null},handleTypeList:[{id:0,value:"入库"},{id:1,value:"出库"}],tableHeight:0,tableKey:Math.random(),tableLoading:!0,warehouseOutList:[],downloadLoading:!1,multipleSelection:[],oWarehouseOut:{},setDialogVisible1:!1,setDialogVisible2:!1,warehouseOutDetail:!1,warehousingDetail:!1,dialogTitle:"新建入库单"}},created:function(){var e=this;this.getWarehouseOutList(),this.computedTableHeight(),window.onresize=function(){return function(){e.computedTableHeight()}()}},methods:{headerClassName:function(e){e.row,e.rowIndex;return"background-color: #FAFAFA"},warehouseOutEditCall:function(e){this.setDialogVisible2=!1,this.setDialogVisible1=!1,e&&this.getWarehouseOutList()},handleFilter:function(){this.listQuery.pageNum=1,this.getWarehouseOutList()},handleReset:function(){this.listQuery.pageNum=1,this.listQuery.outOrInNo="",this.listQuery.handleType="",this.listQuery.startTime="",this.listQuery.stopTime="",this.listQuery.operate="",this.getWarehouseOutList()},handleWarehousingAdd:function(){this.dialogTitle="新建入库单",this.setDialogVisible1=!0,this.warehousingDetail=!1},handleWarehouseOutAdd:function(){this.dialogTitle="新建出库单",this.setDialogVisible2=!0,this.warehouseOutDetail=!1},handleDetail:function(e){this.oWarehouseOut=Object(o["a"])({},e),1===e.operate?(this.dialogTitle="出库单详情",this.setDialogVisible2=!0,this.warehouseOutDetail=!0):(this.dialogTitle="入库单详情",this.setDialogVisible1=!0,this.warehousingDetail=!0)},getWarehouseOutList:function(){var e=this;this.tableLoading=!0,s(this.listQuery).then((function(t){0===t.code&&(e.warehouseOutList=t.data.list,e.total=t.data.total),e.tableLoading=!1}))},optSelectedTable:function(){var e=this,t="";return this.multipleSelection.length>0&&this.multipleSelection.map((function(a,i){i===e.multipleSelection.length-1?t+=a.id:t+=a.id+","})),t},computedTableHeight:function(){var e=document.body.clientHeight;e=e<768?768:e,this.tableHeight=e-352}}},K=U,Z=(a("e30e"),Object(O["a"])(K,i,n,!1,null,"570a4ecd",null));t["default"]=Z.exports},2989:function(e,t,a){"use strict";var i=a("e551"),n=a.n(i);n.a},"5c98":function(e,t,a){},"666a":function(e,t,a){},"7db0":function(e,t,a){"use strict";var i=a("23e7"),n=a("b727").find,o=a("44d2"),l=a("ae40"),s="find",r=!0,u=l(s);s in[]&&Array(1)[s]((function(){r=!1})),i({target:"Array",proto:!0,forced:r||!u},{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),o(s)},"8d94":function(e,t,a){"use strict";var i=a("d9bf"),n=a.n(i);n.a},"982c":function(e,t,a){"use strict";var i=a("5c98"),n=a.n(i);n.a},"9ea9":function(e,t,a){"use strict";var i=a("e354"),n=a.n(i);n.a},a888:function(e,t,a){"use strict";a("99af"),a("caad"),a("ac1f"),a("2532"),a("5319");var i={bind:function(e,t,a){var i=e.querySelector(".el-dialog__header"),n=e.querySelector(".el-dialog");i.style.cssText+=";cursor:move;",n.style.cssText+=";top:0px;";var o=function(){return window.document.currentStyle?function(e,t){return e.currentStyle[t]}:function(e,t){return getComputedStyle(e,!1)[t]}}();i.onmousedown=function(e){var t=e.clientX-i.offsetLeft,l=e.clientY-i.offsetTop,s=n.offsetWidth,r=n.offsetHeight,u=document.body.clientWidth,c=document.body.clientHeight,d=n.offsetLeft,h=u-n.offsetLeft-s,p=n.offsetTop,m=c-n.offsetTop-r,f=o(n,"left"),g=o(n,"top");f.includes("%")?(f=+document.body.clientWidth*(+f.replace(/\%/g,"")/100),g=+document.body.clientHeight*(+g.replace(/\%/g,"")/100)):(f=+f.replace(/\px/g,""),g=+g.replace(/\px/g,"")),document.onmousemove=function(e){var i=e.clientX-t,o=e.clientY-l;-i>d?i=-d:i>h&&(i=h),-o>p?o=-p:o>m&&(o=m),n.style.cssText+=";left:".concat(i+f,"px;top:").concat(o+g,"px;"),a.child.$emit("dragDialog")},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}}},n=function(e){e.directive("el-drag-dialog",i)};window.Vue&&(window["el-drag-dialog"]=i,Vue.use(n)),i.install=n;t["a"]=i},d9bf:function(e,t,a){},dbcc:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return l}));var i=a("b775");function n(e){return Object(i["a"])({url:window.configs.api+"/productDevicesSpare/findList",method:"get",params:e})}function o(e){return Object(i["a"])({url:window.configs.api+"/productDevicesSpare/delete",method:"get",params:{ids:e}})}function l(e){return Object(i["a"])({url:window.configs.api+"/productDevicesSpare/save",method:"post",data:e})}},e30e:function(e,t,a){"use strict";var i=a("666a"),n=a.n(i);n.a},e354:function(e,t,a){},e551:function(e,t,a){},f829:function(e,t,a){}}]);