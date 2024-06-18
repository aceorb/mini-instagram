import React, { useEffect, useState } from 'react';
import { useAsyncFn } from 'react-use';
import { getPictures } from '../../lib/fetch-api';
import View from './view';

export default () => {
	const [ state, setState ] = useState([]);
	/**
	 * use asynchronous function with help from react-use lib
	 */
	const [ fetchState, fetchMore ] = useAsyncFn(async () => await getPictures(10));

	const updateState = () => {
		/**
		 * Additional protection before we update state
		 * Here we check if data was returned successfuly
		 */
		if (fetchState.value != null && fetchState.value.length > 0) {
			//merge new data with previous state
			setState((s) => s.concat(fetchState.value));
		}
	};

	useEffect(() => {
		/**
		 * Here we fetch first batch on component mount
		 */
		fetchMore();
	}, []);

	useEffect(
		/**
		 * Here we updateState every time fetch finishes loading data
		 * to prevent falling into loop
		 */
		() => {
			updateState();
		},
		[ fetchState.loading ]
	);

	/**
	 * Render UI view with data and handler function to fetching more
	 */
	return <View fetchMore={fetchMore} data={state} />;
};
