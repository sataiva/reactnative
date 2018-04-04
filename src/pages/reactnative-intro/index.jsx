import React from "react";
import MainLayout from "../../components/MainLayout";
import CtaButton from "../../components/CtaButton";

export default props =>
  <MainLayout>
    <div>
      <h2>React Native</h2>
      <p>Common features in mobile applications.</p>
      <ol style={{ paddingLeft: 15 }}>
        <li>Hello World</li>
        <li>Login Screen</li>
        <li>Signup Screen</li>
        <li>Side menu with navigation</li>
      </ol>
      <CtaButton to="/reactnative-intro/reactnative-helloworld">Next</CtaButton>
    </div>
  </MainLayout>;
