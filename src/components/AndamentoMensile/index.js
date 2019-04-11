import React from 'react';
import MonthsList from '../MonthsList/';
import styles   from './AndamentoMensile.module.scss';
import { isRegExp } from 'util';

class AndamentoMensile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			months: []
		};
		this.handleSelecting 	= this.handleSelecting.bind(this);
		this.handleSelected 	= this.handleSelected.bind(this);
	}
	componentDidMount() {
		fetch('http://staccah.fattureincloud.it/testfrontend/data.json')
			.then(response => response.json())
			.then(data => this.setState({ months: data.mesi }));
	}
	handleSelecting(selectingItems) {
		if(selectingItems.length>1)
		{
			this.setState({
				stateMessage : 'Rilascia il mouse per completare la selezione'
			})
		}
		else
		{
			if(selectingItems.length===1) {
				this.setState({
					stateMessage : 'Trascina per selezionare un intervallo di mesi'
				})
			}
		}
	}

	handleSelected(selectedItems) {
		this.setState({
			stateMessage : ''
		})
	}

	render() {
		return (
			<div className={styles.andamentoMensile}>
				<h1 className={styles.h1}>Andamento mensile</h1>
				<MonthsList months={this.state.months} handleSelecting={this.handleSelecting} handleSelected={this.handleSelected} />
				<div className={styles.statusMessage}>{this.state.stateMessage}</div>
			</div>
		);
	}
}

export { AndamentoMensile as default };
