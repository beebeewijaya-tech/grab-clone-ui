import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

function Chip(props) {
  const {text} = props;

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
}

const ChipMemo = React.memo(Chip);

export default ChipMemo;
