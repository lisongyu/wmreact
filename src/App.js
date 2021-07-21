import React, { PureComponent } from 'react'
import {renderRoutes} from 'react-router-config'
// import Home from './pages/home'
// import About from './pages/about'
// import User from './pages/user'
// import NoMatch from './pages/noMatch'

import routes from './router/index';

import {  Link,
  withRouter
} from 'react-router-dom'
class App extends PureComponent {
  render() {
    return (
      <div>

        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
        {/* <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/:id' component={User} />
          <Route component={NoMatch} />
        </Switch> */}
        {renderRoutes(routes)}



      </div>
    )
  }
}

export default withRouter(App)
