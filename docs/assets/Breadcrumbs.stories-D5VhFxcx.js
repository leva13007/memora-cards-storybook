import{j as e}from"./iframe-D0tREjYO.js";import{b}from"./Text-CE8Ly040.js";import{T as x}from"./TextLink-pfmtXduc.js";import{c as y}from"./index-YGcI_iuS.js";import"./preload-helper-PPVm8Dsz.js";const C="_breadcrumbs_41ayx_1",P="_separator_41ayx_12",h="_label_41ayx_16",n={breadcrumbs:C,separator:P,label:h},H=({className:d,style:g,items:i,separator:p="/","data-testid":s="breadcrumbs"})=>{const k=y(n,"breadcrumbs",...d||[]);return e.jsx("nav",{"data-testid":s,"aria-label":"breadcrumbs",children:e.jsx("ol",{style:g,className:k,children:i.map((a,r)=>e.jsxs("li",{children:[r>0?e.jsx(b,{className:[n.separator],"aria-hidden":"true","data-testid":`${s}-separator-${r}`,children:p}):void 0,a.link&&r!==i.length-1?e.jsx(x,{to:a.link,className:[n.label],"data-testid":`${s}-link-${r}`,content:a.label}):e.jsx(b,{as:"span",tabIndex:-1,"aria-current":r===i.length-1?"page":void 0,className:[n.label],"data-testid":`${s}-text`,children:a.label})]},a.label))})})},j={title:"UI/Molecules/Breadcrumbs",component:H,tags:["autodocs"],args:{items:[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Current Page"}]},argTypes:{items:{control:{type:"object"}},separator:{control:{type:"text"}}}},t={args:{items:[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Current Page"}],separator:"/"}},l={args:{items:[{label:"Home",link:"/"},{label:"Current Page",link:"/current"}]}},o={args:{items:[{label:"Home",link:"/"},{label:"Very Long Category Name That Might Overflow",link:"/long-category"},{label:"Another Extremely Long Subcategory Name Here",link:"/long-category/sub"},{label:"Current Product Page With Very Long Title That Could Cause Layout Issues"}]}},c={args:{items:[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Current Page"}],separator:">"}},m={args:{items:[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Current Page"}],className:["custom-breadcrumb","additional-class"]}},u={args:{items:[{label:"Current Page",link:"/current"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const T=["Default","TwoItems","LongBreadcrumb","CustomSeparator","WithExtraClasses","SingleItem"];export{c as CustomSeparator,t as Default,o as LongBreadcrumb,u as SingleItem,l as TwoItems,m as WithExtraClasses,T as __namedExportsOrder,j as default};
