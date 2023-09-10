import MostViewedArticles from "../mostViewedArticles/mostViewedArticles";
import BestSellersList from "../bestSellersList/BestSellersList";
import './MainPage.css';



const MainPage = () => {
  return (
    <div className="main-page-style">
      <MostViewedArticles/>
      <BestSellersList/>
    </div>
  )
}

export default MainPage;