import React from "react";
import { View, Image, ScrollView, Keyboard } from "react-native";
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

export class Publish extends React.Component {
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
          <RkText rkType="h1">Publicar</RkText>
        </View>
        <ScrollView>
          <View style={styles.content}>
            <View>
              <View style={{ alignItems: "center" }}>
                <RkText rkType="h3">Entrada Mapa</RkText>
              </View>

              <RkTextInput rkType="form" label="Titulo      " />
              <RkTextInput rkType="form" label="Fecha inicio              " />
              <RkTextInput rkType="form" label="Fecha final                " />
              <RkTextInput
                rkType="form"
                label="Salida (HH:MM)                "
              />
              <RkTextInput
                rkType="form"
                label="Llegada (HH:MM)              "
              />
              <RkTextInput
                rkType="form"
                label="Número de asientos                "
              />
              <RkText rkType="h3">Descripción corta</RkText>
              <RkTextInput rkType="form" label=" " />
              <GradientButton
                style={styles.save}
                rkType="large"
                text="PUBLICAR"
                onPress={() => {
                  this.props.navigation.goBack();
                }}
              />
            </View>
          </View>
        </ScrollView>
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
