import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

function Pill(props) {
  const {text, active, onPress, id} = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={[styles.text, active === id && styles.textActive]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

export default Pill;
