import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,
  CHANGE_BANNERS,
  CHANGE_RECOMMEND
} from './constants'
import axios from 'axios'

export const addAction = num => ({
  type: ADD_NUMBER,
  num
})
export const subAction = num => ({
  type: SUB_NUMBER,
  num
})
export const incAction = () => ({
  type: INCREMENT

})
export const decAction = () => ({
  type: DECREMENT
})

// 轮播图及推荐
export const changeBannerAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners
})

export const changeRecommendAction = (recommends) => ({
  type: CHANGE_RECOMMEND,
  recommends
})

export const getHomeMultidataAction = dispatch=>{
  axios({
    url:"http://123.207.32.32:8000/home/multidata"
  }).then(res=>{
    const data=res.data.data
    console.log(res)
    dispatch(changeBannerAction(data.banner.list))
    dispatch(changeRecommendAction(data.recommend.list))
  })

}