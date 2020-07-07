import React from 'react'
import { BrowserRouter, Route, Switch  } from 'react-router-dom'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route component={() => <>My App</>} exact path="/" />
      <Route component={() => <>Error Page</>} />
    </Switch>
  </BrowserRouter>
)
