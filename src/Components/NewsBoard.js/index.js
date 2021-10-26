import React, { useEffect } from 'react'
import { Typography } from "@bigbinary/neetoui/v2";
import { capitalize } from '../helper/capitalize';
import NewsCard from './NewsCard';

const NewsBoard = ({ news }) => {

    useEffect(() => {
        console.log(news)
    },[])

    return (
        <div className="flex flex-col items-start">
            <Typography style="h3" className="mb-10">{capitalize(news.catagory)} News</Typography>
            <NewsCard news = {news.data[1]}/>
        </div>
    )
}

export default NewsBoard
