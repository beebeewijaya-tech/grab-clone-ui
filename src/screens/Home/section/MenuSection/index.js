import React, {useState} from 'react';
import {FlatList, View} from 'react-native';

// Components
import {Menu} from '../../../../components';

// Dummy
import {dummyMenu} from '../../../../utils/dummy';

// Styles
import styles from './styles';

function MenuSection() {
  const [list] = useState(dummyMenu);

  const renderItem = ({item}) => <Menu {...item} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={4}
      />
    </View>
  );
}

const MenuSectionMemo = React.memo(MenuSection);

export default MenuSectionMemo;
