import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';

export default function Header() {
  const [greetings, setGreetings] = useState('');

  function getGreetings() {
    const date = new Date();

    if (date.getHours() < 12) {
      setGreetings('Bom Dia!');
    }
    if (date.getHours() >= 12 && date.getHours() < 18) {
      setGreetings('Boa Tarde!');
    }
    if (date.getHours() >= 18) {
      setGreetings('Boa Noite!');
    }
  }

  useEffect(() => {
    getGreetings();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Oi, Júnior</Text>
      <Text style={styles.greetings}>{greetings}</Text>
    </View>
  );
}
