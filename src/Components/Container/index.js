import React, { useEffect, useState, useContext } from 'react'
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Pane } from "@bigbinary/neetoui/v2";
import { Typography } from "@bigbinary/neetoui/v2";
import { Checkbox, Button } from "@bigbinary/neetoui/v2";
import { catagories } from '../../constants/Catagories';
import { CatagoryContext } from '../Main';
import { Check } from "@bigbinary/neeto-icons";
import { Link } from 'react-router-dom';
import HeaderFacilities from './HeaderFacilities';




const Container = ({ children }) => {

    const [ showFilterPane, setFilterPane ] = useState(false)
    const {state,setState} = useContext(CatagoryContext)
    const [manageFilter, setManageFilter] = useState({})

    useEffect(() => {
        setManageFilter(state)
    },[state]) 

    useEffect(() => {
        if(showFilterPane === false){
            setManageFilter(state)
        }
    },[showFilterPane])

    return (
        <div>
            <Header
                actionBlock={<HeaderFacilities setFilterPane = {setFilterPane} />}
                title="Feed.ly"
                className = "border-b-2"
            />
            <div className="my-20 mx-20 px-20 ">
                {children}
                <Pane isOpen={showFilterPane} onClose={() => setFilterPane(false)}>
                    <Pane.Header>
                        <Typography style="h2" weight="semibold">
                            Filter News
                        </Typography>
                    </Pane.Header>
                    <Pane.Body className="mt-5">
                        {catagories.map((catagory,id) => {
                            return <Checkbox
                                    checked={manageFilter[catagory]}
                                    id={catagory}
                                    label={catagory}
                                    key={catagory}
                                    onChange={(e) => 
                                        setManageFilter({...manageFilter, [catagory]: !(manageFilter[catagory])})
                                    }
                                     />
                        })}
                    </Pane.Body>
                    <Pane.Footer className="flex items-center space-x-2">
                            <Link to="/">
                            <Button
                                icon={Check}
                                size="large"
                                label="Save Changes"
                                onClick={() => {
                                    setState({...manageFilter})
                                    setFilterPane(false)
                            }}
                            />
                            </Link>
                            <Button
                                style="text"
                                size="large"
                                label="Cancel"
                                onClick={() => setFilterPane(false)}
                            />
                    </Pane.Footer>
                </Pane>
            </div>
        </div>
    )
}

export default Container
