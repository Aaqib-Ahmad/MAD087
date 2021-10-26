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
const Page_Atendenance  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page3}    >
			<View style = {noneModeStyles._battery_full}    >
				<View style = {noneModeStyles.style2}    >
					<View style = {noneModeStyles.style3}   >
						<Svg style={{height: 13, width: 25}} viewBox = "0 0 25 13">
							<Path fill = {"#FDEFEF"}     d = "M21.25 2.5V5H22.5V7.5H21.25V10H2.5V2.5H21.25ZM21.875 0H1.875C0.839453 0 0 0.839453 0 1.875V10.625C0 11.6605 0.839453 12.5 1.875 12.5H21.875C22.9105 12.5 23.75 11.6605 23.75 10.625V10H24.0625C24.5803 10 25 9.58027 25 9.0625V3.4375C25 2.91973 24.5803 2.5 24.0625 2.5H23.75V1.875C23.75 0.839453 22.9105 0 21.875 0ZM20 3.75H3.75V8.75H20V3.75Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Star_3}    >
			</View>
			<View style = {noneModeStyles._Star_4}    >
			</View>
			<Text style = {noneModeStyles._Ufone_Jazz}   >
				Ufone Jazz
			</Text>
			<View style = {noneModeStyles._signal}    >
				<View style = {noneModeStyles.style8}    >
					<View style = {noneModeStyles.style9}   >
						<Svg style={{height: 15, width: 23}} viewBox = "0 0 23 15">
							<Path fill = {"#F8E7E7"}     d = "M7.45948 8.32531H5.59461C5.25116 8.32531 4.97298 8.53228 4.97298 8.78782V14.338C4.97298 14.5936 5.25116 14.8005 5.59461 14.8005H7.45948C7.80292 14.8005 8.0811 14.5936 8.0811 14.338V8.78782C8.0811 8.53228 7.80292 8.32531 7.45948 8.32531ZM2.48649 11.1004H0.621623C0.278176 11.1004 0 11.3074 0 11.5629V14.338C0 14.5936 0.278176 14.8005 0.621623 14.8005H2.48649C2.82994 14.8005 3.10811 14.5936 3.10811 14.338V11.5629C3.10811 11.3074 2.82994 11.1004 2.48649 11.1004ZM12.4325 5.55021H10.5676C10.2241 5.55021 9.94597 5.75718 9.94597 6.01272V14.338C9.94597 14.5936 10.2241 14.8005 10.5676 14.8005H12.4325C12.7759 14.8005 13.0541 14.5936 13.0541 14.338V6.01272C13.0541 5.75718 12.7759 5.55021 12.4325 5.55021ZM17.4054 2.7751H15.5406C15.1971 2.7751 14.919 2.98208 14.919 3.23762V14.338C14.919 14.5936 15.1971 14.8005 15.5406 14.8005H17.4054C17.7489 14.8005 18.0271 14.5936 18.0271 14.338V3.23762C18.0271 2.98208 17.7489 2.7751 17.4054 2.7751ZM22.3784 0H20.5136C20.1701 0 19.8919 0.206976 19.8919 0.462517V14.338C19.8919 14.5936 20.1701 14.8005 20.5136 14.8005H22.3784C22.7219 14.8005 23 14.5936 23 14.338V0.462517C23 0.206976 22.7219 0 22.3784 0Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._signal_2}    >
				<View style = {noneModeStyles.style11}    >
					<View style = {noneModeStyles.style12}   >
						<Svg style={{height: 15, width: 23}} viewBox = "0 0 23 15">
							<Path fill = {"#F7EFEF"}     d = "M7.45943 8.32526H5.59458C5.25113 8.32526 4.97296 8.53224 4.97296 8.78778V14.338C4.97296 14.5935 5.25113 14.8005 5.59458 14.8005H7.45943C7.80288 14.8005 8.08105 14.5935 8.08105 14.338V8.78778C8.08105 8.53224 7.80288 8.32526 7.45943 8.32526ZM2.48648 11.1003H0.62162C0.278175 11.1003 0 11.3073 0 11.5629V14.338C0 14.5935 0.278175 14.8005 0.62162 14.8005H2.48648C2.82992 14.8005 3.1081 14.5935 3.1081 14.338V11.5629C3.1081 11.3073 2.82992 11.1003 2.48648 11.1003ZM12.4324 5.55017H10.5675C10.2241 5.55017 9.94591 5.75715 9.94591 6.01269V14.338C9.94591 14.5935 10.2241 14.8005 10.5675 14.8005H12.4324C12.7758 14.8005 13.054 14.5935 13.054 14.338V6.01269C13.054 5.75715 12.7758 5.55017 12.4324 5.55017ZM17.4053 2.77509H15.5405C15.197 2.77509 14.9189 2.98206 14.9189 3.2376V14.338C14.9189 14.5935 15.197 14.8005 15.5405 14.8005H17.4053C17.7488 14.8005 18.027 14.5935 18.027 14.338V3.2376C18.027 2.98206 17.7488 2.77509 17.4053 2.77509ZM22.3783 0H20.5134C20.17 0 19.8918 0.206975 19.8918 0.462515V14.338C19.8918 14.5935 20.17 14.8005 20.5134 14.8005H22.3783C22.7217 14.8005 22.9999 14.5935 22.9999 14.338V0.462515C22.9999 0.206975 22.7217 0 22.3783 0Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._92_}   >
				92%
			</Text>
			<Text style = {noneModeStyles._Back_to_Home}   >
				Back to Home
			</Text>
			<View style = {noneModeStyles._Rectangle_6}    >
			</View>
			<Text style = {noneModeStyles._Attendenance}   >
				Attendenance
			</Text>
			<View style = {noneModeStyles._table}    >
				<View style = {noneModeStyles.style18}    >
					<View style = {noneModeStyles.style19}   >
						<Svg style={{height: 22, width: 25}} viewBox = "0 0 25 22">
							<Path fill = {"black"}     d = "M22.6562 0H2.34375C1.04932 0 0 1.04932 0 2.34375V19.5312C0 20.8257 1.04932 21.875 2.34375 21.875H22.6562C23.9507 21.875 25 20.8257 25 19.5312V2.34375C25 1.04932 23.9507 0 22.6562 0ZM10.9375 18.75H3.125V14.0625H10.9375V18.75ZM10.9375 10.9375H3.125V6.25H10.9375V10.9375ZM21.875 18.75H14.0625V14.0625H21.875V18.75ZM21.875 10.9375H14.0625V6.25H21.875V10.9375Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_8}    >
			</View>
			<Text style = {noneModeStyles._Name}   >
				Name
			</Text>
			<Text style = {noneModeStyles._Eploye_1}   >
				Eploye#1
			</Text>
			<Text style = {noneModeStyles._Eploye_2}   >
				Eploye#2
			</Text>
			<Text style = {noneModeStyles._Eploye_3}   >
				Eploye#3
			</Text>
			<Text style = {noneModeStyles._Eploye_4}   >
				Eploye#4
			</Text>
			<View style = {noneModeStyles._Line_1}    >
			</View>
			<View style = {noneModeStyles._Line_2}    >
			</View>
			<View style = {noneModeStyles._Line_3}    >
			</View>
			<View style = {noneModeStyles._Line_4}    >
			</View>
			<View style = {noneModeStyles._Line_5}    >
			</View>
			<View style = {noneModeStyles.style31}    >
				<View style = {noneModeStyles.style32}   >
					<Svg style={{height: 2, width: 361}} viewBox = "0 0 361 2">
						<Path fill = {"none"}   stroke = {"black"}  d = "M0.00134278 1.5L360.002 0.499999"/>
					</Svg>
				</View>
			</View>
			<Text style = {noneModeStyles._Percentage}   >
				Percentage
			</Text>
			<Text style = {noneModeStyles._95_}   >
				95%
			</Text>
			<Text style = {noneModeStyles._95__2}   >
				95%
			</Text>
			<Text style = {noneModeStyles._95__3}   >
				95%
			</Text>
			<Text style = {noneModeStyles._95__4}   >
				95%
			</Text>
			<View style = {noneModeStyles._Line_7}    >
			</View>
			<View style = {noneModeStyles._Line_8}    >
			</View>
			<View style = {noneModeStyles._Line_9}    >
			</View>
			<View style = {noneModeStyles._Line_10}    >
			</View>
			<View style = {noneModeStyles._Line_11}    >
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Atendenance

const noneModeStyles = StyleSheet.create({
_page3: {
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
style2: {
	position: "absolute",
	transform: [
		{translateY: 6.25},
	],
	},
style3: {
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
style8: {
	position: "absolute",
	transform: [
		{translateX: 0.899902},
		{translateY: 0.357147},
	],
	},
style9: {
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
style11: {
	position: "absolute",
	transform: [
		{translateX: 0.900024},
		{translateY: 0.357147},
	],
	},
style12: {
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
_Back_to_Home: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: "50%",
	top: 549,
	transform: [
		{translateX: -53},
	],
	color: "rgb(252, 247, 247)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_6: {
	width: 360,
	height: 109,
	backgroundColor: "rgb(6, 187, 226)",
	position: "absolute",
	left: 0,
	top: 25,
	},
_Attendenance: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 99,
	top: 56,
	color: "rgb(255, 240, 240)",
	fontSize: 26,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_table: {
	width: 25,
	height: 25,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 111,
	},
style18: {
	position: "absolute",
	transform: [
		{translateY: 1.5625},
	],
	},
style19: {
	},
_Rectangle_8: {
	width: 360,
	height: 305,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 137,
	},
_Name: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 1,
	top: 136,
	color: "rgb(12, 26, 34)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Eploye_1: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 1,
	top: 176,
	color: "rgb(12, 26, 34)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Eploye_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 1,
	top: 213,
	color: "rgb(12, 26, 34)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Eploye_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 1,
	top: 243,
	color: "rgb(12, 26, 34)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Eploye_4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 1,
	top: 281,
	color: "rgb(12, 26, 34)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Line_1: {
	width: 1.69617,
	height: 307.002,
	position: "absolute",
	left: 105,
	top: 135,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Line_2: {
	width: 360.001,
	height: 0,
	position: "absolute",
	left: 0.999268,
	top: 167.5,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Line_3: {
	width: 360.001,
	height: 0,
	position: "absolute",
	left: 0,
	top: 201,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Line_4: {
	width: 360.001,
	height: 0,
	position: "absolute",
	left: 1,
	top: 234,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Line_5: {
	width: 360.001,
	height: 0,
	position: "absolute",
	left: 0,
	top: 269,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
style31: {
	width: 360,
	height: 1,
	position: "absolute",
	left: 0,
	top: 302,
	},
style32: {
	},
_Percentage: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 107,
	top: 137,
	color: "rgb(25, 42, 50)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_95_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 147,
	top: 176,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_95__2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 147,
	top: 213,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_95__3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 146,
	top: 243,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_95__4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 147,
	top: 281,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Line_7: {
	width: 360.012,
	height: 0,
	position: "absolute",
	left: 0,
	top: 334,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Line_8: {
	width: 360.012,
	height: 0,
	position: "absolute",
	left: 0,
	top: 362,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Line_9: {
	width: 360.012,
	height: 0,
	position: "absolute",
	left: 0,
	top: 388,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Line_10: {
	width: 360.012,
	height: 0,
	position: "absolute",
	left: 0,
	top: 414,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Line_11: {
	width: 360.012,
	height: 0,
	position: "absolute",
	left: 0,
	top: 442,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
})

