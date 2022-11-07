import { MDBFooter } from 'mdb-react-ui-kit';
import styled from 'styled-components';
const Footer = () => {
	return (
		<MDBFooter
			bgColor='dark'
			color='white'
			className='text-center text-lg-left'>
			<Wrapper>
				Made by:{' '}
				<a
					className='text-light'
					href='https://www.linkedin.com/in/matias-farias-fullstack/'
					target='_blank'>
					Mati Farias
				</a>
			</Wrapper>
		</MDBFooter>
	);
};

const Wrapper = styled.div.attrs(() => ({
	className: 'text-center p-3',
}))`
	background-color: rgba(0, 0, 0, 0.2);
`;

export default Footer;
