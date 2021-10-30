import React ,{ createContext } from 'react'
import { 
            BrowserRouter as Router, 
            Switch,
            Route,
        } from 'react-router-dom'
import Container from './Container'
import Feeds from './Feeds'
import useCatagories from './common/hooks/useCatagories'
import ArticleBoard from './ArticleBoard'
import NoNews from './NoNews'
import Unknown from './Unknown'


export const CatagoryContext = createContext()

const Main = () => {

    const [state,setState,archiveState, setArchiveState] =useCatagories()

    return (
        <CatagoryContext.Provider value={{ state, setState, archiveState, setArchiveState }}>
            <Router>
                <Container>
                    <Switch>
                            <Route exact path="/" component={Feeds} />
                            <Route exact path="/article/:catagory/:slug" 
                                component={(props) => <ArticleBoard {...props} key={window.location.pathname}/>}
                            />
                            <Route exact path="/no-news" component={NoNews} />
                            <Route component={Unknown} />
                    </Switch>
                </Container>
            </Router>
        </CatagoryContext.Provider>
    )
}

export default Main
