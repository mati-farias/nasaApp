import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import Pagination from '../../components/Pagination/Pagination';
import PhotoList from '../../components/PhotoList/PhotoList';
import { Row, Col, Container } from 'react-bootstrap';
import backgroundImage from '../../images/marsbackground.jpg';
import Loader from '../../components/Loader/Loader';
import Sidebar from '../../components/Sidebar/Sidebar';
import styled from 'styled-components';
const Home = () => {
	const roverPics = useSelector((state) => state.roverData);
	const loading = useSelector((state) => state.loading);

	//Pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [photosPerPage] = useState(25);
	const indexOfLastPhoto = currentPage * photosPerPage;
	const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
	const photosToShow = roverPics.slice(indexOfFirstPhoto, indexOfLastPhoto);
	const pagination = (pageNumber) => {
		setCurrentPage(pageNumber);
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
					<Col xs={2}>
						<Sidebar pagination={pagination} />
					</Col>
					<Col
						xs={10}
						style={{ flexWrap: 'no-wrap', padding: '2rem' }}>
						<Col className='d-flex justify-content-center'>
							<Pagination
								photosPerPage={photosPerPage}
								roverPics={roverPics.length}
								pagination={pagination}
								currentPage={currentPage}
							/>
						</Col>
						<Col>
							{loading ? (
								<Loader />
							) : photosToShow.length > 0 ? (
								<PhotoList photosToShow={photosToShow} />
							) : (
								<NoPhotosTitle>
									No photos found. Try another camera or
									another date!
								</NoPhotosTitle>
							)}
						</Col>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};
const NoPhotosTitle = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--base-color);
	font-family: var(--title-ff);
`;
export default Home;
