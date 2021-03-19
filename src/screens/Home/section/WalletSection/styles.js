import {StyleSheet} from 'react-native';
import colors from '../../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    minHeight: 60,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: colors.lightGrey,
  },
  textContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
  },
  textSuper: {
    color: colors.grey,
    position: 'relative',
    bottom: 2,
    marginRight: 3,
    fontSize: 12,
  },
  textPrice: {
    color: colors.black,
    fontSize: 16,
    marginRight: 3,
  },
});

export default styles;
