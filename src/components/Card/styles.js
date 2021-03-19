import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 5,
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: '900',
  },
});

export default styles;
