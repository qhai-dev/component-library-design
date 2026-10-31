import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as y}from"./index-ItTLVuoI.js";import{c as u}from"./index-lPyTqghZ.js";import{c as n}from"./cn-Bk382tBs.js";import{I as f}from"./inbox-QTZWpeHP.js";import"./iframe-BafV5W3V.js";import"./preload-helper-PPVm8Dsz.js";import"./useButton-CX1hIlw-.js";import"./floating-ui.utils.dom-qEQ5XCbi.js";import"./useRenderElement-Bqkd2A0z.js";import"./useIsoLayoutEffect-CCrGtNxN.js";import"./loader-circle-DepsV607.js";import"./createLucideIcon-B-kRpPYY.js";function i({className:r,...t}){return e.jsx("div",{"data-slot":"empty",className:n("gap-4 p-6 flex w-full min-w-0 flex-1 flex-col items-center justify-center text-center text-balance",r),...t})}function a({className:r,...t}){return e.jsx("div",{"data-slot":"empty-header",className:n("gap-2 flex max-w-sm flex-col items-center",r),...t})}const x=u("mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",{variants:{variant:{default:"bg-transparent",icon:"flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-4"}},defaultVariants:{variant:"default"}});function d({className:r,variant:t="default",...l}){return e.jsx("div",{"data-slot":"empty-icon","data-variant":t,className:n(x({variant:t,className:r})),...l})}function m({className:r,...t}){return e.jsx("div",{"data-slot":"empty-title",className:n("text-sm font-semibold tracking-tight text-foreground",r),...t})}function p({className:r,...t}){return e.jsx("div",{"data-slot":"empty-description",className:n("text-sm/relaxed text-text-1 [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",r),...t})}function c({className:r,...t}){return e.jsx("div",{"data-slot":"empty-content",className:n("gap-2.5 text-sm flex w-full max-w-sm min-w-0 flex-col items-center text-balance",r),...t})}i.__docgenInfo={description:"",methods:[],displayName:"Empty"};a.__docgenInfo={description:"",methods:[],displayName:"EmptyHeader"};m.__docgenInfo={description:"",methods:[],displayName:"EmptyTitle"};p.__docgenInfo={description:"",methods:[],displayName:"EmptyDescription"};c.__docgenInfo={description:"",methods:[],displayName:"EmptyContent"};d.__docgenInfo={description:"",methods:[],displayName:"EmptyMedia",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};const T={title:"Components/Empty",component:i,parameters:{layout:"centered"}},s={render:()=>e.jsx(i,{children:e.jsxs(a,{children:[e.jsx(d,{variant:"icon",children:e.jsx(f,{"aria-hidden":!0})}),e.jsx(m,{children:"Nothing here yet"}),e.jsx(p,{children:"Files you upload will show up in this panel."})]})})},o={render:()=>e.jsxs(i,{children:[e.jsxs(a,{children:[e.jsx(m,{children:"Create your first project"}),e.jsx(p,{children:"Projects group your deployments and environments."})]}),e.jsx(c,{children:e.jsx(y,{children:"New project"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Empty>\r
      <EmptyHeader>\r
        <EmptyMedia variant="icon">\r
          <Inbox aria-hidden />\r
        </EmptyMedia>\r
        <EmptyTitle>Nothing here yet</EmptyTitle>\r
        <EmptyDescription>Files you upload will show up in this panel.</EmptyDescription>\r
      </EmptyHeader>\r
    </Empty>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Empty>\r
      <EmptyHeader>\r
        <EmptyTitle>Create your first project</EmptyTitle>\r
        <EmptyDescription>Projects group your deployments and environments.</EmptyDescription>\r
      </EmptyHeader>\r
      <EmptyContent>\r
        <Button>New project</Button>\r
      </EmptyContent>\r
    </Empty>
}`,...o.parameters?.docs?.source}}};const M=["Default","WithAction"];export{s as Default,o as WithAction,M as __namedExportsOrder,T as default};
