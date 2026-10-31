import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as r}from"./index-ItTLVuoI.js";import{c as p}from"./createLucideIcon-B-kRpPYY.js";import"./index-lPyTqghZ.js";import"./cn-Bk382tBs.js";import"./iframe-BafV5W3V.js";import"./preload-helper-PPVm8Dsz.js";import"./useButton-CX1hIlw-.js";import"./floating-ui.utils.dom-qEQ5XCbi.js";import"./useRenderElement-Bqkd2A0z.js";import"./useIsoLayoutEffect-CCrGtNxN.js";import"./loader-circle-DepsV607.js";const v=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],d=p("plus",v),{within:h,expect:u,fn:g,userEvent:x,waitFor:B}=__STORYBOOK_MODULE_TEST__,I={title:"Components/Button",component:r,parameters:{layout:"centered"}},n={args:{children:"Click me"}},t={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(r,{children:"Primary"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"ghost",children:"Ghost"}),e.jsx(r,{variant:"destructive",children:"Danger"}),e.jsx(r,{variant:"link",children:"Link"})]})},a={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(r,{size:"sm",children:"Small 24"}),e.jsx(r,{children:"Default 32"}),e.jsx(r,{size:"lg",children:"Large 40"}),e.jsx(r,{size:"icon","aria-label":"Add",children:e.jsx(d,{})})]})},s={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(r,{disabled:!0,children:"Primary"}),e.jsx(r,{variant:"outline",disabled:!0,children:"Outline"}),e.jsx(r,{variant:"secondary",disabled:!0,children:"Secondary"})]})},i={args:{loading:!0,children:"Saving…"}},o={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs(r,{children:[e.jsx(d,{"aria-hidden":!0})," New"]}),e.jsxs(r,{variant:"outline",children:[e.jsx(d,{"aria-hidden":!0})," Add"]})]})},c={args:{children:"Interactive",onClick:g()},play:async({args:m})=>{const l=h(document.body).getByRole("button",{name:"Interactive"});await x.click(l),await u(m.onClick).toHaveBeenCalledOnce(),await B(()=>u(l).toHaveFocus())}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click me"
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3">\r
      <Button>Primary</Button>\r
      <Button variant="secondary">Secondary</Button>\r
      <Button variant="outline">Outline</Button>\r
      <Button variant="ghost">Ghost</Button>\r
      <Button variant="destructive">Danger</Button>\r
      <Button variant="link">Link</Button>\r
    </div>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">\r
      <Button size="sm">Small 24</Button>\r
      <Button>Default 32</Button>\r
      <Button size="lg">Large 40</Button>\r
      <Button size="icon" aria-label="Add">\r
        <Plus />\r
      </Button>\r
    </div>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">\r
      <Button disabled>Primary</Button>\r
      <Button variant="outline" disabled>\r
        Outline\r
      </Button>\r
      <Button variant="secondary" disabled>\r
        Secondary\r
      </Button>\r
    </div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: "Saving…"
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">\r
      <Button>\r
        <Plus aria-hidden /> New\r
      </Button>\r
      <Button variant="outline">\r
        <Plus aria-hidden /> Add\r
      </Button>\r
    </div>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Interactive",
    onClick: fn()
  },
  play: async ({
    args
  }) => {
    const btn = within(document.body).getByRole("button", {
      name: "Interactive"
    });
    await userEvent.click(btn);
    await expect(args.onClick).toHaveBeenCalledOnce();
    await waitFor(() => expect(btn).toHaveFocus());
  }
}`,...c.parameters?.docs?.source}}};const z=["Default","Variants","Sizes","Disabled","Loading","WithIcon","InteractiveClick"];export{n as Default,s as Disabled,c as InteractiveClick,i as Loading,a as Sizes,t as Variants,o as WithIcon,z as __namedExportsOrder,I as default};
