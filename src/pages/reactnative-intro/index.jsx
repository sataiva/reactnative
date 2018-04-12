import React from "react";
import Helmet from "react-helmet";
import MainLayout from "../../components/MainLayout";
import CtaButton from "../../components/CtaButton";

export default props =>
  <MainLayout>
    <Helmet title={"React Native Common features in Mobile applications"} />
    <div>
      <h2>Common features in mobile applications.</h2>
      <ol style={{ paddingLeft: 15 }}>
        <li>
          <a href="/reactnative-intro/reactnative-helloworld">Hello World</a>
        </li>
        <li>
          <a href="/reactnative-intro/reactnative-login">Login Screen</a>
        </li>
        <li>
          <a href="/reactnative-intro/reactnative-signup">Signup Screen</a>
        </li>
        <li>
          <a href="/reactnative-intro/reactnative-navigation">
            Navigation using Stack Navigator
          </a>
        </li>
        <li>
          <a href="/reactnative-intro/reactnative-drawerNavigator">
            Side Menu Navigation using DrawerNavigator
          </a>
        </li>
        <li>
          <a href="/reactnative-intro/reactnative-expo-introduction">
            Create React native apps using expo
          </a>
        </li>
        <li>
          <a href="/reactnative-intro/reactnative-expo-camera">
            Capture image using React native + expo camera
          </a>
        </li>
        <li>
          <a href="/reactnative-intro/reactnative-expo-upload-image-in-amazons3">
          React Native Image Upload
          </a>
        </li>
      </ol>
      <p>Let's see them...</p>
      <CtaButton to="/reactnative-intro/reactnative-helloworld">Next</CtaButton>
    </div>
  </MainLayout>;
