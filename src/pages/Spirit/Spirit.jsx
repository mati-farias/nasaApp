import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import { getSpiritPics } from '../../redux/actions';

const Spirit = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSpiritPics());
	}, [dispatch]);

	const spiritPics = useSelector((state) => state.spiritPhotos);
	const loading = useSelector((state) => state.loading);
	return (
		<div>
			{loading ? (
				<Spinner />
			) : (
				spiritPics[0]?.map((e) => <img src={e} alt='' />)
			)}
		</div>
	);
};

export default Spirit;
