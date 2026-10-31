import{j as r}from"./jsx-runtime-u17CrQMm.js";import{I as e,b as n,a as t,c as h,d as c,e as I}from"./index-o1CTV5YM.js";import{c as x}from"./createLucideIcon-B-kRpPYY.js";import{S as G}from"./search-9x67utDC.js";import"./index-lPyTqghZ.js";import"./cn-Bk382tBs.js";import"./index-ItTLVuoI.js";import"./iframe-BafV5W3V.js";import"./preload-helper-PPVm8Dsz.js";import"./useButton-CX1hIlw-.js";import"./floating-ui.utils.dom-qEQ5XCbi.js";import"./useRenderElement-Bqkd2A0z.js";import"./useIsoLayoutEffect-CCrGtNxN.js";import"./loader-circle-DepsV607.js";import"./index-CUi2zJ7n.js";import"./useControlled-BkzPNp9n.js";import"./owner-CvMgaIeV.js";import"./LabelableContext-80PgkTyF.js";import"./useLabelableId-BEp5zwEZ.js";import"./useBaseUiId-DAycI4nP.js";import"./useId--90vaHkX.js";import"./createBaseUIEventDetails-BXqh6u2Y.js";import"./shadowDom-DK1_zfR5.js";import"./circle-alert-BS9aWAO4.js";import"./triangle-alert-D5vM3an6.js";import"./x-Ce-32ZOG.js";import"./index-DaeCs2VL.js";const g=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]],l=x("at-sign",g),{within:m,expect:j,userEvent:A}=__STORYBOOK_MODULE_TEST__,J={title:"Components/InputGroup",component:e,parameters:{layout:"centered"},decorators:[s=>r.jsx("div",{className:"w-80",children:r.jsx(s,{})})]},o={render:()=>r.jsxs(e,{children:[r.jsx(n,{align:"inline-start",children:r.jsx(l,{"aria-hidden":!0})}),r.jsx(t,{placeholder:"username"})]})},a={render:()=>r.jsxs("div",{className:"flex flex-col gap-3",children:[r.jsxs(e,{children:[r.jsx(n,{align:"inline-start",children:r.jsx(c,{children:"https://"})}),r.jsx(t,{placeholder:"example.com"}),r.jsx(n,{align:"inline-end",children:".com"})]}),r.jsxs(e,{children:[r.jsx(t,{placeholder:"Amount",type:"number"}),r.jsx(n,{align:"inline-end",children:r.jsx(c,{children:"RMB"})})]})]})},p={render:()=>r.jsxs(e,{children:[r.jsx(t,{placeholder:"Search docs"}),r.jsx(n,{align:"inline-end",children:r.jsx(h,{"aria-label":"Search",children:r.jsx(G,{"aria-hidden":!0})})})]})},i={render:()=>r.jsxs(e,{children:[r.jsx(I,{placeholder:"Leave a comment"}),r.jsx(n,{align:"block-end",children:r.jsx(c,{children:"Markdown supported"})})]})},u={render:()=>r.jsxs(e,{children:[r.jsx(n,{align:"inline-start",children:r.jsx(l,{"aria-hidden":!0})}),r.jsx(t,{placeholder:"Disabled",disabled:!0})]})},d={render:()=>r.jsxs(e,{children:[r.jsx(n,{align:"inline-start","aria-label":"Mention",children:r.jsx(l,{"aria-hidden":!0})}),r.jsx(t,{placeholder:"Click the addon"})]}),play:async()=>{const s=m(document.body).getByPlaceholderText("Click the addon");await A.click(m(document.body).getByRole("group",{name:"Mention"})),await j(s).toHaveFocus()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <InputGroup>\r
      <InputGroupAddon align="inline-start">\r
        <AtSign aria-hidden />\r
      </InputGroupAddon>\r
      <InputGroupInput placeholder="username" />\r
    </InputGroup>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
      <InputGroup>\r
        <InputGroupAddon align="inline-start">\r
          <InputGroupText>https://</InputGroupText>\r
        </InputGroupAddon>\r
        <InputGroupInput placeholder="example.com" />\r
        <InputGroupAddon align="inline-end">.com</InputGroupAddon>\r
      </InputGroup>\r
      <InputGroup>\r
        <InputGroupInput placeholder="Amount" type="number" />\r
        <InputGroupAddon align="inline-end">\r
          <InputGroupText>RMB</InputGroupText>\r
        </InputGroupAddon>\r
      </InputGroup>\r
    </div>
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <InputGroup>\r
      <InputGroupInput placeholder="Search docs" />\r
      <InputGroupAddon align="inline-end">\r
        <InputGroupButton aria-label="Search">\r
          <Search aria-hidden />\r
        </InputGroupButton>\r
      </InputGroupAddon>\r
    </InputGroup>
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <InputGroup>\r
      <InputGroupTextarea placeholder="Leave a comment" />\r
      <InputGroupAddon align="block-end">\r
        <InputGroupText>Markdown supported</InputGroupText>\r
      </InputGroupAddon>\r
    </InputGroup>
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <InputGroup>\r
      <InputGroupAddon align="inline-start">\r
        <AtSign aria-hidden />\r
      </InputGroupAddon>\r
      <InputGroupInput placeholder="Disabled" disabled />\r
    </InputGroup>
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <InputGroup>\r
      <InputGroupAddon align="inline-start" aria-label="Mention">\r
        <AtSign aria-hidden />\r
      </InputGroupAddon>\r
      <InputGroupInput placeholder="Click the addon" />\r
    </InputGroup>,
  play: async () => {
    const input = within(document.body).getByPlaceholderText("Click the addon");
    // clicking the addon focuses the group input
    await userEvent.click(within(document.body).getByRole("group", {
      name: "Mention"
    }));
    await expect(input).toHaveFocus();
  }
}`,...d.parameters?.docs?.source}}};const Q=["Default","WithText","WithButton","WithTextarea","Disabled","InteractiveFocus"];export{o as Default,u as Disabled,d as InteractiveFocus,p as WithButton,a as WithText,i as WithTextarea,Q as __namedExportsOrder,J as default};
