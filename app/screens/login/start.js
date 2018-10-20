import React from "react";
import { View, Image, Keyboard, StyleSheet } from "react-native";
import {
  RkButton,
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkTheme,
  RkAvoidKeyboard
} from "react-native-ui-kitten";
import { FontAwesome } from "../../assets/icons";
import { GradientButton } from "../../components/";
import { scale, scaleModerate, scaleVertical } from "../../utils/scale";

export class Start extends React.Component {
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
        <RkButton
          style={styles.buttonProfile}
          rkType="social"
          onPress={() => {
            this.props.navigation.navigate("Settings");
          }}
        >
          <RkText rkType="awesome hero accentColor">{FontAwesome.bars}</RkText>
        </RkButton>
        <View style={styles.space} />
        <View style={{ alignItems: "center" }}>
          {renderIcon()}
          <RkText rkType="h3">Inicio</RkText>
        </View>
        <View style={styles.content}>
          <View>
            <GradientButton
              style={styles.save}
              rkType="large"
              text="Publicar"
              onPress={() => {
                this.props.navigation.navigate("Publish");
              }}
            />
            <GradientButton
              style={styles.save}
              rkType="large3"
              text="Buscar"
              onPress={() => {
                this.props.navigation.navigate("Search");
              }}
            />
            <GradientButton
              style={styles.save}
              rkType="large2"
              text="Notificaciones"
              onPress={() => {
                this.props.navigation.navigate("Notifications");
              }}
            />
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
    flex: 1,
    position: "absolute",
    flexDirection: "row",
    marginBottom: 24,
    marginHorizontal: 24,
    justifyContent: "space-around",
    alignSelf: "stretch"
  },
  buttonProfile: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 30,
    marginHorizontal: 15,
    padding: 30,
    marginTop: 15,
    position: "absolute",
    top: 0,
    right: 0
  },
  footer: {
    justifyContent: "flex-end"
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "center"
  },
  space: {
    flex: 1,
    marginBottom: 30,
    marginHorizontal: 30,
    justifyContent: "space-around",
    alignSelf: "stretch"
  }
}));
