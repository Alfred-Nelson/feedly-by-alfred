import React, { useEffect } from 'react'
import { Typography } from "@bigbinary/neetoui/v2";
import { useSlugExtract } from '../constants/useSlug';
import { Link } from 'react-router-dom';

const NewsList = ({ news , catagory}) => {

    const slug = useSlugExtract(news.url)

    return (
        <div className="flex w-5/12 justify-between m-2 items-center font-light" >
            <img src={news.imageUrl} className="w-28 h-28 mr-3" />
            <div className="flex flex-col items-start box-content justify-around w-3/4 h-full" >
                <Typography style="h4" className="text-left">{news.title}</Typography>
                <Typography style="body3" >{ news.author } at { news.time } on { news.date }</Typography>
                <Link to={{pathname: `/article/${catagory}/${slug}`}} className="text-blue-500">Read more..</Link>
            </div>
        </div>
    )
}

export default NewsList
