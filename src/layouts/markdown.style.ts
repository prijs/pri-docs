import styled, { injectGlobal } from "styled-components"

export const Content = styled.div`

`

export const Logo = styled.div`
  float: left;
  font-size: 20px;
  font-weight: bold;
  margin-right: 15px;
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

  .ant-layout {
    background-color: white !important;
  }

  .ant-layout-header {
    background-color: white !important;
    height: 48px !important;
    line-height: 48px !important;
  }

  .ant-layout-content {
    min-height: calc(100vh - 48px - 69px);
  }
`
