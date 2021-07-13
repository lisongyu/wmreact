import React, { PureComponent } from 'react'

import Home from './pages/home4-thunk'
import About from './pages/about2'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    )
  }
}
