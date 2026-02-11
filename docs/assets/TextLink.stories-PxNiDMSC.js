import{j as c}from"./iframe-D0tREjYO.js";import{T as i}from"./TextLink-pfmtXduc.js";import{b as d}from"./Text-CE8Ly040.js";import"./preload-helper-PPVm8Dsz.js";import"./index-YGcI_iuS.js";const g={title:"UI/Atoms/TextLink",component:i,tags:["autodocs"],args:{content:"test link",to:"/"},argTypes:{content:{control:{type:"text"}},to:{control:{type:"text"}}}},e={args:{content:`TextLink to somewhere
 this is new line`,to:"/"}},t={args:{content:"Hovered Link",to:"/",className:["__hovered","additional-class"]}},s={args:{content:"Red TextLink",style:{color:"red"},to:"/"}},r={args:{content:"TextLink with Extra Classes",className:["extra-class-1","extra-class-2"],to:"/"}},o={args:{content:"TextLink with Custom Test ID",to:"/"},render:n=>c.jsx(i,{...n,"data-testid":"custom-h1"})},a={args:{content:"click here",to:"/"},render:n=>c.jsxs(d,{children:["This is some text before the link,"," ",c.jsx(i,{...n})," ","to continue reading."]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'TextLink with Custom Test ID',
    to: '/'
  },
  render: args => <TextLink {...args} data-testid="custom-h1" />
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'click here',
    to: '/'
  },
  render: args => <TextMedium>
      This is some text before the link,
      {' '}
      <TextLink {...args} />
      {' '}
      to continue reading.
    </TextMedium>
}`,...a.parameters?.docs?.source}}};const T=["Default","LinkHovered","RedTitle","WithExtraClasses","CustomTestId","InsideParagraph"];export{o as CustomTestId,e as Default,a as InsideParagraph,t as LinkHovered,s as RedTitle,r as WithExtraClasses,T as __namedExportsOrder,g as default};
