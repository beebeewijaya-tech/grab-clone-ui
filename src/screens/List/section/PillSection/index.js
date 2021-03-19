import React from 'react';
import {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {Pill} from '../../../../components';
import {dummyListActivities} from '../../../../utils/dummy';

import styles from './styles';

function PillSection(props) {
  const {activePills, setActivePills} = props;
  const [list] = useState(dummyListActivities);
  return (
    <View style={styles.container}>
      <View style={styles.pillContainer}>
        {list.map(item => (
          <Pill
            {...item}
            key={item.id}
            active={activePills}
            onPress={() => setActivePills(item.id)}
          />
        ))}
      </View>
    </View>
  );
}

const PillSectionMemo = React.memo(PillSection);

export default PillSectionMemo;
