import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {Image, Text} from 'react-native';

// Components
import {StatusBar} from '../../components';

// Utils
import CONSTANTS from '../../utils/constants';
import colors from '../../utils/colors';
import {Empty} from '../../assets/img';

import styles from './styles';

function Wallet() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={CONSTANTS.STATUS_BAR.CONTENT.DARK_CONTENT}
        backgroundColor={colors.white}
      />
      <Image source={Empty} style={styles.image} />
      <Text style={styles.text}>Coming Soon!</Text>
    </SafeAreaView>
  );
}

export default Wallet;
