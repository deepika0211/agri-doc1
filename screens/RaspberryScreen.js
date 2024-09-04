import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const RaspberryScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Raspberry Plant Diseases</Text>
        <Image source={require('../assets/homeimages/rasberry.jpg')} style={styles.plantImage} />
        <Text style={styles.description}>
          Raspberries are a delicious and versatile fruit, but they are susceptible to various diseases that can affect their yield and quality. Understanding and managing these diseases is vital for healthy raspberry plants.
          {'\n\n'}
          Common raspberry diseases include Raspberry Cane Blight, Anthracnose, and Phytophthora Root Rot. Symptoms include wilting canes, spots on leaves, and poor fruit production. Proper pruning, good drainage, and the application of fungicides can help manage these issues.
          {'\n\n'}
          It's important to remove and destroy any diseased canes and to avoid planting raspberries in areas with a history of disease. Keeping the plants well-spaced and ensuring good air circulation can also reduce disease pressure.
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
    backgroundColor: 'linear-gradient(180deg, #f3e5f5, #ce93d8)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6a1b9a',
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
    color: '#6a1b9a',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default RaspberryScreen;
