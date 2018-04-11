import React from "react";
import Helmet from "react-helmet";
import MainLayout from "../../components/MainLayout";
import CtaButton from "../../components/CtaButton";
import Block from "../../components/Block";
import ExpoStartingScreen from "../../images/expo/initialscreen.png";
import ExpoProjectDropdown from "../../images/expo/projectmenu.png";
import ExpoNewProjectCreate from "../../images/expo/newproject.png";
import ExpoNewProjectFolder from "../../images/expo/folderstructure.png";
import NewProjectEmptyScreen from "../../images/expo/newprojectemptyscreen.png";

const NewEmptyAppJS = `
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1dd1a1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
`;

const AppJson = `
{
  "expo": {
    "name": "first-expo-app",
    "description": "This project is really great.",
    "slug": "first-expo-app",
    "privacy": "public",
    "sdkVersion": "25.0.0",
    "platforms": ["ios", "android"],
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    }
  }
}
`;

export default props =>
  <MainLayout>
    <Helmet title={"React Native apps using expo"} />
    <h2>Creating a React Native app using Expo</h2>
    <p>
      Expo is a set of tools, libraries and services which let you build native
      iOS and Android apps by writing JavaScript.
    </p>
    <ul style={{ paddingLeft: 8 }}>
      <li>
        <p>
          Expo apps are React Native apps which contain the Expo SDK.This SDK
          provides access to device's system functionality (things like the
          camera, contacts, local storage, and other hardware).
        </p>
      </li>
      <li>
        <p>
          It also makes your pure-JS project very portable because it can run in
          any native environment containing the Expo SDK.
        </p>
      </li>
      <li>
        <p>
          The Expo also provides UI components to handle a variety of use-cases
          that almost all apps will cover.This SDK provides access to services
          which typically are a pain to manage but are required by almost every
          app.
        </p>
      </li>
      <li>
        <p>Ex. Manage your Assets, Handling Push Notifications.</p>
      </li>
    </ul>
    <h4>1. Installation</h4>
    <p> To develop an apps with expo we need two important tools.</p>
    <ol style={{ paddingLeft: 18 }}>
      <li>A local development tool</li>
      <li>A mobile client to open app</li>
    </ol>
    <h6>Local Development Tool: XDE (or exp)</h6>
    <p>
      XDE stands for Expo Development Environment. It is a standalone desktop
      app that includes all dependencies you'll need to get started.
    </p>
    <p>
      Download the latest version of XDE for
      <a href="https://xde-updates.exponentjs.com/download/mac"> macOS </a>,
      <a href="https://xde-updates.exponentjs.com/download/win32">
        Windows (64-bit)
      </a>,
      <a href="https://xde-updates.exponentjs.com/download/linux-x86_64">
        Linux
      </a>.
    </p>
    <p>On Linux, open with chmod a+x xde*.AppImage and ./xde*.AppImage</p>
    <h6>Mobile Client: Expo for iOS and Android</h6>
    <p>
      Expo client helps to view apps while developing.When you run your project
      from XDE or exp, it generates a development URL that you can open in Expo
      Client to preview your app.
    </p>
    <h4>2. Creating a first app</h4>
    <p>
      When i opening the expo development tool in a computer it shows screen
      like below
    </p>
    <img
      src={ExpoStartingScreen}
      alt="Expo development tool starting screen"
      height="70%"
      width="70%"
      style={{ position: "relative", left: "15%" }}
    />
    <p>
      Click "Project" menu in expo tool, it will show a dropdown with options.
    </p>
    <ul style={{ paddingLeft: 18 }}>
      <li>
        <p>New Project- To create a new project</p>
      </li>
      <li>
        <p>Open Project- To open an existing project</p>
      </li>
    </ul>
    <img
      src={ExpoProjectDropdown}
      alt="Expo development tool starting screen"
      height="70%"
      width="70%"
      style={{ position: "relative", left: "15%" }}
    />
    <p>
      Click "New Project". After that it will ask for a project template either
      blank or Tab Navigation and choose project name and directory.
    </p>
    <img
      src={ExpoNewProjectCreate}
      alt="Expo development tool starting screen"
      height="70%"
      width="70%"
      style={{ position: "relative", left: "15%" }}
    />
    <p>
      Then it downloads project files and extract it in a folder with project
      name.Expo tool automatically create a folder and files needed and finally
      run the app.
    </p>
    <img
      src={ExpoNewProjectFolder}
      alt="Expo new project folder structure"
      height="70%"
      width="70%"
      style={{ position: "relative", left: "15%" }}
    />
    <p>
      <b>Note: </b>
    </p>
    <ul style={{ paddingLeft: 18 }}>
      <li>
        <p>
          First we need to check package.json file to verify that stable version
          of a React native and other packages installed.
        </p>
      </li>
      <li>
        <p>
          Suppose if you are going to use other npm packages. You need to
          install npm into your project.
        </p>
      </li>
    </ul>
    <h6>App.js</h6>
    <Block value={NewEmptyAppJS} />
    <h6>My initial screen </h6>
    <img
      src={NewProjectEmptyScreen}
      alt="Expo new project folder structure"
      height="50%"
      width="50%"
      style={{ position: "relative", left: "25%", backgroundColor: "#000000" }}
    />
    <h4>3. Configure app.json </h4>
    <p>
      You can configure about your app name, icon and splash image, description
      and others also.
    </p>
    <Block value={AppJson} />
    <p />
    <CtaButton to="/reactnative-intro/reactnative-drawerNavigator">
      Previous
    </CtaButton>
    <CtaButton to="/reactnative-intro/reactnative-expo-camera">Next</CtaButton>
  </MainLayout>;
