import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Footer from './component/footer/Footer';

function App() {

  return (
    <div id = "Main">
      <Routes>
        <Route path='/' element = {<Home/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
