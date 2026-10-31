import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as o}from"./cn-Bk382tBs.js";function s({className:n,...c}){return e.jsx("div",{"data-slot":"skeleton",className:o("rounded-sm bg-muted animate-pulse",n),...c})}s.__docgenInfo={description:`Semi Design skeleton spec: fill-0 blocks with a 3px radius and a pulsing\r
opacity animation.`,methods:[],displayName:"Skeleton"};const i={title:"Components/Skeleton",component:s,parameters:{layout:"centered"}},a={render:()=>e.jsx(s,{className:"h-8 w-48"})},r={render:()=>e.jsxs("div",{className:"flex w-80 items-center gap-3",children:[e.jsx(s,{className:"size-10 shrink-0 rounded-full"}),e.jsxs("div",{className:"flex flex-1 flex-col gap-2",children:[e.jsx(s,{className:"h-3 w-32"}),e.jsx(s,{className:"h-3 w-48"})]})]})},l={render:()=>e.jsxs("div",{className:"w-96 space-y-3",children:[e.jsx(s,{className:"h-6 w-2/3"}),e.jsx(s,{className:"h-3 w-full"}),e.jsx(s,{className:"h-3 w-full"}),e.jsx(s,{className:"h-3 w-4/5"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Skeleton className="h-8 w-48" />
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 items-center gap-3">\r
      <Skeleton className="size-10 shrink-0 rounded-full" />\r
      <div className="flex flex-1 flex-col gap-2">\r
        <Skeleton className="h-3 w-32" />\r
        <Skeleton className="h-3 w-48" />\r
      </div>\r
    </div>
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-96 space-y-3">\r
      <Skeleton className="h-6 w-2/3" />\r
      <Skeleton className="h-3 w-full" />\r
      <Skeleton className="h-3 w-full" />\r
      <Skeleton className="h-3 w-4/5" />\r
    </div>
}`,...l.parameters?.docs?.source}}};const d=["Default","Profile","Article"];export{l as Article,a as Default,r as Profile,d as __namedExportsOrder,i as default};
