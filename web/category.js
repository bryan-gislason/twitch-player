(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{211:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return m});n(25),n(24),n(78),n(73),n(72),n(38);var r=n(387),a=n(386),i=n(412);function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=function(e){var t=c(Object(r.a)(),1)[0],n=t.layout,u=t.typography,l=c(Object(i.a)("main"),1)[0],m={itemCount:e,containerWidth:l.width,containerHeight:l.height,maxImageWidth:n.maxCategoryWidth,maxImageHeight:n.maxCategoryHeight,detailHeight:Math.floor(u.sizeSecondary*u.lineHeight)+Math.floor(u.sizeTertiary*u.lineHeight)+2*n.gapSmall,spaceSides:Object(a.f)(l)?n.gapLarge:n.gapExtraLarge,spaceBetween:n.gapSmall,spaceBottom:n.gapMedium},s=o({},m,Object(a.e)(m));return o({},s,{getItemLayout:e&&Object(a.a)(s),renderItemStyle:e&&Object(a.b)(s)})},m=function(e){var t=c(Object(r.a)(),1)[0],n=t.layout,u=t.typography,l=c(Object(i.a)("main"),1)[0],m={itemCount:e,containerWidth:l.width,containerHeight:l.height,maxImageWidth:n.maxChannelWidth,maxImageHeight:n.maxChannelHeight,detailHeight:Math.floor(u.sizeSecondary*u.lineHeight)+Math.floor(u.sizeTertiary*u.lineHeight)+Math.floor(u.sizeTertiary*u.lineHeight)+2*n.gapSmall,spaceSides:Object(a.f)(l)?n.gapLarge:n.gapExtraLarge,spaceBetween:n.gapSmall,spaceBottom:n.gapMedium},s=o({},m,Object(a.e)(m));return o({},s,{getItemLayout:e&&Object(a.a)(s),renderItemStyle:e&&Object(a.b)(s)})}},212:function(e,t,n){"use strict";n(73),n(72),n(38);var r=n(71),a=n.n(r),i=n(70),o=n.n(i),u=n(134),c=n(210);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=function(e){var t=e.data,n=e.getItemLayout,r=e.initialNumToRender,a=e.numColumns,i=e.renderItem,m=e.renderHeader,s=e.renderFooter,d=e.testID,g=void 0===d?"grid-list":d,f=l(Object(c.a)(),1)[0];return o.a.createElement(u.a,{data:t,debug:f,disableVirtualization:!1,getItemLayout:n,horizontal:!1,initialNumToRender:r,legacyImplementation:!1,numColumns:a,refreshing:!1,renderItem:i,ListHeaderComponent:m,ListFooterComponent:s,testID:g})};m.propTypes={data:a.a.array.isRequired,getItemLayout:a.a.func,initialNumToRender:a.a.number.isRequired,numColumns:a.a.number.isRequired,renderItem:a.a.func.isRequired,renderHeader:a.a.any,renderFooter:a.a.any,testID:a.a.string},t.a=Object(i.memo)(m)},345:function(e,t,n){"use strict";var r=n(409),a=n(71),i=n.n(a),o=n(70),u=n.n(o),c=n(74),l=n(76),m=n(211),s=n(402),d=n(212),g=function(e){var t=e.list,n=e.renderHeader,r=e.renderFooter,a=e.testID,i=void 0===a?"channel-grid":a,c=Object(m.b)(t.length),g=c.numColumns,h=c.numRows,y=c.imageWidth,b=c.imageHeight,p=c.getItemLayout,v=c.renderItemStyle,O=Object(o.useCallback)(function(e){var t=e.item,n=e.index,r=[f.item,v(n)];return u.a.createElement(l.a,{style:r},u.a.createElement(s.a,{item:t,width:y,height:b}))},[y,b]);return u.a.createElement(d.a,{key:"".concat(y,"x").concat(b),data:t,initialNumToRender:h,numColumns:g,getItemLayout:p,renderItem:O,renderHeader:n,renderFooter:r,testID:i})};g.propTypes={list:i.a.arrayOf(r.a).isRequired,renderHeader:i.a.any,renderFooter:i.a.any,testID:i.a.string};var f=c.a.create({item:{display:"block"}});t.a=Object(o.memo)(g)},404:function(e,t,n){"use strict";n.r(t);n(87),n(151);var r=n(71),a=n.n(r),i=n(70),o=n.n(i),u=(n(86),n(82)),c=n.n(u),l=n(414);function m(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query CategoryChannels($name: String!, $first: Int!) {\n    category: game(name: $name) {\n      channels: streams(first: $first) {\n        edges {\n          cursor\n          node {\n            ...Channel\n          }\n        }\n      }\n    }\n  }\n  ","\n"]);return m=function(){return e},e}var s=c()(m(),l.a),d=n(398),g=n(329),f=n(403),h=n(345),y=n(164),b=n(389),p=n(211),v=function(e){var t=e.name,n=e.heading,r=e.testID,a=void 0===r?"category-channels":r,u=Object(p.b)(),c=u.numColumns,l=u.numRows,m=Object(g.a)(c*(l+1),10,40),v=Object(f.a)(s,{suspend:!0,variables:{name:t,first:m}}),O=v.data,j=v.error,I=v.refetch,w=j?void 0:Object(d.a)(O),H=Object(i.useCallback)(function(){return o.a.createElement(y.a,{level:"2"},n)},[n]);return j?o.a.createElement(b.a,{onPress:I}):o.a.createElement(h.a,{list:w,renderHeader:H,testID:a})};v.propTypes={name:a.a.string.isRequired,heading:a.a.string,testID:a.a.string};var O=Object(i.memo)(v),j=function(e){var t=e.match.params.name;return o.a.createElement(O,{name:t,heading:t})};j.propTypes={match:a.a.object.isRequired};var I=Object(i.memo)(j);n.d(t,"default",function(){return I})}}]);
//# sourceMappingURL=category.js.map