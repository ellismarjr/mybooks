import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import AddNewBookInput from '../../components/AddNewBookInput';
import BooksList from '../../components/BooksList';

import {styles} from './styles';

export default function Dashboard() {
  const [newBook, setNewBook] = useState('');
  const [books, setBooks] = useState([]);

  const handleNewBook = () => {
    const newBookData = {
      id: books.length + 1,
      title: newBook,
    };

    setBooks(prevState => [...prevState, newBookData]);
    setNewBook('');
  };

  function handleDeleteBook(id) {
    const booksFiltered = books.filter(book => book.id !== id);
    setBooks(booksFiltered);
  }

  return (
    <View style={styles.container}>
      <AddNewBookInput
        setNewBook={setNewBook}
        handleNewBook={handleNewBook}
        newBook={newBook}
      />

      <View style={styles.booksListHeader}>
        <Text style={styles.booksListHeaderText}>Livros lidos</Text>
        <Text style={styles.booksListHeaderText}>{books.length}</Text>
      </View>

      {books.length > 0 ? (
        <BooksList books={books} handleDeleteBook={handleDeleteBook} />
      ) : (
        <View style={styles.empty}>
          <Feather name="alert-circle" size={80} color="#BEE3F8" />
          <Text style={styles.emptyText}>
            Tá na hora de ler um livro novo, que tal!?
          </Text>
        </View>
      )}
      <Text>{newBook}</Text>
    </View>
  );
}
