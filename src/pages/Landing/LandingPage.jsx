import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';

const LandingPage = () => {
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
				<header>
					<div
						className='p-5 text-center bg-image'
						style={{
							backgroundImage: `url(
						"https://mars.nasa.gov/layout/mars2020/images/PIA23764-RoverNamePlateonMars-web.jpg"
					)`,
							minHeight: '100vh',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
						}}>
						<div
							className='mask'
							style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
							<div className='d-flex justify-content-center align-items-center'>
								<div className='text-white'>
									<h1 className='mb-3'>Mars Rover</h1>
								</div>
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
						</div>
					</div>
				</header>
			</div>
		</div>
	);
};

export default LandingPage;
