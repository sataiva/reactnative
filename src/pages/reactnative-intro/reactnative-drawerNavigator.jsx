import React from "react";
import Helmet from "react-helmet";
import MainLayout from "../../components/MainLayout";
import CtaButton from "../../components/CtaButton";
import Block from "../../components/Block";
import emptyhomeimage from "../../images/drawernavigator/emptyhome.png";
import emptyprofileimage from "../../images/drawernavigator/emptyprofile.png";
import newdrawerimage from "../../images/drawernavigator/newdrawer.png";
import designedDrawer from "../../images/drawernavigator/designeddrawer.png";

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

const simpledrawer = `
// ... other code from the previous section

import { DrawerNavigator } from "react-navigation";

// ... other code from the previous section

export default DrawerNavigator(
    {   Home: { screen: Home },
        Profile: { screen: Profile}
    },
    {
      drawerWidth: 250
    }
  );
`;

const Menu = `
import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { ScrollView, Text, View, StyleSheet } from "react-native";

class SideMenu extends Component {

  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={{ fontSize: 22, fontWeight: "600", color: "white" }}> Name </Text>
        </View>
        <ScrollView style={styles.scrollview}>
          <View style={styles.menuView}>
            <Text style={styles.menuText} onPress={this.navigateToScreen("Home")}> Home </Text>
          </View>
          <View style={styles.menuView}>
            <Text style={styles.menuText} onPress={this.navigateToScreen("Profile")}> Profile </Text>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text style={{ color: "white" }}>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
}
export default SideMenu;
`;

const MenuWithDrawer = `
import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { DrawerNavigator } from "react-navigation";
import SideMenu from "./Menu";

class Home extends React.Component {....}
class Profile extends React.Component {.....}

export default DrawerNavigator(
  {
    Home: {
      screen: Home
    },
    Profile: {
      screen: Profile
    }
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 250
  }
);

`;

export default props =>
  <MainLayout>
    <Helmet title={"React native Drawer Navigator"} />
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
    <h4>2.Creating simple side menu drawer </h4>
    <p>
      First i am gonna import DrawerNavigator and then export DrawerNavigator
      component.
    </p>
    <p>
      DrawerNavigator accepts first argument as an object or a function.This
      object with key-value pair.
    </p>
    <Block value={simpledrawer} />
    <img
      src={newdrawerimage}
      alt="Drawer screen"
      height="50%"
      width="50%"
      style={{ position: "relative", left: "25%" }}
    />
    <p>
      Here you can see, DrawerNavigator created a side menu drawer with screen
      name and navigation options.When you click on the names it will redirect
      to corresponding pages.
    </p>

    <h4>3.How to customize DrawerNavigator drawer </h4>
    <p>
      DrawerNavigator giving a property called "contentComponent". It is used to
      create a user customizable component.
    </p>
    <p>
      "contentComponent" accepts React component as an input and render it on
      DrawerNavigator drawer.
    </p>
    <h6>First we need to create a Menu.js</h6>
    <Block value={Menu} />
    <h6>
      Set Menu component as a value to DrawerNavigator property
      "contentComponent".
    </h6>
    <Block value={MenuWithDrawer} />
    <p>And the result will be like.</p>
    <img
      src={designedDrawer}
      alt="Customized drawer screen"
      height="50%"
      width="50%"
      style={{ position: "relative", left: "25%" }}
    />
    <p />
    <CtaButton to="/reactnative-intro/reactnative-signup">Previous</CtaButton>
    <CtaButton to="/reactnative-intro/reactnative-expo-introduction">Next</CtaButton>
  </MainLayout>;
