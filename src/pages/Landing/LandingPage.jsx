import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { Row, Col, Card, CardGroup, Container, Button } from 'react-bootstrap';
import backgroundImage from '../../images/marsbackground.jpg';

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
		<Container fluid>
			<Container fluid>
				<header>
					<div
						className='p-5 text-center bg-image'
						style={{
							backgroundImage: `url(
								${backgroundImage}
							)`,
							minHeight: '100vh',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							backgroundAttachment: 'fixed',
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
										<Button
											onClick={(e) => handleRover(e)}
											value={rvr.value}
											key={rvr.name}>
											{rvr.name}
										</Button>
									))}
								</div>
							</div>
						</div>
					</div>
				</header>
			</Container>
		</Container>
	);
};

export default LandingPage;
