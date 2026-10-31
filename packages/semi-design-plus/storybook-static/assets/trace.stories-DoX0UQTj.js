import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as x}from"./iframe-BafV5W3V.js";import{c as t}from"./cn-Bk382tBs.js";import{C as g,a as f,b as j}from"./index-D0esfhzt.js";import{C as b}from"./chevron-right-DtWyRr_z.js";import{C}from"./circle-check-DjY1izvo.js";import{L as v}from"./loader-circle-DepsV607.js";import{T as w}from"./triangle-alert-D5vM3an6.js";import"./preload-helper-PPVm8Dsz.js";import"./floating-ui.utils.dom-qEQ5XCbi.js";import"./useRenderElement-Bqkd2A0z.js";import"./useCollapsiblePanel-C36VGnRE.js";import"./useControlled-BkzPNp9n.js";import"./useBaseUiId-DAycI4nP.js";import"./useId--90vaHkX.js";import"./createBaseUIEventDetails-BXqh6u2Y.js";import"./useTransitionStatus-lkXoOm_V.js";import"./useIsoLayoutEffect-CCrGtNxN.js";import"./useAnimationFrame-DQ9kVddK.js";import"./useOnMount-WNj2a00w.js";import"./addEventListener-C7Nm7Zds.js";import"./useValueAsRef-cBqHOkWs.js";import"./useOpenChangeComplete-UNa5RW4E.js";import"./index-CujQWX5i.js";import"./index-DBz2-nG8.js";import"./useButton-CX1hIlw-.js";import"./createLucideIcon-B-kRpPYY.js";function c({className:r,...a}){return e.jsx("div",{"data-slot":"trace",className:t("gap-2 *:has-[>[data-slot=trace-line]]:rounded-md *:has-[>[data-slot=trace-line]]:focus-visible:outline-2 *:has-[>[data-slot=trace-line]]:focus-visible:outline-ring flex w-full min-w-0 flex-col *:has-[>[data-slot=trace-line]]:flex *:has-[>[data-slot=trace-line]]:w-fit *:has-[>[data-slot=trace-line]]:max-w-full *:has-[>[data-slot=trace-line]]:min-w-0 *:has-[>[data-slot=trace-line]]:text-left *:has-[>[data-slot=trace-line]]:outline-none",r),...a})}function n({className:r,status:a,...i}){return e.jsx("span",{"data-slot":"trace-line","data-status":a,className:t("gap-2 text-sm flex w-fit max-w-full min-w-0 items-center text-muted-foreground in-[a,button]:cursor-pointer in-[a:hover,button:hover]:text-foreground data-[status=error]:text-destructive data-[status=error]:in-[a:hover,button:hover]:text-destructive data-[status=pending]:opacity-60 data-[status=running]:*:data-[slot=trace-title]:shimmer",r),...i})}function o({className:r,...a}){return e.jsx("span",{"data-slot":"trace-icon","aria-hidden":"true",className:t("size-4 [&_svg:not([class*='size-'])]:size-4 [[data-slot=trace-title]~&]:-ml-1 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none",r),...a})}function s({className:r,...a}){return e.jsx("span",{"data-slot":"trace-title",className:t("min-w-0 truncate motion-reduce:shimmer-none",r),...a})}function m({className:r,...a}){return e.jsx("span",{"data-slot":"trace-description",className:t("shrink-0 text-text-3 tabular-nums",r),...a})}function u({className:r,...a}){return e.jsx(g,{"data-slot":"trace-collapsible",className:t("flex w-full min-w-0 flex-col",r),...a})}function h({className:r,children:a,...i}){return e.jsxs(f,{"data-slot":"trace-collapsible-trigger",className:t("gap-1 rounded-md transition-colors duration-100 focus-visible:outline-2 focus-visible:outline-ring group/trace-collapsible-trigger flex w-fit max-w-full min-w-0 cursor-pointer items-center text-left text-muted-foreground outline-none hover:text-foreground has-[[data-status=error]]:text-destructive",r),...i,children:[a,e.jsx(o,{className:"transition-transform group-aria-expanded/trace-collapsible-trigger:rotate-90",children:e.jsx(b,{"aria-hidden":"true"})})]})}function T({className:r,children:a,...i}){return e.jsx(j,{"data-slot":"trace-collapsible-content",className:"duration-200 h-(--collapsible-panel-height) min-w-0 overflow-hidden transition-[height] data-ending-style:h-0 data-starting-style:h-0",...i,children:e.jsx("div",{"data-slot":"trace-collapsible-content-inner",className:t("mt-2 mb-1 ml-[calc(--spacing(2)-1px)] border-l pr-1 pl-4 leading-relaxed min-w-0 wrap-break-word text-muted-foreground",r),children:a})})}c.__docgenInfo={description:"",methods:[],displayName:"Trace"};n.__docgenInfo={description:"",methods:[],displayName:"TraceLine",props:{status:{required:!1,tsType:{name:"union",raw:'"running" | "error" | "pending"',elements:[{name:"literal",value:'"running"'},{name:"literal",value:'"error"'},{name:"literal",value:'"pending"'}]},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"TraceIcon"};s.__docgenInfo={description:"",methods:[],displayName:"TraceTitle"};m.__docgenInfo={description:"",methods:[],displayName:"TraceDescription"};u.__docgenInfo={description:"",methods:[],displayName:"TraceCollapsible"};h.__docgenInfo={description:"",methods:[],displayName:"TraceCollapsibleTrigger"};T.__docgenInfo={description:"",methods:[],displayName:"TraceCollapsibleContent"};const X={title:"Components/Trace",component:c,parameters:{layout:"padded"}},l={render:()=>e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(s,{children:"Step one"}),e.jsx(m,{children:"Something happened"})]})})},d={render:()=>e.jsxs(c,{children:[e.jsxs(n,{children:[e.jsx(o,{children:e.jsx(C,{"aria-hidden":!0,className:"text-success"})}),e.jsx(s,{children:"Indexed documents"}),e.jsx(m,{children:"1.2s"})]}),e.jsxs(n,{status:"running",children:[e.jsx(o,{children:e.jsx(v,{"aria-hidden":!0,className:"animate-spin"})}),e.jsx(s,{children:"Generating answer"})]}),e.jsx(n,{status:"pending",children:e.jsx(s,{children:"Waiting for tool call"})}),e.jsxs(n,{status:"error",children:[e.jsx(o,{children:e.jsx(w,{"aria-hidden":!0})}),e.jsx(s,{children:"Search failed"}),e.jsx(m,{children:"timeout"})]})]})},p={render:()=>{const[r,a]=x.useState(!1);return e.jsx(c,{children:e.jsxs(u,{open:r,onOpenChange:a,children:[e.jsx(h,{children:"Retrieved 4 chunks"}),e.jsxs(T,{children:["chunk-01 · score 0.92",e.jsx("br",{}),"chunk-02 · score 0.87"]})]})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Trace>\r
      <TraceLine>\r
        <TraceTitle>Step one</TraceTitle>\r
        <TraceDescription>Something happened</TraceDescription>\r
      </TraceLine>\r
    </Trace>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Trace>\r
      <TraceLine>\r
        <TraceIcon>\r
          <CircleCheck aria-hidden className="text-success" />\r
        </TraceIcon>\r
        <TraceTitle>Indexed documents</TraceTitle>\r
        <TraceDescription>1.2s</TraceDescription>\r
      </TraceLine>\r
      <TraceLine status="running">\r
        <TraceIcon>\r
          <LoaderCircle aria-hidden className="animate-spin" />\r
        </TraceIcon>\r
        <TraceTitle>Generating answer</TraceTitle>\r
      </TraceLine>\r
      <TraceLine status="pending">\r
        <TraceTitle>Waiting for tool call</TraceTitle>\r
      </TraceLine>\r
      <TraceLine status="error">\r
        <TraceIcon>\r
          <TriangleAlert aria-hidden />\r
        </TraceIcon>\r
        <TraceTitle>Search failed</TraceTitle>\r
        <TraceDescription>timeout</TraceDescription>\r
      </TraceLine>\r
    </Trace>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <Trace>\r
        <TraceCollapsible open={open} onOpenChange={setOpen}>\r
          <TraceCollapsibleTrigger>Retrieved 4 chunks</TraceCollapsibleTrigger>\r
          <TraceCollapsibleContent>\r
            chunk-01 · score 0.92\r
            <br />\r
            chunk-02 · score 0.87\r
          </TraceCollapsibleContent>\r
        </TraceCollapsible>\r
      </Trace>;
  }
}`,...p.parameters?.docs?.source}}};const Y=["Default","Statuses","Collapsible"];export{p as Collapsible,l as Default,d as Statuses,Y as __namedExportsOrder,X as default};
