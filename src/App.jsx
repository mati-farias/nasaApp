import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import LandingPage from './pages/Landing/LandingPage';
import Photos from './pages/Home/Home';

function App() {
	return (
		<React.Fragment>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/home' element={<Home />} />
				<Route path='/photos/:rover' element={<Photos />} />
			</Routes>
		</React.Fragment>
	);
}

export default App;
