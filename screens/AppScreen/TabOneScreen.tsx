import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '@core/redux/actions/auth';
import tw from '@core/tailwind';

const TabOneScreen = () => {
	const dispatch = useDispatch();

	const handleDummyLogout = () => {
		dispatch(logout());
	};

	return (
		<View style={tw`flex-cc col full bg-theme-light`}>
			<View style={tw`flex-cc col mb-16`}>
				<Text style={tw`mb-2 text-lg font-bold`}>Home</Text>
				<Text style={tw`text-sm`}>Congrats, you&apos;re logged in!</Text>
			</View>
			<Pressable style={tw`bg-red-600 btn-primary`} onPress={handleDummyLogout}>
				<Text style={tw`font-bold text-white`}>Dummy Logout</Text>
			</Pressable>
		</View>
	);
};
export default TabOneScreen;
