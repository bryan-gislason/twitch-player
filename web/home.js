(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{342:function(e,t,r){"use strict";r(86);var a=r(82),n=r.n(a),i=r(207),o=r(132);function c(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query TopCategories($first: Int!) {\n    categories: games(first: $first) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        cursor\n        node {\n          ...Category\n          tags(tagType: CONTENT) {\n            ...Tag\n          }\n        }\n      }\n    }\n  }\n  ","\n  ","\n"]);return c=function(){return e},e}t.a=n()(c(),i.a,o.a)},343:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var a=r(390),n=r(117),i=function(e){return e.categories.edges},o=Object(n.a)(i),c=Object(a.a)(Object(n.b)(i),o)},344:function(e,t,r){"use strict";r(86);var a=r(82),n=r.n(a),i=r(414);function o(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query TopChannels($first: Int!, $platformType: PlatformType = all) {\n    channels: streams(first: $first, platformType: $platformType) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        cursor\n        node {\n          ...Channel\n        }\n      }\n    }\n  }\n  ","\n"]);return o=function(){return e},e}t.a=n()(o(),i.a)},356:function(e,t,r){"use strict";var a=r(70),n=r.n(a),i=r(388),o=(r(73),r(72),r(38),r(87),r(209)),c=r(387),u=r(71),l=r.n(u),s=r(74),d=r(411),m=r(407),f=r(135),g=r(76),y=r(165);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){n=!0,i=e}finally{try{a||null==c.return||c.return()}finally{if(n)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=function(e){var t=e.name,r=e.viewersCount,a=e.width,i=e.isHighlighted,o=e.testID,u=void 0===o?"category-item-detail":o,l=Object(f.b)().t,s=h(Object(c.a)(),1)[0],d=s.colors,m=s.layout,p=s.typography,v={paddingHorizontal:m.gapMedium,paddingVertical:m.gapSmall,width:a},O=[b.primaryText,{color:i?d.itemPrimaryHover:d.itemPrimary,fontSize:p.sizeSecondary}],I={color:i?d.itemSecondaryHover:d.itemSecondary,fontSize:p.sizeTertiary};return n.a.createElement(g.a,{style:v,testID:u},n.a.createElement(y.a,{"aria-hidden":!0,numberOfLines:1,style:O},t),n.a.createElement(y.a,{numberOfLines:1,style:I},l("components.item.viewersCount",{count:r})))};p.propTypes={name:l.a.string.isRequired,viewersCount:l.a.number.isRequired,width:l.a.number.isRequired,isHighlighted:l.a.bool,testID:l.a.string};var b=s.a.create({primaryText:{fontWeight:"bold"}}),v=Object(a.memo)(p),O=r(118),I=r(339);function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){n=!0,i=e}finally{try{a||null==c.return||c.return()}finally{if(n)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var w=function(e){var t=e.url,r=e.name,a=e.width,i=e.height,o=e.testID,u=void 0===o?"category-item-image":o,l=j(Object(c.a)(),1)[0],s=l.colors,d=l.layout,m=Object(I.a)(t,d.maxCategoryWidth,d.maxCategoryHeight),f=[E.image,{backgroundColor:s.itemBackground,height:i,width:a}];return n.a.createElement(O.a,{source:{uri:m},accessibilityLabel:r,style:f,testID:u})};w.propTypes={url:l.a.string.isRequired,name:l.a.string.isRequired,width:l.a.number.isRequired,height:l.a.number.isRequired,testID:l.a.string};var E=s.a.create({image:{display:"block"}}),T=Object(a.memo)(w);function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){n=!0,i=e}finally{try{a||null==c.return||c.return()}finally{if(n)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var D=function(e){var t=e.item,r=t.name,a=t.boxArtURL,i=t.viewersCount,o=e.width,u=e.height,l=e.testID,s=void 0===l?"category-item":l,f=C(Object(c.a)(),1)[0].colors;return n.a.createElement(d.a,null,function(e){var t={backgroundColor:f.itemBackgroundHover},c=[x.root,e?t:void 0];return n.a.createElement(m.a,{href:"/categories/".concat(r),style:c,activeStyle:t,testID:s},n.a.createElement(T,{url:a,name:r,width:o,height:u,testID:"".concat(s,"-image")}),n.a.createElement(v,{name:r,viewersCount:i,width:o,isHighlighted:e,testID:"".concat(s,"-detail")}))})};D.propTypes={item:o.a.isRequired,width:l.a.number.isRequired,height:l.a.number.isRequired,testID:l.a.string};var x=s.a.create({root:{display:"block",outlineStyle:"none"}}),H=Object(a.memo)(D);function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){n=!0,i=e}finally{try{a||null==c.return||c.return()}finally{if(n)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var R=function(e){var t=e.width,r=e.height,a=e.testID,i=void 0===a?"category-item-error":a,o=Object(f.b)().t,u=S(Object(c.a)(),1)[0],l=u.colors,s=u.layout,d=u.typography,m=[q.image,{backgroundColor:l.itemBackground,height:r,width:t}],h={paddingHorizontal:s.gapMedium,paddingVertical:s.gapSmall,width:t},p=[q.detailPrimary,{color:l.itemPrimary,fontSize:d.sizeSecondary}],b={color:l.itemSecondary,fontSize:d.sizeTertiary};return n.a.createElement(g.a,{style:q.root,testID:i},n.a.createElement(g.a,{style:m,testID:"".concat(i,"-image")}),n.a.createElement(g.a,{style:h,testID:"".concat(i,"-detail")},n.a.createElement(y.a,{numberOfLines:1,style:p},o("errors.failedToRender")),n.a.createElement(y.a,{numberOfLines:1,style:b}," ")))};R.propTypes={width:l.a.number.isRequired,height:l.a.number.isRequired,testID:l.a.string};var q=s.a.create({root:{display:"block"},image:{display:"block"},detailPrimary:{fontWeight:"bold",textTransform:"uppercase"}}),P=Object(a.memo)(R);t.a=function(e){return n.a.createElement(i.a,{renderError:function(){return n.a.createElement(P,e)}},n.a.createElement(H,e))}},401:function(e,t,r){"use strict";r.r(t);var a=r(135),n=r(71),i=r.n(n),o=r(70),c=r.n(o),u=r(215),l=(r(86),r(82)),s=r.n(l),d=r(414);function m(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query FeaturedChannels($first: Int!) {\n    channels: featuredStreams(first: $first) {\n      node: stream {\n        ...Channel\n      }\n    }\n  }\n  ","\n"]);return m=function(){return e},e}var f=s()(m(),d.a),g=r(390),y=r(117),h=function(e){return e.channels},p=Object(y.a)(h),b=Object(g.a)(Object(y.b)(h),p),v=r(329),O=r(403),I=r(409),j=r(74),w=r(76),E=(r(25),r(24),r(78),r(73),r(72),r(38),r(387)),T=r(386),C=r(412);function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.forEach(function(t){x(e,t,r[t])})}return e}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){n=!0,i=e}finally{try{a||null==c.return||c.return()}finally{if(n)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var S=function(e){var t=H(Object(E.a)(),1)[0].layout,r=H(Object(C.a)("main"),1)[0],a={itemCount:e,containerWidth:r.width,maxImageWidth:t.maxCategoryWidth,maxImageHeight:t.maxCategoryHeight,spaceSides:Object(T.f)(r)?t.gapLarge:t.gapExtraLarge,spaceBetween:t.gapSmall,spaceBottom:t.gapMedium},n=D({},a,Object(T.e)(a));return D({},n,{getItemLayout:e&&Object(T.c)(n),renderItemStyle:e&&Object(T.d)(n)})},R=function(e){var t=H(Object(E.a)(),1)[0].layout,r=H(Object(C.a)("main"),1)[0],a={itemCount:e,containerWidth:r.width,maxImageWidth:t.maxChannelWidth,maxImageHeight:t.maxChannelHeight,spaceSides:Object(T.f)(r)?t.gapLarge:t.gapExtraLarge,spaceBetween:t.gapSmall,spaceBottom:t.gapMedium},n=D({},a,Object(T.e)(a));return D({},n,{getItemLayout:e&&Object(T.c)(n),renderItemStyle:e&&Object(T.d)(n)})},q=r(402),P=r(134),k=r(210);function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){n=!0,i=e}finally{try{a||null==c.return||c.return()}finally{if(n)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var L=function(e){var t=e.data,r=e.getItemLayout,a=e.initialNumToRender,n=e.renderItem,i=e.renderHeader,u=e.renderFooter,l=e.testID,s=void 0===l?"horizontal-list":l,d=z(Object(k.a)(),1)[0];return c.a.createElement(w.a,{testID:s},i&&Object(o.createElement)(i),c.a.createElement(P.a,{data:t,debug:d,disableVirtualization:!1,getItemLayout:r,horizontal:!0,initialNumToRender:a,legacyImplementation:!1,numColumns:1,refreshing:!1,renderItem:n}),u&&Object(o.createElement)(u))};L.propTypes={data:i.a.array.isRequired,getItemLayout:i.a.func,initialNumToRender:i.a.number.isRequired,renderItem:i.a.func.isRequired,renderHeader:i.a.any,renderFooter:i.a.any,testID:i.a.string};var A=Object(o.memo)(L),W=function(e){var t=e.list,r=e.renderHeader,a=e.renderFooter,n=e.testID,i=void 0===n?"channel-list":n,u=R(t.length),l=u.numColumns,s=u.imageWidth,d=u.imageHeight,m=u.getItemLayout,f=u.renderItemStyle,g=Object(o.useCallback)(function(e){var t=e.item,r=e.index,a=[F.item,f(r)];return c.a.createElement(w.a,{style:a},c.a.createElement(q.a,{item:t,width:s,height:d}))},[s,d]);return c.a.createElement(A,{key:"".concat(s,"x").concat(d),data:t,getItemLayout:m,initialNumToRender:l+1,renderItem:g,renderHeader:r,renderFooter:a,testID:i})};W.propTypes={list:i.a.arrayOf(I.a).isRequired,renderHeader:i.a.any,renderFooter:i.a.any,testID:i.a.string};var F=j.a.create({item:{display:"block"}}),N=Object(o.memo)(W),$=r(164),B=r(389),M=function(e){var t=e.heading,r=e.testID,a=void 0===r?"featured-channels":r,n=R().numColumns,i=Object(v.a)(1.5*n,3,20),u=Object(O.a)(f,{suspend:!0,variables:{first:i}}),l=u.data,s=u.error,d=u.refetch,m=s?void 0:b(l),g=Object(o.useCallback)(function(){return c.a.createElement($.a,{level:"2"},t)},[t]);return s?c.a.createElement(B.a,{onPress:d}):c.a.createElement(N,{list:m,renderHeader:g,testID:a})};M.propTypes={heading:i.a.string.isRequired,testID:i.a.string};var V=Object(o.memo)(M),J=r(342),U=r(343),X=r(209),G=r(356),K=function(e){var t=e.list,r=e.renderHeader,a=e.renderFooter,n=e.testID,i=void 0===n?"category-list":n,u=S(t.length),l=u.numColumns,s=u.imageWidth,d=u.imageHeight,m=u.getItemLayout,f=u.renderItemStyle,g=Object(o.useCallback)(function(e){var t=e.item,r=e.index,a=[Q.item,f(r)];return c.a.createElement(w.a,{style:a},c.a.createElement(G.a,{item:t,width:s,height:d}))},[s,d]);return c.a.createElement(A,{key:"".concat(s,"x").concat(d),data:t,getItemLayout:m,initialNumToRender:l+1,renderItem:g,renderHeader:r,renderFooter:a,testID:i})};K.propTypes={list:i.a.arrayOf(X.a).isRequired,renderHeader:i.a.any,renderFooter:i.a.any,testID:i.a.string};var Q=j.a.create({item:{display:"block"}}),Y=Object(o.memo)(K),Z=function(e){var t=e.heading,r=e.testID,a=void 0===r?"top-categories":r,n=S().numColumns,i=Object(v.a)(1.5*n,6,40),u=Object(O.a)(J.a,{suspend:!0,variables:{first:i}}),l=u.data,s=u.error,d=u.refetch,m=s?void 0:Object(U.a)(l),f=Object(o.useCallback)(function(){return c.a.createElement($.a,{level:"2"},t)},[t]);return s?c.a.createElement(B.a,{onPress:d}):c.a.createElement(Y,{list:m,renderHeader:f,testID:a})};Z.propTypes={heading:i.a.string.isRequired,testID:i.a.string};var _=Object(o.memo)(Z),ee=r(344),te=r(398),re=function(e){var t=e.heading,r=e.platformType,a=void 0===r?"all":r,n=e.testID,i=void 0===n?"top-channels":n,u=R().numColumns,l=Object(v.a)(1.5*u,3,20),s=Object(O.a)(ee.a,{suspend:!0,variables:{platformType:a,first:l}}),d=s.data,m=s.error,f=s.refetch,g=Object(te.b)(a),y=m?void 0:g(d),h=Object(o.useCallback)(function(){return c.a.createElement($.a,{level:"2"},t)},[t]);return m?c.a.createElement(B.a,{onPress:f}):c.a.createElement(N,{list:y,renderHeader:h,testID:"".concat(i,"-").concat(a)})};re.propTypes={heading:i.a.string.isRequired,platformType:i.a.oneOf(["all","ps4","xbox"]),testID:i.a.string};var ae=Object(o.memo)(re),ne=function(e){var t=e.testID,r=void 0===t?"home-page":t,n=Object(a.b)().t;return c.a.createElement(u.a,{testID:r},c.a.createElement(V,{heading:n("pages.home.featuredChannelsHeading")}),c.a.createElement(_,{heading:n("pages.home.topCategoriesHeading")}),c.a.createElement(ae,{heading:n("pages.home.topChannelsHeading")}),c.a.createElement(ae,{platformType:"ps4",heading:n("pages.home.topPS4ChannelsHeading")}),c.a.createElement(ae,{platformType:"xbox",heading:n("pages.home.topXboxOneChannelsHeading")}))};ne.propTypes={testID:i.a.string};var ie=Object(o.memo)(ne);r.d(t,"default",function(){return ie})}}]);
//# sourceMappingURL=home.js.map