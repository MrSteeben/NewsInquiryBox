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
                        <datetime>{article.publishedAt}</datetime>
                        <p>{article.description}</p>
                        <a href={article.url}>Read more...</a>
                        <p>Source: {article.source.name}</p>

                    </div>
                </div>
            )
        }) 

    )
}

export default ShowArticles