import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 60,
    backgroundColor: colors.lightGrey,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginHorizontal: 20,
    flexDirection: 'row',
    borderRadius: 8,
  },
  content: {
    flex: 0.6,
    flexDirection: 'row',
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 8,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '900',
  },
  label: {
    fontSize: 12,
    color: colors.grey,
  },
  date: {
    fontSize: 12,
    flex: 0.4,
    alignItems: 'flex-end',
    textAlign: 'right',
  },
});

export default styles;
