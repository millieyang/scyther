/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 'use strict';

 var React = require('react-native');
// var MOCKED_MOVIES_DATA = [
//   {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
// ];
var {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} = React;

var SearchPage = require('./SearchPage');

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class ColumbiaServices extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Columbia Services',
          component: SearchPage,
        }}/>
    );
  }
}
  React.AppRegistry.registerComponent('ColumbiaServices', function(){return ColumbiaServices});
