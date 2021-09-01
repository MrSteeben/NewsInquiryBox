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
    
    // When component loads call the API to load content
    componentDidMount() {
        this.apiCall();
    }

    // Take the user's input and store it into state
    handleChange = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }
    
    // When user clicks, pass in the user's input stored into state to the API call
    handleClick = (e) => {
        e.preventDefault();
        this.apiCall(this.state.userInput);

        // Clear state after the search has completed
        this.setState({
            userInput: ""
        })
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
                        // If articles is greater than 0, pass articles array to ShowArticles as a prop
                        this.state.articles.length > 0 
                        ? <ShowArticles articles={this.state.articles} />
                        // If no articles show up, prompt user to try again
                        : <p>Try search again</p>
                    }
                </div>
                
                <footer>
                    <div className="wrapper">
                        <p>Copyright &copy; 2020 Stephen McMullin | Made at <a href="http://junocollege.com">Juno College</a></p>
                    </div>
                </footer>

            </div>
        ) // end return
    } // END RENDER

}

export default App;


