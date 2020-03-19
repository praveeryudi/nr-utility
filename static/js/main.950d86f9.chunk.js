(this["webpackJsonplog-analyzer"]=this["webpackJsonplog-analyzer"]||[]).push([[0],{295:function(e,a,t){e.exports=t(417)},300:function(e,a,t){},301:function(e,a,t){},417:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),i=t.n(l),o=(t(300),t(301),t(61)),c=t(138),m=t(38),s=t(454),u=t(458),p=t(239),d=t(424),E=t(50),f=t(459),g=t(426),h=t(460),b=t(237),y=t(278),v=t.n(y),x=t(279),w=t.n(x),O=t(67),S=t(72),j=t(455),N=t(456),C=t(457),I=t(238),P=t(442),k=t(236),B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{container:!0,spacing:2},r.a.createElement(P.a,{item:!0,xs:12,sm:6},r.a.createElement(k.a,{required:!0,id:"firstName",name:"firstName",label:"First name",fullWidth:!0})),r.a.createElement(P.a,{item:!0,xs:12,sm:6},r.a.createElement(k.a,{required:!0,id:"lastName",name:"lastName",label:"Last name",fullWidth:!0})),r.a.createElement(P.a,{item:!0,xs:12,sm:6},r.a.createElement(k.a,{required:!0,id:"email",name:"email",label:"Email",fullWidth:!0})),r.a.createElement(P.a,{item:!0,xs:12,sm:6},r.a.createElement(k.a,{required:!0,id:"phone",name:"phone",label:"Phone",fullWidth:!0}))))},R=[{name:"Product 1",desc:"A nice thing",price:"$9.99"},{name:"Product 2",desc:"Another thing",price:"$3.45"},{name:"Product 3",desc:"Something else",price:"$6.51"},{name:"Product 4",desc:"Best thing of all",price:"$14.11"},{name:"Shipping",desc:"",price:"Free"}],W=["1 Material-UI Drive","Reactville","Anytown","99999","USA"],T=[{name:"Card type",detail:"Visa"},{name:"Card holder",detail:"Mr John Smith"},{name:"Card number",detail:"xxxx-xxxx-xxxx-1234"},{name:"Expiry date",detail:"04/2024"}],L=Object(c.a)((function(e){return{listItem:{padding:e.spacing(1,0)},total:{fontWeight:700},title:{marginTop:e.spacing(2)}}})),F=function(){var e=L();return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{variant:"h6",gutterBottom:!0},"Order summary"),r.a.createElement(d.a,{disablePadding:!0},R.map((function(a){return r.a.createElement(g.a,{className:e.listItem,key:a.name},r.a.createElement(b.a,{primary:a.name,secondary:a.desc}),r.a.createElement(E.a,{variant:"body2"},a.price))})),r.a.createElement(g.a,{className:e.listItem},r.a.createElement(b.a,{primary:"Total"}),r.a.createElement(E.a,{variant:"subtitle1",className:e.total},"$34.06"))),r.a.createElement(P.a,{container:!0,spacing:2},r.a.createElement(P.a,{item:!0,xs:12,sm:6},r.a.createElement(E.a,{variant:"h6",gutterBottom:!0,className:e.title},"Shipping"),r.a.createElement(E.a,{gutterBottom:!0},"John Smith"),r.a.createElement(E.a,{gutterBottom:!0},W.join(", "))),r.a.createElement(P.a,{item:!0,container:!0,direction:"column",xs:12,sm:6},r.a.createElement(E.a,{variant:"h6",gutterBottom:!0,className:e.title},"Payment details"),r.a.createElement(P.a,{container:!0},T.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.name},r.a.createElement(P.a,{item:!0,xs:6},r.a.createElement(E.a,{gutterBottom:!0},e.name)),r.a.createElement(P.a,{item:!0,xs:6},r.a.createElement(E.a,{gutterBottom:!0},e.detail)))}))))))},D=t(448),H=function(){return r.a.createElement(E.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(D.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")},J=t(73),M=t(284),A=t(274);function Y(e){var a=e.inputRef,t=e.onChange,n=Object(M.a)(e,["inputRef","onChange"]);return r.a.createElement(A.a,Object.assign({},n,{getInputRef:a,onValueChange:function(e){t({target:{value:e.value}})},thousandSeparator:!0,isNumericString:!0,prefix:"\u20b9"}))}function _(){var e,a=r.a.useState({numberformat:"1320"}),t=Object(o.a)(a,2),n=t[0],l=t[1];return r.a.createElement(k.a,{required:!0,id:"salary",value:n.numberformat,onChange:(e="numberformat",function(a){l(Object(J.a)({},n,Object(O.a)({},e,a.target.value)))}),InputProps:{inputComponent:Y},label:"Fixed Salary",fullWidth:!0})}function q(){return r.a.createElement(k.a,{type:"number",id:"commissionPct",label:"Commission%",fullWidth:!0})}function U(){return r.a.createElement(k.a,{required:!0,id:"managerId",label:"Manager",fullWidth:!0})}function $(){return r.a.createElement(k.a,{required:!0,id:"jobId",label:"Job Id",fullWidth:!0})}function z(){return r.a.createElement(k.a,{required:!0,id:"deptId",label:"Department",fullWidth:!0})}var V=t(283),G=t(23),K=t(461);function Q(){var e=r.a.useState(new Date),a=Object(o.a)(e,2),t=a[0],n=a[1];return r.a.createElement(G.a,{utils:V.a},r.a.createElement(K.a,{disableToolbar:!0,fullWidth:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"hireDate",label:"Hire Date",value:t,onChange:function(e){n(e)},KeyboardButtonProps:{"aria-label":"change date"}}))}var X=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{container:!0,spacing:3},r.a.createElement(P.a,{item:!0,xs:12,md:6},r.a.createElement(Q,null)),r.a.createElement(P.a,{item:!0,xs:12,md:6},r.a.createElement($,null)),r.a.createElement(P.a,{item:!0,xs:12,md:6},r.a.createElement(_,null)),r.a.createElement(P.a,{item:!0,xs:12,md:6},r.a.createElement(q,null)),r.a.createElement(P.a,{item:!0,xs:12,md:6},r.a.createElement(U,null)),r.a.createElement(P.a,{item:!0,xs:12,md:6},r.a.createElement(z,null))))},Z=Object(c.a)((function(e){return{appBar:{position:"relative"},layout:Object(O.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(O.a)({marginTop:e.spacing(1),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(2),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)}}})),ee=["Personal Details","Job Details","Review"];var ae=function(){var e=Z(),a=r.a.useState(0),t=Object(o.a)(a,2),n=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null),r.a.createElement("main",{className:e.layout},r.a.createElement(S.a,{className:e.paper},r.a.createElement(E.a,{component:"h1",variant:"h5",align:"center"},"Add Employee"),r.a.createElement(j.a,{activeStep:n,className:e.stepper},ee.map((function(e){return r.a.createElement(N.a,{key:e},r.a.createElement(C.a,null,e))}))),r.a.createElement(r.a.Fragment,null,n===ee.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{variant:"h5",gutterBottom:!0},"Thank you for your order."),r.a.createElement(E.a,{variant:"subtitle1"},"Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped.")):r.a.createElement(r.a.Fragment,null,function(e){switch(e){case 0:return r.a.createElement(B,null);case 1:return r.a.createElement(X,null);case 2:return r.a.createElement(F,null);default:throw new Error("Unknown step")}}(n),r.a.createElement("div",{className:e.buttons},0!==n&&r.a.createElement(I.a,{onClick:function(){l(n-1)},className:e.button},"Back"),r.a.createElement(I.a,{variant:"contained",color:"primary",onClick:function(){l(n+1)},className:e.button},n===ee.length-1?"Place order":"Next"))))),r.a.createElement(H,null)))},te=t(156),ne=t(74),re=t.n(ne),le=t(186),ie=t.n(le),oe="praveeryudi-org.cfapps.io",ce="https://".concat(oe,"/employees"),me="http://".concat(oe,"/api/fetch/employee/jobHistory/"),se=t(276),ue=t.n(se),pe=Object(te.b)((function(e){return{employees:e.empReducer.employees}}),(function(e){return{fetchEmployees:function(){return e((function(e){return re.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,re.a.awrap(ie.a.get(ce).then((function(a){var t=a.data;e({type:"LIST_EMPLOYEES",payload:t})})).catch((function(e){console.error("Error in fetching employees list",e)})));case 2:case"end":return a.stop()}}))}))},fetchJobHistory:function(a){return e(function(e){return function(a){return re.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,re.a.awrap(ie.a.get(me,e).then((function(e){var t;return re.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.data,n.next=3,re.a.awrap(a({type:"JOB_HISTORY_SUCCESS",payload:t}));case 3:case"end":return n.stop()}}))})).catch((function(e){console.error(e)})));case 2:case"end":return t.stop()}}))}}(a))}}}))((function(e){var a=e.employees.length;Object(n.useEffect)((function(){e.fetchEmployees()}),[a]);var t=e.employees,l=[{name:"id",label:"Id",options:{filter:!0,sort:!0,customBodyRender:function(a){return r.a.createElement("a",{href:e.fetchJobHistory(a)},a)}}},{name:"firstName",label:"First Name",options:{filter:!0,sort:!0}},{name:"lastName",label:"Last Name",options:{filter:!0,sort:!0}},{name:"email",label:"Email",options:{filter:!0,sort:!1}},{name:"phoneNumber",label:"Phone",options:{filter:!0,sort:!1}},{name:"hireDate",label:"Hire Date",options:{filter:!1,sort:!0}},{name:"jobId",label:"Job Id",options:{filter:!0,sort:!1}},{name:"salary",label:"Salary",options:{filter:!1,sort:!0}},{name:"commissionPct",label:"Commission",options:{filter:!0,sort:!0}},{name:"managerId",label:"Manager Id",options:{filter:!0,sort:!1}},{name:"departmentId",label:"Department Id",options:{filter:!0,sort:!1}}];return r.a.createElement(ue.a,{title:"Employee List",data:t,columns:l,options:{filter:!0,filterType:"dropdown",responsive:"scrollMaxHeight",rowsPerPage:10,selectableRows:"none",fixedHeaderOptions:{xAxis:!1,yAxis:!0}}})})),de=Object(c.a)((function(e){return{root:{display:"flex"},appBar:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)}}})),Ee=function(){var e=de(),a=r.a.useState(0),t=Object(o.a)(a,2),n=t[0],l=t[1],i=function(e){l(e)};return r.a.createElement("div",{className:e.root},r.a.createElement(s.a,null),r.a.createElement(u.a,{position:"fixed",className:e.appBar},r.a.createElement(p.a,null,r.a.createElement(E.a,{variant:"h6",noWrap:!0},"elite HR System"))),r.a.createElement(m.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper},anchor:"left"},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(f.a,{component:"div"}),r.a.createElement(d.a,null,r.a.createElement(g.a,{button:!0,key:"allEmployees",onClick:function(){return i(0)}},r.a.createElement(h.a,null,r.a.createElement(v.a,null)),r.a.createElement(b.a,{primary:"All Employees"}))),r.a.createElement(f.a,null),r.a.createElement(d.a,null,r.a.createElement(g.a,{button:!0,key:"addEmployee",onClick:function(){return i(1)}},r.a.createElement(h.a,null,r.a.createElement(w.a,null)),r.a.createElement(b.a,{primary:"Add Employee"}))),r.a.createElement(f.a,null)),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.toolbar}),0===n&&r.a.createElement(pe,null),1===n&&r.a.createElement(ae,null)))};var fe=function(){return r.a.createElement(Ee,null)},ge=t(59),he=t(462),be={employees:[],currentEmployee:{},jobHistory:[]},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LIST_EMPLOYEES":return Object(J.a)({},e,{employees:a.payload});case"SET_CURRENT_EMPLOYEE":return Object(J.a)({},e,{currentEmployee:a.payload});case"DELETE_EMPLOYEE":return Object(J.a)({},e,{employees:a.payload});case"JOB_HISTORY_SUCCESS":return Object(J.a)({},e,{jobHistory:a.payload});default:return e}},ve=Object(ge.c)({form:he.a,empReducer:ye}),xe=t(282),we=Object(ge.d)(ve,Object(ge.a)(xe.a));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(te.a,{store:we},r.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[295,1,2]]]);
//# sourceMappingURL=main.950d86f9.chunk.js.map