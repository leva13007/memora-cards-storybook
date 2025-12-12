import{j as a}from"./iframe-DLrrYm3n.js";import{T as c}from"./TextLink-DdfUqnRj.js";import{b as d}from"./Text-CAL3taJ_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-YGcI_iuS.js";const g={title:"UI/Atoms/TextLink",component:c,tags:["autodocs"],args:{content:"test link"},argTypes:{content:{control:{type:"text"}}}},e={args:{content:`TextLink to somewhere
 this is new line`,to:"/"}},t={args:{content:"Hovered Link",to:"/",className:["__hovered","additional-class"]}},s={args:{content:"Red TextLink",style:{color:"red"},to:"/"}},r={args:{content:"TextLink with Extra Classes",className:["extra-class-1","extra-class-2"],to:"/"}},n={args:{content:"TextLink with Custom Test ID","data-testid":"custom-h1",to:"/"}},o={args:{content:"click here",to:"/"},render:i=>a.jsxs(d,{children:["This is some text before the link,"," ",a.jsx(c,{...i,children:"click here"})," ","to continue reading."]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'TextLink to somewhere\\n this is new line',
    to: '/'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Hovered Link',
    to: '/',
    className: ['__hovered', 'additional-class']
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Red TextLink',
    style: {
      color: 'red'
    },
    to: '/'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'TextLink with Extra Classes',
    className: ['extra-class-1', 'extra-class-2'],
    to: '/'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    'content': 'TextLink with Custom Test ID',
    'data-testid': 'custom-h1',
    'to': '/'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'click here',
    to: '/'
  },
  render: args => <TextMedium>
      This is some text before the link,
      {' '}
      <TextLink {...args}>click here</TextLink>
      {' '}
      to continue reading.
    </TextMedium>
}`,...o.parameters?.docs?.source}}};const h=["Default","LinkHovered","RedTitle","WithExtraClasses","CustomTestId","InsideParagraph"];export{n as CustomTestId,e as Default,o as InsideParagraph,t as LinkHovered,s as RedTitle,r as WithExtraClasses,h as __namedExportsOrder,g as default};
