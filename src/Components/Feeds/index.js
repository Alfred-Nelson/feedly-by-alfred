import { debounce } from 'lodash'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { getData } from '../api/NewsApi'
import { CatagoryContext } from '../Main'
import NewsBoard from '../NewsBoard.js'
import {Typography} from  "@bigbinary/neetoui/v2";


const Feeds = () => {

    const [ news , setNews ] = useState([])
    const {state , dispatch} = useContext(CatagoryContext)
    const [loading , setLoading] = useState(true)

    const fetchDetails = async (catagory) => {
            const response = await getData(catagory)
            const necessaryNews = response.data.data.slice(0,5)
            setNews(prev => prev.concat({ catagory, data: necessaryNews }))
    }

    const fetchNews = (state) => {
        setNews([])
        Object.keys(state).forEach((catagory) => {
            if(state[catagory] === true){
                console.log("catagory = ",catagory)
                fetchDetails(catagory)
            }
        })
        setLoading(false)
    }

    const optimizedFetch = useCallback(debounce((state) => fetchNews(state),1000),[])

    useEffect(() => {
        setLoading(true)
        optimizedFetch(state)
        return () => {setNews([])}
    },[state])

    return (
        <div>
                {news.map((eachCatagory) => {
                   return <NewsBoard news= {eachCatagory} key = {eachCatagory.catagory}/>
                })} 
                <Typography>{loading ? "Loading..." : null} </Typography>
        </div>
    )
}

export default Feeds
