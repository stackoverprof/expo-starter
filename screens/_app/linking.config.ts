/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

const linking_config: LinkingOptions<any> = {
	prefixes: [Linking.createURL('/')],
	config: {
		screens: {
			AppArea: {
				screens: {
					TabOne: {
						screens: {
							TabOneScreen: 'one',
						},
					},
					TabTwo: {
						screens: {
							TabTwoScreen: 'two',
						},
					},
				},
			},
			AuthArea: {
				screens: {
					AuthScreen: 'auth-screen',
				},
			},
			Modal: 'modal',
			NotFound: '*',
		},
	},
};

export default linking_config;
