import React,{useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Copy } from "@bigbinary/neeto-icons";
import { useSlugFetch } from '../common/hooks/useSlug'
import {Typography , Button} from  "@bigbinary/neetoui/v2";
import {lorem} from "../../constants/lorem"
import { Redirect } from 'react-router';
import Line from "../common/helper/Line"
import NewsList from '../NewsBoard.js/NewsList';

const ArticleBoard = () => {
    const {catagory, slug} = useParams()
    const [loading, setLoading] = useState(true)
    const [article,changedList] = useSlugFetch(catagory, slug ,setLoading)
    const [random] = useState(Math.floor(Math.random() * (20 + 1) ))

    useEffect(() => {
        console.log(catagory, slug)
    },[])

    if(loading) {
        return(<Typography style="body1">Loading...</Typography>)
    }
    return (
        <div className="w-full flex flex-col items-center">
            {Object.keys(article).length===0 ? <Redirect to="/no-page-found" />: null}
            <div className = "flex flex-col items-start">
                <Typography style="h1">{article.title}</Typography>
                <div className="w-full flex justify-end">
                    <Button
                        style="secondary"
                        icon ={() => <Copy />}
                        onClick = { () => navigator.clipboard.writeText(article.readMoreUrl)}
                    />
                </div>
                <Typography style="body3" className ="mt-5 mb-10">
                    { article.author } at { article.time } on { article.date }
                </Typography>
            </div>
            <div className = "w-3/5 h-96 box-content bg-gray-100" >
                <img src={ article.imageUrl } className="object-scale-down w-full h-full" />
            </div>
            <div className = "flex flex-col items-start">
                <Typography style="body1"className ="mt-10 text-left">{article.content}</Typography>
                <Typography style="body1" className ="mt-5 mb-10 text-left">
                    {lorem}
                </Typography>
            </div>
            <Line />
            <div className="flex flex-row flex-wrap justify-between mt-10">
                {changedList.slice(random,random+4).map((data) => {
                    return <NewsList news={data} catagory={catagory} key={data.title} />
                })}
            </div>
            <Line />

        </div>
    )
}

export default ArticleBoard
