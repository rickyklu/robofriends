import React, { Component } from 'react';
import CounterButton from './CounterButton';

export default class Header extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return false;
		// dangerous: component willnever update if returns false
	}

	render() {
		console.log('header render');
		return (
			<div>
				<CounterButton color={'red'} />
				<h1 className="f1">RoboFriends</h1>;
			</div>
		);
	}
}
