import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import Loading from '../../../component/loading'
import ErrorMessage from '../../../component/ErrorMessage'
import TagList from '../../../component/tagList'

const Article = ({match})=> {

    const apiUrl = `/articles/${match.params.slug}`
    const [{ response, error, isLoading}, doFetch] = useFetch(apiUrl) 

    useEffect(()=>{
        doFetch()
    }, [doFetch])

    return (
        <div className="article-page">
            <div className="banner">
                {!isLoading && response && (
                    <div className="container">
                        <h1>{response.article.title}</h1>
                        <div className="article-meta">
                            <Link to={`/profiles/${response.article.author.username}`}>
                                <img src = {response.article.author.image}  alt=""/>
                            </Link>
                            <div className="info">
                                <Link to={`/profiles/${response.article.author.username}`}>
                                    {response.article.author.username}
                                </Link>
                                <span className="date">{response.article.createdAt}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="container page">
                {isLoading && <Loading />}
                {error && <ErrorMessage />}
                {!isLoading && response && (
                    <div className='row article-content'>
                        <div className="col-xs-12">
                            <div>
                                <p>
                                    {response.article.body}
                                </p>
                                <TagList tags = {response.article.tagList}/>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Article