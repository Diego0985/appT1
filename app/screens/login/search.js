import React from "react";
import { View, Image, Keyboard, ScrollView, Alert } from "react-native";
import {
  RkButton,
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkTheme,
  RkAvoidKeyboard
} from "react-native-ui-kitten";
import { GradientButton } from "../../components/";
import { FontAwesome } from "../../assets/icons";
import { scale, scaleModerate, scaleVertical } from "../../utils/scale";
import DateTimePicker from "react-native-modal-datetime-picker";
import Moment from "moment";

export class Search extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    let today = new Date();
    date = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();
    date2 =
      today.getFullYear() +
      "-" +
      today.getMonth() +
      "-" +
      (today.getDate() + 1);

    this.state = {
      origin: "",
      destiny: "",
      outDate: date,
      outTime: "07:00",
      isDTPOutVisible: false,
      isTPOutVisible: false
    };

    dateToString = date =>
      date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

    timeToString = date => Moment(date).format("HH:mm");

    showDTPOut = () => this.setState({ isDTPOutVisible: true });

    hideDTPOut = () => this.setState({ isDTPOutVisible: false });

    handleDTPOut = date => {
      console.log("A date has been picked: ", date);
      let info = dateToString(date);
      this.setState({ outDate: info });
      hideDTPOut();
    };

    showTPOut = () => this.setState({ isTPOutVisible: true });

    hideTPOut = () => this.setState({ isTPOutVisible: false });

    handleTPOut = date => {
      console.log("A date has been picked: ", date);
      let info = timeToString(date);
      this.setState({ outTime: info });
      hideTPOut();
    };
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
        <ScrollView>
          <View style={styles.space} />
          <View style={styles.content}>
            <RkText style={styles.subtitle} rkType="h3">
              Desde
            </RkText>
            <RkTextInput
              rkType="rigth clear form"
              label=" "
              value={this.state.origin}
              onChangeText={text => this.setState({ origin: text })}
            />

            <View style={styles.space} />

            <RkText style={styles.subtitle} rkType="h3">
              Hacia
            </RkText>
            <RkTextInput
              rkType="rigth clear form"
              label=" "
              value={this.state.destiny}
              onChangeText={text => this.setState({ destiny: text })}
            />

            <View style={styles.space} />

            <View>
              <RkText style={styles.subtitle} rkType="h3">
                Fecha
              </RkText>
              <View style={styles.dateRow}>
                <RkTextInput
                  editable={false}
                  rkType="h5 clear"
                  label=" "
                  value={this.state.outDate}
                  onChangeText={text => this.setState({ outDate: text })}
                />
                <RkButton
                  style={styles.buttonRight}
                  rkType="social"
                  onPress={showDTPOut}
                >
                  <RkText rkType="awesome hero accentColor">
                    {FontAwesome.calendar}
                  </RkText>
                </RkButton>
              </View>
              <DateTimePicker
                isVisible={this.state.isDTPOutVisible}
                onConfirm={handleDTPOut}
                onCancel={hideDTPOut}
              />
            </View>

            <View>
              <RkText style={styles.subtitle} rkType="h3">
                Salida después de:
              </RkText>
              <View style={styles.dateRow}>
                <RkTextInput
                  editable={false}
                  rkType="h5 clear"
                  label=" "
                  value={this.state.outTime}
                  onChangeText={text => this.setState({ outTime: text })}
                />
                <RkButton
                  style={styles.buttonRight}
                  rkType="social"
                  onPress={showTPOut}
                >
                  <RkText rkType="awesome hero accentColor">
                    {FontAwesome.plus}
                  </RkText>
                </RkButton>
              </View>
              <DateTimePicker
                isVisible={this.state.isTPOutVisible}
                onConfirm={handleTPOut}
                onCancel={hideTPOut}
                mode="time"
              />
            </View>
            <GradientButton
              style={styles.save}
              rkType="large3"
              text="BUSCAR"
              onPress={() => {
                this.props.navigation.goBack();
              }}
            />
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
  },
  subtitle: {
    color: "#E53935"
  },
  space: {
    flex: 1,
    marginBottom: 30,
    marginHorizontal: 30,
    justifyContent: "space-around",
    alignSelf: "stretch"
  },
  dateRow: {
    flex: 1,
    marginBottom: 24,
    marginHorizontal: 24,
    justifyContent: "space-around",
    alignSelf: "stretch"
  },
  dateColumn: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 24,
    marginHorizontal: 24,
    justifyContent: "space-around",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonRight: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 24,
    marginHorizontal: 24,
    position: "absolute",
    right: 0,
    justifyContent: "space-around",
    alignSelf: "stretch"
  },
  buttonLeftColumn: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 24,
    marginHorizontal: 24,
    position: "absolute",
    right: 0,
    justifyContent: "space-around",
    alignSelf: "stretch"
  }
}));
