"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4687],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||l;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),l=n(6010),i=n(2466),o=n(6550),s=n(1980),u=n(7392),d=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=m({queryString:n,groupId:a}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=s??c;return h({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var k=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==o&&(c(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:p},i,{className:(0,l.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},1025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),i=n(5162);const o={},s="Running Nethermind & CL",u={unversionedId:"fundamentals/running-nethermind-post-merge",id:"fundamentals/running-nethermind-post-merge",title:"Running Nethermind & CL",description:"Introduction",source:"@site/docs/02-fundamentals/running-nethermind-post-merge.md",sourceDirName:"02-fundamentals",slug:"/fundamentals/running-nethermind-post-merge",permalink:"/docs/docs/docs/fundamentals/running-nethermind-post-merge",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/02-fundamentals/running-nethermind-post-merge.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to setup a Nethermind only Spaceneth based chain",permalink:"/docs/docs/docs/fundamentals/private-networks/how-to-setup-a-nethermind-only-spaceneth-based-chain"},next:{title:"Interacting With Nethermind",permalink:"/docs/docs/docs/category/interacting-with-nethermind"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Step 1: Installing Nethermind",id:"step-1-installing-nethermind",level:2},{value:"Downloading Official Release",id:"downloading-official-release",level:3},{value:"Ubuntu",id:"ubuntu",level:4},{value:"macOS",id:"macos",level:4},{value:"Windows",id:"windows",level:4},{value:"Downloading Docker Image",id:"downloading-docker-image",level:3},{value:"Building From Source",id:"building-from-source",level:3},{value:"Installing Dependencies",id:"installing-dependencies",level:4},{value:"<strong>Windows</strong>",id:"windows-1",level:4},{value:"<strong>macOS</strong>",id:"macos-1",level:4},{value:"<strong>Ubuntu and Debian</strong>",id:"ubuntu-and-debian",level:4},{value:"Building Nethermind",id:"building-nethermind",level:4},{value:"Step 2: Installing Consensus Client",id:"step-2-installing-consensus-client",level:2},{value:"Clients",id:"clients",level:3},{value:"Step 3 : Configure JSON-RPC API",id:"step-3--configure-json-rpc-api",level:2},{value:"JWT Secrets",id:"jwt-secrets",level:3},{value:"Step 4: Run Consensus Client",id:"step-4-run-consensus-client",level:2},{value:"Running Nimbus",id:"running-nimbus",level:3},{value:"Running Prysm",id:"running-prysm",level:3},{value:"Running Lighthouse",id:"running-lighthouse",level:3},{value:"Running Lodestar",id:"running-lodestar",level:3},{value:"Running Teku",id:"running-teku",level:3},{value:"Step 5: Run Nethermind",id:"step-5-run-nethermind",level:2},{value:"Choosing the Network",id:"choosing-the-network",level:3},{value:"Running Local Build",id:"running-local-build",level:3},{value:"Running Release",id:"running-release",level:3},{value:"Nethermind.Launcher",id:"nethermindlauncher",level:4},{value:"Nethermind.Runner",id:"nethermindrunner",level:4},{value:"Running Docker Image",id:"running-docker-image",level:3},{value:"Docker Settings",id:"docker-settings",level:4},{value:"Nethermind Settings",id:"nethermind-settings",level:4}],p={toc:c},h="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-nethermind--cl"},"Running Nethermind & CL"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Merge"),(0,r.kt)("p",null,"Ethereum\u2019s long awaited shift from Proof of Work (POW) to Proof of Stake (POS) known as The Merge happened on September\n15, 2022 and came with fundamental changes to the network. The most notable change is the addition of the Beacon chain (\nConsensus layer) which replaced Proof of Work mining. It is coordinating and pseudorandomly selecting block producers\nfrom the pool of stakers / validators in a way that makes it extremely difficult for validators to coordinate attacks on\nthe network."),(0,r.kt)("p",null,"The Merge changed how operators run nodes on the Ethereum blockchain. A node now needs ",(0,r.kt)("strong",{parentName:"p"},"two")," clients that work\ntogether as a pair. In addition to the Execution Layer client (e.g. Nethermind) you need a Consensus Layer client that\nconnects to the Beacon chain and runs the POS algorithm."),(0,r.kt)("p",null,"This guide will show you everything you need to know to operate an Ethereum node. It will show how to connect to the\nGoerli, Sepolia and Chiado test networks as well."),(0,r.kt)("p",null,"An easy way to run both CL and EL clients is by using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.sedge.nethermind.io"},"Sedge"),". Sedge is a setup tool\nfor PoS network/chain validators and\nnodes. Currently, Sedge supports multiple Linux distributions and MacOS."),(0,r.kt)("p",null,"To do your setup manually follow the steps below."),(0,r.kt)("h2",{id:"step-1-installing-nethermind"},"Step 1: Installing Nethermind"),(0,r.kt)("p",null,"You can choose from downloading the official release, downloading the docker image, or building Nethermind from source."),(0,r.kt)("h3",{id:"downloading-official-release"},"Downloading Official Release"),(0,r.kt)("h4",{id:"ubuntu"},"Ubuntu"),(0,r.kt)("p",null,"Run the following commands to enable our launchpad repository run then install Nethermind"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo add-apt-repository ppa:nethermindeth/nethermind\nsudo apt install nethermind\n")),(0,r.kt)("h4",{id:"macos"},"macOS"),(0,r.kt)("p",null,"Run the following commands to add the Nethermind repository to your local Homebrew and install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew tap nethermindeth/nethermind\nbrew install nethermind\n")),(0,r.kt)("h4",{id:"windows"},"Windows"),(0,r.kt)("p",null,"On Windows all you have to do is install and unzip the packages. There are two sources that you can download from."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://downloads.nethermind.io"},"Nethermind Downloads")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/NethermindEth/nethermind/releases"},"Nethermind Github Releases"))),(0,r.kt)("h3",{id:"downloading-docker-image"},"Downloading Docker Image"),(0,r.kt)("p",null,"To download the latest Docker image run the following command to install the latest Debian biased Nethermind image."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull nethermind/nethermind\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Currently Nethermind only supports images for ",(0,r.kt)("strong",{parentName:"p"},"AMD64")," and ",(0,r.kt)("strong",{parentName:"p"},"ARM64")," CPU architectures.")),(0,r.kt)("h3",{id:"building-from-source"},"Building From Source"),(0,r.kt)("h4",{id:"installing-dependencies"},"Installing Dependencies"),(0,r.kt)("p",null,"To build Nethermind you will need to have ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"Git")," and\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/en-us/download"},".NET SDK 7.0")," installed."),(0,r.kt)("p",null,"Depending on the platform you are using you may need to install extra dependencies."),(0,r.kt)("h4",{id:"windows-1"},(0,r.kt)("strong",{parentName:"h4"},"Windows")),(0,r.kt)("p",null,"You may need to\ninstall ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170"},"Microsoft Visual C++ Redistributable")),(0,r.kt)("h4",{id:"macos-1"},(0,r.kt)("strong",{parentName:"h4"},"macOS")),(0,r.kt)("p",null,"You will need to install the following packages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install gmp snappy lz4 zstd\n")),(0,r.kt)("h4",{id:"ubuntu-and-debian"},(0,r.kt)("strong",{parentName:"h4"},"Ubuntu and Debian")),(0,r.kt)("p",null,"You will need to install the following packages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update && sudo apt-get install libsnappy-dev libc6-dev libc6\n")),(0,r.kt)("p",null,"Commands for other Linux distros can be\nfound ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nethermind.io/nethermind/ethereum-client/building-nethermind#linux"},"here"),"."),(0,r.kt)("h4",{id:"building-nethermind"},"Building Nethermind"),(0,r.kt)("p",null,"After you have installed all of the dependencies for your platform you need to clone the Nethermind repo from GitHub."),(0,r.kt)("p",null,"Once the download has finished enter the ",(0,r.kt)("inlineCode",{parentName:"p"},"nethermind/src/Nethermind")," directory and run the build command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --recursive https://github.com/NethermindEth/nethermind.git\ncd nethermind/src/Nethermind\ndotnet build Nethermind.sln -c Release\n")),(0,r.kt)("h2",{id:"step-2-installing-consensus-client"},"Step 2: Installing Consensus Client"),(0,r.kt)("p",null,"On the Consensus Layer you have five client implementations to choose from. Though all CL clients are great check them\nout for yourself and find the client best suited to your needs."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"We urge you to take ",(0,r.kt)("a",{parentName:"p",href:"https://clientdiversity.org"},"client diversity")," into consideration when choosing your CL client and\navoid majority clients.")),(0,r.kt)("h3",{id:"clients"},"Clients"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://prysmaticlabs.com"},"Prysm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://consensys.net/knowledge-base/ethereum-2/teku/"},"Teku")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://lighthouse.sigmaprime.io"},"Lighthouse")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://lodestar.chainsafe.io"},"Lodestar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nimbus.team/#about"},"Nimbus"))),(0,r.kt)("h2",{id:"step-3--configure-json-rpc-api"},"Step 3 : Configure JSON-RPC API"),(0,r.kt)("h3",{id:"jwt-secrets"},"JWT Secrets"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://jwt.io"},"JSON Web Token")," authentication was added to the JSON-RPC API for security reasons to ensure that\nnothing interferes with\nthe communication between the Execution Client (Nethermind in this case) and the Consensus Client. This requires you to\ncreate a file containing a hexadecimal \u201csecret\u201d that will be passed to each ."),(0,r.kt)("p",null,"To create this \u201cSecret File\u201d use the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'openssl rand -hex 32 | tr -d "\\n" > "/tmp/jwtsecret"\n')),(0,r.kt)("p",null,"Install ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.openssl.org/index.php/Binaries"},"OpenSSL for Windows")," then simply type on your Terminal or Command\nPrompt (make sure you add the binaries directory to your environment variables or run the terminal from there)\nwhere ",(0,r.kt)("inlineCode",{parentName:"p"},'"/tmp/jwtsecret"')," will be the file path and name when created."),(0,r.kt)("p",null,"If you do not want to install OpenSSL, you may use a random hex generator website. All you need is a 64 character hex\nstring saved to a ",(0,r.kt)("inlineCode",{parentName:"p"},".txt")," file. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fcba4ab3138530cf233568bee2d518dd960da77355333d5ac856e1f27487dc9c\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"We strongly recommend you to use OpenSSL to generate the secret locally because of security reasons")),(0,r.kt)("h2",{id:"step-4-run-consensus-client"},"Step 4: Run Consensus Client"),(0,r.kt)("p",null,"Ensure you have:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installed Nethermind"),(0,r.kt)("li",{parentName:"ol"},"Installed Consensus client"),(0,r.kt)("li",{parentName:"ol"},"Created a JWT secret file"),(0,r.kt)("li",{parentName:"ol"},"Engine module is enabled with authenticated port - it is a default setting")),(0,r.kt)("p",null,"Then you are ready to start your clients. First start up Consensus Layer."),(0,r.kt)("p",null,"See section below for commands to run the CL client you installed. You will need to make sure the ",(0,r.kt)("inlineCode",{parentName:"p"},"--jwt-secret")," has the\ncorrect path as well or the clients will not be able to communicate."),(0,r.kt)("p",null,"Once both clients are running watch the logs to make sure you don't get any ",(0,r.kt)("inlineCode",{parentName:"p"},"Unauthorized")," errors to ensure the clients\nare communicating."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Checkpoint Sync")),(0,r.kt)("p",{parentName:"admonition"},"It would be way faster to sync consensus clients using checkpoint sync."),(0,r.kt)("p",{parentName:"admonition"},"To sync the CL client using a checkpoint sync, view the community maintained endpoints\n",(0,r.kt)("a",{parentName:"p",href:"https://eth-clients.github.io/checkpoint-sync-endpoints/"},"here")),(0,r.kt)("p",{parentName:"admonition"},"For Goerli or Sepolia see ",(0,r.kt)("a",{parentName:"p",href:"https://notes.ethereum.org/@launchpad/checkpoint-sync"},"here"),".")),(0,r.kt)("h3",{id:"running-nimbus"},"Running Nimbus"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"mainnet",label:"Mainnet",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nimbus-eth2/build/nimbus_beacon_node \\\n--network=mainnet \\\n--web3-url=http://127.0.0.1:8551 \\\n--rest \\\n--metrics-explanation \\\n--suggested-fee-recipient='Enter-eth-address-here' \\\n--jwt-secret=\"/tmp/jwtsecret\"\n")),(0,r.kt)("p",null,"For checkpoint sync, add the following flag with a checkpoint sync endpoint\nExample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--trusted-node-url=https://beaconstate.ethstaker.cc\n"))),(0,r.kt)(i.Z,{value:"goerli",label:"Goerli",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nimbus-eth2/build/nimbus_beacon_node \\\n--network=goerli \\\n--web3-url=http://127.0.0.1:8551 \\\n--rest \\\n--metrics-explanation \\\n--suggested-fee-recipient='Enter-eth-address-here' \\\n--jwt-secret=\"/tmp/jwtsecret\"\n"))),(0,r.kt)(i.Z,{value:"sepolia",label:"Sepolia",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nimbus-eth2/build/nimbus_beacon_node \\\n--network=sepolia \\\n--web3-url=http://127.0.0.1:8551 \\\n--rest \\\n--metrics \\\n--suggested-fee-recipient='Enter-eth-address-here' \\\n--jwt-secret=\"/tmp/jwtsecret\"\n")))),(0,r.kt)("h3",{id:"running-prysm"},"Running Prysm"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"mainnet",label:"Mainnet",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cd prysm\n./prysm.sh beacon-chain \\\n--mainnet \\\n--datadir "$db_path" \\\n--suggested-fee-recipient=\'Enter-eth-address-here\' \\\n--execution-endpoint=http://localhost:8551 \\\n--jwt-secret="/tmp/jwtsecret"\n')),(0,r.kt)("p",null,"For checkpoint sync, add the following flag with a checkpoint sync endpoint\nExample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'--checkpoint-sync-url="https://beaconstate.ethstaker.cc"\n--genesis-beacon-api-url="https://beaconstate.ethstaker.cc"\n'))),(0,r.kt)(i.Z,{value:"goerli",label:"Goerli",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd prysm\n./prysm.sh beacon-chain \\\n--goerli \\\n--datadir $db_path \\\n--suggested-fee-recipient='Enter-eth-address-here' \\\n--execution-endpoint=http://localhost:8551 \\\n--jwt-secret=/tmp/jwtsecret\n"))),(0,r.kt)(i.Z,{value:"sepolia",label:"Sepolia",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd prysm\n./prysm.sh beacon-chain \\\n--sepolia \\\n--datadir $db_path \\\n--suggested-fee-recipient='Enter-eth-address-here' \\\n--execution-endpoint=http://localhost:8551 \\\n--jwt-secret=/tmp/jwtsecret\n"))),(0,r.kt)(i.Z,{value:"chiado",label:"Chiado",mdxType:"TabItem"},(0,r.kt)("p",null,"Please follow guide provided ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gnosischain/prysm-client"},"here"),"."))),(0,r.kt)("h3",{id:"running-lighthouse"},"Running Lighthouse"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"mainnet",label:"Mainnet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"lighthouse \\\nbeacon_node \\\n--network mainnet \\\n--debug-level info \\\n--datadir ./mainnet-lh1 \\\n--eth1 \\\n--http \\\n--http-allow-sync-stalled \\\n--metrics-explanation \\\n--execution-endpoints http://127.0.0.1:8551 \\\n--enr-udp-port=9000 \\\n--enr-tcp-port=9000 \\\n--discovery-port=9000 \\\n--suggested-fee-recipient=\n'Enter-eth-address-here' \\\n--jwt-secrets=\"/tmp/jwtsecret\"\n")),(0,r.kt)("p",null,"For checkpoint sync, add the following flag with a checkpoint sync endpoint\nExample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'--checkpoint-sync-url "https://beaconstate.ethstaker.cc"\n'))),(0,r.kt)(i.Z,{value:"goerli",label:"Goerli",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"lighthouse \\\nbeacon_node \\\n--network goerli \\\n--debug-level info \\\n--datadir ./testnet-lh1 \\\n--eth1 \\\n--http \\\n--http-allow-sync-stalled \\\n--metrics-explanation \\\n--execution-endpoints http://127.0.0.1:8551 \\\n--enr-udp-port=9000 \\\n--enr-tcp-port=9000 \\\n--discovery-port=9000 \\\n--suggested-fee-recipient=\n'Enter-eth-address-here' \\\n--jwt-secrets=\"/tmp/jwtsecret\"\n"))),(0,r.kt)(i.Z,{value:"sepolia",label:"Sepolia",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"lighthouse \\\nbeacon_node \\\n--network sepolia \\\n--debug-level info \\\n--datadir ./testnet-lh1 \\\n--eth1 \\\n--http \\\n--http-allow-sync-stalled \\\n--metrics \\\n--execution-endpoints http://127.0.0.1:8551 \\\n--enr-udp-port=9000 \\\n--enr-tcp-port=9000 \\\n--discovery-port=9000 \\\n--suggested-fee-recipient=\n'Enter-eth-address-here' \\\n--jwt-secrets=\"/tmp/jwtsecret\"\n"))),(0,r.kt)(i.Z,{value:"chiado",label:"Chiado",mdxType:"TabItem"},(0,r.kt)("p",null,"Please follow guide provided ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gnosischain/lighthouse-client"},"here"),"."))),(0,r.kt)("h3",{id:"running-lodestar"},"Running Lodestar"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"mainnet",label:"Mainnet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cd lodestar\n./lodestar beacon \\\n--dataDir "../lodestar-beacondata" \\\n--network mainnet \\\n--eth1 \\\n--execution.urls "http://127.0.0.1:8551" \\\n--discv5 \\\n--suggestedFeeRecipient \'Enter-eth-address-here\' \\\n--jwt-secret "/tmp/jwtsecret"\n\n')),(0,r.kt)("p",null,"For checkpoint sync, add the following flag with a checkpoint sync endpoint\nExample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'--checkpointSyncUrl "https://beaconstate.ethstaker.cc"\n'))),(0,r.kt)(i.Z,{value:"goerli",label:"Goerli",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cd lodestar\n./lodestar beacon \\\n--dataDir "../lodestar-beacondata" \\\n--network goerli \\\n--eth1 \\\n--execution.urls "http://127.0.0.1:8551" \\\n--discv5 \\\n--suggestedFeeRecipient \'Enter-eth-address-here\' \\\n--jwt-secret "/tmp/jwtsecret"\n'))),(0,r.kt)(i.Z,{value:"sepolia",label:"Sepolia",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cd lodestar\n./lodestar beacon \\\n--dataDir "../lodestar-beacondata" \\\n--network sepolia \\\n--eth1 \\\n--execution.urls "http://127.0.0.1:8551" \\\n--discv5 \\\n--suggestedFeeRecipient \'Enter-eth-address-here\' \\\n--jwt-secret "/tmp/jwtsecret"\n'))),(0,r.kt)(i.Z,{value:"chiado",label:"Chiado",mdxType:"TabItem"},(0,r.kt)("p",null,"Please follow guide provided ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gnosischain/lodestar-client"},"here"),"."))),(0,r.kt)("h3",{id:"running-teku"},"Running Teku"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"mainnet",label:"Mainnet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./teku/build/install/teku/bin/teku \\\n--data-path "datadir-teku" \\\n--network mainnet \\\n--ee-endpoint http://localhost:8551 \\\n--ee-jwt-secret-file "/tmp/jwtsecret" \\\n--log-destination console \\\n')),(0,r.kt)("p",null,"For checkpoint sync, add the following flag with a checkpoint sync endpoint\nExample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'--initial-state="https://beaconstate.ethstaker.cc"\n'))),(0,r.kt)(i.Z,{value:"goerli",label:"Goerli",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./teku/build/install/teku/bin/teku \\\n--data-path "datadir-teku" \\\n--network goerli \\\n--ee-endpoint http://localhost:8551 \\\n--ee-jwt-secret-file "/tmp/jwtsecret" \\\n--log-destination console \\\n--validators-proposer-default-fee-recipient=\'Enter-eth-address-here\'\n'))),(0,r.kt)(i.Z,{value:"sepolia",label:"Sepolia",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./teku/build/install/teku/bin/teku \\\n--data-path "datadir-teku" \\\n--network sepolia \\\n--ee-endpoint http://localhost:8551 \\\n--ee-jwt-secret-file "/tmp/jwtsecret" \\\n--log-destination console \\\n--validators-proposer-default-fee-recipient=\'Enter-eth-address-here\'\n'))),(0,r.kt)(i.Z,{value:"chiado",label:"Chiado",mdxType:"TabItem"},(0,r.kt)("p",null,"Please follow guide provided ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gnosischain/teku-client"},"here"),"."))),(0,r.kt)("h2",{id:"step-5-run-nethermind"},"Step 5: Run Nethermind"),(0,r.kt)("p",null,"Once Consensus Layer has started you can start Nethermind client."," "),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Since the Ethereum merge, you are required to set the Merge.Enabled=true flag. This is not required if you are\nusing\nthe\ndefault config files as this is enabled by default.")),(0,r.kt)("h3",{id:"choosing-the-network"},"Choosing the Network"),(0,r.kt)("p",null,"Depending on the network you want to run the node for, choose the ",(0,r.kt)("inlineCode",{parentName:"p"},"--config")," variable. For more about networks,\ncheck ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/docs/getting-started/networks"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--config")," is the config file for the network you want to connect to. For example, to run a node for the goerli\ntestnet use ",(0,r.kt)("inlineCode",{parentName:"p"},"--config goerli"),"."),(0,r.kt)("h3",{id:"running-local-build"},"Running Local Build"),(0,r.kt)("p",null,"After you have built Nethermind you should be in the ",(0,r.kt)("inlineCode",{parentName:"p"},"nethermind/src/Nethermind")," directory. From there you will need to\nrun the following commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd Nethermind.Runner\ndotnet run -c Release --config mainnet --JsonRpc.JwtSecretFile=PATH\n")),(0,r.kt)("p",null,"Where PATH is the path to your JWT secret. ex ",(0,r.kt)("inlineCode",{parentName:"p"},"--JsonRpc.JwtSecretFile=/tmp/jwtsecret")),(0,r.kt)("h3",{id:"running-release"},"Running Release"),(0,r.kt)("p",null,"You have two options when running from a release. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Nethermind.Launcher")," which is a simple GUI with options\nto\nconfigure your node, or the ",(0,r.kt)("inlineCode",{parentName:"p"},"Nethermind.Runner")," where you can configure your node by hand."),(0,r.kt)("p",null,"You will need to be in the directory that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Nethermind.Runner")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Nethermind.Launcher")," are in to run\nNethermind."),(0,r.kt)("h4",{id:"nethermindlauncher"},"Nethermind.Launcher"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./Nethermind.Launcher\n"))),(0,r.kt)(i.Z,{value:"ubuntu",label:"Ubuntu",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nethermind\n\n"))),(0,r.kt)(i.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nethermind-launcher\n")))),(0,r.kt)("h4",{id:"nethermindrunner"},"Nethermind.Runner"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./Nethermind.Runner --config goerli --JsonRpc.JwtSecretFile=PATH \n"))),(0,r.kt)(i.Z,{value:"ubuntu",label:"Ubuntu",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nethermind --config goerli --JsonRpc.JwtSecretFile=PATH \n"))),(0,r.kt)(i.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nethermind --config goerli --JsonRpc.JwtSecretFile=PATH \n")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"--config")," flag is the network. for example it can be mainnet, goerli or sepolia.")),(0,r.kt)("p",null,"Where PATH is the path to your JWT secret. ex ",(0,r.kt)("inlineCode",{parentName:"p"},"--JsonRpc.JwtSecretFile=/tmp/jwtsecret")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"If you are not using the default config files, make sure you also use the ",(0,r.kt)("strong",{parentName:"p"},"Merge.Enabled=true")," flag when launching the\nclient.")),(0,r.kt)("h3",{id:"running-docker-image"},"Running Docker Image"),(0,r.kt)("p",null,"Running Nethermind from a Docker image may require more configuration. The commands below should work in most\nsituations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it -v /home/user/data:/nethermind/data nethermind/nethermind --config goerli --JsonRpc.Enabled true\n--JsonRpc.JwtSecretFile=PATH --datadir data\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"--config")," flag is the network. For example it can be mainnet, goerli or sepolia. ",(0,r.kt)("strong",{parentName:"p"},"If you are not using the\nconfig file, make sure you set Merge.Enabled=true as flag."))),(0,r.kt)("h4",{id:"docker-settings"},"Docker Settings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-v /home/user/data:/nethermind/data")," sets local directory we will be storing our data to")),(0,r.kt)("p",null,"On some OS like Amazon Linux you may need to increase the ",(0,r.kt)("inlineCode",{parentName:"p"},"nofile")," limit by adding the following instruction to\ndocker\ncommand ",(0,r.kt)("inlineCode",{parentName:"p"},"-ulimit nofile=1000000:1000000")," or you can take a look\nan ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/62127643/need-understand-ulimits-nofile-setting-in-host-and-container/62136351#62136351"},"alternative\nsolution"),"."),(0,r.kt)("h4",{id:"nethermind-settings"},"Nethermind Settings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--JsonRpc.JwtSecretFile=PATH")," where PATH is the location of your JWT secret ex. ",(0,r.kt)("inlineCode",{parentName:"li"},"/tmp/jwtsecret")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--datadir data")," maps the database, keystore, and logs all at once")))}m.isMDXComponent=!0}}]);