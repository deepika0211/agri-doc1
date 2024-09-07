import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import CamScreen from './screens/CamScreen';
import OutputScreen from './screens/OutputScreen';
import HomeScreen from './screens/Home/HomeScreen';
import RecentSearchScreen from './screens/Home/RecentSearchScreen';
import PlantDetailScreen from './screens/Home/PlantDetailScreen';
import UserProfileScreen from './screens/profile/UserProfileScreen';
import EditProfileScreen from './screens/profile/EditProfileScreen';
import ImageUploadScreen from './screens/ImageUploadScreen';




import ChatScreen from './screens/ChatScreen';
import TomatoScreen from './screens/TomatoScreen';
import PotatoScreen from './screens/PotatoScreen';
import PeachScreen from './screens/PeachScreen';
import GrapeScreen from './screens/GrapeScreen';
import CornScreen from './screens/CornScreen';
import BellPepperScreen from './screens/BellPepperScreen';
import StrawberryScreen from './screens/StrawberryScreen';
import BlueberryScreen from './screens/BlueberryScreen';
import RaspberryScreen from './screens/RaspberryScreen';
import SoyabeanScreen from './screens/SoyabeanScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UploadScreen">
        <Stack.Screen name = "HomeScreen" component={HomeScreen}
        options={{
          title: "PLANT DOCTOR",
          headerStyle: {
            backgroundColor: "green",
          },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          headerStatusBarHeight: StatusBar.currentHeight, // Adjust if needed
          statusBarStyle: 'light-content', // Set the status bar style/>
        }}
        />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown:false}} />
        <Stack.Screen name="CamScreen" component={CamScreen} />
        <Stack.Screen name="ImageUploadScreen" component={ImageUploadScreen} />
        <Stack.Screen name ="OutputScreen" component = {OutputScreen}/>
        <Stack.Screen name ="RecentSearchScreen" component = {RecentSearchScreen}/>
        <Stack.Screen name ="PlantDetailScreen" component = {PlantDetailScreen}/>
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen}
        options={{
          title: "Profile",
          headerStyle: {
            backgroundColor: "green",
          },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          headerStatusBarHeight: StatusBar.currentHeight, // Adjust if needed
          statusBarStyle: 'light-content', // Set the status bar style
  }}
/>

        <Stack.Screen name ="EditProfileScreen" component = {EditProfileScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="Tomato" component={TomatoScreen} />
        <Stack.Screen name="Potato" component={PotatoScreen} />
        <Stack.Screen name="Peach" component={PeachScreen} />
        <Stack.Screen name="Grape" component={GrapeScreen} />
        <Stack.Screen name="Corn" component={CornScreen} />
        <Stack.Screen name="BellPepper" component={BellPepperScreen} />
        <Stack.Screen name="Strawberry" component={StrawberryScreen} />
        <Stack.Screen name="Blueberry" component={BlueberryScreen} />
        <Stack.Screen name="Raspberry" component={RaspberryScreen} />
        <Stack.Screen name="Soyabean" component={SoyabeanScreen} />

        
        
        {/* other screens */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
