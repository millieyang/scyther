'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');
var Parse = require('parse').Parse;
Parse.initialize(
  'XOupaNFo1xQOg9d5jZ2ebhElmQ3m4naVA48ggVa8',
  '1cMXxkxDXfwOJI48pwhcWtcse4T7C3FO1saVpBir'
);
var {
  AppRegistry,
  StyleSheet,
} = React;


var PropertyFinderApp = React.createClass({
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

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinderApp);
