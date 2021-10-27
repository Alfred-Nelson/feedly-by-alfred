import React ,{ createContext } from 'react'
import Container from './Container'
import Feeds from './Feeds'
import useCatagories from './constants/useCatagories'

export const CatagoryContext = createContext()

const Main = () => {

    const [state,dispatch] =useCatagories()

    return (
        <CatagoryContext.Provider value={{ state,dispatch }}>
            <Container>
                <Feeds />
            </Container>
        </CatagoryContext.Provider>
    )
}

export default Main
