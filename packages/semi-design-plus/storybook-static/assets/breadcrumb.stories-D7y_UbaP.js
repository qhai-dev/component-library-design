import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as s}from"./cn-Bk382tBs.js";import{u as p}from"./useRender-DuyXb_dU.js";import{m as B}from"./useRenderElement-Bqkd2A0z.js";import{C as x}from"./chevron-right-DtWyRr_z.js";import{E as h}from"./ellipsis-Bdt-dN1W.js";import"./iframe-BafV5W3V.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-B-kRpPYY.js";function c({className:e,...a}){return r.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",className:s("",e),...a})}function u({className:e,...a}){return r.jsx("ol",{"data-slot":"breadcrumb-list",className:s("gap-1 text-sm text-text-2 flex flex-wrap items-center wrap-break-word",e),...a})}function t({className:e,...a}){return r.jsx("li",{"data-slot":"breadcrumb-item",className:s("gap-1 inline-flex items-center",e),...a})}function o({className:e,render:a,...i}){return p({defaultTagName:"a",props:B({className:s("transition-colors duration-100 hover:text-primary active:text-primary-hover",e)},i),render:a,state:{slot:"breadcrumb-link"}})}function l({className:e,...a}){return r.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:s("text-foreground",e),...a})}function n({children:e,className:a,...i}){return r.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:s("text-text-2 [&>svg]:size-3.5",a),...i,children:e??r.jsx(x,{"aria-hidden":!0,className:"cn-rtl-flip"})})}function b({className:e,...a}){return r.jsxs("span",{"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",className:s("size-5 [&>svg]:size-4 flex items-center justify-center",e),...a,children:[r.jsx(h,{"aria-hidden":!0}),r.jsx("span",{className:"sr-only",children:"More"})]})}c.__docgenInfo={description:`Semi Design breadcrumb spec: items in text-2, links shift to the link color\r
on hover, the current page is plain text-0 (no bold), separators in text-2.`,methods:[],displayName:"Breadcrumb"};u.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};t.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};l.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};n.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};b.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis"};const S={title:"Components/Breadcrumb",component:c,parameters:{layout:"centered"}},m={render:()=>r.jsx(c,{children:r.jsxs(u,{children:[r.jsx(t,{children:r.jsx(o,{href:"#",children:"Home"})}),r.jsx(n,{}),r.jsx(t,{children:r.jsx(o,{href:"#",children:"Components"})}),r.jsx(n,{}),r.jsx(t,{children:r.jsx(l,{children:"Breadcrumb"})})]})})},d={render:()=>r.jsx(c,{children:r.jsxs(u,{children:[r.jsx(t,{children:r.jsx(o,{href:"#",children:"Home"})}),r.jsx(n,{}),r.jsx(t,{children:r.jsx(b,{})}),r.jsx(n,{}),r.jsx(t,{children:r.jsx(l,{children:"Detail"})})]})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>\r
      <BreadcrumbList>\r
        <BreadcrumbItem>\r
          <BreadcrumbLink href="#">Home</BreadcrumbLink>\r
        </BreadcrumbItem>\r
        <BreadcrumbSeparator />\r
        <BreadcrumbItem>\r
          <BreadcrumbLink href="#">Components</BreadcrumbLink>\r
        </BreadcrumbItem>\r
        <BreadcrumbSeparator />\r
        <BreadcrumbItem>\r
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>\r
        </BreadcrumbItem>\r
      </BreadcrumbList>\r
    </Breadcrumb>
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>\r
      <BreadcrumbList>\r
        <BreadcrumbItem>\r
          <BreadcrumbLink href="#">Home</BreadcrumbLink>\r
        </BreadcrumbItem>\r
        <BreadcrumbSeparator />\r
        <BreadcrumbItem>\r
          <BreadcrumbEllipsis />\r
        </BreadcrumbItem>\r
        <BreadcrumbSeparator />\r
        <BreadcrumbItem>\r
          <BreadcrumbPage>Detail</BreadcrumbPage>\r
        </BreadcrumbItem>\r
      </BreadcrumbList>\r
    </Breadcrumb>
}`,...d.parameters?.docs?.source}}};const v=["Default","Collapsed"];export{d as Collapsed,m as Default,v as __namedExportsOrder,S as default};
