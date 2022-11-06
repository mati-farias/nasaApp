import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import { getRoversPics } from '../../redux/actions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';
import Pagination from '../../components/Pagination/Pagination';
import PhotoList from '../../components/PhotoList/PhotoList';
import FilterCamera from '../../components/FilterCamera/FilterCamera';
import { Row, Col, Card, CardGroup, Container, Button } from 'react-bootstrap';

const Home = (props) => {
	const dispatch = useDispatch();
	const { rover } = useParams();
	const roverPics = useSelector((state) => state.roverData);
	const loading = useSelector((state) => state.loading);

	const [date, setDate] = useState(new Date());
	const [dateType, setDateType] = useState(true);
	const [input, setInput] = useState(1000);

	//Pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [photosPerPage] = useState(25);
	const indexOfLastPhoto = currentPage * photosPerPage;
	const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
	const photosToShow = roverPics.slice(indexOfFirstPhoto, indexOfLastPhoto);
	const pagination = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		dispatch(getRoversPics(new Date(), rover));
	}, [dispatch]);

	function handleDate(date) {
		console.log('handleDate', date);
		setDate(date);
		dispatch(getRoversPics(date, rover));
	}

	function handleSetDataType() {
		setDateType(!dateType);
		console.log(typeof roverPics[0]?.earth_date);
		setDate('');
	}

	return (
		<Container
			fluid
			style={{ backgroundColor: 'black', minHeight: '100vh' }}>
			<Container
				style={{
					minHeight: '10vh',
					padding: '2rem',
				}}>
				<Row>
					<Col>
						{dateType ? (
							<Col>
								<DatePicker
									dateFormat='yyyy-MM-dd'
									selected={date}
									value={date}
									onChange={(e) => handleDate(e)}
									className='form-control w-100'
									placeholder='Pick a date!'
									inline
								/>
							</Col>
						) : (
							<Col>
								<input
									className='w-100'
									type='text'
									value={input}
									onChange={(e) => setInput(e.target.value)}
								/>
								<Button onClick={() => handleDate(input)}>
									Search
								</Button>
							</Col>
						)}
					</Col>
					<Col>
						<FilterCamera pagination={pagination} />
						<Button
							className='w-100 btn btn-primary'
							type='button'
							onClick={handleSetDataType}>
							{dateType ? 'Earth Date' : 'Sol Date'}
						</Button>
					</Col>
				</Row>
			</Container>
			<Container>
				<Col className='d-flex justify-content-center'>
					<Pagination
						photosPerPage={photosPerPage}
						roverPics={roverPics.length}
						pagination={pagination}
						currentPage={currentPage}
					/>
				</Col>
				<div>
					{loading ? (
						<Spinner />
					) : photosToShow.length > 0 ? (
						<PhotoList photosToShow={photosToShow} />
					) : (
						<h2>
							No photos found. Try another camera or another date!
						</h2>
					)}
				</div>
			</Container>
		</Container>
	);
};

export default Home;