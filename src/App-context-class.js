import React, { Component } from 'react'


// 创建 Context对象
let UserContext = React.createContext({
  nickname: "aaa",
  level: -1
})

class ProfileHeader extends Component {
  render() {
    console.log(this.context)
    return (
      <div>

        <h2>用户昵称:{this.context.nickname}</h2>
        <h2>用户等级：{this.context.level}</h2>
      </div>
    )
  }
}

ProfileHeader.contextType = UserContext;


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
      nickname: "kebo",
      level: -1
    }

  }
  render() {

    return (
      <div>
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>

      </div>
    )
  }
}


