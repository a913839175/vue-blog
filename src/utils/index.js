import axios from 'axios'
import qs from 'qs'
import store from '../store'

let axiosDate = new Date()
export const getData = (url, data) =>{
    store.dispatch("showloading");
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: data
      }).then((res) => {
        store.dispatch("hideloading");
         console.log(store)
        resolve(res.data);
      }).catch((error) => {
        console.log("get请求failed")
        reject(err)
        this.$store.dispatch("showloading");
      })
    })
  }
export const postData = (url, data) =>{
    store.dispatch("showloading");
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      }).then((res) => {
        store.dispatch("hideloading");
        resolve(res)
      }).catch((error) => {
         console.log(store)
         store.dispatch("showloading");
         console.log(store)
         console.log("post请求failed")
         reject(err)

      })
    })
}