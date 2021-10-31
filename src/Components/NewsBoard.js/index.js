import React, { useEffect } from 'react'
import { Typography } from "@bigbinary/neetoui/v2";
import { capitalize } from '../../utils/capitalize';
import NewsCard from './NewsCard';
import Line from '../common/helper/Line'
import NewsList from './NewsList';

const NewsBoard = ({ news }) => {

    useEffect(() => {
        console.log("NEWS NO", news)
    },[])

    return (
        <div className="flex flex-col items-start mt-12 flex-wrap">
            <Typography style="h2" className="mb-10 mt-5 ml-10 lg:ml-0">{capitalize(news.catagory)} News</Typography>
            {news.data.length > 0 ?
            (<div>
                <NewsCard news = {news.data[0]} catagory={news.catagory}/>
                <Line />
                <div className="flex flex-row flex-wrap justify-between mt-10">
                    {news.data.slice(1).map((data) => {
                        return <NewsList news={data} catagory={news.catagory} key={data.title} />
                    })}
                </div>
            </div>) : <Typography style="body1">No articles found</Typography>}
            <Line />
        </div>
    )
}

export default NewsBoard
