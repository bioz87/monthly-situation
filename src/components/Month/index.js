import React    from 'react';
import _        from 'underscore';
import styles   from './Month.module.scss';
class Month extends React.Component {
    
    static get monthsList() { 
        return [
            'Gennaio',
            'Febbraio',
            'Marzo',
            'Aprile',
            'Maggio',
            'Giugno',
            'Luglio',
            'Agosto',
            'Settembre',
            'Ottobre',
            'Novembre',
            'Dicembre'
        ]; 
    }

	constructor(props) {
		super(props);
		this.state = props;
    }
    
    getMonthName() {
        if(this.state.monthNumber>0 && this.state.monthNumber<Month.monthsList.length+1)
        {
            return Month.monthsList[this.state.monthNumber-1];
        }
        else
        {
            return '';
        }
    }

	componentDidUpdate(prevProps) {
		if (
            prevProps.documenti     !== this.props.documenti        || 
            prevProps.importo       !== this.props.importo          || 
            prevProps.monthNumber   !== this.props.monthNumber      ||
            prevProps.capacity      !== this.props.capacity
        ) {
			this.setState(_.extend({},this.props));
		}
	}

	getFormattedImporto() {
		return new Intl.NumberFormat('it-IT', {
			style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
		}).format(this.state.importo);
    }
    getCapacity() {
        if(this.state.capacity>100)
            return 100;
        if(this.state.capacity<0)
            return 0;
        return this.state.capacity;
    }
	render() {
		return (
            <div className={styles.box}>
                <div className={styles.upSection}>
                    <div className={styles.monthName}>{this.getMonthName()}</div>
                </div>
                <div className={styles.bottomSection}>
                    <div className={styles.capacityLevel} style={{height: this.getCapacity()+'%'}}/>
                    <div className={styles.textsBlock}>
                        <div className={styles.textDocuments}>{this.state.documenti} doc.</div>
                        <div className={styles.textImporto}>{this.getFormattedImporto()}</div>
                    </div>
                </div>
            </div>
		);
	}
}

export { Month as default };
