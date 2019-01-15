import React from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class SearchResultsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.search}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.cancelBtn}>Cancel</Text>
            <Text style={styles.searchBtn}>Search</Text>
          </View>
        </View>
        <ScrollView style={styles.container, styles.pad}>
          <Text style={styles.title}>Search Results</Text>

          <View style={styles.result}>
            <Text style = {styles.subtitle}>1. White Horse Tavern - Financial District</Text>
            <Image source={
              require('../assets/images/yelp_ratings.jpg')} style={styles.image}
              resizeMode='contain'
            />
            <Text style = {styles.normal}>25 Bridge St, Financial District</Text>
            <Text style = {styles.normal}>10 items</Text>
            <View style={styles.line}/>
          </View>

          <View style={styles.result}>
            <Text style = {styles.subtitle}>2. Shake Shack</Text>
            <Image source={
              require('../assets/images/yelp_ratings.jpg')} style={styles.image}
              resizeMode='contain'
            />
            <Text style = {styles.normal}>25 Bridge St, Financial District</Text>
            <Text style = {styles.normal}>10 items</Text>
            <View style={styles.line}/>
          </View>

          <View style={styles.result}>
            <Text style = {styles.subtitle}>3. The Ainsworth - FiDi</Text>
            <Image source={
              require('../assets/images/yelp_ratings.jpg')} style={styles.image}
              resizeMode='contain'
            />
            <Text style = {styles.normal}>25 Bridge St, Financial District</Text>
            <Text style = {styles.normal}>10 items</Text>
            <View style={styles.line}/>
          </View>

        </ScrollView>
        <Button
          title="Go to back to home screen"
          onPress={() => navigate('Home')}
        />
      </View>
    );
  }
}

const GREEN = '#3e8914';
const BLACK = '#000000';
const WHITE = '#FFFFFF';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pad: {
    padding: 15,
  },
  search: {
    backgroundColor: GREEN,
    padding: 10,
    paddingTop: 30
  },
  cancelBtn: {
    color: '#fff',
    fontSize: 10,
    flex: 1
  },
  searchBtn: {
    color: '#fff',
    fontSize: 10,
    flex: 1,
    alignSelf: 'flex-end'
  },
  title: {
    textAlign: 'center',
    color: GREEN,
    fontSize: 25,
    margin: 10,
    fontWeight: 'bold'
  },
  result: {
    backgroundColor: WHITE,
    height: 150,
    marginTop: 5,
    marginBottom: 5
  },
  subtitle: {
    textAlign: 'left',
    color: BLACK,
    fontSize: 18,
    margin: 10,
    fontWeight: 'normal'
  },
  normal: {
    textAlign: 'left',
    color: BLACK,
    fontSize: 12,
    margin: 10,
    fontWeight: 'normal'
  },
  image: {
    flex:1,
    height: undefined,
    width: undefined,
  },
  line:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
});