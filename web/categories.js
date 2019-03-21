(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{117:function(e,t,r){"use strict";r.d(t,"a",function(){return o}),r.d(t,"b",function(){return u});var n=function(e){return e.node},a=function(e){return e.node.id},i=function(e){return e.map(a).join(",")},o=function(e){return function(t,r){var n=e(t),a=e(r);return n.length===a.length&&i(n)===i(a)}},u=function(e){return function(t){return e(t).map(n)}}},132:function(e,t,r){"use strict";r(86);var n=r(82),a=r.n(n);function i(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  fragment Tag on Tag {\n    id\n    key: id\n    isLanguageTag\n    localizedName\n    tagName\n  }\n"]);return i=function(){return e},e}t.a=a()(i())},133:function(e,t,r){"use strict";var n=r(71),a=r.n(n);t.a=a.a.shape({id:a.a.string.isRequired,isLanguageTag:a.a.bool.isRequired,localizedName:a.a.string.isRequired,tagName:a.a.string.isRequired})},164:function(e,t,r){"use strict";r(73),r(72),r(38);var n=r(387),a=r(71),i=r.n(a),o=r(70),u=r.n(o),c=r(74),l=r(165);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=function(e){var t=e.level,r=e.children,a=e.testID,i=void 0===a?"heading":a,o=s(Object(n.a)(),1)[0],c=o.colors,d=o.layout,f=o.typography,g=[m.root,{color:c.heading,fontSize:"1"===t?f.sizePrimary:"2"===t?f.sizeSecondary:f.sizeTertiary,marginHorizontal:d.gapExtraLarge,marginTop:d.gapLarge,marginBottom:d.gapSmall}];return u.a.createElement(l.a,{accessibilityRole:"heading","aria-level":t,style:g,testID:i},r)};d.propTypes={level:i.a.oneOf(["1","2","3"]).isRequired,children:i.a.node.isRequired,testID:i.a.string};var m=c.a.create({root:{fontWeight:"bold"}});t.a=d},165:function(e,t,r){"use strict";r(83),r(73),r(72),r(38),r(25),r(24),r(78);var n=r(387),a=r(71),i=r.n(a),o=r(70),u=r.n(o),c=r(108);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=function(e){var t=e.style,r=void 0===t?[]:t,a=d(e,["style"]),i=s(Object(n.a)(),1)[0].typography,o=[{fontFamily:i.family,lineHeight:"".concat(i.lineHeight)}].concat(r);return u.a.createElement(c.a,l({},a,{style:o}))};m.propTypes={style:i.a.any},t.a=Object(o.memo)(m)},207:function(e,t,r){"use strict";r(86);var n=r(82),a=r.n(n),i=r(132);function o(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  fragment Category on Game {\n    id\n    key: id\n    name\n    boxArtURL\n    viewersCount\n    followersCount\n  }\n  ","\n"]);return o=function(){return e},e}t.a=a()(o(),i.a)},209:function(e,t,r){"use strict";var n=r(71),a=r.n(n),i=r(133);t.a=a.a.shape({id:a.a.string.isRequired,name:a.a.string.isRequired,boxArtURL:a.a.string.isRequired,viewersCount:a.a.number.isRequired,followersCount:a.a.number.isRequired,tags:a.a.arrayOf(i.a)})},210:function(e,t,r){"use strict";var n=r(70),a=r(384);t.a=function(){return Object(n.useContext)(a.a)}},211:function(e,t,r){"use strict";r.d(t,"a",function(){return l}),r.d(t,"b",function(){return s});r(25),r(24),r(78),r(73),r(72),r(38);var n=r(387),a=r(386),i=r(412);function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){u(e,t,r[t])})}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=function(e){var t=c(Object(n.a)(),1)[0],r=t.layout,u=t.typography,l=c(Object(i.a)("main"),1)[0],s={itemCount:e,containerWidth:l.width,containerHeight:l.height,maxImageWidth:r.maxCategoryWidth,maxImageHeight:r.maxCategoryHeight,detailHeight:Math.floor(u.sizeSecondary*u.lineHeight)+Math.floor(u.sizeTertiary*u.lineHeight)+2*r.gapSmall,spaceSides:Object(a.f)(l)?r.gapLarge:r.gapExtraLarge,spaceBetween:r.gapSmall,spaceBottom:r.gapMedium},d=o({},s,Object(a.e)(s));return o({},d,{getItemLayout:e&&Object(a.a)(d),renderItemStyle:e&&Object(a.b)(d)})},s=function(e){var t=c(Object(n.a)(),1)[0],r=t.layout,u=t.typography,l=c(Object(i.a)("main"),1)[0],s={itemCount:e,containerWidth:l.width,containerHeight:l.height,maxImageWidth:r.maxChannelWidth,maxImageHeight:r.maxChannelHeight,detailHeight:Math.floor(u.sizeSecondary*u.lineHeight)+Math.floor(u.sizeTertiary*u.lineHeight)+Math.floor(u.sizeTertiary*u.lineHeight)+2*r.gapSmall,spaceSides:Object(a.f)(l)?r.gapLarge:r.gapExtraLarge,spaceBetween:r.gapSmall,spaceBottom:r.gapMedium},d=o({},s,Object(a.e)(s));return o({},d,{getItemLayout:e&&Object(a.a)(d),renderItemStyle:e&&Object(a.b)(d)})}},212:function(e,t,r){"use strict";r(73),r(72),r(38);var n=r(71),a=r.n(n),i=r(70),o=r.n(i),u=r(134),c=r(210);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var s=function(e){var t=e.data,r=e.getItemLayout,n=e.initialNumToRender,a=e.numColumns,i=e.renderItem,s=e.renderHeader,d=e.renderFooter,m=e.testID,f=void 0===m?"grid-list":m,g=l(Object(c.a)(),1)[0];return o.a.createElement(u.a,{data:t,debug:g,disableVirtualization:!1,getItemLayout:r,horizontal:!1,initialNumToRender:n,legacyImplementation:!1,numColumns:a,refreshing:!1,renderItem:i,ListHeaderComponent:s,ListFooterComponent:d,testID:f})};s.propTypes={data:a.a.array.isRequired,getItemLayout:a.a.func,initialNumToRender:a.a.number.isRequired,numColumns:a.a.number.isRequired,renderItem:a.a.func.isRequired,renderHeader:a.a.any,renderFooter:a.a.any,testID:a.a.string},t.a=Object(i.memo)(s)},329:function(e,t,r){"use strict";t.a=function(e,t,r){return Math.max(Math.min(Math.round(e),r),t)}},339:function(e,t,r){"use strict";r.d(t,"a",function(){return a});r(208);var n=r(163),a=function(e,t,r){var a=n.a.get("window").scale;return e.replace("{width}",Math.round(t*a)).replace("{height}",Math.round(r*a))}},342:function(e,t,r){"use strict";r(86);var n=r(82),a=r.n(n),i=r(207),o=r(132);function u(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query TopCategories($first: Int!) {\n    categories: games(first: $first) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        cursor\n        node {\n          ...Category\n          tags(tagType: CONTENT) {\n            ...Tag\n          }\n        }\n      }\n    }\n  }\n  ","\n  ","\n"]);return u=function(){return e},e}t.a=a()(u(),i.a,o.a)},343:function(e,t,r){"use strict";r.d(t,"a",function(){return u});var n=r(390),a=r(117),i=function(e){return e.categories.edges},o=Object(a.a)(i),u=Object(n.a)(Object(a.b)(i),o)},356:function(e,t,r){"use strict";var n=r(70),a=r.n(n),i=r(388),o=(r(73),r(72),r(38),r(87),r(209)),u=r(387),c=r(71),l=r.n(c),s=r(74),d=r(411),m=r(407),f=r(135),g=r(76),y=r(165);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=function(e){var t=e.name,r=e.viewersCount,n=e.width,i=e.isHighlighted,o=e.testID,c=void 0===o?"category-item-detail":o,l=Object(f.b)().t,s=h(Object(u.a)(),1)[0],d=s.colors,m=s.layout,p=s.typography,v={paddingHorizontal:m.gapMedium,paddingVertical:m.gapSmall,width:n},O=[b.primaryText,{color:i?d.itemPrimaryHover:d.itemPrimary,fontSize:p.sizeSecondary}],w={color:i?d.itemSecondaryHover:d.itemSecondary,fontSize:p.sizeTertiary};return a.a.createElement(g.a,{style:v,testID:c},a.a.createElement(y.a,{"aria-hidden":!0,numberOfLines:1,style:O},t),a.a.createElement(y.a,{numberOfLines:1,style:w},l("components.item.viewersCount",{count:r})))};p.propTypes={name:l.a.string.isRequired,viewersCount:l.a.number.isRequired,width:l.a.number.isRequired,isHighlighted:l.a.bool,testID:l.a.string};var b=s.a.create({primaryText:{fontWeight:"bold"}}),v=Object(n.memo)(p),O=r(118),w=r(339);function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var I=function(e){var t=e.url,r=e.name,n=e.width,i=e.height,o=e.testID,c=void 0===o?"category-item-image":o,l=j(Object(u.a)(),1)[0],s=l.colors,d=l.layout,m=Object(w.a)(t,d.maxCategoryWidth,d.maxCategoryHeight),f=[E.image,{backgroundColor:s.itemBackground,height:i,width:n}];return a.a.createElement(O.a,{source:{uri:m},accessibilityLabel:r,style:f,testID:c})};I.propTypes={url:l.a.string.isRequired,name:l.a.string.isRequired,width:l.a.number.isRequired,height:l.a.number.isRequired,testID:l.a.string};var E=s.a.create({image:{display:"block"}}),T=Object(n.memo)(I);function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var S=function(e){var t=e.item,r=t.name,n=t.boxArtURL,i=t.viewersCount,o=e.width,c=e.height,l=e.testID,s=void 0===l?"category-item":l,f=R(Object(u.a)(),1)[0].colors;return a.a.createElement(d.a,null,function(e){var t={backgroundColor:f.itemBackgroundHover},u=[C.root,e?t:void 0];return a.a.createElement(m.a,{href:"/categories/".concat(r),style:u,activeStyle:t,testID:s},a.a.createElement(T,{url:n,name:r,width:o,height:c,testID:"".concat(s,"-image")}),a.a.createElement(v,{name:r,viewersCount:i,width:o,isHighlighted:e,testID:"".concat(s,"-detail")}))})};S.propTypes={item:o.a.isRequired,width:l.a.number.isRequired,height:l.a.number.isRequired,testID:l.a.string};var C=s.a.create({root:{display:"block",outlineStyle:"none"}}),x=Object(n.memo)(S);function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var z=function(e){var t=e.width,r=e.height,n=e.testID,i=void 0===n?"category-item-error":n,o=Object(f.b)().t,c=H(Object(u.a)(),1)[0],l=c.colors,s=c.layout,d=c.typography,m=[q.image,{backgroundColor:l.itemBackground,height:r,width:t}],h={paddingHorizontal:s.gapMedium,paddingVertical:s.gapSmall,width:t},p=[q.detailPrimary,{color:l.itemPrimary,fontSize:d.sizeSecondary}],b={color:l.itemSecondary,fontSize:d.sizeTertiary};return a.a.createElement(g.a,{style:q.root,testID:i},a.a.createElement(g.a,{style:m,testID:"".concat(i,"-image")}),a.a.createElement(g.a,{style:h,testID:"".concat(i,"-detail")},a.a.createElement(y.a,{numberOfLines:1,style:p},o("errors.failedToRender")),a.a.createElement(y.a,{numberOfLines:1,style:b}," ")))};z.propTypes={width:l.a.number.isRequired,height:l.a.number.isRequired,testID:l.a.string};var q=s.a.create({root:{display:"block"},image:{display:"block"},detailPrimary:{fontWeight:"bold",textTransform:"uppercase"}}),D=Object(n.memo)(z);t.a=function(e){return a.a.createElement(i.a,{renderError:function(){return a.a.createElement(D,e)}},a.a.createElement(x,e))}},405:function(e,t,r){"use strict";r.r(t);var n=r(135),a=r(70),i=r.n(a),o=r(342),u=r(343),c=r(329),l=r(71),s=r.n(l),d=r(403),m=r(209),f=r(74),g=r(76),y=r(211),h=r(356),p=r(212),b=function(e){var t=e.list,r=e.renderHeader,n=e.renderFooter,o=e.testID,u=void 0===o?"category-grid":o,c=Object(y.a)(t.length),l=c.numColumns,s=c.numRows,d=c.imageWidth,m=c.imageHeight,f=c.getItemLayout,b=c.renderItemStyle,O=Object(a.useCallback)(function(e){var t=e.item,r=e.index,n=[v.item,b(r)];return i.a.createElement(g.a,{style:n},i.a.createElement(h.a,{item:t,width:d,height:m}))},[d,m]);return i.a.createElement(p.a,{key:"".concat(d,"x").concat(m),data:t,initialNumToRender:s,numColumns:l,getItemLayout:f,renderItem:O,renderHeader:r,renderFooter:n,testID:u})};b.propTypes={list:s.a.arrayOf(m.a).isRequired,renderHeader:s.a.any,renderFooter:s.a.any,testID:s.a.string};var v=f.a.create({item:{display:"block"}}),O=Object(a.memo)(b),w=r(164),j=r(389),I=function(e){var t=e.heading,r=e.testID,n=void 0===r?"all-categories":r,l=Object(y.a)(),s=l.numColumns,m=l.numRows,f=Object(c.a)(s*(m+1),20,80),g=Object(d.a)(o.a,{suspend:!0,variables:{first:f}}),h=g.data,p=g.error,b=g.refetch,v=p?void 0:Object(u.a)(h),I=Object(a.useCallback)(function(){return i.a.createElement(w.a,{level:"2"},t)},[t]);return p?i.a.createElement(j.a,{onPress:b}):i.a.createElement(O,{list:v,renderHeader:I,testID:n})};I.propTypes={heading:s.a.string,testID:s.a.string};var E=Object(a.memo)(I),T=Object(a.memo)(function(){var e=Object(n.b)().t;return i.a.createElement(E,{heading:e("pages.categories.mainHeading")})});r.d(t,"default",function(){return T})}}]);
//# sourceMappingURL=categories.js.map