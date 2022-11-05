import {
	FILTER_BY_CAMERAS_CURIOSITY,
	GET_CURIOSITY_PICS,
	GET_OPPORTUNITY_PICS,
	GET_SPIRIT_PICS,
} from '../actions/actionTypes';

const initialState = {
	curiosityData: [],
	filterCuriosityCameras: [],
	opportunityPhotos: [],
	spiritPhotos: [],
	loading: true,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CURIOSITY_PICS: {
			let curiosityPics = action.payload.photos;
			console.log(action.payload.photos);
			return {
				...state,
				curiosityData: curiosityPics,
				filterCuriosityCameras: curiosityPics,
				loading: false,
			};
		}
		case GET_OPPORTUNITY_PICS: {
			let opportunityPics = [];
			opportunityPics.push(action.payload.photos.map((e) => e.img_src));
			return {
				...state,
				opportunityPhotos: opportunityPics,
				loading: false,
			};
		}
		case GET_SPIRIT_PICS: {
			let spiritPics = [];
			spiritPics.push(action.payload.photos.map((e) => e.img_src));
			return {
				...state,
				spiritPhotos: spiritPics,
				loading: false,
			};
		}
		case FILTER_BY_CAMERAS_CURIOSITY: {
			let filteredByCameras = state.filterCuriosityCameras;
			let nameCamera = action.payload;
			let filteredCameras =
				nameCamera === 'All'
					? state.filterCuriosityCameras
					: filterPhotos(nameCamera);

			function filterPhotos(nameCamera) {
				// filteredByCameras.map((e) => {
				// 	console.log('filterPhotos', e[3].camera.name);
				// 	if (e.camera.name === nameCamera) return e;
				// });
				let newArray = [];
				for (let key in filteredByCameras) {
					console.log('hola', filteredByCameras[key]);

					if (
						filteredByCameras[key].camera.name.toLowerCase() ===
						nameCamera.toLowerCase()
					) {
						newArray.push(filteredByCameras[key]);
					}
				}
				return newArray;
			}

			return {
				...state,
				curiosityData: filteredCameras,
			};
		}

		default:
			return state;
	}
};

export default rootReducer;
