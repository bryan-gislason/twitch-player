(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{207:function(e,t,n){"use strict";n.d(t,"a",function(){return l});n.d(t,"b",function(){return s});n(25),n(24),n(78),n(73),n(72),n(38);var r=n(382),a=n(381),i=n(405);function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})));r.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done);r=!0){n.push(o.value);if(t&&n.length===t)break}}catch(e){a=!0;i=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=function(e){var t=c(Object(r.a)(),1)[0],n=t.layout,u=t.typography,l=c(Object(i.a)("main"),1)[0],s={itemCount:e,containerWidth:l.width,containerHeight:l.height,maxImageWidth:n.maxCategoryWidth,maxImageHeight:n.maxCategoryHeight,detailHeight:Math.floor(u.sizeSecondary*u.lineHeight)+Math.floor(u.sizeTertiary*u.lineHeight)+2*n.gapSmall,spaceSides:Object(a.f)(l)?n.gapLarge:n.gapExtraLarge,spaceBetween:n.gapSmall,spaceBottom:n.gapMedium},m=o({},s,Object(a.e)(s));return o({},m,{getItemLayout:e&&Object(a.a)(m),renderItemStyle:e&&Object(a.b)(m)})},s=function(e){var t=c(Object(r.a)(),1)[0],n=t.layout,u=t.typography,l=c(Object(i.a)("main"),1)[0],s={itemCount:e,containerWidth:l.width,containerHeight:l.height,maxImageWidth:n.maxChannelWidth,maxImageHeight:n.maxChannelHeight,detailHeight:Math.floor(u.sizeSecondary*u.lineHeight)+Math.floor(u.sizeTertiary*u.lineHeight)+Math.floor(u.sizeTertiary*u.lineHeight)+2*n.gapSmall,spaceSides:Object(a.f)(l)?n.gapLarge:n.gapExtraLarge,spaceBetween:n.gapSmall,spaceBottom:n.gapMedium},m=o({},s,Object(a.e)(s));return o({},m,{getItemLayout:e&&Object(a.a)(m),renderItemStyle:e&&Object(a.b)(m)})}},208:function(e,t,n){"use strict";n(73),n(72),n(38);var r=n(71),a=n.n(r),i=n(70),o=n.n(i),u=n(133),c=n(206);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done);r=!0){n.push(o.value);if(t&&n.length===t)break}}catch(e){a=!0;i=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var s=function(e){var t=e.data,n=e.getItemLayout,r=e.initialNumToRender,a=e.numColumns,i=e.renderItem,s=e.renderHeader,m=e.renderFooter,d=e.testID,f=void 0===d?"grid-list":d,g=l(Object(c.a)(),1)[0];return o.a.createElement(u.a,{data:t,debug:g,disableVirtualization:!1,getItemLayout:n,horizontal:!1,initialNumToRender:r,legacyImplementation:!1,numColumns:a,refreshing:!1,renderItem:i,ListHeaderComponent:s,ListFooterComponent:m,testID:f})};s.propTypes={data:a.a.array.isRequired,getItemLayout:a.a.func,initialNumToRender:a.a.number.isRequired,numColumns:a.a.number.isRequired,renderItem:a.a.func.isRequired,renderHeader:a.a.any,renderFooter:a.a.any,testID:a.a.string};t.a=Object(i.memo)(s)},339:function(e,t,n){"use strict";n(86);var r=n(82),a=n.n(r),i=n(402);function o(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query TopChannels($first: Int!, $platformType: PlatformType = all) {\n    channels: streams(first: $first, platformType: $platformType) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        cursor\n        node {\n          ...Channel\n        }\n      }\n    }\n  }\n  ","\n"]);o=function(){return e};return e}t.a=a()(o(),i.a)},340:function(e,t,n){"use strict";var r=n(403),a=n(71),i=n.n(a),o=n(70),u=n.n(o),c=n(74),l=n(76),s=n(207),m=n(397),d=n(208),f=function(e){var t=e.list,n=e.renderHeader,r=e.renderFooter,a=e.testID,i=void 0===a?"channel-grid":a,c=Object(s.b)(t.length),f=c.numColumns,h=c.numRows,y=c.imageWidth,b=c.imageHeight,p=c.getItemLayout,v=c.renderItemStyle,O=Object(o.useCallback)(function(e){var t=e.item,n=e.index,r=[g.item,v(n)];return u.a.createElement(l.a,{style:r},u.a.createElement(m.a,{item:t,width:y,height:b}))},[y,b]);return u.a.createElement(d.a,{key:"".concat(y,"x").concat(b),data:t,initialNumToRender:h,numColumns:f,getItemLayout:p,renderItem:O,renderHeader:n,renderFooter:r,testID:i})};f.propTypes={list:i.a.arrayOf(r.a).isRequired,renderHeader:i.a.any,renderFooter:i.a.any,testID:i.a.string};var g=c.a.create({item:{display:"block"}});t.a=Object(o.memo)(f)},401:function(e,t,n){"use strict";n.r(t);var r=n(134),a=n(70),i=n.n(a),o=n(339),u=n(393),c=n(324),l=n(71),s=n.n(l),m=n(398),d=n(340),f=n(163),g=n(384),h=n(207),y=function(e){var t=e.heading,n=e.testID,r=void 0===n?"all-channels":n,l=Object(h.b)(),s=l.numColumns,y=l.numRows,b=Object(c.a)(s*(y+1),10,40),p=Object(m.a)(o.a,{suspend:!0,variables:{first:b}}),v=p.data,O=p.error,j=p.refetch,I=Object(u.b)("all"),w=O?void 0:I(v),H=Object(a.useCallback)(function(){return i.a.createElement(f.a,{level:"2"},t)},[t]);return O?i.a.createElement(g.a,{onPress:j}):i.a.createElement(d.a,{list:w,renderHeader:H,testID:r})};y.propTypes={heading:s.a.string,testID:s.a.string};var b=Object(a.memo)(y),p=Object(a.memo)(function(){var e=Object(r.b)().t;return i.a.createElement(b,{heading:e("pages.channels.mainHeading")})});n.d(t,"default",function(){return p})}}]);
//# sourceMappingURL=channels.js.map