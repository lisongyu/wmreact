import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return (
      <div>
        我是高阶组件{this.props.name}
      </div>
    )
  }
}

function enhanceComponent(WrappedComponent) {
  return class newCom extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

function enhanceComponent2(WrappedComponent) {
  function newCom(props) {
    return <WrappedComponent {...props} />
  }

  return newCom
}

const EnhanceComponent = enhanceComponent2(App)
export default EnhanceComponent
