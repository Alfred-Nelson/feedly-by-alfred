import axios from "axios";

export const getData = (payload) => axios.get(`https://inshortsapi.vercel.app/news?category=${payload}`)

export const postMessage = (payload) => axios.post("https://webhook.site/3b662765-d23a-4beb-94cf-87ad608f0b90",payload)