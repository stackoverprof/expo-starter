import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import SimpleComponent from './components/SimpleComponent';
import tw from './core/tailwind';

export default function App() {
	return (
		<SafeAreaView>
			<View style={tw`flex bg-blue-200 h-full items-center justify-center`}>
				<Text style={tw`mb-4 text-green font-bold text-lg`}>YOOOOO UPSELL POS!</Text>
				<StatusBar style="auto" />
				<SimpleComponent />
			</View>
		</SafeAreaView>
	);
}
