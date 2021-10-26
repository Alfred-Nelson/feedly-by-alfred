import React, { useEffect } from 'react'
import { Typography } from "@bigbinary/neetoui/v2";

const NewsList = ({ news }) => {

    useEffect(() => console.log("yes") , [])

    return (
        <div className="flex w-5/12 justify-between m-2 items-center font-light" >
            <img src={news.imageUrl} className="w-28 h-28 mr-3" />
            <div className="flex flex-col items-start box-content justify-around w-3/4 h-full" >
                <Typography style="h4" className="text-left">{news.title}</Typography>
                <Typography style="body3" >{ news.author } at { news.time } on { news.date }</Typography>
                <a href="#" className="text-blue-500">Read more..</a>
            </div>
        </div>
    )
}

export default NewsList
