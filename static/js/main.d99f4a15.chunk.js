(this["webpackJsonplog-analyzer"]=this["webpackJsonplog-analyzer"]||[]).push([[0],{423:function(e,a,t){e.exports=t(660)},428:function(e,a,t){},429:function(e,a,t){},660:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(13),l=t.n(c),o=(t(428),t(429),t(23)),i=t(339),u=t(53),s=t(687),m=t(685),p=t(349),d=t(670),E=t(82),f=t(691),b=t(666),g=t(695),h=t(355),v=t(406),O=t.n(v),y=t(405),j=t.n(y),N=t(215),x=t.n(N),T=t(407),w=t.n(T),M=t(408),A=t.n(M),S=t(24),C=t(19),k=t.n(C),R=t(43),F=t(92),D=t.n(F),_="praveeryudi-org.cfapps.io",P=("https://".concat(_,"/employees/all"),"https://".concat(_,"/jobs/all"),"https://".concat(_,"/managers/all"),"https://".concat(_,"/api/fetch/employee/jobHistory/"),"".concat("https","://").concat(_,"/maintenance/lookup")),L="".concat("https","://").concat(_,"/maintenance/transactions/all"),I="".concat("https","://").concat(_,"/maintenance/deleteTxn"),Y=("".concat("https","://").concat(_,"/maintenance/flat/"),"".concat("https","://").concat(_,"/maintenance/addMaintenance")),B="".concat("https","://").concat(_,"/maintenance/addMaintenanceBatch"),U="".concat("https","://").concat(_,"/maintenance/pending/"),H=function(){return function(){var e=Object(R.a)(k.a.mark((function e(a){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get(P).then(function(){var e=Object(R.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.data,e.next=3,a({type:"FLAT_LOOKUP",payload:n});case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){console.error("Error in fetching flat look up data",e)}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},J=t(196),G=t.n(J),W=t(107),V=t(684),K=Object(S.b)((function(e){return{flatData:e.maintenanceReducer.lookup}}),null)((function(e){var a=Object(S.c)();Object(n.useEffect)((function(){a(H())}),[a]);var t=e.flatData;return r.a.createElement(V.a,{theme:Object(W.a)({overrides:{MUIDataTableHeadCell:{root:{fontWeight:"bold"}}}})},r.a.createElement(G.a,{title:"Flats List",data:t,columns:[{name:"flatNumber",label:"Flat Number",options:{filter:!0,sort:!0}},{name:"ownerName",label:"Owner Name",options:{filter:!0,sort:!0}},{name:"expectedMaintenance",label:"Fixed Maintenance",options:{filter:!0,sort:!0}}],options:{filter:!0,filterType:"dropdown",responsive:"scrollMaxHeight",rowsPerPage:15,jsonMode:!0,selectableRows:"none",fixedHeaderOptions:{xAxis:!1,yAxis:!0}}}))})),X=t(212),z=t(213),q=t(217),$=t(216),Q=t(399),Z=t.n(Q),ee=function(e){var a=e.data,t=e.txnIdsToDelete,n={filter:!0,filterType:"checkbox",onRowsDelete:function(e){return function(e){for(var n=[],r=0;r<e.data.length;r++){var c=e.data[r],l=a[c.dataIndex].txnId;n.push(l)}t(n)}(e)},responsive:"scrollMaxHeight",rowsPerPage:15,jsonMode:!0,selectableRows:!0,fixedHeaderOptions:{xAxis:!1,yAxis:!0}};return r.a.createElement(V.a,{theme:Object(W.a)({overrides:{MUIDataTableHeadCell:{root:{fontWeight:"bold"}}}})},r.a.createElement(G.a,{title:"Transactions",data:a,columns:[{name:"flatNumber",label:"Flat Number",options:{filter:!0,sort:!0}},{name:"txnDate",label:"Paid On",options:{filter:!1,sort:!0}},{name:"month",label:"Month",options:{filter:!0,sort:!0}},{name:"year",label:"Year",options:{filter:!0,sort:!0}},{name:"actualPayment",label:"Amount Paid",options:{filter:!1,sort:!0}},{name:"paymentMode",label:"Payment Mode",options:{filter:!0,sort:!0,setCellProps:function(){return{align:"left"}},customBodyRender:function(e){return e.toUpperCase()}}},{name:"balance",label:"Balance",options:{filter:!1,sort:!0,setCellProps:function(){return{align:"center"}}}}],options:n}))},ae=t(401),te=t.n(ae),ne=t(400),re=t.n(ne);function ce(e){return r.a.createElement(re.a,Object.assign({elevation:6,variant:"filled"},e))}var le=function(e){var a=e.message;return r.a.createElement(te.a,{open:!0,autoHideDuration:5e3},r.a.createElement(ce,{severity:"info"},a))},oe=function(e){Object(q.a)(t,e);var a=Object($.a)(t);function t(){var e;Object(X.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).handleRemove=function(a){e.props.removeTxn(a)},e}return Object(z.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchAllTransactions()}},{key:"render",value:function(){var e=this;return r.a.createElement(Z.a,null,r.a.createElement("div",{className:"App"},this.props.txnResponse&&r.a.createElement(le,{message:this.props.txnResponse.infoMessage}),r.a.createElement(ee,{data:this.props.transactions,txnIdsToDelete:function(a){return e.handleRemove(a)}})))}}]),t}(n.Component),ie=Object(S.b)((function(e){return{transactions:e.maintenanceReducer.txnData,txnResponse:e.maintenanceReducer.txnResponse}}),(function(e){return{fetchAllTransactions:function(){return e(function(){var e=Object(R.a)(k.a.mark((function e(a){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get(L).then(function(){var e=Object(R.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.data,e.next=3,a({type:"GET_ALL_TRANSACTIONS",payload:n});case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){console.error("Error in fetching transactions",e)}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())},removeTxn:function(a){return e(function(e){return function(){var a=Object(R.a)(k.a.mark((function a(t){return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,D.a.delete(I,{data:e}).then(function(){var e=Object(R.a)(k.a.mark((function e(a){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.data,e.next=3,t({type:"DELETE_TRANSACTIONS",payload:n});case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){console.error("Error in deleting transaction",e)}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(a))}}}))(oe),ue=t(52),se=t(692),me=t(268),pe=t(270),de=t(348),Ee=t(273),fe=Object(i.a)((function(e){return{formControl:{minWidth:242}}}));function be(e){var a=Object(S.c)(),t=Object(S.d)((function(e){return e.maintenanceReducer.lookup}));Object(n.useEffect)((function(){a(H())}),[a]);var c=fe(),l=r.a.useState(""),i=Object(o.a)(l,2),u=i[0],s=i[1];return r.a.createElement(me.a,{className:c.formControl},r.a.createElement(pe.a,{id:"flat-label"},"Flat Number"),r.a.createElement(Ee.a,{labelId:"flat-label",id:"flat-label",value:u,onChange:function(a){return function(a){a.preventDefault(),s(a.target.value),e.flatSelected(a.target.value)}(a)}},t.map((function(e){return r.a.createElement(de.a,{key:e.flatNumber,value:e},e.flatNumber," ",e.ownerName)}))))}var ge=t(413),he=t(34),ve=t(698);function Oe(e){var a=r.a.useState(new Date),t=Object(o.a)(a,2),n=t[0],c=t[1];return r.a.createElement(he.a,{utils:ge.a},r.a.createElement(ve.a,{required:!0,disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"txnDate",value:n,onChange:function(a){c(a),e.txnDate(a)},label:"Transaction Date",KeyboardButtonProps:{"aria-label":"change date"}}))}var ye=t(414),je=t(402);function Ne(e){var a=e.inputRef,t=e.onChange,n=Object(ye.a)(e,["inputRef","onChange"]);return r.a.createElement(je.a,Object.assign({},n,{getInputRef:a,onValueChange:function(e){t({target:{value:e.value}})},thousandSeparator:!0,isNumericString:!0,prefix:"\u20b9"}))}var xe=t(357),Te=Object(S.b)((function(e){return{fixedMaintenance:null===e.maintenanceReducer.flatLookup?0:e.maintenanceReducer.flatLookup.expectedMaintenance}}),null)((function(e){var a=r.a.useState(e.fixedMaintenance),t=Object(o.a)(a,2),n=t[0],c=t[1];return r.a.createElement(xe.a,{required:!0,id:"actualPayment",defaultValue:0===n?0:e.fixedMaintenance,value:0===n?e.fixedMaintenance:n,onChange:function(a){c(a.target.value),e.actualPayment(a.target.value)},InputProps:{inputComponent:Ne},label:"Actual Payment",fullWidth:!0})})),we=Object(S.b)((function(e){return{fixedMaintenance:null===e.maintenanceReducer.flatLookup?0:e.maintenanceReducer.flatLookup.expectedMaintenance}}),null)((function(e){return r.a.createElement(xe.a,{disabled:!0,value:e.fixedMaintenance,id:"expectedPayment",label:"Expected Payment"})})),Me=t(214),Ae=t.n(Me),Se=t(403),Ce=t.n(Se),ke=t(353),Re=Object(i.a)((function(e){return{button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)}}})),Fe=function(e){var a=Re();return r.a.createElement(ke.a,{variant:"contained",color:"primary",onClick:function(){e.passAction()},className:a.button},"Save")},De=t(701),_e=t(356),Pe=t(354),Le=t(673),Ie=Object(i.a)((function(e){return{formControl:{marginTop:e.spacing(10)}}}));function Ye(e){var a=Ie();return r.a.createElement(me.a,{component:"fieldset",className:a.formControl},r.a.createElement(Le.a,{component:"legend"},"Mode of Payment"),r.a.createElement(_e.a,{row:!0,"aria-label":"position",name:"position",defaultValue:"top",onChange:function(a){return function(a){a.preventDefault(),e.paymentMode(a.target.value)}(a)}},r.a.createElement(Pe.a,{value:"online",control:r.a.createElement(De.a,{color:"primary"}),label:"Online",labelPlacement:"start"}),r.a.createElement(Pe.a,{value:"cash",control:r.a.createElement(De.a,{color:"secondary"}),label:"Cash",labelPlacement:"start"})))}var Be=Object(i.a)((function(e){return{formControl:{minWidth:120,marginTop:e.spacing(2)}}}));function Ue(e){var a=Be(),t=r.a.useState((new Date).getMonth()),n=Object(o.a)(t,2),c=n[0],l=n[1];return r.a.createElement("div",null,r.a.createElement(me.a,{className:a.formControl},r.a.createElement(pe.a,{id:"demo-simple-select-label"},"Month"),r.a.createElement(Ee.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:c,onChange:function(a){a.preventDefault(),l(a.target.value),e.selectedMonth(a.target.value)}},r.a.createElement(de.a,{value:0},"JAN"),r.a.createElement(de.a,{value:1},"FEB"),r.a.createElement(de.a,{value:2},"MAR"),r.a.createElement(de.a,{value:3},"APR"),r.a.createElement(de.a,{value:4},"MAY"),r.a.createElement(de.a,{value:5},"JUN"),r.a.createElement(de.a,{value:6},"JUL"),r.a.createElement(de.a,{value:7},"AUG"),r.a.createElement(de.a,{value:8},"SEP"),r.a.createElement(de.a,{value:9},"OCT"),r.a.createElement(de.a,{value:10},"NOV"),r.a.createElement(de.a,{value:11},"DEC"))))}var He=Object(i.a)((function(e){return{formControl:{minWidth:120,marginTop:e.spacing(2)}}}));function Je(e){var a=He(),t=r.a.useState((new Date).getFullYear()),n=Object(o.a)(t,2),c=n[0],l=n[1];return r.a.createElement("div",null,r.a.createElement(me.a,{className:a.formControl},r.a.createElement(pe.a,{id:"year-select-label"},"Year"),r.a.createElement(Ee.a,{labelId:"year-select-label",id:"year-select",value:c,onChange:function(a){a.preventDefault(),l(a.target.value),e.selectedYear(a.target.value)}},r.a.createElement(de.a,{value:2020},"2020"),r.a.createElement(de.a,{value:2021},"2021"),r.a.createElement(de.a,{value:2022},"2022"))))}var Ge=t(696),We=t(700);function Ve(e){return r.a.createElement(We.a,Object.assign({elevation:6,variant:"filled"},e))}var Ke=Object(i.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),Xe=function(e){var a=Ke(),t=r.a.useState(!0),n=Object(o.a)(t,2),c=n[0],l=n[1],i=function(e,a){"clickaway"!==a&&l(!1)};return r.a.createElement("div",{className:a.root},r.a.createElement(Ge.a,{open:c,autoHideDuration:5e3,onClose:i},r.a.createElement(Ve,{onClose:i,severity:"info"},e.message)))},ze=Object(i.a)((function(e){return{appBar:{position:"relative"},layout:Object(ue.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:800,marginLeft:"auto",marginRight:"auto"}),paper:Object(ue.a)({marginTop:e.spacing(1),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(2),marginBottom:e.spacing(6),padding:e.spacing(3)}),buttons:{display:"flex",justifyContent:"flex-end"}}})),qe=Object(S.b)((function(e){return{txnResponseProp:e.maintenanceReducer.txnResponse}}),(function(e){return{saveAction:function(a){return e((t=a,function(){var e=Object(R.a)(k.a.mark((function e(a){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.post(Y,t).then(function(){var e=Object(R.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.data,e.next=3,a({type:"SAVE_TRANSACTION",payload:n});case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){console.error("Error in saving transaction",e)}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()));var t}}}))((function(e){var a=ze(),t=Object(S.c)(),c=Object(n.useState)({}),l=Object(o.a)(c,2),i=l[0],u=l[1],s=Object(n.useState)(new Date),m=Object(o.a)(s,2),p=m[0],d=m[1],f=Object(n.useState)(0),b=Object(o.a)(f,2),g=b[0],h=b[1],v=Object(n.useState)("online"),O=Object(o.a)(v,2),y=O[0],j=O[1],N=Object(n.useState)((new Date).getMonth()),x=Object(o.a)(N,2),T=x[0],w=x[1],M=Object(n.useState)((new Date).getFullYear()),A=Object(o.a)(M,2),C=A[0],F=A[1],D=e.txnResponseProp,_=function(){var a=Object(R.a)(k.a.mark((function a(){var t,n,r;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=i.flatNumber,n=i.expectedMaintenance,r={flatNumber:t,expectedMaintenance:n,actualPayment:g=0===g?n:g,txnDate:p,selectedMonth:T,selectedYear:C,paymentMode:y},console.log(r),a.next=7,e.saveAction(r);case 7:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ae.a,null),r.a.createElement("main",{className:a.layout},r.a.createElement(Ce.a,{className:a.paper},r.a.createElement(E.a,{component:"h1",variant:"h5",align:"center"},"Add Maintenance"),r.a.createElement(se.a,{container:!0,spacing:2},r.a.createElement(se.a,{item:!0,xs:12,sm:4},r.a.createElement(be,{flatSelected:function(e){u(e),t({type:"INDIVIDUAL_FLAT_LOOKUP",payload:e})}})),r.a.createElement(se.a,{item:!0,xs:12,sm:4},r.a.createElement(we,null)),r.a.createElement(se.a,{item:!0,xs:12,sm:4},r.a.createElement(Te,{actualPayment:function(e){h(e),t({type:"SET_TXN_AMOUNT",payload:e})}})),r.a.createElement(se.a,{item:!0,xs:12,sm:4},r.a.createElement(Oe,{txnDate:function(e){d(e),t({type:"SET_TXN_DATE",payload:e})}})),r.a.createElement(se.a,{item:!0,xs:12,sm:4},r.a.createElement(Ue,{selectedMonth:function(e){w(e),t({type:"SET_MONTH",payload:e})}})),r.a.createElement(se.a,{item:!0,xs:12,sm:4},r.a.createElement(Je,{selectedYear:function(e){F(e),t({type:"SET_YEAR",payload:e})}})),r.a.createElement(se.a,{item:!0,xs:12,sm:6},r.a.createElement(Ye,{paymentMode:function(e){j(e),t({type:"SET_PAYMENT_MODE",payload:e})}}))),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.buttons},r.a.createElement(Fe,{passAction:function(){return _()}}))))),D&&r.a.createElement(Xe,{message:D.infoMessage}))})),$e=t(90),Qe=t(694),Ze=t(702),ea=t(111),aa=t(346),ta=Object(i.a)((function(e){return{appBar:{position:"relative"},demo:{backgroundColor:e.palette.background.paper},title:{margin:e.spacing(4,0,2)},red:{color:e.palette.getContrastText(ea.a[500]),backgroundColor:ea.a[500],width:e.spacing(5),height:e.spacing(5)},layout:Object(ue.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(ue.a)({marginTop:e.spacing(1),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(2),marginBottom:e.spacing(6),padding:e.spacing(3)}),gridPaper:{height:325,width:100},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},root:{flexGrow:1,padding:e.spacing(2)}}})),na=Object(S.b)((function(e){return{pendingTxnData:e.maintenanceReducer.pendingTxns}}),null)((function(e){var a=ta(),t=Object(S.c)(),n=r.a.useState((new Date).getMonth()),c=Object(o.a)(n,2),l=c[0],i=c[1],u=r.a.useState((new Date).getFullYear()),s=Object(o.a)(u,2),m=s[0],p=s[1],g=Object.keys(e.pendingTxnData),v=Object.values(e.pendingTxnData);return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement(Ae.a,null),r.a.createElement("main",{className:a.layout},r.a.createElement($e.a,{className:a.paper},r.a.createElement(E.a,{component:"h1",variant:"h5",align:"center"},"Pending Maintenance"),r.a.createElement(se.a,{container:!0,spacing:2},r.a.createElement(se.a,{item:!0,xs:12,sm:6},r.a.createElement(Ue,{selectedMonth:function(e){i(e)}})),r.a.createElement(se.a,{item:!0,xs:12,sm:6},r.a.createElement(Je,{selectedYear:function(e){p(e)}}))),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.buttons},r.a.createElement(ke.a,{variant:"contained",color:"primary",onClick:function(e){var a,n;e.preventDefault(),console.log(l,m),t((a=l+1,n=m,function(){var e=Object(R.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get(U+a+"/"+n).then(function(){var e=Object(R.a)(k.a.mark((function e(a){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.data,e.next=3,t({type:"PENDING_TRANSACTIONS",payload:n});case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){console.error("Error in fetching pending transactions",e)}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()))},className:a.button},"Fetch")))))),r.a.createElement(f.a,null),r.a.createElement(se.a,{container:!0,className:a.root,spacing:2},r.a.createElement(se.a,{item:!0,xs:12},r.a.createElement(se.a,{container:!0,justify:"center",spacing:10},r.a.createElement(se.a,{key:g[0],item:!0},r.a.createElement(E.a,{variant:"h6",className:a.title},"Ground Floor"),r.a.createElement("div",{className:a.demo},r.a.createElement(d.a,{dense:!0},v[g[0]]&&v[g[0]].map((function(e){return r.a.createElement(aa.a,{title:e.ownerName,placement:"left-start"},r.a.createElement(b.a,null,r.a.createElement(Qe.a,null,r.a.createElement(Ze.a,{className:a.red,variant:"rounded"},e.ownerName.charAt(0))),r.a.createElement(h.a,{primary:e.flatNumber})))}))))),r.a.createElement(se.a,{key:g[1],item:!0},r.a.createElement(E.a,{variant:"h6",className:a.title},"1st Floor"),r.a.createElement("div",{className:a.demo},r.a.createElement(d.a,{dense:!0},v[g[1]]&&v[g[1]].map((function(e){return r.a.createElement(aa.a,{title:e.ownerName,placement:"left-start"},r.a.createElement(b.a,null,r.a.createElement(Qe.a,null,r.a.createElement(Ze.a,{className:a.red,variant:"rounded"},e.ownerName.charAt(0))),r.a.createElement(h.a,{primary:e.flatNumber})))}))))),r.a.createElement(se.a,{key:g[2],item:!0},r.a.createElement(E.a,{variant:"h6",className:a.title},"2nd Floor"),r.a.createElement("div",{className:a.demo},r.a.createElement(d.a,{dense:!0},v[g[2]]&&v[g[2]].map((function(e){return r.a.createElement(aa.a,{title:e.ownerName,placement:"left-start"},r.a.createElement(b.a,null,r.a.createElement(Qe.a,null,r.a.createElement(Ze.a,{className:a.red,variant:"rounded"},e.ownerName.charAt(0))),r.a.createElement(h.a,{primary:e.flatNumber})))}))))),r.a.createElement(se.a,{key:g[3],item:!0},r.a.createElement(E.a,{variant:"h6",className:a.title},"3rd Floor"),r.a.createElement("div",{className:a.demo},r.a.createElement(d.a,{dense:!0},v[g[3]]&&v[g[3]].map((function(e){return r.a.createElement(aa.a,{title:e.ownerName,placement:"left-start"},r.a.createElement(b.a,null,r.a.createElement(Qe.a,null,r.a.createElement(Ze.a,{className:a.red,variant:"rounded"},e.ownerName.charAt(0))),r.a.createElement(h.a,{primary:e.flatNumber})))}))))),r.a.createElement(se.a,{key:g[4],item:!0},r.a.createElement(E.a,{variant:"h6",className:a.title},"4th Floor"),r.a.createElement("div",{className:a.demo},r.a.createElement(d.a,{dense:!0},v[g[4]]&&v[g[4]].map((function(e){return r.a.createElement(aa.a,{title:e.ownerName,placement:"left-start"},r.a.createElement(b.a,null,r.a.createElement(Qe.a,null,r.a.createElement(Ze.a,{className:a.red,variant:"rounded"},e.ownerName.charAt(0))),r.a.createElement(h.a,{primary:e.flatNumber})))})))))))))})),ra=t(9),ca=t(277),la=t(340),oa=t(342),ia=t(343),ua=t(697),sa=t(345),ma=t(344),pa=t(264),da=t(272),Ea=t.n(da),fa=t(404),ba=t.n(fa),ga=t(275),ha=t.n(ga),va=Object(i.a)((function(e){return{layout:Object(ue.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:800,marginLeft:"auto",marginRight:"auto"}),paper:Object(ue.a)({marginTop:e.spacing(1),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(2),marginBottom:e.spacing(6),padding:e.spacing(3)})}})),Oa=function(e){Object(q.a)(t,e);var a=Object($.a)(t);function t(){var e;Object(X.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={rows:[]},e.handleAddRow=function(){var a={flatNumber:"",txnDate:new Date,selectedMonth:(new Date).toLocaleString("default",{month:"long"}),selectedYear:(new Date).getFullYear(),actualPayment:"",paymentMode:""};e.setState({rows:[].concat(Object(ca.a)(e.state.rows),[a])})},e.handleRemoveRow=function(a){console.log(a);var t=Array.from(e.state.rows);a>-1&&t.splice(a,1),e.setState({rows:t})},e.handleChange=function(a){return function(t){var n=t.target,r=n.name,c=n.value,l=Object(ca.a)(e.state.rows);l[a]=Object(ra.a)(Object(ra.a)({},l[a]),{},Object(ue.a)({},r,c)),e.setState({rows:l})}},e.handleSaveAction=function(){console.log(e.state.rows),e.props.saveBatch(e.state.rows)},e}return Object(z.a)(t,[{key:"render",value:function(){var e=this,a=va;return r.a.createElement("main",{className:a.layout},r.a.createElement($e.a,{className:a.paper},r.a.createElement(E.a,{component:"h1",variant:"h5",align:"center"},"Add Maintenance"),r.a.createElement(ua.a,{component:$e.a},r.a.createElement(ha.a,{title:"Add Entry",placement:"top"},r.a.createElement(pa.a,{"aria-label":"add",onClick:this.handleAddRow},r.a.createElement(x.a,null))),r.a.createElement(ha.a,{title:"Save",placement:"top"},r.a.createElement("span",null,r.a.createElement(pa.a,{"aria-label":"save",disabled:0===this.state.rows.length,onClick:this.handleSaveAction},r.a.createElement(ba.a,null)))),r.a.createElement(la.a,{size:"small","aria-label":"a dense table"},r.a.createElement(sa.a,null,r.a.createElement(ma.a,null,r.a.createElement(ia.a,{style:{backgroundColor:"#000000",color:"#FFFFFF"}},"#\xa0"),r.a.createElement(ia.a,{style:{backgroundColor:"#000000",color:"#FFFFFF"},align:"right"},"Flat Number"),r.a.createElement(ia.a,{style:{backgroundColor:"#000000",color:"#FFFFFF"},align:"right"},"Month"),r.a.createElement(ia.a,{style:{backgroundColor:"#000000",color:"#FFFFFF"},align:"right"},"Year"),r.a.createElement(ia.a,{style:{backgroundColor:"#000000",color:"#FFFFFF"},align:"right"},"Actual Payment"),r.a.createElement(ia.a,{style:{backgroundColor:"#000000",color:"#FFFFFF"},align:"right"},"Payment Mode"),r.a.createElement(ia.a,{style:{backgroundColor:"#000000",color:"#FFFFFF"},align:"right"},"Delete"))),r.a.createElement(oa.a,null,this.state.rows.map((function(a,t){return r.a.createElement(ma.a,{key:t},r.a.createElement(ia.a,{component:"th",scope:"row"},t),r.a.createElement(ia.a,{align:"right"},r.a.createElement("input",{type:"text",name:"flatNumber",value:a.flatNumber,onChange:e.handleChange(t),className:"form-control"})),r.a.createElement(ia.a,{align:"right"},r.a.createElement("input",{type:"text",name:"month",value:a.selectedMonth,onChange:e.handleChange(t),className:"form-control"})),r.a.createElement(ia.a,{align:"right"},r.a.createElement("input",{type:"text",name:"year",value:a.selectedYear,onChange:e.handleChange(t),className:"form-control"})),r.a.createElement(ia.a,{align:"right"},r.a.createElement("input",{type:"text",name:"actualPayment",value:a.actualPayment,onChange:e.handleChange(t),className:"form-control"})),r.a.createElement(ia.a,{align:"right"},r.a.createElement("select",{name:"paymentMode",id:"mode",className:"form-control",onChange:e.handleChange(t),value:a.paymentMode},r.a.createElement("option",{value:"online"},"Online"),r.a.createElement("option",{value:"cash"},"Cash"))),r.a.createElement(ia.a,{align:"right"},r.a.createElement(pa.a,{"aria-label":"delete",onClick:function(){return e.handleRemoveRow(t)}},r.a.createElement(Ea.a,null))))})))))))}}]),t}(n.Component),ya=Object(S.b)((function(e){return{txnResponseProp:e.maintenanceReducer.txnResponse}}),(function(e){return{saveBatch:function(a){return e(function(e){return function(){var a=Object(R.a)(k.a.mark((function a(t){return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,D.a.post(B,e).then(function(){var e=Object(R.a)(k.a.mark((function e(a){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.data,e.next=3,t({type:"SAVE_TRANSACTION",payload:n});case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){console.error("Error in saving transaction batch",e)}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(a))}}}))(Oa),ja=Object(i.a)((function(e){return{root:{display:"flex"},appBar:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)}}})),Na=function(){var e=ja(),a=r.a.useState(0),t=Object(o.a)(a,2),n=t[0],c=t[1],l=function(e){c(e)};return r.a.createElement("div",{className:e.root},r.a.createElement(s.a,null),r.a.createElement(m.a,{position:"fixed",className:e.appBar},r.a.createElement(p.a,null,r.a.createElement(E.a,{variant:"h6",noWrap:!0},"Sriven Maintenance Ledger"))),r.a.createElement(u.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper},anchor:"left"},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(f.a,{component:"div"}),r.a.createElement(d.a,null,r.a.createElement(b.a,{button:!0,key:"flatLookup",onClick:function(){return l(0)}},r.a.createElement(g.a,null,r.a.createElement(j.a,null)),r.a.createElement(h.a,{primary:"Flat Lookup"}))),r.a.createElement(f.a,null),r.a.createElement(d.a,null,r.a.createElement(b.a,{button:!0,key:"getAllTxns",onClick:function(){return l(1)}},r.a.createElement(g.a,null,r.a.createElement(O.a,null)),r.a.createElement(h.a,{primary:"All Transactions"}))),r.a.createElement(f.a,null),r.a.createElement(d.a,null,r.a.createElement(b.a,{button:!0,key:"addMaintenance",onClick:function(){return l(2)}},r.a.createElement(g.a,null,r.a.createElement(x.a,null)),r.a.createElement(h.a,{primary:"Add Maintenance"}))),r.a.createElement(f.a,null),r.a.createElement(d.a,null,r.a.createElement(b.a,{button:!0,key:"addMultipleMaintenance",onClick:function(){return l(3)}},r.a.createElement(g.a,null,r.a.createElement(w.a,null)),r.a.createElement(h.a,{primary:"Batch Add"}))),r.a.createElement(f.a,null),r.a.createElement(d.a,null,r.a.createElement(b.a,{button:!0,key:"pendingTxns",onClick:function(){return l(4)}},r.a.createElement(g.a,null,r.a.createElement(A.a,null)),r.a.createElement(h.a,{primary:"Pending Maintenance"}))),r.a.createElement(f.a,null)),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.toolbar}),0===n&&r.a.createElement(K,null),1===n&&r.a.createElement(ie,null),2===n&&r.a.createElement(qe,null),3===n&&r.a.createElement(ya,null),4===n&&r.a.createElement(na,null)))};var xa=function(){return r.a.createElement(Na,null)},Ta=t(72),wa=t(699),Ma={employees:[],managers:[],currentEmployee:{},jobHistory:[]},Aa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ma,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LIST_EMPLOYEES":return Object(ra.a)(Object(ra.a)({},e),{},{employees:a.payload});case"LIST_MANAGERS":return Object(ra.a)(Object(ra.a)({},e),{},{managers:a.payload});case"SET_CURRENT_EMPLOYEE":return Object(ra.a)(Object(ra.a)({},e),{},{currentEmployee:a.payload});case"DELETE_EMPLOYEE":return Object(ra.a)(Object(ra.a)({},e),{},{employees:a.payload});case"JOB_HISTORY_SUCCESS":return Object(ra.a)(Object(ra.a)({},e),{},{jobHistory:a.payload});default:return e}},Sa={jobs:[],selectedJobTitle:""},Ca=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Sa,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LIST_JOBS":return Object(ra.a)(Object(ra.a)({},e),{},{jobs:a.payload});case"SELECTED_JOB":return Object(ra.a)(Object(ra.a)({},e),{},{selectedJobTitle:a.payload});default:return e}},ka={firstName:"",lastName:"",email:"",phoneNumber:"",hireDate:"",jobId:"",salary:0,commissionPct:0,managerId:0,departmentId:0},Ra=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ka,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_EMPLOYEE_FIRST_NAME":return Object(ra.a)(Object(ra.a)({},e),{},{firstName:a.payload});case"SET_EMPLOYEE_LAST_NAME":return Object(ra.a)(Object(ra.a)({},e),{},{lastName:a.payload});case"SET_EMPLOYEE_EMAIL":return Object(ra.a)(Object(ra.a)({},e),{},{email:a.payload});case"SET_EMPLOYEE_PHONE":return Object(ra.a)(Object(ra.a)({},e),{},{phoneNumber:a.payload});case"SET_EMPLOYEE_HIRE_DATE":return Object(ra.a)(Object(ra.a)({},e),{},{hireDate:a.payload});case"SET_EMPLOYEE_SALARY":return Object(ra.a)(Object(ra.a)({},e),{},{salary:a.payload});case"SET_EMPLOYEE_JOB_ID":return Object(ra.a)(Object(ra.a)({},e),{},{jobId:a.payload});case"SET_EMPLOYEE_COMMISSION":return Object(ra.a)(Object(ra.a)({},e),{},{commissionPct:a.payload});case"SET_EMPLOYEE_MANAGER":return Object(ra.a)(Object(ra.a)({},e),{},{managerId:a.payload});case"SET_EMPLOYEE_DEPT":return Object(ra.a)(Object(ra.a)({},e),{},{departmentId:a.payload});default:return e}},Fa={lookup:[],flatLookup:null,txnData:[],txnDate:null,txnAmount:0,paymentMode:"online",selectedMonth:(new Date).getMonth(),selectedYear:(new Date).getFullYear(),txnResponse:null,pendingTxns:new Map},Da={lookup:[],flatLookup:null,txnData:[],txnDate:null,txnAmount:0,paymentMode:"online",selectedMonth:(new Date).getMonth(),selectedYear:(new Date).getFullYear(),txnResponse:null,pendingTxns:new Map},_a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fa,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FLAT_LOOKUP":return Object(ra.a)(Object(ra.a)({},e),{},{lookup:a.payload});case"INDIVIDUAL_FLAT_LOOKUP":return Object(ra.a)(Object(ra.a)({},e),{},{flatLookup:a.payload});case"SET_TXN_DATE":return Object(ra.a)(Object(ra.a)({},e),{},{txnDate:a.payload});case"SET_TXN_AMOUNT":return Object(ra.a)(Object(ra.a)({},e),{},{txnAmount:a.payload});case"SET_PAYMENT_MODE":return Object(ra.a)(Object(ra.a)({},e),{},{paymentMode:a.payload});case"SET_MONTH":return Object(ra.a)(Object(ra.a)({},e),{},{selectedMonth:a.payload});case"SET_YEAR":return Object(ra.a)(Object(ra.a)({},e),{},{selectedYear:a.payload});case"SAVE_TRANSACTION":return Object(ra.a)(Object(ra.a)({},e),{},{txnResponse:a.payload});case"GET_ALL_TRANSACTIONS":case"UPDATE_TRANSACTIONS":return Object(ra.a)(Object(ra.a)({},e),{},{txnData:a.payload});case"DELETE_TRANSACTIONS":return Object(ra.a)(Object(ra.a)({},e),{},{txnResponse:a.payload});case"PENDING_TRANSACTIONS":return Object(ra.a)(Object(ra.a)({},e),{},{pendingTxns:a.payload});case"RESET_TRANSACTION":return{state:Da};default:return e}},Pa=Object(Ta.combineReducers)({form:wa.a,empReducer:Aa,jobIdReducer:Ca,newEmployeeReducer:Ra,maintenanceReducer:_a}),La=t(411),Ia=t(412),Ya=Object(Ta.createStore)(Pa,Object(Ia.composeWithDevTools)(Object(Ta.applyMiddleware)(La.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(S.a,{store:Ya},r.a.createElement(xa,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[423,1,2]]]);
//# sourceMappingURL=main.d99f4a15.chunk.js.map