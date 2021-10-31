import React, { useCallback, useContext, useEffect, useState } from 'react'
import { debounce } from 'lodash';
import { getData } from '../../api/NewsApi'
import { CatagoryContext } from '../Main'
import {Typography, Tag} from  "@bigbinary/neetoui/v2";
import { Redirect } from 'react-router';
import NewsBoard from '../NewsBoard.js'
import { datefy } from '../../utils/datefy';

const Feeds = () => {

    const [ news , setNews ] = useState([])
    const { state, setState, archiveState, setArchiveState} = useContext(CatagoryContext)
    const [loading , setLoading] = useState(true)

    const fetchDetails = async (catagory) => {
            const response = await getData(catagory)
            const allNews = response.data.data
            let necessaryNews
            if(archiveState){
                necessaryNews = allNews.slice(0,5)
            }
            else{
                necessaryNews = datefy(allNews)
            }
            setNews(prev => prev.concat({ catagory, data: necessaryNews }))
            setLoading(false)
    }

    const fetchNews = () => {
        Object.keys(state).forEach((catagory) => {
            if(state[catagory] === true){
                console.log("catagory = ",catagory)
                fetchDetails(catagory)
            }
        })
    }

    useEffect(() => {
        setLoading(true)
        setNews(prev => prev.filter((_) => false))
        fetchNews()
        return () => {setNews([])}
    },[state])



    return (
        <div>
            {!Object.values(state).includes(true) ? <Redirect to="/no-news" /> : null}
            <div className="flex justify-start flex-wrap">
            {!loading && Object.keys(state).filter((val)=> state[val])
                .map((catagory) =><Tag 
                                    label={catagory} 
                                    style="large" 
                                    key={catagory}
                                    onClose={()=>
                                        setState(prev => ({...prev, [catagory]:false}))
                                    } 
                                    className="mx-5 mb-5 mt-5 md:mb-0"
                                    />)}
            </div>
            {news.map((eachCatagory) => {
                return <NewsBoard news= {eachCatagory} key = {eachCatagory.catagory}/>
            })} 
            <Typography className="mt-20">{loading ? "Loading..." : null} </Typography>
        </div>
    )
}

export default Feeds
