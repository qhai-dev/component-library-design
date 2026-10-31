import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as n,a as l,b as c,c as p,d as m,e as x,f as u,g as o}from"./index-ChuGf5Hv.js";import{B as r}from"./index-ItTLVuoI.js";import"./index-lPyTqghZ.js";import"./cn-Bk382tBs.js";import"./x-Ce-32ZOG.js";import"./createLucideIcon-B-kRpPYY.js";import"./iframe-BafV5W3V.js";import"./preload-helper-PPVm8Dsz.js";import"./DialogRoot-Dp_71mBF.js";import"./DialogTrigger-D-ByWKGv.js";import"./popupStoreUtils-BVI92UKf.js";import"./index-CujQWX5i.js";import"./index-DBz2-nG8.js";import"./useRenderElement-Bqkd2A0z.js";import"./useId--90vaHkX.js";import"./floating-ui.utils.dom-qEQ5XCbi.js";import"./useIsoLayoutEffect-CCrGtNxN.js";import"./constants-CaC-AOuh.js";import"./shared-BwuzQDa5.js";import"./popupStateMapping-If9KDthm.js";import"./addEventListener-C7Nm7Zds.js";import"./ReactStore-CsGgfHeg.js";import"./visuallyHidden-COI6QeQH.js";import"./composite-C72pyEoh.js";import"./engine-DgEYdLxV.js";import"./owner-CvMgaIeV.js";import"./shadowDom-DK1_zfR5.js";import"./createBaseUIEventDetails-BXqh6u2Y.js";import"./index-DzHXYjMk.js";import"./index-Bp2z_mUZ.js";import"./with-selector-DpgWNovl.js";import"./useTimeout-Bvw9d4U2.js";import"./useOnMount-WNj2a00w.js";import"./useOpenChangeComplete-UNa5RW4E.js";import"./useAnimationFrame-DQ9kVddK.js";import"./useTransitionStatus-lkXoOm_V.js";import"./useOpenInteractionType-B_L5s2Nm.js";import"./useValueAsRef-cBqHOkWs.js";import"./useValueChanged-B5k1R_oP.js";import"./store-B9WvlemF.js";import"./getEmptyRootContext-_Db2sTxF.js";import"./useButton-CX1hIlw-.js";import"./useBaseUiId-DAycI4nP.js";import"./composite-BlwPKdlJ.js";import"./inertValue-Be7VyyG3.js";import"./useClick-lt-Rbwhs.js";import"./loader-circle-DepsV607.js";const{within:i,expect:S,userEvent:j}=__STORYBOOK_MODULE_TEST__,me={title:"Components/Sheet",component:n},s={render:()=>e.jsxs(n,{children:[e.jsx(l,{render:e.jsx(r,{children:"Open side sheet"})}),e.jsxs(c,{children:[e.jsxs(p,{children:[e.jsx(m,{children:"Edit profile"}),e.jsx(x,{children:"Changes are applied immediately after saving."})]}),e.jsxs(u,{children:[e.jsx(o,{render:e.jsx(r,{variant:"outline",children:"Cancel"})}),e.jsx(o,{render:e.jsx(r,{children:"Save changes"})})]})]})]})},a={render:()=>e.jsx("div",{className:"flex flex-wrap gap-3",children:["top","right","bottom","left"].map(t=>e.jsxs(n,{children:[e.jsx(l,{render:e.jsx(r,{variant:"outline",children:t})}),e.jsxs(c,{side:t,children:[e.jsxs(p,{children:[e.jsxs(m,{children:[t," side sheet"]}),e.jsx(x,{children:t==="top"||t==="bottom"?"Full width, auto height.":"448px wide, flush to the edge."})]}),e.jsx(u,{children:e.jsx(o,{render:e.jsx(r,{variant:"outline",children:"Close"})})})]})]},t))})},h={render:()=>e.jsxs(n,{children:[e.jsx(l,{render:e.jsx(r,{variant:"outline",children:"Open"})}),e.jsxs(c,{showCloseButton:!1,children:[e.jsx(p,{children:e.jsx(m,{children:"Custom close"})}),e.jsx(u,{children:e.jsx(o,{render:e.jsx(r,{children:"Got it"})})})]})]})},d={render:()=>e.jsxs(n,{children:[e.jsx(l,{render:e.jsx(r,{children:"Open panel"})}),e.jsxs(c,{children:[e.jsxs(p,{children:[e.jsx(m,{children:"Notifications"}),e.jsx(x,{children:"Choose what you want to hear about."})]}),e.jsx(u,{children:e.jsx(o,{render:e.jsx(r,{children:"Done"})})})]})]}),play:async()=>{await j.click(i(document.body).getByRole("button",{name:"Open panel"}));const t=await i(document.body).findByText("Notifications");S(t).toBeInTheDocument(),S(t.closest("[data-slot='sheet-content']")).toHaveClass("bg-dialog","w-[448px]"),await j.click(i(document.body).getByRole("button",{name:"Close",hidden:!0})),await new Promise(g=>setTimeout(g,400)),S(i(document.body).queryByText("Notifications")).not.toBeInTheDocument()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>\r
      <SheetTrigger render={<Button>Open side sheet</Button>} />\r
      <SheetContent>\r
        <SheetHeader>\r
          <SheetTitle>Edit profile</SheetTitle>\r
          <SheetDescription>\r
            Changes are applied immediately after saving.\r
          </SheetDescription>\r
        </SheetHeader>\r
        <SheetFooter>\r
          <SheetClose render={<Button variant="outline">Cancel</Button>} />\r
          <SheetClose render={<Button>Save changes</Button>} />\r
        </SheetFooter>\r
      </SheetContent>\r
    </Sheet>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">\r
      {(["top", "right", "bottom", "left"] as const).map(side => <Sheet key={side}>\r
          <SheetTrigger render={<Button variant="outline">{side}</Button>} />\r
          <SheetContent side={side}>\r
            <SheetHeader>\r
              <SheetTitle>{side} side sheet</SheetTitle>\r
              <SheetDescription>\r
                {side === "top" || side === "bottom" ? "Full width, auto height." : "448px wide, flush to the edge."}\r
              </SheetDescription>\r
            </SheetHeader>\r
            <SheetFooter>\r
              <SheetClose render={<Button variant="outline">Close</Button>} />\r
            </SheetFooter>\r
          </SheetContent>\r
        </Sheet>)}\r
    </div>
}`,...a.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>\r
      <SheetTrigger render={<Button variant="outline">Open</Button>} />\r
      <SheetContent showCloseButton={false}>\r
        <SheetHeader>\r
          <SheetTitle>Custom close</SheetTitle>\r
        </SheetHeader>\r
        <SheetFooter>\r
          <SheetClose render={<Button>Got it</Button>} />\r
        </SheetFooter>\r
      </SheetContent>\r
    </Sheet>
}`,...h.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>\r
      <SheetTrigger render={<Button>Open panel</Button>} />\r
      <SheetContent>\r
        <SheetHeader>\r
          <SheetTitle>Notifications</SheetTitle>\r
          <SheetDescription>Choose what you want to hear about.</SheetDescription>\r
        </SheetHeader>\r
        <SheetFooter>\r
          <SheetClose render={<Button>Done</Button>} />\r
        </SheetFooter>\r
      </SheetContent>\r
    </Sheet>,
  play: async () => {
    await userEvent.click(within(document.body).getByRole("button", {
      name: "Open panel"
    }));
    const title = await within(document.body).findByText("Notifications");
    expect(title).toBeInTheDocument();
    expect(title.closest("[data-slot='sheet-content']")).toHaveClass("bg-dialog", "w-[448px]");
    await userEvent.click(within(document.body).getByRole("button", {
      name: "Close",
      hidden: true
    }));
    await new Promise(r => setTimeout(r, 400));
    expect(within(document.body).queryByText("Notifications")).not.toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source}}};const ue=["Default","Sides","WithoutCloseButton","InteractiveOpenClose"];export{s as Default,d as InteractiveOpenClose,a as Sides,h as WithoutCloseButton,ue as __namedExportsOrder,me as default};
