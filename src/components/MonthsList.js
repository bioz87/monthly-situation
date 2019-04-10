import React from 'react';
import Month from './Month.js';

class MonthsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			months: props.months
		};
	}
	render() {
		return this.props.months.map((month,index) => (<Month value={month} key={index} />));
	}
}

export { MonthsList as default };
