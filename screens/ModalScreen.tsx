import React from 'react';
import { Text, View } from 'react-native';
import tw from '@core/tailwind';

export default function ModalScreen() {
	return (
		<View style={tw`flex justify-center items-center full`}>
			<Text style={tw`text-2xl font-bold text-black`}>Modal</Text>
			<Text style={tw`text-lg text-yellow-600`}>Sample text for popping up modals</Text>
		</View>
	);
}
