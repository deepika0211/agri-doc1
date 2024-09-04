import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const CornScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Corn Plant Diseases</Text>
        <Image source={require('../assets/homeimages/corn.jpeg')} style={styles.cornImage} />
        <Text style={styles.description}>
          Corn, also known as maize, is a staple crop grown in many regions across the world. However, it is susceptible to a variety of diseases that can significantly reduce yield and quality. Understanding and managing these diseases is essential for a successful harvest.
          {'\n\n'}
          Common diseases affecting corn include Corn Smut, Northern Corn Leaf Blight, and Gray Leaf Spot. These diseases can lead to symptoms such as gall formation, elongated grayish lesions on leaves, and premature leaf death. Timely intervention with fungicides, crop rotation, and resistant hybrids can help manage these diseases effectively.
          {'\n\n'}
          Regular field scouting and early detection of symptoms are crucial in preventing the spread of corn diseases. Incorporating proper cultural practices, such as maintaining optimal plant density and ensuring adequate soil drainage, can also contribute to healthier corn crops and better yields.
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
    backgroundColor: 'linear-gradient(180deg, #fffde7, #fff9c4)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#f57f17',
    textAlign: 'center',
  },
  cornImage: {
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
    color: '#f57f17',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default CornScreen;
