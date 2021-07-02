import React, { PureComponent, createContext } from 'react'


const UesrContext = createContext({
  nickname: "默认",
  level: -1,
  region: "中国"

})
class Home extends PureComponent {
  render() {
    return <h2>home:{`昵称:${this.props.nickname} 等级:${this.props.level}区域:${this.props.region}`}</h2>
  }
}

Home.contextType = UesrContext

class About extends PureComponent {
  render() {
    return <h2>about:{`昵称:${this.props.nickname} 等级:${this.props.level}区域:${this.props.region}`}</h2>

  }
}
About.contextType = UesrContext

function withUser(WrappedComponent) {
  return props => {
    return (
      <UesrContext.Consumer>
        {
          user => {
            return <WrappedComponent {...props} {...user} />
          }
        }
      </UesrContext.Consumer>
    )
  }

}
const HomeWithUser = withUser(Home)
const AboutWithUser = withUser(About)

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <UesrContext.Provider value={{ nickname: 'why', level: 18, region: '中国' }}>
          <HomeWithUser />
          <AboutWithUser />
        </UesrContext.Provider>


      </div>
    )
  }
}

export default App
