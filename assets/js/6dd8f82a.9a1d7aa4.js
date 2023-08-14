"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,k=p["".concat(l,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={description:"How to setup a Nethermind Validator in Aura (Authority Round) consensus algorithm"},o="Aura Validator",s={unversionedId:"resources/guides-and-helpers/validator-setup/aura-validator",id:"resources/guides-and-helpers/validator-setup/aura-validator",title:"Aura Validator",description:"How to setup a Nethermind Validator in Aura (Authority Round) consensus algorithm",source:"@site/docs/07-resources/guides-and-helpers/validator-setup/aura-validator.md",sourceDirName:"07-resources/guides-and-helpers/validator-setup",slug:"/resources/guides-and-helpers/validator-setup/aura-validator",permalink:"/docs/docs/docs/resources/guides-and-helpers/validator-setup/aura-validator",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/07-resources/guides-and-helpers/validator-setup/aura-validator.md",tags:[],version:"current",frontMatter:{description:"How to setup a Nethermind Validator in Aura (Authority Round) consensus algorithm"},sidebar:"tutorialSidebar",previous:{title:"ETH2 &lt;-&gt; Nethermind",permalink:"/docs/docs/docs/resources/guides-and-helpers/eth2-lighthouse-less-than-greater-than-nethermind"},next:{title:"Eth2 Validator",permalink:"/docs/docs/docs/resources/guides-and-helpers/validator-setup/eth2-validator"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Clock synchronization",id:"clock-synchronization",level:2},{value:"Docker-compose file sample",id:"docker-compose-file-sample",level:2},{value:"Mining <strong>P</strong>rivate key",id:"mining-private-key",level:2},{value:"Config file",id:"config-file",level:2},{value:"Running Validator node",id:"running-validator-node",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aura-validator"},"Aura Validator"),(0,i.kt)("p",null,"This article will lead you through docker-compose setup of ",(0,i.kt)("strong",{parentName:"p"},"Nethermind Aura Validator")," (xDai chain in this example).\nSame result can be obtained\nby ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/docs/getting-started/installing-nethermind"},"Downloading")," & ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/docs/fundamentals/running-nethermind/running-the-client"},"Running Nethermind"),"\npackage or by ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/docs/for-developers/building-nethermind"},"Building Nethermind")," from the source code."," "),(0,i.kt)("p",null,"If you chose not to use docker-compose, you can skip docker-compose related sections and read\nabout ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/docs/resources/guides-and-helpers/validator-setup/aura-validator#config-file"},"config file")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/docs/resources/guides-and-helpers/validator-setup/aura-validator#mining-private-key"},"private key "),"configuration\nonly."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","docker-compose"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","docker"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","machine with at least 4GB RAM is recommended")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install docker docker-compose -y\n")),(0,i.kt)("h2",{id:"clock-synchronization"},"Clock synchronization"),(0,i.kt)("p",null,"You system clock needs to be synchronized otherwise you might encounter skipping block sealing. By\ndefault ",(0,i.kt)("inlineCode",{parentName:"p"},"stepDuration")," is configured to ",(0,i.kt)("inlineCode",{parentName:"p"},"5s"),"."),(0,i.kt)("p",null,"Verify if your system clock is synchronized, type ",(0,i.kt)("inlineCode",{parentName:"p"},"timedatectl status")," and you should see similar output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Local time: Tue 2020-06-30 17:16:19 UTC\nUniversal time: Tue 2020-06-30 17:16:19 UTC\nRTC time: Tue 2020-06-30 17:16:19\nTime zone: Etc/UTC (UTC, +0000)\nSystem clock synchronized: yes\nsystemd-timesyncd.service active: yes\nRTC in local TZ: no\n")),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"System clock synchronized")," displays ",(0,i.kt)("inlineCode",{parentName:"p"},"yes")," you are all set, otherwise you may need to either:"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","synchronize clock with NTP servers (allow ",(0,i.kt)("strong",{parentName:"li"},"UDP")," port ",(0,i.kt)("strong",{parentName:"li"},"123")," for both incoming and outgoing traffic)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","use below script to sync with google.com:")),(0,i.kt)("p",null,"Create ",(0,i.kt)("inlineCode",{parentName:"p"},"fixtime.sh")," script and run it with ",(0,i.kt)("inlineCode",{parentName:"p"},"watch -n 60")," command in a ",(0,i.kt)("inlineCode",{parentName:"p"},"screen")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"echo sudo date -s '\"$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z\"' > fixtime.sh\nchmod +x fixtime.sh\nscreen -S time\nwatch -n 60 ./fixtime.sh\n")),(0,i.kt)("p",null,"Press ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+A+D")," to leave the ",(0,i.kt)("inlineCode",{parentName:"p"},"screen")),(0,i.kt)("h2",{id:"docker-compose-file-sample"},"Docker-compose file sample"),(0,i.kt)("p",null,"Create and edit",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nano docker-compose.yml\n")),(0,i.kt)("p",null,'{% tabs %}\n{% tab title="docker-compose.yml" %}'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3.5'\n\nservices:\n  nethermind-validator:\n    image: nethermind/nethermind\n    container_name: nethermind-validator\n    restart: unless-stopped\n    ports:\n      - 8545:8545\n      - 30303:30303\n    network_mode: host\n    environment:\n      - NETHERMIND_CONFIG=xdai\n    volumes:\n      - ${PWD}/nethermind_db:/nethermind/nethermind_db\n      - ${PWD}/keystore:/nethermind/keystore\n      - ${PWD}/logs:/nethermind/logs\n      - ${PWD}/xdai.cfg:/nethermind/configs/xdai.cfg\n      - ${PWD}/NLog.config:/nethermind/NLog.config\n      - ${PWD}/static-nodes.json:/nethermind/Data/static-nodes.json\n\nvolumes:\n  nethermind_db:\n    driver: local\n    name: nethermind_db\n  keystore:\n    driver: local\n    name: keystore\n  logs:\n    driver: local\n    name: logs\n")),(0,i.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,i.kt)("p",null,"Configure Nethermind node via environment variables or use local config file and map it to the one, existing inside\ncontainer (",(0,i.kt)("inlineCode",{parentName:"p"},"xdai.cfg")," file in above example)."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Make sure that ",(0,i.kt)("inlineCode",{parentName:"p"},"nethermind_db"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"keystore"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"logs")," - optional ) are mapped, otherwise you might lose database or keys")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/docs/docs/fundamentals/running-nethermind/runtime#nlog-config"},(0,i.kt)("inlineCode",{parentName:"a"},"NLog.config"))," file is optional.\\\n",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/docs/fundamentals/running-nethermind/runtime#static-nodes"},(0,i.kt)("inlineCode",{parentName:"a"},"static-nodes.json"))," can be filled with an\narray\nof enodes, this is also optional."),(0,i.kt)("h2",{id:"mining-private-key"},"Mining ",(0,i.kt)("strong",{parentName:"h2"},"P"),"rivate key"),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Make sure that the filename contains key's ",(0,i.kt)("strong",{parentName:"p"},"public address")," otherwise it won't be recognized by Nethermind Client as a\nkeyfile.\\\n\\\nCorrect naming of a ",(0,i.kt)("inlineCode",{parentName:"p"},"keyfile"),": ",(0,i.kt)("strong",{parentName:"p"},"key-a5237f7f43cc46cba43ac212dabd0c45e3e3050a")),(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"keyfile")," should be then stored inside ",(0,i.kt)("inlineCode",{parentName:"p"},"keystore")," volume.")),(0,i.kt)("h2",{id:"config-file"},"Config file"),(0,i.kt)("p",null,"Things to be configured:"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("inlineCode",{parentName:"li"},"Init.IsMining")," true"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("inlineCode",{parentName:"li"},"Init.MemoryHint")," can be left default, recommended to configure it accordingly to the machine hardware setup (\nfor ",(0,i.kt)("inlineCode",{parentName:"li"},"xdai")," 1000000000 is enough)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("inlineCode",{parentName:"li"},"EthStats")," section if you wish to report node status to the ethstats page for a given network"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("inlineCode",{parentName:"li"},"Metrics")," section if running\nlocal/remote ",(0,i.kt)("a",{parentName:"li",href:"/docs/docs/docs/monitoring/metrics-explanation/setting-up-local-metrics-infrastracture"},"Metrics infrastructure")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("inlineCode",{parentName:"li"},"KeyStore.PasswordFiles")," path to the file containing password for ",(0,i.kt)("strong",{parentName:"li"},"mining private key")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("inlineCode",{parentName:"li"},"KeyStore.UnlockAccounts")," an array of accounts, provide ",(0,i.kt)("strong",{parentName:"li"},"mining public address")," here"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("inlineCode",{parentName:"li"},"KeyStore.BlockAuthorAccount")," ",(0,i.kt)("strong",{parentName:"li"},"mining public address")," should be provided here as well"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("inlineCode",{parentName:"li"},"Aura.ForceSealing")," set to true")),(0,i.kt)("p",null,'{% tabs %}\n{% tab title="xdai.cfg" %}'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Init": {\n    "WebSocketsEnabled": false,\n    "StoreReceipts": true,\n    "IsMining": true,\n    "ChainSpecPath": "chainspec/xdai.json",\n    "GenesisHash": "0x4f1dd23188aab3a76b463e4af801b52b1248ef073c648cbdc4c9333d3da79756",\n    "BaseDbPath": "nethermind_db/xdai",\n    "LogFileName": "xdai.logs.txt",\n    "MemoryHint": 3000000000,\n    "StaticNodesPath": "Data/static-nodes.json"\n  },\n  "Network": {\n    "DiscoveryPort": 30303,\n    "P2PPort": 30303\n  },\n  "JsonRpc": {\n    "Enabled": false,\n    "Host": "127.0.0.1",\n    "Port": 8545,\n    "WebSocketsPort": 8546\n  },\n  "Db": {\n    "HeadersDbCacheIndexAndFilterBlocks": false,\n    "BlocksDbCacheIndexAndFilterBlocks": false,\n    "ReceiptsDbCacheIndexAndFilterBlocks": false,\n    "BlockInfosDbCacheIndexAndFilterBlocks": false\n  },\n  "Sync": {\n    "FastSync": true,\n    "PivotNumber": 10410000,\n    "PivotHash": "0x806f498fdde010f25bd3beb18e6f8a9c9450752f8c0e27da2cd2465ff184628c",\n    "PivotTotalDifficulty": "3542339439646969404653729663364707080928280566",\n    "FastBlocks": true,\n    "UseGethLimitsInFastBlocks": false,\n    "FastSyncCatchUpHeightDelta": 10000000000\n  },\n  "EthStats": {\n    "Enabled": false,\n    "Server": "ws://localhost:3000/api",\n    "Name": "Nethermind xDai",\n    "Secret": "secret",\n    "Contact": "hello@nethermind.io"\n  },\n  "Metrics": {\n    "NodeName": "Nethermind xDai",\n    "Enabled": false,\n    "PushGatewayUrl": "http://localhost:9091/metrics",\n    "IntervalSeconds": 5\n  },\n  "KeyStore": {\n    "PasswordFiles": [\n      "keystore/password.file"\n    ],\n    "UnlockAccounts": [\n      "0x..."\n    ],\n    "BlockAuthorAccount": "0x..."\n  },\n  "Aura": {\n    "ForceSealing": true\n  },\n  "Bloom": {\n    "IndexLevelBucketSizes": [\n      16,\n      16,\n      16\n    ]\n  }\n}\n\n')),(0,i.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,i.kt)("h2",{id:"running-validator-node"},"Running Validator node"),(0,i.kt)("p",null,"Run it with a simple docker-compose command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,i.kt)("p",null,"You will need to wait for the node to be fully ",(0,i.kt)("strong",{parentName:"p"},"synchronized"),"."),(0,i.kt)("p",null,"To check the logs and verify if it is sealing blocks as expected (look for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Sealed block")," log)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose logs -f nethermind-validator\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9336).Z,width:"893",height:"340"})))}m.isMDXComponent=!0},9336:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image(37)-af8260f3a196744f9d905fb241639318.png"}}]);