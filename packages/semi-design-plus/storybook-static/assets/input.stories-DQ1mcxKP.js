import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as a}from"./index-CUi2zJ7n.js";import{S as c}from"./search-9x67utDC.js";import"./index-lPyTqghZ.js";import"./cn-Bk382tBs.js";import"./iframe-BafV5W3V.js";import"./preload-helper-PPVm8Dsz.js";import"./useControlled-BkzPNp9n.js";import"./useIsoLayoutEffect-CCrGtNxN.js";import"./owner-CvMgaIeV.js";import"./floating-ui.utils.dom-qEQ5XCbi.js";import"./useRenderElement-Bqkd2A0z.js";import"./LabelableContext-80PgkTyF.js";import"./useLabelableId-BEp5zwEZ.js";import"./useBaseUiId-DAycI4nP.js";import"./useId--90vaHkX.js";import"./createBaseUIEventDetails-BXqh6u2Y.js";import"./shadowDom-DK1_zfR5.js";import"./circle-alert-BS9aWAO4.js";import"./createLucideIcon-B-kRpPYY.js";import"./triangle-alert-D5vM3an6.js";import"./x-Ce-32ZOG.js";const{within:d,expect:u,userEvent:m}=__STORYBOOK_MODULE_TEST__,W={title:"Components/Input",component:a,parameters:{layout:"centered"},decorators:[r=>e.jsx("div",{className:"w-72",children:e.jsx(r,{})})]},l={args:{placeholder:"Please enter"}},s={render:()=>e.jsxs("div",{className:"flex w-72 flex-col gap-3",children:[e.jsx(a,{size:"sm",placeholder:"Small 24","aria-label":"Small 24"}),e.jsx(a,{placeholder:"Default 32","aria-label":"Default 32"}),e.jsx(a,{size:"lg",placeholder:"Large 40","aria-label":"Large 40"})]})},t={render:()=>e.jsxs("div",{className:"flex w-72 flex-col gap-3",children:[e.jsx(a,{placeholder:"Default","aria-label":"Default"}),e.jsx(a,{validateStatus:"error",placeholder:"Error","aria-label":"Error",defaultValue:"Invalid value"}),e.jsx(a,{validateStatus:"warning",placeholder:"Warning","aria-label":"Warning"}),e.jsx(a,{placeholder:"Disabled","aria-label":"Disabled",disabled:!0})]})},o={render:()=>e.jsxs("div",{className:"flex w-72 flex-col gap-3",children:[e.jsx(a,{prefix:e.jsx(c,{"aria-hidden":!0,className:"size-4"}),placeholder:"Search","aria-label":"Search"}),e.jsx(a,{prefix:"¥",suffix:"RMB",defaultValue:"1000","aria-label":"Amount in RMB"})]})},i={args:{clearable:!0,defaultValue:"Clear me","aria-label":"Clearable input"}},n={args:{type:"password",passwordToggle:!0,defaultValue:"secret","aria-label":"Password"}},p={args:{placeholder:"Type and blur","aria-label":"Type and blur"},play:async()=>{const r=d(document.body).getByPlaceholderText("Type and blur");await m.type(r,"semi design"),await u(r).toHaveValue("semi design")}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Please enter"
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-72 flex-col gap-3">\r
      <Input size="sm" placeholder="Small 24" aria-label="Small 24" />\r
      <Input placeholder="Default 32" aria-label="Default 32" />\r
      <Input size="lg" placeholder="Large 40" aria-label="Large 40" />\r
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-72 flex-col gap-3">\r
      <Input placeholder="Default" aria-label="Default" />\r
      <Input validateStatus="error" placeholder="Error" aria-label="Error" defaultValue="Invalid value" />\r
      <Input validateStatus="warning" placeholder="Warning" aria-label="Warning" />\r
      <Input placeholder="Disabled" aria-label="Disabled" disabled />\r
    </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-72 flex-col gap-3">\r
      <Input prefix={<Search aria-hidden className="size-4" />} placeholder="Search" aria-label="Search" />\r
      <Input prefix="¥" suffix="RMB" defaultValue="1000" aria-label="Amount in RMB" />\r
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    clearable: true,
    defaultValue: "Clear me",
    "aria-label": "Clearable input"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: "password",
    passwordToggle: true,
    defaultValue: "secret",
    "aria-label": "Password"
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Type and blur",
    "aria-label": "Type and blur"
  },
  play: async () => {
    const input = within(document.body).getByPlaceholderText("Type and blur");
    await userEvent.type(input, "semi design");
    await expect(input).toHaveValue("semi design");
  }
}`,...p.parameters?.docs?.source}}};const L=["Default","Sizes","States","WithPrefixSuffix","Clearable","Password","InteractiveTyping"];export{i as Clearable,l as Default,p as InteractiveTyping,n as Password,s as Sizes,t as States,o as WithPrefixSuffix,L as __namedExportsOrder,W as default};
