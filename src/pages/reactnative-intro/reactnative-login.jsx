import React from "react";
import Helmet from "react-helmet";
import MainLayout from "../../components/MainLayout";
import CtaButton from "../../components/CtaButton";
import Block from "../../components/Block";
import loginscreen from "../../images/login.png";
import loginmessagescreen from "../../images/loginmessage.png";

const inputboxes = `
import React, { Component } from "react";
import { View, TextInput, Button } from "react-native";
class LoginScreen extends Component{
    state = {
        phone: "",
        password: "",
        message:""
    };

    login=()=>{
    }

    render(){
        return <View>
                <TextInputplaceholder="Phone" style={styles.input} onChangeText={e => this.setState({ phone: e })}/>
                <TextInputplaceholder="Password" style={styles.input} onChangeText={e => this.setState({ password: e })}/>
                <Text style={styles.messagetext}>{this.state.message}</Text>
                <Button onPress={this.login}>Login</Button>
                </View>
    }
}
//Write your own css style here.
const styles = StyleSheet.create({....});
`;

const loginfunction = `
login=()=>{
    const {phone,password} = this.state;
    const query= {
                    //Write your query 
    };
    const DB_ENDPOINT ="https://your-database-api-endpoint";
    const options = {
                      uri: DB_ENDPOINT,
                      headers: { 'Content-Type': 'application/json' },
                      method: 'POST',
                      body: JSON.stringify({ query })
    };

    fetch(DB_ENDPOINT, options).then(resp => {
      return resp.json()
    }).then(res => {
      //Returned result maybe different for you.
        if (res.data.result) {
          this.setState({ message: "Successfully logged in" });
        } else {
          this.setState({ message: "Invalid credentials" });
        }
      return res;
    }) .catch(() => {
      this.setState({ message: "Invalid credentials" });
    });
}
`;

const loginquery = `
const LoginQuery = gql'
  mutation AuthenticateUser(
    $phone: String!
    $password: String!
  ) {
    AuthenticateUser(phone: $phone, password: $password) {
      result
      error
    }
  }
';
export default graphql(LoginQuery)(LoginScreen);
`;

export default props =>
  <MainLayout>
    <Helmet title={"React Native Login page"} />
    <h2>Login page using React Native</h2>
    <p>
      User login and authentication is a primary functionality. Let's see how to
      create a Login Page and authenticate user.
    </p>

    <h4>1. Creat a component</h4>
    <p>
      To create a login page we need an input components like Input boxes to
      enter username and password and Button component to submit values and
      invoke authentication functions.
    </p>
    <Block value={inputboxes} />
    <img
      src={loginscreen}
      alt="Smiley face"
      height="50%"
      width="50%"
      style={{ position: "relative", left: "25%" }}
    />
    <h4>2. Define a login function</h4>
    <p>Here i am gonna do 3 important things.</p>
    <p>1. Connect to a database.</p>
    <p>2. Fetch Result</p>
    <p>3. Process Result</p>
    <p>
      The above three process done by using react native fetch method.It is same
      as browser fetch API.
    </p>
    <Block value={loginfunction} />

    <h4>3. Display result</h4>
    {/* <img
      src={loginmessagescreen}
      alt="Smiley face"
      height="50%"
      width="50%"
      style={{ position: "relative", left: "25%" }}
    /> */}
    <p>
      Now we have to enter a phone number and password to login.The
      Authenticaiton result will be displayed in message text and then we need
      to navigate if the result is success.
    </p>

    <CtaButton to="/reactnative-intro/">Previous</CtaButton>
    <CtaButton to="/reactnative-intro/reactnative-signup">Next</CtaButton>
  </MainLayout>;
