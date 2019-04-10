import React from 'react';
import styles from './Month.module.scss';
class Month extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			documenti: props.documenti,
			importo: props.importo
		};
	}

	componentDidUpdate(prevProps) {
        if(prevProps.documenti !== this.props.documenti || prevProps.importo !== this.props.importo)
		this.setState({
            documenti : this.props.documenti,
            importo : this.props.importo
        });
	}

	getFormattedImporto() {
		return new Intl.NumberFormat('it-IT', {
			style: 'currency',
			currency: 'EUR'
		}).format(this.state.importo);
	}
	render() {
		return (
			<div className="value" />,
			(
				<div className={styles.texts}>
					<div className="documents">{this.state.documenti} doc.</div>
					<div className="importo">{this.getFormattedImporto()}</div>
				</div>
			)
		);
	}
}

export { Month as default };
