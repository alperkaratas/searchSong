import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from '../styles';

const SearchBar = props => {
  return (
    <View style={styles.searchBar.container}>
      <TextInput
        style={styles.searchBar.textInputStyle}
        onChangeText={props.onSearch}
        placeholder="Search for songs..."
        placeholderTextColor="gray"
      />
    </View>
  );
};

export {SearchBar};
