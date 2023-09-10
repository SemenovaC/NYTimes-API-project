import './FindArticles.css';

import { useState, useEffect } from 'react';
import useNYServices from '../../services/NYServices';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

const FindArticles = () => {

  const [inputInf, setInputInf] = useState('');
  const [text, setText] = useState('');
  const [foundedArticles, setFoundedArticles] = useState([]);

  const {error, loading, getArticleBySearch} = useNYServices();


  const onNewArticlesArray = (newFoundedArticles) => {
    setFoundedArticles(newFoundedArticles);
  }

  const onRequestFindArticles = () => {
    getArticleBySearch(text)
      .then(onNewArticlesArray)
  }

  useEffect(() => {
    onRequestFindArticles();
  }, [text]);

  function renderFoundArticles(arr) {
    const items = arr.map((item, i) => {
      console.log(item, i)

      return (
        <li className='article' key={i}>
          <div className='article-description-container'>
            <div className='article-title'>{item.headline}</div>
            <div className='article-abstract'>{item.abstract}</div>
            <div className='article-author'>{item.author}</div>
            <div className='article-published'>{item.published}</div>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="url">
              <div className="article-link">Read Full Article</div>
            </a>
          </div>
        </li>
      )
    });

    return (
      <ul className='article-container'>
        {items}
      </ul>
    )
  }

  const searchedArticles = renderFoundArticles(foundedArticles);

  const errorMessage = error ? <Error/> : null;
  const spinner = loading ? <Spinner/> : null;

  return (
    <div className="find-article-container">
      <div className='input-container'>
        <input 
          className='find-article-input' 
          type="text" 
          placeholder="e.g. education"
          onChange={(e) => setInputInf(e.target.value)} />
        <button onClick={() => setText(inputInf)} className='find-article-button' type='submit'>Search</button>
      </div>
      <div className="found-articles-block">
        <div className="new-article">
          <div>
            {searchedArticles}
            {errorMessage}
            {spinner}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindArticles;