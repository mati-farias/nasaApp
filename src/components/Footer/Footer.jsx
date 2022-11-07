import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = () => {
	return (
		<MDBFooter
			bgColor='dark'
			color='white'
			className='text-center text-lg-left'>
			<div
				className='text-center p-3'
				style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
				Made by:{' '}
				<a
					className='text-light'
					href='https://www.linkedin.com/in/matias-farias-fullstack/'
					target='_blank'>
					Mati Farias
				</a>
			</div>
		</MDBFooter>
	);
};

export default Footer;
