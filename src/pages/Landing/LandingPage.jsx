import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import backgroundImage from '../../images/marsbackground.jpg';
import { rovers } from '../../utils/rovers.json';
import styled from 'styled-components';
const LandingPage = () => {
	const [rover, setRover] = useState();
	const navigate = useNavigate();

	const handleRover = (e) => {
		const robotName = e.target.value;
		setRover(robotName);
		navigate(`/home/${robotName}`);
	};

	return (
		<Container
			fluid
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundColor: 'black',
				minHeight: '100vh',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundAttachment: 'fixed',
			}}>
			<Container fluid>
				<Row>
					<Col>
						<RightContent>
							<Title>Mars Rovers!</Title>
							<Row>
								<Col
									style={{
										display: 'flex',
										float: '',
										marginTop: '4rem',
									}}>
									{rovers.map((rvr) => (
										<RoverExploreBtn
											onClick={(e) => handleRover(e)}
											value={rvr.value}
											key={rvr.name}>
											{rvr.name}
										</RoverExploreBtn>
									))}
								</Col>
							</Row>
						</RightContent>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

const RoverExploreBtn = styled.button.attrs(() => ({
	className: 'btn btn-primary',
}))`
	background-color: var(--base-color);
	color: white;
	border-color: white;
	margin-right: 1rem;
	font-size: 1.5rem;
	font-family: var(--title-ff);
`;

const Title = styled.h1`
	color: var(--base-color);
	font-size: 80px;
	font-family: var(--title-ff);
	font-weight: 600;
`;
const RightContent = styled.div`
	width: 25rem;
	height: 12.5rem;
	float: right;
	margin-right: 10rem;
`;
// const MarsBackground = styled.div`
// 	background-image: ${(props) => url(props.bgImage)};
// 	background-color: black;
// 	min-height: 100vh;
// 	background-position: center;
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	background-attachment: fixed;
// `;

export default LandingPage;
