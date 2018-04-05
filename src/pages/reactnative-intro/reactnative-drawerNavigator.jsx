import React from "react";
import Helmet from "react-helmet";
import MainLayout from "../../components/MainLayout";
import CtaButton from "../../components/CtaButton";
import Block from "../../components/Block";
import emptyhomeimage from "../../images/drawernavigator/emptyhome.png";
import emptyprofileimage from "../../images/drawernavigator/emptyprofile.png";

const emptyscreens = `
import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
class Home extends React.Component {
  static navigationOptions = {};
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#81ecec", justifyContent: "center", alignItems: "center" }}>
        <Text>Hello!!! This is Home screen</Text>
      </View>
    );
  }
}

class Profile extends React.Component {
  static navigationOptions = {};
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#81ecec", justifyContent: "center", alignItems: "center" }}>
        <Text>Hi!!! This is a Profile screen</Text>
        <Image style={{ width: 50, height: 50 }} source={{ uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"}}/>
      </View>
    );
  }
}
export default Home;
`;

export default props =>
  <MainLayout>
    <Helmet title={"React native Stack Navigator"} />
    <h2>Creating custom Side Menu using DrawerNavigator in React Native</h2>
    <p>
      DrawerNavigator is an another type of navigator option in React Native
      which is used to build a Side Menu with navigation.
    </p>
    <p>
      Suppose if your mobile application has a lot of screens and you wanna
      navigate to each screen directly by clicking menu items there you need a
      drawerNavigator.
    </p>
    <p>
      It gives you a Side Menu like a drawer. It can be open and close by
      programmatically.
    </p>

    <h4>1.Creating screens </h4>
    <p>
      Here we are creating a Home and Profile Screen. We are gonna create a Side
      Menu that is used to navigate between these screens.
    </p>
    <Block value={emptyscreens} />
    <img
      src={emptyhomeimage}
      alt="Empty Home screen"
      height="50%"
      width="50%"
    />
    <img
      src={emptyprofileimage}
      alt="Empty details screen"
      height="50%"
      width="50%"
      style={{ position: "relative", left: 10 }}
    />
    <CtaButton to="/reactnative-intro/reactnative-signup">Previous</CtaButton>
    <CtaButton to="/reactnative-intro/">Next</CtaButton>
  </MainLayout>;
