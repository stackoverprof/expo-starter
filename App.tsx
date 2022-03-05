import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import tw from './core/tailwind';
import Navigation from './screens/_navigation';

const App = () => {
	return (
		<View style={tw`w-full h-full`}>
			<Navigation />
			<StatusBar style="auto" />
		</View>
	);
};

export default App;
