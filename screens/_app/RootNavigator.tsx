import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import AppLoading from 'expo-app-loading';
import { load_session } from '@core/redux/actions/auth';
import { useAuth } from '@core/redux/reducers/auth';
import NotFoundScreen from '@screens/NotFoundScreen';
import ModalScreen from '@screens/ModalScreen';
import AuthScreen from '@screens/AuthScreen';
import AppScreen from '@screens/AppScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
	const dispatch = useDispatch();

	const { authenticated, loading } = useAuth();

	// SESSION LOADER
	useEffect(() => {
		dispatch(load_session());
	}, []);

	if (loading) return <AppLoading />; // [TODO] : This is supposed to be showing SplashScreen while loading, but it doesn't (blank)

	return (
		<Stack.Navigator>
			{!authenticated && (
				<Stack.Screen
					name="AuthArea"
					component={AuthScreen}
					options={{ title: 'Auth Area', headerShown: false }}
				/>
			)}
			{authenticated && (
				<Stack.Screen
					name="AppArea"
					component={AppScreen}
					options={{ title: 'App Area', headerShown: false }}
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
