import Linking from './linking.config';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './RootNavigator';

const Navigation = () => {
	return (
		<NavigationContainer linking={Linking}>
			<RootNavigator />
		</NavigationContainer>
	);
};
export default Navigation;
