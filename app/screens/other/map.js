import React from "react";
import {
  Alert,
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { RkText, RkStyleSheet, RkTheme } from "react-native-ui-kitten";
import { RkSwitch, FindFriends } from "../../components";
import { FontAwesome } from "../../assets/icons";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export class Maps extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    mapRegion: {
      latitude: -0.218347,
      longitude: -78.512834,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{ alignSelf: "stretch", height: 200 }}
          region={this.state.mapRegion}
          onRegionChange={this._handleMapRegionChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1"
  }
});
