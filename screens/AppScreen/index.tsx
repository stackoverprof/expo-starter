import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Pressable, Platform } from 'react-native';
import TabOneScreen from './TabOneScreen';
import TabTwoScreen from './TabTwoScreen';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	const screenOptions = {
		tabBarStyle: {
			height: Platform.OS === 'ios' ? 82 : 66,
			paddingTop: 4,
			paddingBottom: Platform.OS === 'ios' ? 30 : 12,
		},
	};

	return (
		<BottomTab.Navigator initialRouteName="TabOne" screenOptions={screenOptions}>
			<BottomTab.Screen
				name="TabOne"
				component={TabOneScreen}
				options={({ navigation }) => ({
					title: 'Tab One',
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
					headerRight: () => <ModalButton navigation={navigation} />,
				})}
			/>
			<BottomTab.Screen
				name="TabTwo"
				component={TabTwoScreen}
				options={{
					title: 'Tab Two',
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
				}}
			/>
		</BottomTab.Navigator>
	);
};
export default BottomTabNavigator;

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={30} {...props} />;
}

const ModalButton = ({ navigation }: any) => (
	<Pressable
		onPress={() => navigation.navigate('Modal')}
		style={({ pressed }) => ({
			opacity: pressed ? 0.5 : 1,
		})}
	>
		<FontAwesome name="info-circle" size={25} style={{ marginRight: 15 }} />
	</Pressable>
);
