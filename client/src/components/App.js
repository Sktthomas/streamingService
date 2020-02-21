import React from 'react';
import {Router, Route, Switch} from'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './Header'
import createBrowserHistory from '../history';

const App = () => {
    return(
        <div className="ui container">
            <Router history={createBrowserHistory}>
            <div>
            <Header /> {/* Since Header makes use of a Link component tag, we must have it inside the Router component */ }
            <Switch> {/*Switch allows us to only show one route for any given path we go to. Otherwise we might see multiple components showing for one path*/}
            <Route path = "/" exact component={StreamList}/> {/*Exact ensures that we only get the exact page when using a / otherwise it would render it every time we load a page cause every one contains a / */}
            <Route path = "/streams/new" exact component={StreamCreate} />
            <Route path = "/streams/edit/:id" exact component={StreamEdit}/>
            <Route path = "/streams/delete/:id" exact component={StreamDelete}/>
            <Route path = "/streams/:id" exact component={StreamShow}/>
            </Switch>
            </div>
            </Router>
        </div>
    )
}

export default App;