(this.webpackJsonpcompany=this.webpackJsonpcompany||[]).push([[0],{15:function(e,a,t){},20:function(e,a,t){e.exports=t(34)},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),c=t.n(r),s=(t(15),t(7)),o=t(17),i=t(19),m=t(13),u=t(3),p={companies:[],company:null,sortedCompanies:[],current:null,loading:!1,search:!1,error:null},d=function(e,a){for(var t=e,n=1;n<t.length;n++){var l=Math.abs(t[n].Revenue-a),r=n-1;if(Math.abs(t[r].Revenue-a)>l){for(var c=t[n];r>=0&&Math.abs(t[r].Revenue-a)>l;)t[r+1]=t[r],r--;t[r+1]=c}}return t},E=Object(s.combineReducers)({company:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_LOADING":return Object(u.a)({},e,{loading:!0});case"GET_ALL_COMPANY":return Object(u.a)({},e,{companies:a.payload});case"GET_COMPANY":return Object(u.a)({},e,{company:a.payload});case"ADD_COMPANY":return Object(u.a)({},e,{companies:[].concat(Object(m.a)(e.companies),[a.payload]),loading:!1});case"UPDATE_COMPANY":return Object(u.a)({},e,{companies:e.companies.map((function(e){return e.id===a.payload.id?a.payload:e})),loading:!1});case"DELETE_COMPANY":return Object(u.a)({},e,{companies:e.companies.filter((function(e){return e.id!==a.payload})),loading:!1});case"SEARCH_COMPANY":return Object(u.a)({},e,{companies:a.payload});case"SET_SEARCH":return Object(u.a)({},e,{search:!0});case"CLEAR_SEARCH":return Object(u.a)({},e,{search:!1});case"TARGET_REVENUE":return Object(u.a)({},e,{sortedCompanies:d(Object(m.a)(e.companies),a.payload)});case"SET_CURRENT":return Object(u.a)({},e,{current:a.payload});case"CLEAR_CURRENT":return Object(u.a)({},e,{current:null});case"COMPANY_ERROR":return console.error(a.payload),Object(u.a)({},e,{error:a.payload});case"LARGE_TO_SMALL_SORT":return Object(u.a)({},e,{companies:e.companies.sort((function(e,a){return e.Revenue>a.Revenue?1:e.Revenue<a.Revenue?-1:0}))});case"SMALL_TO_LARGE_SORT":return Object(u.a)({},e,{companies:e.companies.sort((function(e,a){return e.Revenue>a.Revenue?-1:e.Revenue<a.Revenue?1:0}))});default:return e}}}),f=[i.a],v=Object(s.createStore)(E,Object(o.composeWithDevTools)(s.applyMiddleware.apply(void 0,f))),h=t(1),y=t(2),b=t.n(y),N=function(){return function(e){var a,t;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,g(),n.next=4,b.a.awrap(fetch("/api/companies"));case 4:return a=n.sent,n.next=7,b.a.awrap(a.json());case 7:t=n.sent,e({type:"GET_ALL_COMPANY",payload:t}),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),e({type:"COMPANY_ERROR",payload:n.t0.response.statusText});case 14:case"end":return n.stop()}}),null,null,[[0,11]])}},g=function(){return{type:"SET_LOADING"}},O=function(){return{type:"LARGE_TO_SMALL_SORT"}},C=function(){return{type:"SMALL_TO_LARGE_SORT"}},R={transform:"rotate(90deg)"},S={transform:"rotate(-90deg)"},A=Object(h.b)(null,{stlSort:C,ltsSort:O})((function(e){var a=e.ltsSort,t=e.stlSort;return l.a.createElement("div",{className:"fixed-action-btn"},l.a.createElement("a",{className:"btn-floating btn-large blue darken-2"},l.a.createElement("i",{className:"large material-icons"},"menu")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"btn-floating yellow darken-1",onClick:a},l.a.createElement("i",{className:"material-icons",style:R},"chevron_left"))),l.a.createElement("li",null,l.a.createElement("a",{className:"btn-floating yellow darken-1",onClick:t},l.a.createElement("i",{className:"material-icons",style:S},"chevron_left"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#add-company-modal",className:"btn-floating red modal-trigger"},l.a.createElement("i",{className:"large material-icons"},"add"))),l.a.createElement("li",null,l.a.createElement("a",{className:"blue btn-floating modal-trigger",href:"#status-modal"},l.a.createElement("i",{className:"large material-icons"},"info")))))})),j=(t(30),Object(h.b)(null,{searchCompanies:function(e){return function(a){var t,n;return b.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,g(),l.next=4,b.a.awrap(fetch("/api/companies/search?q=".concat(e)));case 4:return t=l.sent,l.next=7,b.a.awrap(t.json());case 7:n=l.sent,a({type:"SEARCH_COMPANY",payload:n}),l.next=14;break;case 11:l.prev=11,l.t0=l.catch(0),a({type:"COMPANY_ERROR",payload:l.t0.response.statusText});case 14:case"end":return l.stop()}}),null,null,[[0,11]])}},targetRevenue:function(e){return g(),{type:"TARGET_REVENUE",payload:e}},getAllCompany:N,setSearch:function(){return{type:"SET_SEARCH"}},clearSearch:function(){return{type:"CLEAR_SEARCH"}}})((function(e){var a=e.searchCompanies,t=e.targetRevenue,r=e.getAllCompany,c=e.setSearch,s=e.clearSearch;Object(n.useEffect)((function(){r()}),[]);var o=Object(n.useRef)(""),i=Object(n.useRef)("");return l.a.createElement("nav",{style:{marginBottom:"30px"},className:"blue"},l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement("form",null,l.a.createElement("div",{className:"input-field searchBar"},l.a.createElement("input",{id:"search",type:"search",placeholder:"Type in a company's name or location",ref:o,onChange:function(){a(o.current.value)}}),l.a.createElement("label",{className:"label-icon",htmlFor:"search"},l.a.createElement("i",{className:"material-icons"},"search")),l.a.createElement("i",{className:"material-icons"},"close")),l.a.createElement("div",{className:"input-field searchBar"},l.a.createElement("input",{id:"targetSearch",type:"search",ref:i,placeholder:"Type in a target revenue",onChange:function(e){c(),t(Number(i.current.value)),""===e.target.value&&s()}}),l.a.createElement("label",{className:"label-icon",htmlFor:"targetSearch"},l.a.createElement("i",{className:"material-icons"},"search")),l.a.createElement("i",{className:"material-icons"},"close")))))}))),_={transform:"rotate(90deg)"},w={transform:"rotate(-90deg)"},x=Object(h.b)(null,{stlSort:C,ltsSort:O})((function(e){var a=e.ltsSort,t=e.stlSort;return l.a.createElement("li",{className:"collection-header"},l.a.createElement("nav",null,l.a.createElement("div",{class:"nav-wrapper blue"},l.a.createElement("ul",{id:"nav-mobile",class:"left hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement("a",{className:"btn-floating yellow darken-1",onClick:a},l.a.createElement("i",{className:"material-icons",style:_},"chevron_left"))),l.a.createElement("li",null,l.a.createElement("a",{className:"btn-floating yellow darken-1",onClick:t},l.a.createElement("i",{className:"material-icons",style:w},"chevron_left")))),l.a.createElement("a",{href:"#",class:"brand-logo center"},"Company List"),l.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement("a",{href:"#add-company-modal",className:"btn-floating red modal-trigger"},l.a.createElement("i",{className:"large material-icons"},"add"))),l.a.createElement("li",null,l.a.createElement("a",{className:"blue btn-floating modal-trigger",href:"#status-modal"},l.a.createElement("i",{className:"large material-icons"},"info")))))))})),T=function(){return l.a.createElement("div",{className:"progress blue lighten-4"},l.a.createElement("div",{className:"indeterminate blue"}))},L=(t(31),t(4)),M=t.n(L),P=Object(h.b)(null,{deleteCompany:function(e){return function(a){return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,g(),t.next=4,b.a.awrap(fetch("/api/companies/".concat(e),{method:"DELETE"}));case 4:a({type:"DELETE_COMPANY",payload:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"COMPANY_ERROR",payload:t.t0.response.statusText});case 10:case"end":return t.stop()}}),null,null,[[0,7]])}},setCurrent:function(e){return{type:"SET_CURRENT",payload:e}}})((function(e){var a=e.company,t=e.deleteCompany,n=e.setCurrent;return l.a.createElement("li",{className:"collection-item important modal-trigger",href:"#edit-company-modal",onClick:function(){return n(a)}},l.a.createElement("div",{className:"card-panel ".concat("Researching"===a.Status?"blue":"Declined"===a.Status?"red":"green")},l.a.createElement("a",{className:" white-text"},a.Name+"   ",l.a.createElement("span",{className:"white-text"},"Revenue: ",a.Revenue)),l.a.createElement("br",null),l.a.createElement("span",{className:"grey-text sub-information"},l.a.createElement("span",{className:"white-text"},"Status: ",a.Status),"  ",l.a.createElement("span",{className:"white-text"},"Location: ",a.Location)),l.a.createElement("a",{href:"#!",onClick:function(){t(a.id),M.a.toast({html:"Company Deleted"})},className:"secondary-content delete-icon"},l.a.createElement("i",{className:"material-icons grey-text small"},"delete"))))})),k=Object(h.b)((function(e){return{company:e.company}}),{getAllCompany:N})((function(e){var a=e.company,t=a.loading,r=a.companies,c=a.search,s=a.sortedCompanies,o=e.getAllCompany;return Object(n.useEffect)((function(){o()}),[]),t||null===r?l.a.createElement(T,null):l.a.createElement("ul",{className:"collection"},t||c||0!==r.length?c?s.map((function(e){return l.a.createElement(P,{company:e,key:e._id})})):r.map((function(e){return l.a.createElement(P,{company:e,key:e._id})})):l.a.createElement("p",{className:"center"},"No companies to show..."))})),Y=(t(32),{width:"75%",height:"75%"}),D=Object(h.b)((function(e){return{companies:e.company.companies}}),{getAllCompany:N})((function(e){var a=e.companies,t=e.getAllCompany;return Object(n.useEffect)((function(){t()}),[]),l.a.createElement("div",{id:"status-modal",className:"modal",style:Y},l.a.createElement("div",{className:"modal-content blue white-text status"},l.a.createElement("h2",null,"Approved:"," ",a.filter((function(e){return"Approved"===e.Status})).length),l.a.createElement("h2",null,"Researching:"," ",a.filter((function(e){return"Researching"===e.Status})).length),l.a.createElement("h2",null,"Declined:"," ",a.filter((function(e){return"Declined"===e.Status})).length)))})),G=t(5),U={width:"75%",height:"75%"},H=Object(h.b)(null,{addCompany:function(e){return function(a){var t,n;return b.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,g(),l.next=4,b.a.awrap(fetch("/api/companies",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}));case 4:return t=l.sent,l.next=7,b.a.awrap(t.json());case 7:n=l.sent,a({type:"ADD_COMPANY",payload:n}),l.next=14;break;case 11:l.prev=11,l.t0=l.catch(0),a({type:"COMPANY_ERROR",payload:l.t0.response.statusText});case 14:case"end":return l.stop()}}),null,null,[[0,11]])}}})((function(e){var a=e.addCompany,t=Object(n.useState)(""),r=Object(G.a)(t,2),c=r[0],s=r[1],o=Object(n.useState)(""),i=Object(G.a)(o,2),m=i[0],u=i[1],p=Object(n.useState)(0),d=Object(G.a)(p,2),E=d[0],f=d[1],v=Object(n.useState)(""),h=Object(G.a)(v,2),y=h[0],b=h[1];return l.a.createElement("div",{id:"add-company-modal",className:"modal",style:U},l.a.createElement("div",{className:"modal-content"},l.a.createElement("h4",null,"Add Company"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"name",value:c,onChange:function(e){return s(e.target.value)},placeholder:"Company Name (i.e. SpaceX Inc.)"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"status",value:m,onChange:function(e){return u(e.target.value)},placeholder:"Assessment Status"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"revenue",onChange:function(e){return f(Number(e.target.value))},placeholder:"Annual Revenue"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"location",value:y,onChange:function(e){return b(e.target.value)},placeholder:"Location"})))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("a",{href:"#!",onClick:function(){""===c||""===m||null===E||""===y?M.a.toast({html:"Please enter all required field!"}):(a({Name:c,Status:m,Revenue:E,Location:y}),M.a.toast({html:"Company Added!"}),s(""),u(""),f(0),b(""))},className:"modal-close waves-effect blue waves-light btn"},"Enter")))})),I={width:"75%",height:"75%"},B=Object(h.b)((function(e){return{current:e.company.current}}),{updateCompany:function(e){return function(a){var t,n;return b.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,g(),l.next=4,b.a.awrap(fetch("/api/companies/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}));case 4:return t=l.sent,l.next=7,b.a.awrap(t.json());case 7:n=l.sent,a({type:"UPDATE_COMPANY",payload:n}),l.next=14;break;case 11:l.prev=11,l.t0=l.catch(0),a({type:"COMPANY_ERROR",payload:l.t0.response.statusText});case 14:case"end":return l.stop()}}),null,null,[[0,11]])}}})((function(e){var a=e.current,t=e.updateCompany,r=Object(n.useState)(""),c=Object(G.a)(r,2),s=c[0],o=c[1],i=Object(n.useState)(""),m=Object(G.a)(i,2),u=m[0],p=m[1],d=Object(n.useState)(0),E=Object(G.a)(d,2),f=E[0],v=E[1],h=Object(n.useState)(""),y=Object(G.a)(h,2),b=y[0],N=y[1];Object(n.useEffect)((function(){a&&(o(a.Name),p(a.Status),v(a.Revenue),N(a.Location))}),[a]);return l.a.createElement("div",{id:"edit-company-modal",className:"modal",style:I},l.a.createElement("div",{className:"modal-content"},l.a.createElement("h4",null,"Edit Company"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"name",value:s,onChange:function(e){return o(e.target.value)},placeholder:"Company Name (i.e. SpaceX Inc.)"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"status",value:u,onChange:function(e){return p(e.target.value)},placeholder:"Assessment Status"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"revenue",value:f,onChange:function(e){return v(Number(e.target.value))},placeholder:"Annual Revenue"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"location",value:b,onChange:function(e){return N(e.target.value)},placeholder:"Location"})))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("a",{href:"#!",onClick:function(){if(""===s||""===u||null===f||""===b)M.a.toast({html:"Please enter all required field!"});else{var e={_id:a._id,Name:s,Status:u,Revenue:f,Location:b};t(e),M.a.toast({html:"Company updated!"}),o(""),p(""),v(0),N("")}},className:"modal-close waves-effect blue waves-light btn"},"Enter")))})),J=(t(33),function(){return Object(n.useEffect)((function(){M.a.AutoInit()})),l.a.createElement(h.a,{store:v},l.a.createElement(n.Fragment,null,l.a.createElement(j,null),l.a.createElement("div",{className:"container"},l.a.createElement(x,null),l.a.createElement(A,null),l.a.createElement(D,null),l.a.createElement(H,null),l.a.createElement(B,null),l.a.createElement(k,null))))});c.a.render(l.a.createElement(J,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.03dad6e5.chunk.js.map