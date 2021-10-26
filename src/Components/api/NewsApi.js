import axios from "axios";

export const getData = (payload) => axios.get(`https://inshortsapi.vercel.app/news?category=${payload}`)
