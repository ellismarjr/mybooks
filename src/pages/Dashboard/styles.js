import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  booksListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  booksListHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: '#90CDF4',
    marginTop: 16,
  },
});
