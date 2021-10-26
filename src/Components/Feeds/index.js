import React, { useEffect, useState } from 'react'
import { getData } from '../api/NewsApi'
import useCatagories from '../constants/useCatagories'
import { Typography } from "@bigbinary/neetoui/v2";

const Feeds = () => {

    const [ news , setNews ] = useState([])
    const [ state ] = useCatagories()

    const fetchDetails = async (catagory) => {
        console.log("yes")
        const response = await getData(catagory)
        const necessaryNews = response.data.data.slice(0,5)
        setNews(prev => prev.concat({ catagory, data: necessaryNews }))
    }

    useEffect(() => {
        Object.keys(state).forEach((catagory) => {
            if(state[catagory] == true){
                fetchDetails(catagory)
            }
        })
        return () => {}
    },[])

    useEffect(() => {
        console.log(news)
    }, [news])

    return (
        <div>
            
                {news.map((eachCatagory) => {
                    return eachCatagory.data.map((eachNews) => {
                        return <Typography key={eachNews.id}>{eachNews.title}</Typography>
                    })
                })}
                
        </div>
    )
}

export default Feeds
