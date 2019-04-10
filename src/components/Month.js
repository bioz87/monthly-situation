import React from 'react';
import styles from "./Month.module.scss";
console.log(styles);
class Month extends React.Component {
    constructor(props) {
        super(props);
		this.state = {
			documenti: props.value.documenti,
			importo: props.value.importo,
        };
    }
    getFormattedImporto() {
        return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumSignificantDigits: 1 }).format(this.state.importo);
    }
	render() {
		return (
                <div className="value"></div>,
                <div className={styles.texts}>
                    <div className="documents">{this.state.documenti} doc.</div>
                    <div className="importo">{this.getFormattedImporto()}</div>
                </div>
		);
	}
}

export { Month as default };
