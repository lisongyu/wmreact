import React, { PureComponent } from 'react'
import {
  NavLink,
  Route,
  Switch
} from 'react-router-dom'

function AboutHistory(props) {
  return <h2>企业成立于2000年</h2>
}
function AboutCulture(props) {
  return <h2>创新/法阵/共享</h2>
}

function AboutContact(props) {
  return <h2>联系电话：344343434</h2>
}
function AboutJoin(props) {
  return <h2>加入我们</h2>
}
export default class about extends PureComponent {
  render() {
    return (
      <div>
        <NavLink exact to="/about">历史悠久</NavLink>
        <NavLink exact to="/about/culture">企业文化</NavLink>
        <NavLink exact to="/about/contact">联系我们</NavLink>
        <button onClick={e=>this.JumpToJoin()}>加入我们</button>
        <Switch>
          <Route exact path="/about" component={AboutHistory} />
          <Route path="/about/culture" component={AboutCulture} />
          <Route path="/about/contact" component={AboutContact} />
          <Route path="/about/join" component={AboutJoin} />
        </Switch>
      </div>
    )
  }
  JumpToJoin(){
    console.log(this.props.history)
    this.props.history.push("/about/join")
  }
}
