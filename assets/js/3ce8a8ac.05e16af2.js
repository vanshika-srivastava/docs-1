"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[438],{340:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=s(5893),i=s(1151);const o={title:"Sync",sidebar_position:2},r=void 0,a={id:"fundamentals/sync",title:"Sync",description:"This article requires a revision.",source:"@site/docs/fundamentals/sync.md",sourceDirName:"fundamentals",slug:"/fundamentals/sync",permalink:"/fundamentals/sync",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/fundamentals/sync.md",tags:[],version:"current",lastUpdatedAt:1699575981,formattedLastUpdatedAt:"Nov 10, 2023",sidebarPosition:2,frontMatter:{title:"Sync",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/fundamentals/configuration"},next:{title:"Security",permalink:"/fundamentals/security"}},d={},c=[{value:"There are three main synchronization modes",id:"there-are-three-main-synchronization-modes",level:2},{value:"Snap Sync",id:"snap-sync",level:2},{value:"How to Enable",id:"how-to-enable",level:4},{value:"Snap Sync vs Other Sync Modes",id:"snap-sync-vs-other-sync-modes",level:4},{value:"Current limitations and future development",id:"current-limitations-and-future-development",level:4},{value:"Fast Sync",id:"fast-sync",level:2},{value:"Archive Sync",id:"archive-sync",level:2},{value:"Resync a node from scratch",id:"resync-a-node-from-scratch",level:2},{value:"Steps to Resync a Nethermind Node",id:"steps-to-resync-a-nethermind-node",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"This article requires a revision."})}),"\n",(0,t.jsx)(n.h2,{id:"there-are-three-main-synchronization-modes",children:"There are three main synchronization modes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["snap sync","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"the fastest way to sync to the network (syncs to mainnet in ~3 hours)"}),"\n",(0,t.jsx)(n.li,{children:"downloads only the latest state, headers, and optionally bodies and receipts"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["fast sync","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"slower than snap sync"}),"\n",(0,t.jsx)(n.li,{children:"useful on nethermind-only chains (like Gnosis), where snap sync is not available for now"}),"\n",(0,t.jsx)(n.li,{children:"downloads only the latest state, headers, and optionally bodies and receipts"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["archive sync","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"heavy historical sync verifying all the transactions and keeping all the historical state"}),"\n",(0,t.jsxs)(n.li,{children:["you can run it like this ",(0,t.jsx)(n.code,{children:"./Nethermind.Runner --config mainnet_archive"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Sync Mode"}),(0,t.jsx)(n.th,{children:"Disk Space needed"}),(0,t.jsx)(n.th,{children:"Full current state"}),(0,t.jsx)(n.th,{children:"Full current and all historical states"}),(0,t.jsx)(n.th,{children:"Can sync a full archive node from this"}),(0,t.jsx)(n.th,{children:"Time to sync"}),(0,t.jsx)(n.th,{children:"Time to RPC"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"archive"}),(0,t.jsx)(n.td,{children:"~12TB"}),(0,t.jsx)(n.td,{children:"YES"}),(0,t.jsx)(n.td,{children:"YES"}),(0,t.jsx)(n.td,{children:"YES"}),(0,t.jsx)(n.td,{children:"~3 weeks"}),(0,t.jsx)(n.td,{children:"~3 weeks"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"snap/fast sync with all bodies and receipts"}),(0,t.jsx)(n.td,{children:"~800GB"}),(0,t.jsx)(n.td,{children:"YES"}),(0,t.jsx)(n.td,{children:"NO"}),(0,t.jsx)(n.td,{children:"YES"}),(0,t.jsx)(n.td,{children:"~20 hours"}),(0,t.jsx)(n.td,{children:"~20 hours"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"default snap/fast sync (with barriers set to support Eth2)"}),(0,t.jsx)(n.td,{children:"~500GB"}),(0,t.jsx)(n.td,{children:"YES"}),(0,t.jsx)(n.td,{children:"NO"}),(0,t.jsx)(n.td,{children:"NO"}),(0,t.jsx)(n.td,{children:"~11 hours"}),(0,t.jsx)(n.td,{children:"~11 hours"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"snap/fast sync without receipts"}),(0,t.jsx)(n.td,{children:"~450GB"}),(0,t.jsx)(n.td,{children:"YES"}),(0,t.jsx)(n.td,{children:"NO"}),(0,t.jsx)(n.td,{children:"YES"}),(0,t.jsx)(n.td,{children:"~12 hours"}),(0,t.jsx)(n.td,{children:"~12 hours"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"snap/fast sync without bodies and receipts"}),(0,t.jsx)(n.td,{children:"~200GB"}),(0,t.jsx)(n.td,{children:"YES"}),(0,t.jsx)(n.td,{children:"NO"}),(0,t.jsx)(n.td,{children:"NO"}),(0,t.jsx)(n.td,{children:"~9 hours"}),(0,t.jsx)(n.td,{children:"~9 hours"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"snap-sync",children:"Snap Sync"}),"\n",(0,t.jsx)(n.p,{children:"Snap sync allows a node to perform the initial synchronization and download of Ethereum\u2019s state up to 10 times faster\nthan using fast sync."}),"\n",(0,t.jsx)(n.h4,{id:"how-to-enable",children:"How to Enable"}),"\n",(0,t.jsxs)(n.p,{children:["Snap sync is enabled by default for majority of networks. To make sure, check if",(0,t.jsx)(n.code,{children:"SnapSync"})," is set to ",(0,t.jsx)(n.code,{children:"true"})," in the Sync\nmodule of your ",(0,t.jsx)(n.code,{children:".cfg"})," file"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'"Sync": {\n\t"SnapSync": true\n}\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"IMPORTANT"}),": Do not enable snap sync on a previously synced node. Only use when syncing to the network for the first\ntime."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"IMPORTANT"}),": Do not remove other configurations from Sync module. Just add ",(0,t.jsx)(n.code,{children:'"SnapSync": true'}),", e.g."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'"Sync": {\n\t"SnapSync": true,\n\t"PivotNumber": 15011000,\n        "PivotHash": "0x46c838d02d5fa5bc070080ed7965da1d888f6eb1797045365407c7011280af56",\n    \t"PivotTotalDifficulty": "52367203434576253689712",\n    \t"FastBlocks": true\n}\n'})}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"snap-sync-vs-other-sync-modes",children:"Snap Sync vs Other Sync Modes"}),"\n",(0,t.jsx)(n.p,{children:"More than 12TB of storage is needed today to run a full archive node \u2014 one that stores all the state since genesis.\nBecause of that, setting up an archive node can take days or even weeks. Fast Sync can still take more than 24 hours on\nthe fast machine and download about 90GB state data. With Snap Sync, sync time is reduced to 2-3h with a download of\nabout 30GB."}),"\n",(0,t.jsx)(n.p,{children:"This reduction in sync time and download size has to do with the specific way in which Ethereum\u2019s state is stored in a\nnode: Merkle trees."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(3192).Z+"",width:"1168",height:"939"})}),"\n",(0,t.jsx)(n.p,{children:"With Fast Sync, a node downloads the headers of each block and retrieves all the nodes beneath it until it reaches the\nleaves. By contrast, Snap Sync only downloads the leaf nodes, generating the remaining nodes locally which saves time\nand packets downloaded."}),"\n",(0,t.jsx)(n.h4,{id:"current-limitations-and-future-development",children:"Current limitations and future development"}),"\n",(0,t.jsx)(n.p,{children:"For now Snap Sync on the Nethermind client can only download the Ethereum state but not serve it to other clients - snap\nserving development is in progress, expected late 2023/early 2024."}),"\n",(0,t.jsx)(n.p,{children:"The only Ethereum client that supports serving Snap Sync requests is Geth, so only networks supported by Geth can be\nsynced using that method: Mainnet, Goerli, Sepolia."}),"\n",(0,t.jsx)(n.h2,{id:"fast-sync",children:"Fast Sync"}),"\n",(0,t.jsxs)(n.p,{children:["After completing the fast sync your node will have the ability to answer questions like ",(0,t.jsxs)(n.em,{children:["'what is my account\nbalance ",(0,t.jsx)(n.strong,{children:"now"}),"'"]}),", ",(0,t.jsxs)(n.em,{children:["'how many XYZ tokens SomeExchange holds ",(0,t.jsx)(n.strong,{children:"at the moment"}),"'"]}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Fast sync has multiple stages. Nethermind uses a ",(0,t.jsx)(n.code,{children:"pivot block"})," number to improve fast sync performance.\nThe ",(0,t.jsx)(n.code,{children:"pivot block"})," data is automatically updated after initialization of the client and consists of\nthe ",(0,t.jsx)(n.code,{children:"block number"}),", ",(0,t.jsx)(n.code,{children:"block hash"})," and ",(0,t.jsx)(n.code,{children:"block total difficulty"})," (please note that ",(0,t.jsx)(n.code,{children:"total difficulty"})," is different\nthan ",(0,t.jsx)(n.code,{children:"difficulty"}),"). Before synchronizing state data Nethermind synchronizes in two directions - backwards\nfrom ",(0,t.jsx)(n.code,{children:"pivot block"})," to 0 for headers and forward to the head of the chain for headers, blocks and receipts. Forward sync\nmight be very slow (5 - 50 bps) so having fresh pivot block is very important - it is guaranteed by recently implemented\nauto-update."]}),"\n",(0,t.jsx)(n.p,{children:"After downloading the block data Nethermind will start state sync (downloading the latest state trie nodes). We are\nproviding an estimate for the download size and progress but the real value may be different than the estimate (\nespecially if you are using an old version of Nethermind as we sometimes manually adjust the estimator based on our\nobservations of the chain growth rate). Because of this sometimes your sync may continue even when it shows ~100%\nfinished. The other important component is the speed of your sync - if your IO / network / file system causes the state\nsync to go much slower than around 1.5MB per second on average then you will start downloading some parts of the trie\nover and over again. In such cases you may be surprised to see something like 58000MB / 53000MB (100%). It means that\nyou downloaded around 5GB of data that is no longer needed. If your sync is very slow (extended beyond two days) then\nvery likely your setup cannot catch up with the chain progress."}),"\n",(0,t.jsxs)(n.p,{children:["After the state sync finishes you will see the ",(0,t.jsx)(n.em,{children:"'Processed...'"})," messages like in archive sync - it means that your node\nis in sync and is processing the latest blocks."]}),"\n",(0,t.jsx)(n.p,{children:"Mainnet sync, at the time of writing (December 2020), takes around 8 hours on an UpCloud 16GB RAM 8 CPU $40 VM (and then\nsyncs receipts and bodies in the background if you enabled them in the configuration). Goerli sync should take around 40\nminutes."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Fast sync logs example for mainnet.",src:s(4705).Z+"",width:"1920",height:"1030"})}),"\n",(0,t.jsxs)(n.p,{children:["State sync log messages have multiple values displayed. First ",(0,t.jsx)(n.code,{children:"dd.HH:mm:ss"})," total state sync time is displayed, followed\nby an estimated sync progress (percentage of total database data synced), then the current download speed is displayed (\nthere will be times when it will slow down to 0 or single digit numbers, especially towards the end of the sync). In\ngeneral 6 hours sync times shown on screenshots are with around 2000 kB/s (kilobytes per second) average sync rate. You\ncan calculate it in the example as ~45GB / (2MB/s) ~ 22500 seconds ~6.25 hours. We also display the number of state\naccounts synced, number of trie nodes synced and a diagnostic message in the format of ",(0,t.jsx)(n.em,{children:"[number_of_pending_requests]\n.[average time spent in response handler displayed as milliseconds]"}),". So ",(0,t.jsx)(n.code,{children:"5.6.20ms"})," means that we are awaiting for\nresponses to 5 requests that have been sent to peers and the average time it takes us to process a single response is\n6.20ms. The response handling times will differ depending on how many trie nodes are already cached (so they will be\nsignificantly slower for a while after the node restart when cache has to be rebuilt) and based on how fast the database\nIO is (SSD vs NVMe vs cloud drives). For a reasonable sync time you probably should expect these values to be below\n15ms (but they may be as high as 700ms for a while after restarting the node)."]}),"\n",(0,t.jsx)(n.p,{children:"A single restart of the node during the fast sync may extend the sync time by up to two hours because the node has to\nrebuild the caches by reading millions of values from the database."}),"\n",(0,t.jsx)(n.p,{children:"At the last stages of the sync the node will be repeatedly displaying the branch sync progress and changing the block\nnumber to which it tries to catch up. This stage should take between 30 minutes and two hours. If it lasts much more\nthen it is possible that you will not be able to catch up with the network progress."}),"\n",(0,t.jsx)(n.p,{children:"One of the best indicators that you are close to be synced is combined ~100% state size progress and nearly 100% branch\nsync progress."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(8950).Z+"",width:"1920",height:"1030"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(2794).Z+"",width:"1895",height:"795"})}),"\n",(0,t.jsx)(n.h2,{id:"archive-sync",children:"Archive Sync"}),"\n",(0,t.jsxs)(n.p,{children:["Archive sync is the 'heaviest' and slowest sync mode but allows to ask questions like ",(0,t.jsx)(n.em,{children:"'what was the balance of my\naccount 2 years ago?'"}),", ",(0,t.jsx)(n.em,{children:"'how many XYZ token were held in SomeExchange custody in 2017?'"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["We have prepared default archive sync configurations and they can be launched from Nethermind Launcher (just choose the\narchive options) or by simply loading appropriate config when launching ",(0,t.jsx)(n.code,{children:"./Nethermind.Runner --config mainnet_archive"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"./Nethermind.Runner --config goerli_archive"})}),"\n",(0,t.jsx)(n.p,{children:"While for some smaller networks archive sync can complete very quickly (in minutes or hours) mainnet sync would take 2 -\n6 weeks depending on the speed of your IO (whether you use SSD or NVMe or depending on the cloud provider IOPS).\nDatabase size in archive sync is the biggest from all modes as you will store all the historical data."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Example of the archive sync logs",src:s(4690).Z+"",width:"1920",height:"1030"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(9301).Z+"",width:"1920",height:"1030"})}),"\n",(0,t.jsx)(n.p,{children:"Explanation of some data in the logs:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["at the beginning you may see a ",(0,t.jsx)(n.em,{children:"'Waiting for peers...'"})," message while the node is trying to discover nodes that it can\nsync with."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"'Downloaded 1234/8000000'"})," shows the number of unprocessed blocks (with transactions) downloaded from the network.\nFor ",(0,t.jsx)(n.code,{children:"mainnet"}),"this value may be slower than processing at first but very quickly you will see blocks being downloaded\nmuch faster than processed. Empty blocks can be as small as 512 bytes (just headers without transactions) and full\nblocks with heavy transactions can reach a few hundred kilobytes. We display both current download speed (calculated\nin the last second) and average (total) speed since starting the node."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"'Processed ...'"})," displays the blocks that have been processed by the EVM. The first number shows the current head\nblock number, then you can see ",(0,t.jsx)(n.code,{children:"mgasps"})," (million gas per second) - current and total, then ",(0,t.jsx)(n.code,{children:"tps"})," (transactions per\nsecond) - current and total, ",(0,t.jsx)(n.code,{children:"bps"})," (blocks per second). Then ",(0,t.jsx)(n.code,{children:"recv queue"})," (transactions signature public key recovery\nqueue), ",(0,t.jsx)(n.code,{children:"proc queue"})," (processor queue). Both recovery queue and processor queue are designed so when too many blocks\nare waiting for processing then only their hashes are kept in memory and remaining data are stored in the database.\nThus, the queues numbers that you can see will be capped by some number."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"'Cache for epoch...'"})," informs about ",(0,t.jsx)(n.code,{children:"ethash"})," cache needed for block seal verification (only on ",(0,t.jsx)(n.code,{children:"mainnet"}),"\nand ",(0,t.jsx)(n.code,{children:"ropsten"}),"). Caches will be calculated every 30000 blocks (length of an epoch) but can also be calculated for the\nlatest blocks that are being broadcast on the network."]}),"\n",(0,t.jsxs)(n.li,{children:["After the archive sync finishes you will see the ",(0,t.jsx)(n.em,{children:"'Processed...'"})," message appearing on average every 15 seconds when\nthe new block is processed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"mgasps"}),", ",(0,t.jsx)(n.code,{children:"tps"}),", ",(0,t.jsx)(n.code,{children:"bps"})," values should not be treated as comparable as they may differ massively on different parts of\nthe chain. For example when blocks are empty you may see very high ",(0,t.jsx)(n.code,{children:"bps"})," values with very low (or even zero) ",(0,t.jsx)(n.code,{children:"tps"}),"\nand ",(0,t.jsx)(n.code,{children:"mgasps"})," values as there are no transactions and no gas for EVM processing and blocks are very light. On the other\nhand when blocks are filled with very heavy transactions then ",(0,t.jsx)(n.code,{children:"bps"})," might be very low while ",(0,t.jsx)(n.code,{children:"mgasps"})," will be very\nhigh. It is even possible that you will see a lot of very light transactions where ",(0,t.jsx)(n.code,{children:"tps"})," will be high while ",(0,t.jsx)(n.code,{children:"bps"}),"\nand ",(0,t.jsx)(n.code,{children:"mgasps"})," will be average."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"resync-a-node-from-scratch",children:"Resync a node from scratch"}),"\n",(0,t.jsx)(n.p,{children:"This guide explains how to resync a Nethermind node using the existing Pivot block or updating it to a more recent one."}),"\n",(0,t.jsx)(n.h3,{id:"steps-to-resync-a-nethermind-node",children:"Steps to Resync a Nethermind Node"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Stop the Nethermind node"}),": If your Nethermind node is currently running, stop it to ensure that no new data is\nbeing written to the database during the resync process."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Delete the existing database"}),": Navigate to the Nethermind data directory. The location of this directory depends\non how Nethermind was installed and your configuration settings. Inside the data directory, find the ",(0,t.jsx)(n.code,{children:"nethermind_db"}),"\nfolder and delete the ",(0,t.jsx)(n.code,{children:"mainnet"})," subfolder to remove the existing database for the mainnet."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Update the configuration file (optional)"}),": If you want to change any configuration settings before resyncing the\nnode, edit the ",(0,t.jsx)(n.code,{children:"mainnet.cfg"})," file located in the Nethermind directory. For example, you might want to adjust the\npruning settings or specify a different network."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Update the Pivot block (optional)"}),"\\","\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Only for versions before 1.19.0 where Auto-Pivot approach was introduced"})})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Using Etherscan"}),": If you want to speed up the syncing process, you can update the Pivot block to a more recent\none. To do this, find the ",(0,t.jsx)(n.code,{children:"Sync"})," section in the ",(0,t.jsx)(n.code,{children:"mainnet.cfg"})," file and update the ",(0,t.jsx)(n.code,{children:"PivotNumber"})," and ",(0,t.jsx)(n.code,{children:"PivotHash"}),'\nfields to match a recent "finalized" block number and its corresponding hash. You can obtain this information from\na block explorer such as ',(0,t.jsx)(n.a,{href:"https://etherscan.io/",children:"Etherscan"}),".",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.br,{}),"\n","Using block number 17165278 from ",(0,t.jsx)(n.a,{href:"https://etherscan.io/block/17165278",children:"Etherscan"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'  { \n \t "PivotNumber": 17165278,\n \t "PivotHash": "0xa665315efd923f3b11215feee09a9d3e13c5e6ee602fa19b642824682ec0a752"\n  }\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Using Nethermind's GitHub"}),": Alternatively, you can update the Pivot block by referring to\nthe ",(0,t.jsx)(n.a,{href:"https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Nethermind.Runner/configs/mainnet.cfg",children:"Nethermind's mainnet.cfg file on GitHub"}),".\nThe Pivot block is periodically bumped to the HEAD-8192 block of the mainnet chain. Copy the ",(0,t.jsx)(n.code,{children:"PivotNumber"}),"\nand ",(0,t.jsx)(n.code,{children:"PivotHash"})," values from the GitHub file and update your local ",(0,t.jsx)(n.code,{children:"mainnet.cfg"})," file accordingly."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Restart the Nethermind node"}),": Start the Nethermind node again to initiate the resync process. The node will begin\nsyncing from the existing Pivot block or the specified updated Pivot block, downloading and processing all the blocks\nin the blockchain."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To ensure that your Nethermind node is resyncing, you can monitor the logs for the node's progress. The logs will\ndisplay information about the block processing, synchronization status and ",(0,t.jsx)(n.code,{children:"OldHeaders"})," being processed. By observing\nthe increasing block numbers and synchronization messages in the logs, you can confirm that the resync process is active\nand working as expected."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Old Headers 0 / 17154000 | queue 0 | current 0.00bps | total 0.00bps"}),"\n",(0,t.jsx)(n.p,{children:"Old Headers 768 / 17154000 | queue 0 | current 766.07bps | total 762.49bps"}),"\n",(0,t.jsx)(n.p,{children:"Beacon Headers from block 17154001 to block 17169722 | 960 / 15722 | queue 4992 | current 0.00bps | total\n40622848.83bps"}),"\n",(0,t.jsx)(n.p,{children:"Old Headers 9024 / 17154000 | queue 0 | current 576.40bps | total 1286.40bps"}),"\n",(0,t.jsxs)(n.p,{children:["Beacon Headers from block 17154001 to block 17169723 | 9024 / 15723 | queue 6698 | current 2694.81bps | total\n3882943.63bps",(0,t.jsx)(n.br,{}),"\n","Downloaded 17154031 / 17172359 | current 0.00bps | total 0.00bps"]}),"\n",(0,t.jsx)(n.p,{children:"Downloaded 17154062 / 17169724 | current 0.00bps | total 2.88bps"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Keep in mind that resyncing a Nethermind node can take a considerable amount of time. It depends on your hardware,\ninternet connection, and the size of the blockchain."})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},3192:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/Untitled(1)-e656672bbe5916256187472154cefdbf.png"},9301:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/image(57)-6779647766702b4a63d74e01bd27978a.png"},4690:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/image(58)-c9384f350dfd11adec8694dbfb73b52e.png"},4705:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/image(59)-e679a155889ccdf54fbff7695df20603.png"},2794:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/image(62)-0a2d55653744c60e1f441c3a4996d694.png"},8950:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/image(64)-08dc4f39e5c66db897d66b586c5581d0.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var t=s(7294);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);