(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{163:function(t,s){},164:function(t,s,i){"use strict";var e={props:{submission:{type:Object,required:!0}}},n=i(19),a={components:{Submission:Object(n.a)(e,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"py-10 border-t-2 border-gray-200"},[i("p",{staticClass:"text-sm leading-5 text-gray-600"},[t._v("\n    Submitted by "+t._s(t.submission.name)+"\n  ")]),i("div",{staticClass:"block"},[i("h3",{staticClass:"mt-2 text-xl leading-7 font-semibold text-gray-900"},[t._v("\n      "+t._s(t.submission.title)+"\n    ")]),i("span",{staticClass:"block mt-3 text-base leading-6 text-gray-600 whitespace-pre-line"},[t._v(t._s(t.submission.description))])])])}),[],!1,null,null,null).exports},props:{title:{type:String,required:!0},submissions:{type:Array,required:!0}}},r=Object(n.a)(a,(function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"my-5"},[s("h2",{staticClass:"text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"},[this._v("\n    "+this._s(this.title)+"\n  ")]),s("div",{staticClass:"mt-3 sm:mt-4"},[s("p",{staticClass:"text-xl leading-7 text-gray-600"},[this._t("default")],2)]),s("div",{staticClass:"mt-6"},this._l(this.submissions,(function(t){return s("Submission",{key:t.id,attrs:{submission:t}})})),1)])}),[],!1,null,null,null);s.a=r.exports},176:function(t,s,i){"use strict";var e=i(51),n=i(6),a=i(15),r=i(13),l=i(77),u=i(52);e("match",1,(function(t,s,i){return[function(s){var i=r(this),e=null==s?void 0:s[t];return void 0!==e?e.call(s,i):new RegExp(s)[t](String(i))},function(t){var e=i(s,t,this);if(e.done)return e.value;var r=n(t),o=String(this);if(!r.global)return u(r,o);var c=r.unicode;r.lastIndex=0;for(var d,m=[],p=0;null!==(d=u(r,o));){var b=String(d[0]);m[p]=b,""===b&&(r.lastIndex=l(o,a(r.lastIndex),c)),p++}return 0===p?null:m}]}))},177:function(t,s,i){"use strict";var e=i(163),n=i.n(e);s.default=n.a},202:function(t,s,i){"use strict";i.r(s);i(68),i(27),i(176);var e=i(67),n=i(78),a=i(164),r={components:{ExternalLink:n.a,SubmissionList:a.a},computed:{submissions:function(){return this.$page.github.repository.pullRequests.edges.map((function(t){var s=t.node.body.match(/# (.+)\n## by (.+)\n> ((.|\n)+)/),i=Object(e.a)(s,4),n=(i[0],i[1]),a=i[2],r=i[3];return{id:t.node.id,date:t.node.createdAt,description:r,name:a,title:n}}))}}},l=i(19),u=i(177),o=Object(l.a)(r,(function(){var t=this.$createElement,s=this._self._c||t;return s("Layout",[s("SubmissionList",{attrs:{title:"Pending submissions",submissions:this.submissions}},[this._v("\n    Pending submissions are the open\n    "),s("ExternalLink",{attrs:{href:"https://github.com/nuria-fl/jamstack-cfp/pulls?q=is%3Apr+is%3Aopen+label%3Asubmission"}},[this._v("pull requests")]),this._v(". By adding the GitHub's API as a\n    "),s("ExternalLink",{attrs:{href:"https://gridsome.org/plugins/@gridsome/source-graphql"}},[this._v("GraphQL source")]),this._v("\n    we can compile them statically. A deploy is triggered after a new PR is\n    opened to always list latest submissions.\n  ")],1)],1)}),[],!1,null,"efbe4078",null);"function"==typeof u.default&&Object(u.default)(o);s.default=o.exports}}]);