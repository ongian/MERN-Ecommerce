import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontPage from './components/pages/FrontPage';
import ProductDetailPage from './components/pages/ProductDetailPage';
import Cart from './components/pages/Cart';
import Header from './components/layout/Header/Header';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/product/:productname/:id' element={<ProductDetailPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/' element={<FrontPage />} exact />
        </Routes>
      </BrowserRouter>
      <footer>
        Footer 2022
      </footer>
    </>
  );
}

export default App;
