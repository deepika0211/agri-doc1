import React, { useState } from 'react';
import { View, Text, Button, Image, Alert, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImageUploadScreen() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState('');

  const pickImage = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setImage(pickerResult.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    if (!image) {
      Alert.alert("Please select an image first");
      return;
    }

    const formData = new FormData();
    formData.append('file', {
      uri: image,
      name: 'image.jpg',
      type: 'image/jpeg',
    });

    try {
      const response = await fetch("http://192.168.124.252:8000/predict", { // Replace with your server's IP and port
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const result = await response.json();
      setPrediction("Prediction: " + result.class_label);
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("An error occurred while uploading the image.", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload an Image for Prediction</Text>
      <Button title="Pick an image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Upload" onPress={uploadImage} />
      {prediction ? <Text style={styles.prediction}>{prediction}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginVertical: 16,
  },
  prediction: {
    marginTop: 20,
    fontSize: 18,
    color: 'green',
  },
});
