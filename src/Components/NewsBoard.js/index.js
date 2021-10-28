import React, { useEffect } from 'react'
import { Typography } from "@bigbinary/neetoui/v2";
import { capitalize } from '../helper/capitalize';
import NewsCard from './NewsCard';
import Line from '../helper/Line'
import NewsList from './NewsList';

const NewsBoard = ({ news }) => {

    return (
        <div className="flex flex-col items-start mt-12">
            <Typography style="h2" className="mb-10 mt-5">{capitalize(news.catagory)} News</Typography>
            <NewsCard news = {news.data[0]} catagory={news.catagory}/>
            <Line />
            <div className="flex flex-row flex-wrap justify-between mt-10">
                {news.data.slice(1).map((data) => {
                    return <NewsList news={data} catagory={news.catagory} key={data.title} />
                })}
            </div>
            <Line />
        </div>
    )
}

export default NewsBoard
