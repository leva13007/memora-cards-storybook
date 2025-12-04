import{j as o}from"./iframe-Dc8-8sbA.js";import{L as n}from"./Link-kxqi6_bM.js";import{T as c}from"./Text-20s4GlfL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-O4MwD9zY.js";const h={title:"UI/Atoms/Link",component:n,tags:["autodocs"],args:{children:"test link"},argTypes:{children:{control:{type:"text"}}}},e={args:{children:"Title",to:"/"}},r={args:{children:"Red Title",style:{color:"red"},to:"/"}},s={args:{children:"Title with Extra Classes",className:["extra-class-1","extra-class-2"],to:"/"}},t={args:{children:"Title with Custom Test ID","data-testid":"custom-h1",to:"/"}},a={args:{to:"/"},render:i=>o.jsxs(c,{children:["This is some text before the link,"," ",o.jsx(n,{...i,children:"click here"})," ","to continue reading."]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Title',
    to: '/'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Red Title',
    style: {
      color: 'red'
    },
    to: '/'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Title with Extra Classes',
    className: ['extra-class-1', 'extra-class-2'],
    to: '/'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    'children': 'Title with Custom Test ID',
    'data-testid': 'custom-h1',
    'to': '/'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    to: '/'
  },
  render: args => <TextMedium>
      This is some text before the link,
      {' '}
      <Link {...args}>click here</Link>
      {' '}
      to continue reading.
    </TextMedium>
}`,...a.parameters?.docs?.source}}};const g=["Default","RedTitle","WithExtraClasses","CustomTestId","InsideParagraph"];export{t as CustomTestId,e as Default,a as InsideParagraph,r as RedTitle,s as WithExtraClasses,g as __namedExportsOrder,h as default};
