import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, CardGroup, Container, Button } from 'react-bootstrap';
import backgroundImage from '../../images/marsbackground.jpg';
import { rovers } from '../../utils/rovers.json';
import Footer from '../../components/Footer/Footer';
const LandingPage = () => {
	const [rover, setRover] = useState();
	const navigate = useNavigate();

	const handleRover = (e) => {
		const robotName = e.target.value;
		setRover(robotName);
		navigate(`/photos/${robotName}`);
	};

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
								left: '70%',
							}}>
							<Col>
								<h1
									style={{
										color: '#ff52349f',
										// color: '#FFFFFF',
										fontSize: '80px',
										fontFamily: 'Dancing Script',
										fontWeight: '600',
									}}>
									Mars Rovers!
								</h1>
								<Row>
									<Col
										style={{
											display: 'flex',
											float: '',

											// paddingLeft: '8rem',
											// marginRight: '5rem',
											marginTop: '4rem',
										}}>
										{rovers.map((rvr) => (
											<Button
												style={{
													backgroundColor:
														'#ff52349f',
													color: 'white',
													borderColor: 'white',
													marginRight: '1rem',
													fontSize: '1.5rem',
													fontFamily:
														'Dancing Script',
												}}
												onClick={(e) => handleRover(e)}
												value={rvr.value}
												key={rvr.name}>
												{rvr.name}
											</Button>
										))}
									</Col>
								</Row>
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
