import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
import {image_Sublimated_Clothing_Banner_2016_2_1_link} from './assets/imageLinks.js'
const Page_About_Us  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page1}    >
			<View style = {noneModeStyles._battery_full}    >
				<View style = {noneModeStyles._layer_826bb7}    >
					<View style = {noneModeStyles._layer_6e6da6}   >
						<Svg style={{height: 13, width: 25}} viewBox = "0 0 25 13">
							<Path fill = {"#FDEFEF"}     d = "M21.25 2.5V5H22.5V7.5H21.25V10H2.5V2.5H21.25ZM21.875 0H1.875C0.839453 0 0 0.839453 0 1.875V10.625C0 11.6605 0.839453 12.5 1.875 12.5H21.875C22.9105 12.5 23.75 11.6605 23.75 10.625V10H24.0625C24.5803 10 25 9.58027 25 9.0625V3.4375C25 2.91973 24.5803 2.5 24.0625 2.5H23.75V1.875C23.75 0.839453 22.9105 0 21.875 0ZM20 3.75H3.75V8.75H20V3.75Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Star_1}    >
			</View>
			<View style = {noneModeStyles._Star_3}    >
			</View>
			<View style = {noneModeStyles._Star_4}    >
			</View>
			<View style = {noneModeStyles._Star_2}    >
			</View>
			<Text style = {noneModeStyles._Ufone_Jazz}   >
				Ufone Jazz
			</Text>
			<View style = {noneModeStyles._signal}    >
				<View style = {noneModeStyles._layer_fe258c}    >
					<View style = {noneModeStyles._layer_61efb0}   >
						<Svg style={{height: 15, width: 23}} viewBox = "0 0 23 15">
							<Path fill = {"#F8E7E7"}     d = "M7.45948 8.32531H5.59461C5.25116 8.32531 4.97298 8.53228 4.97298 8.78782V14.338C4.97298 14.5936 5.25116 14.8005 5.59461 14.8005H7.45948C7.80292 14.8005 8.0811 14.5936 8.0811 14.338V8.78782C8.0811 8.53228 7.80292 8.32531 7.45948 8.32531ZM2.48649 11.1004H0.621623C0.278176 11.1004 0 11.3074 0 11.5629V14.338C0 14.5936 0.278176 14.8005 0.621623 14.8005H2.48649C2.82994 14.8005 3.10811 14.5936 3.10811 14.338V11.5629C3.10811 11.3074 2.82994 11.1004 2.48649 11.1004ZM12.4325 5.55021H10.5676C10.2241 5.55021 9.94597 5.75718 9.94597 6.01272V14.338C9.94597 14.5936 10.2241 14.8005 10.5676 14.8005H12.4325C12.7759 14.8005 13.0541 14.5936 13.0541 14.338V6.01272C13.0541 5.75718 12.7759 5.55021 12.4325 5.55021ZM17.4054 2.7751H15.5406C15.1971 2.7751 14.919 2.98208 14.919 3.23762V14.338C14.919 14.5936 15.1971 14.8005 15.5406 14.8005H17.4054C17.7489 14.8005 18.0271 14.5936 18.0271 14.338V3.23762C18.0271 2.98208 17.7489 2.7751 17.4054 2.7751ZM22.3784 0H20.5136C20.1701 0 19.8919 0.206976 19.8919 0.462517V14.338C19.8919 14.5936 20.1701 14.8005 20.5136 14.8005H22.3784C22.7219 14.8005 23 14.5936 23 14.338V0.462517C23 0.206976 22.7219 0 22.3784 0Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._signal_2}    >
				<View style = {noneModeStyles._layer_685809}    >
					<View style = {noneModeStyles._layer_644159}   >
						<Svg style={{height: 15, width: 23}} viewBox = "0 0 23 15">
							<Path fill = {"#F7EFEF"}     d = "M7.45948 8.32531H5.59461C5.25116 8.32531 4.97298 8.53228 4.97298 8.78782V14.338C4.97298 14.5936 5.25116 14.8005 5.59461 14.8005H7.45948C7.80292 14.8005 8.0811 14.5936 8.0811 14.338V8.78782C8.0811 8.53228 7.80292 8.32531 7.45948 8.32531ZM2.48649 11.1004H0.621623C0.278176 11.1004 0 11.3074 0 11.5629V14.338C0 14.5936 0.278176 14.8005 0.621623 14.8005H2.48649C2.82994 14.8005 3.10811 14.5936 3.10811 14.338V11.5629C3.10811 11.3074 2.82994 11.1004 2.48649 11.1004ZM12.4325 5.55021H10.5676C10.2241 5.55021 9.94597 5.75718 9.94597 6.01272V14.338C9.94597 14.5936 10.2241 14.8005 10.5676 14.8005H12.4325C12.7759 14.8005 13.0541 14.5936 13.0541 14.338V6.01272C13.0541 5.75718 12.7759 5.55021 12.4325 5.55021ZM17.4054 2.7751H15.5406C15.1971 2.7751 14.919 2.98208 14.919 3.23762V14.338C14.919 14.5936 15.1971 14.8005 15.5406 14.8005H17.4054C17.7489 14.8005 18.0271 14.5936 18.0271 14.338V3.23762C18.0271 2.98208 17.7489 2.7751 17.4054 2.7751ZM22.3784 0H20.5136C20.1701 0 19.8919 0.206976 19.8919 0.462517V14.338C19.8919 14.5936 20.1701 14.8005 20.5136 14.8005H22.3784C22.7219 14.8005 23 14.5936 23 14.338V0.462517C23 0.206976 22.7219 0 22.3784 0Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._92_}   >
				92%
			</Text>
			<View style = {noneModeStyles._Sublimated_Clothing_Banner_2016_2_1_container}    >
				<View style = {noneModeStyles._Sublimated_Clothing_Banner_2016_2_1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Sublimated_Clothing_Banner_2016_2_1_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_4}    >
			</View>
			<Text style = {noneModeStyles._We_are_Sportwear_manufacturer_We_are_situated_at_Sadra_badra_P_O_ToorAbad__near_Taj_Mahal_Marriage_Hall__Daska_road__Sadra_Badra__Sialkot__Punjab_51310_Contact_No___03__________email_at_mail_gmail_com}   >
				We are Sportwear manufacturer{'\n'}{'\n'} {'\n'}We are situated at {'\n'}{'\n'}{'\n'}Sadra badra,P.O ToorAbad, near{'\n'}{'\n'}{'\n'} Taj Mahal Marriage Hall, Daska{'\n'}{'\n'}{'\n'} road, Sadra Badra, Sialkot, Punjab {'\n'}{'\n'}{'\n'}51310 {'\n'}{'\n'}{'\n'}{'\n'}{'\n'}Contact No : 03** ******{'\n'}{'\n'}{'\n'}email at mail@gmail.com
			</Text>
			<View style = {noneModeStyles._Rectangle_5}    >
			</View>
			<Text style = {noneModeStyles._Back}   >
				Back
			</Text>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_About_Us

const noneModeStyles = StyleSheet.create({
_page1: {
	height: 640,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgba(122, 146, 183, 0.63)",
	},
_battery_full: {
	width: 25,
	height: 25,
	backgroundColor: "rgba(20, 20, 20, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 326,
	top: 0,
	},
_layer_826bb7: {
	position: "absolute",
	transform: [
		{translateY: 6.25},
	],
	},
_layer_6e6da6: {
	},
_Star_1: {
	width: 140,
	height: 143,
	position: "absolute",
	left: -48,
	top: -51,
	},
_Star_3: {
	width: 197.891,
	height: 198.478,
	position: "absolute",
	left: 235,
	top: 526,
	},
_Star_4: {
	width: 197.891,
	height: 198.478,
	position: "absolute",
	left: -78,
	top: 526,
	},
_Star_2: {
	width: 140,
	height: 143,
	position: "absolute",
	left: 264,
	top: -51,
	},
_Ufone_Jazz: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 8,
	top: 5,
	color: "rgb(255, 248, 248)",
	fontSize: 12.84,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_signal: {
	width: 24,
	height: 15,
	backgroundColor: "rgba(20, 20, 20, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 272,
	bottom: 623,
	},
_layer_fe258c: {
	position: "absolute",
	transform: [
		{translateX: 0.900024},
		{translateY: 0.357147},
	],
	},
_layer_61efb0: {
	},
_signal_2: {
	width: 24,
	height: 15,
	backgroundColor: "rgba(246, 236, 236, 0.01)",
	overflow: "hidden",
	position: "absolute",
	left: 240,
	bottom: 623,
	},
_layer_685809: {
	position: "absolute",
	transform: [
		{translateX: 0.900024},
		{translateY: 0.357147},
	],
	},
_layer_644159: {
	},
_92_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 300,
	top: 5,
	color: "rgb(254, 239, 239)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Sublimated_Clothing_Banner_2016_2_1_container: {
	width: 346,
	height: 144,
	position: "absolute",
	left: 5,
	top: 104,
	},
_Sublimated_Clothing_Banner_2016_2_1: {
	width: "100%",
	height: "100%",
	},
_Rectangle_4: {
	width: 317,
	height: 251,
	backgroundColor: "rgb(253, 249, 249)",
	position: "absolute",
	left: 22,
	top: 275,
	},
_We_are_Sportwear_manufacturer_We_are_situated_at_Sadra_badra_P_O_ToorAbad__near_Taj_Mahal_Marriage_Hall__Daska_road__Sadra_Badra__Sialkot__Punjab_51310_Contact_No___03__________email_at_mail_gmail_com: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 35,
	top: 294,
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_5: {
	width: 78,
	height: 22.1765,
	backgroundColor: "rgb(255, 251, 251)",
	position: "absolute",
	left: 141,
	top: 35.7108,
	},
_Back: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 154,
	top: 43,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
})

