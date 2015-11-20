'use strict';

var React = require('react-native');
var LoginPage = require('./LoginPage');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
Parse.initialize(
  "ZMvu44Kw2YdxPJRXQXikrgXZxbaQIGbZO9AdYuaB",
  "PLdqLMI8dtZEpCM4VLFGK7DGC0Wf8SNle76xG1X5"
);
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var ColumbiaServices = React.createClass({
  render: function() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Login',
          component: LoginPage,
        }}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('ColumbiaServices', () => ColumbiaServices);
