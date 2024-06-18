import React from 'react';
import { useAsync } from 'react-use';
import { getPictures } from '../../../lib/fetch-api';

export default () => {
	const state = useAsync(async () => await getPictures(16));

	console.log(state);
	switch (true) {
		case !!state.loading:
			return <div>Loading...</div>;
		case !!state.error:
			return <div>Error: {JSON.stringify(state.error)}</div>;
		case !!state.value:
			return (
				<div className="picture--showcase">
					{state.value.map((link: string) => {
						console.log('link', link);
						return <img src={link} alt="dog" width={500} />;
					})}
				</div>
			);
		default:
			return <div>Nothing to return</div>;
	}
};
