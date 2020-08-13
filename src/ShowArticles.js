import React from 'react';

const ShowArticles = (props) => {
    return(
        props.articles.map( (article, index) => {
            return (
                <div key={index} className="articleContainer wrapper">
                
                    <div>
                        <img src={article.urlToImage} alt="" />
                    </div>
                    <div>

                        <a href={article.url}><p>{article.title}</p></a>

                    </div>
                </div>
            )
        }) 

    )
}

export default ShowArticles