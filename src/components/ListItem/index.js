import React from 'react';
import {Image, Text, View} from 'react-native';
import moment from 'moment';

import {weekDay} from '../../utils/date';
import styles from './styles';

function ListItem(props) {
  const {text, image} = props;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={image} style={styles.image} />
        <View>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.label}>5 items</Text>
        </View>
      </View>
      <Text style={styles.date}>{weekDay[moment().day()]}</Text>
    </View>
  );
}

const ListItemMemo = React.memo(ListItem);

export default ListItemMemo;
