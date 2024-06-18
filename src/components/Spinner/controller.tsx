import React from 'react';
import View from './view';
import { ISpinner } from './model';

export default (props: ISpinner) => {
	/*
	* No bussines logic is needed for spinner
	* so we can just return the UI part here
	*/
	return <View {...props} />;
};
