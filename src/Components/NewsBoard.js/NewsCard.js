import React from 'react'
import { Typography } from "@bigbinary/neetoui/v2";

const NewsCard = ({ news }) => {
    return (
        <div className="w-full flex justify-between" >

            <div className = "w-96 h-52 box-content bg-gray-100" >
                <img src={ news.imageUrl } className="object-scale-down w-full h-full" />
            </div>

            <div className="w-7/12" >

                <Typography style="h3" className = "text-left mb-3" >{ news.title }</Typography>

                <div className="flex justify-end mr-10 mb-5 text-gray-400">
                    <Typography style="body3">{ news.author } at { news.time } on { news.date }</Typography>
                </div>

                <Typography style="body2" className = "text-left float-none" >
                    { news.content.slice(0,300) } ...
                </Typography>

                <div className="flex justify-start mt-2">
                    <a href="#" className="text-blue-400">Read more..</a>
                </div>

            </div>
            
        </div>
    )
}

export default NewsCard
