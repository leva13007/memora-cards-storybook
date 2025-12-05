import{j as o}from"./iframe-DyNwSbZe.js";import{T as a}from"./TextLink-CFpDW74z.js";import{b as i}from"./Text-CqPb5vv1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-O4MwD9zY.js";const u={title:"UI/Atoms/TextLink",component:a,tags:["autodocs"],args:{content:"test link"},argTypes:{content:{control:{type:"text"}}}},e={args:{content:`TextLink to somewhere
 this is new line`,to:"/"}},t={args:{content:"Red TextLink",style:{color:"red"},to:"/"}},s={args:{content:"TextLink with Extra Classes",className:["extra-class-1","extra-class-2"],to:"/"}},r={args:{content:"TextLink with Custom Test ID","data-testid":"custom-h1",to:"/"}},n={args:{content:"click here",to:"/"},render:c=>o.jsxs(i,{children:["This is some text before the link,"," ",o.jsx(a,{...c,children:"click here"})," ","to continue reading."]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'TextLink to somewhere\\n this is new line',
    to: '/'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Red TextLink',
    style: {
      color: 'red'
    },
    to: '/'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'TextLink with Extra Classes',
    className: ['extra-class-1', 'extra-class-2'],
    to: '/'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    'content': 'TextLink with Custom Test ID',
    'data-testid': 'custom-h1',
    'to': '/'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const T=["Default","RedTitle","WithExtraClasses","CustomTestId","InsideParagraph"];export{r as CustomTestId,e as Default,n as InsideParagraph,t as RedTitle,s as WithExtraClasses,T as __namedExportsOrder,u as default};
