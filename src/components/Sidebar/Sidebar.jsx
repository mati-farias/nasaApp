import { Row, Col, Container, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import { getRoversPics } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import FilterCamera from '../FilterCamera/FilterCamera';
import styled from 'styled-components';

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
			fluid
			style={{
				minHeight: '50vh',
				width: '100%',
				backgroundColor: '#000000aa',
				position: 'sticky',
				top: '0',
			}}>
			<SidebarStyle>
				<Col>
					<SidebarSection>
						<Row>
							<RoverName>{rover.toUpperCase()}</RoverName>
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
										type='number'
										value={input}
										onChange={(e) =>
											setInput(e.target.value)
										}
									/>
									<Button
										className='mt-1'
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
						<Row style={{ width: '100%' }}>
							<H5>Choose your camera!</H5>
							<FilterCamera pagination={pagination} />
						</Row>
					</SidebarSection>
				</Col>
			</SidebarStyle>
		</Container>
	);
}

const SidebarStyle = styled.div``;
const SidebarSection = styled.div`
	justify-content: space-around;
	min-height: 100vh;
	align-items: center;
	display: flex;
	flex-direction: column;
`;

const H5 = styled.h5`
	color: var(--base-color);
`;
const RoverName = styled.h1`
	justify-content: center;
	color: var(--base-color);
	font-family: var(--title-ff);
`;
export default Sidebar;
