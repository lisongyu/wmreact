import React, { Component } from 'react'


// 创建 Context对象
let UserContext = React.createContext({
  nickname: "aaa",
  level: -1
})

let ThemeContext = React.createContext({
  color:'blue'
})

function ProfileHeader(props) {
  return (
    <UserContext.Consumer>
      {
        value => {
          return (
            <div>
              <h2>用户昵称:{value.nickname}</h2>
              <h2>用户等级：{value.level}</h2>
              
            </div>
          )
        }
      }
    </UserContext.Consumer>
  )
}




function Profile(props) {

  return (


    <div>
      <ProfileHeader />
      <ul>
        <li>设置1</li>
      </ul>
    </div>
  )
}


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nickname: "kebo1",
      level: -1
    }

  }
  render() {

    return (
      <div>
        <UserContext.Provider value={this.state}>
          <ThemeContext.Provider value={{color:"red"}}>
          <Profile />
           </ThemeContext.Provider>
        </UserContext.Provider>

      </div>
    )
  }
}


