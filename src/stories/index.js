import React from 'react';

import { storiesOf }                        from '@storybook/react';
import { linkTo }                           from '@storybook/addon-links';

import { Welcome }                          from '@storybook/react/demo';
import AndamentoMensile                     from '../components/AndamentoMensile.js';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
storiesOf('AndamentoMensile', module).add('Default', () => <AndamentoMensile />);