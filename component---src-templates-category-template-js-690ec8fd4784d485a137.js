"use strict";(self.webpackChunk_=self.webpackChunk_||[]).push([[501],{3221:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var a=n(7294),r=n(748),s=n(4985),c=n(579),u=n(531);var l=function(e){var t=e.title,n=e.subtitle;return a.createElement("div",{className:"category-page-header-wrapper"},a.createElement("div",{className:"category-page-title"},t),a.createElement("div",{className:"category-page-subtitle"},n))},i=n(7148);var o=function(e){var t=e.pageContext,n=t.edges,o=t.currentCategory,g=t.categories,p=(0,a.useMemo)((function(){return g.findIndex((function(e){return e===o}))}),[g,o]),f=n.map((function(e){var t=e.node;return new u.Z(t)})),m=(0,a.useCallback)((function(e,t){if(0===t)return(0,r.navigate)("/posts");(0,r.navigate)("/posts/"+g[t])}),[g]);return a.createElement(s.Z,null,a.createElement(c.Z,{title:"Posts"}),a.createElement(l,{title:g[p],subtitle:f.length+" posts"}),a.createElement(i.Z,{tabIndex:p,onChange:m,tabs:g,posts:f}))}}}]);
//# sourceMappingURL=component---src-templates-category-template-js-690ec8fd4784d485a137.js.map