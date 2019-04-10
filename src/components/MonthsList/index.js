import React from 'react';
import Month from '../Month';

class MonthsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			months: props.months
		};
	}
	render() {
		return this.props.months.map((month,index) => (
			<Month 
			documenti={month.documenti} 
			importo={month.importo} 
			key={index} />
		));
	}
}

export { MonthsList as default };
