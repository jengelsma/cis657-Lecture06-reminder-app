import { FlatList, StyleSheet, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const items = [
    { text: "get groceries", done: false },
    { text: "feed dog", done: false },
    { text: "take out trash", done: false },
  ];

const RemindersScreen = ( { route, navigation}) => {

  const [reminders, setReminder] = useState(items);

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        onPress={ () => {
          navigation.navigate('AddReminder');
        }}
      >
        <Feather style={{marginRight: 10 }} name="edit" size={24} />
      </TouchableOpacity>
    ),
  });

  return (
    <FlatList
      keyExtractor={(item) => item.text}
      data={reminders}
      renderItem={({ index, item }) => {
        return(
          <Text> {item.text} </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({

});

export default RemindersScreen;
