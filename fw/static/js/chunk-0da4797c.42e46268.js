(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0da4797c"],{"09f4":function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),Math.easeInOutQuad=function(e,t,a,c){return e/=c/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var c=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function s(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function i(e,t,a){var i=l(),n=e-i,o=20,r=0;t="undefined"===typeof t?500:t;var d=function e(){r+=o;var l=Math.easeInOutQuad(r,i,n,t);s(l),r<t?c(e):a&&"function"===typeof a&&a()};d()}},"46fa":function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return l})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return n}));var c=a("b775");function s(e){return Object(c["a"])({url:window.configs.api+"/qualityMaterialCheck/findList",method:"get",params:e})}function l(e){return Object(c["a"])({url:window.configs.api+"/qualityMaterialCheck/submit",method:"post",data:e})}function i(e){return Object(c["a"])({url:window.configs.api+"/qualityMaterialCheck/getCheckoutMaterialInfoById",method:"get",params:e})}function n(e){return Object(c["a"])({url:window.configs.api+"/qualityMaterialCheck/findResultByDataIdAndClassify",method:"get",params:e})}},9739:function(e,t,a){},a888:function(e,t,a){"use strict";a("99af"),a("caad"),a("ac1f"),a("2532"),a("5319");var c={bind:function(e,t,a){var c=e.querySelector(".el-dialog__header"),s=e.querySelector(".el-dialog");c.style.cssText+=";cursor:move;",s.style.cssText+=";top:0px;";var l=function(){return window.document.currentStyle?function(e,t){return e.currentStyle[t]}:function(e,t){return getComputedStyle(e,!1)[t]}}();c.onmousedown=function(e){var t=e.clientX-c.offsetLeft,i=e.clientY-c.offsetTop,n=s.offsetWidth,o=s.offsetHeight,r=document.body.clientWidth,d=document.body.clientHeight,u=s.offsetLeft,p=r-s.offsetLeft-n,h=s.offsetTop,f=d-s.offsetTop-o,m=l(s,"left"),b=l(s,"top");m.includes("%")?(m=+document.body.clientWidth*(+m.replace(/\%/g,"")/100),b=+document.body.clientHeight*(+b.replace(/\%/g,"")/100)):(m=+m.replace(/\px/g,""),b=+b.replace(/\px/g,"")),document.onmousemove=function(e){var c=e.clientX-t,l=e.clientY-i;-c>u?c=-u:c>p&&(c=p),-l>h?l=-h:l>f&&(l=f),s.style.cssText+=";left:".concat(c+m,"px;top:").concat(l+b,"px;"),a.child.$emit("dragDialog")},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}}},s=function(e){e.directive("el-drag-dialog",c)};window.Vue&&(window["el-drag-dialog"]=c,Vue.use(s)),c.install=s;t["a"]=c},b50b:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"e",(function(){return l})),a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return n})),a.d(t,"a",(function(){return o}));var c=a("b775");function s(e){return Object(c["a"])({url:window.configs.api+"/qualityInspection/findList",method:"get",params:e})}function l(e){return Object(c["a"])({url:window.configs.api+"/qualityInspection/save",method:"post",data:e})}function i(e){return Object(c["a"])({url:window.configs.api+"/qualityInspection/getInspectionDetail",method:"get",params:e})}function n(e){return Object(c["a"])({url:window.configs.api+"/qualityInspection/change",method:"post",data:e})}function o(e){return Object(c["a"])({url:window.configs.api+"/qualityInspection/getInspectionChangeLog",method:"get",params:e})}},c126:function(e,t,a){"use strict";var c=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"app-container"},[c("el-page-header",{attrs:{content:"来料检验"},on:{back:function(t){return e.backClick(null)}}}),c("div",{staticClass:"content1"},[e._m(0),c("div",{staticClass:"contentBody"},[c("div",{staticClass:"firstTabBox"},[c("div",{staticClass:"header"},[c("el-row",[c("el-col",{attrs:{span:8}},[e._v(" 检验订单号："+e._s(e.objstr.checkNo)+" ")]),c("el-col",{attrs:{span:8}},[e._v(" 源单单号："+e._s(e.objstr.sourceNo)+" ")]),c("el-col",{attrs:{span:8}},[e._v(" 采购日期："+e._s(e.objstr.buyDate)+" ")])],1),c("el-row",[c("el-col",{attrs:{span:8}},[e._v(" 报检人："+e._s(e.objstr.createUserName)+" ")]),c("el-col",{attrs:{span:8}},[e._v(" 报检日期："+e._s(e.objstr.checkDate)+" ")])],1)],1),c("div",{staticClass:"firstContent"},[c("div",{staticClass:"el-tablenew"},[c("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"incomref",staticStyle:{width:"100%"},attrs:{data:e.list,"row-class-name":e.tableRowClassName,border:"","highlight-current-row":""},on:{"current-change":e.selectItem}},[c("el-table-column",{attrs:{prop:"date",label:"序号",align:"center",width:"55"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index+1)+" ")]}}])}),c("el-table-column",{attrs:{prop:"code",label:"物料代码",align:"center"}}),c("el-table-column",{attrs:{prop:"name",label:"物料名称",align:"center"}}),c("el-table-column",{attrs:{prop:"unit",label:"单位",align:"center"}}),c("el-table-column",{attrs:{prop:"receive_count",label:"实收数量",align:"center"}}),c("el-table-column",{attrs:{prop:"content",label:"检验状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.checked?"已检验":"未检验")+" ")]}}])})],1)],1),c("el-row",[c("el-col",{staticClass:"elColRight logosty",attrs:{span:6}},[c("img",{attrs:{src:a("f535"),alt:"平台logo"}})]),c("el-col",{staticClass:"elColLeft elColRight headers",attrs:{span:12}},[e._v(" 来料检验报告"),c("br"),e._v("IQC INSPECTION REPORT ")]),c("el-col",{staticClass:"elColLeft logosty",attrs:{span:6}}),c("el-col",{staticClass:"elColRight elColTop",attrs:{span:6}},[e._v(" 供应商Supplier: "+e._s(e.checkObj.provider_name)+" ")]),c("el-col",{staticClass:"elColRight elColTop",attrs:{span:6}},[e._v(" 零件名称Part Name: "+e._s(e.checkObj.name)+" ")]),c("el-col",{staticClass:"elColRight elColTop",attrs:{span:6}},[e._v(" 客户零件号Client Part: "+e._s(e.checkObj.code)+" ")]),c("el-col",{staticClass:"elColTop",attrs:{span:6}},[e._v(" 泛沃零件号FWA Ref: "+e._s(e.checkObj.fw_batch)+" ")]),c("el-col",{staticClass:"elColRight elColTop",attrs:{span:12}},[e._v(" 供应商提供合格证明Supplier Provide certification : "),c("el-radio-group",{attrs:{disabled:"find"===e.type||"finds"===e.type},model:{value:e.form.prove,callback:function(t){e.$set(e.form,"prove",t)},expression:"form.prove"}},[c("el-radio",{attrs:{label:1}},[e._v("有 yes")]),c("el-radio",{attrs:{label:0}},[e._v("无 no")])],1)],1),c("el-col",{staticClass:"elColRight elColTop",attrs:{span:4}},[e._v(" 批号Lot No: "+e._s(e.checkObj.provider_batch)+" ")]),c("el-col",{staticClass:"elColRight elColTop",attrs:{span:4}},[e._v(" 数量Quantity: "+e._s(e.checkObj.receive_count)+" ")]),c("el-col",{staticClass:"elColTop",attrs:{span:4}},[e._v(" 日期: "+e._s(e.checkObj.check_date)+" ")]),c("el-col",{staticClass:"headers elColTop",attrs:{span:24}},[e._v(" 外观检查Appearance Inspection ")]),c("el-col",{staticClass:"el-tablenew elColTop",attrs:{span:24}},[c("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.wgList,"row-class-name":e.tableRowClassName,border:""}},[c("el-table-column",{attrs:{prop:"standard",label:"外观要求",align:"center"}}),c("el-table-column",{attrs:{prop:"checkNum",label:"抽检数量",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[c("el-input",{attrs:{disabled:"find"===e.type||"finds"===e.type,size:"small",placeholder:"抽检数量",maxlength:"10"},on:{input:function(e){t.row.checkNum=t.row.checkNum.replace(/[^0-9]/g,"")}},model:{value:t.row.checkNum,callback:function(a){e.$set(t.row,"checkNum",a)},expression:"scope.row.checkNum"}})]}}])}),c("el-table-column",{attrs:{prop:"evaluate",label:"检测方法",align:"center"}}),c("el-table-column",{attrs:{prop:"checkResult",label:"结论",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[c("el-switch",{staticStyle:{display:"block"},attrs:{disabled:"find"===e.type||"finds"===e.type,size:"mini",maxlength:"100","active-color":"#006fe6","inactive-color":"#ff4949","active-text":"OK","inactive-text":"NG"},model:{value:t.row.checkResult,callback:function(a){e.$set(t.row,"checkResult",a)},expression:"scope.row.checkResult"}})]}}])}),c("el-table-column",{attrs:{prop:"remark",label:"备注",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[c("el-input",{attrs:{disabled:"find"===e.type||"finds"===e.type,size:"small",placeholder:"备注",maxlength:"100"},model:{value:t.row.remark,callback:function(a){e.$set(t.row,"remark",a)},expression:"scope.row.remark"}})]}}])})],1)],1),c("el-col",{staticClass:"headers elColTop",attrs:{span:24}},[e._v(" 尺寸检查Dimension inspection ")]),c("el-col",{staticClass:"el-tablenew elColTop",attrs:{span:24}},[c("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.ccList,"row-class-name":e.tableRowClassName,border:""}},[c("el-table-column",{attrs:{prop:"name",label:"尺寸范围",align:"center"}},[c("el-table-column",{attrs:{prop:"standard",label:"Dim.Range",align:"center"}})],1),c("el-table-column",{attrs:{prop:"devicesName",label:"实测尺寸/样本代号 Measured Value/Samles No.",align:"center"}},[c("el-table-column",{attrs:{prop:"checkOne",label:"1",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[c("el-input-number",{staticStyle:{width:"100%"},attrs:{precision:2,min:0,controls:!1,disabled:"find"===e.type||"finds"===e.type,placeholder:""},on:{change:function(a){return e.checkRang(t.$index)}},model:{value:t.row.checkOne,callback:function(a){e.$set(t.row,"checkOne",a)},expression:"scope.row.checkOne"}})]}}])}),c("el-table-column",{attrs:{prop:"name",label:"2",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[c("el-input-number",{staticStyle:{width:"100%"},attrs:{precision:2,min:0,controls:!1,disabled:"find"===e.type||"finds"===e.type,placeholder:""},on:{change:function(a){return e.checkRang(t.$index)}},model:{value:t.row.checkTwo,callback:function(a){e.$set(t.row,"checkTwo",a)},expression:"scope.row.checkTwo"}})]}}])}),c("el-table-column",{attrs:{prop:"name",label:"3",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[c("el-input-number",{staticStyle:{width:"100%"},attrs:{precision:2,min:0,controls:!1,disabled:"find"===e.type||"finds"===e.type,placeholder:""},on:{change:function(a){return e.checkRang(t.$index)}},model:{value:t.row.checkThree,callback:function(a){e.$set(t.row,"checkThree",a)},expression:"scope.row.checkThree"}})]}}])}),c("el-table-column",{attrs:{prop:"name",label:"4",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[c("el-input-number",{staticStyle:{width:"100%"},attrs:{precision:2,min:0,controls:!1,disabled:"find"===e.type||"finds"===e.type,placeholder:""},on:{change:function(a){return e.checkRang(t.$index)}},model:{value:t.row.checkFour,callback:function(a){e.$set(t.row,"checkFour",a)},expression:"scope.row.checkFour"}})]}}])}),c("el-table-column",{attrs:{prop:"name",label:"5",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[c("el-input-number",{staticStyle:{width:"100%"},attrs:{precision:2,min:0,controls:!1,disabled:"find"===e.type||"finds"===e.type,placeholder:""},on:{change:function(a){return e.checkRang(t.$index)}},model:{value:t.row.checkFive,callback:function(a){e.$set(t.row,"checkFive",a)},expression:"scope.row.checkFive"}})]}}])})],1),c("el-table-column",{attrs:{prop:"content",label:"检验社备",align:"center"}},[c("el-table-column",{attrs:{prop:"evaluate",label:"Epuipment",align:"center"}})],1),c("el-table-column",{attrs:{prop:"createTime",label:"结论",align:"center"}},[c("el-table-column",{attrs:{prop:"checkResult",label:"Con.",align:"center",width:"130px"},scopedSlots:e._u([{key:"default",fn:function(t){return[c("el-switch",{staticStyle:{display:"block"},attrs:{disabled:!0,size:"mini","active-color":"#006fe6","inactive-color":"#ff4949","active-text":"OK","inactive-text":"NG"},model:{value:t.row.checkResult,callback:function(a){e.$set(t.row,"checkResult",a)},expression:"scope.row.checkResult"}})]}}])})],1),c("el-table-column",{attrs:{prop:"content",label:"备注",align:"center"}},[c("el-table-column",{attrs:{prop:"remark",label:"Remark",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[c("el-input",{attrs:{disabled:"find"===e.type||"finds"===e.type,size:"small",placeholder:"备注",maxlength:"100"},model:{value:t.row.remark,callback:function(a){e.$set(t.row,"remark",a)},expression:"scope.row.remark"}})]}}])})],1)],1)],1),c("el-col",{staticClass:"elColRight elColTop",staticStyle:{"line-height":"36px",height:"36px"},attrs:{span:6}},[c("el-radio-group",{attrs:{disabled:!0},model:{value:e.form.accepted,callback:function(t){e.$set(e.form,"accepted",t)},expression:"form.accepted"}},[c("el-radio",{staticStyle:{"margin-right":"11px"},attrs:{label:1}},[e._v("合格 Accepted")]),c("el-radio",{attrs:{label:0}},[e._v("不合格 Rejected")])],1)],1),c("el-col",{staticClass:"elColRight elColTop",attrs:{span:6}},[e._v(" 检验者Control by: "),c("el-input",{staticStyle:{width:"calc(100% - 150px)"},attrs:{disabled:"find"===e.type||"finds"===e.type,placeholder:"检验者",maxlength:"10"},model:{value:e.form.checkUser,callback:function(t){e.$set(e.form,"checkUser",t)},expression:"form.checkUser"}})],1),c("el-col",{staticClass:"elColRight elColTop",attrs:{span:6}},[e._v(" 批准Approved by: "),c("el-input",{staticStyle:{width:"calc(100% - 150px)"},attrs:{disabled:"find"===e.type||"finds"===e.type,placeholder:"批准",maxlength:"10"},model:{value:e.form.auditUser,callback:function(t){e.$set(e.form,"auditUser",t)},expression:"form.auditUser"}})],1),c("el-col",{staticClass:"elColTop",attrs:{span:6}},[e._v(" 检验日期Date: "),c("el-date-picker",{staticStyle:{width:"calc(100% - 150px)"},attrs:{disabled:"find"===e.type||"finds"===e.type,editable:!1,type:"date",placeholder:"检验日期"},model:{value:e.form.checkDate,callback:function(t){e.$set(e.form,"checkDate",t)},expression:"form.checkDate"}})],1)],1)],1)])])]),c("div",{staticClass:"bottom"},["find"!==e.type?c("el-button",{attrs:{disabled:e.loading,type:"primary"},on:{click:function(t){return e.submitForm()}}},[e._v("保存")]):e._e()],1),c("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],staticClass:"dialogs",attrs:{title:"异常提醒",visible:e.addDialogVisible,"close-on-click-modal":!1,width:"500px","append-to-body":""},on:{"update:visible":function(t){e.addDialogVisible=t}}},[c("div",[e._v(" 当前批次物料存在检验不合格，是否入库 ")]),c("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[c("el-button",{staticClass:"primaryBtn",staticStyle:{width:"120px"},attrs:{type:"primary"},on:{click:function(t){return e.access(0)}}},[e._v("入库")]),c("el-button",{staticClass:"deleteBtn",staticStyle:{width:"120px",background:"#fff"},attrs:{type:"primary"},on:{click:function(t){return e.access(1)}}},[e._v("不入库")]),c("el-button",{staticClass:"defaultBtn",staticStyle:{width:"120px","border-radius":"4px"},on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取消")])],1)])],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("span",{staticClass:"ganggang"},[e._v("-")]),e._v(" 来料检验")])}],l=(a("4160"),a("b0c0"),a("b680"),a("ac1f"),a("1276"),a("159b"),a("b85c")),i=a("46fa"),n=a("b50b"),o=a("a888"),r={name:"IncomingTestInfo",directives:{elDragDialog:o["a"]},props:{objstr:{type:Object,default:null},type:{type:String,default:"add"}},data:function(){return{addDialogVisible:!1,loading:!1,list:[],checkList:[],wgList:[],ccList:[],selectIndex:-1,checkObj:{},form:{prove:0,accepted:0,checkUser:"",checkDate:"",auditUser:""}}},computed:{},mounted:function(){var e=this;Object(i["b"])({id:this.objstr.id}).then((function(t){e.list=[];var a,c=Object(l["a"])(t.data);try{for(c.s();!(a=c.n()).done;){var s=a.value;e.list.push({id:s.product_id,receive_count:s.receive_count,name:s.name,code:s.code,unit:s.unit,fw_batch:s.fw_batch,check_date:s.check_date,provider_batch:s.provider_batch,provider_name:s.provider_name,prove:0,accepted:0,checkUser:"",checkDate:"",auditUser:"",wgList:[],ccList:[],ccRanList:[],wgRanList:[],checked:!1})}}catch(n){c.e(n)}finally{c.f()}"find"===e.type||"finds"===e.type?Object(i["a"])({id:e.objstr.id}).then((function(t){for(var a=0;a<e.list.length;a++){var c,s=Object(l["a"])(t.data);try{for(s.s();!(c=s.n()).done;){var i=c.value;if(i.partCode===e.list[a].code){e.list[a]=JSON.parse(i.realResult);break}}}catch(n){s.e(n)}finally{s.f()}}e.list.length>0&&(e.selectIndex=-1,setTimeout((function(){e.$refs.incomref.setCurrentRow(e.list[0])}))),console.log(e.list)})):e.list.length>0&&(e.selectIndex=-1,setTimeout((function(){e.$refs.incomref.setCurrentRow(e.list[0])})))}))},methods:{tableRowClassName:function(e){e.row;var t=e.rowIndex;return t%2===1?"table-row":""},backClick:function(e){this.$emit("DetailCallBack",{result:e})},checkRang:function(e){var t=this.ccList[e].standard.split("-");this.ccList[e].checkOne&&this.ccList[e].checkTwo&&this.ccList[e].checkThree&&this.ccList[e].checkFour&&this.ccList[e].checkFive&&parseFloat(t[0])<=this.ccList[e].checkOne&&parseFloat(t[1])>=this.ccList[e].checkOne&&parseFloat(t[0])<=this.ccList[e].checkTwo&&parseFloat(t[1])>=this.ccList[e].checkTwo&&parseFloat(t[0])<=this.ccList[e].checkThree&&parseFloat(t[1])>=this.ccList[e].checkThree&&parseFloat(t[0])<=this.ccList[e].checkFour&&parseFloat(t[1])>=this.ccList[e].checkFour&&parseFloat(t[0])<=this.ccList[e].checkFive&&parseFloat(t[1])>=this.ccList[e].checkFive?this.ccList[e].checkResult=!0:this.ccList[e].checkResult=!1},selectItem:function(e){var t=this;-1!==this.selectIndex&&this.setList(this.selectIndex);for(var a=0;a<this.list.length;a++)if(e.code===this.list[a].code){this.selectIndex=a;break}if(this.checkObj=e,this.form={prove:e.prove,accepted:e.accepted,checkUser:e.checkUser,checkDate:e.checkDate,auditUser:e.auditUser},0===e.wgList.length){var c={preciseCode:e.code,classify:0,pageNum:1,pageSize:10};Object(n["b"])(c).then((function(e){if(t.ccList=[],t.wgList=[],e.data.list.length>0){var a=e.data.list[0].qualityInspectionDetails;a.sort((function(e,t){return e.classify-t.classify}));var c,s=Object(l["a"])(a);try{for(s.s();!(c=s.n()).done;){var i=c.value,n=JSON.parse(JSON.stringify(i)),o=JSON.parse(JSON.stringify(i)),r=o.standard.split("-");3===i.classify?(n.remark="",n.checkOne="",n.checkTwo="",n.checkThree="",n.checkFour="",n.checkFive="",n.checkResult=!1,t.ccList.push(n),o.remark="",o.checkOne=(Math.random()*(parseFloat(r[1])-parseFloat(r[0]))+parseFloat(r[0])).toFixed(2),o.checkTwo=(Math.random()*(parseFloat(r[1])-parseFloat(r[0]))+parseFloat(r[0])).toFixed(2),o.checkThree=(Math.random()*(parseFloat(r[1])-parseFloat(r[0]))+parseFloat(r[0])).toFixed(2),o.checkFour=(Math.random()*(parseFloat(r[1])-parseFloat(r[0]))+parseFloat(r[0])).toFixed(2),o.checkFive=(Math.random()*(parseFloat(r[1])-parseFloat(r[0]))+parseFloat(r[0])).toFixed(2),o.checkResult=!0,t.list[t.selectIndex].ccRanList.push(o)):(n.remark="",n.checkNum="",n.checkResult=!0,o.remark="",o.checkNum="",o.checkResult=!0,t.list[t.selectIndex].wgRanList.push(o),t.wgList.push(n))}}catch(d){s.e(d)}finally{s.f()}console.log(t.list[t.selectIndex].ccRanList)}}))}else"finds"===this.type?(this.ccList=JSON.parse(JSON.stringify(this.list[this.selectIndex].ccRanList)),this.wgList=JSON.parse(JSON.stringify(this.list[this.selectIndex].wgList)),this.wgList.forEach((function(e){e.checkResult=!0}))):(this.ccList=JSON.parse(JSON.stringify(this.list[this.selectIndex].ccList)),this.wgList=JSON.parse(JSON.stringify(this.list[this.selectIndex].wgList)))},setList:function(e){var t,a=!0,c=!0,s=Object(l["a"])(this.wgList);try{for(s.s();!(t=s.n()).done;){var i=t.value;i.checkNum||(a=!1),c&&!1===i.checkResult&&(c=!1)}}catch(d){s.e(d)}finally{s.f()}var n,o=Object(l["a"])(this.ccList);try{for(o.s();!(n=o.n()).done;){var r=n.value;r.checkOne&&r.checkTwo&&r.checkThree&&r.checkFour&&r.checkFive||(a=!1),c&&!1===r.checkResult&&(c=!1)}}catch(d){o.e(d)}finally{o.f()}this.form.checkUser&&this.form.checkDate&&this.form.auditUser||(a=!1),this.list[e].ccList=JSON.parse(JSON.stringify(this.ccList)),this.list[e].wgList=JSON.parse(JSON.stringify(this.wgList)),this.list[e].prove=this.form.prove,this.list[e].accepted=c?1:0,this.list[e].checkUser=this.form.checkUser,this.list[e].checkDate=this.form.checkDate,this.list[e].auditUser=this.form.auditUser,this.list[e].checked=a},submitForm:function(){var e=this;this.setList(this.selectIndex),this.loading=!0,setTimeout((function(){var t=!1;e.checkList=[];var a,c=!0,s=Object(l["a"])(e.list);try{for(s.s();!(a=s.n()).done;){var n=a.value;if(0===n.accepted&&(c=!1),!n.checked){t=!0;break}e.checkList.push({checkClassify:3,classify:0,dataId:e.objstr.id,material:n.id,partCode:n.code,partName:n.name,realResult:JSON.stringify(n),viewResult:""})}}catch(o){s.e(o)}finally{s.f()}t?(e.loading=!1,e.$message({type:"error",message:"来料检验任务尚未检验完成"})):c?(e.checkList[0].result=0,Object(i["d"])(e.checkList).then((function(t){e.loading=!1,0===t.code?(e.$message({message:"操作成功!",type:"success"}),e.backClick("1")):1e3===t.code&&e.$message({message:t.msg,type:"error"})}))):(e.loading=!1,e.addDialogVisible=!0)}),1e3)},access:function(e){var t=this;this.loading=!0,this.checkList[0].result=e,Object(i["d"])(this.checkList).then((function(e){t.loading=!1,0===e.code?(t.$message({message:"操作成功!",type:"success"}),t.backClick("1")):1e3===e.code&&t.$message({message:e.msg,type:"error"})}))}}},d=r,u=(a("da93"),a("2877")),p=Object(u["a"])(d,c,s,!1,null,"0fb3aba8",null);t["a"]=p.exports},da93:function(e,t,a){"use strict";var c=a("9739"),s=a.n(c);s.a}}]);