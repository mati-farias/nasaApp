import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByCameras } from '../../redux/actions';
import { cameras } from '../../utils/cameras.json';
import { Form } from 'react-bootstrap';

const FilterCamera = ({ pagination }) => {
	const dispatch = useDispatch();
	const handleFilterCameras = (e) => {
		e.preventDefault();
		dispatch(filterByCameras(e.target.value));
		pagination(1);
	};
	return (
		<Form.Select onChange={(e) => handleFilterCameras(e)}>
			{cameras.map((camera, index) => (
				<option key={index} value={camera.value}>
					{camera.text}
				</option>
			))}
		</Form.Select>
	);
};

export default FilterCamera;
