"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2345],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||i;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={},o="Runtime",l={unversionedId:"fundamentals/running-nethermind/runtime",id:"fundamentals/running-nethermind/runtime",title:"Runtime",description:"Directories",source:"@site/docs/02-fundamentals/01-running-nethermind/runtime.md",sourceDirName:"02-fundamentals/01-running-nethermind",slug:"/fundamentals/running-nethermind/runtime",permalink:"/docs/fundamentals/running-nethermind/runtime",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/02-fundamentals/01-running-nethermind/runtime.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Running the client",permalink:"/docs/fundamentals/running-nethermind/running-the-client"},next:{title:"Sync modes",permalink:"/docs/fundamentals/sync-modes"}},d={},c=[{value:"Directories",id:"directories",level:2},{value:"Static nodes",id:"static-nodes",level:2},{value:"NLog config",id:"nlog-config",level:2},{value:"Building from repository",id:"building-from-repository",level:3},{value:"Downloading package from Github/Downloads package",id:"downloading-package-from-githubdownloads-package",level:3},{value:"Running Nethermind with docker image",id:"running-nethermind-with-docker-image",level:3}],s={toc:c},u="wrapper";function p(e){let{components:n,...i}=e;return(0,a.kt)(u,(0,r.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"runtime"},"Runtime"),(0,a.kt)("h2",{id:"directories"},"Directories"),(0,a.kt)("p",null,"If you built the application locally then the entry point will be located in:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"src/Nethermind/Nethermind.Runner/bin/Release/net7.0/\n")),(0,a.kt)("p",null,"Log files by default are located in:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"src/Nethermind/Nethermind.Runner/bin/Release/net7.0/logs\n")),(0,a.kt)("p",null,"Database by default is located in:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"src/Nethermind/Nethermind.Runner/bin/Release/net7.0/nethermind_db\n")),(0,a.kt)("h2",{id:"static-nodes"},"Static nodes"),(0,a.kt)("p",null,"Static nodes are a pre-configured array of nodes you can trust. They can be defined with a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"static-nodes.json")," file containing a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"enodes")," separated with comma."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[\n  "enode://c1c3a604950119f82d78189792b73f5a96bd09017c77465e3c32fc51c1d758a9a772ffddd58436d465342f2cfa6d4a442a49e526743f4d8354d7c5ce794c3ee5@127.0.0.1:30303",\n  "enode://2784b947df025df9911875e68ccfcb0627ad4ae1dfb9f77634435692e8626508d9a6a04adff7719d3d73b25e72cbedee8d8e431492afbbd5fb4082e78c52d934@127.0.0.1:30303"\n]\n')),(0,a.kt)("p",null,"By default ",(0,a.kt)("inlineCode",{parentName:"p"},"static-nodes.json")," file is stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"Data/")," folder included in Nethermind packages. Path to ",(0,a.kt)("inlineCode",{parentName:"p"},"static-nodes")," file can be configured via ",(0,a.kt)("a",{parentName:"p",href:"/docs/fundamentals/configuration/init"},(0,a.kt)("inlineCode",{parentName:"a"},"StaticNodesPath"))," parameter."),(0,a.kt)("h2",{id:"nlog-config"},"NLog config"),(0,a.kt)("p",null,"You can change the level of logging in file and in the console by choosing one of the levels (Error, Warn, Info, Debug, Trace):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'<logger name="*" minlevel="Info" writeTo="file-async"/>\n<logger name="*" minlevel="Info" writeTo="auto-colored-console-async"/>\n')),(0,a.kt)("p",null,"More detailed NLog configuration can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NLog/NLog/wiki/Configuration-file"},"here"),"."),(0,a.kt)("h3",{id:"building-from-repository"},"Building from repository"),(0,a.kt)("p",null,"Logging level can be controlled in ",(0,a.kt)("inlineCode",{parentName:"p"},"NLog.config")," file located in:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"src/Nethermind/Nethermind.Runner/bin/Release/net7.0/NLog.config\n")),(0,a.kt)("h3",{id:"downloading-package-from-githubdownloads-package"},"Downloading package from Github/Downloads package"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"NLog.config")," file is supplied with the package and can be found in extraction directory."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(748).Z,width:"1094",height:"341"})),(0,a.kt)("h3",{id:"running-nethermind-with-docker-image"},"Running Nethermind with docker image"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"NLog.config")," file is located at ",(0,a.kt)("inlineCode",{parentName:"p"},"/nethermind/NLog.config")," path inside the docker container. The volume can be then mapped with a simple command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"-v /home/user/NLog.config:/nethermind/NLog.config\n")))}p.isMDXComponent=!0},748:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image(30)-ac87f6bdbf310375c851da28724cd3e6.png"}}]);