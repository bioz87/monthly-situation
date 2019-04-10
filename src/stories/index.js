import React from 'react';

import { storiesOf }                            from '@storybook/react';
import {  withKnobs, text, boolean, number  }   from '@storybook/addon-knobs';

//import { Welcome }                              from '@storybook/react/demo';
import AndamentoMensile                         from '../components/AndamentoMensile/';
import MonthsList                               from '../components/MonthsList/';
import Month                                    from '../components/Month/';

//storiesOf('Welcome', module).add('to Storybook',        () => <Welcome showApp={linkTo('Button')} />);
storiesOf('AndamentoMensile', AndamentoMensile).add('Default',    () => <AndamentoMensile />);
//storiesOf('MonthsList', module).add('Default',          () => <MonthsList />);
storiesOf('Month', Month)
    .addDecorator(withKnobs)
    .add('Default',             () => <Month documenti={number('Documenti', 1)} importo={number('Importo', 20)} />)