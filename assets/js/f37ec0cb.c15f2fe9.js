"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7462),r=n(7294),l=n(6010),i=n(2466),o=n(6550),p=n(1980),s=n(7392),u=n(12);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,p._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function N(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[p,s]=k({queryString:n,groupId:a}),[m,N]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=p??m;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),N(e)}),[s,N,l]),tabValues:l}}var b=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:o,selectValue:p,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==o&&(m(t),p(a))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:c,onClick:d},i,{className:(0,l.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function h(e){const t=N(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return r.createElement(h,(0,a.Z)({key:String(t)},e))}},1910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),i=n(5162);const o={title:"admin namespace",sidebar_label:"admin",sidebar_position:0},p=void 0,s={unversionedId:"interacting/json-rpc/admin",id:"interacting/json-rpc/admin",title:"admin namespace",description:"admin_addPeer",source:"@site/docs/interacting/json-rpc/admin.md",sourceDirName:"interacting/json-rpc",slug:"/interacting/json-rpc/admin",permalink:"/docs/interacting/json-rpc/admin",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/interacting/json-rpc/admin.md",tags:[],version:"current",lastUpdatedAt:1694728765,formattedLastUpdatedAt:"Sep 14, 2023",sidebarPosition:0,frontMatter:{title:"admin namespace",sidebar_label:"admin",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"JSON-RPC",permalink:"/docs/category/json-rpc"},next:{title:"clique",permalink:"/docs/interacting/json-rpc/clique"}},u={},m=[{value:"admin_addPeer",id:"admin_addpeer",level:3},{value:"admin_nodeInfo",id:"admin_nodeinfo",level:3},{value:"admin_peers",id:"admin_peers",level:3},{value:"admin_prune",id:"admin_prune",level:3},{value:"admin_removePeer",id:"admin_removepeer",level:3}],d={toc:m},c="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"admin_addpeer"},"admin_addPeer"),(0,r.kt)("p",null,"Adds given node."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"params",label:"Parameters",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"enode"),": ",(0,r.kt)("em",{parentName:"p"},"string"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"addToStaticNodes"),": ",(0,r.kt)("em",{parentName:"p"},"boolean"))))),(0,r.kt)(i.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "admin_addPeer",\n      "params": [enode, addToStaticNodes]\n    }\'\n'))),(0,r.kt)(i.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("p",null,"Added node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"result"),": ",(0,r.kt)("em",{parentName:"p"},"string")))),(0,r.kt)("h3",{id:"admin_nodeinfo"},"admin_nodeInfo"),(0,r.kt)("p",null,"Displays relevant information about this node."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "admin_nodeInfo",\n      "params": []\n    }\'\n'))),(0,r.kt)(i.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("p",null,"Information about this node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"result"),": ",(0,r.kt)("em",{parentName:"p"},"object")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enode"),": ",(0,r.kt)("em",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,r.kt)("em",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ip"),": ",(0,r.kt)("em",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"listenAddr"),": ",(0,r.kt)("em",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,r.kt)("em",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ports"),": ",(0,r.kt)("em",{parentName:"li"},"object"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"discovery"),": ",(0,r.kt)("em",{parentName:"li"},"string")," (hex integer)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"listener"),": ",(0,r.kt)("em",{parentName:"li"},"string")," (hex integer)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"protocols"),": map of ",(0,r.kt)("em",{parentName:"li"},"object"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"network"),": ",(0,r.kt)("em",{parentName:"li"},"string")," (hex integer)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"difficulty"),": ",(0,r.kt)("em",{parentName:"li"},"string")," (hex integer)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"genesis"),": ",(0,r.kt)("em",{parentName:"li"},"string")," (hash)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"head"),": ",(0,r.kt)("em",{parentName:"li"},"string")," (hash)")))))),(0,r.kt)("h3",{id:"admin_peers"},"admin_peers"),(0,r.kt)("p",null,"Displays a list of connected peers including information about them (",(0,r.kt)("inlineCode",{parentName:"p"},"clientId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"host"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"port"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"address"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"isBootnode"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"isStatic"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"enode"),")."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"params",label:"Parameters",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"includeDetails"),": ",(0,r.kt)("em",{parentName:"li"},"boolean")))),(0,r.kt)(i.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "admin_peers",\n      "params": [includeDetails]\n    }\'\n'))),(0,r.kt)(i.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("p",null,"List of connected peers including information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"result"),": array of ",(0,r.kt)("em",{parentName:"p"},"object")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address"),": ",(0,r.kt)("em",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clientId"),": ",(0,r.kt)("em",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clientType"),": ",(0,r.kt)("em",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enode"),": ",(0,r.kt)("em",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ethDetails"),": ",(0,r.kt)("em",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"host"),": ",(0,r.kt)("em",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isBootnode"),": ",(0,r.kt)("em",{parentName:"li"},"boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isStatic"),": ",(0,r.kt)("em",{parentName:"li"},"boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isTrusted"),": ",(0,r.kt)("em",{parentName:"li"},"boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lastSignal"),": ",(0,r.kt)("em",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"port"),": ",(0,r.kt)("em",{parentName:"li"},"string")," (hex integer)")))),(0,r.kt)("h3",{id:"admin_prune"},"admin_prune"),(0,r.kt)("p",null,"Runs full pruning if enabled."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "admin_prune",\n      "params": []\n    }\'\n'))),(0,r.kt)(i.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"result"),": ",(0,r.kt)("em",{parentName:"p"},"integer")))),(0,r.kt)("h3",{id:"admin_removepeer"},"admin_removePeer"),(0,r.kt)("p",null,"Removes given node."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"params",label:"Parameters",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"enode"),": ",(0,r.kt)("em",{parentName:"p"},"string"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"removeFromStaticNodes"),": ",(0,r.kt)("em",{parentName:"p"},"boolean"))))),(0,r.kt)(i.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "admin_removePeer",\n      "params": [enode, removeFromStaticNodes]\n    }\'\n'))),(0,r.kt)(i.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("p",null,"Removed node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"result"),": ",(0,r.kt)("em",{parentName:"p"},"string")))))}k.isMDXComponent=!0}}]);