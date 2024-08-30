import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/FontAwesome';

const NavigationBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navigationBar}>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('HomeScreen')}>
        <Icon name="home" size={20} color="#008000" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('CamScreen')}>
        <Icon name="camera" size={20} color="#008000" />
        <Text style={styles.navText}>Cam</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('ChatScreen')}>
        <Icon name="comments" size={20} color="#008000" />
        <Text style={styles.navText}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('UserProfileScreen')}>
        <Icon name="user" size={20} color="#008000" />
        <Text style={styles.navText}>You</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#008000',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#008000', // Green border color
    backgroundColor: '#fff', // Green background color
    marginHorizontal: 10, // Add margin to separate buttons
  },
  navText: {
    fontSize: 16,
    color: '#008000', // White text color for contrast with green
    marginLeft: 5, // Spacing between icon and text
  },
});

export default NavigationBar;