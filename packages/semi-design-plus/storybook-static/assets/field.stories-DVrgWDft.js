import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as F}from"./iframe-BafV5W3V.js";import{c as b}from"./index-lPyTqghZ.js";import{c as a}from"./cn-Bk382tBs.js";import{L as j}from"./index-C6LkLFrx.js";import"./preload-helper-PPVm8Dsz.js";function x({className:r,...i}){return e.jsx("div",{"data-slot":"field-group",className:a("group/field-group flex w-full flex-col gap-6",r),...i})}const N=b("group/field flex w-full",{variants:{orientation:{vertical:"flex-col gap-1",horizontal:"flex-row items-center gap-0 [&>[data-slot=field-label]]:mr-4",responsive:"flex-col gap-1 @md/field-group:flex-row @md/field-group:items-center @md/field-group:gap-0 @md/field-group:[&>[data-slot=field-label]]:mr-4"}},defaultVariants:{orientation:"vertical"}});function s({className:r,orientation:i="vertical",...n}){return e.jsx("div",{role:"group","data-slot":"field","data-orientation":i,className:a(N({orientation:i}),r),...n})}function t({className:r,...i}){return e.jsx(j,{"data-slot":"field-label",className:a("w-fit",r),...i})}function p({className:r,...i}){return e.jsx("p",{"data-slot":"field-description",className:a("text-left text-sm leading-5 font-normal text-text-2",r),...i})}function g({className:r,children:i,errors:n,...h}){const f=F.useMemo(()=>{if(i)return i;if(!n?.length)return null;const c=[...new Map(n.map(l=>[l?.message,l])).values()];return c?.length==1?c[0]?.message:e.jsx("ul",{className:"flex list-disc flex-col gap-1 ml-4",children:c.map((l,v)=>l?.message&&e.jsx("li",{children:l.message},v))})},[i,n]);return f?e.jsx("div",{role:"alert","data-slot":"field-error",className:a("flex items-center text-sm leading-5 font-normal text-destructive",r),...h,children:f}):null}s.__docgenInfo={description:"",methods:[],displayName:"Field",props:{orientation:{defaultValue:{value:'"vertical"',computed:!1},required:!1}}};t.__docgenInfo={description:"",methods:[],displayName:"FieldLabel"};p.__docgenInfo={description:"",methods:[],displayName:"FieldDescription"};g.__docgenInfo={description:"",methods:[],displayName:"FieldError",props:{errors:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"{ message?: string } | undefined",elements:[{name:"signature",type:"object",raw:"{ message?: string }",signature:{properties:[{key:"message",value:{name:"string",required:!1}}]}},{name:"undefined"}]}],raw:"Array<{ message?: string } | undefined>"},description:""}}};x.__docgenInfo={description:"",methods:[],displayName:"FieldGroup"};const k={title:"Components/Field",component:s,parameters:{layout:"padded"},decorators:[r=>e.jsx("div",{className:"w-100",children:e.jsx(r,{})})]},o={render:()=>e.jsxs(s,{children:[e.jsx(t,{htmlFor:"username",children:"Username"}),e.jsx("input",{id:"username",className:"h-8 rounded-sm bg-muted px-3 text-sm outline-none focus-visible:outline-2 focus-visible:outline-primary-light-active"})]})},d={render:()=>e.jsxs(s,{children:[e.jsx(t,{htmlFor:"email",required:!0,children:"Email"}),e.jsx("input",{id:"email",className:"h-8 rounded-sm bg-destructive-light px-3 text-sm outline-none focus-visible:outline-2 focus-visible:outline-destructive-light-active","aria-invalid":!0}),e.jsx(p,{children:"We only use this for account notices."}),e.jsx(g,{children:"Please enter a valid email address."})]})},u={render:()=>e.jsxs(s,{orientation:"horizontal",children:[e.jsx(t,{htmlFor:"nickname",children:"Nickname"}),e.jsx("input",{id:"nickname",className:"h-8 flex-1 rounded-sm bg-muted px-3 text-sm outline-none focus-visible:outline-2 focus-visible:outline-primary-light-active"})]})},m={render:()=>e.jsxs(x,{children:[e.jsxs(s,{children:[e.jsx(t,{htmlFor:"first",children:"First name"}),e.jsx("input",{id:"first",className:"h-8 rounded-sm bg-muted px-3 text-sm outline-none focus-visible:outline-2 focus-visible:outline-primary-light-active"})]}),e.jsxs(s,{children:[e.jsx(t,{htmlFor:"last",children:"Last name"}),e.jsx("input",{id:"last",className:"h-8 rounded-sm bg-muted px-3 text-sm outline-none focus-visible:outline-2 focus-visible:outline-primary-light-active"}),e.jsx(p,{children:"As shown on your ID."})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Field>\r
      <FieldLabel htmlFor="username">Username</FieldLabel>\r
      <input id="username" className="h-8 rounded-sm bg-muted px-3 text-sm outline-none focus-visible:outline-2 focus-visible:outline-primary-light-active" />\r
    </Field>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Field>\r
      <FieldLabel htmlFor="email" required>\r
        Email\r
      </FieldLabel>\r
      <input id="email" className="h-8 rounded-sm bg-destructive-light px-3 text-sm outline-none focus-visible:outline-2 focus-visible:outline-destructive-light-active" aria-invalid />\r
      <FieldDescription>We only use this for account notices.</FieldDescription>\r
      <FieldError>Please enter a valid email address.</FieldError>\r
    </Field>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Field orientation="horizontal">\r
      <FieldLabel htmlFor="nickname">Nickname</FieldLabel>\r
      <input id="nickname" className="h-8 flex-1 rounded-sm bg-muted px-3 text-sm outline-none focus-visible:outline-2 focus-visible:outline-primary-light-active" />\r
    </Field>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <FieldGroup>\r
      <Field>\r
        <FieldLabel htmlFor="first">First name</FieldLabel>\r
        <input id="first" className="h-8 rounded-sm bg-muted px-3 text-sm outline-none focus-visible:outline-2 focus-visible:outline-primary-light-active" />\r
      </Field>\r
      <Field>\r
        <FieldLabel htmlFor="last">Last name</FieldLabel>\r
        <input id="last" className="h-8 rounded-sm bg-muted px-3 text-sm outline-none focus-visible:outline-2 focus-visible:outline-primary-light-active" />\r
        <FieldDescription>As shown on your ID.</FieldDescription>\r
      </Field>\r
    </FieldGroup>
}`,...m.parameters?.docs?.source}}};const I=["Default","WithDescriptionAndError","Horizontal","Grouped"];export{o as Default,m as Grouped,u as Horizontal,d as WithDescriptionAndError,I as __namedExportsOrder,k as default};
