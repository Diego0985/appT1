import React from "react";
import { ScrollView, View, StyleSheet, Alert } from "react-native";
import {
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkChoice,
  RkTheme,
  RkStyleSheet
} from "react-native-ui-kitten";
import { data } from "../../data";
import { Avatar } from "../../components";
import { SocialSetting, RkSwitch } from "../../components";
import { FontAwesome } from "../../assets/icons";
import { GradientButton } from "../../components";

export class ProfileSettings extends React.Component {
  constructor(props) {
    super(props);
    this.user = data.getUser();

    this.state = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      direction: "EPN",
      birthDate: "1995-09-08",
      description: "",
      phone: this.user.phone,
      carYear: "2010",
      carLicensePlate: "ABC-123",
      carModel: "Picanto",
      carBrand: "KIA",
      carSits: "4",
      carType: "Hatchback",
      isDriver: false
    };

    updateCarFields = () => {
      this.setState({ carYear: "" });
    };
  }

  render() {
    return (
      <ScrollView style={styles.root}>
        <RkAvoidKeyboard>
          <View style={styles.header}>
            <Avatar img={this.user.photo} rkType="big" />
          </View>
          <View style={styles.section}>
            <View style={[styles.row, styles.heading]}>
              <RkText rkType="header6 primary">INFORMACIÓN PERSONAL</RkText>
            </View>
            <View style={styles.row}>
              <RkTextInput
                label="Nombre de usuario"
                editable={false}
                value={this.state.firstName}
                rkType="right clear"
                onChangeText={text => this.setState({ firstName: text })}
              />
            </View>
            <View style={styles.row}>
              <RkTextInput
                label="Nombre"
                value={this.state.firstName}
                rkType="right clear"
                onChangeText={text => this.setState({ firstName: text })}
              />
            </View>
            <View style={styles.row}>
              <RkTextInput
                label="Apellido"
                value={this.state.lastName}
                onChangeText={text => this.setState({ lastName: text })}
                rkType="right clear"
              />
            </View>
            <View style={styles.row}>
              <RkTextInput
                editable={false}
                label="Email"
                value={this.state.email}
                onChangeText={text => this.setState({ email: text })}
                rkType="right clear"
              />
            </View>
            <View style={styles.row}>
              <RkTextInput
                label="Dirección"
                value={this.state.direction}
                onChangeText={text => this.setState({ direction: text })}
                rkType="right clear"
              />
            </View>
            <View style={styles.row}>
              <RkTextInput
                label="Teléfono"
                value={this.state.phone}
                onChangeText={text => this.setState({ phone: text })}
                rkType="right clear"
              />
            </View>
            <View style={styles.row}>
              <RkTextInput
                label="Fecha de Nacimiento"
                value={this.state.birthDate}
                onChangeText={text => this.setState({ birthDate: text })}
                rkType="right clear"
              />
            </View>
            <View style={[styles.row, styles.heading]}>
              <RkText rkType="primary header5">Descripción</RkText>
            </View>
            <RkTextInput
              style={{ marginHorizontal: 15 }}
              rkType="rounded clear"
              label=" "
              value={this.state.description}
              onChangeText={text => this.setState({ description: text })}
            />
          </View>
          <View style={styles.section}>
            <View style={[styles.row, styles.heading]}>
              <RkText rkType="primary header6">INFORMACIÓN DE AUTO</RkText>
            </View>
            <View style={styles.rowSwitch}>
              <RkText rkType="header6">¿Eres conductor?</RkText>
              <RkChoice
                selected={this.state.isDriver}
                onPress={() =>
                  this.setState({ isDriver: !this.state.isDriver })
                }
              />
            </View>
            <View style={styles.row}>
              <RkTextInput
                label="Num. Placa"
                value={this.state.carLicensePlate}
                onChangeText={text => this.setState({ carLicensePlate: text })}
                rkType="right clear"
              />
            </View>
            <View style={styles.row}>
              <RkTextInput
                label="Modelo"
                value={this.state.carModel}
                onChangeText={text => this.setState({ carModel: text })}
                rkType="right clear"
              />
            </View>
            <View style={styles.row}>
              <RkTextInput
                label="Marca"
                value={this.state.carBrand}
                onChangeText={text => this.setState({ carBrand: text })}
                rkType="right clear"
              />
            </View>
            <View style={styles.row}>
              <RkTextInput
                label="Num. Asientos"
                value={this.state.carSits}
                onChangeText={text => this.setState({ carSits: text })}
                rkType="right clear"
              />
            </View>
            <View style={styles.row}>
              <RkTextInput
                label="Año"
                value={this.state.carYear}
                onChangeText={text => this.setState({ carYear: text })}
                rkType="right clear"
              />
            </View>
          </View>
          <GradientButton rkType="large" style={styles.button} text="GUARDAR" />
        </RkAvoidKeyboard>
      </ScrollView>
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  header: {
    backgroundColor: theme.colors.screen.neutral,
    paddingVertical: 25
  },
  section: {
    marginVertical: 25
  },
  heading: {
    paddingBottom: 12.5
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 17.5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    alignItems: "center"
  },
  rowSwitch: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 17.5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    alignItems: "center"
  },
  button: {
    marginHorizontal: 16,
    marginBottom: 32
  },
  switch: {
    marginVertical: 14
  }
}));
