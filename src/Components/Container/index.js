import React, { useEffect, useState, useContext } from 'react'
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Pane } from "@bigbinary/neetoui/v2";
import { Typography } from "@bigbinary/neetoui/v2";
import { Checkbox } from "@bigbinary/neetoui/v2";
import { catagories } from '../constants/Catagories';
import { CatagoryContext } from '../Main';
import { ACTIONS } from '../constants/useCatagories';
import HeaderFacilities from './HeaderFacilities';




const Container = ({ children }) => {

    const [ showFilterPane, setFilterPane ] = useState(false)
    const {state,dispatch} = useContext(CatagoryContext)

    useEffect(() => {
        console.log(state)
    },[state])

    return (
        <div>
            <Header
                actionBlock={<HeaderFacilities setFilterPane = {setFilterPane} />}
                title="Feed.ly"
                className = "border-b-2"
            />
            <div className="mt-20 mx-20 px-20">
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
                                    checked={state[catagory]}
                                    id={catagory}
                                    label={catagory}
                                    key={catagory}
                                    onChange={(e) => 
                                        dispatch( 
                                            {
                                                type: ACTIONS.TOGGLE,
                                                payload: { name: e.target.id}
                                            } 
                                        )
                                    }
                                     />
                        })}
                    </Pane.Body>
                </Pane>
            </div>
        </div>
    )
}

export default Container
