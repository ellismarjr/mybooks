import React from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import {styles} from './styles';

export default function BooksList({books, handleDeleteBook}) {
  return (
    <FlatList
      style={styles.container}
      data={books}
      keyExtractor={book => book.id}
      renderItem={({item}) => (
        <View style={styles.bookContainer}>
          <Text style={styles.bookTitle}>{item.title}</Text>
          <TouchableOpacity onPress={() => handleDeleteBook(item.id)}>
            <Feather name="trash" size={20} color="#F56565" />
          </TouchableOpacity>
        </View>
      )}
    />
  );
}
