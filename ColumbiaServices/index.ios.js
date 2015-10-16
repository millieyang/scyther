/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 'use strict';

 var React = require('react-native');
 var SearchPage = require('./SearchPage');
// var MOCKED_MOVIES_DATA = [
//   {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
// ];
var {
  AppRegistry,
  StyleSheet,
} = React;

var SearchPage = require('./SearchPage');

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

var ColumbiaServiesApp = React.createClass({
  render: function() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
});