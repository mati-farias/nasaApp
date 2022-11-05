import axios from 'axios';

import { FILTER_BY_CAMERAS_CURIOSITY, GET_ROVERS_PICS } from './actionTypes';

const API_KEY = 'api_key=ZobkmkFRuvXxco6luZMkqwAiDQFetVC8cg9IN2MM';
const API_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers';

export const getRoversPics = (date = new Date(), rover) => {
	let earthDate;

	if (date instanceof Date) {
		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();
		earthDate = `${year}-${month}-${day}`;
		date = earthDate;
	}

	return async function (dispatch) {
		try {
			let dateType = date[4] === '-' ? 'earth_date' : 'sol';

			let roverPics = await axios.get(
				`${API_URL}/${rover}/photos?${dateType}=${date}&page=1&${API_KEY}`
			);
			return dispatch({
				type: GET_ROVERS_PICS,
				payload: roverPics.data,
			});
		} catch (error) {
			alert(error);
		}
	};
};

export const filterByCamerasCuriosity = (payload) => {
	return async function (dispatch) {
		dispatch({
			type: FILTER_BY_CAMERAS_CURIOSITY,
			payload,
		});
	};
};
