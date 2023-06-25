
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react'

export default function HomeScreen({ navigation }:any) {

  const handleCardPress = (cardIndex) => {
    console.log(`Card ${cardIndex} pressed`);
    // Perform any desired actions when a card is clicked
  };
  return (
     //flat Grid with container
     <View style={styles.container}>
      <TouchableOpacity
        style={[styles.card, { marginRight: '3%' }]}
        onPress={() => handleCardPress(1)}
      >
        <Image source={require('path_to_image')} style={styles.image} />
        <Text style={styles.text}>Card 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card, { marginLeft: '3%' }]}
        onPress={() => handleCardPress(2)}
      >
        <Image source={require('path_to_image')} style={styles.image} />
        <Text style={styles.text}>Card 2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '47%',
    aspectRatio: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    aspectRatio: 1,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  text: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

