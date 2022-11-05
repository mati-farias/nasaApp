import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import { filterByCamerasCuriosity, getRoversPics } from '../../redux/actions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';

const Photos = (props) => {
	const dispatch = useDispatch();
	console.log(props);
	const { rover } = useParams();

	useEffect(() => {
		dispatch(getRoversPics(new Date(), rover));
	}, [dispatch]);

	const roverPics = useSelector((state) => state.roverData);
	const loading = useSelector((state) => state.loading);

	const [date, setDate] = useState(new Date());
	const [dateType, setDateType] = useState(true);
	const [input, setInput] = useState(1000);

	const handleFilterCameras = (e) => {
		e.preventDefault();
		dispatch(filterByCamerasCuriosity(e.target.value));
	};

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

	const cameras = [
		{
			value: 'All',
			text: 'All',
		},
		{
			value: 'fhaz',
			text: 'FHAZ',
		},
		{
			value: 'rhaz',
			text: 'RHAZ',
		},
		{
			value: 'mast',
			text: 'MAST',
		},
		{
			value: 'chemcam',
			text: 'CHEMCAM',
		},
		{
			value: 'mahli',
			text: 'MAHLI',
		},
		{
			value: 'mardi',
			text: 'MARDI',
		},
		{
			value: 'navcam',
			text: 'NAVCAM',
		},
		{
			value: 'pancam',
			text: 'PANCAM',
		},
		{
			value: 'minites',
			text: 'MINITES',
		},
	];

	return (
		<div>
			<button type='button' onClick={handleSetDataType}>
				{dateType ? 'Earth Date' : 'Sol Date'}
			</button>
			{dateType ? (
				<DatePicker
					dateFormat='yyyy-MM-dd'
					selected={date}
					value={date}
					onChange={(e) => handleDate(e)}
					className='form-control'
				/>
			) : (
				<div>
					<input
						type='text'
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<button onClick={() => handleDate(input)}>Search</button>
				</div>
			)}
			<select onChange={(e) => handleFilterCameras(e)}>
				{cameras.map((camera, index) => (
					<option key={index} value={camera.value}>
						{camera.text}
					</option>
				))}
			</select>
			<div>
				{loading ? (
					<Spinner />
				) : (
					roverPics?.map((e) => <img src={e.img_src} alt='' />)
				)}
			</div>
		</div>
	);
};

export default Photos;
