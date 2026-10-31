import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-BafV5W3V.js";import{D as c}from"./DirectionContext-Domt6lLV.js";import"./preload-helper-PPVm8Dsz.js";const s=function(t){const{direction:o="ltr"}=t,i=n.useMemo(()=>({direction:o}),[o]);return e.jsx(c.Provider,{value:i,children:t.children})},p={title:"Components/Direction"},r={render:()=>e.jsx(s,{direction:"ltr",children:e.jsx("div",{children:"dir"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <DirectionProvider direction="ltr">\r
      <div>dir</div>\r
    </DirectionProvider>
}`,...r.parameters?.docs?.source}}};const x=["Default"];export{r as Default,x as __namedExportsOrder,p as default};
