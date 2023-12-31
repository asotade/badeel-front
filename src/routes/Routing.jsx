import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SearchPage } from '../pages';
// import Home from '@/pages/Home/Home';
// import Login from '@/pages/Auth/Login';
// import Register from '@/pages/Auth/Register';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="*" element={<>404 NOT FOUND</>} />
    </Routes>
  );
}

export default Routing;
