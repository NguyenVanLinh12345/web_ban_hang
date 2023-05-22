import { Routes, Route } from 'react-router-dom';

import Admin from './adminPage/Admin';
import Client from './pages/Client';

import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';

import AdminDashboard from './adminPage/pages/AdminDashboard';
import AdminEmployes from './adminPage/pages/AdminEmployes';
import AdminNew from './adminPage/pages/AdminNew';
import AdminSendEmail from './adminPage/pages/AdminSendEmail';
import AdminUsers from './adminPage/pages/AdminUsers';
import AdminProducts from './adminPage/pages/AdminProducts';

function App() {

  return (
    <div id="Main">
      <Routes>
        <Route path='/admin/*' element={<Admin><AdminDashboard /></Admin>} />
        <Route path='/admin/AdminEmployes' element={<Admin><AdminEmployes /></Admin>} />
        <Route path='/admin/AdminNew' element={<Admin><AdminNew /></Admin>} />
        <Route path='/admin/AdminSendEmail' element={<Admin><AdminSendEmail /></Admin>} />
        <Route path='/admin/AdminUsers' element={<Admin><AdminUsers /></Admin>} />
        <Route path='/admin/AdminProducts' element={<Admin><AdminProducts /></Admin>} />


        <Route path='/*' element={ <Client><Home /></Client>} />
        <Route path='/products/*' element={<Client><Products /></Client>} />
        <Route path='/product/:id' element={<Client><Product /></Client>} />
        {/* <Route path='/product/:id/:danhmucid' element={<Client><Product /></Client>} /> */}
        <Route path='/products/:id' element={<Client><Products /></Client>} />
        <Route path='/news' element={<Client><News /></Client>} />
        <Route path='/contact' element={<Client><Contact /></Client>} />
        <Route path='/about' element={<Client><About /></Client>} />
      </Routes>
    </div>
  );
}

export default App;
