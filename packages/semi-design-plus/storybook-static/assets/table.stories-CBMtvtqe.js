import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as t}from"./cn-Bk382tBs.js";function i({className:a,...r}){return e.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:e.jsx("table",{"data-slot":"table",className:t("w-full caption-bottom text-sm",a),...r})})}function c({className:a,...r}){return e.jsx("thead",{"data-slot":"table-header",className:t("bg-1 [&_tr]:border-b [&_tr]:border-border",a),...r})}function b({className:a,...r}){return e.jsx("tbody",{"data-slot":"table-body",className:t("[&_tr:last-child]:border-0",a),...r})}function o({className:a,...r}){return e.jsx("tr",{"data-slot":"table-row",className:t("border-b border-border transition-colors duration-100 hover:bg-muted data-[state=selected]:bg-primary-light has-aria-expanded:bg-muted/50",a),...r})}function l({className:a,...r}){return e.jsx("th",{"data-slot":"table-head",className:t("h-9 px-4 py-2 text-left align-middle font-normal whitespace-nowrap text-text-2 [&:has([role=checkbox])]:pr-0",a),...r})}function n({className:a,...r}){return e.jsx("td",{"data-slot":"table-cell",className:t("px-4 py-3 align-middle whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0",a),...r})}function m({className:a,...r}){return e.jsx("caption",{"data-slot":"table-caption",className:t("mt-4 text-sm text-text-2",a),...r})}i.__docgenInfo={description:`Semi Design table spec:\r
- header row: bg-1 surface, text-2 regular text, 1px bottom divider\r
- body rows: 1px dividers, fill-0 hover, primary-light selected\r
- cells: 16px horizontal / 12px vertical padding (middle size)`,methods:[],displayName:"Table"};c.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};b.__docgenInfo={description:"",methods:[],displayName:"TableBody"};l.__docgenInfo={description:"",methods:[],displayName:"TableHead"};o.__docgenInfo={description:"",methods:[],displayName:"TableRow"};n.__docgenInfo={description:"",methods:[],displayName:"TableCell"};m.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const h={title:"Components/Table",component:i,parameters:{layout:"padded"}},p=[{name:"Design tokens",owner:"Ada",status:"Active"},{name:"Component API",owner:"Grace",status:"Review"},{name:"Playwright suite",owner:"Linus",status:"Active"}],s={render:()=>e.jsxs(i,{children:[e.jsx(c,{children:e.jsxs(o,{children:[e.jsx(l,{children:"Project"}),e.jsx(l,{children:"Owner"}),e.jsx(l,{children:"Status"})]})}),e.jsx(b,{children:p.map(a=>e.jsxs(o,{children:[e.jsx(n,{children:a.name}),e.jsx(n,{children:a.owner}),e.jsx(n,{children:a.status})]},a.name))}),e.jsx(m,{children:"3 projects"})]})},d={render:()=>e.jsxs(i,{children:[e.jsx(c,{children:e.jsxs(o,{children:[e.jsx(l,{children:"Project"}),e.jsx(l,{children:"Owner"})]})}),e.jsx(b,{children:p.map((a,r)=>e.jsxs(o,{"data-state":r===1?"selected":void 0,children:[e.jsx(n,{children:a.name}),e.jsx(n,{children:a.owner})]},a.name))})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Table>\r
      <TableHeader>\r
        <TableRow>\r
          <TableHead>Project</TableHead>\r
          <TableHead>Owner</TableHead>\r
          <TableHead>Status</TableHead>\r
        </TableRow>\r
      </TableHeader>\r
      <TableBody>\r
        {rows.map(row => <TableRow key={row.name}>\r
            <TableCell>{row.name}</TableCell>\r
            <TableCell>{row.owner}</TableCell>\r
            <TableCell>{row.status}</TableCell>\r
          </TableRow>)}\r
      </TableBody>\r
      <TableCaption>3 projects</TableCaption>\r
    </Table>
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Table>\r
      <TableHeader>\r
        <TableRow>\r
          <TableHead>Project</TableHead>\r
          <TableHead>Owner</TableHead>\r
        </TableRow>\r
      </TableHeader>\r
      <TableBody>\r
        {rows.map((row, index) => <TableRow key={row.name} data-state={index === 1 ? "selected" : undefined}>\r
            <TableCell>{row.name}</TableCell>\r
            <TableCell>{row.owner}</TableCell>\r
          </TableRow>)}\r
      </TableBody>\r
    </Table>
}`,...d.parameters?.docs?.source}}};const u=["Default","SelectedRow"];export{s as Default,d as SelectedRow,u as __namedExportsOrder,h as default};
