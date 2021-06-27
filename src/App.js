import React, { Component } from 'react'

// class ChildCpn extends Component {

//   render() {
//     return (
//       <div>
//         <h2>子组件展示数据:{this.props.childInfo}</h2>
//       </div>
//     )
//   }
// }

function ChildCpn(props) {
  return (
    <div>
      <h2>子组件展示数据:{props.childInfo}</h2>
    </div>
  )

}

ChildCpn.defaultProps = {
  childInfo: '我是默认值'
}



export default class App extends Component {
  constructor() {
    super();
    console.log('执行了组件的constructor')
    this.state = {
      message: "你好啊，李银河",
      childInfo: '我是父亲传来的'
    }
  }
  render() {
    console.log('执行了render')
    let { childInfo } = this.state
    return (
      <div>
        <span>我是App组件</span>
        <h2>{this.state.message}</h2>
        <ChildCpn />
      </div>
    )
  }
  componentDidMount() {
    console.log('执行了组件的didmount')
  }
}
