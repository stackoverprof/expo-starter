import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '@core/redux/actions/auth';
import tw from '@core/tailwind';
import { Feather } from '@expo/vector-icons';

const AuthScreen = () => {
	const dispatch = useDispatch();

	const handleDummyLogin = () => {
		dispatch(login());
	};

	return (
		<View style={tw`flex-cc col full bg-theme-light`}>
			<Text style={tw`mb-2 text-lg text-theme-green`}>YOOOOO WELCOME TO</Text>
			<Text style={tw`mb-12 text-lg font-black text-theme-green`}>UPSELL POS!</Text>
			<Feather.Button name="log-in" style={tw`btn-primary`} onPress={handleDummyLogin}>
				<Text style={tw`font-bold text-white`}>Dummy Login</Text>
			</Feather.Button>
		</View>
	);
};

export default AuthScreen;
