import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as d}from"./index-lPyTqghZ.js";import{c as o}from"./cn-Bk382tBs.js";import{I as p}from"./info-A2ApxKPF.js";import{C as u}from"./circle-check-DjY1izvo.js";import{T as x}from"./triangle-alert-D5vM3an6.js";import{C as m}from"./circle-alert-BS9aWAO4.js";import"./createLucideIcon-B-kRpPYY.js";import"./iframe-BafV5W3V.js";import"./preload-helper-PPVm8Dsz.js";const h=d("group/alert relative flex w-full flex-col gap-2 rounded-sm px-3 py-3 text-left text-sm *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4 has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-3",{variants:{variant:{default:"bg-info-light text-info",success:"bg-success-light text-success",warning:"bg-warning-light text-warning",destructive:"bg-destructive-light text-destructive"}},defaultVariants:{variant:"default"}});function t({className:r,variant:i,...c}){return e.jsx("div",{"data-slot":"alert",role:"alert",className:o(h({variant:i}),r),...c})}function n({className:r,...i}){return e.jsx("div",{"data-slot":"alert-title",className:o("font-semibold group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",r),...i})}function s({className:r,...i}){return e.jsx("div",{"data-slot":"alert-description",className:o("text-sm text-balance text-current [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",r),...i})}t.__docgenInfo={description:"",methods:[],displayName:"Alert"};n.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};s.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const D={title:"Components/Alert",component:t,parameters:{layout:"padded"},decorators:[r=>e.jsx("div",{className:"w-100",children:e.jsx(r,{})})]},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs(t,{children:[e.jsx(p,{"aria-hidden":!0}),e.jsx(n,{children:"Info banner"}),e.jsx(s,{children:"A new version is available."})]}),e.jsxs(t,{variant:"success",children:[e.jsx(u,{"aria-hidden":!0}),e.jsx(n,{children:"Success"}),e.jsx(s,{children:"Your changes have been saved."})]}),e.jsxs(t,{variant:"warning",children:[e.jsx(x,{"aria-hidden":!0}),e.jsx(n,{children:"Warning"}),e.jsx(s,{children:"Your trial expires in 3 days."})]}),e.jsxs(t,{variant:"destructive",children:[e.jsx(m,{"aria-hidden":!0}),e.jsx(n,{children:"Error"}),e.jsx(s,{children:"Failed to sync. Please retry."})]})]})},l={render:()=>e.jsx(t,{children:e.jsx(n,{children:"Minimal banner without description"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
      <Alert>\r
        <Info aria-hidden />\r
        <AlertTitle>Info banner</AlertTitle>\r
        <AlertDescription>A new version is available.</AlertDescription>\r
      </Alert>\r
      <Alert variant="success">\r
        <CircleCheck aria-hidden />\r
        <AlertTitle>Success</AlertTitle>\r
        <AlertDescription>Your changes have been saved.</AlertDescription>\r
      </Alert>\r
      <Alert variant="warning">\r
        <TriangleAlert aria-hidden />\r
        <AlertTitle>Warning</AlertTitle>\r
        <AlertDescription>Your trial expires in 3 days.</AlertDescription>\r
      </Alert>\r
      <Alert variant="destructive">\r
        <CircleAlert aria-hidden />\r
        <AlertTitle>Error</AlertTitle>\r
        <AlertDescription>Failed to sync. Please retry.</AlertDescription>\r
      </Alert>\r
    </div>
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Alert>\r
      <AlertTitle>Minimal banner without description</AlertTitle>\r
    </Alert>
}`,...l.parameters?.docs?.source}}};const C=["Types","TitleOnly"];export{l as TitleOnly,a as Types,C as __namedExportsOrder,D as default};
