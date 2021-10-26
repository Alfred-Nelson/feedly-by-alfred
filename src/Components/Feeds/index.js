import React, { useEffect, useState } from 'react'
import { getData } from '../api/NewsApi'
import useCatagories from '../constants/useCatagories'
import NewsBoard from '../NewsBoard.js'


const Feeds = () => {

    const [ news , setNews ] = useState([])
    const [ state ] = useCatagories()

    const fetchDetails = async (catagory) => {
        const response = await getData(catagory)
        const necessaryNews = response.data.data.slice(0,5)
        setNews(prev => prev.concat({ catagory, data: necessaryNews }))
    }

    useEffect(() => {
        Object.keys(state).forEach((catagory) => {
            if(state[catagory] === true){
                fetchDetails(catagory)
            }
        })
        return () => {setNews([])}
    },[])

    return (
        <div>
            
                {news.map((eachCatagory) => {
                   return <NewsBoard news= {eachCatagory} key = {eachCatagory.catagory}/>
                })}
                
        </div>
    )
}

export default Feeds
