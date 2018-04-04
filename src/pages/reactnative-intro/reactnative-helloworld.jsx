import React from "react";
import MainLayout from "../../components/MainLayout";
import CtaButton from "../../components/CtaButton";
import Block from "../../components/Block";

const Helloworld = `
import React, { Component } from 'react';
import { Text } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}
`;

export default props =>
  <MainLayout>
    <h2>React Native "Hello World"</h2>
    <Block value={Helloworld} />
    <p>
      This is JSX - a syntax for embedding XML within JavaScript.It looks like
      HTML on the web, except instead of web things like div or span, you use
      React components.
    </p>
    <CtaButton to="/reactnative-intro/">Previous</CtaButton>
    <CtaButton to="/reactnative-intro/reactnative-login">Next</CtaButton>
  </MainLayout>;
