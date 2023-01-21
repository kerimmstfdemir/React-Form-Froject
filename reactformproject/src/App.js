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
        <Route path="home/product" element={<PrivateRouter />}>
          <Route path="" element={<Product />} />
        </Route>
        <Route path="home/contact" element={<PrivateRouter />}>
          <Route path="" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
