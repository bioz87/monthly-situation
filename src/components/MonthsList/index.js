import React, { Component, createRef } from 'react';
import _ 		from 'underscore';
import Month 	from '../Month';
import styles   from './MonthsList.module.scss';
import { SelectableGroup, createSelectable } from 'react-selectable-fast';

const SelectableMonth = createSelectable(({ selectableRef, selected, selecting, month, capacity, index }) => (
	
	<div ref={selectableRef}>
		<Month
			documenti={month.documenti}
			importo={month.importo}
			monthNumber={index + 1}
			key={selectableRef}
			capacity={capacity}
			status={selecting ? 1 : (selected ? 2 : 0)}
		/>
	</div>
));

class MonthsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			months: props.months.slice(0, 12)
		};
	}

	componentDidUpdate(prevProps) {
		if(JSON.stringify(prevProps) !== JSON.stringify(this.props))
		{
			this.setState({months : this.props.months.slice(0,12)});
		}
	}

	handleSelecting = selectingItems => {
		console.log(selectingItems)
	}

	handleSelectionFinish = selectedItems => {
		console.log(selectedItems);
	}

	handleSelectionClear() {
		console.log('Cancel selection'); // eslint-disable-line no-console
	}

	render() {
		var monthsMaxImporto = _.max(this.state.months, m => m.importo).importo;
		return (
			<SelectableGroup
			ref={ref => (window.selectableGroup = ref)}
			className={styles.list}
			clickClassName="tick"
			tolerance={0}
			deselectOnEsc={false}
			globalMouse={false}
			allowClickWithoutSelected={false}
			duringSelection={this.handleSelecting}
			onSelectionClear={this.handleSelectionClear}
			onSelectionFinish={this.handleSelectionFinish}>
				{this.state.months.map((month, index) => (
					<SelectableMonth
						key={index + 1}
						month={month}
						capacity={month.importo * 100 / monthsMaxImporto}
						index={index}
					/>
				))}
			</SelectableGroup>
		);
	}
}

export { MonthsList as default };
