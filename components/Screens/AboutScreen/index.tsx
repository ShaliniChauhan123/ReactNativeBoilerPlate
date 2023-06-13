
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export function AboutScreen(): JSX.Element {
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>About Screen</Text>
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
      backgroundColor: 'blue',
      padding: 40,
    },
  });
  

