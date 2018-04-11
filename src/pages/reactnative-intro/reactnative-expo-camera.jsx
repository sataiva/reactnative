import React from "react";
import Helmet from "react-helmet";
import MainLayout from "../../components/MainLayout";
import CtaButton from "../../components/CtaButton";
import Block from "../../components/Block";
import NewProjectEmptyScreen from "../../images/expo/newprojectemptyscreen.png";
import SwitchOnScreen from "../../images/expo/switchon.png";
import SwitchOffScreen from "../../images/expo/switchoff.png";

const ScreenWithSwitch = `
import React from "react";
import { StyleSheet, Text, View, Switch } from "react-native";

export default class App extends React.Component {
  state = { switchValue: false };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.switchview}>
          <Text>Show camera</Text>
          // Create switch component and change switch value when clicking
          <Switch 
              onValueChange={value => {
                this.setState({ switchValue: value });
              }}
              value={this.state.switchValue}
              style={styles.switch}
          />
        </View>
        // Checking condition and render correspondingly 
        {this.state.switchValue ? (
          <View style={styles.cameraview}>
            <Text>Camera on</Text>
          </View>
        ) : (
          <View style={styles.cameraview}>
            <Text>Camera off</Text>
          </View>
        )}

      </View>
    );
  }
}
const styles = StyleSheet.create({....});
`;

const AddPermissions = `
//When you are trying to access potentially sensitive information on user's
//device before that you need to ask their PERMISSIONS.

//You can add permissions using app.json file.
//add these key value pair to app.json

// ... other code from the previous section(app.json)
"ios": {
  "supportsTablet": true,
  "permissions": ["CAMERA"]
},
"android": {
  "permissions": ["CAMERA"]
}
// ... other code from the previous section

`;

export default props =>
  <MainLayout>
    <Helmet title={"React native Expo camera"} />
    <h2>Capture image using React native Expo app </h2>
    <h4>1. Create a new app using Expo development tool</h4>
    <p>
      <a href="/reactnative-intro/reactnative-expo-introduction">
        In previous session,
      </a>
      we saw how to create a new React native app using expo tool.Using the same
      steps here i am gonna create a new app.
    </p>
    <img
      src={NewProjectEmptyScreen}
      alt="Expo new project folder structure"
      height="50%"
      width="50%"
      style={{ position: "relative", left: "25%", backgroundColor: "#000000" }}
    />
    <h4>2. Create a screen with components</h4>
    <Block value={ScreenWithSwitch} />
    <p>
      Here i am creating a <b>switch</b> component which return true or false
      when changing them.When changing to true it will show "Camera on" or
      otherwise it will show "Camera off" text.
    </p>
    <img
      src={SwitchOnScreen}
      alt="Simple switch off screen"
      height="50%"
      width="50%"
    />
    <img
      src={SwitchOffScreen}
      alt="Simple switch on screen"
      height="50%"
      width="50%"
      style={{ position: "relative", left: 10 }}
    />
    <h4>3. Create and configure Camera component</h4>
    <ul style={{ paddingLeft: 18 }}>
      <li>
        <p>
          A Camera component shows preview of the device's either <b> front </b>{" "}
          or
          <b> back </b>
          camera.
        </p>
      </li>
      <li>
        <p>
          Camera's parameters like zoom, auto focus, white balance and flash
          mode are adjustable.
        </p>
      </li>
      <li>
        <p>
          It one can also take photos and record videos that are saved to the
          <b> app's cache</b>.
        </p>
      </li>
    </ul>
    <p>
      <b>Note: </b>Requires Permissions.CAMERA. Video recording requires
      Permissions.AUDIO_RECORDING.
    </p>
    <h6>How to add Permissions to Expo react native app?</h6>
    <Block value={AddPermissions} />
    <p />
    <CtaButton to="/reactnative-intro/reactnative-expo-introduction">
      Previous
    </CtaButton>
    <CtaButton to="/reactnative-intro/reactnative-expo-camera">Next</CtaButton>
  </MainLayout>;
