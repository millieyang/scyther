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
	mixins: [ParseReact.Mixin],
	getInitialState: function() {
		return {
			isLoading: false,
			validLogin: false,
			message: ''
		};
	},

	observe: function(props, state) {
		var loginQuery = (new Parse.Query('User'));
		loginQuery.equalTo('username', this.username);
		loginQuery.equalTo('password', this.password);
		loginQuery.count({
		  	success: function(count) {
		  		if (count == 1) {
		  			/*
		  			this.setState({
		  				isLoading: false, 
		  				validLogin: true
		  			});
					*/
					console.log("YAY");
		  		}

		  		else if (count == 0) {
		  			/*
		  			this.setState({
		  				isLoading: false,
		  				message: 'Invalid login. Please try again!'
		  			});
					*/
					console.log("NAY");
		  		}

		  		else {
		  			/*
		  			this.setState({
		  				isLoading: false,
		  				message: 'Something is wrong with our database. Please contact us if you see this message!'
		  			});
					*/
					console.log("PRAY");
		  		}
		  	},

		  	error: function(error) {
		  		/*
		  		this.setState({
		  			isLoading: false,
		  			message: 'There was a problem looking up your login: ' + error
		  		});
				*/
				console.log("ERRAY");
		  	}
		});

		console.log("bloopopopopopoppopo");
		console.log(loginQuery);
		return {login: loginQuery};
	},

	onLoginPressed: function() {
		this._executeQuery();
	},

	_executeQuery: function() {
		this.setState({ isLoading: true });
		console.log("bleepbelpbleplbpleblpelbpel");
		console.log(this.data.login);
		this._handleQuery(this.data.login);
	},

	_handleQuery: function(loginQuery) {

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
