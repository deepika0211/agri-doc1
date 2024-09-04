import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const PotatoScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Potato Plant Diseases</Text>
        <Image source={require('../assets/homeimages/potato.jpeg')} style={styles.potatoImage} />
        <Text style={styles.description}>
          Potatoes are a staple crop worldwide, but they are vulnerable to a range of diseases that can impact both yield and quality. Effective disease management is essential to protect this vital food source and ensure a successful harvest.
          {'\n\n'}
          Common potato diseases include Late Blight, Early Blight, and Blackleg. These diseases can spread rapidly, especially in humid conditions, causing significant losses if not controlled promptly. Implementing crop rotation, using certified disease-free seed potatoes, and applying appropriate fungicides are important steps in disease prevention.
          {'\n\n'}
          Vigilance is key to maintaining healthy potato plants. Regularly inspect your plants for symptoms such as dark spots on leaves, wilting, or rotting tubers. Taking immediate action at the first sign of disease can prevent widespread damage and help maintain the health of your potato crop.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollViewContent: {
    padding: 16,
    backgroundColor: 'linear-gradient(180deg, #e0f7fa, #80deea)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00695c',
    textAlign: 'center',
  },
  potatoImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  description: {
    fontSize: 16,
    color: '#00695c',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default PotatoScreen;
