import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as h}from"./index-lPyTqghZ.js";import{c as s}from"./cn-Bk382tBs.js";import{S as _}from"./index-Bhq7o7lD.js";import{u as S}from"./useRender-DuyXb_dU.js";import{m as D}from"./useRenderElement-Bqkd2A0z.js";import{S as w}from"./settings-BMN7jTib.js";import{C as z}from"./chevron-right-DtWyRr_z.js";import{F as I}from"./file-text-bpz8yyHO.js";import"./Separator-CbMvGRjN.js";import"./iframe-BafV5W3V.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-B-kRpPYY.js";function g({className:t,...r}){return e.jsx("div",{"data-slot":"item-group",className:s("group/item-group flex w-full flex-col gap-2",t),...r})}function j({className:t,...r}){return e.jsx(_,{"data-slot":"item-separator",orientation:"horizontal",className:s("my-2",t),...r})}const T=h("group/item flex w-full flex-wrap items-center rounded-sm text-sm outline-none transition-colors duration-100 focus-visible:outline-2 focus-visible:outline-primary-light-active [a]:cursor-pointer",{variants:{variant:{default:"border border-border bg-card hover:bg-muted",outline:"border border-border bg-transparent hover:bg-muted",muted:"border border-transparent bg-muted hover:bg-muted-hover"},size:{default:"gap-3 px-4 py-3",sm:"gap-2.5 px-4 py-2",xs:"gap-2 px-3 py-1.5"}},defaultVariants:{variant:"default",size:"default"}});function n({className:t,variant:r="default",size:m="default",render:y,...N}){return S({defaultTagName:"div",props:D({className:s(T({variant:r,size:m,className:t}))},N),render:y,state:{slot:"item",variant:r,size:m}})}const M=h("flex shrink-0 items-center justify-center gap-2 group-has-data-[slot=item-description]/item:self-start [&_svg]:pointer-events-none",{variants:{variant:{default:"bg-transparent",icon:"text-text-2 [&_svg:not([class*='size-'])]:size-4",image:"size-10 overflow-hidden rounded-sm group-data-[size=sm]/item:size-8 group-data-[size=xs]/item:size-6 [&_img]:size-full [&_img]:object-cover"}},defaultVariants:{variant:"default"}});function f({className:t,variant:r="default",...m}){return e.jsx("div",{"data-slot":"item-media","data-variant":r,className:s(M({variant:r,className:t})),...m})}function a({className:t,...r}){return e.jsx("div",{"data-slot":"item-content",className:s("flex min-w-0 flex-1 flex-col gap-0.5",t),...r})}function i({className:t,...r}){return e.jsx("div",{"data-slot":"item-title",className:s("flex w-fit items-center gap-2 text-sm leading-5 font-semibold text-foreground underline-offset-4 line-clamp-1",t),...r})}function o({className:t,...r}){return e.jsx("p",{"data-slot":"item-description",className:s("text-left text-sm leading-5 font-normal text-text-2 line-clamp-2 [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",t),...r})}function d({className:t,...r}){return e.jsx("div",{"data-slot":"item-actions",className:s("flex shrink-0 items-center gap-2",t),...r})}function v({className:t,...r}){return e.jsx("div",{"data-slot":"item-header",className:s("flex basis-full items-center justify-between gap-2",t),...r})}function b({className:t,...r}){return e.jsx("div",{"data-slot":"item-footer",className:s("flex basis-full items-center justify-between gap-2",t),...r})}f.__docgenInfo={description:"",methods:[],displayName:"ItemMedia",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};a.__docgenInfo={description:"",methods:[],displayName:"ItemContent"};d.__docgenInfo={description:"",methods:[],displayName:"ItemActions"};g.__docgenInfo={description:`Structural list-item primitives with the Semi List row spec:\r
- item: 3px radius, 1px border, bg-0 surface, fill-0 on hover, 12px/16px padding\r
- title: 14px/20px semibold text-0; description: 14px/20px text-2\r
- color transitions 100ms; solid focus ring in --semi-color-focus-border`,methods:[],displayName:"ItemGroup"};j.__docgenInfo={description:"",methods:[],displayName:"ItemSeparator"};i.__docgenInfo={description:"",methods:[],displayName:"ItemTitle"};o.__docgenInfo={description:"",methods:[],displayName:"ItemDescription"};v.__docgenInfo={description:"",methods:[],displayName:"ItemHeader"};b.__docgenInfo={description:"",methods:[],displayName:"ItemFooter"};const J={title:"Components/Item",component:n,parameters:{layout:"padded"},decorators:[t=>e.jsx("div",{className:"w-150",children:e.jsx(t,{})})]},l={render:()=>e.jsxs(n,{children:[e.jsx(f,{variant:"icon",children:e.jsx(w,{"aria-hidden":!0})}),e.jsxs(a,{children:[e.jsx(i,{children:"Account settings"}),e.jsx(o,{children:"Manage your profile, email and preferences."})]}),e.jsx(d,{children:e.jsx(z,{"aria-hidden":!0,className:"size-4 text-text-2"})})]})},c={render:()=>e.jsxs(g,{children:[e.jsxs(n,{children:[e.jsx(f,{variant:"icon",children:e.jsx(I,{"aria-hidden":!0})}),e.jsxs(a,{children:[e.jsx(i,{children:"Semi Design spec.pdf"}),e.jsx(o,{children:"Updated 2 hours ago"})]}),e.jsx(d,{children:"12 MB"})]}),e.jsx(j,{}),e.jsxs(n,{children:[e.jsx(f,{variant:"icon",children:e.jsx(I,{"aria-hidden":!0})}),e.jsxs(a,{children:[e.jsx(i,{children:"Quarterly report.docx"}),e.jsx(o,{children:"Updated yesterday"})]}),e.jsx(d,{children:"4 MB"})]})]})},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(n,{children:"Default (bordered card row)"}),e.jsx(n,{variant:"outline",children:"Outline (transparent surface)"}),e.jsx(n,{variant:"muted",children:"Muted (fill background)"})]})},u={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(n,{size:"sm",children:e.jsx(a,{children:e.jsx(i,{children:"Small row"})})}),e.jsx(n,{size:"default",children:e.jsx(a,{children:e.jsx(i,{children:"Default row"})})})]})},x={render:()=>e.jsxs(n,{children:[e.jsxs(v,{children:[e.jsx(i,{children:"Design review"}),e.jsx("span",{className:"text-sm text-text-2",children:"10:00"})]}),e.jsx(o,{children:"Weekly sync on the component library roadmap."}),e.jsx(b,{children:e.jsx(d,{children:e.jsx("button",{type:"button",className:"text-sm text-primary",children:"Join"})})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Item>\r
      <ItemMedia variant="icon">\r
        <Settings aria-hidden />\r
      </ItemMedia>\r
      <ItemContent>\r
        <ItemTitle>Account settings</ItemTitle>\r
        <ItemDescription>Manage your profile, email and preferences.</ItemDescription>\r
      </ItemContent>\r
      <ItemActions>\r
        <ChevronRight aria-hidden className="size-4 text-text-2" />\r
      </ItemActions>\r
    </Item>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <ItemGroup>\r
      <Item>\r
        <ItemMedia variant="icon">\r
          <FileText aria-hidden />\r
        </ItemMedia>\r
        <ItemContent>\r
          <ItemTitle>Semi Design spec.pdf</ItemTitle>\r
          <ItemDescription>Updated 2 hours ago</ItemDescription>\r
        </ItemContent>\r
        <ItemActions>12 MB</ItemActions>\r
      </Item>\r
      <ItemSeparator />\r
      <Item>\r
        <ItemMedia variant="icon">\r
          <FileText aria-hidden />\r
        </ItemMedia>\r
        <ItemContent>\r
          <ItemTitle>Quarterly report.docx</ItemTitle>\r
          <ItemDescription>Updated yesterday</ItemDescription>\r
        </ItemContent>\r
        <ItemActions>4 MB</ItemActions>\r
      </Item>\r
    </ItemGroup>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
      <Item>Default (bordered card row)</Item>\r
      <Item variant="outline">Outline (transparent surface)</Item>\r
      <Item variant="muted">Muted (fill background)</Item>\r
    </div>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
      <Item size="sm">\r
        <ItemContent>\r
          <ItemTitle>Small row</ItemTitle>\r
        </ItemContent>\r
      </Item>\r
      <Item size="default">\r
        <ItemContent>\r
          <ItemTitle>Default row</ItemTitle>\r
        </ItemContent>\r
      </Item>\r
    </div>
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Item>\r
      <ItemHeader>\r
        <ItemTitle>Design review</ItemTitle>\r
        <span className="text-sm text-text-2">10:00</span>\r
      </ItemHeader>\r
      <ItemDescription>Weekly sync on the component library roadmap.</ItemDescription>\r
      <ItemFooter>\r
        <ItemActions>\r
          <button type="button" className="text-sm text-primary">\r
            Join\r
          </button>\r
        </ItemActions>\r
      </ItemFooter>\r
    </Item>
}`,...x.parameters?.docs?.source}}};const Q=["Default","Group","Variants","Sizes","WithHeaderFooter"];export{l as Default,c as Group,u as Sizes,p as Variants,x as WithHeaderFooter,Q as __namedExportsOrder,J as default};
