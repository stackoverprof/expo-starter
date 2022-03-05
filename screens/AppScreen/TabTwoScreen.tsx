import { Text, View } from 'react-native';
import tw from '../../core/tailwind';

const TabTwoScreen = () => {
	return (
		<View style={tw`flex-cc bg-white full`}>
			<Text style={tw`mb-4 text-lg font-bold text-red-300`}>About</Text>
		</View>
	);
};
export default TabTwoScreen;
