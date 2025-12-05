import{j as e}from"./iframe-DyNwSbZe.js";import{b as v}from"./Text-CqPb5vv1.js";import{T as H}from"./TextLink-CFpDW74z.js";import{c as x}from"./index-O4MwD9zY.js";import"./preload-helper-PPVm8Dsz.js";const L="_breadcrumbs_rl7be_1",N="_separator_rl7be_9",w="_label_rl7be_22",r={breadcrumbs:L,separator:N,"variant--wrap":"_variant--wrap_rl7be_13","variant--truncate":"_variant--truncate_rl7be_17",label:w},k=({className:h,style:P,items:C,variant:S="truncate",separator:T="/","data-testid":p="breadcrumbs"})=>{const f=x(r.breadcrumbs,r[`variant--${S}`],...h||[]);return e.jsx("nav",{"data-testid":p,"aria-label":"breadcrumbs",children:e.jsx("ol",{style:P,className:f,children:C.map((a,y)=>e.jsxs("li",{"aria-current":y===C.length-1?"page":void 0,children:[y>0?e.jsx("span",{className:r.separator,"aria-hidden":"true",children:T}):void 0,a.link?e.jsx(H,{to:a.link,className:[r.label],"data-testid":`${p}-link-${y}`,content:a.label}):e.jsx(v,{className:[r.label],"data-testid":`${p}-text`,children:a.label})]},a.label))})})};k.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{className:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'breadcrumbs'",computed:!1}},items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'truncate' | 'wrap'",elements:[{name:"literal",value:"'truncate'"},{name:"literal",value:"'wrap'"}]},description:"",defaultValue:{value:"'truncate'",computed:!1}},separator:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'/'",computed:!1}}}};const E={title:"UI/Molecules/Breadcrumbs",component:k,tags:["autodocs"],args:{items:[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Current Page"}]},argTypes:{items:{control:{type:"object"}},variant:{control:{type:"select"},options:["truncate","wrap"]},separator:{control:{type:"text"}}}},t={args:{items:[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Current Page"}],separator:"/"}},n={args:{items:[{label:"Home",link:"/"},{label:"Current Page"}]}},s={args:{items:[{label:"Home",link:"/"},{label:"Category",link:"/category"},{label:"Subcategory",link:"/category/sub"},{label:"Current Page"}]}},l={args:{items:[{label:"Home",link:"/"},{label:"Very Long Category Name That Might Overflow",link:"/long-category"},{label:"Another Extremely Long Subcategory Name Here",link:"/long-category/sub"},{label:"Current Product Page With Very Long Title That Could Cause Layout Issues"}]}},o={args:{items:[{label:"Home",link:"/"},{label:"Very Long Category Name That Might Overflow",link:"/long-category"},{label:"Another Extremely Long Subcategory Name Here",link:"/long-category/sub"},{label:"Current Product Page With Very Long Title That Could Cause Layout Issues"}],variant:"truncate"}},c={args:{items:[{label:"Home",link:"/"},{label:"Very Long Category Name That Might Overflow",link:"/long-category"},{label:"Another Extremely Long Subcategory Name Here",link:"/long-category/sub"},{label:"Current Product Page With Very Long Title That Could Cause Layout Issues"}],variant:"wrap"}},u={args:{items:[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Current Page"}],separator:">"}},i={args:{items:[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Current Page"}],separator:" › "}},m={args:{items:[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Current Page"}],className:["custom-breadcrumb","additional-class"]}},d={args:{items:[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Current Page"}],style:{fontSize:"18px",padding:"16px",backgroundColor:"#6c3f3f"}}},g={args:{items:[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Current Page"}],"data-testid":"custom-breadcrumbs-id"}},b={args:{items:[{label:"Current Page"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      link: '/'
    }, {
      label: 'Products',
      link: '/products'
    }, {
      label: 'Current Page'
    }],
    separator: '/'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      link: '/'
    }, {
      label: 'Current Page'
    }]
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      link: '/'
    }, {
      label: 'Category',
      link: '/category'
    }, {
      label: 'Subcategory',
      link: '/category/sub'
    }, {
      label: 'Current Page'
    }]
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      link: '/'
    }, {
      label: 'Very Long Category Name That Might Overflow',
      link: '/long-category'
    }, {
      label: 'Another Extremely Long Subcategory Name Here',
      link: '/long-category/sub'
    }, {
      label: 'Current Product Page With Very Long Title That Could Cause Layout Issues'
    }]
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      link: '/'
    }, {
      label: 'Very Long Category Name That Might Overflow',
      link: '/long-category'
    }, {
      label: 'Another Extremely Long Subcategory Name Here',
      link: '/long-category/sub'
    }, {
      label: 'Current Product Page With Very Long Title That Could Cause Layout Issues'
    }],
    variant: 'truncate'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      link: '/'
    }, {
      label: 'Very Long Category Name That Might Overflow',
      link: '/long-category'
    }, {
      label: 'Another Extremely Long Subcategory Name Here',
      link: '/long-category/sub'
    }, {
      label: 'Current Product Page With Very Long Title That Could Cause Layout Issues'
    }],
    variant: 'wrap'
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      link: '/'
    }, {
      label: 'Products',
      link: '/products'
    }, {
      label: 'Current Page'
    }],
    separator: '>'
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      link: '/'
    }, {
      label: 'Products',
      link: '/products'
    }, {
      label: 'Current Page'
    }],
    separator: ' › '
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      link: '/'
    }, {
      label: 'Products',
      link: '/products'
    }, {
      label: 'Current Page'
    }],
    className: ['custom-breadcrumb', 'additional-class']
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      link: '/'
    }, {
      label: 'Products',
      link: '/products'
    }, {
      label: 'Current Page'
    }],
    style: {
      fontSize: '18px',
      padding: '16px',
      backgroundColor: '#6c3f3f'
    }
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    'items': [{
      label: 'Home',
      link: '/'
    }, {
      label: 'Products',
      link: '/products'
    }, {
      label: 'Current Page'
    }],
    'data-testid': 'custom-breadcrumbs-id'
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Current Page'
    }]
  }
}`,...b.parameters?.docs?.source}}};const j=["Default","TwoItems","FourItems","LongBreadcrumb","WithTruncateBehaviour","WithWrapBehaviour","CustomSeparator","CustomSeparatorWithSpaces","WithExtraClasses","CustomStyles","CustomTestId","SingleItem"];export{u as CustomSeparator,i as CustomSeparatorWithSpaces,d as CustomStyles,g as CustomTestId,t as Default,s as FourItems,l as LongBreadcrumb,b as SingleItem,n as TwoItems,m as WithExtraClasses,o as WithTruncateBehaviour,c as WithWrapBehaviour,j as __namedExportsOrder,E as default};
