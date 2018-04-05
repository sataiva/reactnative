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
        <li>Hello World</li>
        <li>Login Screen</li>
        <li>Signup Screen</li>
        <li>Side menu with navigation</li>
      </ol>
      <p>Let's see them...</p>
      <CtaButton to="/reactnative-intro/reactnative-helloworld">Next</CtaButton>
    </div>
  </MainLayout>;
