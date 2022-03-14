import React from 'react';
import Linking from './linking.config';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './RootNavigator';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from '@core/redux/store';

const App = () => {
	return (
		<>
			<Provider store={store}>
				<NavigationContainer linking={Linking}>
					<RootNavigator />
				</NavigationContainer>
			</Provider>
			<StatusBar style="auto" />
		</>
	);
};

export default App;
