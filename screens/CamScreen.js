import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, ImageBackground, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';
import NavigationBar from './NavigationBar';
import * as FileSystem from 'expo-file-system';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const CamScreen = () => {
  const [imageUri, setImageUri] = useState(null);
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch(error => alert(error.message));
  };

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'You need to grant camera permissions to use this feature.');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const openGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'You need to grant gallery permissions to use this feature.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const predictImage = async () => {
    if (imageUri) {
      try {
        // Extract the file name and upload to Firebase
        const fileInfo = await FileSystem.getInfoAsync(imageUri);
        const fileName = fileInfo.uri.split('/').pop(); // Extract file name
        const storage = getStorage();
        const storageRef = ref(storage, 'images/' + fileName);
  
        // Upload the image
        await uploadBytes(storageRef, await fetch(fileInfo.uri).then(res => res.blob()));
        console.log('Upload successful');
  
        // Get the download URL
        const downloadURL = await getDownloadURL(storageRef);
        console.log('File available at', downloadURL);
  
        // Send the download URL to your backend
        const response = await fetch('http://18.215.182.109:8000/predict', {
          method: 'POST',
          body: JSON.stringify({ imageUrl: downloadURL }), // Send JSON with image URL
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }
  
        const result = await response.json();
        console.log('Server response:', result);
  
        // Navigate to OutputScreen with the image URI and prediction
        navigation.navigate('OutputScreen', { imageUri, prediction: result.class_label });
      } catch (error) {
        console.error('Network error:', error);
        Alert.alert('Network Error', `Failed to connect to the server. ${error.message}`);
      }
    } else {
      Alert.alert('No Image', 'Please select an image before proceeding.');
    }
  };
  
  

  return (
    <ImageBackground
      source={require('../assets/CamPageImages/background.jpg')}
      style={styles.background}
    >
      <TouchableOpacity onPress={handleSignOut} style={styles.signOutButton}>
        <Text style={styles.signOutButtonText}>Sign out</Text>
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.optionButton} onPress={openCamera}>
            <Text style={styles.optionText}>📷 START CAMERA</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton} onPress={openGallery}>
            <Text style={styles.optionText}>OPEN GALLERY</Text>
          </TouchableOpacity>

          {imageUri && (
            <View style={styles.imageContainer}>
              <Image source={{ uri: imageUri }} style={styles.image} />
              <TouchableOpacity style={styles.predictButton} onPress={predictImage}>
                <Text style={styles.predictButtonText}>Predict</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      <NavigationBar />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  optionButton: {
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#006400',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  signOutButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    backgroundColor: '#ff5c5c',
    borderRadius: 5,
  },
  signOutButtonText: {
    fontSize: 16,
    color: 'white',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  predictButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#4caf50',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  predictButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CamScreen;
