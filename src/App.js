import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';

import NavMenu from './components/navMenu/navMenu';
import Spinner from './components/spinner/Spinner';
const MainPage = lazy(() => import('./components/pages/MainPage'));
const FindArticles = lazy(() => import('./components/pages/FindArticles'))




function App() {


  return (
    <div className="App">
      <Router>
        <div>
          <NavMenu/>
          <main>
            <Suspense fallback={<Spinner/>}>
              <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/findarticle" element={<FindArticles/>}/>
              </Routes>
            </Suspense>
          </main>
        </div>
      </Router> 
    </div>
  );
}

export default App;
