import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { auth } from '../../firebase'; // Ensure you have the correct path to your firebase.js
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons'; // Importing icons from react-native-vector-icons

const UserProfileScreen = ({ navigation }) => { // Added navigation prop
  const [email, setEmail] = useState('');

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setEmail(user.email);
    }
  }, []);

  const handleSettingsPress = () => {
    navigation.navigate('EditProfileScreen'); // Navigate to Settings screen
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="green" />
      <View style={styles.header}>
        <Image
          source={require('../../assets/CamPageImages/background.jpg')} // Update this path based on your file structure
          style={styles.avatar}
        />
        <Text style={styles.name}>BloomBuddy</Text>
        <TouchableOpacity style={styles.settingsIcon} onPress={handleSettingsPress}>
          <Ionicons name="settings-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Your Email</Text>
        <TextInput style={styles.input} value={email} editable={false} />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput style={styles.input} value="9876543214" editable={false} />

        <Text style={styles.label}>Website</Text>
        <TextInput style={styles.input} value="www.gfx.com" editable={false} />

        <Text style={styles.label}>Location</Text>
        <TextInput style={styles.input} value="Bhimavaram" editable={false} />
      </View>
      <StatusBar barStyle="dark-content"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    position: 'relative', // Make sure the icon is positioned correctly
  },
  settingsIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333', // Bright, dark color for the name
  },
  designation: {
    fontSize: 16,
    color: '#555', // A slightly lighter color for the designation
  },
  label: {
    fontSize: 14,
    color: '#444', // Bright and dark color for labels
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    color: '#000', // Bright black color for input text
  },
});

export default UserProfileScreen;
