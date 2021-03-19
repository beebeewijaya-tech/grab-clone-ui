import React, {useState} from 'react';
import SafeAreaView from 'react-native-safe-area-view';

// Components
import {StatusBar} from '../../components';

// Sections
import HeaderSection from './section/HeaderSection';
import PillSection from './section/PillSection';
import ActivitiesSection from './section/ActivitiesSection';

// Utils
import CONSTANTS from '../../utils/constants';
import colors from '../../utils/colors';

import styles from './styles';

function List() {
  const [activePills, setActivePills] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={CONSTANTS.STATUS_BAR.CONTENT.DARK_CONTENT}
        backgroundColor={colors.white}
      />
      <HeaderSection />
      <PillSection
        activePills={activePills}
        setActivePills={value => setActivePills(value)}
      />
      <ActivitiesSection />
    </SafeAreaView>
  );
}

export default List;
