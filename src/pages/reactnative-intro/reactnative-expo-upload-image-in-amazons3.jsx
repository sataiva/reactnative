import React from "react";
import Helmet from "react-helmet";
import MainLayout from "../../components/MainLayout";
import CtaButton from "../../components/CtaButton";
import Block from "../../components/Block";
import NewProjectEmptyScreen from "../../images/expo/newprojectemptyscreen.png";
import FinalScreenShot from "../../images/expo/FinalScreenShot.png";
import CameraCapture from "../../images/expo/cameracapture.png";
import UploadedImage from "../../images/expo/uploadedimage.png";

const importoptions = `
import { RNS3 } from 'react-native-aws3';

const options = {
  keyPrefix: "uploads/",
  bucket: "your-bucket",
  region: "us-east-1",
  accessKey: "your-access-key",
  secretKey: "your-secret-key",
  successActionStatus: 201
}
`;

const filenamepath = `

const file = {
  // uri can also be a file system path (i.e. file://)
  uri: "assets-library://asset/asset.PNG?id=655DBE66-8008-459C-9358-914E1FB532DD&ext=PNG",
  name: "image.png",
  type: "image/png"
}

`;

const s3uploadfunction = `

RNS3.put(file, options).then(response => {
  if (response.status !== 201)
    throw new Error("Failed to upload image to S3");
  console.log(response.body);
  /**
   * {
   *   postResponse: {
   *     bucket: "your-bucket",
   *     etag : "9f620878e06d28774406017480a59fd4",
   *     key: "uploads/image.png",
   *     location: "https://your-bucket.s3.amazonaws.com/uploads%2Fimage.png"
   *   }
   * }
   */
});

`;

const uploadButton = `
// ... other code from the previous section

{this.state.switchValue ? (
  <View style={styles.buttonsView}>
    <View style={styles.captureButtonView}>
      <TouchableOpacity
        style={styles.cameraButtons}
        onPress={this.snap}
      >
        <Text
          style={{ fontSize: 18, marginBottom: 10, color: "white" }}
        >
          Capture
        </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.captureButtonView}>
      <TouchableOpacity
        style={styles.cameraButtons}
        onPress={this.upload}
      >
        <Text
          style={{ fontSize: 18, marginBottom: 10, color: "white" }}
        >
          Upload
        </Text>
      </TouchableOpacity>
    </View>
  </View>
) : null}

// ... other code from the previous section
`;

const uploadfunction = `
upload = () => {
  const file = {
    uri: this.state.imageuri,
    name: ${new Date().getTime()}.jpg,
    type: "image/jpeg"
  };
  const options = {
    keyPrefix: "ts/",
    bucket: "celeb-c4u",
    region: "eu-west-1",
    accessKey: "AKIAI2NHLR7A5W2R3OLA",
    secretKey: "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",
    successActionStatus: 201
  };
  return RNS3.put(file, options)
    .then(response => {
      if (response.status !== 201)
        throw new Error("Failed to upload image to S3");
      else {
        console.log(
          "Successfully uploaded image to s3. s3 bucket url: ",
          response.body.postResponse.location
        );
        this.setState({
          url: response.body.postResponse.location
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};

`;

const ImageComponent = `
<Image
  source={{uri: this.state.imageuri}}
  style={styles.uploadedImage}
  resizeMode="contain"
/>
`;

export default props =>
  <MainLayout>
    <Helmet title={"React native upload image"} />
    <h2>Upload captured image into amazons3 </h2>
    <h4>
      App.js file(for reference): {" "}
      <a href="https://gist.github.com/PrakashMurugan/b443c44aea82f6639acbd12bf6612fdd">
        {" "}Reactnative+S3+Imageupload{" "}
      </a>
    </h4>
    <h4>1. Create a new app using Expo development tool</h4>
    <p>
      <a href="/reactnative-intro/reactnative-expo-introduction">
        In previous session,
      </a>
      we saw how to create a new React native app using expo tool.Using the same
      steps here i am gonna create a new app.
    </p>
    <img
      src={NewProjectEmptyScreen}
      alt="Expo new project folder structure"
      height="50%"
      width="50%"
      style={{ position: "relative", left: "25%", backgroundColor: "#000000" }}
    />
    <h4>
      2. Create a camera preview using Expo camera component and capture picture
    </h4>
    <p>
      I already wrote a guide about
      <a href="/reactnative-intro/reactnative-expo-introduction">
        {" "}how to create a Expo app {" "}
      </a>and
      <a href="/reactnative-intro/reactnative-expo-camera">
        {" "}how to create and capture picture{" "}
      </a>using Camera.
    </p>
    <img
      src={FinalScreenShot}
      alt="Screen with capture button and functionlaityI"
      height="50%"
      width="50%"
      style={{ position: "relative", left: "25%" }}
    />
    <h4>3. Upload pictures using React native AWS S3</h4>
    <p>
      Here i am going to use the package{" "}
      <a href="https://github.com/benjreinhart/react-native-aws3">
        {" "}benjreinhart/react-native-aws3
      </a>.
    </p>
    <p>
      Installation: <b>npm install --save react-native-aws3</b>
    </p>
    <h6>i. Import package,give correct values to amazon s3 bucket</h6>
    <Block value={importoptions} />
    <p>
      Next we need to give file path.File name and type is important when
      uploading files into s3.
    </p>
    <Block value={filenamepath} />
    <p>Next we need upload image by passing file and options to a function.</p>
    <Block value={s3uploadfunction} />
    <h4>4. Now we have to integrate our app with this package functionality</h4>
    <p>
      Add another button called "Upload" in the screen.And invoke "upload"
      function when it pressed.
    </p>
    <p>App.js</p>
    <Block value={uploadButton} />
    <p>Then we need to write a upload function.</p>
    <p>
      Create a state variable called imageuri to store captured image and send
      them as input to s3 upload function "put".
    </p>
    <p>
      Suppose if you successfully captured image and stored that into cache and
      imageuri state variable, RNS3.put will return the response which has
      results of image upload. From that result object we can find our uploaded
      amazon s3 uri.
    </p>
    <Block value={uploadfunction} />
    <h4>5. Show uploaded picture in the image component</h4>
    <p>
      For this i am going to check state variable "imageuri" if it's empty show
      nothing or show image.
    </p>
    <p>Pass image url to Image component source property.</p>
    <Block value={ImageComponent} />
    <img src={CameraCapture} alt="Capturing image" height="50%" width="50%" />
    <img
      src={UploadedImage}
      alt="Showing uploaded image"
      height="50%"
      width="50%"
      style={{ position: "relative", left: 10 }}
    />
    <h4>
      App.js file{" "}
      <a href="https://gist.github.com/PrakashMurugan/b443c44aea82f6639acbd12bf6612fdd">
        {" "}Gist link{" "}
      </a>
    </h4>
    <p />
    <CtaButton to="/reactnative-intro/reactnative-expo-camera">
      Previous
    </CtaButton>
    <CtaButton to="/reactnative-intro/">Next</CtaButton>
  </MainLayout>;
