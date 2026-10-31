import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as r}from"./index-Bhq7o7lD.js";import"./cn-Bk382tBs.js";import"./Separator-CbMvGRjN.js";import"./iframe-BafV5W3V.js";import"./preload-helper-PPVm8Dsz.js";import"./useRenderElement-Bqkd2A0z.js";const l={title:"Components/Separator",component:r,parameters:{layout:"centered"}},s={render:()=>e.jsxs("div",{className:"w-80",children:[e.jsx("p",{className:"text-sm",children:"Above the line"}),e.jsx(r,{}),e.jsx("p",{className:"text-sm",children:"Below the line"})]})},a={render:()=>e.jsxs("div",{className:"w-80",children:[e.jsx(r,{children:"Section"}),e.jsx(r,{dashed:!0,children:"Dashed"})]})},t={render:()=>e.jsxs("div",{className:"flex h-8 items-center gap-3",children:[e.jsx("span",{className:"text-sm",children:"Left"}),e.jsx(r,{orientation:"vertical"}),e.jsx("span",{className:"text-sm",children:"Right"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80">\r
      <p className="text-sm">Above the line</p>\r
      <Separator />\r
      <p className="text-sm">Below the line</p>\r
    </div>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80">\r
      <Separator>Section</Separator>\r
      <Separator dashed>Dashed</Separator>\r
    </div>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-8 items-center gap-3">\r
      <span className="text-sm">Left</span>\r
      <Separator orientation="vertical" />\r
      <span className="text-sm">Right</span>\r
    </div>
}`,...t.parameters?.docs?.source}}};const x=["Default","WithContent","Vertical"];export{s as Default,t as Vertical,a as WithContent,x as __namedExportsOrder,l as default};
