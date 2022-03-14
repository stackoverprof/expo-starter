import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import { Colors } from '@core/tailwind/theme';

export default function NotFoundScreen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>This screen doesn&apos;t exist.</Text>
			<TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
				<Text style={styles.linkText}>Go to home screen!</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
	linkText: {
		fontSize: 14,
		color: Colors.green,
	},
});
