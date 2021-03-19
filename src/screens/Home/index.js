import React, {useEffect} from 'react';
import {LogBox, ScrollView} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

// Components
import {StatusBar, Header} from '../../components';

// Sections
import WalletSection from './section/WalletSection';
import MenuSection from './section/MenuSection';
import ChipSection from './section/ChipSection';
import NewsSection from './section/NewsSection';

// Utils
import CONSTANTS from '../../utils/constants';
import colors from '../../utils/colors';

import styles from './styles';

function Home() {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={CONSTANTS.STATUS_BAR.CONTENT.LIGHT_CONTENT}
        backgroundColor={colors.green}
      />
      <Header placeholder="Offers, food and place to go" />
      <ScrollView contentContainerStyle={styles.content}>
        <WalletSection />
        <ChipSection />
        <MenuSection />
        <NewsSection />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
