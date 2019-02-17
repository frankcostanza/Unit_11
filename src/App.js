//Feature
import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

//CSS
import './App.css';

//Components
import Results from './Components/Results';
import SearchForm from "./Components/SearchForm";
import Nav from "./Components/Nav";
import StartSearch from './Components/StartSearch';
import NotFound from "./Components/NotFound";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter forceRefresh={true}>
                <div className="container">
                    <SearchForm/>
                    <Nav />
                    <div>
                    <Switch>
                        <Route exact path="/" component={StartSearch}/>
                        <Route exact path="soccer" render={ () => <Results query="soccer"/>} />
                        <Route exact path="triathlon" render={ () => <Results query="triathlon"/>} />
                        <Route exact path="climbing" render={ () => <Results query="climbing"/>} />
                        <Route path="/:query" render={ props => <Results query={ props.match.params.query }/> } />
                        <Route component={NotFound}/>
                    </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}