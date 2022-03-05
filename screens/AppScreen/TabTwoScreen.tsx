import { Text, View } from 'react-native';
import tw from '../../core/tailwind';

const TabTwoScreen = () => {
	return (
		<View style={tw`flex justify-center items-center w-full h-full bg-white`}>
			<Text style={tw`mb-4 text-lg font-bold text-red-300`}>About</Text>
		</View>
	);
};
export default TabTwoScreen;
