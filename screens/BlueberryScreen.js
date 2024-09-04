import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const BlueberryScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Blueberry Plant Diseases</Text>
        <Image source={require('../assets/homeimages/blueberry.jpeg')} style={styles.plantImage} />
        <Text style={styles.description}>
          Blueberries are a popular fruit known for their rich flavor and nutritional value. However, like all plants, they are susceptible to various diseases. Proper care and early detection are essential for maintaining healthy blueberry bushes.
          {'\n\n'}
          Common diseases include Mummy Berry, Botrytis Blight, and Blueberry Scorch Virus. Symptoms such as wilting leaves, discolored berries, or stem lesions can indicate the presence of these diseases. Regular pruning and fungicide application can help manage and prevent outbreaks.
          {'\n\n'}
          Ensuring proper air circulation, soil drainage, and avoiding overhead watering can reduce the risk of disease. Always choose disease-resistant varieties when planting new bushes to improve overall plant health and fruit yield.
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
    backgroundColor: 'linear-gradient(180deg, #e3f2fd, #bbdefb)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0d47a1',
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
    color: '#0d47a1',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default BlueberryScreen;
