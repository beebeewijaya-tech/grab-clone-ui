import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './styles';

function Menu(props) {
  const {text, image} = props;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text>{text}</Text>
    </View>
  );
}

const MenuMemo = React.memo(Menu);

export default MenuMemo;
