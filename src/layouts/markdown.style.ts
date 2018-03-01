import styled, { injectGlobal } from "styled-components"

export const Content = styled.div`
  position: relative;
  background: #fff;
  padding: 2rem 5%;
  box-shadow: 0 0.4rem 0.8rem -0.1rem rgba(0,32,128,.1), 0 0 0 1px #f0f2f7;
  border-radius: .25rem;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  margin: 20px;
`

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  summary {
    cursor: pointer;
    outline: none;
  }

  code:not([class*=lang]) {
    background: #fcfaff;
    border: 1px solid #e2ddff;
    color: #4b00da;
    border-radius: .15rem;
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
    font-size: .9rem;
    padding: .2rem .4rem;
    margin: 0 .1rem;
  }

  pre {
    overflow: auto;
    padding: .75rem 1.25rem;
    background: #f5f6f9;
    border-radius: .25rem;
    color: #324b64;
    font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 2;
    font-size: 1rem;
    hyphens: none;
    tab-size: 4;
  }

  blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
  }

  .ant-layout-sider {
    box-shadow: 0.4rem 0.4rem 0.8rem rgba(0,32,64,.1);
    background: linear-gradient(-30deg,#2a3d67,#14264e);
  }

  .ant-menu-dark {
    background: none;
  }

  .ant-menu-item:first-child {
    margin-top: 0;
  }

  .ant-menu-dark.ant-menu-inline .ant-menu-item:hover, .ant-menu.ant-menu-dark .ant-menu-item-selected {
    background: hsla(0,0%,100%,.1);
  }
`
