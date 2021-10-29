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

    return [state, setState]
}

export default useCatagories
