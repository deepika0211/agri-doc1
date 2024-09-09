import React from 'react';
import { View, Text } from 'react-native';

const UploadScreen = () => {

  const predictImage = async () => {
    const url = 'http://3.88.235.29:8000/predict2/';
    const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/zampa-5221f.appspot.com/o/images%2F00d68686-8595-47c8-8ecd-bf0f83526a62.jpeg?alt=media&token=35c20865-2299-42d2-a02c-b83294a8f82a';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image_url: imageUrl
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  React.useEffect(() => {
    predictImage();
  }, []);

  return (
    <View>
      <Text>Predict Image</Text>
    </View>
  );
};

export default UploadScreen;
