"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2674],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={description:"A list of properties to adjust Nethermind Node 04-configuration"},i="Configuration",l={unversionedId:"fundamentals/configuration/README",id:"fundamentals/configuration/README",title:"Configuration",description:"A list of properties to adjust Nethermind Node 04-configuration",source:"@site/docs/02-fundamentals/04-configuration/README.md",sourceDirName:"02-fundamentals/04-configuration",slug:"/fundamentals/configuration/",permalink:"/docs/docs/docs/fundamentals/configuration/",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/02-fundamentals/04-configuration/README.md",tags:[],version:"current",frontMatter:{description:"A list of properties to adjust Nethermind Node 04-configuration"},sidebar:"tutorialSidebar",previous:{title:"Sync modes",permalink:"/docs/docs/docs/fundamentals/sync-modes"},next:{title:"AccountAbstraction",permalink:"/docs/docs/docs/fundamentals/configuration/accountabstraction"}},p={},s=[{value:"Config file",id:"config-file",level:2},{value:"Environment variables",id:"environment-variables",level:2},{value:"Command line options",id:"command-line-options",level:2},{value:"datadir",id:"datadir",level:3},{value:"baseDbPath",id:"basedbpath",level:3},{value:"config",id:"config",level:3},{value:"log",id:"log",level:3},{value:"configsDirectory",id:"configsdirectory",level:3},{value:"loggerConfigSource",id:"loggerconfigsource",level:3}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"There are three ways of configuring Nethermind node. They are presented below in the reversed order of priorities ","(","if\nyou set the same property in the config file, in the environment variable and in the command line then the command line\nvalue will be used",")","."),(0,o.kt)("h2",{id:"config-file"},"Config file"),(0,o.kt)("p",null,"Change the configuration properties in the ",(0,o.kt)("inlineCode",{parentName:"p"},".cfg")," file of the network configuration you wish to run. Each ",(0,o.kt)("inlineCode",{parentName:"p"},".cfg")," file\nwith the default setup is attached to Nethermind packages and can be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"configs")," folder."),(0,o.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,o.kt)("p",null,"The last way is to set the values in the environment variables,\ne.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"set NETHERMIND_INITCONFIG_PROCESSINGENABLED = false")),(0,o.kt)("h2",{id:"command-line-options"},"Command line options"),(0,o.kt)("p",null,"Another way is to setup each configuration property by passing flags to either ",(0,o.kt)("inlineCode",{parentName:"p"},"Nethermind.Runner"),"\nor ",(0,o.kt)("inlineCode",{parentName:"p"},"Nethermind.Launcher"),". You can see the list of all config option by running ",(0,o.kt)("inlineCode",{parentName:"p"},"./Nethermind.Runner --help")," For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"./Nethermind.Runner --config ropsten --JsonRpc.Enabled true --Init.ProcessingEnabled false\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"When passing a flag, each property needs to be prefixed with its respective ",(0,o.kt)("a",{parentName:"p",href:"./"},(0,o.kt)("strong",{parentName:"a"},"Module")),", followed by the ",(0,o.kt)("strong",{parentName:"p"},"property\nname")," and its ",(0,o.kt)("strong",{parentName:"p"},"value")," e.g ",(0,o.kt)("inlineCode",{parentName:"p"},"--Init.IsMining true"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," as the path separator so the configs can be shared between all platforms supported ","(","Linux, Windows, MacOS",")",".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"--config"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--baseDbPath"),",",(0,o.kt)("inlineCode",{parentName:"p"},"--datadir, --loggerConfigSource, --log")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--configsDirectory"),"options are available from\nthe command line to select config file, base DB directory prefix and log level respectively.")),(0,o.kt)("h3",{id:"datadir"},"datadir"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"--datadir")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"-dd")),(0,o.kt)("p",null,"You may want to use this option to store all data that the node produces in a custom directory.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"--datadir")," ","(",(0,o.kt)("inlineCode",{parentName:"p"},"-dd"),")"," changes paths of ",(0,o.kt)("inlineCode",{parentName:"p"},"database, logs, keystore"),"to the target directory. You can specify either *\n*relative",(0,o.kt)("strong",{parentName:"p"}," or "),"absolute** paths, e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"--datadir data\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"--datadir /home/user/nethermind/data\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"--datadir ./data\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Absolute paths of ",(0,o.kt)("inlineCode",{parentName:"p"},"Init.BaseDbPath"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Init.LogDirectory")," or",(0,o.kt)("inlineCode",{parentName:"p"},"KeyStore.KeyStoreDirectory"),"in config file will not be\noverwritten by ",(0,o.kt)("inlineCode",{parentName:"p"},"--datadir"))),(0,o.kt)("h3",{id:"basedbpath"},"baseDbPath"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"--baseDbPath")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"-d")),(0,o.kt)("p",null,"Configures the path of the Nethermind's database folder. Is equal to setting ",(0,o.kt)("inlineCode",{parentName:"p"},"--Init.BaseDbPath")," parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"--baseDbPath /home/user/my_node/db\n")),(0,o.kt)("h3",{id:"config"},"config"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"--config")," *",(0,o.kt)("strong",{parentName:"p"},"*or **"),(0,o.kt)("inlineCode",{parentName:"p"},"-c")),(0,o.kt)("p",null,"Determines the configuration file of the network on which Nethermind will be running."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"--config xdai\n")),(0,o.kt)("p",null,"More on that ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/docs/getting-started/networks"},"here"),"."),(0,o.kt)("h3",{id:"log"},"log"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"--log")," *",(0,o.kt)("strong",{parentName:"p"},"*or **"),(0,o.kt)("inlineCode",{parentName:"p"},"-l")),(0,o.kt)("p",null,"Changes the logging level."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"--log DEBUG\n")),(0,o.kt)("p",null,"More on that ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/docs/fundamentals/logs/logging-configuration"},"here")),(0,o.kt)("h3",{id:"configsdirectory"},"configsDirectory"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"--configsDirectory")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"-cd")),(0,o.kt)("p",null,"Changes the source directory of your configuration files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"--configsDirectory /home/user/my_configs\n")),(0,o.kt)("h3",{id:"loggerconfigsource"},"loggerConfigSource"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"--loggerConfigSource")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"-lcs")),(0,o.kt)("p",null,"Changes the path of the ",(0,o.kt)("inlineCode",{parentName:"p"},"NLog.config")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"--loggerConfigSource /home/user/NLog.config\n")),(0,o.kt)("p",null,"More on that ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nlog/nlog/wiki"},"here"),":"))}u.isMDXComponent=!0}}]);