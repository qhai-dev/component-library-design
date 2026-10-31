import{j as a}from"./jsx-runtime-u17CrQMm.js";import{c as M}from"./cn-Bk382tBs.js";import{r as l}from"./iframe-BafV5W3V.js";import{u as me}from"./useControlled-BkzPNp9n.js";import{f as fe,a as pe,m as he,u as q,E as be}from"./useRenderElement-Bqkd2A0z.js";import{u as ge}from"./useIsoLayoutEffect-CCrGtNxN.js";import{v as xe,a as ve}from"./visuallyHidden-COI6QeQH.js";import{u as ke}from"./useBaseUiId-DAycI4nP.js";import{f as we,u as ye,a as Ce,b as Se,c as ze}from"./LabelableContext-80PgkTyF.js";import{u as je}from"./useAriaLabelledBy-DAYRRT6R.js";import{u as Ee}from"./useLabelableId-BEp5zwEZ.js";import{c as Be,n as Ne}from"./createBaseUIEventDetails-BXqh6u2Y.js";import{u as _e}from"./useValueChanged-B5k1R_oP.js";import{u as Pe}from"./useButton-CX1hIlw-.js";import{g as Ie}from"./floating-ui.utils.dom-qEQ5XCbi.js";import"./preload-helper-PPVm8Dsz.js";import"./useId--90vaHkX.js";const H=l.createContext(void 0);function Re(){const e=l.useContext(H);if(e===void 0)throw new Error(fe(63));return e}let F=(function(e){return e.checked="data-checked",e.unchecked="data-unchecked",e.disabled="data-disabled",e.readonly="data-readonly",e.required="data-required",e.valid="data-valid",e.invalid="data-invalid",e.touched="data-touched",e.dirty="data-dirty",e.filled="data-filled",e.focused="data-focused",e})({});const W={...we,checked(e){return e?{[F.checked]:""}:{[F.unchecked]:""}}},Te=l.forwardRef(function(r,o){const{checked:j,className:U,defaultChecked:E,"aria-labelledby":C,form:p,id:Y,inputRef:J,name:B,nativeButton:h=!1,onCheckedChange:D,readOnly:u=!1,required:b=!1,disabled:G=!1,render:Me,uncheckedValue:N,value:_,style:Fe,...Q}=r,{clearErrors:X}=ye(),{state:P,setTouched:Z,setDirty:$,validityData:A,setFilled:S,setFocused:I,validationMode:ee,disabled:ae,name:te,validation:m}=Ce(),{labelId:re}=Se(),d=ae||G,f=te??B,i=l.useRef(null),se=pe(i,J,m.inputRef),g=l.useRef(null),R=ke(),T=Ee({id:Y,implicit:!1,controlRef:g}),K=h?void 0:T,[n,de]=me({controlled:j,default:!!E,name:"Switch",state:"checked"});ze(g,R,n,void 0,!d,B),ge(()=>{i.current&&S(i.current.checked)},[i,S]),_e(n,()=>{X(f),$(n!==A.initialValue),S(n),m.change(n)});const{getButtonProps:ne,buttonRef:ie}=Pe({disabled:d,native:h}),le=je(C,re,i,!h,K),ce={id:h?T:R,role:"switch","aria-checked":n,"aria-readonly":u||void 0,"aria-required":b||void 0,"aria-labelledby":le,onFocus(){d||I(!0)},onBlur(){const t=i.current;!t||d||(Z(!0),I(!1),ee==="onBlur"&&m.commit(t.checked))},onClick(t){if(u||d)return;t.preventDefault();const c=i.current;c&&c.dispatchEvent(new(Ie(c)).PointerEvent("click",{bubbles:!0,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,altKey:t.altKey,metaKey:t.metaKey}))}},oe=he({checked:n,disabled:d,form:p,id:K,name:f,required:b,style:f?xe:ve,tabIndex:-1,type:"checkbox","aria-hidden":!0,ref:se,onChange(t){if(t.nativeEvent.defaultPrevented)return;if(u){t.preventDefault();return}const c=t.currentTarget.checked,O=Be(Ne,t.nativeEvent);D?.(c,O),!O.isCanceled&&de(c)},onFocus(){g.current?.focus()}},t=>m.getValidationProps(d,t),_!==void 0?{value:_}:be),L=l.useMemo(()=>({...P,checked:n,disabled:d,readOnly:u,required:b}),[P,n,d,u,b]),ue=q("span",r,{state:L,ref:[o,g,ie],props:[ce,Q,ne,t=>m.getValidationProps(d,t)],stateAttributesMapping:W});return a.jsxs(H.Provider,{value:L,children:[ue,!n&&f&&N!==void 0&&a.jsx("input",{type:"hidden",form:p,name:f,value:N,disabled:d}),a.jsx("input",{...oe,suppressHydrationWarning:!0})]})}),Ke=l.forwardRef(function(r,o){const{render:j,className:U,style:E,...C}=r,p=Re();return q("span",r,{state:p,ref:o,stateAttributesMapping:W,props:C})});function s({className:e,size:r="default",...o}){return a.jsx(Te,{"data-slot":"switch","data-size":r,className:M("group/switch relative inline-flex shrink-0 cursor-pointer items-center rounded-full border border-transparent outline-none transition-colors duration-200 ease-in-out","data-[size=default]:h-6 data-[size=default]:w-10 data-[size=sm]:h-4 data-[size=sm]:w-[26px]","data-unchecked:bg-muted","hover:data-unchecked:bg-muted-hover active:data-unchecked:bg-muted-active","data-checked:bg-primary","hover:data-checked:bg-primary-hover active:data-checked:bg-primary-active","data-disabled:cursor-not-allowed","data-disabled:data-unchecked:bg-transparent data-disabled:data-unchecked:border-border data-disabled:data-unchecked:hover:bg-transparent data-disabled:data-unchecked:active:bg-transparent","data-disabled:data-checked:border-transparent data-disabled:data-checked:bg-primary-disabled data-disabled:data-checked:hover:bg-primary-disabled","focus-visible:outline-2 focus-visible:outline-primary-light-active",e),...o,children:a.jsx(Ke,{"data-slot":"switch-thumb",className:M("pointer-events-none block rounded-full bg-white transition-transform duration-200 ease-in-out","shadow-[0_4px_6px_rgba(0,0,0,0.1),0_0_1px_rgba(0,0,0,0.3)]","group-data-[size=default]/switch:data-unchecked:translate-x-[2px] group-data-[size=default]/switch:data-checked:translate-x-[18px]","group-data-[size=sm]/switch:data-unchecked:translate-x-[1px] group-data-[size=sm]/switch:data-checked:translate-x-[11px]","group-data-[size=default]/switch:size-[18px] group-data-[size=sm]/switch:size-3","data-disabled:shadow-none data-disabled:data-unchecked:border data-disabled:data-unchecked:border-border")})})}s.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "default"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"default"'}]},description:"Semi sizes: default 40x24, sm 26x16.",defaultValue:{value:'"default"',computed:!1}}}};const{within:Le,expect:z,fn:Oe,userEvent:V}=__STORYBOOK_MODULE_TEST__,ra={title:"Components/Switch",component:s,parameters:{layout:"centered"}},x={args:{"aria-label":"toggle"}},v={render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(s,{"aria-label":"off"}),a.jsx(s,{defaultChecked:!0,"aria-label":"on"}),a.jsx(s,{disabled:!0,"aria-label":"disabled"}),a.jsx(s,{disabled:!0,defaultChecked:!0,"aria-label":"disabled on"})]})},k={render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(s,{size:"sm",defaultChecked:!0,"aria-label":"small on"}),a.jsx(s,{size:"sm","aria-label":"small off"}),a.jsx(s,{defaultChecked:!0,"aria-label":"default on"}),a.jsx(s,{"aria-label":"default off"})]})},w={render:()=>a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[a.jsx(s,{defaultChecked:!0})," Notifications"]}),a.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[a.jsx(s,{size:"sm"})," Compact mode"]})]})},y={args:{"aria-label":"interactive",onCheckedChange:Oe()},play:async({args:e})=>{const r=Le(document.body).getByRole("switch",{name:"interactive"});await V.click(r),await z(r).toBeChecked(),await z(e.onCheckedChange).toHaveBeenCalledOnce(),await V.click(r),await z(r).not.toBeChecked()}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "toggle"
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">\r
      <Switch aria-label="off" />\r
      <Switch defaultChecked aria-label="on" />\r
      <Switch disabled aria-label="disabled" />\r
      <Switch disabled defaultChecked aria-label="disabled on" />\r
    </div>
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">\r
      <Switch size="sm" defaultChecked aria-label="small on" />\r
      <Switch size="sm" aria-label="small off" />\r
      <Switch defaultChecked aria-label="default on" />\r
      <Switch aria-label="default off" />\r
    </div>
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
      <label className="flex items-center gap-2 text-sm">\r
        <Switch defaultChecked /> Notifications\r
      </label>\r
      <label className="flex items-center gap-2 text-sm">\r
        <Switch size="sm" /> Compact mode\r
      </label>\r
    </div>
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "interactive",
    onCheckedChange: fn()
  },
  play: async ({
    args
  }) => {
    const sw = within(document.body).getByRole("switch", {
      name: "interactive"
    });
    await userEvent.click(sw);
    await expect(sw).toBeChecked();
    await expect(args.onCheckedChange).toHaveBeenCalledOnce();
    await userEvent.click(sw);
    await expect(sw).not.toBeChecked();
  }
}`,...y.parameters?.docs?.source}}};const sa=["Default","States","Sizes","WithLabels","InteractiveToggle"];export{x as Default,y as InteractiveToggle,k as Sizes,v as States,w as WithLabels,sa as __namedExportsOrder,ra as default};
