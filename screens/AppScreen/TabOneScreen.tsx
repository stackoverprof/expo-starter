import { Text, View, Pressable } from 'react-native';
import tw from '../../core/tailwind';

const TabOneScreen = () => {
	return (
		<View style={tw`flex-cc bg-white full`}>
			<Text style={tw`mb-4 text-lg font-bold text-blue-300`}>Home</Text>
			<Pressable style={tw`btn-primary`}>
				<Text style={tw`font-bold text-white`}>Btn Primary</Text>
			</Pressable>
		</View>
	);
};
export default TabOneScreen;
