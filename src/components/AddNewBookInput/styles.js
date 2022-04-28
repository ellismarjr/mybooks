import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 44,
  },
  input: {
    flex: 1,
    height: 44,
    backgroundColor: '#2C5282',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    paddingHorizontal: 12,
    color: '#CBD5E0',
  },
  button: {
    width: 44,
    height: 44,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: '#0987A0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
