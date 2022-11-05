import axios from 'axios';

import {
	FILTER_BY_CAMERAS_CURIOSITY,
	GET_CURIOSITY_PICS,
	GET_OPPORTUNITY_PICS,
	GET_SPIRIT_PICS,
	SELECT_CURIOSITY,
	SELECT_OPPORTUNITY,
	SELECT_SPIRIT,
} from './actionTypes';

const API_KEY = 'api_key=ZobkmkFRuvXxco6luZMkqwAiDQFetVC8cg9IN2MM';
const API_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers';

export const getCuriosityPics = (date = new Date(), rover) => {
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
				type: GET_CURIOSITY_PICS,
				payload: roverPics.data,
			});
		} catch (error) {
			alert(error);
		}
	};
};

export const getOpportunityPics = (date = new Date()) => {
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
			let opportunityPics = await axios.get(
				`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=${date}&page=1&api_key=ZobkmkFRuvXxco6luZMkqwAiDQFetVC8cg9IN2MM`
			);
			return dispatch({
				type: GET_OPPORTUNITY_PICS,
				payload: opportunityPics.data,
			});
		} catch (error) {
			alert(error);
		}
	};
};
export const getSpiritPics = (date = new Date()) => {
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
			let spiritPics = await axios.get(
				`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?searth_date=${date}&page=1&api_key=ZobkmkFRuvXxco6luZMkqwAiDQFetVC8cg9IN2MM`
			);
			return dispatch({
				type: GET_SPIRIT_PICS,
				payload: spiritPics.data,
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

export const selectCuriosity = (payload) => {
	return async function (dispatch) {
		dispatch({
			type: SELECT_CURIOSITY,
			payload,
		});
	};
};
export const selectOpportunity = (payload) => {
	return async function (dispatch) {
		dispatch({
			type: SELECT_OPPORTUNITY,
			payload,
		});
	};
};
export const selectSpirit = (payload) => {
	return async function (dispatch) {
		dispatch({
			type: SELECT_SPIRIT,
			payload,
		});
	};
};
