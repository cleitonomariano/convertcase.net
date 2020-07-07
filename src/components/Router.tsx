import React from 'react'
import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #444;
    --color-secondary: #efefef;
  }

  *,
  *:after,
  *:before {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box
    font-size: 62.5%
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--color-secondary);
    color: var(--color-primary);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6em;
    font-weight: 300;
    letter-spacing: .01em;
    line-height: 1.6;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`

export default () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route component={() => <>My App</>} exact path="/" />
      <Route component={() => <>Error Page</>} />
    </Switch>
  </BrowserRouter>
)
