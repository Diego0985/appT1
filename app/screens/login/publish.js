import React from "react";
import { View, Image, ScrollView, Keyboard, Alert } from "react-native";
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

export class Publish extends React.Component {
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
      title: "",
      beginDate: date,
      endDate: date2,
      beginTime: "07:00",
      endTime: "08:00",
      sits: "1",
      description: "",
      originLatitudeCoord: 0.0,
      originLongitudeCoord: 0.0,
      originName: "",
      destinyLatitudeCoord: 0.0,
      destinyLongitudeCoord: 0.0,
      destinyName: "",
      isDTPBeginVisible: false,
      isDTPEndVisible: false,
      isTPBeginVisible: false,
      isTPEndVisible: false
    };

    dateToString = date =>
      date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

    timeToString = date => Moment(date).format("HH:mm");

    addSits = () => {
      let aux = Number(this.state.sits);
      if (aux >= 5) {
        this.setState({ sits: "5" });
      } else {
        aux = aux + 1;
        this.setState({ sits: String(aux) });
      }
    };

    reduceSits = () => {
      let aux = Number(this.state.sits);
      if (aux <= 1) {
        this.setState({ sits: "1" });
      } else {
        aux = aux - 1;
        this.setState({ sits: String(aux) });
      }
    };

    showDTPBegin = () => this.setState({ isDTPBeginVisible: true });

    hideDTPBegin = () => this.setState({ isDTPBeginVisible: false });

    handleDTPBegin = date => {
      console.log("A date has been picked: ", date);
      let info = dateToString(date);
      this.setState({ beginDate: info });
      hideDTPBegin();
    };

    showDTPEnd = () => this.setState({ isDTPEndVisible: true });

    hideDTPEnd = () => this.setState({ isDTPEndVisible: false });

    handleDTPEnd = date => {
      console.log("A date has been picked: ", date);
      let info = dateToString(date);
      this.setState({ endDate: info });
      hideDTPEnd();
    };

    showTPBegin = () => this.setState({ isTPBeginVisible: true });

    hideTPBegin = () => this.setState({ isTPBeginVisible: false });

    handleTPBegin = date => {
      console.log("A time has been picked: ", date);
      let info = timeToString(date);
      this.setState({ beginTime: info });
      hideTPBegin();
    };

    showTPEnd = () => this.setState({ isTPEndVisible: true });

    hideTPEnd = () => this.setState({ isTPEndVisible: false });

    handleTPEnd = date => {
      console.log("A time has been picked: ", date);
      let info = timeToString(date);
      this.setState({ endTime: info });
      hideDTPEnd();
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
          <RkText rkType="h1">Publicar</RkText>
        </View>
        <ScrollView>
          <View style={styles.space} />
          <View style={styles.content}>
            <View>
              <View style={{ alignItems: "center" }}>
                <RkText rkType="h3">Entrada Mapa</RkText>
              </View>

              <RkText style={styles.subtitle} rkType="h3">
                Título
              </RkText>
              <RkTextInput
                rkType="rigth clear form"
                placeholder="Nuevo Titulo"
                label=" "
                value={this.state.title}
                onChangeText={text => this.setState({ title: text })}
              />

              <View style={styles.space} />

              <View>
                <RkText style={styles.subtitle} rkType="h3">
                  Fecha Inicio
                </RkText>
                <View style={styles.dateRow}>
                  <RkTextInput
                    editable={false}
                    rkType="h5 clear"
                    label=" "
                    value={this.state.beginDate}
                    onChangeText={text => this.setState({ beginDate: text })}
                  />
                  <RkButton
                    style={styles.buttonRight}
                    rkType="social"
                    onPress={showDTPBegin}
                  >
                    <RkText rkType="awesome hero accentColor">
                      {FontAwesome.calendar}
                    </RkText>
                  </RkButton>
                </View>
                <DateTimePicker
                  isVisible={this.state.isDTPBeginVisible}
                  onConfirm={handleDTPBegin}
                  onCancel={hideDTPBegin}
                />
              </View>

              <View style={styles.space} />

              <View>
                <RkText style={styles.subtitle} rkType="h3">
                  Fecha Final
                </RkText>
                <View style={styles.dateRow}>
                  <RkTextInput
                    editable={false}
                    rkType="h5 clear"
                    label=" "
                    value={this.state.endDate}
                    onChangeText={text => this.setState({ endDate: text })}
                  />
                  <RkButton
                    style={styles.buttonRight}
                    rkType="social"
                    onPress={showDTPEnd}
                  >
                    <RkText rkType="awesome hero accentColor">
                      {FontAwesome.calendar}
                    </RkText>
                  </RkButton>
                </View>
                <DateTimePicker
                  isVisible={this.state.isDTPEndVisible}
                  onConfirm={handleDTPEnd}
                  onCancel={hideDTPEnd}
                />
              </View>

              <View style={styles.space} />

              <View>
                <RkText style={styles.subtitle} rkType="h3">
                  Hora de Salida
                </RkText>
                <View style={styles.dateRow}>
                  <RkTextInput
                    editable={false}
                    rkType="h5 clear"
                    label=" "
                    value={this.state.beginTime}
                    onChangeText={text => this.setState({ beginTime: text })}
                  />
                  <RkButton
                    style={styles.buttonRight}
                    rkType="social"
                    onPress={showTPBegin}
                  >
                    <RkText rkType="awesome hero accentColor">
                      {FontAwesome.plus}
                    </RkText>
                  </RkButton>
                </View>
                <DateTimePicker
                  isVisible={this.state.isTPBeginVisible}
                  onConfirm={handleTPBegin}
                  onCancel={hideTPBegin}
                  mode="time"
                />
              </View>

              <View style={styles.space} />

              <View>
                <RkText style={styles.subtitle} rkType="h3">
                  Hora de Llegada
                </RkText>
                <View style={styles.dateRow}>
                  <RkTextInput
                    editable={false}
                    rkType="h5 clear"
                    label=" "
                    value={this.state.endTime}
                    onChangeText={text => this.setState({ endTime: text })}
                  />
                  <RkButton
                    style={styles.buttonRight}
                    rkType="social"
                    onPress={showTPEnd}
                  >
                    <RkText rkType="awesome hero accentColor">
                      {FontAwesome.plus}
                    </RkText>
                  </RkButton>
                </View>
                <DateTimePicker
                  isVisible={this.state.isTPEndVisible}
                  onConfirm={handleTPEnd}
                  onCancel={hideTPEnd}
                  mode="time"
                />
              </View>

              <View style={styles.space} />

              <RkText style={styles.subtitle} rkType="h3">
                Numero de asientos
              </RkText>
              <View style={styles.dateColumn}>
                <RkTextInput
                  style={{ flex: 1 }}
                  editable={false}
                  rkType="h5 clear"
                  label=" "
                  value={this.state.sits}
                  onChangeText={text => this.setState({ sits: text })}
                />
                <RkButton
                  style={styles.buttons}
                  rkType="social"
                  onPress={addSits}
                >
                  <RkText rkType="awesome hero accentColor">
                    {FontAwesome.plus}
                  </RkText>
                </RkButton>
                <RkButton
                  style={styles.buttons}
                  rkType="social"
                  onPress={reduceSits}
                >
                  <RkText rkType="awesome hero accentColor">
                    {FontAwesome.minus}
                  </RkText>
                </RkButton>
              </View>

              <RkText style={styles.subtitle} rkType="h3">
                Descripción corta
              </RkText>
              <RkTextInput
                style={{ multiline: true }}
                rkType="rounded clear"
                label=" "
                value={this.state.description}
                onChangeText={text => this.setState({ description: text })}
              />

              <View style={styles.space} />

              <GradientButton
                style={styles.save}
                rkType="large2"
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "stretch",
    justifyContent: "center"
  },
  footer: {
    justifyContent: "flex-end"
  },
  textRow: {
    flexDirection: "row",
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

  space: {
    flex: 1,
    marginBottom: 30,
    marginHorizontal: 30,
    justifyContent: "space-around",
    alignSelf: "stretch"
  },
  subtitle: {
    color: "#E53935"
  }
}));
