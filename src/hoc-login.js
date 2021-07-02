import React, { PureComponent } from 'react'

function withAuth(WrappedComponent) {
  return props => {
    const { isLogin } = props
    if (isLogin) {
      return <WrappedComponent {...props} />
    } else {
      return <LoginPage {...props} />
    }

  }
}
class CartPage extends PureComponent {
  render() {
    return (
      <div>
        CartPage
      </div>
    )
  }
}

class LoginPage extends PureComponent {
  render() {
    return (
      <div>
        LoginPage
      </div>
    )
  }
}

const AuthCartPage = withAuth(CartPage)

export class App extends PureComponent {
  render() {
    return (
      <div>
        <AuthCartPage isLogin={false} />
      </div>
    )
  }
}

export default App
