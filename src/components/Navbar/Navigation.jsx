import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { rovers } from '../../utils/rovers.json';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { getRoversPics } from '../../redux/actions';
import { useDispatch } from 'react-redux';

function Navigation() {
	const [rover, setRover] = useState();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleRover = (e) => {
		const robotName = e.target.value;
		setRover(robotName);
		dispatch(getRoversPics(new Date(), robotName));
		navigate(`/home/${robotName}`);
	};
	return (
		<>
			<Navbar bg='dark' variant='dark' className='sticky-top'>
				<Container>
					<Navbar.Brand as={Link} to={'/'}>
						Mars's Rovers
					</Navbar.Brand>
					<Nav className='me-auto'>
						{rovers.map((rover) => (
							<Nav.Link>
								<button
									style={{
										backgroundColor: 'transparent',
										border: 'none',
										color: 'white',
									}}
									onClick={(e) => handleRover(e)}
									value={rover.value}
									key={rover.name}>
									{rover.name}
								</button>
							</Nav.Link>
						))}
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default Navigation;
