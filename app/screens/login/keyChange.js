import React from "react";
import { View, Image, Keyboard } from "react-native";
import {
  RkButton,
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkTheme,
  RkAvoidKeyboard
} from "react-native-ui-kitten";
import { GradientButton } from "../../components/";
import { scale, scaleModerate, scaleVertical } from "../../utils/scale";

export class KeyChange extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    let renderIcon = () => {
      if (RkTheme.current.name === "light")
        return (
          <Image
            style={styles.image}
            source={require("../../assets/images/logocompartir.png")}
          />
        );
      return (
        <Image
          style={styles.image}
          source={require("../../assets/images/logocompartir.png")}
        />
      );
    };
    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={e => true}
        onResponderRelease={e => Keyboard.dismiss()}
      >
        <View style={{ alignItems: "center" }}>
          {renderIcon()}
          <RkText rkType="h1">Cambio de Clave</RkText>
        </View>
        <View style={styles.content}>
          <View>
            <RkTextInput
              rkType="rounded"
              placeholder="Contraseña"
              secureTextEntry={true}
            />
            <RkTextInput
              rkType="rounded"
              placeholder="Repetir Contraseña"
              secureTextEntry={true}
            />
            <RkTextInput
              rkType="rounded"
              placeholder="Nueva Contraseña"
              secureTextEntry={true}
            />
            <RkTextInput
              rkType="rounded"
              placeholder="Repetir Nueva Contraseña"
              secureTextEntry={true}
            />
            <GradientButton
              style={styles.save}
              rkType="large"
              text="Enviar"
              onPress={() => {
                this.props.navigation.goBack();
              }}
            />
          </View>
          <View style={styles.footer}>
            <View style={styles.textRow}>
              <RkText rkType="primary3">¿No recuerdas tu contraseña? </RkText>
              <RkButton
                rkType="clear"
                onPress={() => this.props.navigation.navigate("Login1")}
              >
                <RkText
                  rkType="header6"
                  onPress={() =>
                    this.props.navigation.navigate("PasswordRecovery")
                  }
                >
                  {" "}
                  Recuperar Clave{" "}
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
  screen: {
    padding: 16,
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: theme.colors.screen.base
  },
  image: {
    marginBottom: 10,
    height: scaleVertical(200),
    resizeMode: "contain"
  },
  content: {
    justifyContent: "space-between"
  },
  save: {
    marginVertical: 20
  },
  buttons: {
    flexDirection: "row",
    marginBottom: 24,
    marginHorizontal: 24,
    justifyContent: "space-around"
  },
  footer: {
    justifyContent: "flex-end"
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "center"
  }
}));
