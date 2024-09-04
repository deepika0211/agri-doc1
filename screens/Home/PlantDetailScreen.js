import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PlantDetailsScreen = ({ route }) => {
  const { plant } = route.params;

  return (
    <View style={styles.container}>
      <Image source={plant.image} style={styles.image} />
      <Text style={styles.name}>{plant.name}</Text>
      <Text style={styles.description}>
        {plant.description || 'Description of the plant will be displayed here.'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
});

export default PlantDetailsScreen;
