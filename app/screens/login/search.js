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

export class Search extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={e => true}
        onResponderRelease={e => Keyboard.dismiss()}
      >
        <View style={{ alignItems: "center" }}>
          <RkText rkType="h1">Buscar</RkText>
        </View>
        <View style={styles.content}>
          <View>
            <RkTextInput rkType="form" label="Desde" />
            <RkTextInput rkType="form" label="Hacia" />
            <RkTextInput rkType="form" label="Fecha" />
            <RkTextInput rkType="form" label="Salida después de: " />
            <GradientButton
              style={styles.save}
              rkType="large"
              text="BUSCAR"
              onPress={() => {
                this.props.navigation.goBack();
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
