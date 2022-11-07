import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
		<Container
			fluid
			style={{
				backgroundColor: 'black',
				backgroundImage: `url(
		${backgroundImage}
	)`,
				minHeight: '100vh',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundAttachment: 'fixed',
			}}>
			<Container fluid>
				<Row>
					<Col>
						<Col
							style={{
								width: '400px',
								height: '200px',
								position: 'fixed',
								left: '44%',
							}}>
							<Col>
								<h1
									style={{
										color: 'white',
										fontSize: '80px',
									}}>
									Mars's Rovers!
								</h1>
								<Col>
									{rovers.map((rvr) => (
										<Button
											onClick={(e) => handleRover(e)}
											value={rvr.value}
											key={rvr.name}>
											{rvr.name}
										</Button>
									))}
								</Col>
							</Col>
						</Col>
					</Col>
				</Row>
				<Row
					style={{
						backgroundColor: 'blue',
						display: 'flex',
						float: 'right',
						alignItems: 'center',
					}}
					className='d-flex justify-content-center'></Row>
			</Container>
		</Container>
	);
};

export default LandingPage;
