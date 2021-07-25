import React, { useEffect, useState } from 'react'

export default function MoreUse() {
  const [counter, setCounter] = useState(0)
  const [isLogin, setIsLogin] = useState(true)
  useEffect(() => {
    console.log('修改DOM')
  }, [counter])
  //[] 谁都不依赖，可传入依赖的数据
  useEffect(() => {
    console.log('订阅事件')
  }, [])

  useEffect(() => {
    console.log('网路请求')
  }, [])
  return (
    <div>
      <h2>多个使用</h2>
      <h2>当前计数：{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
      <h3>
        {isLogin && '我来了'}
      </h3>
      <button onClick={e => setIsLogin(!isLogin)}>登录/注销</button>
    </div>
  )
}
