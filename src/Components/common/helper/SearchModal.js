import React,{useCallback, useContext, useEffect, useState} from 'react'
import ReactDOM  from 'react-dom';
import { Input } from "@bigbinary/neetoui/v2";
import { CatagoryContext } from '../../Main';
import { getData } from '../../../api/NewsApi';
import { debounce } from 'lodash';
import { Link } from 'react-router-dom';

const SearchModal = ({ showSearchModal, setSearchModal }) => {

    const {state} = useContext(CatagoryContext)
    const [array, setArray] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [input , setInput] = useState("")

    const fetchNews = async (cat) => {
        const res = await getData(cat)
        const data = await res.data
        const valueArray = data.data.map((val) => ({...val, catagory : data.category}))
        setArray(prev => [...prev, ...valueArray])
    }

    const fetchDetails = () => {
        Object.keys(state).forEach((val) => {
            if(state[val]===true){
                fetchNews(val)
                //setArray(prev => [...prev, ...data.data])
            }
        })
    }

    const handleChange = () => {
        if(array.length !== 0 ){
            const result = array.filter((item) => item.title.toLowerCase().includes(input.toLowerCase()))
            if(input.length === 0){
                setSearchResult([])
            }
            else{
                setSearchResult(result)
            }
        }
    }

    const handleOptimisedChange = useCallback(debounce(handleChange , 1000),[input])

    useEffect(() => {
        setArray([])
    },[state])

    useEffect(() => {
        if(Object.keys(state).length !== 0){
            fetchDetails()
        }
        return () => {}
    },[state])

    useEffect(() => {
       if(input.length!= 1 && array.length !==0){
            handleOptimisedChange()
       }
       else{
           setSearchResult([])
       }
    }, [input, array])



    const handleValueChange = (e) => setInput(e.target.value)

   

    if(!showSearchModal) return null

    return ReactDOM.createPortal (
        <div>
            <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80 "
                onClick={() => {
                    setSearchResult([])
                    setInput("")
                    setSearchModal(false)
                    }} >
            </div>
            <div className="fixed top-1/3 w-full">
                <div className="flex flex-col items-center w-full">
                    <Input
                        value= {input}
                        className="w-3/5" 
                        placeholder = "Search for News"
                        onChange = {(e) => {
                            handleValueChange(e)
                        }}
                    />
                    <div className="w-3/5 bg-white max-h-96 overflow-y-auto ">
                        {input!=="" && searchResult.map((item) => (
                            <Link to={`/article/${item.catagory}/${item.url.slice(33)}`}>
                                <div 
                                    className="p-3 m-2 border-gray-100 border-b-2 hover:bg-gray-50 " 
                                    onClick={() => {
                                        setInput("")
                                        setSearchModal(false)
                                        }}>
                                    {item.catagory} : {item.title}
                                </div>
                            </Link>
                        ))}                        
                    </div>
                </div>
            </div>
        </div> ,
        document.getElementById('portal')
    )
}

export default SearchModal
