import{j as t}from"./jsx-runtime-u17CrQMm.js";import{B as p}from"./index-ItTLVuoI.js";import{T as n,b as s,a as m,c as l}from"./index-0WJPjv97.js";import"./index-lPyTqghZ.js";import"./cn-Bk382tBs.js";import"./iframe-BafV5W3V.js";import"./preload-helper-PPVm8Dsz.js";import"./useButton-CX1hIlw-.js";import"./floating-ui.utils.dom-qEQ5XCbi.js";import"./useRenderElement-Bqkd2A0z.js";import"./useIsoLayoutEffect-CCrGtNxN.js";import"./loader-circle-DepsV607.js";import"./createLucideIcon-B-kRpPYY.js";import"./ReactStore-CsGgfHeg.js";import"./index-CujQWX5i.js";import"./index-DBz2-nG8.js";import"./addEventListener-C7Nm7Zds.js";import"./useId--90vaHkX.js";import"./visuallyHidden-COI6QeQH.js";import"./composite-C72pyEoh.js";import"./shared-BwuzQDa5.js";import"./constants-CaC-AOuh.js";import"./engine-DgEYdLxV.js";import"./owner-CvMgaIeV.js";import"./shadowDom-DK1_zfR5.js";import"./createBaseUIEventDetails-BXqh6u2Y.js";import"./index-DzHXYjMk.js";import"./index-Bp2z_mUZ.js";import"./with-selector-DpgWNovl.js";import"./store-B9WvlemF.js";import"./popupStateMapping-If9KDthm.js";import"./useTimeout-Bvw9d4U2.js";import"./useOnMount-WNj2a00w.js";import"./useOpenChangeComplete-UNa5RW4E.js";import"./useAnimationFrame-DQ9kVddK.js";import"./getEmptyRootContext-_Db2sTxF.js";import"./popupStoreUtils-BVI92UKf.js";import"./useTransitionStatus-lkXoOm_V.js";import"./useValueAsRef-cBqHOkWs.js";import"./useBaseUiId-DAycI4nP.js";import"./useHoverFloatingInteraction-CwqlKo6c.js";import"./safePolygon-GlUXyqI4.js";import"./useFocus-oR2jB5qc.js";import"./FloatingPortalLite-DzyAhLxJ.js";import"./usePositioner-CkWdDwuy.js";import"./DirectionContext-Domt6lLV.js";const it={title:"Components/Tooltip",component:n,parameters:{layout:"centered"},decorators:[o=>t.jsx(l,{children:t.jsx("div",{className:"flex min-h-40 items-center justify-center",children:t.jsx(o,{})})})]},r={render:()=>t.jsxs(n,{children:[t.jsx(s,{children:t.jsx(p,{variant:"outline",children:"Hover me"})}),t.jsx(m,{children:"Tooltip content"})]})},i={render:()=>t.jsx("div",{className:"grid grid-cols-2 gap-x-24 gap-y-10",children:[["top","Top tooltip"],["bottom","Bottom tooltip"],["left","Left tooltip"],["right","Right tooltip"]].map(([o,a])=>t.jsxs(n,{children:[t.jsx(s,{children:t.jsx(p,{variant:"outline",children:o})}),t.jsx(m,{side:o,children:a})]},o))})},e={render:()=>t.jsxs(n,{children:[t.jsx(s,{children:t.jsx(p,{variant:"outline",children:"Long content"})}),t.jsx(m,{children:"This tooltip wraps after two hundred and forty pixels, matching the Semi Design default max width."})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip>\r
      <TooltipTrigger>\r
        <Button variant="outline">Hover me</Button>\r
      </TooltipTrigger>\r
      <TooltipContent>Tooltip content</TooltipContent>\r
    </Tooltip>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-x-24 gap-y-10">\r
      {([["top", "Top tooltip"], ["bottom", "Bottom tooltip"], ["left", "Left tooltip"], ["right", "Right tooltip"]] as const).map(([side, label]) => <Tooltip key={side}>\r
          <TooltipTrigger>\r
            <Button variant="outline">{side}</Button>\r
          </TooltipTrigger>\r
          <TooltipContent side={side}>{label}</TooltipContent>\r
        </Tooltip>)}\r
    </div>
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip>\r
      <TooltipTrigger>\r
        <Button variant="outline">Long content</Button>\r
      </TooltipTrigger>\r
      <TooltipContent>\r
        This tooltip wraps after two hundred and forty pixels, matching the Semi Design\r
        default max width.\r
      </TooltipContent>\r
    </Tooltip>
}`,...e.parameters?.docs?.source}}};const et=["Default","Sides","LongContent"];export{r as Default,e as LongContent,i as Sides,et as __namedExportsOrder,it as default};
