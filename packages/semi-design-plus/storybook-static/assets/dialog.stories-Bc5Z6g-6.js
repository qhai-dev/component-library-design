import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as _}from"./index-lPyTqghZ.js";import{c as i}from"./cn-Bk382tBs.js";import{B as r}from"./index-ItTLVuoI.js";import{X as b}from"./x-Ce-32ZOG.js";import{D as N}from"./DialogRoot-Dp_71mBF.js";import{D as I,a as O,d as y,b as z,c as F,e as H,f as S}from"./DialogTrigger-D-ByWKGv.js";import"./iframe-BafV5W3V.js";import"./preload-helper-PPVm8Dsz.js";import"./useButton-CX1hIlw-.js";import"./floating-ui.utils.dom-qEQ5XCbi.js";import"./useRenderElement-Bqkd2A0z.js";import"./useIsoLayoutEffect-CCrGtNxN.js";import"./loader-circle-DepsV607.js";import"./createLucideIcon-B-kRpPYY.js";import"./popupStoreUtils-BVI92UKf.js";import"./index-CujQWX5i.js";import"./index-DBz2-nG8.js";import"./useId--90vaHkX.js";import"./constants-CaC-AOuh.js";import"./shared-BwuzQDa5.js";import"./popupStateMapping-If9KDthm.js";import"./addEventListener-C7Nm7Zds.js";import"./ReactStore-CsGgfHeg.js";import"./visuallyHidden-COI6QeQH.js";import"./composite-C72pyEoh.js";import"./engine-DgEYdLxV.js";import"./owner-CvMgaIeV.js";import"./shadowDom-DK1_zfR5.js";import"./createBaseUIEventDetails-BXqh6u2Y.js";import"./index-DzHXYjMk.js";import"./index-Bp2z_mUZ.js";import"./with-selector-DpgWNovl.js";import"./useTimeout-Bvw9d4U2.js";import"./useOnMount-WNj2a00w.js";import"./useOpenChangeComplete-UNa5RW4E.js";import"./useAnimationFrame-DQ9kVddK.js";import"./useTransitionStatus-lkXoOm_V.js";import"./useOpenInteractionType-B_L5s2Nm.js";import"./useValueAsRef-cBqHOkWs.js";import"./useValueChanged-B5k1R_oP.js";import"./store-B9WvlemF.js";import"./getEmptyRootContext-_Db2sTxF.js";import"./useBaseUiId-DAycI4nP.js";import"./composite-BlwPKdlJ.js";import"./inertValue-Be7VyyG3.js";import"./useClick-lt-Rbwhs.js";const E=_("fixed top-20 left-1/2 z-50 flex max-h-[calc(100vh-160px)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 flex-col overflow-y-auto rounded-3xl bg-dialog p-6 text-sm text-foreground shadow-elevated outline-none duration-200 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",{variants:{size:{small:"sm:max-w-[448px]",medium:"sm:max-w-[684px]",large:"sm:max-w-[920px]",full:"sm:max-w-[calc(100vw-64px)]"}},defaultVariants:{size:"small"}});function a({...o}){return e.jsx(N,{"data-slot":"dialog",...o})}function l({...o}){return e.jsx(I,{"data-slot":"dialog-trigger",...o})}function v({...o}){return e.jsx(H,{"data-slot":"dialog-portal",...o})}function n({...o}){return e.jsx(y,{"data-slot":"dialog-close",...o})}function B({className:o,...t}){return e.jsx(S,{"data-slot":"dialog-overlay",className:i("fixed inset-0 isolate z-50 bg-overlay duration-200 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",o),...t})}function s({className:o,children:t,showCloseButton:f=!0,size:w,...T}){return e.jsxs(v,{children:[e.jsx(B,{}),e.jsxs(O,{"data-slot":"dialog-content",className:i(E({size:w}),o),...T,children:[t,f&&e.jsx(y,{"data-slot":"dialog-close","aria-label":"Close",render:e.jsx(r,{variant:"ghost",size:"icon-sm",className:"absolute top-6 right-6 text-text-2 hover:bg-muted hover:text-text-0"}),children:e.jsx(b,{"aria-hidden":!0,className:"size-5"})})]})]})}function d({className:o,...t}){return e.jsx("div",{"data-slot":"dialog-header",className:i("flex flex-col gap-2 pr-8",o),...t})}function m({className:o,children:t,...f}){return e.jsx("div",{"data-slot":"dialog-footer",className:i("flex flex-col-reverse gap-3 sm:flex-row sm:justify-end",o),...f,children:t})}function c({className:o,...t}){return e.jsx(z,{"data-slot":"dialog-title",className:i("text-sm leading-5 font-semibold text-foreground",o),...t})}function h({className:o,...t}){return e.jsx(F,{"data-slot":"dialog-description",className:i("text-sm leading-5 text-text-2",o),...t})}a.__docgenInfo={description:"",methods:[],displayName:"Dialog"};n.__docgenInfo={description:"",methods:[],displayName:"DialogClose"};s.__docgenInfo={description:"",methods:[],displayName:"DialogContent",props:{showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};h.__docgenInfo={description:"",methods:[],displayName:"DialogDescription"};m.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"};d.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"};B.__docgenInfo={description:"",methods:[],displayName:"DialogOverlay"};v.__docgenInfo={description:"",methods:[],displayName:"DialogPortal"};c.__docgenInfo={description:"",methods:[],displayName:"DialogTitle"};l.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger"};const{within:g,expect:j,userEvent:C}=__STORYBOOK_MODULE_TEST__,Ie={title:"Components/Dialog",component:a,parameters:{layout:"centered"}},p={render:()=>e.jsxs(a,{children:[e.jsx(l,{render:e.jsx(r,{children:"Open modal"})}),e.jsxs(s,{children:[e.jsxs(d,{children:[e.jsx(c,{children:"Move to trash?"}),e.jsx(h,{children:"Deleted items will stay in the trash for 30 days before being permanently removed."})]}),e.jsxs(m,{children:[e.jsx(n,{render:e.jsx(r,{variant:"outline",children:"Cancel"})}),e.jsx(n,{render:e.jsx(r,{children:"Confirm"})})]})]})]})},u={render:()=>e.jsx("div",{className:"flex flex-wrap gap-3",children:["small","medium","large","full"].map(o=>e.jsxs(a,{children:[e.jsx(l,{render:e.jsx(r,{variant:"outline",children:o})}),e.jsxs(s,{size:o,children:[e.jsxs(d,{children:[e.jsxs(c,{children:[o," modal"]}),e.jsxs(h,{children:[o==="small"&&"448px",o==="medium"&&"684px",o==="large"&&"920px",o==="full"&&"calc(100vw - 64px)"]})]}),e.jsxs(m,{children:[e.jsx(n,{render:e.jsx(r,{variant:"outline",children:"Cancel"})}),e.jsx(n,{render:e.jsx(r,{children:"Confirm"})})]})]})]},o))})},x={render:()=>e.jsxs(a,{children:[e.jsx(l,{render:e.jsx(r,{variant:"outline",children:"Open"})}),e.jsxs(s,{showCloseButton:!1,children:[e.jsx(d,{children:e.jsx(c,{children:"Custom close"})}),e.jsx(m,{children:e.jsx(n,{render:e.jsx(r,{children:"Got it"})})})]})]})},D={render:()=>e.jsxs(a,{children:[e.jsx(l,{render:e.jsx(r,{children:"Open delete"})}),e.jsxs(s,{children:[e.jsx(d,{children:e.jsx(c,{children:"Confirm deletion"})}),e.jsxs(m,{children:[e.jsx(n,{render:e.jsx(r,{variant:"outline",children:"Cancel"})}),e.jsx(n,{render:e.jsx(r,{variant:"destructive",children:"Delete"})})]})]})]}),play:async()=>{await C.click(g(document.body).getByRole("button",{name:"Open delete"}));const o=await g(document.body).findByText("Confirm deletion");j(o).toBeInTheDocument(),await C.click(g(document.body).getByRole("button",{name:"Delete",hidden:!0})),await new Promise(t=>setTimeout(t,400)),j(g(document.body).queryByText("Confirm deletion")).not.toBeInTheDocument()}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>\r
      <DialogTrigger render={<Button>Open modal</Button>} />\r
      <DialogContent>\r
        <DialogHeader>\r
          <DialogTitle>Move to trash?</DialogTitle>\r
          <DialogDescription>\r
            Deleted items will stay in the trash for 30 days before being permanently\r
            removed.\r
          </DialogDescription>\r
        </DialogHeader>\r
        <DialogFooter>\r
          <DialogClose render={<Button variant="outline">Cancel</Button>} />\r
          <DialogClose render={<Button>Confirm</Button>} />\r
        </DialogFooter>\r
      </DialogContent>\r
    </Dialog>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">\r
      {(["small", "medium", "large", "full"] as const).map(size => <Dialog key={size}>\r
          <DialogTrigger render={<Button variant="outline">{size}</Button>} />\r
          <DialogContent size={size}>\r
            <DialogHeader>\r
              <DialogTitle>{size} modal</DialogTitle>\r
              <DialogDescription>\r
                {size === "small" && "448px"}\r
                {size === "medium" && "684px"}\r
                {size === "large" && "920px"}\r
                {size === "full" && "calc(100vw - 64px)"}\r
              </DialogDescription>\r
            </DialogHeader>\r
            <DialogFooter>\r
              <DialogClose render={<Button variant="outline">Cancel</Button>} />\r
              <DialogClose render={<Button>Confirm</Button>} />\r
            </DialogFooter>\r
          </DialogContent>\r
        </Dialog>)}\r
    </div>
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>\r
      <DialogTrigger render={<Button variant="outline">Open</Button>} />\r
      <DialogContent showCloseButton={false}>\r
        <DialogHeader>\r
          <DialogTitle>Custom close</DialogTitle>\r
        </DialogHeader>\r
        <DialogFooter>\r
          <DialogClose render={<Button>Got it</Button>} />\r
        </DialogFooter>\r
      </DialogContent>\r
    </Dialog>
}`,...x.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>\r
      <DialogTrigger render={<Button>Open delete</Button>} />\r
      <DialogContent>\r
        <DialogHeader>\r
          <DialogTitle>Confirm deletion</DialogTitle>\r
        </DialogHeader>\r
        <DialogFooter>\r
          <DialogClose render={<Button variant="outline">Cancel</Button>} />\r
          <DialogClose render={<Button variant="destructive">Delete</Button>} />\r
        </DialogFooter>\r
      </DialogContent>\r
    </Dialog>,
  play: async () => {
    await userEvent.click(within(document.body).getByRole("button", {
      name: "Open delete"
    }));
    const title = await within(document.body).findByText("Confirm deletion");
    expect(title).toBeInTheDocument();
    await userEvent.click(within(document.body).getByRole("button", {
      name: "Delete",
      hidden: true
    }));
    await new Promise(r => setTimeout(r, 400));
    expect(within(document.body).queryByText("Confirm deletion")).not.toBeInTheDocument();
  }
}`,...D.parameters?.docs?.source}}};const Oe=["Default","Sizes","WithoutCloseButton","InteractiveConfirm"];export{p as Default,D as InteractiveConfirm,u as Sizes,x as WithoutCloseButton,Oe as __namedExportsOrder,Ie as default};
