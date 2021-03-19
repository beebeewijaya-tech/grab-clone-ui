import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './styles';

function Card(props) {
  const {text, image} = props;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const CardMemo = React.memo(Card);

export default CardMemo;
