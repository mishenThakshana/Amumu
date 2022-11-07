import {StyleSheet} from 'react-native';
import {colors} from 'src/constants';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.accent,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  sectionTitle: {
    fontFamily: 'UberBold',
    color: colors.primary,
    fontSize: 18,
  },
  sectionLink: {
    fontFamily: 'UberBold',
    color: colors.primary,
    fontSize: 16,
  },
});

export default styles;
