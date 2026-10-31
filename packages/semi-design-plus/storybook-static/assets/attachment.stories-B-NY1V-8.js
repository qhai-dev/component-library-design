import{j as t}from"./jsx-runtime-u17CrQMm.js";import{c as v}from"./index-lPyTqghZ.js";import{c as o}from"./cn-Bk382tBs.js";import{B as T}from"./index-ItTLVuoI.js";import{u as C}from"./useRender-DuyXb_dU.js";import{m as D}from"./useRenderElement-Bqkd2A0z.js";import{F as g}from"./file-text-bpz8yyHO.js";import{c as j}from"./createLucideIcon-B-kRpPYY.js";import{C as N}from"./circle-alert-BS9aWAO4.js";import{X as z}from"./x-Ce-32ZOG.js";import"./iframe-BafV5W3V.js";import"./preload-helper-PPVm8Dsz.js";import"./useButton-CX1hIlw-.js";import"./floating-ui.utils.dom-qEQ5XCbi.js";import"./useIsoLayoutEffect-CCrGtNxN.js";import"./loader-circle-DepsV607.js";const _=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],M=j("download",_);const k=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],I=j("paperclip",k),q=v("w-fit rounded-xl transition-colors duration-100 focus-within:outline-2 focus-within:outline-ring group/attachment relative flex max-w-full min-w-0 shrink-0 flex-wrap border bg-card text-card-foreground has-[>a,>button]:hover:bg-muted data-[state=error]:border-destructive data-[state=idle]:border-dashed",{variants:{size:{default:"gap-2 text-sm has-data-[slot=attachment-content]:px-2.5 has-data-[slot=attachment-content]:py-2 has-data-[slot=attachment-media]:p-2",sm:"gap-2.5 text-xs has-data-[slot=attachment-content]:px-2 has-data-[slot=attachment-content]:py-1.5 has-data-[slot=attachment-media]:p-1.5",xs:"gap-1.5 rounded-md text-xs has-data-[slot=attachment-content]:px-1.5 has-data-[slot=attachment-content]:py-1 has-data-[slot=attachment-media]:p-1"},orientation:{horizontal:"min-w-40 items-center",vertical:"w-24 has-data-[slot=attachment-content]:w-30 flex-col"}}});function n({className:e,state:a="done",size:s="default",orientation:d="horizontal",...y}){return t.jsx("div",{"data-slot":"attachment","data-state":a,"data-size":s,"data-orientation":d,className:o(q({size:s,orientation:d}),e),...y})}const S=v("w-10 rounded-xl bg-muted text-muted-foreground group-data-[orientation=vertical]/attachment:w-full group-data-[size=sm]/attachment:w-8 group-data-[size=xs]/attachment:w-7 group-data-[size=xs]/attachment:rounded-md group-data-[orientation=vertical]/attachment:*:data-[slot=spinner]:size-6! [&_svg:not([class*='size-'])]:size-4 group-data-[orientation=vertical]/attachment:[&_svg:not([class*='size-'])]:size-6 group-data-[size=xs]/attachment:[&_svg:not([class*='size-'])]:size-3.5 relative flex aspect-square shrink-0 items-center justify-center overflow-hidden group-data-[state=error]/attachment:bg-destructive-light group-data-[state=error]/attachment:text-destructive [&_svg]:pointer-events-none",{variants:{variant:{icon:"",image:"opacity-60 group-data-[state=done]/attachment:opacity-100 group-data-[state=idle]/attachment:opacity-100 *:[img]:aspect-square *:[img]:w-full *:[img]:object-cover"}},defaultVariants:{variant:"icon"}});function l({className:e,variant:a="icon",...s}){return t.jsx("div",{"data-slot":"attachment-media","data-variant":a,className:o(S({variant:a}),e),...s})}function r({className:e,...a}){return t.jsx("div",{"data-slot":"attachment-content",className:o("leading-tight group-data-[orientation=vertical]/attachment:px-1 max-w-full min-w-0 flex-1",e),...a})}function i({className:e,...a}){return t.jsx("span",{"data-slot":"attachment-title",className:o("font-semibold text-foreground block max-w-full min-w-0 truncate group-data-[state=processing]/attachment:shimmer group-data-[state=uploading]/attachment:shimmer",e),...a})}function c({className:e,...a}){return t.jsx("span",{"data-slot":"attachment-description",className:o("mt-0.5 text-xs block min-w-0 truncate text-muted-foreground group-data-[state=error]/attachment:text-destructive","max-w-full",e),...a})}function f({className:e,...a}){return t.jsx("div",{"data-slot":"attachment-actions",className:o("relative z-20 group-data-[orientation=vertical]/attachment:absolute group-data-[orientation=vertical]/attachment:top-3 group-data-[orientation=vertical]/attachment:right-3 group-data-[orientation=vertical]/attachment:gap-1 flex shrink-0 items-center",e),...a})}function A({className:e,variant:a,size:s="icon-xs",...d}){return t.jsx(T,{"data-slot":"attachment-action",variant:a??"ghost",size:s,className:o("",e),...d})}function b({className:e,render:a,type:s,...d}){return C({defaultTagName:"button",props:D({type:a?s:s??"button",className:o("absolute inset-0 z-10 outline-none",e)},d),render:a,state:{slot:"attachment-trigger"}})}function w({className:e,...a}){return t.jsx("div",{"data-slot":"attachment-group",className:o("scroll-px-1 gap-3 py-1 flex min-w-0 scroll-fade-x snap-x snap-mandatory scrollbar-none overflow-x-auto overscroll-x-contain *:data-[slot=attachment]:flex-none *:data-[slot=attachment]:snap-start",e),...a})}n.__docgenInfo={description:"",methods:[],displayName:"Attachment",props:{state:{required:!1,tsType:{name:"union",raw:'"idle" | "uploading" | "processing" | "error" | "done"',elements:[{name:"literal",value:'"idle"'},{name:"literal",value:'"uploading"'},{name:"literal",value:'"processing"'},{name:"literal",value:'"error"'},{name:"literal",value:'"done"'}]},description:"",defaultValue:{value:'"done"',computed:!1}},size:{defaultValue:{value:'"default"',computed:!1},required:!1},orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1}}};w.__docgenInfo={description:"",methods:[],displayName:"AttachmentGroup"};l.__docgenInfo={description:"",methods:[],displayName:"AttachmentMedia",props:{variant:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};r.__docgenInfo={description:"",methods:[],displayName:"AttachmentContent"};i.__docgenInfo={description:"",methods:[],displayName:"AttachmentTitle"};c.__docgenInfo={description:"",methods:[],displayName:"AttachmentDescription"};f.__docgenInfo={description:"",methods:[],displayName:"AttachmentActions"};A.__docgenInfo={description:"",methods:[],displayName:"AttachmentAction",props:{size:{defaultValue:{value:'"icon-xs"',computed:!1},required:!1}}};const Q={title:"Components/Attachment",component:n,parameters:{layout:"padded"}},m={render:()=>t.jsx(n,{children:t.jsxs(r,{children:[t.jsx(i,{children:"file.png"}),t.jsx(c,{children:"Image attachment"})]})})},h={render:()=>t.jsxs(n,{children:[t.jsx(l,{variant:"icon",children:t.jsx(g,{"aria-hidden":!0})}),t.jsxs(r,{children:[t.jsx(i,{children:"quarterly-report.pdf"}),t.jsx(c,{children:"PDF · 2.4 MB"})]}),t.jsxs(f,{children:[t.jsx(A,{"aria-label":"Download",children:t.jsx(M,{"aria-hidden":!0})}),t.jsx(A,{"aria-label":"Remove",children:t.jsx(z,{"aria-hidden":!0})})]}),t.jsx(b,{"aria-label":"Open quarterly-report.pdf"})]})},p={render:()=>t.jsxs("div",{className:"flex flex-col gap-3",children:[t.jsxs(n,{state:"idle",children:[t.jsx(l,{variant:"icon",children:t.jsx(I,{"aria-hidden":!0})}),t.jsxs(r,{children:[t.jsx(i,{children:"Choose a file"}),t.jsx(c,{children:"Idle, dashed border"})]}),t.jsx(b,{"aria-label":"Choose a file"})]}),t.jsxs(n,{state:"uploading",children:[t.jsx(l,{variant:"icon",children:t.jsx(g,{"aria-hidden":!0})}),t.jsxs(r,{children:[t.jsx(i,{children:"design-tokens.zip"}),t.jsx(c,{children:"Uploading… 62%"})]})]}),t.jsxs(n,{state:"error",children:[t.jsx(l,{variant:"icon",children:t.jsx(N,{"aria-hidden":!0})}),t.jsxs(r,{children:[t.jsx(i,{children:"broken-upload.zip"}),t.jsx(c,{children:"Upload failed. Retry?"})]}),t.jsx(f,{children:t.jsx(A,{"aria-label":"Remove",children:t.jsx(z,{"aria-hidden":!0})})})]})]})},u={render:()=>t.jsxs("div",{className:"flex flex-col gap-3",children:[t.jsx(n,{size:"default",children:t.jsxs(r,{children:[t.jsx(i,{children:"Default size"}),t.jsx(c,{children:"14px title"})]})}),t.jsx(n,{size:"sm",children:t.jsxs(r,{children:[t.jsx(i,{children:"Small size"}),t.jsx(c,{children:"12px title"})]})}),t.jsx(n,{size:"xs",children:t.jsx(r,{children:t.jsx(i,{children:"Extra small"})})})]})},x={render:()=>t.jsx(w,{className:"max-w-md",children:["design-v1.png","design-v2.png","design-v3.png"].map(e=>t.jsxs(n,{state:"done",children:[t.jsx(l,{variant:"icon",children:t.jsx(g,{"aria-hidden":!0})}),t.jsx(r,{children:t.jsx(i,{children:e})})]},e))})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Attachment>\r
      <AttachmentContent>\r
        <AttachmentTitle>file.png</AttachmentTitle>\r
        <AttachmentDescription>Image attachment</AttachmentDescription>\r
      </AttachmentContent>\r
    </Attachment>
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Attachment>\r
      <AttachmentMedia variant="icon">\r
        <FileText aria-hidden />\r
      </AttachmentMedia>\r
      <AttachmentContent>\r
        <AttachmentTitle>quarterly-report.pdf</AttachmentTitle>\r
        <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>\r
      </AttachmentContent>\r
      <AttachmentActions>\r
        <AttachmentAction aria-label="Download">\r
          <Download aria-hidden />\r
        </AttachmentAction>\r
        <AttachmentAction aria-label="Remove">\r
          <X aria-hidden />\r
        </AttachmentAction>\r
      </AttachmentActions>\r
      <AttachmentTrigger aria-label="Open quarterly-report.pdf" />\r
    </Attachment>
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
      <Attachment state="idle">\r
        <AttachmentMedia variant="icon">\r
          <Paperclip aria-hidden />\r
        </AttachmentMedia>\r
        <AttachmentContent>\r
          <AttachmentTitle>Choose a file</AttachmentTitle>\r
          <AttachmentDescription>Idle, dashed border</AttachmentDescription>\r
        </AttachmentContent>\r
        <AttachmentTrigger aria-label="Choose a file" />\r
      </Attachment>\r
      <Attachment state="uploading">\r
        <AttachmentMedia variant="icon">\r
          <FileText aria-hidden />\r
        </AttachmentMedia>\r
        <AttachmentContent>\r
          <AttachmentTitle>design-tokens.zip</AttachmentTitle>\r
          <AttachmentDescription>Uploading… 62%</AttachmentDescription>\r
        </AttachmentContent>\r
      </Attachment>\r
      <Attachment state="error">\r
        <AttachmentMedia variant="icon">\r
          <CircleAlert aria-hidden />\r
        </AttachmentMedia>\r
        <AttachmentContent>\r
          <AttachmentTitle>broken-upload.zip</AttachmentTitle>\r
          <AttachmentDescription>Upload failed. Retry?</AttachmentDescription>\r
        </AttachmentContent>\r
        <AttachmentActions>\r
          <AttachmentAction aria-label="Remove">\r
            <X aria-hidden />\r
          </AttachmentAction>\r
        </AttachmentActions>\r
      </Attachment>\r
    </div>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
      <Attachment size="default">\r
        <AttachmentContent>\r
          <AttachmentTitle>Default size</AttachmentTitle>\r
          <AttachmentDescription>14px title</AttachmentDescription>\r
        </AttachmentContent>\r
      </Attachment>\r
      <Attachment size="sm">\r
        <AttachmentContent>\r
          <AttachmentTitle>Small size</AttachmentTitle>\r
          <AttachmentDescription>12px title</AttachmentDescription>\r
        </AttachmentContent>\r
      </Attachment>\r
      <Attachment size="xs">\r
        <AttachmentContent>\r
          <AttachmentTitle>Extra small</AttachmentTitle>\r
        </AttachmentContent>\r
      </Attachment>\r
    </div>
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <AttachmentGroup className="max-w-md">\r
      {["design-v1.png", "design-v2.png", "design-v3.png"].map(name => <Attachment key={name} state="done">\r
          <AttachmentMedia variant="icon">\r
            <FileText aria-hidden />\r
          </AttachmentMedia>\r
          <AttachmentContent>\r
            <AttachmentTitle>{name}</AttachmentTitle>\r
          </AttachmentContent>\r
        </Attachment>)}\r
    </AttachmentGroup>
}`,...x.parameters?.docs?.source}}};const Y=["Default","WithMediaAndActions","States","Sizes","Group"];export{m as Default,x as Group,u as Sizes,p as States,h as WithMediaAndActions,Y as __namedExportsOrder,Q as default};
