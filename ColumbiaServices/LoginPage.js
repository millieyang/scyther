'use strict';

var React = require('react-native');
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
		var login = Parse.User.logIn(this.username, this.password, {
			success: function(user) {
				this.validLogin = true;
				console.log("YAY");
			},

			error: function(error) {
				console.log(error);
			}
		});

		return null;

		/*
		var loginQuery = (new Parse.Query('User'));
		loginQuery.equalTo('username', this.username);
		loginQuery.count({
		  	success: function(count) {
		  		if (count == 1) {
					this.count = count;
					console.log("YAY");
		  		}

		  		else if (count == 0) {
					this.count = count;
					console.log("NAY");
		  		}

		  		else {
					this.count = count;
					console.log("PRAY");
		  		}
		  	},

		  	error: function(error) {
				console.log("ERRAY");
		  	}
		});

		console.log("bloopopopopopoppopo");
		console.log(loginQuery);
		return {login: loginQuery};
		*/
	},

	componentDidUpdate: function(prevProps, prevState) {
		console.log("Updating...");
		console.log(prevState.isLoading);
		console.log(this.validLogin);
		if (prevState.isLoading && this.validLogin) {
			this.setState({isLoading: false});
		    this.props.navigator.push({
		        title: 'Tasks',
		        component: Tasks
		    });
		}

		else if (prevState.isLoading && !this.validLogin) {
			this.setState({
				isLoading: false,
				message: "Invalid login; please try again."
			});
		}
	},

	onLoginPressed: function() {
		this._executeQuery();
	},

	_executeQuery: function() {
		
		this.setState({ isLoading: true });
		/*
		console.log("bleepbelpbleplbpleblpelbpel");
		console.log(this.data.login);
		if (this.count == 0) {
			console.log("WAHWAHWAH");
		}
		*/
	},

	render: function() {
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
