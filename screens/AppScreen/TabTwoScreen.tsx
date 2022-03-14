import React from 'react';
import { Text, View } from 'react-native';
import SimpleComponent from '@components/SimpleComponent';
import tw from '@core/tailwind';

const TabTwoScreen = () => {
	return (
		<View style={tw`flex justify-center items-center full bg-theme-light`}>
			<Text style={tw`mb-4 text-lg font-bold`}>About</Text>
			<SimpleComponent />
		</View>
	);
};

export default TabTwoScreen;
