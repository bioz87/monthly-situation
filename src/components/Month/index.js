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
        this.timeoutId = setTimeout(function () {
            this.setState({animated: true});
        }.bind(this), 300);
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutId);
    }

	componentDidUpdate(prevProps) {
		if (
            prevProps.documenti     !== this.props.documenti        || 
            prevProps.importo       !== this.props.importo          || 
            prevProps.monthNumber   !== this.props.monthNumber      ||
            prevProps.capacity      !== this.props.capacity         ||
            prevProps.status        !== this.props.status
        ) {
			this.setState(_.extend({},this.props));
		}
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
        return !this.state.animated ? 0 : this.state.capacity;
    }

    getStatus() {
        let status = '';
        switch(this.state.status) {
            case 0: status = ''; break;
            case 1: status = styles.selecting; break;
            case 2: status = styles.selected; break;
            default: status = '';
        }
        return status;
    }

	render() {
		return (
            <div className={[styles.box, this.getStatus()].join(' ')} onPointerDown={this.onMouseDown}>
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
