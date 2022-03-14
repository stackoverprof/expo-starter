import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable } from 'react-native';
import TabOneScreen from './TabOneScreen';
import TabTwoScreen from './TabTwoScreen';
import tw from '@core/tailwind';
import { Colors } from '@core/tailwind/theme';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	const screenOptions = {
		tabBarActiveTintColor: Colors.green,
	};

	return (
		<BottomTab.Navigator initialRouteName="TabOne" screenOptions={screenOptions}>
			<BottomTab.Screen
				name="TabOne"
				component={TabOneScreen}
				options={({ navigation }) => ({
					title: 'Tab One',
					tabBarIcon: ({ color }) => <FontAwesome size={30} name="home" color={color} />,
					headerRight: () => <ModalButton navigation={navigation} />,
				})}
			/>
			<BottomTab.Screen
				name="TabTwo"
				component={TabTwoScreen}
				options={{
					title: 'Tab Two',
					tabBarIcon: ({ color }) => <FontAwesome size={24} name="group" color={color} />,
				}}
			/>
		</BottomTab.Navigator>
	);
};

export default BottomTabNavigator;

const ModalButton = ({ navigation }: any) => (
	<Pressable
		onPress={() => navigation.navigate('Modal')}
		style={({ pressed }) => ({
			opacity: pressed ? 0.5 : 1,
		})}
	>
		<FontAwesome name="info-circle" size={25} style={tw`mr-4`} />
	</Pressable>
);
