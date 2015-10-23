'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');
var Parse = require('parse').Parse;
var {
  AppRegistry,
  StyleSheet,
} = React;
Parse.initialize(
  'eVKSrPoIBkd5jxGdDsHeukksJVvxuXjGLbqJjOmO',
  '90cjmzBTEh1VqHyf2df9kcjJixGhuI6SNbEKlnje'
);

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
