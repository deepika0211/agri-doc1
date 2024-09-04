import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import NavigationBar from './NavigationBar';

const ChatScreen = () => {
  const [expanded, setExpanded] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const faqs = [
    { id: '1', question: 'What is plant disease detection?', answer: 'Plant disease detection helps identify diseases in plants early to take corrective actions.' },
    { id: '2', question: 'How do I use the app?', answer: 'You can upload a picture of your plant, and the app will help diagnose any potential diseases.' },
    { id: '3', question: 'What should I do if my plant is infected?', answer: 'The app provides guidelines and remedies based on the identified disease.' },
    { id: '4', question: 'Can the app detect all types of plant diseases?', answer: 'The app is designed to detect a wide range of common plant diseases, but it may not detect all types.' },
    { id: '5', question: 'How accurate is the disease detection?', answer: 'The accuracy of the detection depends on the quality of the image and the disease, but it generally provides reliable results.' },
    { id: '6', question: 'Can I use the app offline?', answer: 'The app requires an internet connection to analyze the images and provide results.' },
    { id: '7', question: 'Is there a cost to use the app?', answer: 'The app offers free basic features, but advanced features may require a subscription.' },
    { id: '8', question: 'How do I upload a picture?', answer: 'You can upload a picture from your gallery or take a new one using your camera through the app.' },
    { id: '9', question: 'Can the app provide remedies for the detected diseases?', answer: 'Yes, the app provides remedies and care instructions based on the detected disease.' },
    { id: '10', question: 'What should I do if the app does not recognize the disease?', answer: 'If the app doesn’t recognize the disease, you can consult an expert or use the app’s support feature for further assistance.' },
    { id: '11', question: 'How do I get help if I face issues with the app?', answer: 'You can reach out to our support team via the app’s help section.' },
    { id: '12', question: 'Is the app available in multiple languages?', answer: 'Currently, the app is available in English, but we are working on adding more languages.' },
    { id: '13', question: 'Can I save the disease detection results?', answer: 'Yes, you can save the results for future reference in the app’s history section.' },
  ];

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => toggleExpand(item.id)}>
        <Text style={styles.question}>{item.question}</Text>
      </TouchableOpacity>
      {expanded === item.id && <Text style={styles.answer}>{item.answer}</Text>}
    </View>
  );

  const filteredFAQs = faqs.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search FAQs..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <FlatList
        data={filteredFAQs}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e6f2ff', // light blue background for plant theme
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  itemContainer: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50', // green for the questions
  },
  answer: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
});

export default ChatScreen;