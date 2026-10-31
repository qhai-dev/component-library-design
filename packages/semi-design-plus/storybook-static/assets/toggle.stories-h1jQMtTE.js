import{j as e}from"./jsx-runtime-u17CrQMm.js";import{b as a,B as g,I as u,U as b}from"./index-DJP6M9od.js";import{c as h}from"./createLucideIcon-B-kRpPYY.js";import"./index-lPyTqghZ.js";import"./cn-Bk382tBs.js";import"./iframe-BafV5W3V.js";import"./preload-helper-PPVm8Dsz.js";import"./useControlled-BkzPNp9n.js";import"./useBaseUiId-DAycI4nP.js";import"./useId--90vaHkX.js";import"./floating-ui.utils.dom-qEQ5XCbi.js";import"./useRenderElement-Bqkd2A0z.js";import"./useButton-CX1hIlw-.js";import"./useIsoLayoutEffect-CCrGtNxN.js";import"./CompositeItem-zuiK1hRL.js";import"./useCompositeItem-Dl7D7PlP.js";import"./useCompositeListItem-CW3shZpF.js";import"./createBaseUIEventDetails-BXqh6u2Y.js";const x=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],d=h("pin",x),{within:v,expect:c,fn:f,userEvent:m}=__STORYBOOK_MODULE_TEST__,L={title:"Components/Toggle",component:a,parameters:{layout:"centered"}},s={args:{children:"Toggle"}},n={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs(a,{"aria-label":"bold",children:[e.jsx(g,{"aria-hidden":!0})," Borderless"]}),e.jsxs(a,{variant:"outline","aria-label":"underline",children:[e.jsx(b,{"aria-hidden":!0})," Outline"]})]})},i={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{defaultPressed:!0,"aria-label":"bold",children:e.jsx(g,{"aria-hidden":!0})}),e.jsx(a,{defaultPressed:!0,variant:"outline","aria-label":"italic",children:e.jsx(u,{"aria-hidden":!0})})]})},t={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs(a,{size:"sm","aria-label":"small",children:[e.jsx(d,{"aria-hidden":!0})," Small 24"]}),e.jsxs(a,{"aria-label":"default",children:[e.jsx(d,{"aria-hidden":!0})," Default 32"]}),e.jsxs(a,{size:"lg","aria-label":"large",children:[e.jsx(d,{"aria-hidden":!0})," Large 40"]})]})},l={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{disabled:!0,children:"Bold"}),e.jsx(a,{variant:"outline",disabled:!0,children:"Outline"})]})},o={args:{"aria-label":"pin",onPressedChange:f()},play:async({args:p})=>{const r=v(document.body).getByRole("button",{name:"pin"});await m.click(r),await c(r).toHaveAttribute("aria-pressed","true"),await c(p.onPressedChange).toHaveBeenCalledOnce(),await m.click(r),await c(r).toHaveAttribute("aria-pressed","false")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Toggle"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">\r
      <Toggle aria-label="bold">\r
        <Bold aria-hidden /> Borderless\r
      </Toggle>\r
      <Toggle variant="outline" aria-label="underline">\r
        <Underline aria-hidden /> Outline\r
      </Toggle>\r
    </div>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">\r
      <Toggle defaultPressed aria-label="bold">\r
        <Bold aria-hidden />\r
      </Toggle>\r
      <Toggle defaultPressed variant="outline" aria-label="italic">\r
        <Italic aria-hidden />\r
      </Toggle>\r
    </div>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">\r
      <Toggle size="sm" aria-label="small">\r
        <Pin aria-hidden /> Small 24\r
      </Toggle>\r
      <Toggle aria-label="default">\r
        <Pin aria-hidden /> Default 32\r
      </Toggle>\r
      <Toggle size="lg" aria-label="large">\r
        <Pin aria-hidden /> Large 40\r
      </Toggle>\r
    </div>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">\r
      <Toggle disabled>Bold</Toggle>\r
      <Toggle variant="outline" disabled>\r
        Outline\r
      </Toggle>\r
    </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "pin",
    onPressedChange: fn()
  },
  play: async ({
    args
  }) => {
    const t = within(document.body).getByRole("button", {
      name: "pin"
    });
    await userEvent.click(t);
    await expect(t).toHaveAttribute("aria-pressed", "true");
    await expect(args.onPressedChange).toHaveBeenCalledOnce();
    await userEvent.click(t);
    await expect(t).toHaveAttribute("aria-pressed", "false");
  }
}`,...o.parameters?.docs?.source}}};const R=["Default","Variants","Pressed","Sizes","Disabled","InteractivePress"];export{s as Default,l as Disabled,o as InteractivePress,i as Pressed,t as Sizes,n as Variants,R as __namedExportsOrder,L as default};
