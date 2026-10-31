import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as a}from"./index-DaeCs2VL.js";import"./index-lPyTqghZ.js";import"./cn-Bk382tBs.js";const{within:d,expect:n,userEvent:c}=__STORYBOOK_MODULE_TEST__,x={title:"Components/Textarea",component:a,parameters:{layout:"centered"},decorators:[r=>e.jsx("div",{className:"w-80",children:e.jsx(r,{})})]},s={args:{placeholder:"Please enter"}},t={render:()=>e.jsxs("div",{className:"flex w-80 flex-col gap-3",children:[e.jsx(a,{size:"sm",placeholder:"Small 14px"}),e.jsx(a,{placeholder:"Default 14px"}),e.jsx(a,{size:"lg",placeholder:"Large 16px"})]})},l={render:()=>e.jsxs("div",{className:"flex w-80 flex-col gap-3",children:[e.jsx(a,{placeholder:"Default"}),e.jsx(a,{validateStatus:"error",placeholder:"Error",defaultValue:"Invalid value"}),e.jsx(a,{validateStatus:"warning",placeholder:"Warning"}),e.jsx(a,{placeholder:"Disabled",disabled:!0})]})},o={args:{placeholder:"Type and blur"},play:async()=>{const r=d(document.body).getByPlaceholderText("Type and blur");await c.type(r,"semi design"),await n(r).toHaveValue("semi design"),await c.tab(),await n(r).not.toHaveFocus()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Please enter"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-3">\r
      <Textarea size="sm" placeholder="Small 14px" />\r
      <Textarea placeholder="Default 14px" />\r
      <Textarea size="lg" placeholder="Large 16px" />\r
    </div>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-3">\r
      <Textarea placeholder="Default" />\r
      <Textarea validateStatus="error" placeholder="Error" defaultValue="Invalid value" />\r
      <Textarea validateStatus="warning" placeholder="Warning" />\r
      <Textarea placeholder="Disabled" disabled />\r
    </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Type and blur"
  },
  play: async () => {
    const el = within(document.body).getByPlaceholderText("Type and blur");
    await userEvent.type(el, "semi design");
    await expect(el).toHaveValue("semi design");
    await userEvent.tab();
    await expect(el).not.toHaveFocus();
  }
}`,...o.parameters?.docs?.source}}};const g=["Default","Sizes","States","InteractiveTyping"];export{s as Default,o as InteractiveTyping,t as Sizes,l as States,g as __namedExportsOrder,x as default};
