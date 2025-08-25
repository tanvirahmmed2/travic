import React, { useEffect, useState } from 'react'
import axios from 'axios'

const National = () => {
    const [loading, setLoading] = useState(true)
    const [articles, setArticles] = useState(null)

    const API_KEY = "cd5efe442568474c950585262bee4d4b"
    const URL = `https://newsapi.org/v2/everything?q=Apple&from=2025-08-19&sortBy=popularity&apiKey=${API_KEY}`


    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(URL)
                setArticles(response.data.articles)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        fetchNews()
    }, [])
    if(loading) return <p>loading</p>

    return (
        <div>
            {articles.map((article)=>{
                const {title, description, author, urlToImage, content, publishedAt}= article
                return (
                    <div key={article.index}>
                        <p>{title}</p>
                        <p>{description}</p>
                        <img src={urlToImage} alt="image not found" />
                        <h1>{author}</h1>
                        <p>{publishedAt}</p>
                        <p>{content}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default National
