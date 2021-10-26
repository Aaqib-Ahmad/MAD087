import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import RNPickerSelect from 'react-native-picker-select';
import {fonts} from './fonts/fonts.js';
import {useFonts} from '@expo-google-fonts/dev';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Page_first_page from "./pages/Page_first_page/Page_first_page.js";
import Page_About_Us from "./pages/Page_About_Us/Page_About_Us.js";
import Page_Reset_Password from "./pages/Page_Reset_Password/Page_Reset_Password.js";
import Page_Atendenance from "./pages/Page_Atendenance/Page_Atendenance.js";
import Page_Login_As_Employee from "./pages/Page_Login_As_Employee/Page_Login_As_Employee.js";
import Page_Login_As_Admin from "./pages/Page_Login_As_Admin/Page_Login_As_Admin.js";
import Page_Admin_Home_Page from "./pages/Page_Admin_Home_Page/Page_Admin_Home_Page.js";
const Tab = createBottomTabNavigator();
const Page_first_pageStackNavigator = createStackNavigator();
const ScreenForPage_first_page = () => {
	return (
		<Page_first_pageStackNavigator.Navigator>
			<Page_first_pageStackNavigator.Screen
				name = "Page_first_page"
				component = {Page_first_page}
				options = {{
					headerShown: false
				}}
			/>
		</Page_first_pageStackNavigator.Navigator>
	)
};
const Page_About_UsStackNavigator = createStackNavigator();
const ScreenForPage_About_Us = () => {
	return (
		<Page_About_UsStackNavigator.Navigator>
			<Page_About_UsStackNavigator.Screen
				name = "Page_About_Us"
				component = {Page_About_Us}
				options = {{
					headerShown: false
				}}
			/>
		</Page_About_UsStackNavigator.Navigator>
	)
};
const Page_Reset_PasswordStackNavigator = createStackNavigator();
const ScreenForPage_Reset_Password = () => {
	return (
		<Page_Reset_PasswordStackNavigator.Navigator>
			<Page_Reset_PasswordStackNavigator.Screen
				name = "Page_Reset_Password"
				component = {Page_Reset_Password}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Reset_PasswordStackNavigator.Navigator>
	)
};
const Page_AtendenanceStackNavigator = createStackNavigator();
const ScreenForPage_Atendenance = () => {
	return (
		<Page_AtendenanceStackNavigator.Navigator>
			<Page_AtendenanceStackNavigator.Screen
				name = "Page_Atendenance"
				component = {Page_Atendenance}
				options = {{
					headerShown: false
				}}
			/>
		</Page_AtendenanceStackNavigator.Navigator>
	)
};
const Page_Login_As_EmployeeStackNavigator = createStackNavigator();
const ScreenForPage_Login_As_Employee = () => {
	return (
		<Page_Login_As_EmployeeStackNavigator.Navigator>
			<Page_Login_As_EmployeeStackNavigator.Screen
				name = "Page_Login_As_Employee"
				component = {Page_Login_As_Employee}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Login_As_EmployeeStackNavigator.Navigator>
	)
};
const Page_Login_As_AdminStackNavigator = createStackNavigator();
const ScreenForPage_Login_As_Admin = () => {
	return (
		<Page_Login_As_AdminStackNavigator.Navigator>
			<Page_Login_As_AdminStackNavigator.Screen
				name = "Page_Login_As_Admin"
				component = {Page_Login_As_Admin}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Login_As_AdminStackNavigator.Navigator>
	)
};
const Page_Admin_Home_PageStackNavigator = createStackNavigator();
const ScreenForPage_Admin_Home_Page = () => {
	return (
		<Page_Admin_Home_PageStackNavigator.Navigator>
			<Page_Admin_Home_PageStackNavigator.Screen
				name = "Page_Admin_Home_Page"
				component = {Page_Admin_Home_Page}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Admin_Home_PageStackNavigator.Navigator>
	)
};
const App = () => {
	let [fontsLoaded] = useFonts(fonts);
const Stack = createStackNavigator();
	const [isPage0Open, setIsPage0Open] = useState(true)
	const zIndexPage0 = useRef(1)
	const [isPage1Open, setIsPage1Open] = useState(false)
	const zIndexPage1 = useRef(2)
	const [isPage2Open, setIsPage2Open] = useState(false)
	const zIndexPage2 = useRef(2)
	const [isPage3Open, setIsPage3Open] = useState(false)
	const zIndexPage3 = useRef(2)
	const [isPage4Open, setIsPage4Open] = useState(false)
	const zIndexPage4 = useRef(2)
	const [isPage5Open, setIsPage5Open] = useState(false)
	const zIndexPage5 = useRef(2)
	const [isPage6Open, setIsPage6Open] = useState(false)
	const zIndexPage6 = useRef(2)
	if(!fontsLoaded){
		return <AppLoading/>
	}
	const mainScreen = () => { return (
					<Tab.Navigator
						tabBarOptions={{
							showLabel: false,
							style: noneModeStyles.style0,
							iconStyle: {width: "100%", height: "100%"},
						}}>
						<Tab.Screen
							name = "Page_first_page"
							component = {ScreenForPage_first_page}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_About_Us"
							component = {ScreenForPage_About_Us}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Reset_Password"
							component = {ScreenForPage_Reset_Password}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Atendenance"
							component = {ScreenForPage_Atendenance}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Login_As_Employee"
							component = {ScreenForPage_Login_As_Employee}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Login_As_Admin"
							component = {ScreenForPage_Login_As_Admin}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Admin_Home_Page"
							component = {ScreenForPage_Admin_Home_Page}
							options = {{tabBarVisible: false}}						/> 
					</Tab.Navigator>
	)};
	return (
				<NavigationContainer>
					<Stack.Navigator>
					<Stack.Screen name = "main" options={{headerShown: false}} component={mainScreen}/>
</Stack.Navigator>
				</NavigationContainer>
)};

const noneModeStyles = StyleSheet.create({
style0 : {position: "absolute", bottom: 0, left: 0, right: 0, width: 0, height: 0},
})
export default App;

