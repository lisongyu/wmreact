import React, { useRef } from 'react'

export default function UseRefDemo() {

  const titleRef = useRef()
  const inputRef = useRef()

  function changeDom() {
    titleRef.current.innerHTML = 'hello wolld'
  }
  return (
    <div>
      <h2 ref={titleRef}>hookDemo01</h2>
      <input type="text" ref={inputRef} />
      <button onClick={changeDom}>修改demo</button>
    </div>
  )
}
