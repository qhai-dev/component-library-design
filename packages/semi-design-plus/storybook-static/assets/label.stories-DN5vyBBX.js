import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as d}from"./index-CUi2zJ7n.js";import{L as r}from"./index-C6LkLFrx.js";import"./index-lPyTqghZ.js";import"./cn-Bk382tBs.js";import"./iframe-BafV5W3V.js";import"./preload-helper-PPVm8Dsz.js";import"./useControlled-BkzPNp9n.js";import"./useIsoLayoutEffect-CCrGtNxN.js";import"./owner-CvMgaIeV.js";import"./floating-ui.utils.dom-qEQ5XCbi.js";import"./useRenderElement-Bqkd2A0z.js";import"./LabelableContext-80PgkTyF.js";import"./useLabelableId-BEp5zwEZ.js";import"./useBaseUiId-DAycI4nP.js";import"./useId--90vaHkX.js";import"./createBaseUIEventDetails-BXqh6u2Y.js";import"./shadowDom-DK1_zfR5.js";import"./circle-alert-BS9aWAO4.js";import"./createLucideIcon-B-kRpPYY.js";import"./triangle-alert-D5vM3an6.js";import"./x-Ce-32ZOG.js";const S={title:"Components/Label",component:r,parameters:{layout:"centered"}},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{htmlFor:"default",children:"Username"}),e.jsx(d,{id:"default",placeholder:"Please enter"})]})},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{htmlFor:"required",required:!0,children:"Email address"}),e.jsx(d,{id:"required",placeholder:"name@example.com"})]})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{htmlFor:"optional",optional:!0,children:"Nickname"}),e.jsx(d,{id:"optional",placeholder:"Optional field"})]})},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{htmlFor:"disabled",disabled:!0,children:"Company"}),e.jsx(d,{id:"disabled",placeholder:"Disabled field",disabled:!0})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">\r
      <Label htmlFor="default">Username</Label>\r
      <Input id="default" placeholder="Please enter" />\r
    </div>
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">\r
      <Label htmlFor="required" required>\r
        Email address\r
      </Label>\r
      <Input id="required" placeholder="name@example.com" />\r
    </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">\r
      <Label htmlFor="optional" optional>\r
        Nickname\r
      </Label>\r
      <Input id="optional" placeholder="Optional field" />\r
    </div>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">\r
      <Label htmlFor="disabled" disabled>\r
        Company\r
      </Label>\r
      <Input id="disabled" placeholder="Disabled field" disabled />\r
    </div>
}`,...s.parameters?.docs?.source}}};const y=["Default","Required","Optional","Disabled"];export{a as Default,s as Disabled,o as Optional,l as Required,y as __namedExportsOrder,S as default};
