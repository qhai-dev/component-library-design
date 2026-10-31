import{j as r}from"./jsx-runtime-u17CrQMm.js";import{B as p}from"./index-ItTLVuoI.js";import{c as s}from"./cn-Bk382tBs.js";import{E as h}from"./ellipsis-Bdt-dN1W.js";import"./index-lPyTqghZ.js";import"./iframe-BafV5W3V.js";import"./preload-helper-PPVm8Dsz.js";import"./useButton-CX1hIlw-.js";import"./floating-ui.utils.dom-qEQ5XCbi.js";import"./useRenderElement-Bqkd2A0z.js";import"./useIsoLayoutEffect-CCrGtNxN.js";import"./loader-circle-DepsV607.js";import"./createLucideIcon-B-kRpPYY.js";function t({className:a,size:e="default",...g}){return r.jsx("div",{"data-slot":"card","data-size":e,className:s("gap-(--card-spacing) overflow-hidden rounded-xl border border-border bg-card py-(--card-spacing) text-sm text-card-foreground [--card-spacing:--spacing(5)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(4)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl group/card flex flex-col",a),...g})}function i({className:a,...e}){return r.jsx("div",{"data-slot":"card-header",className:s("gap-1 rounded-t-xl px-(--card-spacing) [.border-b]:pb-(--card-spacing) group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]",a),...e})}function c({className:a,...e}){return r.jsx("div",{"data-slot":"card-title",className:s("text-base leading-[22px] font-semibold group-data-[size=sm]/card:text-sm cn-font-heading",a),...e})}function l({className:a,...e}){return r.jsx("div",{"data-slot":"card-description",className:s("text-sm text-muted-foreground",a),...e})}function u({className:a,...e}){return r.jsx("div",{"data-slot":"card-action",className:s("col-start-2 row-span-2 row-start-1 self-start justify-self-end",a),...e})}function m({className:a,...e}){return r.jsx("div",{"data-slot":"card-content",className:s("px-(--card-spacing) text-text-1",a),...e})}function C({className:a,...e}){return r.jsx("div",{"data-slot":"card-footer",className:s("flex items-center px-(--card-spacing) pb-(--card-spacing)",a),...e})}t.__docgenInfo={description:"",methods:[],displayName:"Card",props:{size:{required:!1,tsType:{name:"union",raw:'"default" | "sm"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};i.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};C.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};c.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};u.__docgenInfo={description:"",methods:[],displayName:"CardAction"};l.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};m.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const S={title:"Components/Card",component:t,parameters:{layout:"padded"}},n={render:()=>r.jsxs(t,{className:"w-96",children:[r.jsxs(i,{children:[r.jsx(c,{children:"Project alpha"}),r.jsx(l,{children:"Last updated 2 hours ago"})]}),r.jsx(m,{children:r.jsx("p",{className:"text-sm",children:"The design system covers tokens, components and usage guidance across platforms."})}),r.jsxs(C,{className:"gap-2",children:[r.jsx(p,{size:"sm",variant:"outline",children:"Cancel"}),r.jsx(p,{size:"sm",children:"Save"})]})]})},d={render:()=>r.jsxs(t,{className:"w-96",children:[r.jsxs(i,{children:[r.jsx(c,{children:"Notifications"}),r.jsx(u,{children:r.jsx(p,{variant:"ghost",size:"icon-sm","aria-label":"More",children:r.jsx(h,{})})}),r.jsx(l,{children:"You have 3 unread messages."})]}),r.jsx(m,{children:"Content goes here."})]})},o={render:()=>r.jsxs(t,{size:"sm",className:"w-72",children:[r.jsxs(i,{children:[r.jsx(c,{children:"Compact card"}),r.jsx(l,{children:"Tighter 16px spacing"})]}),r.jsx(m,{children:"Small content."})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-96">\r
      <CardHeader>\r
        <CardTitle>Project alpha</CardTitle>\r
        <CardDescription>Last updated 2 hours ago</CardDescription>\r
      </CardHeader>\r
      <CardContent>\r
        <p className="text-sm">\r
          The design system covers tokens, components and usage guidance across platforms.\r
        </p>\r
      </CardContent>\r
      <CardFooter className="gap-2">\r
        <Button size="sm" variant="outline">\r
          Cancel\r
        </Button>\r
        <Button size="sm">Save</Button>\r
      </CardFooter>\r
    </Card>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-96">\r
      <CardHeader>\r
        <CardTitle>Notifications</CardTitle>\r
        <CardAction>\r
          <Button variant="ghost" size="icon-sm" aria-label="More">\r
            <MoreHorizontal />\r
          </Button>\r
        </CardAction>\r
        <CardDescription>You have 3 unread messages.</CardDescription>\r
      </CardHeader>\r
      <CardContent>Content goes here.</CardContent>\r
    </Card>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Card size="sm" className="w-72">\r
      <CardHeader>\r
        <CardTitle>Compact card</CardTitle>\r
        <CardDescription>Tighter 16px spacing</CardDescription>\r
      </CardHeader>\r
      <CardContent>Small content.</CardContent>\r
    </Card>
}`,...o.parameters?.docs?.source}}};const B=["Default","WithAction","Small"];export{n as Default,o as Small,d as WithAction,B as __namedExportsOrder,S as default};
