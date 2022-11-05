import {
	FILTER_BY_CAMERAS_CURIOSITY,
	GET_ROVERS_PICS,
} from '../actions/actionTypes';

const initialState = {
	roverData: [],
	filterCuriosityCameras: [],
	loading: true,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ROVERS_PICS: {
			let roverPics = action.payload.photos;
			console.log(action.payload.photos);
			return {
				...state,
				roverData: roverPics,
				filterCuriosityCameras: roverPics,
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
				roverData: filteredCameras,
			};
		}

		default:
			return state;
	}
};

export default rootReducer;
