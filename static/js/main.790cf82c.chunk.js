(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{20:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",btn:"ContactForm_btn__2Bpnz"}},26:function(t,e,n){t.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",info:"ContactList_info__DNDkd",btn:"ContactList_btn__1Xk4q"}},32:function(t,e,n){t.exports={label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},33:function(t,e,n){t.exports={wrapper:"ErrorView_wrapper__21hvW",img:"ErrorView_img__3R6JL",text:"ErrorView_text__2DYol"}},44:function(t,e,n){t.exports={container:"Container_container__3RIox"}},47:function(t,e,n){t.exports={overlay:"LoaderComponent_overlay__3-Jp5"}},97:function(t,e,n){},98:function(t,e,n){"use strict";n.r(e);var c={};n.r(c),n.d(c,"fetchContactsRequest",(function(){return p})),n.d(c,"fetchContactsSuccess",(function(){return x})),n.d(c,"fetchContactsError",(function(){return g})),n.d(c,"addContactRequest",(function(){return C})),n.d(c,"addContactSuccess",(function(){return v})),n.d(c,"addContactError",(function(){return _})),n.d(c,"deleteContactRequest",(function(){return E})),n.d(c,"deleteContactSuccess",(function(){return y})),n.d(c,"deleteContactError",(function(){return w})),n.d(c,"filterContact",(function(){return F}));var r={};n.r(r),n.d(r,"fetchContacts",(function(){return J})),n.d(r,"addContact",(function(){return M})),n.d(r,"deleteContact",(function(){return T}));var a={};n.r(a),n.d(a,"getContacts",(function(){return X})),n.d(a,"getLoading",(function(){return G})),n.d(a,"getError",(function(){return K})),n.d(a,"getFilter",(function(){return U})),n.d(a,"getVisibleContacts",(function(){return W}));var o,i,l,u=n(0),s=n.n(u),b=n(21),j=n.n(b),f=n(8),d=n(7),O=n(5),m=n(48),h=n(15),p=Object(d.b)("contacts/fetchContactsRequest"),x=Object(d.b)("contacts/fetchContactsSuccess"),g=Object(d.b)("contacts/fetchContactsError"),C=Object(d.b)("contacts/addContactRequest"),v=Object(d.b)("contacts/addContactSuccess"),_=Object(d.b)("contacts/addContactError"),E=Object(d.b)("contacts/deleteContactRequest"),y=Object(d.b)("contacts/deleteContactSuccess"),w=Object(d.b)("contacts/deleteContactError"),F=Object(d.b)("contacts/filter"),N=Object(d.c)([],(o={},Object(O.a)(o,x,(function(t,e){return e.payload})),Object(O.a)(o,v,(function(t,e){var n=e.payload;return[].concat(Object(m.a)(t),[n])})),Object(O.a)(o,y,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),o)),k=Object(d.c)(!1,(i={},Object(O.a)(i,p,(function(){return!0})),Object(O.a)(i,x,(function(){return!1})),Object(O.a)(i,g,(function(){return!1})),Object(O.a)(i,C,(function(){return!0})),Object(O.a)(i,v,(function(){return!1})),Object(O.a)(i,_,(function(){return!1})),Object(O.a)(i,E,(function(){return!0})),Object(O.a)(i,y,(function(){return!1})),Object(O.a)(i,w,(function(){return!1})),i)),L=Object(d.c)("",Object(O.a)({},F,(function(t,e){return e.payload}))),S=Object(d.c)(null,(l={},Object(O.a)(l,g,(function(t,e){return e.payload})),Object(O.a)(l,_,(function(t,e){return e.payload})),Object(O.a)(l,w,(function(t,e){return e.payload})),Object(O.a)(l,p,(function(){return null})),Object(O.a)(l,C,(function(){return null})),Object(O.a)(l,E,(function(){return null})),l)),R=Object(h.b)({items:N,filter:L,isLoading:k,error:S}),D=Object(d.a)({reducer:{contacts:R}}),q=n(19),B=(n(56),n(44)),I=n.n(B),P=n(2);var z=function(t){var e=t.children;return Object(P.jsx)("div",{className:I.a.container,children:e})},V=n(34),Z=n(25),A=n.n(Z);A.a.defaults.baseURL="http://localhost:4040";var J=function(){return function(t){t(p()),A.a.get("/contacts").then((function(e){var n=e.data;return t(x(n))})).catch((function(e){return t(g(e))}))}},M=function(t,e){return function(n){var c={name:t,number:e};n(C()),function(t){return A.a.post("/contacts",t)}(c).then((function(t){var e=t.data;return n(v(e))})).catch((function(t){return n(_(t))}))}},T=function(t){return function(e){e(E()),function(t){return A.a.delete("/contacts/".concat(t))}(t).then((function(){return e(y(t))})).catch((function(t){return e(w(t))}))}},Y=n(27),X=function(t){return t.contacts.items},G=function(t){return t.contacts.isLoading},K=function(t){return t.contacts.error},U=function(t){return t.contacts.filter},W=Object(Y.a)([X,U],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),$=n(45),H=n.n($),Q=n(46),tt=n.n(Q),et=(n(96),n(47)),nt=n.n(et);var ct=function(){return Object(P.jsx)("div",{className:nt.a.overlay,children:Object(P.jsx)(tt.a,{type:"ThreeDots",color:"#00BFFF",height:"32"})})},rt=n(20),at=n.n(rt);var ot=function(){var t=Object(f.b)(),e=Object(f.c)(a.getContacts),n=Object(f.c)(a.getLoading),c=Object(u.useState)(""),o=Object(V.a)(c,2),i=o[0],l=o[1],s=Object(u.useState)(""),b=Object(V.a)(s,2),j=b[0],d=b[1],O=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":l(c);break;case"number":d(c);break;default:return}},m=function(){l(""),d("")};return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("form",{className:at.a.form,onSubmit:function(n){n.preventDefault(),!function(t){return e.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))}(i)?!function(t){return e.find((function(e){return e.number===t}))}(j)?!function(t,e){return""===t.trim()||""===e.trim()}(i,j)?!function(t){return!/\d{3}[-]\d{2}[-]\d{2}/g.test(t)}(j)?t(r.addContact(i,j)):q.b.error("\ud83d\udca9 Enter the correct number phone!"):q.b.info("\ud83d\ude31 Enter the contact's name and number phone!"):Object(q.b)("\ud83e\udd14 ".concat(j," is already in the phonebook.")):Object(q.b)("\ud83e\udd14 ".concat(i," is already in the phonebook.")),m()},children:[Object(P.jsxs)("label",{className:at.a.label,children:["Name",Object(P.jsx)("input",{className:at.a.input,type:"text",autoComplete:"off",name:"name",value:i,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432.",onChange:O,placeholder:"Enter name (Ivanov Ivan)"})]}),Object(P.jsxs)("label",{className:at.a.label,children:["Phone Number",Object(P.jsx)(H.a,{className:at.a.input,options:{delimiter:"-",blocks:[3,2,2]},type:"tel",autoComplete:"off",name:"number",value:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:O,placeholder:"Enter numbe (111-11-11)"})]}),!n&&Object(P.jsx)("button",{className:at.a.btn,type:"submit",children:"Add contact"}),n&&Object(P.jsx)(ct,{})]})})},it=n(101),lt=n(100),ut={initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{ease:"easeOut",duration:.3}},st=n(32),bt=n.n(st);var jt=function(){var t=Object(f.b)(),e=Object(f.c)(a.getFilter),n=Object(f.c)(a.getContacts),r=Object(f.c)(a.getError);return Object(P.jsx)(P.Fragment,{children:n.length>0&&!r&&Object(P.jsx)(it.a,{children:Object(P.jsx)("label",{className:bt.a.label,children:Object(P.jsx)(lt.a.input,{initial:"initial",animate:"animate",exit:"exit",transition:"transition",variants:ut,className:bt.a.input,type:"text",value:e,onChange:function(e){return t(c.filterContact(e.target.value))}})})})})},ft=n.p+"static/media/error.48d1a1f7.jpg",dt=n(33),Ot=n.n(dt);var mt,ht,pt,xt,gt,Ct,vt,_t,Et,yt,wt,Ft,Nt,kt,Lt,St=function(t){var e=t.message;return Object(P.jsx)(it.a,{children:Object(P.jsxs)(lt.a.div,{role:"alert",className:Ot.a.wrapper,initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{ease:"easeOut",duration:.3},children:[Object(P.jsx)("img",{src:ft,width:"300",alt:"Sad PC"}),Object(P.jsx)("p",{text:e,className:Ot.a.text,children:e})]})})},Rt=["title","titleId"];function Dt(){return(Dt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t}).apply(this,arguments)}function qt(t,e){if(null==t)return{};var n,c,r=function(t,e){if(null==t)return{};var n,c,r={},a=Object.keys(t);for(c=0;c<a.length;c++)n=a[c],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(c=0;c<a.length;c++)n=a[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function Bt(t,e){var n=t.title,c=t.titleId,r=qt(t,Rt);return u.createElement("svg",Dt({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 455.111 455.111",style:{enableBackground:"new 0 0 455.111 455.111"},xmlSpace:"preserve",ref:e,"aria-labelledby":c},r),n?u.createElement("title",{id:c},n):null,u.createElement("circle",{style:{fill:"#E24C4B"},cx:227.556,cy:227.556,r:227.556}),u.createElement("path",{style:{fill:"#D1403F"},d:"M455.111,227.556c0,125.156-102.4,227.556-227.556,227.556c-72.533,0-136.533-32.711-177.778-85.333 c38.4,31.289,88.178,49.778,142.222,49.778c125.156,0,227.556-102.4,227.556-227.556c0-54.044-18.489-103.822-49.778-142.222 C422.4,91.022,455.111,155.022,455.111,227.556z"}),u.createElement("path",{style:{fill:"#FFFFFF"},d:"M331.378,331.378c-8.533,8.533-22.756,8.533-31.289,0l-72.533-72.533l-72.533,72.533 c-8.533,8.533-22.756,8.533-31.289,0c-8.533-8.533-8.533-22.756,0-31.289l72.533-72.533l-72.533-72.533 c-8.533-8.533-8.533-22.756,0-31.289c8.533-8.533,22.756-8.533,31.289,0l72.533,72.533l72.533-72.533 c8.533-8.533,22.756-8.533,31.289,0c8.533,8.533,8.533,22.756,0,31.289l-72.533,72.533l72.533,72.533 C339.911,308.622,339.911,322.844,331.378,331.378z"}),mt||(mt=u.createElement("g",null)),ht||(ht=u.createElement("g",null)),pt||(pt=u.createElement("g",null)),xt||(xt=u.createElement("g",null)),gt||(gt=u.createElement("g",null)),Ct||(Ct=u.createElement("g",null)),vt||(vt=u.createElement("g",null)),_t||(_t=u.createElement("g",null)),Et||(Et=u.createElement("g",null)),yt||(yt=u.createElement("g",null)),wt||(wt=u.createElement("g",null)),Ft||(Ft=u.createElement("g",null)),Nt||(Nt=u.createElement("g",null)),kt||(kt=u.createElement("g",null)),Lt||(Lt=u.createElement("g",null)))}var It=u.forwardRef(Bt),Pt=(n.p,n(26)),zt=n.n(Pt);var Vt=function(){var t=Object(f.b)(),e=Object(f.c)(a.getVisibleContacts),n=Object(f.c)(a.getContacts),c=Object(f.c)(a.getLoading),o=Object(f.c)(a.getError);return Object(u.useEffect)((function(){return t(r.fetchContacts())}),[t]),Object(P.jsxs)(P.Fragment,{children:[n.length>0&&!o&&Object(P.jsx)(lt.a.ul,{className:zt.a.list,children:Object(P.jsx)(it.a,{children:e.map((function(e){var n=e.id,c=e.name,a=e.number;return Object(P.jsxs)(lt.a.li,{className:zt.a.item,initial:"initial",animate:"animate",exit:"exit",transition:"transition",variants:ut,children:[Object(P.jsxs)("p",{className:zt.a.info,children:[Object(P.jsx)("b",{children:c}),Object(P.jsx)("em",{children:a})]}),Object(P.jsx)("button",{className:zt.a.btn,type:"button",onClick:function(){return t(r.deleteContact(n))},children:Object(P.jsx)(It,{width:"26",height:"26"})})]},n)}))})}),!n.length&&!o&&!c&&Object(P.jsx)(it.a,{children:Object(P.jsx)(lt.a.p,{initial:"initial",animate:"animate",exit:"exit",transition:"transition",variants:ut,children:"Your phonebook is empty. Please add contact."})}),o&&Object(P.jsx)(St,{message:o.message})]})};var Zt=function(){return Object(P.jsxs)(z,{children:[Object(P.jsx)("h1",{children:"Phonebook"}),Object(P.jsx)(ot,{}),Object(P.jsx)("h2",{children:"Contacts"}),Object(P.jsx)(jt,{}),Object(P.jsx)(Vt,{}),Object(P.jsx)(q.a,{autoClose:3700,position:"top-center"})]})};n(97);j.a.render(Object(P.jsx)(s.a.StrictMode,{children:Object(P.jsx)(f.a,{store:D,children:Object(P.jsx)(Zt,{})})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.790cf82c.chunk.js.map