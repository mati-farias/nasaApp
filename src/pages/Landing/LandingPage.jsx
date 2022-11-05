import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	getCuriosityPics,
	getOpportunityPics,
	getSpiritPics,
} from '../../redux/actions';

const LandingPage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCuriosityPics());
		dispatch(getOpportunityPics());
		dispatch(getSpiritPics());
	}, []);

	return (
		<div>
			<Link to='/home'>Home</Link>
		</div>
	);
};

export default LandingPage;
