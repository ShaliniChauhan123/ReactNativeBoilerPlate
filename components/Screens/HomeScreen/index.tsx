
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}


export function HomeScreen({navigation}: RouterProps): JSX.Element {
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Content</Text>
      </View>
      <View style={styles.footer}>
          <Text
            onPress={() => navigation.navigate('About')}
            style={{fontWeight: '700',color:'white'}}>
            ABOUT
          </Text>
          <Text
            onPress={() => navigation.navigate('Contacts')}
            style={{fontWeight: '700',color:'white'}}>
            CONTACTS
          </Text>
        </View>
        </View>
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
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-evenly',
      backgroundColor: '#2196F3',
      padding: 40,
    },
  });
  

