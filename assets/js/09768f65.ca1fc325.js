"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[126],{5901:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var o=t(5893),s=t(1151);const r={title:"Migrating from Geth",sidebar_position:4},i=void 0,d={id:"get-started/migrating-from-geth",title:"Migrating from Geth",description:"To migrate from Geth to Nethermind there are few conditions which should be met to ensure seamless and quick transition.",source:"@site/docs/get-started/migrating-from-geth.md",sourceDirName:"get-started",slug:"/get-started/migrating-from-geth",permalink:"/docs/get-started/migrating-from-geth",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/get-started/migrating-from-geth.md",tags:[],version:"current",lastUpdatedAt:1698949521,formattedLastUpdatedAt:"Nov 2, 2023",sidebarPosition:4,frontMatter:{title:"Migrating from Geth",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Consensus clients",permalink:"/docs/get-started/consensus-clients"},next:{title:"Configuration",permalink:"/docs/fundamentals/configuration"}},a={},c=[{value:"Option 1a - Sync Nethermind next to Geth",id:"option-1a---sync-nethermind-next-to-geth",level:3},{value:"Step 1 - Download Nethermind latest release",id:"step-1---download-nethermind-latest-release",level:4},{value:"Step 2 - Run secondary CL client for Nethermind syncing purpose only",id:"step-2---run-secondary-cl-client-for-nethermind-syncing-purpose-only",level:4},{value:"Step 3 - Run Nethermind and wait for Sync",id:"step-3---run-nethermind-and-wait-for-sync",level:4},{value:"Step 4 - Stop Geth instance",id:"step-4---stop-geth-instance",level:4},{value:"Step 5 - Stop secondary CL and restart Nethermind using ports assigned for Geth before",id:"step-5---stop-secondary-cl-and-restart-nethermind-using-ports-assigned-for-geth-before",level:4},{value:"Step 6 - Ensure Your setup works well after changes",id:"step-6---ensure-your-setup-works-well-after-changes",level:4},{value:"Step 7 - Remove Geth and secondary CL",id:"step-7---remove-geth-and-secondary-cl",level:4},{value:"Option 1b - Use Sedge to install Nethermind next to Geth quickly",id:"option-1b---use-sedge-to-install-nethermind-next-to-geth-quickly",level:3},{value:"Option 2 - Remove Geth and sync Nethermind",id:"option-2---remove-geth-and-sync-nethermind",level:3},{value:"Step 1 - Stop and remove Geth and its DB from disk",id:"step-1---stop-and-remove-geth-and-its-db-from-disk",level:4},{value:"Step 2 - Download Nethermind latest release",id:"step-2---download-nethermind-latest-release",level:4},{value:"Step 3 - Reconfigure CL and run Nethermind",id:"step-3---reconfigure-cl-and-run-nethermind",level:4},{value:"Step 4 - Ensure Your setup works well after changes",id:"step-4---ensure-your-setup-works-well-after-changes",level:4}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"To migrate from Geth to Nethermind there are few conditions which should be met to ensure seamless and quick transition."}),"\n",(0,o.jsxs)(n.p,{children:["First of all there is need to check ",(0,o.jsx)(n.strong,{children:"if disk is big enough."})," Most secure way would be to have a Nethermind node synced\non the same machine as Geth but without stopping Geth. It will give a chance to check Nethermind if sync was properly\nexecuted, verify if everything works correctly and will reduce downtime of node to bare minimum. Such option will be\nrecommended to any public JsonRpc provider or Validators."]}),"\n",(0,o.jsxs)(n.p,{children:["If disk is big enough, recommended workflow of action\nis ",(0,o.jsx)(n.a,{href:"/docs/get-started/migrating-from-geth#option-1a---sync-nethermind-next-to-geth",children:"#option-1a-sync-nethermind-next-to-geth"}),"\nor ",(0,o.jsx)(n.a,{href:"/docs/get-started/migrating-from-geth#option-1b---use-sedge-to-install-nethermind-next-to-geth-quickly",children:"#option-1b-use-sedge-to-install-nethermind-next-to-geth-quickly"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"If disk is not big enough but downtime is not an option recommended would be to first try to increase disk space or if\nnot possible to extend existing setup, then host Nethermind on separate machine, sync it and whenever it completes its\nwork, move everything validator related to that machine and abandon first machine."}),"\n",(0,o.jsxs)(n.p,{children:["On the other hand, if downtime of around ~12h is not a problem, then suggested would be to go\nwith ",(0,o.jsx)(n.a,{href:"/docs/get-started/migrating-from-geth#option-2---remove-geth-and-sync-nethermind",children:"#option-2-remove-geth-and-sync-nethermind"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"option-1a---sync-nethermind-next-to-geth",children:"Option 1a - Sync Nethermind next to Geth"}),"\n",(0,o.jsx)(n.h4,{id:"step-1---download-nethermind-latest-release",children:"Step 1 - Download Nethermind latest release"}),"\n",(0,o.jsxs)(n.p,{children:["Please refer to\na ",(0,o.jsx)(n.a,{href:"/docs/get-started/installing-nethermind",children:"#step-1-installing-nethermind"})," to see\navailable options or use ",(0,o.jsxs)(n.a,{href:"https://docs.sedge.nethermind.io/",children:[(0,o.jsx)(n.strong,{children:"Sedge"})," "]})," which is a one-click setup tool for running\nnode\ndeveloped by Nethermind Team (refer\nto ",(0,o.jsx)(n.a,{href:"/docs/get-started/migrating-from-geth#option-1b---use-sedge-to-install-nethermind-next-to-geth-quickly",children:"#option-1b-use-sedge-to-install-nethermind-next-to-geth-quickly"}),")."]}),"\n",(0,o.jsx)(n.h4,{id:"step-2---run-secondary-cl-client-for-nethermind-syncing-purpose-only",children:"Step 2 - Run secondary CL client for Nethermind syncing purpose only"}),"\n",(0,o.jsxs)(n.p,{children:["Please refer to\na ",(0,o.jsx)(n.a,{href:"/docs/get-started/consensus-clients",children:"#step-2-installing-consensus-client"}),"\nto install secondary CL client beacon node which will be used only for Nethermind syncing purpose.",(0,o.jsx)(n.br,{}),"\n","Once it is installed ensure it is not colliding with primary CL currently used by Geth."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"EXAMPLE"}),(0,o.jsx)(n.br,{}),"\n","In case of running Geth + Prysm as a primary node, and configuring second pair which will be Nethermind + Prysm, for\nsecond instance of Prysm, flags needed to be used are (considering that primary one is using default values):",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.code,{children:"--rpc-port=4001 --p2p-tcp-port=13001 --p2p-udp-port=12001 --grpc-gateway-port=3501"})]})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"REMEMBER"}),(0,o.jsx)(n.br,{}),"\n","Nethermind node will also be running on separate ports so there should be\na ",(0,o.jsx)(n.code,{children:"--execution-endpoint=http://localhost:<<NETHERMIND_ENGINE_PORT>>"})," flag set keeping in mind that\nNETHERMIND_ENGINE_PORT should be changed to value selected in next step (preferably 8552)"]})}),"\n",(0,o.jsx)(n.h4,{id:"step-3---run-nethermind-and-wait-for-sync",children:"Step 3 - Run Nethermind and wait for Sync"}),"\n",(0,o.jsxs)(n.p,{children:["Please refer to a ",(0,o.jsx)(n.a,{href:"/docs/get-started/consensus-clients",children:"#step-4-run-nethermind"}),"for\ninstruction on how to run Nethermind."]}),"\n",(0,o.jsxs)(n.admonition,{type:"warning",children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"REMEMBER"})}),(0,o.jsxs)(n.p,{children:["For Nethermind You will also need to set a separate ports to not create a conflict with still working Geth node. Values\nneeded to be changed with recommended values:",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.code,{children:"--JsonRpc.Port 8546 --JsonRpc.EnginePort 8552 --Network.DiscoveryPort 30304 --Network.P2PPort 30304"})]})]}),"\n",(0,o.jsxs)(n.p,{children:["Now Nethermind node should be syncing well using second CL configured on machine. To monitor status of syncing there is\na JsonRPC call which can be\nused ",(0,o.jsx)(n.a,{href:"/docs/interacting/json-rpc-ns/eth#eth_syncing",children:"#eth_syncing"}),'.\nWhenever this endpoint will return "false", node is considered as fully synced with all bodies and receipts needed to\nwork properly as a Validator.']}),"\n",(0,o.jsx)(n.p,{children:"Another option is to use a health module which will also return a information about current state of syncing."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["You can see more details of how to monitor ",(0,o.jsx)(n.a,{href:"/docs/monitoring/health-check",children:"Node Health here"})]})}),"\n",(0,o.jsx)(n.h4,{id:"step-4---stop-geth-instance",children:"Step 4 - Stop Geth instance"}),"\n",(0,o.jsxs)(n.p,{children:["Now it is time to stop Geth. In order to do that stop Geth command/service/docker container. It depends on a way Geth\nwas started initially. ",(0,o.jsx)(n.br,{}),"\n","Ensure it is stopped properly and is not progressing before moving to next step."]}),"\n",(0,o.jsx)(n.h4,{id:"step-5---stop-secondary-cl-and-restart-nethermind-using-ports-assigned-for-geth-before",children:"Step 5 - Stop secondary CL and restart Nethermind using ports assigned for Geth before"}),"\n",(0,o.jsxs)(n.p,{children:["After Geth is properly stopped and removed, restart your nethermind client but now without flags from point 3 (or adjust\nthem to use the same ports which were used by Geth).",(0,o.jsx)(n.br,{}),"\n","Also stop a secondary CL client to ensure that after that step only Nethermind and CL1 (used before to talk with Geth)\nare started only."]}),"\n",(0,o.jsxs)(n.p,{children:["Also important would be to restart primary CL using jwt-secret used by Nethermind. For that purpose, you can either use\nflags in CL to point to Nethermind jwtsecret or point Nethermind to that jwtsecret using command:\n",(0,o.jsx)(n.code,{children:'--JsonRpc.JwtSecretFile "path/to/jwtsecret.hex"'})]}),"\n",(0,o.jsx)(n.h4,{id:"step-6---ensure-your-setup-works-well-after-changes",children:"Step 6 - Ensure Your setup works well after changes"}),"\n",(0,o.jsx)(n.p,{children:"To see if nodes are progressing properly check logs of both Nethermind and CL to check if there are no warnings/errors -\nespecially ones about authentication which may tell about invalid jwtsecret used or no jwt configured."}),"\n",(0,o.jsxs)(n.p,{children:["Also check if Your Nethermind node is following chain properly. From logs you can extract messages like:\n",(0,o.jsx)(n.code,{children:"Block <<HASH>> was set as head."})]}),"\n",(0,o.jsxs)(n.p,{children:["Compare a hash from log to hash of corresponding block on ",(0,o.jsx)(n.a,{href:"https://etherscan.io/",children:"https://etherscan.io/"})," to see if node\nis progressing well."]}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"EXAMPLE"}),"\nLogs from Nethermind:\n",(0,o.jsx)(n.code,{children:"Block 0x13cebe2db23cc09fb386fa4a470d6dac3dfca65e11968472f5a1f3681191beab was set as head. 20 Feb 2023 14:56:36.987"}),"\n",(0,o.jsx)(n.code,{children:"FCU - block 16670194 (0x13cebe...91beab) was processed."})]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Block on etherscan:"}),"\n",(0,o.jsx)(n.a,{href:"https://etherscan.io/block/16670194",children:(0,o.jsx)(n.code,{children:"https://etherscan.io/block/16670194"})})]}),(0,o.jsx)(n.p,{children:"Block number and block hash matches information from logs."})]}),"\n",(0,o.jsx)(n.h4,{id:"step-7---remove-geth-and-secondary-cl",children:"Step 7 - Remove Geth and secondary CL"}),"\n",(0,o.jsxs)(n.p,{children:["In this step you can remove Geth database and secondary CL used for Nethermind syncing.\nFor Geth in order to remove db, remove ",(0,o.jsx)(n.code,{children:".ethereum"})," directory (default may be ",(0,o.jsx)(n.code,{children:"/root/.ethereum"})," or path set on geth\nstartup). Also there is a command which can be used to remove Geth db:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"sudo geth --datadir /var/lib/goethereum removedb"})}),"\n",(0,o.jsx)(n.h3,{id:"option-1b---use-sedge-to-install-nethermind-next-to-geth-quickly",children:"Option 1b - Use Sedge to install Nethermind next to Geth quickly"}),"\n",(0,o.jsxs)(n.p,{children:["Sedge is a one-click tool which can host entire node on your machine withing a single command taking care of ports,\ncheckpoint sync, connection between EL and CL etc.\nThere is a documentation of Sedge located here: ",(0,o.jsx)(n.a,{href:"https://docs.sedge.nethermind.io/",children:"https://docs.sedge.nethermind.io/"})]}),"\n",(0,o.jsx)(n.p,{children:"High level flow would be similar to Option 1a, but Sedge would automatically take care of Steps 1,2 and 3."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["To add additional flags to Sedge, use ",(0,o.jsx)(n.code,{children:"--el-extra-flag JsonRpc.Port=8546"})," or --cl-extra-flag ",(0,o.jsx)(n.code,{children:"rpc-port=4001"})]})}),"\n",(0,o.jsxs)(n.p,{children:["Later on step 5 you can edit a ",(0,o.jsx)(n.code,{children:"docker-compose.yml"})," file and remove all extra flags which were passed to EL or CL and\nsimply restart a node using commands:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker compose stop execution\ndocker compose up -d execution\n"})}),"\n",(0,o.jsx)(n.h3,{id:"option-2---remove-geth-and-sync-nethermind",children:"Option 2 - Remove Geth and sync Nethermind"}),"\n",(0,o.jsx)(n.p,{children:"This option is quicker since does not require to adjust configuration of EL or CL to not collide with currently running\nsetup."}),"\n",(0,o.jsx)(n.h4,{id:"step-1---stop-and-remove-geth-and-its-db-from-disk",children:"Step 1 - Stop and remove Geth and its DB from disk"}),"\n",(0,o.jsxs)(n.p,{children:["First of all, Geth and its DB needs to be removed. Stop Geth process, find a ",(0,o.jsx)(n.code,{children:".ethereum"})," directory and remove it\ncompletely. Also there is a command which can be used to remove Geth db:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"sudo geth --datadir /var/lib/goethereum removedb"})}),"\n",(0,o.jsx)(n.p,{children:"Ensure that Geth is stopped properly - it is crucial since it acquires ports which are common between other clients so\nit may cause some unexpected problems during procedure of syncing Nethermind."}),"\n",(0,o.jsx)(n.h4,{id:"step-2---download-nethermind-latest-release",children:"Step 2 - Download Nethermind latest release"}),"\n",(0,o.jsxs)(n.p,{children:["Please refer to\na ",(0,o.jsx)(n.a,{href:"/docs/get-started/consensus-clients",children:"#step-1-installing-nethermind"})," to see\navailable options or use ",(0,o.jsxs)(n.a,{href:"https://docs.sedge.nethermind.io/",children:[(0,o.jsx)(n.strong,{children:"Sedge"})," "]})," which is a one-click setup tool for running\nnode\ndeveloped by Nethermind Team."]}),"\n",(0,o.jsx)(n.h4,{id:"step-3---reconfigure-cl-and-run-nethermind",children:"Step 3 - Reconfigure CL and run Nethermind"}),"\n",(0,o.jsxs)(n.p,{children:["Important thing in PoS chains like Ethereum Mainnet is to properly setup a connection between EL and CL. JwtSecret which\nis used for that communication is needed to be set properly. For that purpose, you can either use flags in CL to point\nto Nethermind jwtsecret or point Nethermind to that jwtsecret using command:",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.code,{children:'--JsonRpc.JwtSecretFile "path/to/jwtsecret.hex"'})]}),"\n",(0,o.jsxs)(n.p,{children:["Nethermind will generate jwtsecret in ",(0,o.jsx)(n.code,{children:"keystore"})," directory and if not specified, it will use this secret."]}),"\n",(0,o.jsxs)(n.p,{children:["After reconfiguring CL, run Nethermind an monitor it. Please refer to\na ",(0,o.jsx)(n.a,{href:"/docs/get-started/consensus-clients",children:"#step-4-run-nethermind"}),"for instruction on how to\nrun Nethermind."]}),"\n",(0,o.jsxs)(n.p,{children:["Now Nethermind node should be syncing well using CL reconfigured on machine. To monitor status of syncing there is a\nJsonRPC call which can be used ",(0,o.jsx)(n.a,{href:"/docs/interacting/json-rpc-ns/eth#eth_syncing",children:"#eth_syncing"}),'.\nWhenever this endpoint will return "false", node is considered as fully synced with all bodies and receipts needed to\nwork properly as a Validator.']}),"\n",(0,o.jsx)(n.p,{children:"Another option is to use a health module which will also return a information about current state of syncing."}),"\n",(0,o.jsx)(n.h4,{id:"step-4---ensure-your-setup-works-well-after-changes",children:"Step 4 - Ensure Your setup works well after changes"}),"\n",(0,o.jsx)(n.p,{children:"To see if nodes are progressing properly check logs of both Nethermind and CL to check if there are no warnings/errors -\nespecially ones about authentication which may tell about invalid jwtsecret used or no jwt configured."}),"\n",(0,o.jsxs)(n.p,{children:["Also check if Your Nethermind node is following chain properly. From logs you can extract messages like:\n",(0,o.jsx)(n.code,{children:"Block <<HASH>> was set as head."})]}),"\n",(0,o.jsxs)(n.p,{children:["Compare a hash from log to hash of corresponding block on ",(0,o.jsx)(n.a,{href:"https://etherscan.io/",children:"https://etherscan.io/"})," to see if node\nis progressing well."]}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"EXAMPLE"}),"\nLogs from Nethermind:\n",(0,o.jsx)(n.code,{children:"Block 0x13cebe2db23cc09fb386fa4a470d6dac3dfca65e11968472f5a1f3681191beab was set as head. 20 Feb 2023 14:56:36.987"}),"\n",(0,o.jsx)(n.code,{children:"FCU - block 16670194 (0x13cebe...91beab) was processed."})]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Block on etherscan:"}),"\n",(0,o.jsx)(n.a,{href:"https://etherscan.io/block/16670194",children:(0,o.jsx)(n.code,{children:"https://etherscan.io/block/16670194"})})]}),(0,o.jsx)(n.p,{children:"Block number and block hash matches information from logs."})]})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>i});var o=t(7294);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);