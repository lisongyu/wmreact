import React, { PureComponent } from 'react'
import { EventEmitter } from 'events'


// 事件总线
const eventBus = new EventEmitter()
class Home extends PureComponent {

  componentDidMount() {
    eventBus.addListener('sayHello', (args) => {
      console.log(args)
    })
  }
  componentWillUnmount() {
    eventBus.removeListener('sayHello', (args) => {

    })
  }
  render() {
    return (
      <div>
        home
      </div>
    )
  }
}

class Profile extends PureComponent {
  render() {
    return (
      <div>
        Profile
        <button onClick={e => this.emmitEvent()}>点击了Profile按钮</button>
      </div>
    )
  }
  emmitEvent() {
    eventBus.emit("sayHello", "Hello Home", 123)
  }
}
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Profile />
        <Home />

      </div>
    )
  }
}
