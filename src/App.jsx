import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import LandingPage from './pages/Landing/LandingPage';
import Photos from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navbar/Navigation';

function App() {
	return (
		<React.Fragment>
			<Navigation />
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/home' element={<Home />} />
				<Route path='/photos/:rover' element={<Photos />} />
			</Routes>
			<Footer />
		</React.Fragment>
	);
}

export default App;
