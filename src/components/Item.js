import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles';

// artist: "Taylor Swift"
// image: "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg"
// thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
// title: "Taylor Swift"
// url: "https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6"

const Item = props => {
  return (
    <View style={styles.item.container}>
      <Image style={styles.item.image} source={{uri: props.data.image}} />
      <Text style={styles.item.artistName}>{props.data.artist}</Text>
      <Text style={styles.item.songName}>Song name: {props.data.title}</Text>
    </View>
  );
};
export {Item};
