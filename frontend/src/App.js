import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontPage from './components/pages/FrontPage';
import ProductDetailPage from './components/pages/ProductDetailPage';
import Profile from './components/pages/Profile';
import Cart from './components/pages/Cart';
import Header from './components/layout/Header/Header';
 import PrivateRoutes from './utils/PrivateRoutes';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/product/:productname/:id' element={<ProductDetailPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<PrivateRoutes><Profile /></PrivateRoutes>} />
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
