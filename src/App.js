import React, { Component } from 'react';
import axios from 'axios';
import ShowArticles from './ShowArticles'

import './App.scss';

class App extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            userInput: ''
            
        }
    }
    
    // Call the news API with a default search value of Miscellaneous and store into initial state
    apiCall = (searchValue='Miscellaneous') => {
        axios({
            url: 'https://newsapi.org/v2/everything',
            method: 'GET',
            responseType: 'json',
            params: {
                q: searchValue,
                apiKey: 'a488805f03984505903cf55f276798af',
                language: 'en',
                pageSize: 25
            }
    })
    .then( (response) => {

        // filter() through response results to store article, and index to be used as a key
        this.setState({
            articles: response.data.articles
        })
        
        // if (response.data.articles > 0) {
        // } else {
        //     alert("no articles, try again");
        //     this.setState({
        //         userInput: ''
        //     }) 
            
        // }

    })
    .catch( () => {
        console.log("Something happened to axios call, look into it!");
    })

    }
    
    componentDidMount() {
        this.apiCall();
    }

    handleChange = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }
    
    handleClick = (e) => {
        e.preventDefault();
        // console.log("click is working");
        this.apiCall(this.state.userInput);

        
        // example of SET STATE CALLBACK -- IMPORTANT ON PROJECT !!!!!!!
        this.setState({
            userInput: ""
        })
        // , () => {
        //     console.log(this.state.userInput);
        // })
    }

    render() {
        return (
            <div className="header wrapper">
                <div className="siteName">
                    <h1>The News Inquiry Box</h1>
                </div>
                
                <fieldset>
                    <form onSubmit={this.handleClick} action="submit">
                        <label htmlFor="newArticle">Search for a particular news article</label>
                        <input onChange={this.handleChange} value={this.state.userInput} type="text" id="newArticle" />

                        <button onClick={this.handleClick}>Search</button>
                    </form>
                </fieldset> 

                <div>
                    {
                        this.state.articles.length > 0 
                        ? <ShowArticles articles={this.state.articles} />
                        : <p>Try search again</p>//add a NoArticles.js
                    }
                    
                </div>
            </div>

        // Will need a ternary operator for displaying Articles and NoArticles
        // Articles will display if result > 0, NoArticles will display if articles = 0

        );
    }


}

export default App;
