import React, { useEffect } from 'react'

const Home = (props) => {
  useLoggingLife('Home')
  return <h2>Home</h2>
}

const Profile = (props) => {
  useLoggingLife('Profile')
  return <h2>Profile</h2>
}
export default function KnowLeftHook() {

  useLoggingLife('KnowLeftHook')
  return (
    <div>
      <h2>KnowLeftHook</h2>
      <Home />
      <Profile />
    </div>
  )
}

function useLoggingLife(name) {
  useEffect(() => {
    console.log(`${name}组件被创建出来了`)
    return () => {
      console.log(`${name}组件被销毁了`)
    }

  }, [])

}
