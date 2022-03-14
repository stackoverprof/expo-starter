import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export interface State {
	authenticated: boolean;
	user: any;
	loading: boolean;
}

const AuthSlice = createSlice({
	name: 'AUTH',
	initialState: <State>{
		authenticated: false,
		user: {},
		loading: true,
	},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
			state.authenticated = true;
		},
		removeUser: (state) => {
			state.user = {};
			state.authenticated = false;
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
	},
});

export const { setUser, removeUser, setLoading } = AuthSlice.actions;
export const useAuth = (): State => useSelector((RootState: { auth: State }) => RootState.auth);
export default AuthSlice.reducer;
