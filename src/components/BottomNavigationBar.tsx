import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import DashboardContent from '../screens/Homescreen';
import RecentScreen from '../screens/RecentScreen';
import ChartsScreen from '../screens/ChartsScreen';

const Tab = createBottomTabNavigator();

const BottomNavigationBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource: any;

          if (route.name === 'Home') {
            iconSource = focused 
              ? require('../../assets/images/listWhite.png') 
              : require('../../assets/images/listBlack.png');
          } else if (route.name === 'Recent') {
            iconSource = focused 
              ? require('../../assets/images/recentWhite.png') 
              : require('../../assets/images/recentBlack.png');
          } else if (route.name === 'Charts') {
            iconSource = focused 
              ? require('../../assets/images/chartWhite.png') 
              : require('../../assets/images/chartBlack.png');
          }

          return <Image source={iconSource} style={{ width: 30, height: 25 }} />;
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#3A0CA3' },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={DashboardContent} options={{ headerShown: false }} />
      <Tab.Screen name="Recent" component={RecentScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Charts" component={ChartsScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default BottomNavigationBar;
