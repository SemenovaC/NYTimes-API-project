import './BestSellersList.css'
import { useState, useEffect } from 'react';
import useNYServices from '../../services/NYServices';
import Error from '../error/Error';
import Spinner from '../spinner/Spinner';


const BestSellersList = () => {

  const [bestSellersArray, setBestSellersList] = useState([]);

  const {error, loading, getBestSellersList} = useNYServices();

 

  const onRequestBestSellersList = () => {
    getBestSellersList()
      .then(onNewBestSellersList)
  }

  useEffect(() => {
    onRequestBestSellersList();
  }, [])

  const onNewBestSellersList = (newBestSellersArray) => {
    setBestSellersList(newBestSellersArray);
  }


  function renderBestSellersList(arr) {
    const items = arr.map((item, i) => {
      console.log(item, i)

      return (
        <li className='book' key={i}>
          <div className='book-description-container'>
            <div className='book-title'>{item.title}</div>
            <div className='book-abstract'>{item.abstract}</div>
            <div className='book-author'>{item.author}</div>
          </div>
          <div className='book-image-container'>
            <img className='book-image' src={item.photo} alt={item.title}/>
          </div>
        </li>
      )
    });

    return (
      <ul className='books-container'>
        {items}
      </ul>
    )
  }

  const books = renderBestSellersList(bestSellersArray);

  const errorMessage = error ? <Error/> : null;
  const spinner = loading ? <Spinner/> : null;
  //const content = !(loading || error) ? bestSellers : null;


  return (
    <div className='bestSellers-block'>
        <div className='bestsellers-title-container'>
          <h2 className='bestsellers-title'>Bestsellers</h2>
        </div>
      <div className='bestSellersList-container'>
        {errorMessage}
        {spinner}
        {books}
      </div>
    </div>
  )



}

export default BestSellersList;