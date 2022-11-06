import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
	return (
		<Container
			style={{
				backgroundImage: `url(
		"https://mars.nasa.gov/layout/mars2020/images/PIA23764-RoverNamePlateonMars-web.jpg"
	)`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}></Container>
	);
};

export default Header;
