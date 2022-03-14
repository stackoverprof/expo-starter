import { configureStore, Reducer } from '@reduxjs/toolkit';
import authReducer, { State as AuthStateType } from './reducers/auth';

const store = configureStore({
	reducer: <RootStateType>{
		auth: authReducer,
	},
});

export default store;

export interface RootStateType {
	auth: Reducer<AuthStateType>;
}
