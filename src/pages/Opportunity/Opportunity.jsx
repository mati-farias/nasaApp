import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import { getOpportunityPics } from '../../redux/actions';

const Opportunity = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getOpportunityPics());
	}, [dispatch]);

	const opportunityPics = useSelector((state) => state.opportunityPhotos);
	const loading = useSelector((state) => state.loading);
	return (
		<div>
			{loading ? (
				<Spinner />
			) : (
				opportunityPics[0]?.map((e) => <img src={e} alt='' />)
			)}
		</div>
	);
};

export default Opportunity;
