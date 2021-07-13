const defaultState = {
  counter: 0,
  banners: [],
  recommends:[]
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 }
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 }
    case "ADD_NUMBER":
      return { ...state, counter: state.counter + action.num }
      case "SUB_NUMBER":
      return { ...state, counter: state.counter - action.num }
      case "CHANGE_BANNERS":
        return { ...state, banners: action.banners }
        case "CHANGE_RECOMMEND":
        return { ...state, recommends: action.recommends }
    
    default:
      return state
    }
}