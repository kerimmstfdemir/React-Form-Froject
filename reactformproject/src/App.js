import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Product from './pages/Product';
import PrivateRouter from './router/PrivateRouter';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route index element={<PrivateRouter />}/>
        <Route path='home/product' element={<Product />}/>
        <Route path='home/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
