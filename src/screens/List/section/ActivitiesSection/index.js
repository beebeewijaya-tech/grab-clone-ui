import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';

import {ListItem} from '../../../../components';
import {dummyActivitiesItem} from '../../../../utils/dummy';

import styles from './styles';

function Activities(props) {
  const [list] = useState(dummyActivitiesItem);
  const renderItem = ({item}) => <ListItem {...item} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default Activities;
