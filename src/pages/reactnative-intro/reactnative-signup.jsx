import React from "react";
import Helmet from "react-helmet";
import MainLayout from "../../components/MainLayout";
import CtaButton from "../../components/CtaButton";
import Block from "../../components/Block";
import signupscreen from "../../images/signup.png";

const inputboxes = `
import React, { Component } from "react";
import { View, TextInput, Button } from "react-native";
class SignupScreen extends Component{
    state = {
        name:"",
        phone: "",
        password: "",
        message:""
    };

    createaccount=()=>{
    }

    render(){
        return <View>
                <TextInputplaceholder="Name" style={styles.input} onChangeText={e => this.setState({ name: e })}/>
                <TextInputplaceholder="Phone" style={styles.input} onChangeText={e => this.setState({ phone: e })}/>
                <TextInputplaceholder="Password" style={styles.input} onChangeText={e => this.setState({ password: e })}/>
                <Text style={styles.messagetext}>{this.state.message}</Text>
                <Button onPress={this.createaccount}>Signup</Button>
                </View>
    }
}
//Write your own css style here.
const styles = StyleSheet.create({....});
`;

const signupfunction = `
createaccount = () => {
    const { phone, password, name, message } = this.state;
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
          this.setState({ message: "Account registration success." });
        } else {
          this.setState({ message: "Invalid credentials" });
        }
      return res;
    }) .catch(() => {
      this.setState({ message: "Can't able to create user.Please try again." });
    });
`;

const signupquery = `
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
    <Helmet title={"React Native Signup page"} />
    <h2>SignUp page using React Native</h2>
    <p>
      Like login,<b> Signup</b> is also a primary function needed for Mobile
      Application.User authentication will perform only after the successful
      user creation in the database.
    </p>

    <h4>1. Creat a signup screen</h4>
    <p>
      To create a signup screen, i am using TextInput components to get values
      from user and a Button component to invoke signup functionality.
    </p>
    <Block value={inputboxes} />
    <img
      src={signupscreen}
      alt="Smiley face"
      height="50%"
      width="50%"
      style={{ position: "relative", left: "25%" }}
    />
    <h4>2. Define a createaccount function</h4>
    <p>
      This is nothing but getting values from input boxes and do some
      validations.After validation success hit the database to authenticate user
      login details.
    </p>
    <Block value={signupfunction} />

    <h4>3. Display result</h4>
    <p>
      Now we have to enter a name, phone number and password to create user
      account.The database result will be displayed as a message.
    </p>
    <CtaButton to="/reactnative-intro/reactnative-login">Previous</CtaButton>
    <CtaButton to="/reactnative-intro/reactnative-navigation">Next</CtaButton>
  </MainLayout>;
