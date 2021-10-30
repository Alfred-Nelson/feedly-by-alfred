import { useState } from 'react'

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


const useCatagories = () => {

    const [state, setState] = useState( mainCatagories)
    const [archiveState, setArchiveState] = useState(true)

    return [state, setState, archiveState , setArchiveState]
}

export default useCatagories
