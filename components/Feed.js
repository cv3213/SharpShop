import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default class Feed extends Component {
  render() {
    return (
      <View>
        <ScrollView style={styles.Feed} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Feed: {
    backgroundColor: 'white',
    height: 450,
  },
});
