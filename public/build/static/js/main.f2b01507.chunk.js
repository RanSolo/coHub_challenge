(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,n){e.exports=n.p+"static/media/logo.ce14c0e7.svg"},45:function(e,t,n){e.exports=n(71)},50:function(e,t,n){},62:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(35),o=n.n(l),i=(n(50),n(15)),c=n(16),m=n(31),s=n(17),u=n(32),p=n(43),b=n(9),d=n(28),E=n(8),f=n.n(E),v=n(5);function h(e){var t=e.label;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},t),r.a.createElement(v.TextField,{name:t,className:"form-control"}))}function g(e){var t=e.label,n=e.options;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},t,r.a.createElement(v.SelectField,{name:t,options:n,className:"form-control"})))}function w(e){var t=e.label;e.options;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},t,r.a.createElement(v.CheckboxField,{name:t,label:"Yes",className:"form-control checkbox-inline"})))}function y(e){var t=e.label,n=e.options;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},t,r.a.createElement(v.ListField,{name:t},r.a.createElement(v.ObjectField,null,n.map(function(e){return r.a.createElement(v.CheckboxField,{key:e,name:e,label:e})})))))}function k(e){var t=e.question,n=(t.position,t.label),a=t.field_type,l=t.options;t.multiselect,e.handleChange;return r.a.createElement("div",null,"select"===a?r.a.createElement(g,{label:n,options:l}):"boolean"===a?r.a.createElement(w,{label:n}):"string"===a?r.a.createElement(h,{label:n}):"list"===a?r.a.createElement(y,{label:n,options:l}):void 0)}function N(){var e=Object(d.a)(["\n  mutation CreateQuiz($participant_name: String!, $answers: String!) {\n    createQuiz(participant_name: $participant_name, answers: $answers) {\n      id\n      participant_name\n      answers\n    }\n  }\n"]);return N=function(){return e},e}var O=f()(N());function j(e){var t=e.data;return r.a.createElement(b.Mutation,{mutation:O},function(e){return r.a.createElement(v.Form,{onSubmit:function(t){e({variables:{participant_name:t.participant_name,answers:JSON.stringify(t)}})}},r.a.createElement(h,{label:"participant_name"}),t.Questions.map(function(e){return r.a.createElement("section",{key:e.label},r.a.createElement(k,{question:e}))}),r.a.createElement(v.SubmitField,{value:"Submit",className:"form-control"}))})}function F(){var e=Object(d.a)(["\n  query QuestionsQuery{\n    Questions {\n      position\n      label\n      field_type\n      options\n      multiselect\n    }\n  }\n"]);return F=function(){return e},e}var _=f()(F()),Q=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={participant_name:"",answers:""},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{key:"container"},r.a.createElement("h1",{className:"display-4 my-3"},"Questions"),r.a.createElement(b.Query,{query:_},function(e){var t=e.loading,n=e.error,a=e.data;return t?r.a.createElement("h4",null,"loading..."):(n&&console.log(n),r.a.createElement(j,{data:a}))}))}}]),t}(a.Component),C=n(41),S=n.n(C),x=(n(62),new p.a({uri:"/graphql"})),q=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(b.ApolloProvider,{client:x},r.a.createElement("div",{className:"App container"},r.a.createElement("div",{className:"row"},r.a.createElement("img",{src:S.a,className:"App-logo",alt:"CoHub logo",style:{display:"block",margin:"auto"}})),r.a.createElement("div",{className:"row"},r.a.createElement("h2",{style:{display:"block",margin:"auto"}},"Quiz")),r.a.createElement(Q,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,2,1]]]);
//# sourceMappingURL=main.f2b01507.chunk.js.map