import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from '../components/Main';
import About from '../components/About';
const Routes = () => {
	return (
		<Switch>
			<Route exact path='/'>
				<Main />
			</Route>
			<Route exact path='/about'>
				<About />
			</Route>
			<Redirect to='/' />
		</Switch>
	);
};
export default Routes;
