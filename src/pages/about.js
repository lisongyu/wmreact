import React, { PureComponent } from 'react'
import store from '../store'
import {
  subAction

} from '../store/actionCreators'
export default class about extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      counter: store.getState().counter
    }
  }
  render() {
    let { counter } = this.state
    return (
      <div>
        about
        当前计数:{counter}
        <button onClick={e => this.decrement()}>-1</button>
        <button onClick={e => this.subNumber(5)}>-5</button>
      </div>
    )
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })

    })
  }
  decrement() {
    store.dispatch(subAction(1))
  }
  subNumber(num) {
    store.dispatch(subAction(num))

  }
}
