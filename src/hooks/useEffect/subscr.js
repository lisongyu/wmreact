import React,{useEffect,useState}from 'react'
// 模拟订阅和取消
export default function Subscr() {

  const [counter,setCounter]=useState(0)


  useEffect(()=>{
    // 订阅一些事件
    console.log('订阅一些事件')
    return ()=>{
      console.log('取消订阅')
    }
  },[])
  return (
    <div>
      <h2>EffectHookCancelDemo</h2>
      <h2>当前计数：{counter}</h2>
      <button onClick={e=>setCounter(counter+1)}>+1</button>
    </div>
  )
}


