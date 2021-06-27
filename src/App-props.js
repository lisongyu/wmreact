import React, { Component } from 'react'


function ProfileHeader(props) {
  return (
    <div>
      <h2>用户昵称:{props.nickname}</h2>
      <h2>用户等级：{props.level}</h2>
    </div>
  )
}
function Profile(props) {
 
  return (

  
    <div>
      <ProfileHeader {...props} />
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
      nickname: 'codewhy1',
      level: 99
    }
  }
  render() {
    const { nickname, level } = this.state
    return (
      <div>
        <Profile nickname={nickname} level={level} />
      </div>
    )
  }
}


