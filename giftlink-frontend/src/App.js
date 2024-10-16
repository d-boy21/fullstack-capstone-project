import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import Navbar from './components/Navbar/Navbar';
import DetailsPage from './components/DetailsPage/DetailsPage';

function App() {
  const navigate = useNavigate();
  return (
    <>
        <Navbar/>
        <Routes>
          {/* the final code will not pass the products to every page, but each page will call the server API */}
          <Route path="/" element={<MainPage />} />
          <Route path="/app" element={<MainPage />} />
          <Route path="/app/product/:productId" element={<DetailsPage/>} />
        </Routes>
        </>
  );
}
export default App;