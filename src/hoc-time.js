import React, { PureComponent } from 'react'

function withRenderTime(WrappedComponent) {
  return class extends PureComponent {
    // 即将渲染获取一个时间
    UNSAFE_componentWillMount() {
      this.beginTime = Date.now()
    }

    // 渲染完成获取一个时间
    componentDidMount() {
      this.endTime = Date.now();
      const interval = this.endTime - this.beginTime;
      console.log(`Home渲染时间:${interval}`)
    }

    render() {
      return (<WrappedComponent {...this.props} />)
    }
  }
}

export class Home extends PureComponent {

  render() {
    return (
      <div>
        <h2>home</h2>
      </div>
    )
  }

}

export class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    )
  }
}

const HomeC = withRenderTime(Home)
const AboutC = withRenderTime(About)
export class App extends PureComponent {
  render() {
    return (
      <div>
        <HomeC />
        <AboutC />
      </div>
    )
  }
}

export default App
