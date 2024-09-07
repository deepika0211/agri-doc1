import React from 'react';
import { View, Text, TextInput, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from '../NavigationBar'; // Ensure this component exists and is correctly implemented
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const plantCategories = [
    { id: '1', name: 'Fruit Trees', image: require('../../assets/CamPageImages/back.jpg'), screen: 'Tomato' },
    { id: '2', name: 'Vegetables', image: require('../../assets/CamPageImages/back.jpg'), screen: 'Potato' },
    { id: '3', name: 'Flowers', image: require('../../assets/CamPageImages/back.jpg'), screen: 'BellPepper' },
    // Add more categories with corresponding screens as needed
  ];

  const recentSearches = [
    'Tomato',
    'Apple Tree',
    'Rose',
    'Potato',
  ];

  const popularPlants = [
    { id: '1', name: 'Tomato', image: require('../../assets/homeimages/tomato.jpeg') },
    { id: '2', name: 'Potato', image: require('../../assets/homeimages/potato.jpeg') },
    { id: '3', name: 'Peach', image: require('../../assets/homeimages/peach.jpeg') },
    { id: '4', name: 'Grape', image: require('../../assets/homeimages/grape.jpeg') },
    { id: '5', name: 'Corn', image: require('../../assets/homeimages/corn.jpeg') },
    { id: '6', name: 'Bell Pepper', image: require('../../assets/homeimages/bellpepper.jpeg') },
    { id: '7', name: 'Strawberry', image: require('../../assets/homeimages/strawberry.jpg') },
    { id: '8', name: 'Raspberry', image: require('../../assets/homeimages/rasberry.jpg') },
    { id: '9', name: 'Blueberry', image: require('../../assets/homeimages/blueberry.jpeg') },
    { id: '10', name: 'Soyabean', image: require('../../assets/homeimages/soyabean.jpg') },
  ];

  const plantOfTheDay = {
    name: 'Tomato',
    image: require('../../assets/CamPageImages/back.jpg'),
    description: 'A widely cultivated plant with common issues like blight and wilt.',
  };

  return (
    <View style={styles.screenContainer}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollViewContent}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for plant diseases..."
          />
        </View>

        {/* Plant of the Day */}
        <View style={styles.plantOfTheDayContainer}>
          <Text style={styles.heading}>Plant of the Day</Text>
          <View style={styles.plantOfTheDayCard}>
            <Image source={plantOfTheDay.image} style={styles.plantOfTheDayImage} />
            <View style={styles.plantOfTheDayText}>
              <Text style={styles.plantName}>{plantOfTheDay.name}</Text>
              <Text style={styles.plantDescription}>{plantOfTheDay.description}</Text>
              <TouchableOpacity style={styles.learnMoreButton}>
                <Text style={styles.learnMoreText}>Learn More</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Recent Searches */}
        <View style={styles.recentSearchesContainer}>
          <Text style={styles.heading}>Recent Searches</Text>
          <FlatList
            horizontal
            data={recentSearches}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.searchItem}>
                <Text style={styles.searchItemText}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        {/* Description Section */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.heading}>Explore Plants</Text>
          <Text style={styles.descriptionText}>
            Discover various plants and learn about common diseases affecting them.
          </Text>
        </View>

        {/* Popular Plants */}
        <View style={styles.popularPlantsContainer}>
          <Text style={styles.heading}>Popular Plants</Text>
          <FlatList
            horizontal
            data={popularPlants}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate(item.name)}>
                <Image source={item.image} style={styles.categoryImage} />
                <Text style={styles.categoryName}>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        {/* Disease Alerts */}
        <View style={styles.alertsContainer}>
          <Text style={styles.heading}>Disease Alerts</Text>
          <View style={styles.alertCard}>
            <Text style={styles.alertText}>Blight outbreak in potato crops reported in several regions.</Text>
            <TouchableOpacity style={styles.learnMoreButton}>
              <Text style={styles.learnMoreText}>Learn More</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* User Tips Section */}
        <View style={styles.tipsContainer}>
          <Text style={styles.heading}>User Tips</Text>
          <View style={styles.tipCard}>
            <Text style={styles.tipText}>"Use neem oil as a natural pesticide for your vegetable garden." - Jane D.</Text>
          </View>
        </View>

        {/* Plant Disease News */}
        <View style={styles.newsContainer}>
          <Text style={styles.heading}>Plant Disease News</Text>
          <View style={styles.newsCard}>
            <Text style={styles.newsText}>"New resistant strain of wheat developed to combat rust disease."</Text>
            <TouchableOpacity style={styles.learnMoreButton}>
              <Text style={styles.learnMoreText}>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f8ff',
  },
  scrollViewContent: {
    paddingBottom: 100, // Add extra padding at the bottom to ensure all content is scrollable
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
  },
  plantOfTheDayContainer: {
    marginBottom: 20,
  },
  plantOfTheDayCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    padding: 10,
    alignItems: 'center',
  },
  plantOfTheDayImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  plantOfTheDayText: {
    flex: 1,
    marginLeft: 10,
  },
  plantName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  plantDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  learnMoreButton: {
    backgroundColor: '#32cd32',
    padding: 5,
    borderRadius: 5,
  },
  learnMoreText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  recentSearchesContainer: {
    marginBottom: 20,
  },
  searchItem: {
    backgroundColor: '#e6e6fa',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  searchItemText: {
    fontSize: 14,
    color: '#333',
  },
  categoriesContainer: {
    marginBottom: 20,
  },
  categoryCard: {
    alignItems: 'center',
    marginRight: 16,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  categoryName: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
  },
  alertsContainer: {
    marginBottom: 20,
  },
  alertCard: {
    backgroundColor: '#ffcccb',
    padding: 15,
    borderRadius: 8,
  },
  alertText: {
    fontSize: 14,
    color: '#800000',
    marginBottom: 10,
  },
  tipsContainer: {
    marginBottom: 20,
  },
  tipCard: {
    backgroundColor: '#ffe4b5',
    padding: 15,
    borderRadius: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#8b4513',
  },
  newsContainer: {
    marginBottom: 20,
  },
  newsCard: {
    backgroundColor: '#d3d3d3',
    padding: 15,
    borderRadius: 8,
  },
  newsText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
});

export default HomeScreen;
