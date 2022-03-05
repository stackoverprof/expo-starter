import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Pressable } from 'react-native';
import TabOneScreen from './TabOneScreen';
import TabTwoScreen from './TabTwoScreen';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<BottomTab.Navigator initialRouteName="TabOne">
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
	return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
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
