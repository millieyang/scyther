'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');
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
