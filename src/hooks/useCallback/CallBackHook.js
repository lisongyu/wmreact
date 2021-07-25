import React, { useState, useCallback } from 'react'

export default function CallBackHook() {
  const [count, setCount] = useState(0)
  const increment = () => {
    console.log('执行increment1')
    setCount(count + 1)
  }
  const increment2 = useCallback(() => {
    console.log('执行increment2')
    setCount(count + 1)
  }, [count])
  return (
    <div>
      <h2>CallbackHookDemo01:{count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={increment2}>+1</button>
    </div>
  )
}
