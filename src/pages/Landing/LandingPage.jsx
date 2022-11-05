import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const LandingPage = () => {
	return (
		<div>
			<Link to='/home'>Home</Link>
		</div>
	);
};

export default LandingPage;
