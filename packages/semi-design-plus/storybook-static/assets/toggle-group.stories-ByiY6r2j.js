import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as g}from"./iframe-BafV5W3V.js";import{c as q}from"./cn-Bk382tBs.js";import{T as Z,a as ee,t as ae,B,I as C,U as w}from"./index-DJP6M9od.js";import{u as re}from"./floating-ui.utils.dom-qEQ5XCbi.js";import{u as le}from"./useControlled-BkzPNp9n.js";import{u as te,c as oe}from"./useRenderElement-Bqkd2A0z.js";import{C as ne}from"./CompositeRoot-Dvb_W7LZ.js";import{u as ie}from"./ToolbarRootContext--cDDWkLm.js";import{c as H}from"./createLucideIcon-B-kRpPYY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-lPyTqghZ.js";import"./useBaseUiId-DAycI4nP.js";import"./useId--90vaHkX.js";import"./useButton-CX1hIlw-.js";import"./useIsoLayoutEffect-CCrGtNxN.js";import"./CompositeItem-zuiK1hRL.js";import"./useCompositeItem-Dl7D7PlP.js";import"./useCompositeListItem-CW3shZpF.js";import"./createBaseUIEventDetails-BXqh6u2Y.js";import"./CompositeList-D_xDhQuk.js";import"./isElementDisabled-CwHw_lZC.js";import"./composite-BlwPKdlJ.js";import"./composite-C72pyEoh.js";import"./shared-BwuzQDa5.js";import"./constants-CaC-AOuh.js";import"./shadowDom-DK1_zfR5.js";import"./DirectionContext-Domt6lLV.js";const se=[["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 18H5",key:"18s9l3"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],P=H("align-center",se);const de=[["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 18H3",key:"1amg6g"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],L=H("align-left",de);const ue=[["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M21 18H7",key:"1ygte8"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],$=H("align-right",ue),ce=g.createContext(void 0);function ge(r){return g.useContext(ce)}let pe=(function(r){return r.disabled="data-disabled",r.orientation="data-orientation",r.multiple="data-multiple",r})({});const O={multiple(r){return r?{[pe.multiple]:""}:null}},me=g.forwardRef(function(l,i){const{defaultValue:o,disabled:s=!1,loopFocus:n=!0,onValueChange:d,orientation:u="horizontal",multiple:m=!1,value:c,className:J,render:K,style:W,...M}=l,y=ie(),F=ge(),R=g.useMemo(()=>c!==void 0||o!==void 0,[c,o]),A=(y?.disabled??!1)||(F?.disabled??!1)||s,[b,D]=le({controlled:c,default:c===void 0?o??oe:void 0,name:"ToggleGroup",state:"value"}),U=re((V,E,N)=>{let p;m?(p=b.slice(),E?p.push(V):p.splice(b.indexOf(V),1)):p=E?[V]:[],d?.(p,N),!N.isCanceled&&D(p)}),S={disabled:A,multiple:m,orientation:u},Q=g.useMemo(()=>({disabled:A,orientation:u,setGroupValue:U,value:b,isValueInitialized:R}),[A,u,U,b,R]),z={role:"group"},X=te("div",l,{enabled:!!y,state:S,ref:i,props:[z,M],stateAttributesMapping:O});return e.jsx(Z.Provider,{value:Q,children:y?X:e.jsx(ne,{render:K,className:J,style:W,state:S,refs:[i],props:[z,M],stateAttributesMapping:O,loopFocus:n,enableHomeAndEndKeys:!0,orientation:u})})}),Y=g.createContext({size:"default",variant:"default",spacing:2,orientation:"horizontal"});function t({className:r,variant:l,size:i,spacing:o=2,orientation:s="horizontal",children:n,...d}){return e.jsx(me,{"data-slot":"toggle-group","data-variant":l,"data-size":i,"data-spacing":o,"data-orientation":s,style:{"--gap":`${o*.25}rem`},className:q("flex w-fit items-center gap-(--gap)",s==="vertical"&&"flex-col items-stretch",r),...d,children:e.jsx(Y.Provider,{value:{variant:l,size:i,spacing:o,orientation:s},children:n})})}function a({className:r,children:l,variant:i="default",size:o="default",...s}){const n=g.useContext(Y),d=n.variant||i,u=n.size||o,m=n.spacing===0,c=n.orientation==="vertical";return e.jsx(ee,{"data-slot":"toggle-group-item","data-variant":d,"data-size":u,"data-spacing":n.spacing,className:q(ae({variant:d,size:u}),"shrink-0 focus-visible:z-10",m&&["rounded-none px-2",c?"first:rounded-t-sm last:rounded-b-sm":"first:rounded-l-sm last:rounded-r-sm",d==="outline"&&(c?"border-t-0 first:border-t":"border-l-0 first:border-l")],r),...s,children:l})}t.__docgenInfo={description:"",methods:[],displayName:"ToggleGroup",props:{spacing:{required:!1,tsType:{name:"number"},description:"Gap between items in 4px steps (Semi spacing scale); 0 joins the items.",defaultValue:{value:"2",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"Layout direction of the group.",defaultValue:{value:'"horizontal"',computed:!1}}},composes:["VariantProps"]};a.__docgenInfo={description:"",methods:[],displayName:"ToggleGroupItem",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"default"',computed:!1},required:!1}}};const{within:k,expect:j,fn:be,userEvent:_}=__STORYBOOK_MODULE_TEST__,$e={title:"Components/ToggleGroup",component:t,parameters:{layout:"centered"}},h={render:()=>e.jsxs(t,{defaultValue:["left"],"aria-label":"alignment",children:[e.jsx(a,{value:"left","aria-label":"Align left",children:e.jsx(L,{"aria-hidden":!0})}),e.jsx(a,{value:"center","aria-label":"Align center",children:e.jsx(P,{"aria-hidden":!0})}),e.jsx(a,{value:"right","aria-label":"Align right",children:e.jsx($,{"aria-hidden":!0})})]})},v={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(t,{defaultValue:["bold"],"aria-label":"borderless",children:[e.jsxs(a,{value:"bold","aria-label":"Bold",children:[e.jsx(B,{"aria-hidden":!0})," Bold"]}),e.jsxs(a,{value:"italic","aria-label":"Italic",children:[e.jsx(C,{"aria-hidden":!0})," Italic"]}),e.jsxs(a,{value:"underline","aria-label":"Underline",children:[e.jsx(w,{"aria-hidden":!0})," Underline"]})]}),e.jsxs(t,{variant:"outline",defaultValue:["bold"],"aria-label":"outline",children:[e.jsxs(a,{value:"bold","aria-label":"Bold",children:[e.jsx(B,{"aria-hidden":!0})," Bold"]}),e.jsxs(a,{value:"italic","aria-label":"Italic",children:[e.jsx(C,{"aria-hidden":!0})," Italic"]}),e.jsxs(a,{value:"underline","aria-label":"Underline",children:[e.jsx(w,{"aria-hidden":!0})," Underline"]})]})]})},f={render:()=>e.jsxs(t,{multiple:!0,defaultValue:["bold","underline"],"aria-label":"styles",children:[e.jsx(a,{value:"bold","aria-label":"Bold",children:e.jsx(B,{"aria-hidden":!0})}),e.jsx(a,{value:"italic","aria-label":"Italic",children:e.jsx(C,{"aria-hidden":!0})}),e.jsx(a,{value:"underline","aria-label":"Underline",children:e.jsx(w,{"aria-hidden":!0})})]})},x={render:()=>e.jsxs(t,{variant:"outline",spacing:0,defaultValue:["center"],"aria-label":"joined",children:[e.jsx(a,{value:"left","aria-label":"Align left",children:e.jsx(L,{"aria-hidden":!0})}),e.jsx(a,{value:"center","aria-label":"Align center",children:e.jsx(P,{"aria-hidden":!0})}),e.jsx(a,{value:"right","aria-label":"Align right",children:e.jsx($,{"aria-hidden":!0})})]})},T={render:()=>e.jsxs(t,{orientation:"vertical",defaultValue:["top"],"aria-label":"vertical",children:[e.jsx(a,{value:"top",children:"Top"}),e.jsx(a,{value:"middle",children:"Middle"}),e.jsx(a,{value:"bottom",children:"Bottom"})]})},G={args:{"aria-label":"interactive"},play:async()=>{const r=k(document.body).getByRole("button",{name:"A"}),l=k(document.body).getByRole("button",{name:"B"});await _.click(r),await j(r).toHaveAttribute("aria-pressed","true"),await _.click(l),await j(l).toHaveAttribute("aria-pressed","true"),await j(r).toHaveAttribute("aria-pressed","false")},render:()=>e.jsxs(t,{"aria-label":"interactive",children:[e.jsx(a,{value:"a",children:"A"}),e.jsx(a,{value:"b",children:"B"})]})},I={args:{onValueChange:be()},render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{value:"a",children:"A"}),e.jsx(a,{value:"b",children:"B"})]}),play:async({args:r})=>{await _.click(k(document.body).getByRole("button",{name:"A"})),await j(r.onValueChange).toHaveBeenCalledOnce()}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup defaultValue={["left"]} aria-label="alignment">\r
      <ToggleGroupItem value="left" aria-label="Align left">\r
        <AlignLeft aria-hidden />\r
      </ToggleGroupItem>\r
      <ToggleGroupItem value="center" aria-label="Align center">\r
        <AlignCenter aria-hidden />\r
      </ToggleGroupItem>\r
      <ToggleGroupItem value="right" aria-label="Align right">\r
        <AlignRight aria-hidden />\r
      </ToggleGroupItem>\r
    </ToggleGroup>
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <ToggleGroup defaultValue={["bold"]} aria-label="borderless">\r
        <ToggleGroupItem value="bold" aria-label="Bold">\r
        <Bold aria-hidden /> Bold\r
        </ToggleGroupItem>\r
        <ToggleGroupItem value="italic" aria-label="Italic">\r
        <Italic aria-hidden /> Italic\r
        </ToggleGroupItem>\r
        <ToggleGroupItem value="underline" aria-label="Underline">\r
        <Underline aria-hidden /> Underline\r
        </ToggleGroupItem>\r
      </ToggleGroup>\r
      <ToggleGroup variant="outline" defaultValue={["bold"]} aria-label="outline">\r
        <ToggleGroupItem value="bold" aria-label="Bold">\r
        <Bold aria-hidden /> Bold\r
        </ToggleGroupItem>\r
        <ToggleGroupItem value="italic" aria-label="Italic">\r
        <Italic aria-hidden /> Italic\r
        </ToggleGroupItem>\r
        <ToggleGroupItem value="underline" aria-label="Underline">\r
        <Underline aria-hidden /> Underline\r
        </ToggleGroupItem>\r
      </ToggleGroup>\r
    </div>
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup multiple defaultValue={["bold", "underline"]} aria-label="styles">\r
      <ToggleGroupItem value="bold" aria-label="Bold">\r
        <Bold aria-hidden />\r
      </ToggleGroupItem>\r
      <ToggleGroupItem value="italic" aria-label="Italic">\r
        <Italic aria-hidden />\r
      </ToggleGroupItem>\r
      <ToggleGroupItem value="underline" aria-label="Underline">\r
        <Underline aria-hidden />\r
      </ToggleGroupItem>\r
    </ToggleGroup>
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup variant="outline" spacing={0} defaultValue={["center"]} aria-label="joined">\r
      <ToggleGroupItem value="left" aria-label="Align left">\r
        <AlignLeft aria-hidden />\r
      </ToggleGroupItem>\r
      <ToggleGroupItem value="center" aria-label="Align center">\r
        <AlignCenter aria-hidden />\r
      </ToggleGroupItem>\r
      <ToggleGroupItem value="right" aria-label="Align right">\r
        <AlignRight aria-hidden />\r
      </ToggleGroupItem>\r
    </ToggleGroup>
}`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup orientation="vertical" defaultValue={["top"]} aria-label="vertical">\r
      <ToggleGroupItem value="top">Top</ToggleGroupItem>\r
      <ToggleGroupItem value="middle">Middle</ToggleGroupItem>\r
      <ToggleGroupItem value="bottom">Bottom</ToggleGroupItem>\r
    </ToggleGroup>
}`,...T.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "interactive"
  },
  play: async () => {
    const a = within(document.body).getByRole("button", {
      name: "A"
    });
    const b = within(document.body).getByRole("button", {
      name: "B"
    });
    await userEvent.click(a);
    await expect(a).toHaveAttribute("aria-pressed", "true");
    await userEvent.click(b);
    await expect(b).toHaveAttribute("aria-pressed", "true");
    await expect(a).toHaveAttribute("aria-pressed", "false");
  },
  render: () => <ToggleGroup aria-label="interactive">\r
      <ToggleGroupItem value="a">A</ToggleGroupItem>\r
      <ToggleGroupItem value="b">B</ToggleGroupItem>\r
    </ToggleGroup>
}`,...G.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    onValueChange: fn()
  },
  render: args => <ToggleGroup {...args}>\r
      <ToggleGroupItem value="a">A</ToggleGroupItem>\r
      <ToggleGroupItem value="b">B</ToggleGroupItem>\r
    </ToggleGroup>,
  play: async ({
    args
  }) => {
    await userEvent.click(within(document.body).getByRole("button", {
      name: "A"
    }));
    await expect(args.onValueChange).toHaveBeenCalledOnce();
  }
}`,...I.parameters?.docs?.source}}};const Ye=["Default","Variants","Multiple","Joined","Vertical","InteractiveSingle","WithCallback"];export{h as Default,G as InteractiveSingle,x as Joined,f as Multiple,v as Variants,T as Vertical,I as WithCallback,Ye as __namedExportsOrder,$e as default};
