import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../AuthScreen';
import NotFoundScreen from '../NotFoundScreen';
import ModalScreen from '../ModalScreen';
import AppScreen from '../AppScreen';

const RootNavigator = () => {
	const Stack = createStackNavigator();
	const authenticated = true; //no context/redux yet

	return (
		<Stack.Navigator>
			{!authenticated && <Stack.Screen name="AuthArea" component={AuthScreen} options={{}} />}
			{authenticated && (
				<Stack.Screen
					name="AppArea"
					component={AppScreen}
					options={{ headerShown: false }}
				/>
			)}

			<Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
			<Stack.Group screenOptions={{ presentation: 'modal' }}>
				<Stack.Screen name="Modal" component={ModalScreen} />
			</Stack.Group>
		</Stack.Navigator>
	);
};

export default RootNavigator;
