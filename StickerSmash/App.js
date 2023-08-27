import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

// import from component
import Button from "./components/Button";
import ImageViewer from "./components/ImageViewer";

// import image from assets
const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  //pick image from file function
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={styles.container}>
      {/* insert image */}
      <View style={styles.imageContainer}>
        <Text style={{ color: "#fff" }}>
          Open up App.js to start working on your app!
        </Text>
        <Text style={{ color: "lightgreen" }}>Hello World!</Text>
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      {/* add button */}
      <View style={styles.footerContainer}>
        <Button
          theme="primary"
          label="Choose a photo"
          onPress={pickImageAsync}
        />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

//styling function
const styles = StyleSheet.create({
  // for container
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  // for image container
  imageContainer: {
    flex: 1,
    paddingTop: 58,
    alignItems: "center",
  },
  // for footer container
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
