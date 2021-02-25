// Default
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import LoginScreen from './screens/login/Login';
import ForgottenPasswordScreen from './screens/login/ForgottenPassword';
import HomeScreen from './screens/Home';

const Stack = createStackNavigator();

const App = () =>
{	
  	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Login'>
				<Stack.Screen name="ForgottenPassword" component={ForgottenPasswordScreen} options={{ headerShown: true, headerTransparent: true, title: '', headerBackTitle: null }}/>
				<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
				<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;