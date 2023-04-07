import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';
import Cart from './pages/Cart';

import Header from './component/header/Header';
import Footer from './component/footer/Footer';
function App() {

  return (
    <div id = "Main">
      <Header />
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/Products' element = {<Products/>} />
        <Route path='/Product/:id' element = {<Product/>} />
        <Route path='/Cart' element = {<Cart/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
