import React, { useState, useMemo, memo } from 'react'


const HYInfo = memo((props) => {
  console.log('子组件重新渲染')
  return <h2>名字:{props.info.name} 年龄:{props.info.age}</h2>

})
export default function UseMemoDemo() {
  const [show, setShow] = useState(true)
  // const info={name:'why',age:18}
  console.log('父组件重新渲染')
  const info = useMemo(() => {
    return { name: 'why', age: 18 }
  }, [])

  return (

    <div>
      <HYInfo info={info} />
      <button onClick={
        e => setShow(!show)}>切换</button>
    </div>
  )
}
