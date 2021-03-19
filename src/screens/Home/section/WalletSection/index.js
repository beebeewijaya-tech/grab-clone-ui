import React from 'react';
import {Text, View} from 'react-native';
import {ChevronRightIcon, OvoIcon, PointIcon} from '../../../../assets/icon';

import styles from './styles';

function WalletSection() {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <OvoIcon width={24} height={24} />
        <View style={styles.textContainer}>
          <Text style={styles.textSuper}>Rp</Text>
          <Text style={styles.textPrice}>51.443</Text>
          <ChevronRightIcon width={18} height={18} />
        </View>
      </View>
      <View style={styles.column}>
        <PointIcon width={24} height={24} />
        <View style={styles.textContainer}>
          <Text style={styles.textPrice}>11,084 Points</Text>
          <ChevronRightIcon width={18} height={18} />
        </View>
      </View>
    </View>
  );
}

const WalletSectionMemo = React.memo(WalletSection);

export default WalletSectionMemo;
