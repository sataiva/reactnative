import React from "react";
import MainLayout from "../../components/MainLayout";
import CtaButton from "../../components/CtaButton";
import Block from "../../components/Block";

const navigationpackage = `
yarn add react-navigation
`;

const sidemenupackage = `
yarn add react-native-side-menu
`;

const samplestack = `
import {StackNavigator} from 'react-navigation';
import HomeScreen from "../src/screens/Home.js";
import ProfileScreen from "../src/screens/Profile.js";

export default class AppNavigator extends React.Component {
  render=()=>{
    return <App/>
  }
}

const App = StackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen }
});
`;

const menu = `
import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { graphqlFetch } from "../utils/graphql";

const window = Dimensions.get("window");
export default class Menu extends React.Component {
  state = {};
  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <View style={styles.menucontainer}>
          <View style={styles.menuheader}>
            <Image style={styles.menuheaderlogo} source={require("../images/user.png")}/>
            <Text style={styles.menuheadertext}>Name</Text>
          </View>

          <View style={styles.menuview}>
            <TouchableOpacity style={styles.menubutton} onPress={() => { this.props.togglemenu(); this.props.navigate("Home"); }}>
            <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menubutton} onPress={() => { this.props.togglemenu(); this.props.navigate("Profile");}}>
            <Text style={styles.buttonText}>Profile</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.footercontainer}>
            <Text style={styles.footertext}>@2018</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
`;

const SideMenu = `
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import SideMenu from "react-native-side-menu";
import Menu from "../components/Menu";

const image = require("../images/menu.png");

export default class Basic extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  updateMenuState = isOpen => {
    this.setState({ isOpen });
  };

  render() {
    const { navigate } = this.props.navigation;
    const menu = <Menu navigate={navigate} signout={this.props.screenProps.signout} togglemenu={this.toggle}/>;
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        navigate: navigate,
        screenProps: this.props.screenProps,
        togglemenu: this.toggle
      });
    });

    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        {children}
      </SideMenu>
    );
  }
}
`;

export default props =>
  <MainLayout>
    <h2>React Native Navigation</h2>
    {/* navigation package */}
    <h4>1. Add Navigation Package</h4>
    <p>
      To navigate between apps multiple screen, react native providing a package
      name called
      <a href="https://reactnavigation.org/docs/getting-started.html">
        <b> react-navigation</b>
      </a>.
    </p>
    <p>
      React Navigation provides an easy to use navigation solution, with the
      ability to present common <b>stack navigation</b> and
      <b> tabbed navigation </b>
      patterns on both iOS and Android.
    </p>
    <Block value={navigationpackage} lang="bash" />
    {/* side menu package */}
    <h4>2. Add Side Menu Package</h4>
    <p>
      Here i am gonna use Stack Navigation with <b>Side Menu</b>
      .To create a side menu we need a
      <a href="https://reactnavigation.org/docs/getting-started.html">
        <b> react-native-side-menu </b>
      </a>
      package which is also support in both iOS and Android.
    </p>
    <Block value={sidemenupackage} />

    {/* normal app.js */}
    <h4>3. Sample Stack Navigation syntax</h4>
    <p>
      Stack Navigator accept object as an argument where each screen specified
      by a key value pair. Using those <b> Key </b> only we can navigate through
      screens. Ex. Home, Profile.
    </p>
    <p>
      <small>AppNavigator.js</small>
    </p>
    <Block value={samplestack} />

    <h4>4. Create a Menu component</h4>
    <p>
      Here i am gonna create a component which has navigation menu names.
      Designed side menu interface.
    </p>
    <p>   
      <small>Menu.js</small>
    </p>
    <Block value={menu} />

    <h4>4. Create a SideMenu</h4>
    <p>
      Here i am gonna use a previous Menu component to display as a side menu
      when opening menu and inject them with navigation properties
    </p>
    <p>
      <small>SideMenu.js</small>
    </p>
    <Block value={SideMenu} />
    
    <CtaButton to="/reactnative-intro/reactnative-signup">Previous</CtaButton>
    <CtaButton to="/reactnative-intro/">Next</CtaButton>
  </MainLayout>;
