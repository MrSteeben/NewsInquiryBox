import React, { Component } from 'react';
import axios from 'axios';
import ShowArticles from './ShowArticles';
import Qs from 'qs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
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
            url: 'https://proxy.hackeryou.com',
            method: 'GET',
            responseType: 'json',
            paramsSerializer: function(params) {
                return Qs.stringify(params, { arrayFormat: 'brackets' })
            },
            params: {
                reqUrl: `https://newsapi.org/v2/everything`,
                params: {
                    apiKey: 'a488805f03984505903cf55f276798af',
                    q: searchValue,
                    language: 'en',
                    pageSize: 25
                    
                }
                
            }
    })
    .then( (response) => {
        this.setState({ 
            articles: response.data.articles
        })

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
                    <FontAwesomeIcon icon={ faNewspaper } />
                    <h1>The News Inquiry Box</h1>
                </div>
                
                <fieldset>
                    <form onSubmit={this.handleClick} action="submit">
                        <label htmlFor="newArticle">Search the News Inquiry Box: </label>
                        <input onChange={this.handleChange} value={this.state.userInput} type="text" id="newArticle" placeholder="E.g. Health, Technology, Wired..." />

                        <button onSubmit={this.handleClick}><FontAwesomeIcon icon={ faSearch } aria-hidden="true"/></button>
                    </form>
                </fieldset> 

                <div>
                    {
                        this.state.articles.length > 0 
                        ? <ShowArticles articles={this.state.articles} />
                        : <p>Try search again</p>//add a NoArticles.js
                    }
                    
                </div>
                
                <footer>
                    <div className="wrapper">
                        <p>Copyright &copy; 2020 Stephen McMullin | Made at <a href="http://junocollege.com">Juno College</a></p>

                    </div>
                </footer>
                

            </div>

        );
    } // END RENDER


}

export default App;
