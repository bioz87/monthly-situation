import React from 'react';
import MonthsList from './MonthsList.js';

class AndamentoMensile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			months: []
		};
	}
	componentDidMount() {
		fetch('http://staccah.fattureincloud.it/testfrontend/data.json')
			.then(response => response.json())
			.then(data => this.setState({ months: data.mesi }));
	}
	render() {
		return (<MonthsList months={this.state.months} />);
	}
}

export { AndamentoMensile as default };
