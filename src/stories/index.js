import React from 'react';

import { storiesOf }                            from '@storybook/react';
import {  withKnobs, object, number, select  }  from '@storybook/addon-knobs';

//import { Welcome }                              from '@storybook/react/demo';
import AndamentoMensile                         from '../components/AndamentoMensile/';
import MonthsList                               from '../components/MonthsList/';
import Month                                    from '../components/Month/';

//storiesOf('Welcome', module).add('to Storybook',        () => <Welcome showApp={linkTo('Button')} />);
storiesOf('AndamentoMensile', AndamentoMensile)
    .add('Default',     () => <AndamentoMensile />);
storiesOf('MonthsList', MonthsList)
    .addDecorator(withKnobs)
    .add('Default',     () => <MonthsList months={object('Mesi', [
        {documenti: 5,importo: 100},
        {documenti: 4,importo: 200},
        {documenti: 3,importo: 300},
        {documenti: 2,importo: 400},
        {documenti: 1,importo: 500}
    ])} />);
storiesOf('Month', Month)
    .addDecorator(withKnobs)
    .add('Default',     () => <Month 
        documenti={number('Documenti', 1)} 
        importo={number('Importo', 20)} 
        capacity={number('Percentuale', 55)} 
        monthNumber={select('Mese',{
            'Gennaio' : 1,
            'Febbraio' : 2,
            'Marzo' : 3,
            'Aprile' : 4,
            'Maggio' : 5,
            'Giugno' : 6,
            'Luglio' : 7,
            'Agosto' : 8,
            'Settembre' : 9,
            'Ottobre' : 10,
            'Novembre' : 11,
            'Dicembre' : 12
        },1)} />)