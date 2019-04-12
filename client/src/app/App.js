import React, {Component} from 'react';

import {Route, Switch} from 'react-router-dom';

import Header from 'components/Header';
import HomePage from 'containers/Home/HomePage';

import '../index.css';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<div>
					<Switch>
						<Route exact path='/' component={HomePage} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;
