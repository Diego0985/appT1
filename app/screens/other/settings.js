import React from 'react';
import { ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';
import { RkText, RkStyleSheet, RkTheme } from 'react-native-ui-kitten';
import { RkSwitch, FindFriends } from '../../components';
import { FontAwesome } from '../../assets/icons';

export class Settings extends React.Component {
	static navigationOptions = {
		title: 'Configuraciones'.toUpperCase(),
	};

	constructor(props) {
		super(props);

		this.state = {
			sendPush: true,
			shouldRefresh: false,
			twitterEnabled: true,
			googleEnabled: false,
			facebookEnabled: true,
		};
	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<View style={styles.section}>
					<View style={[styles.row, styles.heading]}>
						<RkText rkType="primary header6">CONFIGURACIONES DE PERFIL</RkText>
					</View>
					<View style={styles.row}>
						<TouchableOpacity style={styles.rowButton}>
							<RkText rkType="header6">Editar Perfil</RkText>
						</TouchableOpacity>
					</View>
					<View style={styles.row}>
						<TouchableOpacity style={styles.rowButton}>
							<RkText rkType="header6">Cambiar Clave</RkText>
						</TouchableOpacity>
					</View>
					<View style={styles.row}>
						<RkText rkType="header6">Enviar Notificationes</RkText>
						<RkSwitch
							style={styles.switch}
							value={this.state.sendPush}
							name="Push"
							onValueChange={sendPush => this.setState({ sendPush })}
						/>
					</View>
				</View>
				<View style={styles.section}>
					<View style={[styles.row, styles.heading]}>
						<RkText rkType="primary header6">SOPORTE</RkText>
					</View>
					<View style={styles.row}>
						<TouchableOpacity style={styles.rowButton}>
							<RkText rkType="header6">Ayúdame</RkText>
						</TouchableOpacity>
					</View>
					<View style={styles.row}>
						<TouchableOpacity style={styles.rowButton}>
							<RkText rkType="header6">Política de Privacidad</RkText>
						</TouchableOpacity>
					</View>
					<View style={styles.row}>
						<TouchableOpacity style={styles.rowButton}>
							<RkText rkType="header6">Términos y Condiciones</RkText>
						</TouchableOpacity>
					</View>
					<View style={styles.row}>
						<TouchableOpacity style={styles.rowButton}>
							<RkText rkType="header6">Cerrar Sesión</RkText>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		);
	}
}

let styles = RkStyleSheet.create(theme => ({
	container: {
		backgroundColor: theme.colors.screen.base,
	},
	header: {
		paddingVertical: 25,
	},
	section: {
		marginVertical: 25,
	},
	heading: {
		paddingBottom: 12.5,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 17.5,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: theme.colors.border.base,
		alignItems: 'center',
	},
	rowButton: {
		flex: 1,
		paddingVertical: 24,
	},
	switch: {
		marginVertical: 14,
	},
}));
