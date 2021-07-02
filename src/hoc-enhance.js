import React, { PureComponent } from 'react'

class Home extends PureComponent {
  render() {
    return <h2>about:{`昵称:${this.props.nickname} 等级:${this.props.level}区域:${this.props.region}`}</h2>
  }
}

class About extends PureComponent {
  render() {
    return <h2>Home:{`昵称:${this.props.nickname} 等级:${this.props.level}区域:${this.props.region}`}</h2>
  }
}

function enhanceRegionProps(WrappedComponent) {
  return props => {
    return <WrappedComponent {...props} region="中国" />
  }
}

const EnhanceHome = enhanceRegionProps(Home)
const EnhanceAbout = enhanceRegionProps(About)
class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <EnhanceHome nickname="coderwhy" level={90} />
        <EnhanceAbout nickname="Kobe" level={99} />

      </div>
    )
  }
}

export default App