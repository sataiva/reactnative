import React from "react";
import Helmet from "react-helmet";
import MainLayout from "../../components/MainLayout";
import CtaButton from "../../components/CtaButton";
import Block from "../../components/Block";
import EmptyHome from "../../images/home.png";
import EmptyDetails from "../../images/details.png";
import Home from "../../images/homewithbutton.png";
import Details from "../../images/detailswithbuttons.png";
import sharednavigationoption1 from "../../images/detailswithheader.png";
import sharednavigationoption2 from "../../images/homewithheader.png";
import HomeWithTitle from "../../images/homewithtitle.png";
import DetailsWithTitle from "../../images/detailswithtitle.png";

const navigationpackage = `
yarn add react-navigation
`;

const sidemenupackage = `
yarn add react-native-side-menu
`;

const samplestack = `
import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  }
},
{
  initialRouteName: 'Home',
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
`;

const samplestackwithnavigation = `
import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

// ... other code from the previous section
`;

const navigateback = `
// ... other code from the previous section

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

// ... other code from the previous section
`;

const screenheaderconfig = `
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  /* render function, etc */
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };

  /* render function, etc */
}
`;

const sharednavigationoption = `
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    /* No more header config here! */
  };

  /* render function, etc */
}

/* other code... */

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
`;

export default props =>
  <MainLayout>
    <Helmet title={"React native Navigation"} />
    <h2>Navigation between screens using React native</h2>
    {/* navigation package */}
    <h4>1. Add Navigation Package</h4>
    <p>
      To navigate between apps multiple screen, react native provides a
      <a href="https://reactnavigation.org/docs/getting-started.html">
        <b> react-navigation </b>
      </a>
      package.
    </p>
    <p>
      React Navigation provides an easy to use navigation solution.It has two
      navigation options. <b>stack navigation</b> and
      <b> tabbed navigation</b>
      , which supports in both iOS and Android.
    </p>
    <Block value={navigationpackage} lang="bash" />

    {/* normal app.js */}
    <h4>2. Stack Navigation Example</h4>
    <p>
      Stack Navigator accept object as an argument where each screen specified
      by a key value pair which in return a React Component. Using those
      <b> Key </b> values only we can navigate through screens. Ex. Home,
      Profile.
    </p>
    <p>
      <small>app.js</small>
    </p>
    <Block value={samplestack} />
    <p>
      If you run this code, you will see a screen with an empty navigation bar
      and a grey content area containing your HomeScreen component.
    </p>
    <img src={EmptyHome} alt="Basci Home screen" height="50%" width="50%" />
    <img
      src={EmptyDetails}
      alt="Basic details screen"
      height="50%"
      width="50%"
      style={{ position: "relative", left: 10 }}
    />
    <p>
      To specify what the initial route in a stack is, provide an
      <b> initialRouteName</b> on the stack options object.
    </p>

    <h4>3. Navigating to a new screen? How?</h4>
    <Block value={samplestackwithnavigation} />
    <ul>
      <li>
        <p>
          <b>this.props.navigation.navigate() </b> is a method used to navigate
          from "Home screen" to "Details screen".This method injected to each
          routes which defined in StackNavigator.
        </p>
      </li>
    </ul>
    <img
      src={Home}
      alt="Home screen with buttons"
      height="50%"
      width="50%"
      style={{ position: "relative", left: "25%" }}
    />
    <h4>4. How to navigate back?</h4>
    <Block value={navigateback} />
    <ul>
      <li>
        <p>
          The header bar will automatically show a back button.But you can
          programmatically go back by calling this method
          <b> this.props.navigation.goBack()</b>.
        </p>
      </li>
      <li>
        <p>
          Whenever you click the <b>Go to Details... again </b> button it pushes
          a new route to the navigation stack.
        </p>
      </li>
      <li>Stack navigator header has it's own back button like left arrow.</li>
    </ul>
    <img
      src={Details}
      alt="Deatils screen with buttons"
      height="50%"
      width="50%"
      style={{ position: "relative", left: "25%" }}
    />
    <h4>5. How to configure the Header bar in a screen?</h4>
    <Block value={screenheaderconfig} />
    <p>
      The screens which are used in Stack Navigator can have a static property
      called <b>navigationOptions</b>. It accepts object or function as an
      argument and returns an object which contains various configurations.
    </p>
    <p>
      Here i am changing the title of each screen by setting navigationOptions
      <b> title</b>.
    </p>
    <img src={HomeWithTitle} alt="Basci Home screen" height="50%" width="50%" />
    <img
      src={DetailsWithTitle}
      alt="Basic details screen"
      height="50%"
      width="50%"
      style={{ position: "relative", left: 10 }}
    />
    <h4>5. How to share a commmon navigationOptions in all screens?</h4>
    <Block value={sharednavigationoption} />
    <p>
      Here i am writing a common navigationOptions configurations in a Stack
      navigator which applies to all the screen defined in stack navigator.{" "}
    </p>
    <p>For Ex. headerStyle, headerTintColor, headerTitleStyle.</p>
    <img
      src={sharednavigationoption2}
      alt="Basci Home screen"
      height="50%"
      width="50%"
    />
    <img
      src={sharednavigationoption1}
      alt="Basic details screen"
      height="50%"
      width="50%"
      style={{ position: "relative", left: 10 }}
    />
    <CtaButton to="/reactnative-intro/reactnative-signup">Previous</CtaButton>
    <CtaButton to="/reactnative-intro/">Next</CtaButton>
  </MainLayout>;
