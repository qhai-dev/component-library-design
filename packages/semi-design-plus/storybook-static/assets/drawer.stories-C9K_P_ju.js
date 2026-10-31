import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as b}from"./index-lPyTqghZ.js";import{c as a}from"./cn-Bk382tBs.js";import{D as T}from"./DialogRoot-Dp_71mBF.js";import{D as _,a as B,b as C,c as N,d as I,e as O,f as P}from"./DialogTrigger-D-ByWKGv.js";import{B as o}from"./index-ItTLVuoI.js";import"./iframe-BafV5W3V.js";import"./preload-helper-PPVm8Dsz.js";import"./popupStoreUtils-BVI92UKf.js";import"./index-CujQWX5i.js";import"./index-DBz2-nG8.js";import"./useRenderElement-Bqkd2A0z.js";import"./useId--90vaHkX.js";import"./floating-ui.utils.dom-qEQ5XCbi.js";import"./useIsoLayoutEffect-CCrGtNxN.js";import"./constants-CaC-AOuh.js";import"./shared-BwuzQDa5.js";import"./popupStateMapping-If9KDthm.js";import"./addEventListener-C7Nm7Zds.js";import"./ReactStore-CsGgfHeg.js";import"./visuallyHidden-COI6QeQH.js";import"./composite-C72pyEoh.js";import"./engine-DgEYdLxV.js";import"./owner-CvMgaIeV.js";import"./shadowDom-DK1_zfR5.js";import"./createBaseUIEventDetails-BXqh6u2Y.js";import"./index-DzHXYjMk.js";import"./index-Bp2z_mUZ.js";import"./with-selector-DpgWNovl.js";import"./useTimeout-Bvw9d4U2.js";import"./useOnMount-WNj2a00w.js";import"./useOpenChangeComplete-UNa5RW4E.js";import"./useAnimationFrame-DQ9kVddK.js";import"./useTransitionStatus-lkXoOm_V.js";import"./useOpenInteractionType-B_L5s2Nm.js";import"./useValueAsRef-cBqHOkWs.js";import"./useValueChanged-B5k1R_oP.js";import"./store-B9WvlemF.js";import"./getEmptyRootContext-_Db2sTxF.js";import"./useButton-CX1hIlw-.js";import"./useBaseUiId-DAycI4nP.js";import"./composite-BlwPKdlJ.js";import"./inertValue-Be7VyyG3.js";import"./useClick-lt-Rbwhs.js";import"./loader-circle-DepsV607.js";import"./createLucideIcon-B-kRpPYY.js";const H=b("fixed z-50 flex flex-col overflow-y-auto bg-dialog text-sm text-foreground shadow-elevated outline-none duration-[180ms] data-open:animate-in data-closed:animate-out",{variants:{side:{right:"inset-y-0 right-0 h-full w-[448px] max-w-[calc(100%-2rem)] data-open:slide-in-from-right data-closed:slide-out-to-right",left:"inset-y-0 left-0 h-full w-[448px] max-w-[calc(100%-2rem)] data-open:slide-in-from-left data-closed:slide-out-to-left",top:"inset-x-0 top-0 max-h-[calc(100%-2rem)] w-full data-open:slide-in-from-top data-closed:slide-out-to-top",bottom:"inset-x-0 bottom-0 max-h-[calc(100%-2rem)] w-full data-open:slide-in-from-bottom data-closed:slide-out-to-bottom"}},defaultVariants:{side:"right"}});function n({...r}){return e.jsx(T,{"data-slot":"drawer",...r})}function p({...r}){return e.jsx(_,{"data-slot":"drawer-trigger",...r})}function y({...r}){return e.jsx(O,{"data-slot":"drawer-portal",...r})}function m({...r}){return e.jsx(I,{"data-slot":"drawer-close",...r})}function j({className:r,...t}){return e.jsx(P,{"data-slot":"drawer-overlay",className:a("fixed inset-0 isolate z-50 bg-overlay duration-[180ms] data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",r),...t})}function w({className:r,children:t,side:i="right",...v}){return e.jsxs(y,{children:[e.jsx(j,{}),e.jsx(B,{"data-slot":"drawer-content","data-side":i,className:a(H({side:i}),r),...v,children:t})]})}function u({className:r,...t}){return e.jsx("div",{"data-slot":"drawer-header",className:a("flex flex-col gap-2 p-6 pb-5",r),...t})}function x({className:r,children:t,...i}){return e.jsx("div",{"data-slot":"drawer-footer",className:a("mt-auto flex flex-col-reverse gap-3 p-6 sm:flex-row sm:justify-end",r),...i,children:t})}function D({className:r,...t}){return e.jsx(C,{"data-slot":"drawer-title",className:a("text-lg leading-6 font-semibold text-foreground",r),...t})}function h({className:r,...t}){return e.jsx(N,{"data-slot":"drawer-description",className:a("text-sm leading-5 text-text-2",r),...t})}n.__docgenInfo={description:"",methods:[],displayName:"Drawer"};y.__docgenInfo={description:"",methods:[],displayName:"DrawerPortal"};j.__docgenInfo={description:"",methods:[],displayName:"DrawerOverlay"};p.__docgenInfo={description:"",methods:[],displayName:"DrawerTrigger"};m.__docgenInfo={description:"",methods:[],displayName:"DrawerClose"};w.__docgenInfo={description:"",methods:[],displayName:"DrawerContent",props:{side:{defaultValue:{value:'"right"',computed:!1},required:!1}},composes:["VariantProps"]};u.__docgenInfo={description:"",methods:[],displayName:"DrawerHeader"};x.__docgenInfo={description:"",methods:[],displayName:"DrawerFooter"};D.__docgenInfo={description:"",methods:[],displayName:"DrawerTitle"};h.__docgenInfo={description:"",methods:[],displayName:"DrawerDescription"};const{within:s,expect:f,userEvent:g}=__STORYBOOK_MODULE_TEST__,_e={title:"Components/Drawer",component:n},d={render:()=>e.jsxs(n,{children:[e.jsx(p,{render:e.jsx(o,{children:"Open drawer"})}),e.jsxs(w,{children:[e.jsxs(u,{children:[e.jsx(D,{children:"Activity log"}),e.jsx(h,{children:"The body scrolls freely — no header is rendered by the panel itself."})]}),e.jsx("div",{className:"flex flex-1 flex-col gap-2 px-6 py-4 text-sm text-text-1",children:Array.from({length:24},(r,t)=>e.jsxs("div",{className:"rounded-sm bg-muted px-3 py-2",children:["Event #",t+1]},t))}),e.jsx(x,{children:e.jsx(m,{render:e.jsx(o,{children:"Close"})})})]})]})},l={render:()=>e.jsx("div",{className:"flex flex-wrap gap-3",children:["top","right","bottom","left"].map(r=>e.jsxs(n,{children:[e.jsx(p,{render:e.jsx(o,{variant:"outline",children:r})}),e.jsxs(w,{side:r,children:[e.jsxs(u,{children:[e.jsxs(D,{children:[r," drawer"]}),e.jsx(h,{children:"Same panel spec as the side sheet."})]}),e.jsx(x,{children:e.jsx(m,{render:e.jsx(o,{variant:"outline",children:"Close"})})})]})]},r))})},c={render:()=>e.jsxs(n,{children:[e.jsx(p,{render:e.jsx(o,{children:"Open panel"})}),e.jsxs(w,{children:[e.jsx(u,{children:e.jsx(D,{children:"Plain panel"})}),e.jsx(x,{children:e.jsx(m,{render:e.jsx(o,{children:"Done"})})})]})]}),play:async()=>{await g.click(s(document.body).getByRole("button",{name:"Open panel"}));const r=await s(document.body).findByText("Plain panel");f(r).toBeInTheDocument(),f(r.closest("[data-slot='drawer-content']")).toHaveClass("bg-dialog","w-[448px]"),await g.click(s(document.body).getByRole("button",{name:"Done"})),await new Promise(t=>setTimeout(t,400)),f(s(document.body).queryByText("Plain panel")).not.toBeInTheDocument()}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Drawer>\r
      <DrawerTrigger render={<Button>Open drawer</Button>} />\r
      <DrawerContent>\r
        <DrawerHeader>\r
          <DrawerTitle>Activity log</DrawerTitle>\r
          <DrawerDescription>\r
            The body scrolls freely — no header is rendered by the panel itself.\r
          </DrawerDescription>\r
        </DrawerHeader>\r
        <div className="flex flex-1 flex-col gap-2 px-6 py-4 text-sm text-text-1">\r
          {Array.from({
          length: 24
        }, (_, i) => <div key={i} className="rounded-sm bg-muted px-3 py-2">\r
              Event #{i + 1}\r
            </div>)}\r
        </div>\r
        <DrawerFooter>\r
          <DrawerClose render={<Button>Close</Button>} />\r
        </DrawerFooter>\r
      </DrawerContent>\r
    </Drawer>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">\r
      {(["top", "right", "bottom", "left"] as const).map(side => <Drawer key={side}>\r
          <DrawerTrigger render={<Button variant="outline">{side}</Button>} />\r
          <DrawerContent side={side}>\r
            <DrawerHeader>\r
              <DrawerTitle>{side} drawer</DrawerTitle>\r
              <DrawerDescription>Same panel spec as the side sheet.</DrawerDescription>\r
            </DrawerHeader>\r
            <DrawerFooter>\r
              <DrawerClose render={<Button variant="outline">Close</Button>} />\r
            </DrawerFooter>\r
          </DrawerContent>\r
        </Drawer>)}\r
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Drawer>\r
      <DrawerTrigger render={<Button>Open panel</Button>} />\r
      <DrawerContent>\r
        <DrawerHeader>\r
          <DrawerTitle>Plain panel</DrawerTitle>\r
        </DrawerHeader>\r
        <DrawerFooter>\r
          <DrawerClose render={<Button>Done</Button>} />\r
        </DrawerFooter>\r
      </DrawerContent>\r
    </Drawer>,
  play: async () => {
    await userEvent.click(within(document.body).getByRole("button", {
      name: "Open panel"
    }));
    const title = await within(document.body).findByText("Plain panel");
    expect(title).toBeInTheDocument();
    expect(title.closest("[data-slot='drawer-content']")).toHaveClass("bg-dialog", "w-[448px]");
    await userEvent.click(within(document.body).getByRole("button", {
      name: "Done"
    }));
    await new Promise(r => setTimeout(r, 400));
    expect(within(document.body).queryByText("Plain panel")).not.toBeInTheDocument();
  }
}`,...c.parameters?.docs?.source}}};const Be=["Default","Sides","InteractiveOpenClose"];export{d as Default,c as InteractiveOpenClose,l as Sides,Be as __namedExportsOrder,_e as default};
