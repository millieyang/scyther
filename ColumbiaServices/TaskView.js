'use strict';
var Button = require('react-native-button');
var React = require('react-native');
var {
  StyleSheet,
  Image,
  View,
  Text,
} = React;

var styles = StyleSheet.create({
  container: {
    marginTop: 65
  },
  heading: {
    backgroundColor: '#F8F8F8',
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: 400,
    height: 300
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  }
});

var TaskView = React.createClass({  
  render: function() {
    var task = this.props.task;

    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.price}>${task.name}</Text>
          <View style={styles.separator}/>
        </View>
        <Text style={styles.title}>{task.reqPersonName}</Text>
        <Text style={styles.title}>{task.reqPersonContactNumber}</Text>
        <Text style={styles.description}>{task.summary}</Text>
        <Button style={{fontSize: 20, color: 'green'}} styleDisabled={{color: 'red'}} onPress={this._handlePress}>
        Accept
        </Button>
      </View>
    );
  }
});

module.exports = TaskView;
