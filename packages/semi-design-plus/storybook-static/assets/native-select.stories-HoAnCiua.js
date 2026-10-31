import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as v}from"./index-lPyTqghZ.js";import{c as p}from"./cn-Bk382tBs.js";import{C as m}from"./chevron-down-BW1NkAoo.js";import"./createLucideIcon-B-kRpPYY.js";import"./iframe-BafV5W3V.js";import"./preload-helper-PPVm8Dsz.js";const N=v("h-8 w-full min-w-0 cursor-pointer appearance-none rounded-sm border border-transparent bg-muted px-3 pr-8 text-sm leading-5 text-foreground select-none outline-none transition-colors duration-100 hover:bg-muted-hover active:bg-muted-active focus:border-focus-border focus:bg-muted disabled:cursor-not-allowed disabled:bg-disabled-fill disabled:text-disabled-foreground aria-invalid:border-destructive aria-invalid:bg-destructive-light",{variants:{size:{default:"",sm:"h-6"}},defaultVariants:{size:"default"}});function l({className:t,size:r="default",...u}){return e.jsxs("div",{className:p("group/native-select relative w-fit",t),"data-slot":"native-select-wrapper","data-size":r,children:[e.jsx("select",{"data-slot":"native-select","data-size":r,className:p(N({size:r})),...u}),e.jsx(m,{"aria-hidden":!0,"data-slot":"native-select-icon",className:"pointer-events-none absolute top-1/2 right-2.5 size-3 -translate-y-1/2 text-text-2 select-none"})]})}function a({className:t,...r}){return e.jsx("option",{"data-slot":"native-select-option",className:p("bg-[Canvas] text-[CanvasText]",t),...r})}function d({className:t,...r}){return e.jsx("optgroup",{"data-slot":"native-select-optgroup",className:p("bg-[Canvas] text-[CanvasText]",t),...r})}l.__docgenInfo={description:"",methods:[],displayName:"NativeSelect",props:{size:{defaultValue:{value:'"default"',computed:!1},required:!1}},composes:["Omit","VariantProps"]};d.__docgenInfo={description:"",methods:[],displayName:"NativeSelectOptGroup"};a.__docgenInfo={description:"",methods:[],displayName:"NativeSelectOption"};const{within:S,expect:b,fn:f,userEvent:x}=__STORYBOOK_MODULE_TEST__,C={title:"Components/NativeSelect",component:l},n={render:()=>e.jsxs(l,{"aria-label":"fruit",className:"w-56",children:[e.jsx(a,{value:"",children:"Pick a fruit"}),e.jsx(a,{value:"apple",children:"Apple"}),e.jsx(a,{value:"banana",children:"Banana"}),e.jsx(a,{value:"cherry",children:"Cherry"})]})},i={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs(l,{size:"sm","aria-label":"small",className:"w-44",children:[e.jsx(a,{value:"",children:"Small 24"}),e.jsx(a,{value:"apple",children:"Apple"})]}),e.jsxs(l,{"aria-label":"default",className:"w-44",children:[e.jsx(a,{value:"",children:"Default 32"}),e.jsx(a,{value:"apple",children:"Apple"})]})]})},s={render:()=>e.jsxs(l,{disabled:!0,"aria-label":"fruit",className:"w-56",children:[e.jsx(a,{value:"",children:"Pick a fruit"}),e.jsx(a,{value:"apple",children:"Apple"})]})},c={render:()=>e.jsxs(l,{"aria-label":"food",className:"w-56",children:[e.jsxs(d,{label:"Fruits",children:[e.jsx(a,{value:"apple",children:"Apple"}),e.jsx(a,{value:"banana",children:"Banana"})]}),e.jsx(d,{label:"Vegetables",children:e.jsx(a,{value:"carrot",children:"Carrot"})})]})},o={render:()=>e.jsxs(l,{"aria-label":"fruit",className:"w-56",onChange:f(),children:[e.jsx(a,{value:"",children:"Pick a fruit"}),e.jsx(a,{value:"apple",children:"Apple"}),e.jsx(a,{value:"banana",children:"Banana"})]}),play:async()=>{const t=S(document.body).getByRole("combobox",{name:"fruit"});await x.selectOptions(t,"banana"),await b(t).toHaveValue("banana")}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <NativeSelect aria-label="fruit" className="w-56">\r
      <NativeSelectOption value="">Pick a fruit</NativeSelectOption>\r
      <NativeSelectOption value="apple">Apple</NativeSelectOption>\r
      <NativeSelectOption value="banana">Banana</NativeSelectOption>\r
      <NativeSelectOption value="cherry">Cherry</NativeSelectOption>\r
    </NativeSelect>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">\r
      <NativeSelect size="sm" aria-label="small" className="w-44">\r
        <NativeSelectOption value="">Small 24</NativeSelectOption>\r
        <NativeSelectOption value="apple">Apple</NativeSelectOption>\r
      </NativeSelect>\r
      <NativeSelect aria-label="default" className="w-44">\r
        <NativeSelectOption value="">Default 32</NativeSelectOption>\r
        <NativeSelectOption value="apple">Apple</NativeSelectOption>\r
      </NativeSelect>\r
    </div>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <NativeSelect disabled aria-label="fruit" className="w-56">\r
      <NativeSelectOption value="">Pick a fruit</NativeSelectOption>\r
      <NativeSelectOption value="apple">Apple</NativeSelectOption>\r
    </NativeSelect>
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <NativeSelect aria-label="food" className="w-56">\r
      <NativeSelectOptGroup label="Fruits">\r
        <NativeSelectOption value="apple">Apple</NativeSelectOption>\r
        <NativeSelectOption value="banana">Banana</NativeSelectOption>\r
      </NativeSelectOptGroup>\r
      <NativeSelectOptGroup label="Vegetables">\r
        <NativeSelectOption value="carrot">Carrot</NativeSelectOption>\r
      </NativeSelectOptGroup>\r
    </NativeSelect>
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <NativeSelect aria-label="fruit" className="w-56" onChange={fn()}>\r
      <NativeSelectOption value="">Pick a fruit</NativeSelectOption>\r
      <NativeSelectOption value="apple">Apple</NativeSelectOption>\r
      <NativeSelectOption value="banana">Banana</NativeSelectOption>\r
    </NativeSelect>,
  play: async () => {
    const select = within(document.body).getByRole("combobox", {
      name: "fruit"
    });
    await userEvent.selectOptions(select, "banana");
    await expect(select).toHaveValue("banana");
  }
}`,...o.parameters?.docs?.source}}};const A=["Default","Sizes","Disabled","WithGroups","InteractiveSelect"];export{n as Default,s as Disabled,o as InteractiveSelect,i as Sizes,c as WithGroups,A as __namedExportsOrder,C as default};
