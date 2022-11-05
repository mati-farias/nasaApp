import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home/HomePage';
import LandingPage from './pages/Landing/LandingPage';
import Photos from './pages/Photos/Photos';

function App() {
	return (
		<React.Fragment>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/home' element={<HomePage />} />
				<Route path='/photos/:rover' element={<Photos />} />
			</Routes>
		</React.Fragment>
	);
}

export default App;
