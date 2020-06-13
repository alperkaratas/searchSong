/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Button,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {Item, SearchBar} from './components';
import styles from './styles';

const Main = () => {
  const [originalList, setoriginalList] = useState([]);
  const [myList, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    let response = await axios(
      'https://rallycoding.herokuapp.com/api/music_albums',
    );
    setList(response.data);
    setoriginalList(response.data);
    setLoading(false);
  };
  const renderSongs = ({item}) => {
    return <Item data={item} />;
  };

  const searchSong = text => {
    let filteredList = originalList.filter(item => {
      const itemData = item.title.toUpperCase();
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    setList(filteredList);
  };

  return (
    <SafeAreaView style={styles.main.container}>
      <View style={{flex: 1}}>
        <SearchBar onSearch={searchSong} />
        {loading ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="red" />
          </View>
        ) : (
          <FlatList
            data={myList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderSongs}
          />
        )}
        <Button
          style={styles.main.fetchButton}
          title="Fetch Data "
          onPress={fetchData}
        />
      </View>
    </SafeAreaView>
  );
};
export default Main;
