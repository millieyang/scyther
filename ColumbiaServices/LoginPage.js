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
	mixins: [ParseReact.Mixin],
	getInitialState: function() {
		return {
			query :{
				username: '',
				password: ''
			},
			isLoading: false,
			validLogin: false,
			message: ''
		};
	},

	onLoginPressed: function() {
		this._executeQuery();
	},

	// onUsernameChanged:function(event){
	//  	this.setState({query.username: event.nativeEvent.text});
	// },

	// onPasswordChanged:function(event){
	//  	this.setState({query.password: event.nativeEvent.text});
	// },
	observe: function(props, state){
		var loginQuery = (new Parse.Query('User'))
			.containsAll(state.query.username)
			.containsAll(state.query.password);
		return state.isLoading ? {login: loginQuery} : null;
	},


	_executeQuery: function(query) {
		this.setState({ isLoading: true });
		
		this._handleQuery(this.data.login);
	},

	_handleQuery: function(loginQuery) {
	  loginQuery.count({
	  	success: function(number) {
	  		if (number == 1) {
	  			this.setState({
	  				isLoading: false, 
	  				validLogin: true
	  			});
	  		}

	  		else if (number == 0) {
	  			this.setState({
	  				isLoading: false,
	  				message: 'Invalid login. Please try again!'
	  			});
	  		}

	  		else {
	  			this.setState({
	  				isLoading: false,
	  				message: 'Something is wrong with our database. Please contact us if you see this message!'
	  			});
	  		}
	  	},

	  	error: function(error) {
	  		this.setState({
	  			message: 'There was a problem looking up your login: ' + error
	  		});
	  	}
	  });

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
    					placeholder = 'Username'
    					value = {this.state.query.username}
    					onChangeText={(text) => this.setState({text})}/>
				</View>

				<View style={styles.flowRight}>
					<TextInput
						style={styles.loginField}
						placeholder='Password'
						value={this.state.query.password}
						onChangeText={(text) => this.setState({text})}/>
				</View>

				<TouchableHighlight style={styles.button}
					onPress={this.onLoginPressed}
					underlayColor='#99d9f4'>
				<Text style={styles.buttonText}>Login</Text>
				</TouchableHighlight>
			</View>
		);
	}


});

module.exports = LoginPage;

