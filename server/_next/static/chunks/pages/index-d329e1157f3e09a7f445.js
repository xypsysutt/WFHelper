(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1718:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return yn}});var r=t(7294),i=t(4433),c=t(6155),o=t(5683),a=t(1508),s=t(4656),l=t(219),u=t(2809),d=t(2658),f=t(2640),h=t(9602),x=t(5893),p=["icon","title"];function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b=(0,h.ZP)(a.Z)((function(){return{display:"flex",flexDirection:"column",alignItems:"center"}})),v=(0,h.ZP)((function(e){return(0,x.jsx)(d.Z,g({variant:"caption"},e))}))((function(e){var n=e.theme;return{height:n.spacing(2),lineHeight:n.spacing(2),whiteSpace:"nowrap"}})),Z=function(e){var n=e.icon,t=e.title,r=(0,l.Z)(e,p);return(0,x.jsx)(f.Z,g({label:(0,x.jsxs)(b,{children:[n,(0,x.jsx)(v,{children:t})]})},r))},m=function(e){var n=e.validate,t=e.children;return n?(0,x.jsx)(x.Fragment,{children:t}):null},y=t(2618),O=((0,h.ZP)(y.Z)((function(){return{flex:1,width:"100%",height:"100%"}})),(0,h.ZP)(y.Z)((function(){return{flex:1,width:"100%",overflowY:"hidden"}})),(0,h.ZP)(y.Z)((function(){return{flex:1,height:"100%",overflowX:"hidden"}}))),w=(0,h.ZP)(a.Z)((function(){return(0,u.Z)({display:"flex",flexGrow:1},"&[hidden]",{display:"none"})})),P=function(e){var n=e.value,t=e.index,r=e.children;return(0,x.jsx)(w,{role:"tabpanel",hidden:n!==t,children:(0,x.jsx)(O,{children:(0,x.jsx)(m,{validate:n===t,children:r})})})},C=t(4235),S=t(3720),D=t(4386),k=t(6447),E=t(4422),M=t(318),I=t(461),_=t(1987);function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function H(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var R=function(e){var n=e.name,t=(0,E._y)(),i=(0,M.Z)(t,1)[0],c=(0,E.eH)("\u6b63\u5728\u6311\u6218\u7684boss"),o=Object.entries(i).filter((function(e){return 0===(0,M.Z)(e,1)[0].indexOf(n)})).reduce((function(e,n){var t=(0,M.Z)(n,2),r=t[0],i=t[1];return H(H({},e),{},(0,u.Z)({},r,i))}),{}),s=(0,r.useMemo)((function(){return Number(o[n])}),[JSON.stringify(o)]),l=(0,r.useMemo)((function(){return c&&0===String(c).indexOf(n)?(0,x.jsx)(I.Z,{color:"primary",size:"small",label:"\u6218\u6597\u4e2d"}):null}),[c]);return(0,x.jsx)(_.Z,{sx:l?{background:function(e){return e.palette.secondary.light}}:{},children:(0,x.jsxs)(a.Z,{display:"flex",alignItems:"center",px:2,minHeight:48,children:[(0,x.jsx)(d.Z,{sx:{width:150,flexShrink:0},children:n}),(0,x.jsx)(d.Z,{sx:{flex:1,color:"text.secondary"},children:s}),(0,x.jsx)(a.Z,{sx:{width:80,textAlign:"center",mr:1},children:l})]})})},L=function(e){var n=e.name;return(0,x.jsx)(R,{name:n})},T=t(6571),W=t(7425),A=t(1820),J=t(7720),z=t(5092),F=t(2440),U=t(576),G=t(4212),X=t(8619),Y=t(9334),B=t(6446),Q=t(7666),q=t(8487),K=t(3031),V=t(5305),$=t(4657),ee={"\u9ed8\u8ba4":"",A:"A",B:"B",C:"C",D:"D",E:"E",F:"F",G:"G",H:"H",I:"I",J:"J"},ne=function(e){var n=e.name,t=(0,E.eH)("\u94c3\u94db\u8bbe\u7f6e"),i=(0,E.eH)("\u94c3\u94db\u8ba1\u6570"),c=(0,E.eH)("\u5f53\u524d\u94c3\u94db"),o=(0,r.useMemo)((function(){return i?Object.entries(t[n]).reduce((function(e,n){var t=(0,M.Z)(n,2),r=(t[0],t[1]);return e+(i[r.name]||0)}),0):0}),[t,c,i]),s=(0,r.useMemo)((function(){var e=Object.entries(t[n]).find((function(e){var n=(0,M.Z)(e,2);n[0];return n[1].name===c.name}));return e?(0,x.jsx)(I.Z,{color:"primary",size:"small",label:e[0]}):null}),[t,c]),l=(0,r.useMemo)((function(){return Object.entries(t[n]).find((function(e){var n=(0,M.Z)(e,2);n[0];return n[1].enabled}))}),[t]),u=(0,r.useMemo)((function(){return s?function(e){return e.palette.secondary.light}:void 0===l?function(e){return e.palette.grey[400]}:void 0}),[s,l]);return(0,x.jsxs)(W.Z,{expandIcon:(0,x.jsx)(T.Z,{}),sx:{background:u},children:[(0,x.jsx)(d.Z,{sx:{width:150,flexShrink:0},children:n}),(0,x.jsx)(d.Z,{sx:{flex:1,color:"text.secondary"},children:o}),(0,x.jsx)(a.Z,{sx:{width:80,textAlign:"center",mr:1},children:s})]})},te=function(e){var n=e.name,t=(0,r.useContext)($.J).sendMessage,i=(0,E.eH)("\u94c3\u94db\u8bbe\u7f6e"),c=(0,E.eH)("\u94c3\u94db\u8ba1\u6570"),o=(0,r.useCallback)((function(e,r){return function(){t("mergeConfigSettings",{"\u94c3\u94db\u8bbe\u7f6e":(0,u.Z)({},n,(0,u.Z)({},e,{enabled:!r}))})}}),[n,i,t]),s=(0,r.useCallback)((function(e){return function(r){t("mergeConfigSettings",{"\u94c3\u94db\u8bbe\u7f6e":(0,u.Z)({},n,(0,u.Z)({},e,{party:r.target.value}))})}}),[n,i,t]),l=function(e){e.stopPropagation()};return i[n]?(0,x.jsxs)(A.Z,{children:[(0,x.jsx)(ne,{name:n}),(0,x.jsx)(J.Z,{}),(0,x.jsx)(z.Z,{sx:{p:1},children:(0,x.jsx)(F.Z,{sx:{p:0,width:"100%",bgcolor:"background.paper"},children:Object.entries(i[n]).map((function(e){var n=(0,M.Z)(e,2),t=n[0],r=n[1],i=r.name,u=r.party,f=r.enabled;return(0,x.jsx)(U.ZP,{secondaryAction:(0,x.jsx)(G.Z,{edge:"end",onChange:o(t,f),checked:f}),disablePadding:!0,children:(0,x.jsx)(X.Z,{sx:{pl:1},onClick:o(t,f),children:(0,x.jsx)(Y.Z,{primary:(0,x.jsxs)(a.Z,{display:"flex",alignItems:"center",children:[(0,x.jsx)(d.Z,{sx:{width:150,flexShrink:0},children:t}),(0,x.jsx)(d.Z,{sx:{flex:1,color:"text.secondary"},children:c?c[i]:""}),(0,x.jsxs)(B.Z,{size:"small",sx:{width:80},children:[(0,x.jsx)(Q.Z,{shrink:!0,children:"\u961f\u4f0d"}),(0,x.jsx)(q.Z,{input:(0,x.jsx)(K.Z,{notched:!0,label:"\u961f\u4f0d"}),value:u,onClick:l,onChange:s(t),displayEmpty:!0,children:Object.entries(ee).map((function(e){var n=(0,M.Z)(e,2),t=n[0],r=n[1];return(0,x.jsx)(V.Z,{value:r,children:t},t)}))})]})]})})})},i)}))})})]}):null},re=function(e){var n=e.name;return(0,E.eH)("\u94c3\u94db\u8bbe\u7f6e")?(0,x.jsx)(te,{name:n}):(0,x.jsx)(L,{name:n})},ie=t(7676),ce=t(3160),oe=t(9041),ae=t(8629),se=["label"];function le(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ue(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?le(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):le(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var de=(0,h.ZP)(_.Z)((function(){return(0,u.Z)({},"&.".concat(ce.Z.root),{display:"inline-flex"})})),fe=(0,h.ZP)(a.Z)((function(e){var n=e.theme;return{display:"flex",flexDirection:"column",justifyContent:"space-evenly",padding:n.spacing(2),width:n.spacing(24)}})),he=(0,h.ZP)(oe.Z)((function(e){return{height:e.theme.spacing(1)}})),xe=function(e){var n=e.label,t=(0,l.Z)(e,se);return(0,x.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,x.jsx)(d.Z,{variant:"body2",noWrap:!0,children:n}),(0,x.jsx)(a.Z,{sx:{flex:1,mx:1},children:(0,x.jsx)(he,ue({variant:"determinate"},t))}),void 0!==t.value&&t.value>=0&&(0,x.jsx)(d.Z,{variant:"caption",color:"text.secondary",children:"".concat(t.value,"%")})]})},pe=function(e,n,t){for(var r=0,i=0;i<e.data.length;i+=4)Math.abs(e.data[i]-n[0])<=t&&Math.abs(e.data[i+1]-n[1])<=t&&Math.abs(e.data[i+2]-n[2])<=t&&(r+=1);return r/(e.data.length/4)},je=function(){var e=(0,E.eH)("\u5f53\u524d\u94c3\u94db"),n=(0,E.Qy)("server"),t=(0,r.useState)(-1),i=t[0],c=t[1],o=(0,r.useState)(-1),a=o[0],s=o[1],l=(0,r.useState)(null),u=l[0],d=l[1],f=(0,ie.ZP)(u),h=f.lastMessage,p=f.getWebSocket,j=(0,r.useCallback)((function(){"{}"===JSON.stringify(e)&&d(n?"ws://".concat(n,"/stream"):null)}),[e,n]);return(0,ae.Z)(j,1e4),(0,r.useEffect)((function(){return j(),function(){d(null)}}),[j]),(0,r.useEffect)((function(){if(h){var e=p();e&&e.close();var n=new Image;n.src=URL.createObjectURL(h.data),n.onload=function(){!function(e,n){var t=document.createElement("canvas"),r=t.getContext("2d");if(t.width=307,t.height=1,r){r.drawImage(e,95,23,t.width,t.height,0,0,t.width,t.height);var i=r.getImageData(0,0,t.width,t.height),c=pe(i,[255,158,25],2);c+pe(i,[49,53,49],2)===1&&n(Math.round(1e3*c)/10)}}(n,c),function(e,n){var t=document.createElement("canvas"),r=t.getContext("2d");if(t.width=92,t.height=92,r){r.drawImage(e,0,104,t.width,t.height,0,0,t.width,t.height);for(var i=r.getImageData(0,0,t.width,t.height),c=Math.PI/90,o={left:0,right:0},a=0;a<=90;a+=1){var s=Math.round(90*Math.cos(a*c)),l=Math.round(90*Math.sin(a*c));if(s>=0&&l>=0){var u=4*t.width*s+4*l;if(49===i.data[u]&&194===i.data[u+1]&&181===i.data[u+2])o.left+=1;else{if(49!==i.data[u]||53!==i.data[u+1]||49!==i.data[u+2])return;o.right+=1}}}n(Math.round(o.left/(o.left+o.right||1)*1e3)/10)}}(n,s),URL.revokeObjectURL(n.src)},d(null)}}),[h]),(0,x.jsx)(de,{children:(0,x.jsxs)(fe,{children:[(0,x.jsx)(xe,{label:"\u4f53\u529b",variant:i<0?"indeterminate":"determinate",color:i<100?"primary":"secondary",value:i}),(0,x.jsx)(xe,{label:"\u7ecf\u9a8c",variant:a<0?"indeterminate":"determinate",color:a<100?"primary":"secondary",value:a})]})})},ge=function(){return(0,E.eH)("\u5f53\u524d\u94c3\u94db")?(0,x.jsx)(je,{}):null},be=(0,h.ZP)(_.Z)((function(){return(0,u.Z)({},"&.".concat(ce.Z.root),{display:"inline-flex"})})),ve=(0,h.ZP)(a.Z)((function(e){var n=e.theme;return{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:n.spacing(2),width:n.spacing(24)}})),Ze=function(){var e=(0,r.useContext)($.J).sendMessage,n=(0,E.eH)("currentTargets"),t=(0,E.Gd)(),i=(0,M.Z)(t,1)[0];return(0,x.jsx)(be,{children:(0,x.jsxs)(ve,{children:[(0,x.jsx)(d.Z,{variant:"h6",children:"\u5f53\u524d\u4efb\u52a1"}),(0,x.jsx)(q.Z,{size:"small",value:n,onChange:function(n){e("changeTargets",n.target.value)},children:(i||[]).map((function(e){return(0,x.jsx)(V.Z,{value:e,children:e},e)}))})]})})},me=t(3543),ye=t(507),Oe=t(6878),we=function(){var e=(0,Oe.e)("isDebug"),n=(0,r.useMemo)((function(){return e||!1}),[e]);return(0,x.jsx)(m,{validate:n,children:(0,x.jsx)(ye.Z,{title:"\u8c03\u8bd5\u6a21\u5f0f",children:(0,x.jsx)(me.Z,{})})})},Pe=t(4356),Ce=t(6761),Se=t(5295),De=t(8515),ke=t(6867),Ee=t(9490),Me=(0,h.ZP)(a.Z)((function(e){var n=e.theme;return{display:"flex",alignItems:"center",padding:n.spacing(0,1.5),borderWidth:"0 0 1px",borderStyle:"solid",borderColor:n.palette.divider}})),Ie=function(e){var n=e.index,t=e.style,r=(0,E.eM)(),i=(0,M.Z)(r,1)[0];if(i&&n<i.length){var c=i[n],o=c.time,a=c.message;return(0,x.jsx)(ye.Z,{title:Ee.ou.fromSeconds(o).toLocaleString(Ee.ou.DATETIME_MED_WITH_SECONDS),children:(0,x.jsx)(Me,{style:t,sx:n%2===0?{background:function(e){return e.palette.grey[100]}}:{},children:(0,x.jsx)(d.Z,{variant:"body2",noWrap:!0,children:a})},n)})}return null},_e=function(){var e=(0,E.eM)(),n=(0,M.Z)(e,2),t=n[0],r=n[1];return(0,x.jsxs)(Se.Z,{children:[(0,x.jsx)(De.Z,{action:(0,x.jsx)(ye.Z,{title:"\u6e05\u7a7a",children:(0,x.jsx)(ke.Z,{onClick:function(){r([])},children:(0,x.jsx)(Ce.Z,{})})}),title:"\u65e5\u5fd7"}),(0,x.jsx)(J.Z,{}),(0,x.jsx)(Pe.t7,{className:"List",width:"100%",height:400,itemCount:t?t.length:0,itemSize:40,children:Ie})]})},Ne=t(8999),He=t(6634),Re=["className"];function Le(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Te(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Le(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Le(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var We=(0,h.ZP)(a.Z)((function(e){var n=e.theme;return{display:"flex",alignItems:"center",padding:n.spacing(0,1.5),borderWidth:"0 0 1px",borderStyle:"solid",borderColor:n.palette.divider}})),Ae=(0,h.ZP)((function(e){var n=e.className,t=(0,l.Z)(e,Re);return(0,x.jsx)(ye.Z,Te(Te({},t),{},{classes:{popper:n}}))}))((0,u.Z)({},"& .".concat(Ne.Z.tooltip),{maxWidth:"none",maxHeight:400,whiteSpace:"pre",overflowY:"auto"})),Je=function(e){var n,t=e.index,r=e.style,i=(0,E._y)(),c=(0,M.Z)(i,1)[0];if(c&&t<Object.keys(c).length){var o=Object.keys(c)[t];return(0,x.jsx)(We,{style:r,sx:t%2===0?{background:function(e){return e.palette.grey[100]}}:{},children:(0,x.jsxs)(d.Z,{component:"div",variant:"body2",noWrap:!0,sx:{display:"flex"},children:[o,": ",(n=c[o],"object"===typeof n?(0,x.jsx)(Ae,{placement:"top",title:JSON.stringify(n,null,4),children:(0,x.jsx)(He.Z,{component:"button",variant:"body2",sx:{ml:1},children:"\u67e5\u770b"})}):(0,x.jsx)(a.Z,{ml:1,children:String(n)}))]})},t)}return null},ze=function(){var e=(0,E._y)(),n=(0,M.Z)(e,1)[0];return(0,x.jsxs)(Se.Z,{children:[(0,x.jsx)(De.Z,{title:"\u6742\u9879"}),(0,x.jsx)(J.Z,{}),(0,x.jsx)(Pe.t7,{className:"List",width:"100%",height:400,itemCount:Object.keys(n||{}).length,itemSize:40,children:Je})]})},Fe=t(9149),Ue=function(){var e=(0,r.useContext)($.J).sendMessage,n=(0,Oe.e)("isRunning"),t=(0,r.useMemo)((function(){return n||!1}),[n]),i=(0,r.useCallback)((function(n,t){e(t?"startWFHelper":"stopWFHelper")}),[e]);return(0,x.jsx)(ye.Z,{title:t?"\u542f\u7528":"\u6682\u505c",children:(0,x.jsx)(Fe.Z,{color:"secondary",onChange:i,checked:t})})},Ge=(0,h.ZP)(_.Z)((function(){return(0,u.Z)({},"&.".concat(ce.Z.root),{display:"inline-flex"})})),Xe=(0,h.ZP)(a.Z)((function(e){var n=e.theme;return{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:n.spacing(2),width:n.spacing(24)}})),Ye=function(){var e=(0,Oe.e)("startTime"),n=(0,Oe.e)("lastActionTime"),t=(0,r.useState)(null),i=t[0],c=t[1],o=(0,r.useState)(null),a=o[0],s=o[1];return(0,ae.Z)((function(){c((function(){return e?Ee.ou.fromSeconds(Number(e)).toRelative():null})),s((function(){return n?Ee.ou.fromSeconds(Number(n)).toRelative():null}))}),1e3,{immediate:!0}),(0,x.jsxs)(Ge,{children:[(0,x.jsxs)(Xe,{children:[(0,x.jsx)(d.Z,{variant:"h6",children:"\u5f00\u59cb\u65f6\u95f4"}),(0,x.jsx)(d.Z,{children:e?Ee.ou.fromSeconds(Number(e)).toLocaleString(Ee.ou.DATETIME_MED_WITH_SECONDS):"-"}),(0,x.jsx)(d.Z,{variant:"caption",sx:{mt:1},children:i||"-"})]}),(0,x.jsx)(J.Z,{orientation:"vertical",flexItem:!0}),(0,x.jsxs)(Xe,{children:[(0,x.jsx)(d.Z,{variant:"h6",children:"\u6d3b\u8dc3\u65f6\u95f4"}),(0,x.jsx)(d.Z,{children:n?Ee.ou.fromSeconds(Number(n)).toLocaleString(Ee.ou.DATETIME_MED_WITH_SECONDS):"-"}),(0,x.jsx)(d.Z,{variant:"caption",sx:{mt:1},children:a||"-"})]})]})},Be=(0,h.ZP)(S.Z)((function(e){return{zIndex:e.theme.zIndex.drawer+1}})),Qe=(0,h.ZP)(D.Z)((function(e){return{padding:e.theme.spacing(0,2)}})),qe=function(){return(0,x.jsx)(Be,{position:"static",children:(0,x.jsxs)(Qe,{disableGutters:!0,children:[(0,x.jsx)(d.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:"WFHelper"}),(0,x.jsxs)(k.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,x.jsx)(we,{}),(0,x.jsx)(Ue,{})]})]})})},Ke=(0,C.Z)((function(e){return{root:{display:"flex",flexDirection:"column",backgroundColor:e.palette.background.default,minWidth:e.breakpoints.values.md,height:"100%"},container:{display:"flex",flex:1,overflow:"hidden"}}})),Ve=function(e){var n=e.children,t=Ke();return(0,x.jsxs)("div",{className:t.root,children:[(0,x.jsx)(qe,{}),(0,x.jsx)("div",{className:t.container,children:n})]})},$e=t(558),en=t(6344),nn=t(9062),tn=["children"];function rn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function cn(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?rn(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):rn(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var on=(0,r.createContext)({}),an=function(e){var n=e.children,t=(0,l.Z)(e,tn),i=(0,r.useContext)(on).loading;return(0,x.jsx)(on.Provider,{value:cn(cn({},t),{},{loading:i||t.loading}),children:n})},sn=(0,h.ZP)(en.Z)((function(e){var n=e.theme;return{position:"absolute",background:n.palette.action.disabledBackground,zIndex:n.zIndex.modal}})),ln=function(){var e=(0,r.useContext)(on).loading||!1;return e?(0,x.jsx)(sn,{transitionDuration:{enter:1e3},open:e,children:(0,x.jsx)(nn.Z,{})}):null},un=(0,h.ZP)(_.Z)((function(e){var n=e.theme;return(0,u.Z)({},"&.".concat(ce.Z.root),{display:"flex",justifyContent:"space-between",padding:n.spacing(4),backgroundColor:n.palette.grey[100]})})),dn=function(e){var n=e.children,t=(0,r.useContext)($.J).connected;return(0,x.jsx)(an,{loading:!1===t,children:(0,x.jsx)(on.Consumer,{children:function(e){return e.loading?(0,x.jsx)(ln,{}):(0,x.jsx)(x.Fragment,{children:n})}})})},fn=function(){return(0,x.jsxs)(dn,{children:[(0,x.jsxs)(un,{children:[(0,x.jsx)(Ze,{}),(0,x.jsx)(ge,{}),(0,x.jsx)(Ye,{})]}),(0,x.jsx)($e.ZP,{container:!0,p:2,pb:0,spacing:2,children:["\u516b\u5c90\u5927\u86c7","\u7ba1\u7406\u8005","\u8bc5\u5492\u5f27\u9b54\u827e\u57fa\u5c14","\u4e0d\u6b7b\u738b\u745e\u897f\u5854\u5c14","\u767d\u864e","\u5bc4\u5c45\u87f9\u8239\u957f","\u5e9f\u589f\u9b54\u50cf","\u7ef4\xb7\u7d22\u62c9\u65af","\u4f0a\u5c14\u8003\u666e\u65af"].map((function(e){return(0,x.jsx)($e.ZP,{item:!0,xs:4,children:(0,x.jsx)(re,{name:e})},e)}))}),(0,x.jsxs)($e.ZP,{container:!0,p:2,spacing:2,children:[(0,x.jsx)($e.ZP,{item:!0,xs:6,children:(0,x.jsx)(_e,{})}),(0,x.jsx)($e.ZP,{item:!0,xs:6,children:(0,x.jsx)(ze,{})})]})]})},hn=function(e){var n=e.children,t=(0,r.useContext)($.J).connected;return(0,x.jsx)(an,{loading:!1===t,children:(0,x.jsx)(on.Consumer,{children:function(e){return e.loading?(0,x.jsx)(ln,{}):(0,x.jsx)(x.Fragment,{children:n})}})})},xn=function(){var e=(0,r.useRef)(null),n=(0,E.Qy)("server"),t=(0,r.useContext)($.J).sendMessage,i=(0,r.useState)(null),c=i[0],o=i[1],a=(0,ie.ZP)(c,{reconnectAttempts:1/0,reconnectInterval:1e4}).lastMessage;(0,r.useEffect)((function(){return o(n?"ws://".concat(n,"/stream"):null),function(){o(null)}}),[n]);return(0,r.useEffect)((function(){if(e&&e.current){var n=e.current,r={x:0,y:0,mousedown:function(e){r.x=e.clientX,r.y=e.clientY},mouseup:function(i){if(r.x&&r.y)if(Math.abs(i.clientX-r.x)>10||Math.abs(i.clientY-r.y)>10){var c=n.getBoundingClientRect();!function(n,r,i,c){if(e&&e.current){var o=e.current,a=o.getContext("2d");"not-allowed"!==o.style.cursor&&(o.style.cursor="not-allowed",a&&(a.globalCompositeOperation="destination-out",a.fillStyle="rgba(255, 255, 255, 0.5)",a.beginPath(),a.fillRect(0,0,o.width,o.height),a.fill(),a.globalCompositeOperation="source-over"),t("swipeScreen",{x1:n,y1:r,x2:i,y2:c}))}}(r.x-c.left,r.y-c.top,i.clientX-c.left,i.clientY-c.top)}else{var o=n.getBoundingClientRect();!function(n,r){if(e&&e.current){var i=e.current,c=i.getContext("2d");"not-allowed"!==i.style.cursor&&(i.style.cursor="not-allowed",c&&(c.globalCompositeOperation="destination-out",c.fillStyle="rgba(255, 255, 255, 0.5)",c.beginPath(),c.fillRect(0,0,i.width,i.height),c.fill(),c.globalCompositeOperation="source-over"),t("touchScreen",{x:n,y:r}))}}(i.clientX-o.left,i.clientY-o.top)}r.x=0,r.y=0}};n.addEventListener("mousedown",r.mousedown),n.addEventListener("mouseup",r.mouseup),n.addEventListener("mouseleave",r.mouseup)}}),[e]),(0,r.useEffect)((function(){if(e&&e.current&&a){var n=e.current,t=n.getContext("2d"),r=new Image;r.src=URL.createObjectURL(a.data),r.onload=function(){n.width=r.width,n.height=r.height,n.style.cursor="auto",t&&t.drawImage(r,0,0),URL.revokeObjectURL(r.src)}}}),[e,a]),(0,x.jsx)(hn,{children:(0,x.jsx)("canvas",{ref:e})})},pn=t(5116),jn=t(270),gn=t(6914);function bn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function vn(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?bn(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):bn(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Zn=function(){var e=(0,E.Aj)(),n=(0,M.Z)(e,2),t=n[0],i=n[1],c=(0,E.Qy)("server"),o=(0,r.useState)(""),a=o[0],s=o[1];(0,r.useEffect)((function(){c&&c!==a&&s(c)}),[c]);return t?(0,x.jsx)($e.ZP,{item:!0,xs:!0,children:(0,x.jsx)(B.Z,{fullWidth:!0,children:(0,x.jsx)(pn.Z,{label:"\u670d\u52a1\u5668\u5730\u5740",value:a,onChange:function(e){s(e.target.value)},InputProps:{endAdornment:(0,x.jsx)(jn.Z,{position:"end",children:(0,x.jsx)(gn.Z,{onClick:function(){t&&i(vn(vn({},t),{},{server:a}))},children:"\u786e\u8ba4"})})}})})}):null},mn=function(){return(0,x.jsx)($e.ZP,{container:!0,p:2,spacing:2,children:(0,x.jsx)(Zn,{})})},yn=function(){var e=(0,r.useState)(0),n=e[0],t=e[1];return(0,x.jsx)(Ve,{children:(0,x.jsxs)(a.Z,{sx:{flexGrow:1,display:"flex"},children:[(0,x.jsxs)(s.Z,{orientation:"vertical",variant:"scrollable",value:n,onChange:function(e,n){t(n)},sx:{borderRight:1,borderColor:"divider",background:function(e){return e.palette.background.paper}},children:[(0,x.jsx)(Z,{icon:(0,x.jsx)(i.Z,{}),title:"\u4eea\u8868\u76d8"}),(0,x.jsx)(Z,{icon:(0,x.jsx)(c.Z,{}),title:"\u5c4f\u5e55"}),(0,x.jsx)(Z,{icon:(0,x.jsx)(o.Z,{}),title:"\u8bbe\u7f6e"})]}),(0,x.jsx)(P,{value:n,index:0,children:(0,x.jsx)(fn,{})}),(0,x.jsx)(P,{value:n,index:1,children:(0,x.jsx)(xn,{})}),(0,x.jsx)(P,{value:n,index:2,children:(0,x.jsx)(mn,{})})]})})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1718)}])}},function(e){e.O(0,[809,242,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);