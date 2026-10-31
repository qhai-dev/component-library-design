import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as a}from"./cn-Bk382tBs.js";function r({className:n,...d}){return e.jsx("kbd",{"data-slot":"kbd",className:a("inline-flex h-6 min-w-6 cursor-default select-none items-center justify-center gap-1 rounded-sm border border-border border-b-2 bg-muted px-1.5 font-mono text-xs leading-4 text-foreground",n),...d})}function c({className:n,...d}){return e.jsx("kbd",{"data-slot":"kbd-group",className:a("inline-flex items-center gap-1",n),...d})}r.__docgenInfo={description:`Keyboard key chip (no direct Semi counterpart, Semi border style):\r
- fill-0 background, 1px border in --semi-color-border\r
- 3px radius, 24px height / 24px min width, 1.5 horizontal padding\r
- 12px monospace text in text-0\r
- a 2px bottom border reads as the deeper bottom edge of a physical key`,methods:[],displayName:"Kbd"};c.__docgenInfo={description:"Renders a combination of keys (Ctrl + K) with a 4px gap.",methods:[],displayName:"KbdGroup"};const m={title:"Components/Kbd",component:r,parameters:{layout:"centered"}},t={render:()=>e.jsx(r,{children:"Esc"})},s={render:()=>e.jsxs(c,{children:[e.jsx(r,{children:"Ctrl"}),e.jsx(r,{children:"K"})]})},o={render:()=>e.jsxs("p",{className:"flex items-center gap-2 text-sm",children:["Press ",e.jsx(r,{children:"Shift"})," + ",e.jsx(r,{children:"Enter"})," to send, ",e.jsx(r,{children:"Ctrl"}),e.jsx(r,{children:"/"})," for shortcuts."]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Kbd>Esc</Kbd>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <KbdGroup>\r
      <Kbd>Ctrl</Kbd>\r
      <Kbd>K</Kbd>\r
    </KbdGroup>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <p className="flex items-center gap-2 text-sm">\r
      Press <Kbd>Shift</Kbd> + <Kbd>Enter</Kbd> to send, <Kbd>Ctrl</Kbd>\r
      <Kbd>/</Kbd> for shortcuts.\r
    </p>
}`,...o.parameters?.docs?.source}}};const l=["Default","Combination","InText"];export{s as Combination,t as Default,o as InText,l as __namedExportsOrder,m as default};
