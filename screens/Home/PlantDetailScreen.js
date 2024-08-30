import { View, Text,StyleSheet } from 'react-native'

import React from 'react'

const PlantDetailScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>• Strawberries need full sun to produce maximum fruit.</Text>
        <Text style={styles.listItem}>• Space plants 12 to 18 inches apart.</Text>
        <Text style={styles.listItem}>• Strawberries are self-fertile, but require bees for pollination.</Text>
        <Text style={styles.listItem}>• Remove some of the runners throughout the season or your strawberry plants will take over your yard.</Text>
        <Text style={styles.listItem}>• After removing flowers for a few weeks after planting, you can pick fruit later that summer.</Text>
        <Text style={styles.listItem}>• One June-bearing plant can produce up to 120 new daughter plants in one season.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100, // Adjust as needed
    height: 100, // Adjust as needed
    resizeMode: 'contain',
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  listItem: {
    fontSize: 16,
    marginVertical: 5,
  },
});


export default PlantDetailScreen