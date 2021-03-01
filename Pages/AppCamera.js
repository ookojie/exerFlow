import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { cameraWithTensors } from "@tensorflow/tfjs-react-native";

const TensorCamera = cameraWithTensors(Camera);

export default function AppCamera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [isTfReady, setisTfReady] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { status1 } = await isTfReady.ready();
      setisTfReady(status1 === "true");
    })
  })
  
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const modelJson = require('../path/to/model.json');
  const modelWeights = require('../path/to/model_weights.bin');
  async function bundleResourceIOExample() {
    const model =
      await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeights));

     const res = model.predict(tf.randomNormal([1, 28, 28, 1])) as tf.Tensor;
  }

  
handleCameraStream(images, updatePreview, gl) {
  const loop = async () => {
    const nextImageTensor = images.next().value

    //
    // do something with tensor here
    //

    // if autorender is false you need the following two lines.
    // updatePreview();
    // gl.endFrameEXP();

    requestAnimationFrame(loop);
  }
  loop();
}

let textureDims;
if (Platform.OS === 'ios') {
 textureDims = {
   height: 1920,
   width: 1080,
 };
} else {
 textureDims = {
   height: 1200,
   width: 1600,
 };
}

  return (
    <View style={styles.container}>
      <TensorCamera style={styles.camera} type={Camera.Constants.Type.front}       cameraTextureHeight={textureDims.height}
       cameraTextureWidth={textureDims.width}
       resizeHeight={200}
       resizeWidth={152}
       resizeDepth={3}
       onReady={this.handleCameraStream}
       autorender={true}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  camera: {
    flex: 1,
  },

  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },

  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },

  text: {
    fontSize: 10,
    color: "white",
  },
});
