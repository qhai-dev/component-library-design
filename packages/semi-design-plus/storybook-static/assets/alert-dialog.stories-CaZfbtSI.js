import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as o}from"./cn-Bk382tBs.js";import{B as l}from"./index-ItTLVuoI.js";import{u as _,D as w,a as B,b as N,c as I,d as P,e as M,f as R}from"./DialogTrigger-D-ByWKGv.js";import{C as F}from"./circle-alert-BS9aWAO4.js";import"./index-lPyTqghZ.js";import"./iframe-BafV5W3V.js";import"./preload-helper-PPVm8Dsz.js";import"./useButton-CX1hIlw-.js";import"./floating-ui.utils.dom-qEQ5XCbi.js";import"./useRenderElement-Bqkd2A0z.js";import"./useIsoLayoutEffect-CCrGtNxN.js";import"./loader-circle-DepsV607.js";import"./createLucideIcon-B-kRpPYY.js";import"./popupStoreUtils-BVI92UKf.js";import"./index-CujQWX5i.js";import"./index-DBz2-nG8.js";import"./useId--90vaHkX.js";import"./constants-CaC-AOuh.js";import"./shared-BwuzQDa5.js";import"./popupStateMapping-If9KDthm.js";import"./addEventListener-C7Nm7Zds.js";import"./ReactStore-CsGgfHeg.js";import"./visuallyHidden-COI6QeQH.js";import"./composite-C72pyEoh.js";import"./engine-DgEYdLxV.js";import"./owner-CvMgaIeV.js";import"./shadowDom-DK1_zfR5.js";import"./createBaseUIEventDetails-BXqh6u2Y.js";import"./index-DzHXYjMk.js";import"./index-Bp2z_mUZ.js";import"./with-selector-DpgWNovl.js";import"./useTimeout-Bvw9d4U2.js";import"./useOnMount-WNj2a00w.js";import"./useOpenChangeComplete-UNa5RW4E.js";import"./useAnimationFrame-DQ9kVddK.js";import"./useTransitionStatus-lkXoOm_V.js";import"./useOpenInteractionType-B_L5s2Nm.js";import"./useValueAsRef-cBqHOkWs.js";import"./useValueChanged-B5k1R_oP.js";import"./store-B9WvlemF.js";import"./getEmptyRootContext-_Db2sTxF.js";import"./useBaseUiId-DAycI4nP.js";import"./composite-BlwPKdlJ.js";import"./inertValue-Be7VyyG3.js";import"./useClick-lt-Rbwhs.js";function H(t){return _(t,"alert-dialog")}const O=w;function i({...t}){return e.jsx(H,{"data-slot":"alert-dialog",...t})}function s({...t}){return e.jsx(O,{"data-slot":"alert-dialog-trigger",...t})}function y({...t}){return e.jsx(M,{"data-slot":"alert-dialog-portal",...t})}function C({className:t,...r}){return e.jsx(R,{"data-slot":"alert-dialog-overlay",className:o("fixed inset-0 isolate z-50 bg-overlay duration-200 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",t),...r})}function d({className:t,children:r,...a}){return e.jsxs(y,{children:[e.jsx(C,{}),e.jsx(B,{"data-slot":"alert-dialog-content",className:o("fixed top-20 left-1/2 z-50 flex max-h-[calc(100vh-160px)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 flex-col gap-6 overflow-y-auto rounded-3xl bg-dialog p-6 text-sm text-foreground shadow-elevated outline-none duration-200 sm:max-w-[448px] data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",t),...a,children:r})]})}function c({className:t,...r}){return e.jsx("div",{"data-slot":"alert-dialog-header",className:o("flex flex-col gap-2",t),...r})}function m({className:t,children:r,...a}){return e.jsx("div",{"data-slot":"alert-dialog-footer",className:o("flex flex-col-reverse gap-3 sm:flex-row sm:justify-end",t),...a,children:r})}function b({className:t,...r}){return e.jsx("div",{"data-slot":"alert-dialog-media",className:o("mb-2 inline-flex size-6 shrink-0 items-center justify-center [&_svg:not([class*='size-'])]:size-6",t),...r})}function g({className:t,...r}){return e.jsx(N,{"data-slot":"alert-dialog-title",className:o("text-sm leading-5 font-semibold text-foreground",t),...r})}function x({className:t,...r}){return e.jsx(I,{"data-slot":"alert-dialog-description",className:o("text-sm leading-5 text-text-2",t),...r})}function p({className:t,...r}){return e.jsx(l,{"data-slot":"alert-dialog-action",className:o(t),...r})}function u({className:t,variant:r="outline",size:a="default",...T}){return e.jsx(P,{"data-slot":"alert-dialog-cancel",className:o(t),render:e.jsx(l,{variant:r,size:a}),...T})}i.__docgenInfo={description:'shadcn AlertDialog API rendered as the Semi Design confirm modal\r\n(`modal/modal.scss` danger confirmation):\r\n- same modal spec as dialog: bg-2 surface, 12px radius (`--semi-border-radius-large`),\r\n  elevated shadow, 24px padding with 24px block gaps, 448px default width,\r\n  top-aligned 80px from the viewport edge (`$spacing-modal-marginY: 80px`)\r\n- no corner close X (Semi confirm modals only offer Cancel / OK)\r\n- title 14px/600 (`$font-modal_header-fontSize` / `$font-modal_header-fontWeight`)\r\n- danger confirmations pass `variant="destructive"` to AlertDialogAction\r\n  (solid `--semi-color-danger` button)',methods:[],displayName:"AlertDialog"};p.__docgenInfo={description:"",methods:[],displayName:"AlertDialogAction"};u.__docgenInfo={description:"",methods:[],displayName:"AlertDialogCancel",props:{variant:{defaultValue:{value:'"outline"',computed:!1},required:!1},size:{defaultValue:{value:'"default"',computed:!1},required:!1}}};d.__docgenInfo={description:"",methods:[],displayName:"AlertDialogContent"};x.__docgenInfo={description:"",methods:[],displayName:"AlertDialogDescription"};m.__docgenInfo={description:"",methods:[],displayName:"AlertDialogFooter"};c.__docgenInfo={description:"",methods:[],displayName:"AlertDialogHeader"};b.__docgenInfo={description:"",methods:[],displayName:"AlertDialogMedia"};C.__docgenInfo={description:"",methods:[],displayName:"AlertDialogOverlay"};y.__docgenInfo={description:"",methods:[],displayName:"AlertDialogPortal"};g.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTitle"};s.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTrigger"};const{within:n,expect:j,userEvent:v}=__STORYBOOK_MODULE_TEST__,Ne={title:"Components/AlertDialog",component:i,parameters:{layout:"centered"}},D={render:()=>e.jsxs(i,{children:[e.jsx(s,{render:e.jsx(l,{children:"Open confirm"})}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(g,{children:"Move to trash?"}),e.jsx(x,{children:"Deleted items will stay in the trash for 30 days before being permanently removed."})]}),e.jsxs(m,{children:[e.jsx(u,{children:"Cancel"}),e.jsx(p,{variant:"destructive",children:"Move to trash"})]})]})]})},A={render:()=>e.jsxs(i,{children:[e.jsx(s,{render:e.jsx(l,{variant:"outline",children:"Delete project"})}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(b,{className:"text-destructive",children:e.jsx(F,{"aria-hidden":!0})}),e.jsx(g,{children:"Permanently delete this project?"}),e.jsx(x,{children:"All files, settings and members will be removed. This cannot be undone."})]}),e.jsxs(m,{children:[e.jsx(u,{children:"Cancel"}),e.jsx(p,{variant:"destructive",children:"Delete forever"})]})]})]})},f={render:()=>e.jsxs(i,{children:[e.jsx(s,{render:e.jsx(l,{variant:"outline",children:"Publish"})}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(g,{children:"Publish changes?"}),e.jsx(x,{children:"Your draft will replace the live version for all viewers."})]}),e.jsxs(m,{children:[e.jsx(u,{children:"Cancel"}),e.jsx(p,{children:"Publish"})]})]})]})},h={render:()=>e.jsxs(i,{children:[e.jsx(s,{render:e.jsx(l,{children:"Delete"})}),e.jsxs(d,{children:[e.jsx(c,{children:e.jsx(g,{children:"Confirm deletion"})}),e.jsxs(m,{children:[e.jsx(u,{children:"Cancel"}),e.jsx(p,{variant:"destructive",children:"Delete"})]})]})]}),play:async()=>{await v.click(n(document.body).getByRole("button",{name:"Delete"}));const t=await n(document.body).findByText("Confirm deletion");j(t).toBeInTheDocument(),j(n(document.body).getByRole("alertdialog")).toBeInTheDocument(),await v.click(n(document.body).getByRole("button",{name:"Cancel"})),await new Promise(r=>setTimeout(r,400)),j(n(document.body).queryByText("Confirm deletion")).not.toBeInTheDocument()}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>\r
      <AlertDialogTrigger render={<Button>Open confirm</Button>} />\r
      <AlertDialogContent>\r
        <AlertDialogHeader>\r
          <AlertDialogTitle>Move to trash?</AlertDialogTitle>\r
          <AlertDialogDescription>\r
            Deleted items will stay in the trash for 30 days before being permanently\r
            removed.\r
          </AlertDialogDescription>\r
        </AlertDialogHeader>\r
        <AlertDialogFooter>\r
          <AlertDialogCancel>Cancel</AlertDialogCancel>\r
          <AlertDialogAction variant="destructive">Move to trash</AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>
}`,...D.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>\r
      <AlertDialogTrigger render={<Button variant="outline">Delete project</Button>} />\r
      <AlertDialogContent>\r
        <AlertDialogHeader>\r
          <AlertDialogMedia className="text-destructive">\r
            <CircleAlert aria-hidden />\r
          </AlertDialogMedia>\r
          <AlertDialogTitle>Permanently delete this project?</AlertDialogTitle>\r
          <AlertDialogDescription>\r
            All files, settings and members will be removed. This cannot be undone.\r
          </AlertDialogDescription>\r
        </AlertDialogHeader>\r
        <AlertDialogFooter>\r
          <AlertDialogCancel>Cancel</AlertDialogCancel>\r
          <AlertDialogAction variant="destructive">Delete forever</AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>
}`,...A.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>\r
      <AlertDialogTrigger render={<Button variant="outline">Publish</Button>} />\r
      <AlertDialogContent>\r
        <AlertDialogHeader>\r
          <AlertDialogTitle>Publish changes?</AlertDialogTitle>\r
          <AlertDialogDescription>\r
            Your draft will replace the live version for all viewers.\r
          </AlertDialogDescription>\r
        </AlertDialogHeader>\r
        <AlertDialogFooter>\r
          <AlertDialogCancel>Cancel</AlertDialogCancel>\r
          <AlertDialogAction>Publish</AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>\r
      <AlertDialogTrigger render={<Button>Delete</Button>} />\r
      <AlertDialogContent>\r
        <AlertDialogHeader>\r
          <AlertDialogTitle>Confirm deletion</AlertDialogTitle>\r
        </AlertDialogHeader>\r
        <AlertDialogFooter>\r
          <AlertDialogCancel>Cancel</AlertDialogCancel>\r
          <AlertDialogAction variant="destructive">Delete</AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>,
  play: async () => {
    await userEvent.click(within(document.body).getByRole("button", {
      name: "Delete"
    }));
    const title = await within(document.body).findByText("Confirm deletion");
    expect(title).toBeInTheDocument();
    expect(within(document.body).getByRole("alertdialog")).toBeInTheDocument();
    await userEvent.click(within(document.body).getByRole("button", {
      name: "Cancel"
    }));
    await new Promise(r => setTimeout(r, 400));
    expect(within(document.body).queryByText("Confirm deletion")).not.toBeInTheDocument();
  }
}`,...h.parameters?.docs?.source}}};const Ie=["Default","WithMediaIcon","NeutralConfirm","InteractiveCancel"];export{D as Default,h as InteractiveCancel,f as NeutralConfirm,A as WithMediaIcon,Ie as __namedExportsOrder,Ne as default};
