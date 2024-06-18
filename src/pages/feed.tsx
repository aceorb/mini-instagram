import React from 'react';
import { useAsync } from 'react-use';
import { getPictures } from '../lib/fetch-api';

const Pictures = () => {
	const state = useAsync(async () => await getPictures());

	console.log(state);
	switch (true) {
		case !!state.loading:
			return <div>Loading...</div>;
		case !!state.error:
			return <div>Error: {JSON.stringify(state.error)}</div>;
		case !!state.value:
			return <div>Value: {JSON.stringify(state.value,null,2)}</div>;
		default:
			return <div>Nothing to return</div>;
	}
};

export default () => (
	<div>
		Feed
		<br />
		<Pictures />
	</div>
);
