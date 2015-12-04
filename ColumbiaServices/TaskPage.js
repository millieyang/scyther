'use strict';
// var Button = require('react-native-button');
var React = require('react-native');
var Parse = require('parse/react-native');
var TaskView = require('./TaskView');
var ParseReact = require('parse-react/react-native');
var {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableHighlight,
	ActivityIndicatorIOS,
	Image,
} = React;

var styles = StyleSheet.create({
	description: {
		marginBottom: 20,
		fontSize: 18,
		textAlign: 'center',
		color: '#656565'
	},
	container: {
		padding: 30,
		marginTop: 65,
		alignItems: 'center'
	},
	flowRight: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'stretch'
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
		alignSelf: 'center'
	},
	button: {
		height: 36,
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#48BBEC',
		borderColor: '#48BBEC',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'
	},
	loginField: {
		height: 36,
		padding: 4,
		marginRight: 5,
		flex: 4,
		fontSize: 18,
		borderWidth: 1,
		borderColor: '#48BBEC',
		borderRadius: 8,
		color: '#48BBEC'
	},
	image: {
		width: 217,
		height: 138
	}
});


var TaskPage = React.createClass({
	// username: '',
	// password: '',
	// validLogin: false,
	//need to not load user who is using the app
	mixins: [ParseReact.Mixin],
	// getInitialState: function() {
	// 	return {
	// 		isLoading: true,
	// 		message: ''
	// 	};
	// },
	getInitialState: function() {
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.id !== r2.id});
    return {
      dataSource: dataSource.cloneWithRows(this.props.task)
    };
  },

    rowPressed: function(taskid) {
    var property = this.props.task
      .filter(prop => prop.id === taskid)[0];
  },
	// observe: function(props, state) {
	// 	return null;
	// },

	_handlePress(event) {
		console.log('Clicked accept!');
	},


	/*
	componentDidUpdate: function(prevProps, prevState) {
		console.log("Updating...");
		console.log(prevState.isLoading);
		console.log(this.validLogin);
		if (prevState.isLoading && this.validLogin) {
			this.setState({isLoading: false});
		    this.props.navigator.push({
		        title: 'Tasks',
		        component: Tasks,
		    });
		}
	},
	*/

	// onLoginPressed: function() {
	// 	this.setState({isLoading: true});
	// 	console.log("Logging in...");
	// 	Parse.User.logIn(this.username, this.password, {
	// 		success: function(user) {
	// 			this.validLogin = true;
	// 			console.log("YAY");
	// 		}.bind(this),

	// 		error: function(error) {
	// 			console.log(error);
	// 		}
	// 	}).then(
	// 	function() {
	// 		if (this.validLogin) {
	// 			this.setState({
	// 				isLoading: false,
	// 				message: ''
	// 			});

	// 			this.props.navigator.replace({
	// 				title: 'Tasks',
	// 				component: Tasks
	// 			});
	// 		}
	// 	}.bind(this)
	// 	);

	// 	this.setState({
	// 		isLoading: false,
	// 		message: "Invalid login; please try again."
	// 	});
	// },


	renderRow: function(rowData, sectionID, rowID) {
		return (
			<TouchableHighlight onPress={() => this.rowPressed(rowData.id)}
			underlayColor='#dddddd'>
			<View>
			<View style={styles.rowContainer}>
			<Text style={styles.description}>HELLO</Text>
			<Text style={styles.description}>${rowData.name}</Text>
			<Text style={styles.description}>${rowData.reqPersonName}</Text>
			<Text style={styles.description}>${rowData.reqPersonContactNum}</Text>
			<Text style={styles.title}
			numberOfLines={1}>{rowData.title}</Text>
			</View>
			</View>
			<View style={styles.separator}/>
			</View>
			</TouchableHighlight>
			);
	},

	// render: function() {
	// 	console.log("Rendering...");
	// 	var spinner = this.state.isLoading ?
	// 	(<ActivityIndicatorIOS
	// 		hidden='true'
	// 		size='large'/>):
	// 	(<View/>);
	// 	var request = this.props.property;

	// 	return (	
	// 		<View style={styles.container}>
	// 		<Button
	// 		style={{fontSize: 20, color: 'green'}}
	// 		styleDisabled={{color: 'red'}}
	// 		onPress={this._handlePress}>
	// 		Accept
	// 		</Button>
	// 		</View>
	// 		);
	// }

	render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}/>
    );
  }
});

module.exports = TaskPage;
