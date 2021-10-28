import React ,{ useState,useEffect } from 'react'
import { getData } from '../api/NewsApi'

export const useSlugExtract = (url) => {
    return url.slice(33)
}

export const useSlugFetch = (catagory, slug , setLoading) => {
    const [list, setList] = useState([])
    const [article , setArticle] = useState({})
    const [changedList, setChangedList] = useState([])
    
    const fetchNews = async () => {
        const res = await getData(catagory)
        const data = res.data.data
        setList(data)
        setLoading(false)
    }

    const getDomain = () => {
        return(list[0]?.url.slice(0,33))
    }

    useEffect(() => {
        fetchNews()
    },[])

    useEffect(() => {
        const domain = getDomain()
        list.forEach((news) => {
            if(news.url === `${domain}${slug}`){
                setArticle(news)
            }
            else{
                setChangedList(prev => [...prev, news])
            }
        })
    },[list])

    return([article,changedList])
}

