import React from "react";
import Helmet from "react-helmet";
import CtaButton from "../components/CtaButton";
import MainLayout from "../components/MainLayout";

class Index extends React.Component {
  render() {
    return (
      <MainLayout>
        <Helmet title={"Quick React Native introduction in 2018"} />
        <div>
          <h2>Quick React Native introduction</h2>
          <p>
            React Native is a JavaScript framework for building native mobile
            apps.
          </p>
          <p>
            React Native is like React, but it uses native components instead of
            web componentsas building blocks.So to understand the basic
            structure of React Native app, you need to understand the some basic
            React concepts, like JSX, components, state, and props.
          </p>
          <CtaButton to={"/reactnative-intro/introduction"}>
            Basic React concepts
          </CtaButton>
          <CtaButton to={"/reactnative-intro/"}>Let's start</CtaButton>
        </div>
      </MainLayout>
    );
  }
}

export default Index;
