// In App.js in a new project

import * as React from 'react';
import { View, Text, Linking, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
function CustomDrawer() {


      return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Help"
            onPress={() => Linking.openURL('https://mywebsite.com/help')}
          />
        </DrawerContentScrollView>
      );


}


import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function CustomDrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="CustomDrawer" component={CustomBottomRoutes} />

    </Drawer.Navigator>
  );
}


function MyTabBar({ navigation }) {
  return (
    <Button
      title="Go somewhere"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate('SomeScreen');
      }}
    />
  );
}

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function CustomBottomRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home1" component={HomeScreen} />
    </Tab.Navigator>
  );
}


const Stack = createNativeStackNavigator();


const Cobain = () =>{
  return (
    <Stack.Navigator screenOptions={{
      headerShown : false
    }}>
      <Stack.Screen name="CustomDrawerRoutes" component={CustomDrawerRoutes} />
      {/* <Stack.Screen name="CustomBottomRoutes" component={CustomBottomRoutes} /> */}
    </Stack.Navigator>
  );  
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown : false
      }}>
        <Stack.Screen name="Home" component={Cobain} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;