import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';

import Header from './component/header/Header';
import Footer from './component/footer/Footer';
function App() {

  return (
    <div id = "Main">
      <Header />
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/products/:mainPath/:path' element = {<Products/>} />
        <Route path='/product/:id' element = {<Product/>} />
        <Route path='/cart' element = {<Cart/>} />
        <Route path='/news' element={<News/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
