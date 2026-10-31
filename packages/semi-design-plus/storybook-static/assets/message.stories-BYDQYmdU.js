import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as g,b as p,T as x}from"./index-Dis0fA1A.js";import{c as n}from"./cn-Bk382tBs.js";import{C as f}from"./copy-nIxaXAWv.js";import"./createLucideIcon-B-kRpPYY.js";import"./iframe-BafV5W3V.js";import"./preload-helper-PPVm8Dsz.js";import"./index-lPyTqghZ.js";import"./useRender-DuyXb_dU.js";import"./useRenderElement-Bqkd2A0z.js";function c({className:s,...a}){return e.jsx("div",{"data-slot":"message-group",className:n("gap-2 flex min-w-0 flex-col",s),...a})}function t({className:s,align:a="start",...u}){return e.jsx("div",{"data-slot":"message","data-align":a,className:n("gap-2 text-sm group/message relative flex w-full min-w-0 data-[align=end]:flex-row-reverse",s),...u})}function l({className:s,...a}){return e.jsx("div",{"data-slot":"message-avatar",className:n("min-w-8 group-has-data-[slot=message-footer]/message:-translate-y-8 flex w-fit shrink-0 items-center justify-center self-end overflow-hidden rounded-full bg-muted",s),...a})}function i({className:s,...a}){return e.jsx("div",{"data-slot":"message-content",className:n("gap-2.5 group-data-[align=end]/message:*:data-slot:self-end flex w-full min-w-0 flex-col wrap-break-word",s),...a})}function d({className:s,...a}){return e.jsx("div",{"data-slot":"message-header",className:n("px-3 text-xs font-normal text-text-3 group-has-data-[variant=ghost]/message:px-0 flex max-w-full min-w-0 items-center",s),...a})}function m({className:s,...a}){return e.jsx("div",{"data-slot":"message-footer",className:n("px-3 text-xs font-normal text-text-3 group-has-data-[variant=ghost]/message:px-0 flex max-w-full min-w-0 items-center group-data-[align=end]/message:justify-end",s),...a})}c.__docgenInfo={description:"",methods:[],displayName:"MessageGroup"};t.__docgenInfo={description:"",methods:[],displayName:"Message",props:{align:{required:!1,tsType:{name:"union",raw:'"start" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:"",defaultValue:{value:'"start"',computed:!1}}}};l.__docgenInfo={description:"",methods:[],displayName:"MessageAvatar"};i.__docgenInfo={description:"",methods:[],displayName:"MessageContent"};m.__docgenInfo={description:"",methods:[],displayName:"MessageFooter"};d.__docgenInfo={description:"",methods:[],displayName:"MessageHeader"};const A={title:"Components/Message",component:t,parameters:{layout:"padded"}},r={render:()=>e.jsx(c,{children:e.jsx(t,{children:e.jsx(i,{children:"Hello world"})})})},o={render:()=>e.jsxs(c,{children:[e.jsxs(t,{children:[e.jsx(l,{children:e.jsx("span",{"aria-hidden":!0,className:"text-xs font-semibold",children:"AI"})}),e.jsxs(i,{children:[e.jsx(d,{children:"Semi Assistant · 10:24"}),e.jsx(g,{variant:"secondary",children:e.jsx(p,{children:"Hi! I uploaded the report you asked for."})}),e.jsx(m,{children:e.jsx("button",{type:"button",className:"inline-flex items-center gap-1","aria-label":"Copy",children:e.jsx(f,{"aria-hidden":!0,className:"size-3"})})})]})]}),e.jsxs(t,{align:"end",children:[e.jsx(l,{children:e.jsx("span",{"aria-hidden":!0,className:"text-xs font-semibold",children:"ME"})}),e.jsxs(i,{children:[e.jsx(d,{children:"You · 10:25"}),e.jsx(g,{children:e.jsx(p,{children:"Thanks! Anything else in it?"})}),e.jsx(m,{children:e.jsx("button",{type:"button",className:"inline-flex items-center gap-1","aria-label":"Like",children:e.jsx(x,{"aria-hidden":!0,className:"size-3"})})})]})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <MessageGroup>\r
      <Message>\r
        <MessageContent>Hello world</MessageContent>\r
      </Message>\r
    </MessageGroup>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <MessageGroup>\r
      <Message>\r
        <MessageAvatar>\r
          <span aria-hidden className="text-xs font-semibold">\r
            AI\r
          </span>\r
        </MessageAvatar>\r
        <MessageContent>\r
          <MessageHeader>Semi Assistant · 10:24</MessageHeader>\r
          <Bubble variant="secondary">\r
            <BubbleContent>Hi! I uploaded the report you asked for.</BubbleContent>\r
          </Bubble>\r
          <MessageFooter>\r
            <button type="button" className="inline-flex items-center gap-1" aria-label="Copy">\r
              <Copy aria-hidden className="size-3" />\r
            </button>\r
          </MessageFooter>\r
        </MessageContent>\r
      </Message>\r
      <Message align="end">\r
        <MessageAvatar>\r
          <span aria-hidden className="text-xs font-semibold">\r
            ME\r
          </span>\r
        </MessageAvatar>\r
        <MessageContent>\r
          <MessageHeader>You · 10:25</MessageHeader>\r
          <Bubble>\r
            <BubbleContent>Thanks! Anything else in it?</BubbleContent>\r
          </Bubble>\r
          <MessageFooter>\r
            <button type="button" className="inline-flex items-center gap-1" aria-label="Like">\r
              <ThumbsUp aria-hidden className="size-3" />\r
            </button>\r
          </MessageFooter>\r
        </MessageContent>\r
      </Message>\r
    </MessageGroup>
}`,...o.parameters?.docs?.source}}};const B=["Default","Conversation"];export{o as Conversation,r as Default,B as __namedExportsOrder,A as default};
