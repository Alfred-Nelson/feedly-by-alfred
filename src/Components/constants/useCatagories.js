import { useEffect, useReducer } from 'react'

const mainCatagories = {
    all : false,
    national : true, //Indian News only
    business : true,
    sports : true,
    world : true,
    politics : false,
    technology : false,
    startup : false,
    entertainment : false,
    miscellaneous : false,
    science : false,
    automobile : false
}

const ACTIONS = {
    TOGGLE : 'toggle',
    GETMAIN : 'getselected',
    GETNONMAIN : 'getnotselected'
}



const useCatagories = () => {

    const reducer = (state, action) => {
        switch(action.type){
            case ACTIONS.TOGGLE :
                state[action.payload.name] = state[action.payload.name] ? false : true
                return { ...state }
        }
    }

    const [state, dispatch] = useReducer(reducer, mainCatagories)

    return [state, dispatch]
}

export default useCatagories
