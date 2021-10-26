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
const Page_Login_As_Admin  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page5}    >
			<View style = {noneModeStyles._battery_full}    >
				<View style = {noneModeStyles._layer_a1a667}    >
					<View style = {noneModeStyles._layer_3860c9}   >
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
				<View style = {noneModeStyles._layer_baf0a3}    >
					<View style = {noneModeStyles._layer_a69936}   >
						<Svg style={{height: 15, width: 23}} viewBox = "0 0 23 15">
							<Path fill = {"#F8E7E7"}     d = "M7.45946 8.32529H5.59459C5.25115 8.32529 4.97297 8.53227 4.97297 8.78781V14.338C4.97297 14.5935 5.25115 14.8005 5.59459 14.8005H7.45946C7.80291 14.8005 8.08108 14.5935 8.08108 14.338V8.78781C8.08108 8.53227 7.80291 8.32529 7.45946 8.32529ZM2.48649 11.1004H0.621622C0.278176 11.1004 0 11.3074 0 11.5629V14.338C0 14.5935 0.278176 14.8005 0.621622 14.8005H2.48649C2.82993 14.8005 3.10811 14.5935 3.10811 14.338V11.5629C3.10811 11.3074 2.82993 11.1004 2.48649 11.1004ZM12.4324 5.55019H10.5676C10.2241 5.55019 9.94595 5.75717 9.94595 6.01271V14.338C9.94595 14.5935 10.2241 14.8005 10.5676 14.8005H12.4324C12.7759 14.8005 13.0541 14.5935 13.0541 14.338V6.01271C13.0541 5.75717 12.7759 5.55019 12.4324 5.55019ZM17.4054 2.7751H15.5405C15.1971 2.7751 14.9189 2.98207 14.9189 3.23761V14.338C14.9189 14.5935 15.1971 14.8005 15.5405 14.8005H17.4054C17.7489 14.8005 18.027 14.5935 18.027 14.338V3.23761C18.027 2.98207 17.7489 2.7751 17.4054 2.7751ZM22.3784 0H20.5135C20.1701 0 19.8919 0.206976 19.8919 0.462516V14.338C19.8919 14.5935 20.1701 14.8005 20.5135 14.8005H22.3784C22.7218 14.8005 23 14.5935 23 14.338V0.462516C23 0.206976 22.7218 0 22.3784 0Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._signal_2}    >
				<View style = {noneModeStyles._layer_5726af}    >
					<View style = {noneModeStyles._layer_b0d63b}   >
						<Svg style={{height: 15, width: 23}} viewBox = "0 0 23 15">
							<Path fill = {"#F7EFEF"}     d = "M7.45946 8.32529H5.59459C5.25115 8.32529 4.97297 8.53227 4.97297 8.78781V14.338C4.97297 14.5935 5.25115 14.8005 5.59459 14.8005H7.45946C7.80291 14.8005 8.08108 14.5935 8.08108 14.338V8.78781C8.08108 8.53227 7.80291 8.32529 7.45946 8.32529ZM2.48649 11.1004H0.621622C0.278176 11.1004 0 11.3074 0 11.5629V14.338C0 14.5935 0.278176 14.8005 0.621622 14.8005H2.48649C2.82993 14.8005 3.10811 14.5935 3.10811 14.338V11.5629C3.10811 11.3074 2.82993 11.1004 2.48649 11.1004ZM12.4324 5.55019H10.5676C10.2241 5.55019 9.94595 5.75717 9.94595 6.01271V14.338C9.94595 14.5935 10.2241 14.8005 10.5676 14.8005H12.4324C12.7759 14.8005 13.0541 14.5935 13.0541 14.338V6.01271C13.0541 5.75717 12.7759 5.55019 12.4324 5.55019ZM17.4054 2.7751H15.5405C15.1971 2.7751 14.9189 2.98207 14.9189 3.23761V14.338C14.9189 14.5935 15.1971 14.8005 15.5405 14.8005H17.4054C17.7489 14.8005 18.027 14.5935 18.027 14.338V3.23761C18.027 2.98207 17.7489 2.7751 17.4054 2.7751ZM22.3784 0H20.5135C20.1701 0 19.8919 0.206976 19.8919 0.462516V14.338C19.8919 14.5935 20.1701 14.8005 20.5135 14.8005H22.3784C22.7218 14.8005 23 14.5935 23 14.338V0.462516C23 0.206976 22.7218 0 22.3784 0Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._92_}   >
				92%
			</Text>
			<View style = {noneModeStyles._undraw_Mobile_login_re_9ntv_1}    >
				<View style = {noneModeStyles._layer_bfcd85}    >
					<View style = {noneModeStyles._layer_b15b20}   >
						<Svg style={{height: 59, width: 36}} viewBox = "0 0 36 59">
							<Path fill = {"#F0F0F0"}     d = "M20.5937 48.5773C16.8682 52.566 12.5994 56.01 7.91314 58.8078C7.80567 58.8738 7.69637 58.9359 7.5867 59L0 52.2852C0.0796989 52.2112 0.167959 52.1281 0.262983 52.0368C5.91586 46.6691 33.9791 9.13915 35.8492 0C35.7201 0.761399 37.5365 30.6198 20.5937 48.5773Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_2878b0}    >
					<View style = {noneModeStyles._layer_448a96}   >
						<Svg style={{height: 21, width: 34}} viewBox = "0 0 34 21">
							<Path fill = {"#F0F0F0"}     d = "M6.03413 20.3324C5.89285 20.3661 5.74911 20.3977 5.60497 20.4264L0 15.4656C0.10954 15.4274 0.237558 15.382 0.383965 15.3316C2.7888 14.4801 9.95135 11.9094 17.0793 8.98154C24.7384 5.83415 32.3607 2.27793 34 0C33.6483 0.52928 22.8162 16.5797 6.03413 20.3324Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_750627}    >
					<View style = {noneModeStyles._layer_17785a}   >
						<Svg style={{height: 146, width: 73}} viewBox = "0 0 73 146">
							<Path fill = {"#3F3D56"}     d = "M72.7994 34.6951H71.9972V12.7191C71.9972 11.0488 71.6683 9.39486 71.0291 7.85171C70.3899 6.30856 69.453 4.90642 68.2719 3.72534C67.0908 2.54426 65.6887 1.60738 64.1456 0.968184C62.6024 0.328989 60.9485 0 59.2782 0H12.7191C11.0488 -3.92428e-06 9.39487 0.328981 7.85172 0.968171C6.30857 1.60736 4.90642 2.54424 3.72534 3.72532C2.54427 4.90639 1.60738 6.30853 0.968188 7.85167C0.328991 9.39482 3.21081e-06 11.0488 0 12.7191V133.281C-2.14052e-06 134.951 0.328978 136.605 0.968171 138.148C1.60736 139.691 2.54425 141.094 3.72533 142.275C4.9064 143.456 6.30854 144.393 7.85169 145.032C9.39484 145.671 11.0488 146 12.7191 146H59.2781C60.9484 146 62.6024 145.671 64.1455 145.032C65.6887 144.393 67.0908 143.456 68.2719 142.275C69.453 141.094 70.3898 139.691 71.029 138.148C71.6682 136.605 71.9972 134.951 71.9972 133.281V50.3379H72.7994V34.6951Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_e0db34}    >
					<View style = {noneModeStyles._layer_a88577}   >
						<Svg style={{height: 139, width: 66}} viewBox = "0 0 66 139">
							<Path fill = {"white"}     d = "M65.6007 9.47067V129.529C65.6007 130.773 65.3556 132.005 64.8794 133.154C64.4033 134.304 63.7054 135.348 62.8256 136.227C61.9458 137.107 60.9013 137.804 59.7519 138.28C58.6025 138.756 57.3706 139 56.1266 139H9.47073C8.227 139 6.99543 138.755 5.84634 138.279C4.69726 137.803 3.65319 137.106 2.77373 136.226C1.89427 135.347 1.19666 134.303 0.720737 133.154C0.244817 132.005 -8.50218e-05 130.773 2.21414e-08 129.529V9.47067C-8.50218e-05 8.22694 0.244817 6.99536 0.720737 5.84629C1.19666 4.69721 1.89427 3.65313 2.77373 2.77368C3.65319 1.89423 4.69726 1.19663 5.84634 0.720721C6.99543 0.24481 8.227 -9.36684e-05 9.47073 6.26061e-07H15.1326C14.8547 0.683378 14.749 1.42458 14.8247 2.15841C14.9004 2.89225 15.1553 3.59623 15.567 4.20844C15.9786 4.82065 16.5344 5.32234 17.1854 5.66938C17.8364 6.01643 18.5627 6.19819 19.3004 6.19868H45.9003C46.6384 6.19938 47.3654 6.01838 48.0171 5.67167C48.6687 5.32496 49.2251 4.82318 49.637 4.21062C50.0488 3.59805 50.3036 2.89353 50.3788 2.15921C50.454 1.42489 50.3473 0.683339 50.0682 6.26061e-07H56.1266C57.3706 -0.000451682 58.6025 0.244184 59.7519 0.719928C60.9013 1.19567 61.9458 1.8932 62.8256 2.77268C63.7054 3.65216 64.4033 4.69635 64.8794 5.84561C65.3556 6.99487 65.6007 8.22668 65.6007 9.47067Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_60d8f3}    >
					<View style = {noneModeStyles._layer_5eef4e}   >
						<Svg style={{height: 7, width: 47}} viewBox = "0 0 47 7">
							<Path fill = {"#F0F0F0"}     d = "M44.2573 6.85051H2.74266C2.01551 6.84969 1.31837 6.56046 0.804199 6.04629C0.290029 5.53212 0.000820285 4.83499 0 4.10784V2.74267C0.000820285 2.01552 0.290029 1.31838 0.804199 0.804211C1.31837 0.290038 2.01551 0.000820289 2.74266 0H44.2573C44.9845 0.000820289 45.6816 0.290038 46.1958 0.804211C46.71 1.31838 46.9992 2.01552 47 2.74267V4.10784C46.9992 4.83499 46.71 5.53212 46.1958 6.04629C45.6816 6.56046 44.9845 6.84969 44.2573 6.85051Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_66c796}    >
					<View style = {noneModeStyles._layer_35adda}   >
						<Svg style={{height: 7, width: 47}} viewBox = "0 0 47 7">
							<Path fill = {"#F0F0F0"}     d = "M44.2573 6.85049H2.74266C2.01551 6.84967 1.31837 6.56045 0.804199 6.04628C0.290029 5.53211 0.000820285 4.83497 0 4.10783V2.74266C0.000820285 2.01551 0.290029 1.31838 0.804199 0.804208C1.31837 0.290037 2.01551 0.000820286 2.74266 0H44.2573C44.9845 0.000820286 45.6816 0.290037 46.1958 0.804208C46.71 1.31838 46.9992 2.01551 47 2.74266V4.10783C46.9992 4.83497 46.71 5.53211 46.1958 6.04628C45.6816 6.56045 44.9845 6.84967 44.2573 6.85049Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_18e3cb}    >
					<View style = {noneModeStyles._layer_67b19f}   >
						<Svg style={{height: 8, width: 47}} viewBox = "0 0 47 8">
							<Path fill = {"#3F3D56"}     d = "M44.1369 7.08341H2.86308C2.10401 7.08255 1.37627 6.78062 0.839526 6.24388C0.302781 5.70713 0.000866026 4.9794 0 4.22033V2.86308C0.000866026 2.10401 0.302781 1.37628 0.839526 0.839534C1.37627 0.30279 2.10401 0.000866026 2.86308 0H44.1369C44.896 0.000866026 45.6237 0.30279 46.1605 0.839534C46.6972 1.37628 46.9991 2.10401 47 2.86308V4.22033C46.9991 4.9794 46.6972 5.70713 46.1605 6.24388C45.6237 6.78062 44.896 7.08255 44.1369 7.08341ZM2.86308 0.545349C2.24859 0.546035 1.65947 0.790444 1.22495 1.22495C0.790444 1.65947 0.546035 2.24859 0.545349 2.86308V4.22033C0.546035 4.83482 0.790444 5.42395 1.22495 5.85846C1.65947 6.29297 2.24859 6.53738 2.86308 6.53806H44.1369C44.7514 6.53738 45.3405 6.29297 45.775 5.85846C46.2096 5.42395 46.454 4.83482 46.4547 4.22033V2.86308C46.454 2.24859 46.2096 1.65947 45.775 1.22495C45.3405 0.790444 44.7514 0.546035 44.1369 0.545349H2.86308Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_b2f775}    >
					<View style = {noneModeStyles._layer_a6f672}   >
						<Svg style={{height: 8, width: 47}} viewBox = "0 0 47 8">
							<Path fill = {"#3F3D56"}     d = "M44.1369 7.08342H2.86308C2.10401 7.08255 1.37627 6.78063 0.839526 6.24388C0.302781 5.70714 0.000866026 4.97941 0 4.22033V2.86309C0.000866026 2.10401 0.302781 1.37628 0.839526 0.839535C1.37627 0.30279 2.10401 0.000866027 2.86308 0H44.1369C44.896 0.000866027 45.6237 0.30279 46.1605 0.839535C46.6972 1.37628 46.9991 2.10401 47 2.86309V4.22033C46.9991 4.97941 46.6972 5.70714 46.1605 6.24388C45.6237 6.78063 44.896 7.08255 44.1369 7.08342ZM2.86308 0.54535C2.24859 0.546036 1.65947 0.790445 1.22495 1.22496C0.790444 1.65947 0.546035 2.24859 0.545349 2.86309V4.22033C0.546035 4.83483 0.790444 5.42395 1.22495 5.85846C1.65947 6.29297 2.24859 6.53738 2.86308 6.53807H44.1369C44.7514 6.53738 45.3405 6.29297 45.775 5.85846C46.2096 5.42395 46.454 4.83483 46.4547 4.22033V2.86309C46.454 2.24859 46.2096 1.65947 45.775 1.22496C45.3405 0.790445 44.7514 0.546036 44.1369 0.54535H2.86308Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_8734a5}    >
					<View style = {noneModeStyles._layer_757de9}   >
						<Svg style={{height: 37, width: 36}} viewBox = "0 0 36 37">
							<Path fill = {"#F0F0F0"}     d = "M35.6625 9.59824V36.0644C31.4571 37.1708 27.054 37.2977 22.7919 36.4355C18.5297 35.5732 14.5222 33.7447 11.0776 31.0906C7.63305 28.4366 4.8432 25.0277 2.92274 21.1263C1.00228 17.2249 0.0023912 12.9349 0 8.58645C0 7.81028 0.0311879 7.04218 0.093564 6.28217H15.6967C16.4448 6.28288 17.1816 6.09945 17.842 5.74807C18.5025 5.39668 19.0663 4.88815 19.4837 4.26733C19.9012 3.64652 20.1594 2.9325 20.2356 2.18829C20.3118 1.44408 20.2037 0.692543 19.9208 6.34494e-07H26.0608C27.3215 -0.000457767 28.57 0.247473 29.7349 0.729625C30.8998 1.21178 31.9584 1.91871 32.85 2.81003C33.7417 3.70136 34.449 4.75961 34.9315 5.92435C35.4141 7.08909 35.6625 8.33749 35.6625 9.59824Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_db5e00}    >
					<View style = {noneModeStyles._layer_aeb615}   >
						<Svg style={{height: 23, width: 24}} viewBox = "0 0 24 23">
							<Path fill = {"#6C63FF"}     d = "M24 21.2327C24 21.7931 23.9791 22.3466 23.9339 22.8931H9.64181C8.37561 22.8932 7.12179 22.6439 5.95195 22.1593C4.78211 21.6748 3.71918 20.9646 2.82383 20.0693C1.92849 19.174 1.21827 18.111 0.733756 16.9412C0.249239 15.7714 -8.65575e-05 14.5175 2.25414e-08 13.2513V0.177541C2.99582 -0.212084 6.04026 0.0412944 8.93046 0.920792C11.8207 1.80029 14.4902 3.2857 16.7612 5.27803C19.0322 7.27037 20.8524 9.72385 22.1006 12.475C23.3488 15.2261 23.9963 18.2117 24 21.2327H24Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_5029cb}    >
					<View style = {noneModeStyles._layer_f0d56c}   >
						<Svg style={{height: 35, width: 20}} viewBox = "0 0 20 35">
							<Path fill = {"#6C63FF"}     d = "M4.66534 34.8612C5.063 35.0361 5.5138 35.0461 5.91884 34.8891C6.32389 34.7321 6.65012 34.4208 6.82597 34.0236L19.5749 5.1294C19.8667 4.46817 19.9559 3.73527 19.8311 3.02337C19.7064 2.31147 19.3733 1.65256 18.874 1.12996C18.3748 0.607356 17.7318 0.244551 17.0263 0.0874129C16.3208 -0.0697251 15.5846 -0.0141339 14.9108 0.247159H14.9107C14.1322 0.544481 13.4807 1.10235 13.0672 1.82585C13.0014 1.94032 12.9417 2.0582 12.8884 2.17899L0.139496 31.0732C0.0526066 31.27 0.0053511 31.4821 0.000428718 31.6973C-0.00449366 31.9124 0.0330131 32.1264 0.110808 32.3271C0.188602 32.5277 0.305164 32.7111 0.45383 32.8667C0.602495 33.0223 0.780353 33.1471 0.977252 33.234L4.66534 34.8612Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_bd1830}    >
					<View style = {noneModeStyles._layer_0fd0fa}   >
						<Svg style={{height: 18, width: 13}} viewBox = "0 0 13 18">
							<Path fill = {"#2F2E41"}     d = "M12.9247 18L0 15.1277L3.199 6.665C3.74397 4.59656 5.01224 2.79194 6.77375 1.57846C8.53526 0.364991 10.6734 -0.176959 12.8002 0.0509115L12.9247 0.0647165L12.9247 18Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_e38d38}    >
					<View style = {noneModeStyles._layer_b8d388}   >
						<Svg style={{height: 36, width: 21}} viewBox = "0 0 21 36">
							<Path fill = {"#6C63FF"}     d = "M15.0229 36C14.6473 35.9994 14.2799 35.8899 13.9652 35.6849C13.6504 35.4799 13.4018 35.1881 13.2494 34.8447L0.338224 5.58266C-0.0723956 4.65161 -0.110566 3.5986 0.231555 2.64027C0.573675 1.68194 1.27007 0.891168 2.17747 0.430652C3.08487 -0.0298646 4.13425 -0.125103 5.10973 0.164532C6.08521 0.454167 6.91259 1.10665 7.42165 1.98773V1.9876C7.4932 2.11204 7.55808 2.24021 7.616 2.37156L20.5272 31.6337C20.7345 32.1035 20.7467 32.6364 20.561 33.1151C20.3754 33.5939 20.0072 33.9793 19.5374 34.1866L15.6757 35.8903L15.6738 35.886C15.465 35.9613 15.2448 35.9999 15.0229 36Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_e287b4}    >
					<View style = {noneModeStyles._layer_eb3ae7}   >
						<Svg style={{height: 37, width: 8}} viewBox = "0 0 8 37">
							<Path fill = {"#6C63FF"}     d = "M1.64427 0C1.20833 0.000486709 0.790385 0.173883 0.48213 0.482138C0.173875 0.790394 0.000486708 1.20833 0 1.64427V35.3557C0.000487432 35.7917 0.173875 36.2096 0.48213 36.5179C0.790385 36.8261 1.20833 36.9995 1.64427 37H5.68905C6.12499 36.9995 6.54293 36.8261 6.85119 36.5179C7.15944 36.2096 7.33283 35.7917 7.33332 35.3557V1.64427C7.33283 1.20833 7.15944 0.790394 6.85119 0.482138C6.54293 0.173883 6.12499 0.000486709 5.68905 0H1.64427Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_9f2b03}    >
					<View style = {noneModeStyles._layer_bb2e9f}   >
						<Svg style={{height: 37, width: 8}} viewBox = "0 0 8 37">
							<Path fill = {"#6C63FF"}     d = "M1.64427 0C1.20833 0.000486709 0.790386 0.173883 0.48213 0.482138C0.173875 0.790394 0.000486709 1.20833 0 1.64427V35.3557C0.000487433 35.7917 0.173875 36.2096 0.48213 36.5179C0.790386 36.8261 1.20833 36.9995 1.64427 37H5.68911C6.12505 36.9995 6.543 36.8261 6.85125 36.5179C7.15951 36.2096 7.3329 35.7917 7.33338 35.3557V1.64427C7.3329 1.20833 7.15951 0.790394 6.85125 0.482138C6.543 0.173883 6.12505 0.000486709 5.68911 0H1.64427Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_31c448}    >
					<View style = {noneModeStyles._layer_e75591}   >
						<Svg style={{height: 28, width: 28}} viewBox = "0 0 28 28">
							<Path fill = {"#6C63FF"}     d = "M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_46afd3}    >
					<View style = {noneModeStyles._layer_e67dfd}   >
						<Svg style={{height: 10, width: 4}} viewBox = "0 0 4 10">
							<Path fill = {"#2F2E41"}     d = "M0.016049 9.82696C0.97025 9.80047 2.15781 9.76735 3.0727 9.09903C3.34513 8.89186 3.56896 8.62764 3.72852 8.32485C3.88807 8.02207 3.97948 7.68806 3.99635 7.34623C4.0129 7.10329 3.97304 6.85982 3.87989 6.63484C3.78674 6.40987 3.64282 6.20948 3.45938 6.04935C2.98154 5.64556 2.28378 5.55086 1.53182 5.77185L2.31091 0.078351L1.739 0L0.823096 6.69343L1.30069 6.47426C1.85439 6.2203 2.61445 6.09107 3.08676 6.4902C3.20274 6.59455 3.2931 6.72423 3.3508 6.86918C3.40851 7.01413 3.432 7.17043 3.41947 7.32593C3.40547 7.58035 3.33683 7.82877 3.21823 8.05428C3.09963 8.2798 2.93385 8.47712 2.73217 8.63283C2.0202 9.15288 1.07361 9.21996 0 9.24998L0.016049 9.82696Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_3e29c2}    >
					<View style = {noneModeStyles._layer_eef837}   >
						<Svg style={{height: 1, width: 3}} viewBox = "0 0 3 1">
							<Path fill = {"#2F2E41"}     d = "M3 0H0V0.557018H3V0Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_947f40}    >
					<View style = {noneModeStyles._layer_c63e04}   >
						<Svg style={{height: 1, width: 3}} viewBox = "0 0 3 1">
							<Path fill = {"#2F2E41"}     d = "M2.99999 0H0V0.557018H2.99999V0Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_63d8be}    >
					<View style = {noneModeStyles._layer_9febb1}   >
						<Svg style={{height: 43, width: 28}} viewBox = "0 0 28 43">
							<Path fill = {"#2F2E41"}     d = "M27.2665 41.1455L22.2708 4.67711C22.2173 4.28607 22.0239 3.92766 21.7264 3.6682C21.429 3.40875 21.0476 3.26581 20.6529 3.26582H16.8822C16.8979 3.17594 16.9061 3.08491 16.9066 2.99367V1.63291C16.9066 1.19984 16.7346 0.784512 16.4283 0.478284C16.1221 0.172056 15.7068 1.08264e-05 15.2737 0H12.0079C11.5748 1.01047e-05 11.1595 0.172056 10.8532 0.478284C10.547 0.784512 10.375 1.19984 10.375 1.63291V2.99367C10.3755 3.08491 10.3837 3.17594 10.3994 3.26582H6.62863C6.23394 3.26583 5.8526 3.40878 5.55516 3.66823C5.25773 3.92768 5.06433 4.28608 5.01073 4.67711L0.0151084 41.1455C-0.0165363 41.3765 0.00166024 41.6116 0.0684624 41.8349C0.135265 42.0583 0.249122 42.2648 0.40239 42.4405C0.555658 42.6162 0.744781 42.7571 0.957026 42.8536C1.16927 42.9501 1.39972 43 1.63287 43H25.6487C25.8818 43 26.1123 42.9501 26.3245 42.8536C26.5368 42.7571 26.7259 42.6162 26.8792 42.4405C27.0324 42.2648 27.1463 42.0583 27.2131 41.8349C27.2799 41.6116 27.2981 41.3765 27.2665 41.1455Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_e1bcd9}    >
					<View style = {noneModeStyles._layer_d63ab0}   >
						<Svg style={{height: 18, width: 13}} viewBox = "0 0 13 18">
							<Path fill = {"#2F2E41"}     d = "M0 18V0.0645213L0.12452 0.0507161C2.254 -0.176952 4.39451 0.36679 6.15717 1.58316C7.91983 2.79952 9.1877 4.60782 9.73045 6.67952L12.9248 15.1277L0 18Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_0edd29}    >
					<View style = {noneModeStyles._layer_206475}   >
						<Svg style={{height: 35, width: 34}} viewBox = "0 0 34 35">
							<Path fill = {"#2F2E41"}     d = "M18.0337 33.898L8.46922 30.1856C6.90523 29.5786 5.33249 28.99 3.77678 28.3621C3.11039 28.1298 2.49653 27.7681 1.97059 27.2975C1.5127 26.8128 1.20062 26.2089 1.07012 25.5549C0.738389 24.1528 0.798365 22.6198 0.822024 21.189C0.84038 19.6236 0.969199 18.0616 1.20751 16.5144C1.62519 13.6069 2.60608 10.8089 4.0952 8.2771C6.77748 3.87612 11.3989 0.564974 16.7147 0.829233C19.1757 0.95157 21.6509 1.83468 23.4794 3.51729C23.6701 3.74523 23.8841 3.95264 24.118 4.13615C24.2805 4.1971 24.4573 4.20897 24.6265 4.17029C24.8496 4.15594 25.073 4.14498 25.2965 4.13743C26.072 4.10471 26.8489 4.1373 27.6189 4.23484C29.0222 4.38644 30.3522 4.9387 31.4502 5.8257C32.3639 6.61174 33.1074 7.72141 33.1839 8.95458C33.2209 9.52068 33.1273 10.0877 32.9104 10.6119C32.6934 11.1361 32.359 11.6034 31.9328 11.9779C30.7918 12.9396 29.1637 12.6016 27.7949 12.5291L22.7806 12.2634L20.24 12.1288C19.7168 12.1011 19.7184 12.9146 20.24 12.9422L26.9926 13.3C28.0778 13.3575 29.1961 13.4984 30.2822 13.4333C31.1166 13.3955 31.9134 13.075 32.5416 12.5244C33.1153 11.9973 33.5426 11.3307 33.782 10.5893C34.0213 9.84798 34.0645 9.05728 33.9072 8.2943C33.5591 6.63018 32.3206 5.25358 30.8687 4.43463C28.8931 3.32031 26.5337 3.21354 24.3232 3.37828L24.6108 3.4974C22.1103 0.813636 18.2802 -0.319489 14.6844 0.077052C10.8879 0.495734 7.51117 2.61377 5.08505 5.50998C2.38006 8.73906 0.906011 12.7655 0.332955 16.9058C0.0347391 19.1412 -0.0634404 21.3988 0.0395842 23.6516C0.0353421 24.6452 0.205318 25.6318 0.541802 26.5667C0.925718 27.4765 1.61986 28.2207 2.5008 28.6669C3.51077 29.1545 4.54909 29.581 5.61016 29.9442L9.13392 31.3119L16.0556 33.9985L17.8175 34.6824C18.3058 34.8719 18.5173 34.0857 18.0337 33.898Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_4e2355}    >
					<View style = {noneModeStyles._layer_e326e8}   >
						<Svg style={{height: 9, width: 9}} viewBox = "0 0 9 9">
							<Path fill = {"#2F2E41"}     d = "M4.5 9C3.60998 9 2.73995 8.73608 1.99993 8.24162C1.25991 7.74715 0.68314 7.04435 0.342546 6.22208C0.00195202 5.39981 -0.0871659 4.49501 0.0864674 3.6221C0.260101 2.74918 0.68868 1.94736 1.31802 1.31803C1.94735 0.68869 2.74918 0.260101 3.62209 0.0864674C4.49501 -0.087166 5.3998 0.00195202 6.22207 0.342546C7.04433 0.68314 7.74713 1.25992 8.2416 1.99994C8.73607 2.73996 8.99999 3.60999 8.99999 4.5C8.99865 5.69306 8.52411 6.83688 7.68049 7.6805C6.83687 8.52412 5.69306 8.99866 4.5 9ZM4.5 0.870971C3.78224 0.870971 3.08061 1.08381 2.48381 1.48257C1.88702 1.88134 1.42189 2.44811 1.14721 3.11123C0.872541 3.77435 0.800671 4.50403 0.940698 5.20799C1.08072 5.91195 1.42636 6.55859 1.93389 7.06612C2.44142 7.57364 3.08805 7.91928 3.79201 8.05931C4.49597 8.19933 5.22565 8.12746 5.88877 7.85279C6.55188 7.57812 7.11866 7.11298 7.51743 6.51619C7.91619 5.9194 8.12903 5.21776 8.12903 4.5C8.12794 3.53785 7.74525 2.61543 7.06491 1.93508C6.38457 1.25474 5.46214 0.872053 4.5 0.870971Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_36c787}    >
					<View style = {noneModeStyles._layer_79e45c}   >
						<Svg style={{height: 16, width: 16}} viewBox = "0 0 16 16">
							<Path fill = {"#F0F0F0"}     d = "M16 6.93395L6.93397 0L1.34798e-05 9.06602L9.06604 16L16 6.93395Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_2e847a}    >
					<View style = {noneModeStyles._layer_c7ba61}   >
						<Svg style={{height: 22, width: 28}} viewBox = "0 0 28 22">
							<Path fill = {"#F0F0F0"}     d = "M15.3496 15.3497C16.7804 15.3485 18.1916 15.6825 19.4701 16.3247C20.7486 16.967 21.859 17.8997 22.7123 19.0482L28 12.1345L12.1344 0L0 15.8656L6.83802 21.0956C7.52232 19.3984 8.6983 17.9446 10.215 16.9208C11.7316 15.8969 13.5197 15.3498 15.3496 15.3497Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_ef7afa}    >
					<View style = {noneModeStyles._layer_eaadc2}   >
						<Svg style={{height: 1, width: 192}} viewBox = "0 0 192 1">
							<Path fill = {"#3F3D56"}     d = "M191.729 0.542379H0.271186C0.199263 0.542379 0.130286 0.513804 0.0794285 0.462946C0.0285711 0.412088 0 0.343114 0 0.27119C0 0.199266 0.0285711 0.130291 0.0794285 0.0794335C0.130286 0.0285756 0.199263 0 0.271186 0H191.729C191.801 0 191.87 0.0285756 191.921 0.0794335C191.971 0.130291 192 0.199266 192 0.27119C192 0.343114 191.971 0.412088 191.921 0.462946C191.87 0.513804 191.801 0.542379 191.729 0.542379Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_23bc97}    >
					<View style = {noneModeStyles._layer_6a4045}   >
						<Svg style={{height: 7, width: 25}} viewBox = "0 0 25 7">
							<Path fill = {"#6C63FF"}     d = "M22.2785 6.79756H2.72147C1.99994 6.79674 1.30819 6.50975 0.797987 5.99955C0.287789 5.48936 0.000813949 4.79762 0 4.07609V2.72147C0.000813949 1.99994 0.287789 1.3082 0.797987 0.798003C1.30819 0.287805 1.99994 0.000813948 2.72147 0H22.2785C23.0001 0.000813948 23.6918 0.287805 24.202 0.798003C24.7122 1.3082 24.9992 1.99994 25 2.72147V4.07609C24.9992 4.79762 24.7122 5.48936 24.202 5.99955C23.6918 6.50975 23.0001 6.79674 22.2785 6.79756Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_af15ae}    >
					<View style = {noneModeStyles._layer_74dc28}   >
						<Svg style={{height: 8, width: 26}} viewBox = "0 0 26 8">
							<Path fill = {"#3F3D56"}     d = "M23.0602 7.27329H2.93984C2.16042 7.2724 1.41317 6.9624 0.862032 6.41126C0.310898 5.86013 0.000889242 5.11288 0 4.33346V2.93983C0.000889242 2.16041 0.310898 1.41316 0.862032 0.862031C1.41317 0.310898 2.16042 0.000889241 2.93984 0H23.0602C23.8396 0.000889241 24.5868 0.310898 25.1379 0.862031C25.6891 1.41316 25.9991 2.16041 26 2.93983V4.33346C25.9991 5.11288 25.6891 5.86013 25.1379 6.41126C24.5868 6.9624 23.8396 7.2724 23.0602 7.27329ZM2.93984 0.559968C2.30887 0.560673 1.70395 0.811633 1.25779 1.25779C0.811635 1.70395 0.560673 2.30887 0.559969 2.93983V4.33346C0.560673 4.96443 0.811635 5.56934 1.25779 6.0155C1.70395 6.46166 2.30887 6.71262 2.93984 6.71333H23.0602C23.6911 6.71262 24.296 6.46166 24.7422 6.0155C25.1884 5.56934 25.4393 4.96443 25.44 4.33346V2.93983C25.4393 2.30887 25.1884 1.70395 24.7422 1.25779C24.296 0.811633 23.6911 0.560673 23.0602 0.559968H2.93984Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._User_Name}   >
				User Name
			</Text>
			<Text style = {noneModeStyles._Password}   >
				Password
			</Text>
			<View style = {noneModeStyles._Rectangle_1}    >
			</View>
			<View style = {noneModeStyles._Rectangle_2}    >
			</View>
			<Text style = {noneModeStyles._Login_as_Employee}   >
				Login as Employee
			</Text>
			<Text style = {noneModeStyles._About_US}   >
				About US
			</Text>
			<Text style = {noneModeStyles._Forget_Password}   >
				Forget Password
			</Text>
			<Text style = {noneModeStyles._Login}   >
				Login
			</Text>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Login_As_Admin

const noneModeStyles = StyleSheet.create({
_page5: {
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
_layer_a1a667: {
	position: "absolute",
	transform: [
		{translateY: 6.25},
	],
	},
_layer_3860c9: {
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
_layer_baf0a3: {
	position: "absolute",
	transform: [
		{translateX: 0.899994},
		{translateY: 0.357147},
	],
	},
_layer_a69936: {
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
_layer_5726af: {
	position: "absolute",
	transform: [
		{translateX: 0.899994},
		{translateY: 0.357147},
	],
	},
_layer_b0d63b: {
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
_undraw_Mobile_login_re_9ntv_1: {
	width: 191.053,
	height: 150,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 92,
	top: 348,
	},
_layer_bfcd85: {
	position: "absolute",
	transform: [
		{translateX: 153.663},
		{translateY: 89.1788},
	],
	},
_layer_b15b20: {
	},
_layer_2878b0: {
	position: "absolute",
	transform: [
		{translateX: 156.857},
		{translateY: 127.967},
	],
	},
_layer_448a96: {
	},
_layer_750627: {
	position: "absolute",
	transform: [
		{translateX: 101.492},
		{translateY: 4.82151},
	],
	},
_layer_17785a: {
	},
_layer_e0db34: {
	position: "absolute",
	transform: [
		{translateX: 104.978},
		{translateY: 8.10932},
	],
	},
_layer_a88577: {
	},
_layer_60d8f3: {
	position: "absolute",
	transform: [
		{translateX: 112.318},
		{translateY: 72.9431},
	],
	},
_layer_5eef4e: {
	},
_layer_66c796: {
	position: "absolute",
	transform: [
		{translateX: 112.318},
		{translateY: 84.5215},
	],
	},
_layer_35adda: {
	},
_layer_18e3cb: {
	position: "absolute",
	transform: [
		{translateX: 114.227},
		{translateY: 70.0837},
	],
	},
_layer_67b19f: {
	},
_layer_b2f775: {
	position: "absolute",
	transform: [
		{translateX: 114.227},
		{translateY: 81.6622},
	],
	},
_layer_a6f672: {
	},
_layer_8734a5: {
	position: "absolute",
	transform: [
		{translateX: 135.27},
		{translateY: 8.10932},
	],
	},
_layer_757de9: {
	},
_layer_db5e00: {
	position: "absolute",
	transform: [
		{translateX: 104.978},
		{translateY: 124.159},
	],
	},
_layer_aeb615: {
	},
_layer_5029cb: {
	position: "absolute",
	transform: [
		{translateX: 11.0745},
		{translateY: 88.0453},
	],
	},
_layer_f0d56c: {
	},
_layer_bd1830: {
	position: "absolute",
	transform: [
		{translateX: 17.4386},
		{translateY: 87.4818},
	],
	},
_layer_0fd0fa: {
	},
_layer_e38d38: {
	position: "absolute",
	transform: [
		{translateX: 40.4074},
		{translateY: 87.7757},
	],
	},
_layer_b8d388: {
	},
_layer_e287b4: {
	position: "absolute",
	transform: [
		{translateX: 36.0208},
		{translateY: 113.094},
	],
	},
_layer_eb3ae7: {
	},
_layer_9f2b03: {
	position: "absolute",
	transform: [
		{translateX: 28.1433},
		{translateY: 113.094},
	],
	},
_layer_bb2e9f: {
	},
_layer_31c448: {
	position: "absolute",
	transform: [
		{translateX: 21.8114},
		{translateY: 50.792},
	],
	},
_layer_e75591: {
	},
_layer_46afd3: {
	position: "absolute",
	transform: [
		{translateX: 40.1384},
		{translateY: 61.1441},
	],
	},
_layer_e67dfd: {
	},
_layer_3e29c2: {
	position: "absolute",
	transform: [
		{translateX: 44.9432},
		{translateY: 61.6764},
	],
	},
_layer_eef837: {
	},
_layer_947f40: {
	position: "absolute",
	transform: [
		{translateX: 35.7684},
		{translateY: 61.6764},
	],
	},
_layer_c63e04: {
	},
_layer_63d8be: {
	position: "absolute",
	transform: [
		{translateX: 22.1743},
		{translateY: 82.268},
	],
	},
_layer_9febb1: {
	},
_layer_e1bcd9: {
	position: "absolute",
	transform: [
		{translateX: 41.5014},
		{translateY: 87.482},
	],
	},
_layer_d63ab0: {
	},
_layer_0edd29: {
	position: "absolute",
	transform: [
		{translateX: 16.9326},
		{translateY: 45.0091},
	],
	},
_layer_206475: {
	},
_layer_4e2355: {
	position: "absolute",
	transform: [
		{translateX: 15.7309},
		{translateY: 42.8701},
	],
	},
_layer_e326e8: {
	},
_layer_36c787: {
	position: "absolute",
	transform: [
		{translateX: 73.8552},
		{translateY: 70.2317},
	],
	},
_layer_79e45c: {
	},
_layer_2e847a: {
	position: "absolute",
	transform: [
		{translateX: 23.3225},
		{translateY: 0.0000038147},
	],
	},
_layer_c7ba61: {
	},
_layer_ef7afa: {
	position: "absolute",
	transform: [
		{translateY: 149.46},
	],
	},
_layer_eaadc2: {
	},
_layer_23bc97: {
	position: "absolute",
	transform: [
		{translateX: 122.194},
		{translateY: 98.4837},
	],
	},
_layer_6a4045: {
	},
_layer_af15ae: {
	position: "absolute",
	transform: [
		{translateX: 124.103},
		{translateY: 95.6245},
	],
	},
_layer_74dc28: {
	},
_User_Name: {
	width: 92,
	height: 13,
	position: "absolute",
	left: 58,
	top: 174,
	color: "rgb(255, 255, 255)",
	fontSize: 16,
	fontWeight: "400",
	lineHeight: 7.84615,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Password: {
	width: 92,
	height: 13,
	position: "absolute",
	left: 58,
	top: 253,
	color: "rgb(255, 252, 252)",
	fontSize: 16,
	fontWeight: "400",
	lineHeight: 7.84615,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_1: {
	width: 238,
	height: 43,
	backgroundColor: "rgb(254, 247, 247)",
	position: "absolute",
	left: 63,
	top: 195,
	},
_Rectangle_2: {
	width: 238,
	height: 43,
	backgroundColor: "rgb(254, 247, 247)",
	position: "absolute",
	left: 63,
	top: 269,
	},
_Login_as_Employee: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 77,
	top: 535,
	color: "rgb(250, 250, 255)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_About_US: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 196,
	top: 579,
	color: "rgb(248, 232, 232)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Forget_Password: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 206,
	top: 320,
	color: "rgb(255, 248, 248)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Login: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 69,
	top: 328,
	color: "rgb(252, 246, 246)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
})

