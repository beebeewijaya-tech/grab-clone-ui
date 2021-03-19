import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    maxHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    backgroundColor: colors.lightGrey,
    flexDirection: 'row',
    marginRight: 10,
    borderRadius: 30,
  },
  text: {
    color: colors.black,
  },
  textActive: {
    color: colors.green,
  },
});

export default styles;
