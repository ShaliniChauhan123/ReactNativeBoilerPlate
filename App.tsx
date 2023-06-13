/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClientProvider, Hydrate, QueryClient } from 'react-query';

import {HomeScreen} from './components/Screens/HomeScreen';
import {AboutScreen} from './components/Screens/AboutScreen';
import {ContactsScreen} from './components/Screens/ContactsScreen';



function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  const [queryClient] = React.useState(() => new QueryClient());
  useEffect( () => {
    // async function prepare(){
    //     try{
    //         // our api calls will be here.
    //         // setTimeout(() => {
    //         //   console.log("Delayed for 1 second.");
    //         // }, 5000);
    //       //  new Promise(resolve => setTimeout(()=>{resolve},5000)); // wait for 5 secs

    //    //     new Promise(() => setTimeout(5000)); // wait for 5 secs
    //     }catch(e){
    //         console.warn(e);
    //     }finally{
    //         SplashScreen.hide();
    //     }
    // }
    SplashScreen.hide();
    },[]);
  return (
    <QueryClientProvider client={queryClient}>
    <View style={styles.container}>
    
          
              <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="Contacts" component={ContactsScreen} />
        </Stack.Navigator>
  
    </NavigationContainer>
          
    
    </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  footer: {
    backgroundColor: 'blue',
    padding: 40,
  },
});

export default App;
