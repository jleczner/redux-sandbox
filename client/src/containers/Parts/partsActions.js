import axios from 'axios';

export const GET_ALL_PARTS = 'GET_ALL_PARTS';
export const RECEIVE_ALL_PARTS = 'RECEIVE_ALL_PARTS';

const getAllParts = () => {
	return {
		type: GET_ALL_PARTS
	};
};

const receiveAllParts = (parts) => {
	return {
		type: RECEIVE_ALL_PARTS,
		parts: parts
	};
};

// action creator
export function fetchAllParts() {
	return (dispatch) => {
		dispatch(getAllParts());

		return axios.get('http://localhost:8080/getAllParts')
			.then(response => {
				dispatch(receiveAllParts(response.data));
			})
			.catch(error => {
				return error;
			});
	};
}