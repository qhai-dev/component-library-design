import{j as n}from"./jsx-runtime-u17CrQMm.js";import{c as r}from"./cn-Bk382tBs.js";import{C as u}from"./chevron-left-oV4I0PhK.js";import{E as f}from"./ellipsis-Bdt-dN1W.js";import{C as h}from"./chevron-right-DtWyRr_z.js";import"./createLucideIcon-B-kRpPYY.js";import"./iframe-BafV5W3V.js";import"./preload-helper-PPVm8Dsz.js";function l({className:i,...e}){return n.jsx("nav",{role:"navigation","aria-label":"pagination","data-slot":"pagination",className:r("mx-auto flex w-full justify-center",i),...e})}function d({className:i,...e}){return n.jsx("ul",{"data-slot":"pagination-content",className:r("gap-1 flex items-center",i),...e})}function a({...i}){return n.jsx("li",{"data-slot":"pagination-item",...i})}function t({className:i,isActive:e,children:s,...g}){return n.jsx("a",{"aria-current":e?"page":void 0,"data-slot":"pagination-link","data-active":e?"":void 0,className:r("inline-flex h-8 min-w-8 items-center justify-center rounded-sm px-2 text-sm text-foreground outline-none transition-colors duration-100 select-none","hover:bg-muted active:bg-muted-hover focus-visible:outline-2 focus-visible:outline-primary-light-active","data-active:bg-primary-light data-active:text-primary data-active:font-semibold data-active:hover:bg-primary-light","[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-tertiary",i),...g,children:s})}function c({className:i,text:e="Previous",...s}){return n.jsxs(t,{"aria-label":"Go to previous page",className:r("gap-1 px-3",i),...s,children:[n.jsx(u,{"aria-hidden":!0,className:"cn-rtl-flip"}),n.jsx("span",{className:"hidden sm:block",children:e})]})}function m({className:i,text:e="Next",...s}){return n.jsxs(t,{"aria-label":"Go to next page",className:r("gap-1 px-3",i),...s,children:[n.jsx("span",{className:"hidden sm:block",children:e}),n.jsx(h,{"aria-hidden":!0,className:"cn-rtl-flip"})]})}function p({className:i,...e}){return n.jsxs("span",{"aria-hidden":!0,"data-slot":"pagination-ellipsis",className:r("size-8 flex items-center justify-center text-tertiary [&_svg:not([class*='size-'])]:size-4",i),...e,children:[n.jsx(f,{"aria-hidden":!0}),n.jsx("span",{className:"sr-only",children:"More pages"})]})}l.__docgenInfo={description:`Semi Design pagination spec: 32px items with 3px radius, transparent\r
default state, fill-0 hover / fill-1 active, selected page in\r
primary-light with primary semibold text, icons in tertiary grey.`,methods:[],displayName:"Pagination"};d.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};p.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis"};a.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};t.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""}}};m.__docgenInfo={description:"",methods:[],displayName:"PaginationNext",props:{text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Next"',computed:!1}}}};c.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious",props:{text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Previous"',computed:!1}}}};const b={title:"Components/Pagination",component:l,parameters:{layout:"centered"}},o={render:()=>n.jsx(l,{children:n.jsxs(d,{children:[n.jsx(a,{children:n.jsx(c,{href:"#"})}),n.jsx(a,{children:n.jsx(t,{href:"#",children:"1"})}),n.jsx(a,{children:n.jsx(t,{href:"#",isActive:!0,children:"2"})}),n.jsx(a,{children:n.jsx(t,{href:"#",children:"3"})}),n.jsx(a,{children:n.jsx(p,{})}),n.jsx(a,{children:n.jsx(m,{href:"#"})})]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Pagination>\r
      <PaginationContent>\r
        <PaginationItem>\r
          <PaginationPrevious href="#" />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">1</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#" isActive>\r
            2\r
          </PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">3</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationEllipsis />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationNext href="#" />\r
        </PaginationItem>\r
      </PaginationContent>\r
    </Pagination>
}`,...o.parameters?.docs?.source}}};const k=["Default"];export{o as Default,k as __namedExportsOrder,b as default};
