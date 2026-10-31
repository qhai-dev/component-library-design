import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as l}from"./index-lPyTqghZ.js";import{c as i}from"./cn-Bk382tBs.js";import{u as p}from"./useRender-DuyXb_dU.js";import{m as f}from"./useRenderElement-Bqkd2A0z.js";import{I as k}from"./info-A2ApxKPF.js";import"./iframe-BafV5W3V.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-B-kRpPYY.js";const u=l("min-h-4 gap-2 text-left text-xs text-muted-foreground [&_svg:not([class*='size-'])]:size-4 [a]:underline [a]:underline-offset-3 [a]:hover:text-foreground group/marker relative flex w-full items-center",{variants:{variant:{default:"",separator:"before:mr-1 before:h-px before:min-w-0 before:flex-1 before:bg-border after:ml-1 after:h-px after:min-w-0 after:flex-1 after:bg-border",border:"border-b border-border pb-2"}}});function a({className:t,variant:e="default",render:c,...m}){return p({defaultTagName:"div",props:f({className:i(u({variant:e,className:t}))},m),render:c,state:{slot:"marker",variant:e}})}function d({className:t,...e}){return r.jsx("span",{"data-slot":"marker-icon","aria-hidden":"true",className:i("size-4 [&_svg:not([class*='size-'])]:size-4 shrink-0",t),...e})}function n({className:t,...e}){return r.jsx("span",{"data-slot":"marker-content",className:i("group-data-[variant=separator]/marker:flex-none group-data-[variant=separator]/marker:text-center *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground min-w-0 wrap-break-word",t),...e})}d.__docgenInfo={description:"",methods:[],displayName:"MarkerIcon"};n.__docgenInfo={description:"",methods:[],displayName:"MarkerContent"};const w={title:"Components/Marker",component:a,parameters:{layout:"padded"}},o={render:()=>r.jsxs(a,{children:[r.jsx(d,{}),r.jsx(n,{children:"Divider"})]})},s={render:()=>r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsx(a,{children:r.jsx(n,{children:"Plain meta line"})}),r.jsxs(a,{children:[r.jsx(d,{children:r.jsx(k,{"aria-hidden":!0})}),r.jsx(n,{children:"With an icon"})]}),r.jsx(a,{variant:"separator",children:r.jsx(n,{children:"Between rules"})}),r.jsx(a,{variant:"border",children:r.jsx(n,{children:"Bottom bordered"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Marker>\r
      <MarkerIcon />\r
      <MarkerContent>Divider</MarkerContent>\r
    </Marker>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <Marker>\r
        <MarkerContent>Plain meta line</MarkerContent>\r
      </Marker>\r
      <Marker>\r
        <MarkerIcon>\r
          <Info aria-hidden />\r
        </MarkerIcon>\r
        <MarkerContent>With an icon</MarkerContent>\r
      </Marker>\r
      <Marker variant="separator">\r
        <MarkerContent>Between rules</MarkerContent>\r
      </Marker>\r
      <Marker variant="border">\r
        <MarkerContent>Bottom bordered</MarkerContent>\r
      </Marker>\r
    </div>
}`,...s.parameters?.docs?.source}}};const N=["Default","Variants"];export{o as Default,s as Variants,N as __namedExportsOrder,w as default};
