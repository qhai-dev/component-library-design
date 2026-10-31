import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c}from"./cn-Bk382tBs.js";function s({ratio:t,className:i,...n}){return e.jsx("div",{"data-slot":"aspect-ratio",style:{"--ratio":t},className:c("relative aspect-(--ratio)",i),...n})}s.__docgenInfo={description:"Responsive ratio container (no Semi counterpart; kept neutral).\r\nThe ratio is passed as a CSS variable so `aspect-(--ratio)` applies it,\r\nand consumer className can override everything.",methods:[],displayName:"AspectRatio",props:{ratio:{required:!0,tsType:{name:"number"},description:""}}};const l={title:"Components/AspectRatio",component:s,parameters:{layout:"padded"},decorators:[t=>e.jsx("div",{className:"w-100",children:e.jsx(t,{})})]},r={args:{ratio:16/9},render:t=>e.jsx(s,{...t,className:"rounded-xl border border-border bg-card",children:e.jsx("div",{className:"flex h-full items-center justify-center text-sm text-text-2",children:"16:9"})})},a={args:{ratio:16/9},render:t=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(s,{ratio:1,className:"w-24 rounded-sm bg-muted",children:e.jsx("div",{className:"flex h-full items-center justify-center text-sm text-text-2",children:"1:1"})}),e.jsx(s,{ratio:4/3,className:"w-24 rounded-sm bg-muted",children:e.jsx("div",{className:"flex h-full items-center justify-center text-sm text-text-2",children:"4:3"})}),e.jsx(s,{...t,className:"w-24 rounded-sm bg-muted",children:e.jsx("div",{className:"flex h-full items-center justify-center text-sm text-text-2",children:"16:9"})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ratio: 16 / 9
  },
  render: args => <AspectRatio {...args} className="rounded-xl border border-border bg-card">\r
      <div className="flex h-full items-center justify-center text-sm text-text-2">16:9</div>\r
    </AspectRatio>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ratio: 16 / 9
  },
  render: args => <div className="flex gap-4">\r
      <AspectRatio ratio={1} className="w-24 rounded-sm bg-muted">\r
        <div className="flex h-full items-center justify-center text-sm text-text-2">1:1</div>\r
      </AspectRatio>\r
      <AspectRatio ratio={4 / 3} className="w-24 rounded-sm bg-muted">\r
        <div className="flex h-full items-center justify-center text-sm text-text-2">4:3</div>\r
      </AspectRatio>\r
      <AspectRatio {...args} className="w-24 rounded-sm bg-muted">\r
        <div className="flex h-full items-center justify-center text-sm text-text-2">16:9</div>\r
      </AspectRatio>\r
    </div>
}`,...a.parameters?.docs?.source}}};const m=["Default","Ratios"];export{r as Default,a as Ratios,m as __namedExportsOrder,l as default};
