import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import { Link } from 'react-router-dom';

const HomePage = () => {
	const dispatch = useDispatch();

	const curiosityPics = useSelector((state) => state.curiosityPhotos);
	const loading = useSelector((state) => state.loading);
	return (
		<div>
			<div>
				<Link to='/curiosity'>Curiosity Rover</Link>
			</div>
			<div>
				<Link to='/opportunity'>Opportunity Rover</Link>
			</div>
			<div>
				<Link to='/spirit'>Spirit Rover</Link>
			</div>
		</div>
	);
};

export default HomePage;
