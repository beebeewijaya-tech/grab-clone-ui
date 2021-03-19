import {StyleSheet} from 'react-native';
import colors from '../../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    minHeight: 60,
    flexDirection: 'row',
  },
  pillContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
});

export default styles;
