import React from 'react';
import _ 	 from 'underscore';
import Month from '../Month';

class MonthsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			months: props.months.slice(0,12)
		};
	}
	
	componentDidUpdate(prevProps) {
		if(JSON.stringify(prevProps) !== JSON.stringify(this.props))
		{
			this.setState({months : this.props.months.slice(0,12)});
		}
	}

	render() {
		return this.state.months.map((month, index) => (
			<Month 
			documenti={month.documenti} 
			importo={month.importo} 
			monthNumber={index+1}
			key={index+1}
			capacity={month.importo*100/_.max(this.state.months, (m) => m.importo).importo} />
		));
	}
}

export { MonthsList as default };
