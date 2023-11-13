"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[286],{9419:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=t(5893),s=t(1151),r=t(4866),l=t(5162);const i={title:"Health check",sidebar_position:1},o=void 0,c={id:"monitoring/health-check",title:"Health check",description:"This article requires a revision.",source:"@site/docs/monitoring/health-check.md",sourceDirName:"monitoring",slug:"/monitoring/health-check",permalink:"/monitoring/health-check",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/monitoring/health-check.md",tags:[],version:"current",lastUpdatedAt:1699910727,formattedLastUpdatedAt:"Nov 13, 2023",sidebarPosition:1,frontMatter:{title:"Health check",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"setting-up-local-metrics-infrastracture",permalink:"/monitoring/metrics/setting-up-local-metrics-infrastracture"},next:{title:"Validators",permalink:"/validators/"}},h={},d=[{value:"Enabling and configuring Health Checks",id:"enabling-and-configuring-health-checks",level:2},{value:"Enabling Health Checks without UI ",id:"enabling-health-checks-without-ui-",level:4},{value:"Enabling Health Checks UI",id:"enabling-health-checks-ui",level:4},{value:"Enabling Slack reports",id:"enabling-slack-reports",level:4},{value:"Consensus Client health",id:"consensus-client-health",level:4},{value:"health_nodeStatus",id:"health_nodestatus",level:4},{value:"Monitoring available storage space",id:"monitoring-available-storage-space",level:4},{value:"HealthChecks for producing and processing blocks",id:"healthchecks-for-producing-and-processing-blocks",level:4}];function u(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"This article requires a revision."})}),"\n","\n","\n",(0,a.jsxs)(n.p,{children:["Nethermind has a pre-packed ",(0,a.jsx)(n.code,{children:"Nethermind.HealthChecks.dll"})," plugin that allows you to monitor your Nethermind node better.\nIt leverages the power\nof ",(0,a.jsx)(n.a,{href:"https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks",children:"AspNetCore.Diagnostics.HealthChecks"}),". It simply adds\nan",(0,a.jsx)(n.code,{children:"/health"}),"endpoint to the JSON RPC service which can be used to check the Nethermind's ",(0,a.jsxs)(n.em,{children:[(0,a.jsx)(n.strong,{children:"liveness"})," -"]})," verify if the\nnode is ",(0,a.jsx)(n.strong,{children:"synced"})," and has ",(0,a.jsx)(n.strong,{children:"at least one peer."})," Useful when you don't want to query the node before it's able to\nprovide you data available only for fully synced nodes like ",(0,a.jsx)(n.code,{children:"eth_getBalance"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"Nethermind.HealthChecks.dll"}),"plugin will be automatically loaded on Nethermind start."]}),"\n",(0,a.jsx)(n.h2,{id:"enabling-and-configuring-health-checks",children:"Enabling and configuring Health Checks"}),"\n",(0,a.jsxs)(n.p,{children:["The health checks need to be additionally enabled which can be done either through ",(0,a.jsx)(n.code,{children:"--HealthChecks.*"})," flags or by adding\na ",(0,a.jsx)(n.code,{children:'"HealthChecks"'})," section to the config file. "]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:'title="HealthChecks config section example" ',children:'  "HealthChecks": {\n    "Enabled": true,\n    "WebhooksEnabled": true,\n    "WebhooksUri": "https://slack.webhook",\n    "UIEnabled": true,\n    "PollingInterval": 10,\n    "Slug": "/api/health"\n  }\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsxs)(n.p,{children:["JSON RPC Service needs to be enabled in order for health checks to work ",(0,a.jsx)(n.code,{children:"--JsonRpc.Enabled true"})]})}),"\n",(0,a.jsxs)(n.p,{children:["Each configuration option is described ",(0,a.jsx)(n.a,{href:"../fundamentals/configuration#healthchecks",children:"here"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"enabling-health-checks-without-ui-",children:"Enabling Health Checks without UI "}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"./Nethermind.Runner --HealthChecks.Enabled true\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"health"})," endpoint is now available at ",(0,a.jsx)(n.code,{children:"localhost:8545/health"}),"  by default (if your ",(0,a.jsx)(n.code,{children:"--JsonRpc.Port"})," is ",(0,a.jsx)(n.code,{children:"8545"}),").\nThe ",(0,a.jsx)(n.code,{children:"health"})," endpoint can be configured via ",(0,a.jsx)(n.code,{children:"--HealthChecks.Slug"})," parameter e.g. ",(0,a.jsx)(n.code,{children:"--HealthChecks.Slug /api/health"}),". We\ncan if it is working with ",(0,a.jsx)(n.code,{children:"curl"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'// Request\ncurl localhost:8545/health\n\n// Example of response for Unhealthy node\n{"status":"Unhealthy","totalDuration":"00:00:00.0015582","entries":{"node-health":{"data":{},"description":"The node has 0 peers connected","duration":"00:00:00.0003881","status":"Unhealthy","tags":[]}}}\n\n// Example of response for Healthy node\n{"status":"Healthy","totalDuration":"00:00:00.0015582","entries":{"node-health":{"data":{},"description":"The node is now fully synced with a network, number of peers: 99","duration":"00:00:00.0003881","status":"Healthy","tags":[]}}}\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Unhealthy"})," returns ",(0,a.jsx)(n.strong,{children:"503"})," (Service Unavailable) status code"]}),"\n"]})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Healthy"})," returns ",(0,a.jsx)(n.strong,{children:"200"})," status code"]}),"\n"]})}),"\n",(0,a.jsx)(n.h4,{id:"enabling-health-checks-ui",children:"Enabling Health Checks UI"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"./Nethermind.Runner --HealthChecks.Enabled true --HealthChecks.UIEnabled true\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Enabling UI will expose an additional endpoint ",(0,a.jsx)(n.code,{children:"/healthchecks-ui"}),"and will allow seeing node's health on a nice UI. To\nview the UI simply go to ",(0,a.jsx)(n.code,{children:"http://localhost:8545/healthchecks-ui"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Unhealthy status reported on UI page",src:t(6355).Z+"",width:"1187",height:"418"})}),"\n",(0,a.jsx)(n.h4,{id:"enabling-slack-reports",children:"Enabling Slack reports"}),"\n",(0,a.jsxs)(n.p,{children:["We may also add Slack Webhook endpoint to which our node's health will be reported. We need to pass\nthe ",(0,a.jsx)(n.code,{children:"--HealthChecks.WebhooksEnabled true"})," and add the ",(0,a.jsx)(n.code,{children:"--HealthChecks.WebhooksUri"})," which can be found in your Slack app\nconfiguration."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"nethermind --HealthChecks.Enabled true --HealthChecks.UIEnabled true --HealthChecks.WebhooksEnabled true --HealthChecks.WebhooksUri https://hooks.slack.com/\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If your node will be ",(0,a.jsx)(n.strong,{children:"Unhealthy"})," you should receive a message similar to this:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Unhealthy",src:t(2367).Z+"",width:"690",height:"240"})}),"\n",(0,a.jsxs)(n.p,{children:["with description of why the node is unhealthy, node's name and information about the machine on which the node is\nrunning.",(0,a.jsx)(n.br,{}),"\n","When it becomes ",(0,a.jsx)(n.strong,{children:"Healthy"})," (",(0,a.jsx)(n.strong,{children:"synced"})," and with ",(0,a.jsx)(n.strong,{children:"peers"}),") you should receive:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Healthy",src:t(7384).Z+"",width:"492",height:"118"})}),"\n",(0,a.jsx)(n.h4,{id:"consensus-client-health",children:"Consensus Client health"}),"\n",(0,a.jsxs)(n.p,{children:["This check verifies if the client receives messages from the CL. If you see this warning in your logs, it means that\nthere is something wrong with CL/Nethermind communication. Check more about setting up Nethermind and\nCL ",(0,a.jsx)(n.a,{href:"/get-started/consensus-clients",children:"here"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"No incoming messages from Consensus Client. Consensus Client is required to sync the node. Please make sure that it's working properly.\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"Note that Consensus Client is required for normal node operations."})}),"\n",(0,a.jsx)(n.h4,{id:"health_nodestatus",children:"health_nodeStatus"}),"\n",(0,a.jsxs)(n.p,{children:["Health checks via JSON RPC requests were introduced in version v.1.10.18. For that,  ",(0,a.jsx)(n.code,{children:"HealthChecks.Enabled"})," should be\nset to true."]}),"\n",(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(l.Z,{value:"request",label:"Request",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{ "jsonrpc":"2.0","method":"health_nodeStatus","params":[],"id":67 }\n'})})}),(0,a.jsx)(l.Z,{label:"Response",value:"response",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "jsonrpc": "2.0",\n    "result": {\n        "healthy": false,\n        "messages": [\n            "Sync degraded",\n            "No messages from CL"\n        ],\n        "errors": [\n            "SyncDegraded",\n            "ClUnavailable"\n        ],\n        "isSyncing": true\n    },\n    "id": 67\n}\n'})})})]}),"\n",(0,a.jsx)(n.h4,{id:"monitoring-available-storage-space",children:"Monitoring available storage space"}),"\n",(0,a.jsx)(n.p,{children:"Feature which is helping to track free disk space is enabled by default and monitors a drive which has been used to\nconfigure database location. There are two new configuration options available:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"--HealthChecks.LowStorageSpaceWarningThreshold"})," - Percentage of free disk space below which a warning will be\ndisplayed. If Health Checks UI is enabled, it will also be reported under node's health. Default value is 5 - meaning\n5% of free disk space."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"--HealthChecks.LowStorageSpaceShutdownThreshold"})," - Percentage of available disk space below which node will shutdown\nto avoid database corruption. Default value is 1 - meaning 1% of free disk space."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"nethermind --HealthChecks.LowStorageSpaceWarningThreshold 5 --HealthChecks.LowStorageSpaceShutdownThreshold 1\n"})}),"\n",(0,a.jsx)(n.h4,{id:"healthchecks-for-producing-and-processing-blocks",children:"HealthChecks for producing and processing blocks"}),"\n",(0,a.jsx)(n.p,{children:"There are two fields for HealthChecks config: MaxIntervalWithoutProcessedBlock and MaxIntervalWithoutProducedBlock. The\nnode will return unhealthy status if the interval elapsed without processing or producing a block. Let's use the below\nconfig as an example. If the node doesn't process a block for 15 seconds, we will return unhealthy status. Analogically,\nwe will be waiting 45 seconds for a newly produced block."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:'title="HealthChecks config section example" ',children:'\n  "HealthChecks": {\n    "Enabled": true,\n    "WebhooksEnabled": true,\n    "UIEnabled": true,\n    "Slug": "/api/health",\n    "MaxIntervalWithoutProcessedBlock ": 15,\n    "MaxIntervalWithoutProducedBlock": 45\n  }\n'})}),"\n",(0,a.jsx)(n.p,{children:"If those fields are not set in a config, application will try to use them based on seal engine specification. If there\nis infinite time, unhealthy status can still be reported if processing or producing threads stopped."})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>l});t(7294);var a=t(6010);const s={tabItem:"tabItem_Ymn6"};var r=t(5893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,l),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7294),s=t(6010),r=t(2466),l=t(6550),i=t(469),o=t(1980),c=t(7392),h=t(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=u(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=g({queryString:t,groupId:s}),[b,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,h.Nk)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),f=(()=>{const e=c??b;return p({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function k(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),h=e=>{const n=e.currentTarget,t=o.indexOf(n),s=i[t].value;s!==a&&(c(n),l(s))},d=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:h,...r,className:(0,s.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,x.jsx)(k,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function w(e){const n=(0,m.Z)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(n))}},7384:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image(46)-5eaf72852b3e686e71865323e9801102.png"},6355:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image(76)-09c7ba2b07d07480a303268d261ffd16.png"},2367:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/unhealthy-98cb6ab004e2ecb6edcbec2e6d03edea.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var a=t(7294);const s={},r=a.createContext(s);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);