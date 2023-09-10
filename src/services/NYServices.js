import { useHttp } from "../hooks/http.hook";

const useNYServices = () => {
  const {loading, request, error} = useHttp();

  const _apiBase = 'https://api.nytimes.com/svc/';
  const _apiKey = 'JA0ZM5VrVzB0qPR7hPjcn2toU1fK1Oxr';

  const getMostViewedArticles = async () => {
    const res = await request(`${_apiBase}mostpopular/v2/viewed/1.json?api-key=${_apiKey}`);
    
    //  console.log(res);
    //  console.log(res.results.map(_transformMostViewedArticle))
    return res.results.map(_transformMostViewedArticle);
  } 

  const getBestSellersList = async () => {
    const data = await request(`${_apiBase}books/v3/lists/current/hardcover-fiction.json?api-key=${_apiKey}`);

    // console.log(data.results.books.map(_transformBestSellersList));
    return data.results.books.map(_transformBestSellersList);
  }

  const getArticleBySearch = async (textInput) => {
    const data = await request(`${_apiBase}search/v2/articlesearch.json?q=${textInput}&api-key=${_apiKey}`);

    console.log(data.response.docs);
    //console.log(data.response.docs.map(_transformSearchedArticle));
    return data.response.docs.map(_transformSearchedArticle);
  }


  const _transformMostViewedArticle = (article) => {
    return {
      id: article.id,
      url: article.url,
      photo: article.media[0]?.["media-metadata"][1]?.url,
      title: article.title,
      abstract: article.abstract,
      date: article.published_date
    }
  }

  const _transformBestSellersList = (book) => {
    return {
      title: book.title,
      photo: book.book_image,
      author: book.author,
      abstract: book.description
    }
  }

  const _transformSearchedArticle = (article) => {
    return {
      headline: article.headline.main,
      abstract: article.abstract,
      author: article.byline.original,
      published: article.pub_date,
      url: article.web_url,
    }
  }

  return {
    loading,
    request,
    error,
    getMostViewedArticles,
    getBestSellersList,
    getArticleBySearch
  }

}



export default useNYServices;