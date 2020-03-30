import React from 'react';
import { Provider } from 'react-redux';
import Main from './MainRouter';
import store from './src/store';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Main />
			</Provider>
		);
	}
}
