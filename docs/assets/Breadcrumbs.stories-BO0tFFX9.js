import{j as e}from"./iframe-lO63I4Wk.js";import{b}from"./Text-CkwTctYb.js";import{T as C}from"./TextLink-BDOFzsh2.js";import{c as P}from"./index-YGcI_iuS.js";import"./preload-helper-PPVm8Dsz.js";const h="_breadcrumbs_aars4_1",y="_separator_aars4_12",x="_label_aars4_16",t={breadcrumbs:h,separator:y,label:x},H=({className:d,style:g,items:i,separator:p="/","data-testid":s="breadcrumbs"})=>{const k=P(t,"breadcrumbs",...d||[]);return e.jsx("nav",{"data-testid":s,"aria-label":"breadcrumbs",children:e.jsx("ol",{style:g,className:k,children:i.map((r,a)=>e.jsxs("li",{"aria-current":a===i.length-1?"page":void 0,children:[a>0?e.jsx(b,{className:[t.separator],"aria-hidden":"true","data-testid":`${s}-separator-${a}`,children:p}):void 0,r.link&&a!==i.length-1?e.jsx(C,{to:r.link,className:[t.label],"data-testid":`${s}-link-${a}`,content:r.label}):e.jsx(b,{className:[t.label],"data-testid":`${s}-text`,children:r.label})]},r.label))})})},j={title:"UI/Molecules/Breadcrumbs",component:H,tags:["autodocs"],args:{items:[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Current Page"}]},argTypes:{items:{control:{type:"object"}},separator:{control:{type:"text"}}}},n={args:{items:[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Current Page"}],separator:"/"}},l={args:{items:[{label:"Home",link:"/"},{label:"Current Page",link:"/current"}]}},o={args:{items:[{label:"Home",link:"/"},{label:"Very Long Category Name That Might Overflow",link:"/long-category"},{label:"Another Extremely Long Subcategory Name Here",link:"/long-category/sub"},{label:"Current Product Page With Very Long Title That Could Cause Layout Issues"}]}},c={args:{items:[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Current Page"}],separator:">"}},m={args:{items:[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Current Page"}],className:["custom-breadcrumb","additional-class"]}},u={args:{items:[{label:"Current Page",link:"/current"}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      link: '/'
    }, {
      label: 'Current Page',
      link: '/current'
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
    }]
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Current Page',
      link: '/current'
    }]
  }
}`,...u.parameters?.docs?.source}}};const T=["Default","TwoItems","LongBreadcrumb","CustomSeparator","WithExtraClasses","SingleItem"];export{c as CustomSeparator,n as Default,o as LongBreadcrumb,u as SingleItem,l as TwoItems,m as WithExtraClasses,T as __namedExportsOrder,j as default};
