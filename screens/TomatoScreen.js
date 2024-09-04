import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const TomatoScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Tomato Plant Diseases</Text>
        <Image source={require('../assets/homeimages/tomato.jpeg')} style={styles.tomatoImage} />
        <Text style={styles.description}>
          • Tomatoes are one of the most popular and versatile vegetables, but they are also prone to various diseases that can significantly affect their growth and fruit quality. Proper disease management is crucial for ensuring a healthy and bountiful tomato harvest.
        </Text>
        <Text style={styles.description}>
          • Some common diseases include Tomato Blight, Fusarium Wilt, and Tomato Mosaic Virus, each of which can cause significant damage if not addressed promptly. Regular monitoring, proper plant spacing, and the use of disease-resistant varieties can help in minimizing the impact of these diseases.
        </Text>
        <Text style={styles.description}>
          • Early detection is key. Look for signs such as yellowing leaves, spots on the fruit, or wilting stems, and take action immediately by removing affected parts and applying appropriate treatments. Remember, a healthy tomato plant starts with proper care and attention to detail.
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
    backgroundColor: 'linear-gradient(180deg, #fce4ec, #f8bbd0)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#880e4f',
    textAlign: 'center',
  },
  tomatoImage: {
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
    color: '#880e4f',
    textAlign: 'left', // Changed to 'left' for bullet points alignment
    lineHeight: 22,
    marginBottom: 10, // Added margin for spacing between bullet points
  },
});

export default TomatoScreen;
