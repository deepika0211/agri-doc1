import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const PeachScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Peach Plant Diseases</Text>
        <Image source={require('../assets/homeimages/peach.jpeg')} style={styles.peachImage} />
        <Text style={styles.description}>
          Peaches are a beloved fruit, but they are susceptible to a variety of diseases that can affect both the tree and the fruit. Understanding and managing these diseases is essential for maintaining healthy peach orchards and ensuring a bountiful harvest.
          {'\n\n'}
          Common peach diseases include Peach Leaf Curl, Brown Rot, and Bacterial Spot. These diseases can cause symptoms like distorted leaves, fruit rot, and blemished fruit. Proper pruning, the use of disease-resistant varieties, and timely application of fungicides are crucial in managing these issues.
          {'\n\n'}
          Regular monitoring of your peach trees for early signs of disease can help prevent serious damage. By addressing issues promptly, you can protect your trees and enjoy a fruitful peach season.
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
    backgroundColor: 'linear-gradient(180deg, #fff3e0, #ffcc80)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#e65100',
    textAlign: 'center',
  },
  peachImage: {
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
    color: '#e65100',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default PeachScreen;
