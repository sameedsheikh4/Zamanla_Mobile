import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StyleSheet, View, Image, TouchableOpacity, ScrollView, Text } from 'react-native';

import HomeScreen from '../screens/AppScreens/HomeScreen';
import ProfileScreen from '../screens/AppScreens/ProfileScreen';
import SettingScreen from '../screens/AppScreens/SettingScreen';
import VectorIcons from '../components/VectorIcons';
import LeaderBoradScreen from '../screens/AppScreens/LeaderBoradScreen';
import FriendListScreen from '../screens/AppScreens/FriendListScreen';
import GiftScreen from '../screens/AppScreens/GiftScreen';



const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Settings" component={SettingScreen} />
    </HomeStack.Navigator>
  );
}

const LeaderBoradStack = createNativeStackNavigator();
function LeaderBoradStackScreen() {
  return (
    <LeaderBoradStack.Navigator screenOptions={{ headerShown: false }}>
      <LeaderBoradStack.Screen name="LeaderBorad" component={LeaderBoradScreen} />
      <LeaderBoradStack.Screen name="Settings" component={SettingScreen} />
    </LeaderBoradStack.Navigator>
  );
}
const FriendListStack = createNativeStackNavigator();
function FriendListStackScreen() {
  return (
    <FriendListStack.Navigator screenOptions={{ headerShown: false }}>
      <FriendListStack.Screen name="FriendList" component={FriendListScreen} />
      <FriendListStack.Screen name="Settings" component={SettingScreen} />
    </FriendListStack.Navigator>
  );
}
const GiftStack = createNativeStackNavigator();
function GiftStackScreen() {
  return (
    <GiftStack.Navigator screenOptions={{ headerShown: false }}>
      <GiftStack.Screen name="GiftScreen" component={GiftScreen} />
      <GiftStack.Screen name="Settings" component={SettingScreen} />
    </GiftStack.Navigator>
  );
}
const UserStack = createNativeStackNavigator();
function UserStackScreen() {
  return (
    <UserStack.Navigator screenOptions={{ headerShown: false }}>
      <UserStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <UserStack.Screen name="Settings" component={SettingScreen} />
    </UserStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      // shifting={true}
      // swipeEnabled={true}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "#000",
        tabBarStyle: {
          shadowOffset: {
              width: 0,
              height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
          backgroundColor: '#fff',
          position: 'absolute',
          width: '100%',
          borderTopWidth:3,
          borderTopColor:"#fff",
          height:50
      },
      }}

    >
      <Tab.Screen name="LeaderBoradScreen" component={LeaderBoradStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <VectorIcons name="leaderboard" family={'MaterialIcons'} color={color} size={26} />
          )
        }}
      />
      <Tab.Screen name="Friend" component={FriendListStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <VectorIcons name="search" family={'MaterialIcons'} color={color} size={30} />
          )
        }}
      />
      <Tab.Screen name="home" component={HomeStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <View
              style={{
                position: 'absolute',
                bottom: -5, // space from bottombar
                height: 60,
                width: 60,
                borderRadius: 1000,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "white",
                elevation:2,
              
              }}
            >
              <VectorIcons name="dollar-sign" family='FontAwesome5' color={color} size={40}  />
            </View>
          )
        }}
      />
       <Tab.Screen name="Gift Screen" component={GiftStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <VectorIcons name="gift" family={'Feather'} color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <VectorIcons name="perm-identity" family={'MaterialIcons'} color={color} size={30} />
          )
        }}
        component={UserStackScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;


const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    margin: 16,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, .87)',
  },
  iconContainer: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  }
});
