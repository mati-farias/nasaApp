import { Row, Col, Card, CardGroup, Container, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import { getRoversPics } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import FilterCamera from '../FilterCamera/FilterCamera';
function Sidebar(props) {
	const { pagination } = props;
	const dispatch = useDispatch();
	const { rover } = useParams();

	const [date, setDate] = useState(new Date());
	const [dateType, setDateType] = useState(true);
	const [input, setInput] = useState(1000);
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
		setDate('');
	}
	return (
		<Container
			style={{
				minHeight: '100vh',
				padding: '2rem',
				backgroundColor: '#000000AA',
			}}>
			<Col
				style={{
					justifyContent: 'space-around',
					minHeight: '100vh',
					alignItems: 'center',
					display: 'flex',
					flexDirection: 'column',
				}}>
				<Row>
					<h1
						style={{
							justifyContent: 'center',
							color: '#ff52349f',
							fontFamily: 'Dancing Script',
						}}>
						{rover.toUpperCase()}
					</h1>
				</Row>
				<Row>
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
						<Col style={{ paddingBottom: '170px' }}>
							<input
								className='w-100'
								type='text'
								value={input}
								onChange={(e) => setInput(e.target.value)}
							/>
							<Button
								style={{ marginTop: '10px' }}
								onClick={() => handleDate(input)}>
								Search
							</Button>
						</Col>
					)}
				</Row>
				<Row>
					<Button
						className='w-70 btn btn-primary'
						type='button'
						onClick={handleSetDataType}>
						{dateType ? 'Earth Date' : 'Sol Date'}
					</Button>
				</Row>
				<Row>
					<FilterCamera pagination={pagination} />
				</Row>
			</Col>
		</Container>
	);
}

export default Sidebar;
