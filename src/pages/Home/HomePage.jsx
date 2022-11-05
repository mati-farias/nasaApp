import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
	const [rover, setRover] = useState();
	let navigate = useNavigate();

	const handleRover = (e) => {
		const robotName = e.target.value;
		setRover(robotName);
		navigate(`/photos/${robotName}`);
	};

	const rovers = [
		{ name: 'Curiosity', value: 'curiosity' },
		{ name: 'Opportunity', value: 'opportunity' },
		{ name: 'Spirit', value: 'spirit' },
	];

	return (
		<div>
			<div>
				{rovers.map((rvr) => (
					<button
						onClick={(e) => handleRover(e)}
						value={rvr.value}
						key={rvr.name}>
						{rvr.name}
					</button>
				))}
			</div>
		</div>
	);
};

export default HomePage;
