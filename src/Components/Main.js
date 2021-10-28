import React ,{ createContext } from 'react'
import { 
            BrowserRouter as Router, 
            Switch,
            Route 
        } from 'react-router-dom'
import Container from './Container'
import Feeds from './Feeds'
import useCatagories from './constants/useCatagories'
import ArticleBoard from './ArticleBoard'


export const CatagoryContext = createContext()

const Main = () => {

    const [state,setState] =useCatagories()

    return (
        <CatagoryContext.Provider value={{ state,setState }}>
            <Router>
                <Switch>
                    <Container>
                        <Route exact path="/" component={Feeds} />
                        <Route path="/article/:catagory/:slug" 
                            component={(props) => <ArticleBoard {...props} key={window.location.pathname}/>}
                        />
                    </Container>
                </Switch>
            </Router>
        </CatagoryContext.Provider>
    )
}

export default Main
