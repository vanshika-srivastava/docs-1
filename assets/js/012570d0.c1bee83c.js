"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[673],{8611:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var o=t(5893),i=t(1151);const r={description:"How to use System.Diagnostics.Metrics and dotnet-counters to measure and observe a Nethermind node"},s="Using dotnet-counters",c={id:"monitoring/metrics/dotnet-counters",title:"dotnet-counters",description:"How to use System.Diagnostics.Metrics and dotnet-counters to measure and observe a Nethermind node",source:"@site/docs/monitoring/metrics/dotnet-counters.md",sourceDirName:"monitoring/metrics",slug:"/monitoring/metrics/dotnet-counters",permalink:"/monitoring/metrics/dotnet-counters",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/monitoring/metrics/dotnet-counters.md",tags:[],version:"current",lastUpdatedAt:1699575981,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{description:"How to use System.Diagnostics.Metrics and dotnet-counters to measure and observe a Nethermind node"},sidebar:"tutorialSidebar",previous:{title:"Metrics",permalink:"/monitoring/metrics/"},next:{title:"setting-up-local-metrics-infrastracture",permalink:"/monitoring/metrics/setting-up-local-metrics-infrastracture"}},d={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Metrics names",id:"metrics-names",level:2},{value:"dotnet-counters",id:"dotnet-counters",level:2},{value:"Same machine",id:"same-machine",level:3},{value:"Docker image and docker compose",id:"docker-image-and-docker-compose",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"This article requires a revision."})}),"\n",(0,o.jsx)(n.h1,{id:"using-dotnet-counters",children:"Using dotnet-counters"}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(n.p,{children:["Nethermind can be configured to publish its metrics using ",(0,o.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/core/diagnostics/metrics",children:"System.Diagnostics.Metrics"}),". This mechanism is a native tool embedded in .NET Platform. It allows for a low overhead monitoring and reporting. Once .NET Platform metrics are enabled, they can be monitored and collected using ",(0,o.jsx)(n.code,{children:"dotnet-counters"})," and other tools."]}),"\n",(0,o.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["Reporting metrics as ",(0,o.jsx)(n.em,{children:"System.Diagnostics.Metrics"})," is enabled by passing and additional argument ",(0,o.jsx)(n.code,{children:"--Metrics.CountersEnabled true"})," to the Docker containers,",(0,o.jsx)(n.code,{children:"Nethermind.Runner"})," or ",(0,o.jsx)(n.code,{children:"Nethermind.Launcher"})," e.g. ",(0,o.jsx)(n.code,{children:"./Nethermind.Runner --Metrics.CountersEnabled true"}),". "]}),"\n",(0,o.jsxs)(n.p,{children:["This flag can be configured separately from ",(0,o.jsx)(n.a,{href:"/monitoring/metrics/setting-up-local-metrics-infrastracture",title:"mention",children:"setting-up-local-metrics-infrastracture.md"}),"as this two reporting modes are treated separately."]}),"\n",(0,o.jsx)(n.h2,{id:"metrics-names",children:"Metrics names"}),"\n",(0,o.jsxs)(n.p,{children:["Metrics reported by a Nethermind node follow the module convention. Whenever there's a module ",(0,o.jsx)(n.code,{children:"X"}),", its metrics will be reported under meter ",(0,o.jsx)(n.code,{children:"Nethermind.X"})," For example, ",(0,o.jsx)(n.code,{children:"Evm"})," module will be repoted under ",(0,o.jsx)(n.code,{children:"Nethermind.Evm"})," and so on."]}),"\n",(0,o.jsx)(n.h2,{id:"dotnet-counters",children:"dotnet-counters"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"dotnet-counters"})," is a tool provided by the .NET team to monitor and collect metrics for further analysis. The usage of it is different when used on the same machine or in the Dockerized environment. To learn more about the tool, please visit the official documentation page of ",(0,o.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/core/diagnostics/metrics-collection",children:"metrics collection with dotnet-counters"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"same-machine",children:"Same machine"}),"\n",(0,o.jsxs)(n.p,{children:["When a node is running on the same machine, ",(0,o.jsx)(n.code,{children:"dotnet-counters"})," , given that the .NET runtime is already installed, can be installed with the following "]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"dotnet tool install -g dotnet-counters\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This will install the tool globally and will allow the user to monitor and to collect metrics from any .NET process that is run on the same machine. For further information how to monitor and collect, please refer to ",(0,o.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/core/diagnostics/dotnet-counters",children:"the original documentation of this command"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"docker-image-and-docker-compose",children:"Docker image and docker compose"}),"\n",(0,o.jsxs)(n.p,{children:["When running in a Dockerized environment, the most common way is to create a separate docker image for .NET diagnostics. This can be done with the following ",(0,o.jsx)(n.code,{children:"Dockerfile"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'FROM mcr.microsoft.com/dotnet/sdk:7.0 AS base\n\nRUN dotnet tool install -g dotnet-counters; \\\n    dotnet tool install -g dotnet-trace; \\\n    echo \'export PATH="$PATH:/root/.dotnet/tools"\' >> /root/.bashrc\n\nENTRYPOINT ["/bin/bash"]\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Once it's built, as ",(0,o.jsx)(n.code,{children:"dotdiag"})," image, it will enable running ",(0,o.jsx)(n.code,{children:"dotnet-counters"})," from within."]}),"\n",(0,o.jsxs)(n.p,{children:["The second part is connecting the dockerized node with the ",(0,o.jsx)(n.code,{children:"dotdiag"}),". Whether using ",(0,o.jsx)(n.code,{children:"docker copose"})," or images run manually, it's important to remember that ",(0,o.jsx)(n.code,{children:"dotnet-counters"})," communicate over a named pipe (Windows) or an IPC socked (Linux, macOS). To make it work, volume mapping should be provided so that the two images share the directory used for the communication. Similarly ",(0,o.jsx)(n.code,{children:"pid namespace"})," needs to be shared between them. "]}),"\n",(0,o.jsxs)(n.p,{children:["Let's visit an extract of a ",(0,o.jsx)(n.code,{children:"docker-compose.yaml"})," that would provide such configuration."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'version: "3.9"\n\nservices:\n\n  execution:\n    stop_grace_period: 30s\n    container_name: execution-client\n    restart: unless-stopped\n    image: IMAGE_VERSION_GOES_HERE\n    networks:\n      - sedge\n    volumes:\n      - ./dotnet-tmp:/tmp # /tmp is used to create the IPC socket, expose it as ./dotnet-tmp\n    ports:\n      # ports omitted as they are not changed\n    command:\n      # make counters enabled so that reporting happens by setting the flag\n      - --Metrics.CountersEnabled=true \n    logging:\n      driver: "json-file"\n      options:\n        max-size: "10m"\n        max-file: "10"\n\n  # the created dotdiag \n  dotdiag:\n    container_name: dotdiag\n    image: dotdiag\n    stdin_open: true # docker run -i, so that it runs\n    tty: true        # docker run -t, so that it runs\n    volumes:\n      - ./dotnet-tmp:/tmp # map to the same directory, to make IPC socket connection\n    pid: "service:execution" # make pid namespaces are shared - processes are visible\n    depends_on:\n      - execution # make the dependency explicit\n\n'})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var o=t(7294);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);