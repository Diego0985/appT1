import React from 'react';
import { View, Image, Dimensions, Keyboard } from 'react-native';
import { RkButton, RkText, RkTextInput, RkAvoidKeyboard, RkStyleSheet, RkTheme } from 'react-native-ui-kitten';
import { FontAwesome } from '../../assets/icons';
import { GradientButton } from '../../components/gradientButton';
import { scale, scaleModerate, scaleVertical } from '../../utils/scale';

export class LoginV1 extends React.Component {
	static navigationOptions = {
		header: null,
	};

	constructor(props) {
		super(props);
	}

	_renderImage(image) {
		let contentHeight = scaleModerate(375, 1);
		let height = Dimensions.get('window').height - contentHeight;
		let width = Dimensions.get('window').width;

		if (RkTheme.current.name === 'light')
			image = (
				<Image
					style={[styles.image, { height, width }]}
					source={require('../../assets/images/logocumba.png')}
				/>
			);
		else
			image = (
				<Image
					style={[styles.image, { height, width }]}
					source={require('../../assets/images/logocumba.png')}
				/>
			);
		return image;
	}

	render() {
		let image = this._renderImage();

		return (
			<RkAvoidKeyboard
				onStartShouldSetResponder={e => true}
				onResponderRelease={e => Keyboard.dismiss()}
				style={styles.screen}
			>
				{image}
				<View style={styles.container}>
					<View style={styles.text}>
						<RkText rkType="logo" style={styles.appName}>
							CUMBA
						</RkText>
					</View>
					<RkTextInput rkType="rounded" placeholder="Usuario" />
					<RkTextInput rkType="rounded" placeholder="Contraseña" secureTextEntry={true} />
					<GradientButton
						onPress={() => {
							this.props.navigation.goBack();
						}}
						rkType="large"
						style={styles.save}
						text="LOGIN"
					/>
					<View style={styles.footer}>
						<View style={styles.textRow}>
							<RkText rkType="primary3">¿No tienes una cuenta? </RkText>
							<RkButton rkType="clear">
								<RkText rkType="header6" onPress={() => this.props.navigation.navigate('SignUp')}>
									{' '}
									Registrate{' '}
								</RkText>
							</RkButton>
						</View>
						<View style={styles.textRow}>
							<RkText rkType="primary3">¿Olvidaste tu clave? </RkText>
							<RkButton rkType="clear">
								<RkText rkType="header6" onPress={() => this.props.navigation.navigate('SignUp')}>
									{' '}
									Recuperar Clave{' '}
								</RkText>
							</RkButton>
						</View>
					</View>
				</View>
			</RkAvoidKeyboard>
		);
	}
}

let styles = RkStyleSheet.create(theme => ({
	appName: {
		alignItems: 'center',
		fontSize: 40,
	},
	screen: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: theme.colors.screen.base,
	},
	image: {
		resizeMode: 'cover',
		marginBottom: scaleVertical(10),
	},
	container: {
		paddingHorizontal: 17,
		paddingBottom: scaleVertical(22),
		alignItems: 'center',
		flex: -1,
	},
	footer: {
		justifyContent: 'flex-end',
		flex: 1,
	},
	buttons: {
		flexDirection: 'row',
		marginBottom: scaleVertical(24),
	},
	button: {
		marginHorizontal: 14,
	},
	save: {
		marginVertical: 9,
	},
	textRow: {
		justifyContent: 'center',
		flexDirection: 'row',
	},
}));
