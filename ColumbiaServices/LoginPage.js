
'use strict';

var React = require('react-native');
var TaskPage = require('./TaskPage');
var Parse = require('parse/react-native');
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


var LoginPage = React.createClass({
	username: '',
	password: '',
	validLogin: false,
	mixins: [ParseReact.Mixin],
	getInitialState: function() {
		return {
			isLoading: false,
			message: ''
		};
	},

	observe: function(props, state) {
		return null;
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

	onLoginPressed: function() {
		this.setState({isLoading: true});
		console.log("Logging in...");
		Parse.User.logIn(this.username, this.password, {
			success: function(user) {
				this.validLogin = true;
				console.log("YAY");
			}.bind(this),

			error: function(error) {
				console.log(error);
			}
		}).then(
			function() {
				if (this.validLogin) {
					this.setState({
						isLoading: false,
						message: ''
					});

					this.props.navigator.replace({
						title: 'Tasks',
						component: TaskPage
					});
				}
			}.bind(this)
		);

		this.setState({
			isLoading: false,
			message: "Invalid login; please try again."
		});
	},

	render: function() {
		console.log("Rendering...");
		var spinner = this.state.isLoading ?
			(<ActivityIndicatorIOS
				hidden='true'
				size='large'/>):
			(<View/>);

		return (	
			<View style={styles.container}>
				<View style={styles.flowRight}>
					<TextInput
						style={styles.loginField}
						placeholder='Username'
						onChangeText={(text) => this.username = text}/>
				</View>

				<View style={styles.flowRight}>
					<TextInput
						style={styles.loginField}
						placeholder='Password'
						onChangeText={(text) => this.password = text}
						secureTextEntry/>
				</View>
				
				<TouchableHighlight style={styles.button}
					onPress={this.onLoginPressed}
					underlayColor='#99d9f4'>
					<Text style={styles.buttonText}>Login</Text>
				</TouchableHighlight>

				{spinner}
		        <Text style={styles.description}>{this.state.message}</Text>

			</View>
		);
	}
});

module.exports = LoginPage;
