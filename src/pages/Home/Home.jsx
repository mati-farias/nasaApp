import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRoversPics } from '../../redux/actions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';
import Pagination from '../../components/Pagination/Pagination';
import PhotoList from '../../components/PhotoList/PhotoList';
import FilterCamera from '../../components/FilterCamera/FilterCamera';
import { Row, Col, Card, CardGroup, Container, Button } from 'react-bootstrap';
import backgroundImage from '../../images/marsbackground.jpg';
import Loader from '../../components/Loader/Loader';
import Sidebar from '../../components/Sidebar/Sidebar';

const Home = (props) => {
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
						<Col
							style={{
								backgroundColor: '000000AA',
								minHeight: '90vh',
							}}>
							{loading ? (
								<Loader />
							) : photosToShow.length > 0 ? (
								<PhotoList photosToShow={photosToShow} />
							) : (
								<h2
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										color: '#ff52349f',
										fontFamily: 'Dancing Script',
									}}>
									No photos found. Try another camera or
									another date!
								</h2>
							)}
						</Col>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default Home;
