import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import Podcast from './Podcast';
import Home from './Home';
import Navibar from './Navibar';
import Layout from './Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Navibar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Podcast" element={<Podcast />} />
        <Route path="/Movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}
