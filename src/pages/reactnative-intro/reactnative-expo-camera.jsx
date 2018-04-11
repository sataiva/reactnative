import React from "react";
import Helmet from "react-helmet";
import MainLayout from "../../components/MainLayout";
import CtaButton from "../../components/CtaButton";
import Block from "../../components/Block";
import NewProjectEmptyScreen from "../../images/expo/newprojectemptyscreen.png";
import SwitchOnScreen from "../../images/expo/switchon.png";
import SwitchOffScreen from "../../images/expo/switchoff.png";
import FirstCameraScreen from "../../images/expo/FirstCameraScreen.png";
import FlipButtonCamera from "../../images/expo/FlipButtonCamera.png";
import FinalScreenShot from "../../images/expo/FinalScreenShot.png";
import result from "../../images/expo/result.png";

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

const StateWillmountFunction = `
import { Camera, Permissions } from 'expo';

// ... other code from the previous section
state = {
  switchValue: false ,
  hasCameraPermission: null, //Permission value
  type: Camera.Constants.Type.back, //specifying app start with back camera.
};

async componentWillMount() {
  //Getting Permission result from app details.
  const { status } = await Permissions.askAsync(Permissions.CAMERA);
  this.setState({ hasCameraPermission: status === 'granted' });
}
// ... other code from the previous section
`;

const RenderConditionCheck = `
// ... other code from the previous section

render() {
  const { hasCameraPermission } = this.state;
  if (hasCameraPermission === null) {
    return <View />;
  } else if (hasCameraPermission === false) {
    return (
      <View>
        <Text>No access to camera</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.switchview}>
          <Text>Show camera</Text>...

// ... other code from the previous section
`;

const CameraComponent = `
// ... other code from the previous section

<View style={styles.cameraview}>
  <Camera style={styles.camera} type={this.state.type} />
</View>

// ... other code from the previous section
`;

const CameraWithFlipButton = `
// ... other code from the previous section

<Camera style={styles.camera} type={this.state.type}>
<View style={styles.camerabuttonview}>
  <TouchableOpacity
    style={styles.cameraButtons}
    onPress={this.cameraChange}
  >
    <Text
      style={{ fontSize: 18, marginBottom: 10, color: "white" }}
    >
      Flip
    </Text>
  </TouchableOpacity>
</View>
</Camera>

// ... other code from the previous section
`;

const cameraChangeFunction = `
// ... other code from the previous section

cameraChange = () => {
  this.setState({
    type:
      this.state.type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
  });
};

// ... other code from the previous section
`;

const refField = `
// ...
<Camera ref={ref => { this.camera = ref; }} ...
// ...
snap = async () => {
  if (this.camera) {
    let photo = await this.camera.takePictureAsync();
    console.log(photo);
  }
};
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
    <h5>i. Create state variables and verify Camera Permission.</h5>
    <Block value={StateWillmountFunction} />
    <h5>ii. Render components based on conditions.</h5>
    <p>
      First we are getting Permission value in a constant variable
      <b> "hasCameraPermission"</b>. Suppose the permission was denied (
      hasCameraPermission == false ) then render function show "else if"
      condition block.
    </p>
    <p>So we can see a text "No access to camera" in a screen.</p>
    <Block value={RenderConditionCheck} />
    <p>
      If permission was grandted we need to show Camera component.We need to
      configure camera with options.
    </p>
    <h5>iii. Create and Configure a Camera component</h5>
    <Block value={CameraComponent} />
    <p>
      This Camera component without configuration will show you camera preview.
    </p>
    <img
      src={FirstCameraScreen}
      alt="Expo new project folder structure"
      height="50%"
      width="50%"
      style={{ position: "relative", left: "25%", backgroundColor: "#000000" }}
    />
    <p>
      Next i am gonna create a camera "flip" button to switch between front and
      back camera.You can create buttons inside camera preview.
    </p>
    <Block value={CameraWithFlipButton} />
    <p>
      And then we need to write a <b> cameraChange </b> function to implement
      camera switching between front and back.
    </p>
    <Block value={cameraChangeFunction} />
    <img
      src={FlipButtonCamera}
      alt="Expo new project folder structure"
      height="50%"
      width="50%"
      style={{ position: "relative", left: "25%", backgroundColor: "#000000" }}
    />
    <h4>4. Capturing the image and store it in app's cache</h4>
    <p>
      To use methods that Camera exposes one has to create a components
      <b> ref </b> and invoke them using it.
    </p>
    <Block value={refField} />
    <img
      src={FinalScreenShot}
      alt="Screen with capture button and functionlaityI"
      height="50%"
      width="50%"
      style={{ position: "relative", left: "25%" }}
    />
    <p>
      Result from captured image saved in app's cache and return it as a result
      object.We can get our image url from result.
    </p>
    <img
      src={result}
      alt="Result of captured image"
      height="50%"
      width="50%"
      style={{ position: "relative", left: "25%" }}
    />
    <p />
    <CtaButton to="/reactnative-intro/reactnative-expo-introduction">
      Previous
    </CtaButton>
    <CtaButton to="/reactnative-intro/reactnative-expo-camera">Next</CtaButton>
  </MainLayout>;
