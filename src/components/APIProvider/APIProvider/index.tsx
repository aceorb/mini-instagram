import React, { useEffect } from 'react';
import { useAsync, useAsyncFn } from 'react-use';
import { getPictures } from '../../../lib/fetch-api';
import InfiniteScroll from '../../InfiniteScroll';

export default () => {
	// const state = useAsync(async () => await getPictures(16));
	const [ state, fetchMore ] = useAsyncFn(async () => await getPictures(16));
	useEffect(() => {
		fetchMore();
	}, []);
	console.log(state);
	switch (true) {
		case !!state.loading:
			return <div>Loading...</div>;
		case !!state.error:
			return <div>Error: {JSON.stringify(state.error)}</div>;
		case !!state.value:
			// return <InfiniteScroll links={state.value} fetchMore={fetchMore} />;
			return <div>Don't forgot bout me</div>;

		default:
			return <div>Nothing to return</div>;
	}
};
