import React, { useState,useMemo } from 'react'


function calcNumber(count) {
  console.log('我走了计算')
  let total = 0;
  for (let i = 0; i < count; i++) {
    total += i
  }
  return total
}
export default function UseMemoDemo() {

  const [count, setCount] = useState(10)
  const [show, setShow] = useState(true)


  let total = useMemo(()=>{
    return calcNumber(count)
  },[count])

  return (

    <div>
      <h2>计算数字的和:{total}</h2>
      <button onClick={
        e => setCount(count + 1)
      }>+1</button>
      <button onClick={
        e => setShow(!show)}>切换</button>
    </div>
  )
}
