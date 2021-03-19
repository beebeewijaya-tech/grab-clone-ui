import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
});

export default styles;
