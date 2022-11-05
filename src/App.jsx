import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Curiosity from './pages/Curiosity/Curiosity';
import HomePage from './pages/Home/HomePage';
import LandingPage from './pages/Landing/LandingPage';
import Opportunity from './pages/Opportunity/Opportunity';
import Photos from './pages/Photos/Photos';
import Spirit from './pages/Spirit/Spirit';

function App() {
	return (
		<React.Fragment>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/home' element={<HomePage />} />
				<Route path='/curiosity' element={<Curiosity />} />
				<Route path='/opportunity' element={<Opportunity />} />
				<Route path='/spirit' element={<Spirit />} />
				<Route path='/photos/:rover' element={<Photos />} />
			</Routes>
		</React.Fragment>
	);
}

export default App;
