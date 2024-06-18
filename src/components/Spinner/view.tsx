import React from 'react';
import colors from '../../utils/colors';
import './style.scss';
import { ISpinner } from './model';
const { Ripple } = require('react-spinners-css');

export default ({ color = colors.blue, size = 100 }: ISpinner) => (
	<div className="spinner--centering">
		<Ripple color={color} size={size} />
	</div>
);
