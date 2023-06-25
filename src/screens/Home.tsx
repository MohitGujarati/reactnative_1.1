import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Button,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


const DATA = [
  {
    id: '1',
    title: 'Card 1',
    imageUri:
      'https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1200&rev=61e1dad3af7e465e9544cf8490237772&hash=0AD31383BCBA1DA1C88546327312BA33',
  },
  {
    id: '2',
    title: 'Card 2',
    imageUri:
      'https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1200&rev=61e1dad3af7e465e9544cf8490237772&hash=0AD31383BCBA1DA1C88546327312BA33',
  },
  {
    id: '3',
    title: 'Card 3',
    imageUri:
      'https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1200&rev=61e1dad3af7e465e9544cf8490237772&hash=0AD31383BCBA1DA1C88546327312BA33',
  },
  {
    id: '4',
    title: 'Card 4',
    imageUri:
      'https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1200&rev=61e1dad3af7e465e9544cf8490237772&hash=0AD31383BCBA1DA1C88546327312BA33',
  },
  {
    id: '5',
    title: 'Card 5',
    imageUri:
      'https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1200&rev=61e1dad3af7e465e9544cf8490237772&hash=0AD31383BCBA1DA1C88546327312BA33',
  },
  {
    id: '6',
    title: 'Card 6',
    imageUri:
      'https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1200&rev=61e1dad3af7e465e9544cf8490237772&hash=0AD31383BCBA1DA1C88546327312BA33',
  },
  {
    id: '7',
    title: 'Card 7',
    imageUri:
      'https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1200&rev=61e1dad3af7e465e9544cf8490237772&hash=0AD31383BCBA1DA1C88546327312BA33',
  },
  {
    id: '8',
    title: 'Card 8',
    imageUri:
      'https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1200&rev=61e1dad3af7e465e9544cf8490237772&hash=0AD31383BCBA1DA1C88546327312BA33',
  },

  // Add more card data as needed
];

const Card = ({title, imageUri, onPress}) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image style={styles.image} source={{uri: imageUri}} />
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

export default function HomeScreen({navigation}: any) {
  const renderCard = ({item}) => (
    <Card
      title={item.title}
      imageUri={item.imageUri}
      onPress={() => handleCardPress(item)}
    />
  );

  const handleCardPress = item => {
    console.log(`Card with ID ${item.id} pressed.`);
    // Add your custom logic for handling card press event here
  };
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Textcolor: {
    color: '#FFFF',
    height: 40,
    marginTop: 40,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  card: {
    width: '48%',
    height: 250,
    margin: 5,
    backgroundColor: 'black',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '90%',
    height: '50%',
    resizeMode: 'cover',
    borderRadius: 5,
  },

  title: {
    color: '#FFFF',
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
