import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const StrawberryScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Strawberry Plant Diseases</Text>
        <Image source={require('../assets/homeimages/strawberry.jpg')} style={styles.plantImage} />
        <Text style={styles.description}>
          Strawberries are a beloved fruit, but they can be vulnerable to a variety of diseases. Effective disease management is essential to ensure a successful strawberry harvest.
          {'\n\n'}
          Common diseases include Gray Mold, Powdery Mildew, and Verticillium Wilt. These diseases can cause symptoms such as moldy fruit, white powder on leaves, and wilting plants. Proper spacing, good airflow, and the removal of infected plants are key to controlling these diseases.
          {'\n\n'}
          Regular monitoring and the use of fungicides can also help protect your strawberry plants. Ensure your plants are well-watered, but avoid overhead watering to minimize the risk of disease spread.
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
    color: '#c2185b',
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
    color: '#c2185b',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default StrawberryScreen;
