import {StyleSheet} from 'react-native';
import colors from '../../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
  },
  history: {
    fontSize: 16,
    color: colors.blue,
  },
});

export default styles;
