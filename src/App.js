import React, { createContext } from 'react'
// import CounterHook from './hooks/count'
// import addfriend from './hooks/count'
// import AddFriend from './hooks/addfriend';

// import TitleChange from './hooks/useEffect/titleChange';
// 订阅取消
// import Subscr from './hooks/useEffect/subscr';

// import MoreUse from './hooks/useEffect/moreUse';
import ContextHook from './hooks/useContext'



export const UseContext = createContext()
export const ThemeContext = createContext()
export default function App() {

  // const [show, setShow] = useState(true)
  return (
    <div>
      {/* <CounterHook /> */}
      {/* {show && <Subscr />}
      <button onClick={e => setShow(!show)}>切换</button> */}
      {/* <MoreUse /> */}
      <UseContext.Provider value={{ name: 'why', age: 18 }}>
        <ThemeContext.Provider value={{ color: 'red' }}>
          <ContextHook />
        </ThemeContext.Provider>
      </UseContext.Provider>

    </div>
  )
}
