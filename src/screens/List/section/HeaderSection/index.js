import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

function HeaderSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Activity</Text>
      <Text style={styles.history}>History</Text>
    </View>
  );
}

const HeaderSectionMemo = React.memo(HeaderSection);

export default HeaderSectionMemo;
