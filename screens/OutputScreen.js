import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native'; // Import route hook to get the passed data

const OutputScreen = () => {
  const route = useRoute(); // Get route params
  const { prediction } = route.params; // Extract the prediction data

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prediction Result</Text>
      {prediction ? (
        <Text style={styles.result}>Prediction: {prediction.result}</Text>
      ) : (
        <Text>No prediction data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    color: 'green',
  },
});

export default OutputScreen;
