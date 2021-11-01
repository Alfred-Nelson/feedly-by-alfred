import React, { useState, useEffect, createContext } from 'react'
import Frame from  "../../src/assets/Frame.png"
import {Typography} from  "@bigbinary/neetoui/v2";
import { Button } from "@bigbinary/neetoui/v2";
import { catagories } from '../constants/Catagories';
import { getData } from '../api/NewsApi';
import Line from './common/helper/Line';
import NewsList from './NewsBoard.js/NewsList';
import ModalCreate from './common/helper/ModalCreate';
import NoNewsModalHeader from './utils/NoNewsModalHeader';
import NoNewsModalBody from './utils/NoNewsModalBody';
import NoNewsModalFooter from './utils/NoNewsModalFooter';



const NoNews = () => {
    const [list , setList] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [loading,setLoading] =useState(true)
    const [name, setName] = useState("")
    const [email , setEmail] =useState("")
    const [message, setMessage] = useState("")

    const fetchNews = async (catagory) => {
        const res = await getData(catagory)
        const data = await res.data
        setList(prev => prev.concat({catagory , data : data.data[0]}))
        setLoading(false)
    } 

    const fetchRandomNews = (random) => {
        const reducedList = [
                                catagories[(random+0)%12],
                                catagories[(random+1)%12],
                                catagories[(random+2)%12],
                                catagories[(random+3)%12],
                                catagories[(random+4)%12],
                                catagories[(random+5)%12],
                            ]
        if(reducedList.includes("all")){
            reducedList.splice(reducedList.indexOf("all"),1,catagories[(random+6)%12])
        }
        reducedList.forEach((item) => {
            fetchNews(item)
        })
    }

    useEffect(() => {
        const random = Math.floor(Math.random() * 25);
        fetchRandomNews(random)
    },[])

    return (
        <div className= "flex flex-col items-center">
            <img src={Frame} className="mb-8" />
            <Typography style="h2" className="mb-5"> No News Articles Found</Typography>
            <Button style="secondary" size="large" label="Write to us" onClick={() => setShowModal(true)}/>
            <Line />
            {loading? <Typography className="mt-20">Loading ...</Typography>: null}

            <div className="flex flex-row flex-wrap justify-between mt-10">
                {list.map((item) => {
                    return <NewsList news={item.data} catagory={item.catagory} key={item.catagory} /> 
                })}
            </div>
            
            <ModalCreate
                size = "md"
                showModal = {showModal}
                header = { <NoNewsModalHeader  /> }
                setShowModal = {setShowModal}
                body = { <NoNewsModalBody setEmail ={setEmail} setName ={setName} name = {name} email= {email} setMessage={setMessage} message={message} /> }
                footer = { <NoNewsModalFooter setShowModal = {setShowModal}  name = {name} email= {email} message={message} setEmail ={setEmail} setName ={setName} setMessage={setMessage}  /> }
            />
        </div>
    )
}

export default NoNews
