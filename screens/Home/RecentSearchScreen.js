import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

const RecentSearchScreen = () => {
  const route = useRoute();
  const { searchTerm } = route.params;

  const [results, setResults] = useState([]);

  useEffect(() => {
    // Placeholder for search functionality.
    // You can implement a search function here to filter plants or diseases based on the searchTerm.
    const searchResults = []; // Fetch or filter data based on searchTerm
    setResults(searchResults);
  }, [searchTerm]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Results for "{searchTerm}"</Text>
      <FlatList
        data={results}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default RecentSearchScreen;
