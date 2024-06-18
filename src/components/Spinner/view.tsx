import React from 'react';
import colors from '../../utils/colors';
import './style.scss';
const { Ripple } = require('react-spinners-css');

export default () => (
	<div className="spinner--centering">
		<Ripple color={colors.blue} size={100} />
	</div>
);
