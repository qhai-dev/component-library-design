import{j as a}from"./jsx-runtime-u17CrQMm.js";import{c as f}from"./cn-Bk382tBs.js";import{r as t}from"./iframe-BafV5W3V.js";import{f as S,u as A}from"./useRenderElement-Bqkd2A0z.js";import{u as F}from"./useTimeout-Bvw9d4U2.js";import"./preload-helper-PPVm8Dsz.js";import"./useOnMount-WNj2a00w.js";const b=t.createContext(void 0);function N(){const e=t.useContext(b);if(e===void 0)throw new Error(S(13));return e}const h={imageLoadingStatus:()=>null},C=t.forwardRef(function(r,l){const{className:k,render:y,style:n,...x}=r,[i,d]=t.useState("idle"),g={imageLoadingStatus:i},c=t.useMemo(()=>({imageLoadingStatus:i,setImageLoadingStatus:d}),[i,d]),u=A("span",r,{state:g,ref:l,props:x,stateAttributesMapping:h});return a.jsx(b.Provider,{value:c,children:u})}),G=t.forwardRef(function(r,l){const{className:k,render:y,delay:n,style:x,...i}=r,{imageLoadingStatus:d}=N(),[g,c]=t.useState(n===void 0),u=F();return t.useEffect(()=>(n!==void 0?u.start(n,()=>c(!0)):c(!0),u.clear),[u,n]),A("span",r,{state:{imageLoadingStatus:d},ref:l,props:i,stateAttributesMapping:h,enabled:d!=="loaded"&&(n===void 0||g)})});function s({className:e,size:r="default",...l}){return a.jsx(C,{"data-slot":"avatar","data-size":r,className:f("size-10 rounded-full after:rounded-full data-[size=lg]:size-12 data-[size=sm]:size-8 group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten focus-visible:outline-2 focus-visible:outline-primary-light-active",e),...l})}function o({className:e,...r}){return a.jsx(G,{"data-slot":"avatar-fallback",className:f("rounded-full bg-muted text-muted-foreground flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs",e),...r})}function z({className:e,...r}){return a.jsx("div",{"data-slot":"avatar-group",className:f("group/avatar-group flex -space-x-3 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",e),...r})}function j({className:e,...r}){return a.jsx("div",{"data-slot":"avatar-group-count",className:f("size-10 rounded-full bg-tertiary text-sm text-primary-foreground group-has-data-[size=lg]/avatar-group:size-12 group-has-data-[size=sm]/avatar-group:size-8 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3 relative flex shrink-0 items-center justify-center ring-2 ring-background","",e),...r})}s.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{required:!1,tsType:{name:"union",raw:'"default" | "sm" | "lg"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};o.__docgenInfo={description:"",methods:[],displayName:"AvatarFallback"};z.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup"};j.__docgenInfo={description:"",methods:[],displayName:"AvatarGroupCount"};const B={title:"Components/Avatar",component:s,parameters:{layout:"centered"}},m={render:()=>a.jsx(s,{children:a.jsx(o,{children:"SD"})})},p={render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(s,{size:"sm",children:a.jsx(o,{children:"S"})}),a.jsx(s,{children:a.jsx(o,{children:"M"})}),a.jsx(s,{size:"lg",children:a.jsx(o,{children:"L"})})]})},v={render:()=>a.jsxs(z,{children:[["A","B","C"].map(e=>a.jsx(s,{children:a.jsx(o,{children:e})},e)),a.jsx(j,{children:"+7"})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar>\r
      <AvatarFallback>SD</AvatarFallback>\r
    </Avatar>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">\r
      <Avatar size="sm">\r
        <AvatarFallback>S</AvatarFallback>\r
      </Avatar>\r
      <Avatar>\r
        <AvatarFallback>M</AvatarFallback>\r
      </Avatar>\r
      <Avatar size="lg">\r
        <AvatarFallback>L</AvatarFallback>\r
      </Avatar>\r
    </div>
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup>\r
      {["A", "B", "C"].map(initial => <Avatar key={initial}>\r
          <AvatarFallback>{initial}</AvatarFallback>\r
        </Avatar>)}\r
      <AvatarGroupCount>+7</AvatarGroupCount>\r
    </AvatarGroup>
}`,...v.parameters?.docs?.source}}};const T=["Default","Sizes","Group"];export{m as Default,v as Group,p as Sizes,T as __namedExportsOrder,B as default};
