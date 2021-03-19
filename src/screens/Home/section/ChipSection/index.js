import React from 'react';
import {View} from 'react-native';

import {Chip} from '../../../../components';

import styles from './styles';

function ChipSection() {
  return (
    <View style={styles.container}>
      <View style={styles.chipContainer}>
        <Chip text="Top Up - Wallet" />
        <Chip text="Search - McDonald" />
      </View>
    </View>
  );
}

const ChipSectionMemo = React.memo(ChipSection);

export default ChipSectionMemo;
