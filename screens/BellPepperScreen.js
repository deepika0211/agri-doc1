import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const BellPepperScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Bell Pepper Plant Diseases</Text>
        <Image source={require('../assets/homeimages/bellpepper.jpeg')} style={styles.bellPepperImage} />
        <Text style={styles.description}>
          Bell peppers, known for their vibrant colors and sweet flavor, are a popular vegetable grown in many gardens and farms. However, they are prone to several diseases that can impact their growth and fruit production. Effective disease management is key to ensuring a healthy bell pepper crop.
          {'\n\n'}
          Common diseases affecting bell peppers include Bacterial Spot, Anthracnose, and Powdery Mildew. These diseases can cause symptoms such as leaf spots, fruit rot, and a white powdery growth on the leaves. Implementing good cultural practices, such as crop rotation, proper spacing, and adequate watering, can help minimize the risk of disease.
          {'\n\n'}
          In addition to cultural practices, selecting disease-resistant varieties and applying appropriate fungicides when necessary are crucial steps in managing bell pepper diseases. Regular monitoring and early detection are essential to prevent the spread of infections and ensure a bountiful harvest.
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
    backgroundColor: 'linear-gradient(180deg, #e8f5e9, #c8e6c9)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#388e3c',
    textAlign: 'center',
  },
  bellPepperImage: {
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
    color: '#388e3c',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default BellPepperScreen;
