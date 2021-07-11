import { PureComponent } from "react"

import store from "../store"

export function connect(mapStateToProps, mapDispachToProp) {
  return function enhanceHOC(WrappedComponent) {
    return class extends PureComponent {
      render() {
        return <WrappedComponent {...this.props}
          {...mapStateToProps(store.getState())}
          {...mapDispachToProp(store.dispatch)}
        />
      }
    }
  }
}