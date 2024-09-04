import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const GrapeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Grape Plant Diseases</Text>
        <Image source={require('../assets/homeimages/grape.jpeg')} style={styles.grapeImage} />
        <Text style={styles.description}>
          Grapes are a popular fruit grown worldwide, but they are prone to various diseases that can significantly affect vine health and fruit quality. Proper management of these diseases is vital for ensuring a healthy vineyard and a good harvest.
          {'\n\n'}
          Common grape diseases include Powdery Mildew, Downy Mildew, and Black Rot. These diseases can cause symptoms such as white powdery spots on leaves, yellowing of foliage, and black lesions on the fruit. Timely application of fungicides, proper vine spacing, and good air circulation are essential in managing these issues.
          {'\n\n'}
          Regular monitoring of your grapevines for early signs of disease, along with implementing cultural practices like pruning and canopy management, can help minimize the impact of diseases on your vineyard, leading to a more fruitful harvest.
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
    backgroundColor: 'linear-gradient(180deg, #e8f5e9, #c8e6c9)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2e7d32',
    textAlign: 'center',
  },
  grapeImage: {
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
    color: '#2e7d32',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default GrapeScreen;
