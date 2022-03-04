import React from 'react';
import { Text, View } from 'react-native';
import tw from '../core/tailwind';

const SimpleComponent = () => {
	return (
		<View style={tw`px-5 py-3 bg-green rounded-md`}>
			<Text style={tw`text-white`}>Hello Tailwind</Text>
		</View>
	);
};

export default SimpleComponent;
