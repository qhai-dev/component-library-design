import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as l}from"./index-lPyTqghZ.js";import{c as u}from"./cn-Bk382tBs.js";import{u as p}from"./useRender-DuyXb_dU.js";import{m as g}from"./useRenderElement-Bqkd2A0z.js";import"./iframe-BafV5W3V.js";import"./preload-helper-PPVm8Dsz.js";const m=l("group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-sm px-2 text-sm [&>svg]:pointer-events-none [&>svg:not([class*='size-'])]:size-3.5 focus-visible:outline-2 focus-visible:outline-primary-light-active",{variants:{variant:{default:"bg-primary text-primary-foreground",secondary:"bg-secondary text-secondary-foreground",destructive:"bg-destructive text-white",outline:"border border-border bg-transparent text-foreground",light:"bg-muted text-foreground"},shape:{square:"rounded-sm",circle:"rounded-full"}},defaultVariants:{variant:"default",shape:"square"}});function r({className:d,variant:t="default",shape:i="square",render:o,...c}){return p({defaultTagName:"span",props:g({className:u(m({variant:t,shape:i}),d)},c),render:o,state:{slot:"badge",variant:t,shape:i}})}const y={title:"Components/Badge",component:r,parameters:{layout:"centered"}},a={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(r,{children:"Primary"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"destructive",children:"Danger"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"light",children:"Light"})]})},s={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(r,{shape:"square",children:"Square"}),e.jsx(r,{shape:"circle",children:"Capsule"})]})},n={render:()=>e.jsxs(r,{children:[e.jsx("span",{"aria-hidden":!0,className:"size-1.5 rounded-full bg-white"}),"Running"]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3">\r
      <Badge>Primary</Badge>\r
      <Badge variant="secondary">Secondary</Badge>\r
      <Badge variant="destructive">Danger</Badge>\r
      <Badge variant="outline">Outline</Badge>\r
      <Badge variant="light">Light</Badge>\r
    </div>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3">\r
      <Badge shape="square">Square</Badge>\r
      <Badge shape="circle">Capsule</Badge>\r
    </div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Badge>\r
      <span aria-hidden className="size-1.5 rounded-full bg-white" />\r
      Running\r
    </Badge>
}`,...n.parameters?.docs?.source}}};const w=["Variants","Shapes","WithIcon"];export{s as Shapes,a as Variants,n as WithIcon,w as __namedExportsOrder,y as default};
