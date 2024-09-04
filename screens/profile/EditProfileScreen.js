import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase';

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const [notificationEnabled, setNotificationEnabled] = useState(false);

  const toggleNotification = () => setNotificationEnabled(previousState => !previousState);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch(error => alert(error.message));
  };

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Settings</Text>

      {/* Notification Switch */}
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Notification</Text>
        <Switch
          value={notificationEnabled}
          onValueChange={toggleNotification}
        />
      </View>

      {/* Rate App */}
      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.optionText}>Rate App</Text>
      </TouchableOpacity>

      {/* Privacy Policy */}
      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.optionText}>Privacy Policy</Text>
      </TouchableOpacity>

      {/* Terms and Conditions */}
      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.optionText}>Terms and Conditions</Text>
      </TouchableOpacity>

      {/* Contact */}
      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.optionText}>Contact</Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity onPress={handleSignOut} style={styles.optionContainer}>
        <Text style={[styles.optionText, styles.signOutText]}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 29,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 18,
  },
  signOutText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
