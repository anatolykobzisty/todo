(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{137:function(t,e,o){},214:function(t,e,o){"use strict";o.r(e);var c=o(0),n=o.n(c),i=o(65),d=o(23),a=o.n(d),r=o(67),s=Object(r.b)({name:"todoList",initialState:{todoList:[]},reducers:{addTodo:function(t,e){var o={id:Object(r.c)(),text:e.payload.text,completed:!1};t.todoList.push(o)},updateTodo:function(t,e){var o=t.todoList.find((function(t){return t.id===e.payload.id}));o&&(o.text=e.payload.text)},deleteTodo:function(t,e){t.todoList=t.todoList.filter((function(t){return t.id!==e.payload.id}))},toggleCompleteTodo:function(t,e){var o=t.todoList.find((function(t){return t.id===e.payload.id}));o&&(o.completed=!o.completed)}}}),u=s.actions,j=u.addTodo,l=u.updateTodo,b=u.deleteTodo,x=u.toggleCompleteTodo,O=s.reducer,p=Object(r.a)({reducer:{todoList:O}}),m=o(220),f=(o(137),o(66)),h=o(217),y=o(219),v=o(123),T=function(){return Object(i.b)()},L=i.c,g=o(18),C=function(){var t=h.a.useForm(),e=Object(f.a)(t,1)[0],o=n.a.useRef(null),c=T();return Object(g.jsxs)(h.a,{className:"todo-input-box",form:e,onFinish:function(t){c(j({text:t.text})),e.resetFields(),o.current.focus({cursor:"start"})},children:[Object(g.jsx)(h.a.Item,{name:"text",children:Object(g.jsx)(y.a,{type:"text",ref:o,placeholder:"\u043d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443"})}),Object(g.jsx)(v.a,{type:"primary",htmlType:"submit",children:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"})]})},N=o(68),S=o(218),k=o(221),F=S.a.Text;function I(t){var e=Object(c.useState)(!1),o=Object(f.a)(e,2),n=o[0],i=o[1],d=Object(c.useState)(t.text),a=Object(f.a)(d,2),r=a[0],s=a[1],u=T();return Object(g.jsxs)("div",{className:"todo-item",children:[Object(g.jsxs)("div",{className:"todo-item-left",children:[Object(g.jsx)(k.a,{onChange:function(){u(x({id:t.id}))}}),n?Object(g.jsx)(y.a,{type:"text",value:r,onChange:function(t){return s(t.target.value)}}):Object(g.jsx)(F,{delete:t.completed,children:t.text})]}),Object(g.jsxs)("div",{className:"todo-item-right",children:[Object(g.jsx)(v.a,{className:"btn-edit-update",type:"primary",onClick:function(){u(l(Object(N.a)(Object(N.a)({},t),{},{text:r}))),n&&s(r),i(!n)},children:n?"\u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c":"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(g.jsx)(v.a,{type:"primary",onClick:function(){return u(b({id:t.id}))},children:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})}var w=o(216),J=function(){var t=L((function(t){return t.todoList.todoList}));return Object(g.jsx)(w.b,{className:"todo-list-box",locale:{emptyText:"\u0414\u0435\u043b\u0430\u0442\u044c \u043d\u0435\u0447\u0435\u0433\u043e :("},dataSource:t,renderItem:function(t){return Object(g.jsx)(I,Object(N.a)({},t),t.id)}})},B=m.a.Content;var E=function(){return Object(g.jsx)(m.a,{className:"container",children:Object(g.jsxs)(B,{children:[Object(g.jsx)(C,{}),Object(g.jsx)(J,{})]})})};a.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(i.a,{store:p,children:Object(g.jsx)(E,{})})}),document.getElementById("root"))}},[[214,1,2]]]);
//# sourceMappingURL=main.c37d1e44.chunk.js.map