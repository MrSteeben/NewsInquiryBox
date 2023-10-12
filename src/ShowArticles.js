import React from 'react';

const ShowArticles = (props) => {
    return(
        props.articles.map( (article, index) => {
            return (
                <a href={article.url} className="articleBoxEffect" target="_blank" rel="noreferrer">
                    <div key={index} className="articleContainer">
                
                        <div>
                            <img src={article.urlToImage} alt="" />
                        </div>
                        <div className="contentBox">

                            <a href={article.url} target="_blank" rel="noreferrer"><h2>{article.title}</h2></a>
                            <h3>Author: {article.author}</h3>
                            <p className="publishedTime">{article.publishedAt.slice(0, 10)}</p>
                            <p className="newsSource">Source: {article.source.name}</p>
                            <p className="articleDescription">{article.description}</p>
                            <a href={article.url} target="_blank" rel="noreferrer">Read more...</a>
                        </div>
                    </div>
                </a>
            )
        }) 
    )
}

export default ShowArticles