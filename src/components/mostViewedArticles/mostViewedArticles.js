import {useState, useEffect } from "react";
import useNYServices from "../../services/NYServices";
import Error from "../error/Error";
import Spinner from "../spinner/Spinner";
import './mostViewedArticles.css'

const MostViewedArticles = () => {

  const [articleList, setArticleList] = useState([]);

  const {loading, error, getMostViewedArticles} = useNYServices();


  const onRequest = () => {
    getMostViewedArticles()
      .then(onArticleListLoaded)
  }

  useEffect(() => {
    onRequest();
  }, [])

  const onArticleListLoaded = (newArticleList) => {
    setArticleList(newArticleList);
  }


  function renderMostViewedArticles(arr) {
    const items = arr.map((item, i) => {
      //console.log(item, i);

      return (
        <li className='mostviewed-article' key={item.id}>
          <div className='article-picture'>
            <img src={item.photo} alt={item.title} />
          </div>
          <div className='article-title'>{item.title}</div>
          <div className='article-abstract'>{item.abstract}</div>
          <div className='article-date'>{item.date}</div>
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="url">
            <div className="article-link">Read Full Article</div>
          </a>
        </li>
      )
    });

    return (
      <ul className='most-viewed-articles-grid'>
        {items}
      </ul>
    )
  }

  const items = renderMostViewedArticles(articleList);

  const errorMessage = error ? <Error/> : null;
  const spinner = loading ? <Spinner/> : null;

  return (
    <div className="mostViewedArticlesBlock">
      <h2 className="recent-news-title">Recent News</h2>
      <div className="mostViewedArticles">
        {errorMessage}
        {spinner}
        {items}
      </div>
    </div>
  )
}


export default MostViewedArticles;