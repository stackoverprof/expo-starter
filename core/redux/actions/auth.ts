import { removeUser, setLoading, setUser } from '../reducers/auth';

export const load_session = () => async (dispatch: any) => {
	// code... load token and session
	setTimeout(() => {
		dispatch(setLoading(false));
	}, 3000);
};

export const login = () => async (dispatch: any) => {
	const DATA_SAMPLE_USER = {
		username: 'erbin',
		_id: 'yuedb2yubdf289fhndf92380',
	};
	dispatch(setUser(DATA_SAMPLE_USER));
};

export const logout = () => async (dispatch: any) => {
	dispatch(removeUser());
};
