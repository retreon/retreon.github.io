"use strict";(self.webpackChunkretreon_website=self.webpackChunkretreon_website||[]).push([[427],{3554:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var i=n(7462),a=n(3366),s=(n(7294),n(3905)),r=["components"],o={title:"Style Guide"},l=void 0,c={unversionedId:"style-guide",id:"style-guide",isDocsHomePage:!1,title:"Style Guide",description:"This is a collection of best practices when using Retreon. They aren't required, but highly recommended.",source:"@site/docs/style-guide.md",sourceDirName:".",slug:"/style-guide",permalink:"/style-guide",editUrl:"https://github.com/retreon/website/edit/main/docs/style-guide.md",tags:[],version:"current",frontMatter:{title:"Style Guide"},sidebar:"someSidebar",previous:{title:"Advanced Usage",permalink:"/advanced-usage"},next:{title:"Testing Patterns",permalink:"/testing-patterns"}},d=[{value:"Separate Your Effects",id:"separate-your-effects",children:[]},{value:"Organize by Feature",id:"organize-by-feature",children:[]},{value:"Use Consistent Action Types",id:"use-consistent-action-types",children:[]}],u={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,r);return(0,s.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This is a collection of best practices when using Retreon. They aren't required, but highly recommended."),(0,s.kt)("p",null,"First, check out ",(0,s.kt)("a",{parentName:"p",href:"https://redux.js.org/style-guide/style-guide"},"the official Redux guidelines"),". Their documentation is excellent and retreon has no reason to duplicate it."),(0,s.kt)("p",null,"The best practices in this page are meant to extend and complement their suggestions."),(0,s.kt)("h2",{id:"separate-your-effects"},"Separate Your Effects"),(0,s.kt)("p",null,"Keep actions, reducers, and effects in separate files."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"src\n\u251c\u2500\u2500 actions\n\u251c\u2500\u2500 reducers\n\u2514\u2500\u2500 effects\n")),(0,s.kt)("p",null,"Why? Simply because effects can be composed to create richer effects, but you can't do the same with actions. Actions are tightly coupled with redux and ",(0,s.kt)("inlineCode",{parentName:"p"},"dispatch")," (that is their purpose after all), so if you try to use one action within another, you're fighting uphill to re-implement middleware without the tools to do it right."),(0,s.kt)("p",null,"No. ",(0,s.kt)("inlineCode",{parentName:"p"},"createAction(...)")," should be used as an extremely thin layer over business logic binding it to redux."),(0,s.kt)("p",null,"Putting effects in their own file encourages natural composition of business logic and keeps effects blissfully ignorant of the redux world outside. In practice, the overhead of a new file is outweighed by the ease of testing effects in isolation, and without any IO, there's nothing left to test in the actions folder."),(0,s.kt)("h2",{id:"organize-by-feature"},"Organize by Feature"),(0,s.kt)("p",null,"Organize your effects according to the feature they implement. They don't need to map 1:1 to your action files, just organize them as it makes sense. Pretend you're writing tiny libraries, and each library has its own file."),(0,s.kt)("p",null,"Reducers should be named after the state they manage. If the reducer is responsible for ",(0,s.kt)("inlineCode",{parentName:"p"},"state.articles"),", it should probably be named ",(0,s.kt)("inlineCode",{parentName:"p"},"reducers/articles"),"."),(0,s.kt)("p",null,"Actions don't have solid rules. Name it as it makes sense. Typically this ends up mirroring the structure of ",(0,s.kt)("inlineCode",{parentName:"p"},"reducers/"),", but just remember that a single action can be handled by multiple reducers, there's no 1:1 mapping. It's okay to have an actions file without a similarly named reducer file."),(0,s.kt)("h2",{id:"use-consistent-action-types"},"Use Consistent Action Types"),(0,s.kt)("p",null,"Action types should be named after the file + the name of the action, expressed in ",(0,s.kt)("a",{parentName:"p",href:"https://en.wiktionary.org/wiki/kebab_case"},"kebab-case"),"."),(0,s.kt)("p",null,"Here's how it might look in a file named ",(0,s.kt)("inlineCode",{parentName:"p"},"actions/tasks"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// actions/tasks.ts\nexport const rename = createAction('tasks/rename', effects.rename)\nexport const remove = createAction('tasks/remove', effects.remove)\nexport const markComplete = createAction('tasks/mark-complete', effects.markComplete)\n")),(0,s.kt)("p",null,"The file ",(0,s.kt)("inlineCode",{parentName:"p"},"<prefix>/")," helps prevent naming collisions across files. Some would recommend using ",(0,s.kt)("inlineCode",{parentName:"p"},"SHOUTY_SNAKE_CASE")," for the action title, although retreon suggests just keeping it consistent. Use kebab-case."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The documentation rarely uses this pattern in a frugal effort to save screen space and to spare the reader from extraneous context. It is still recommended."))))}p.isMDXComponent=!0}}]);