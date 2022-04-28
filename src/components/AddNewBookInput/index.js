import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import {styles} from './styles';

export default function AddNewBookInput({setNewBook, handleNewBook, newBook}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Novo livro"
        placeholderTextColor="#CBD5E0"
        onChangeText={setNewBook}
        value={newBook}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleNewBook}>
        <Feather name="plus" size={20} color="#2C5282" />
      </TouchableOpacity>
    </View>
  );
}
