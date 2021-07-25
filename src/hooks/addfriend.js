import React, { useState } from 'react'

export default function Addfriend() {
  const [friends, setFrient] = useState(['kode', 'lilei'])

  function addFriend() {
    friends.push('hmm');
    setFrient([...friends])
  }
  return (
    <div>
      <h2>好友列表：</h2>
      <ul>
        {
          friends.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      <button onClick={addFriend}> 添加朋友</button>

    </div>
  )
}
