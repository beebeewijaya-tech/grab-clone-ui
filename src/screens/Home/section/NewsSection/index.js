import React, {useState} from 'react';
import {FlatList, View} from 'react-native';

// Components
import {Card} from '../../../../components';

// Dummy
import {dummyNews} from '../../../../utils/dummy';

// Styles
import styles from './styles';

function NewsSection() {
  const [list] = useState(dummyNews);

  const renderItem = ({item}) => <Card {...item} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
}

const NewsSectionMemo = React.memo(NewsSection);

export default NewsSectionMemo;
