import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const SoyabeanScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Soyabean Plant Diseases</Text>
        <Image source={require('../assets/homeimages/soyabean.jpg')} style={styles.plantImage} />
        <Text style={styles.description}>
          Soybeans are a crucial crop globally, but they are vulnerable to a range of diseases that can impact their growth and productivity. Proper disease management practices are essential for maintaining a healthy soybean crop.
          {'\n\n'}
          Some common soybean diseases include Soybean Cyst Nematode, Phytophthora Root Rot, and Sudden Death Syndrome. Symptoms like yellowing leaves, stunted growth, and root rot are indicative of these diseases. Crop rotation, resistant varieties, and fungicide applications are key strategies for disease management.
          {'\n\n'}
          Regular scouting for symptoms and timely interventions are crucial for minimizing the impact of diseases on soybean yield. Good soil health practices, such as maintaining proper pH levels and drainage, can also help in preventing disease outbreaks.
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
  plantImage: {
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

export default SoyabeanScreen;
