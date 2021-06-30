import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {

  constructor(props) {
    super(props);
    this.titleRef = createRef()
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>Hello React</h2>
        <button onClick={e => this.changeText()}>改变文本</button>
      </div>
    )
  }
  changeText() {
    // 1
    // this.refs.titleRef.innerHTML = '我是'
    this.titleRef.current.innerHTML = '哈哈'
  }
}
