
import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../Config'

import Pics from './Pics';
import NoMatch from "./NoMatch";
import Loading from "./Loading";

export default class Results extends Component  {

    constructor() {
        super();
        this.state = {
            pics: [],
            loading: true
        };
    }

    componentDidMount() {
        this.performSearch();
    }

    //Fetch data from flickr
    performSearch = () => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.props.query}&per_page=16&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    pics: response.data.photos.photo,
                    loading: false
                })
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
                this.setState({
                    loading: false
                })
            });
    };

    render() {

        //checks if the flickr Search is still in progress -> then if there are no matches (pics = [] ) render comp. NoMatch, else render comp. Pics
        if (this.state.loading)
            return <Loading/>;
        else {
            if(this.state.pics.length === 0){
                return(
                    <NoMatch/>
                )
            }
            return (<Pics data={this.state.pics} query={this.props.query}/>)
        }
    }
}