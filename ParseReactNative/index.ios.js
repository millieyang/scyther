'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
Parse.initialize(
  "XOupaNFo1xQOg9d5jZ2ebhElmQ3m4naVA48ggVa8",
  "1cMXxkxDXfwOJI48pwhcWtcse4T7C3FO1saVpBir"
);
var {
  AppRegistry,
  StyleSheet,
} = React;

// var CommentBlock = React.createClass({
//   mixins: [ParseReact.Mixin], // Enable query subscriptions

//   observe: function() {
//     // Subscribe to all Comment objects, ordered by creation date
//     // The results will be available at this.data.comments
//     return {
//       comments: (new Parse.Query('Comment')).ascending('createdAt')
//     };
//   },

//   render: function() {
//     // Render the text of each comment as a list item
//     return (
//       <ul>
//         {this.data.comments.map(function(c) {
//           return <li>{c.text}</li>;
//         })}
//       </ul>
//     );
//   }
// });

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
