
import React from 'react'
import useScrollPosition from './scroll-position-hook'
export default function CustomScrollPositionHook() {
  let scrollPosition = useScrollPosition()
  return (
    <div style={{ padding: "1000px 0" }}>
      <h2>CustomScrollPositionHook:{scrollPosition}</h2>
    </div>
  )
}
