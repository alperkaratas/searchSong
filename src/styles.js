import {StyleSheet, Dimensions, Appearance} from 'react-native';

const userTheme = Appearance.getColorScheme();
const styles = {
  main: StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: userTheme === 'light' ? 'white' : '#37474f',
    },
    fetchButton: {
      color: userTheme === 'light' ? 'black' : 'white',
    },
  }),
  item: StyleSheet.create({
    container: {
      borderRadius: 10,
      margin: 5,
      padding: 10,
      marginTop: 10,
      backgroundColor: userTheme === 'light' ? '#eceff1' : 'gray',
    },
    songName: {
      fontSize: 25,
      fontWeight: 'bold',
      color: userTheme === 'light' ? 'black' : 'white',
      margin: 3,
    },
    artistName: {
      color: userTheme === 'light' ? 'black' : '#f1f1f1',
      margin: 3,
      fontSize: 19,
    },
    image: {
      height: Dimensions.get('window').height / 2,
      resizeMode: 'contain',
    },
  }),
  searchBar: StyleSheet.create({
    container: {
      backgroundColor: userTheme === 'light' ? '#f1f1f1' : '#fff3e0',
      margin: 10,
      padding: 5,
      borderRadius: 10,
      shadowOpacity: 0.2,
      height: Dimensions.get('window').height / 23,
    },
    textInputStyle: {
      fontSize: 20,
      justifyContent: 'center',
      paddingLeft: 30,
      color: 'black',
    },
  }),
};

export default styles;
