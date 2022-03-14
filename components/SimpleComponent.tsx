import React from 'react';
import { Pressable, Text, View } from 'react-native';
import tw from '@core/tailwind';
import { openURL } from 'expo-linking';
import { openBrowserAsync } from 'expo-web-browser';

const SimpleComponent = () => {
	return (
		<View style={tw`flex-cc`}>
			<Pressable
				style={tw`px-5 py-3 mx-2 rounded-md bg-theme-dark`}
				onPress={() => openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}
			>
				<Text style={tw`font-bold text-theme-light`}>Try Click</Text>
			</Pressable>
			<Pressable
				style={tw`px-5 py-3 mx-2 rounded-md bg-theme-dark`}
				onPress={() => openBrowserAsync('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}
			>
				<Text style={tw`font-bold text-theme-light`}>Try Again</Text>
			</Pressable>
		</View>
	);
};

export default SimpleComponent;
