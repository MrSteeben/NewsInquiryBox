import React from 'react';

const ShowArticles = (props) => {
    return(
        props.articles.map( (article, index) => {
            return (
                <div key={index} className="articleContainer">
                
                    <div>
                        <img src={article.urlToImage} alt="" />
                    </div>
                    <div className="contentBox">

                        <a href={article.url}><h2>{article.title}</h2></a>
                        <h3>{article.author}</h3>
                        <time>{article.publishedAt}</time>
                        <p>{article.description}</p>
                        <a href={article.url}>Read more...</a>
                        <p className="newsSource">Source: {article.source.name}</p>

                    </div>
                </div>
            )
        }) 

    )
}

export default ShowArticles