import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAsyncFn } from 'react-use';
import { getPictures } from '../../lib/fetch-api';

export default () => {
	const [ state, setState ] = useState([]);

	const [ fetchState, fetchMore ] = useAsyncFn(async () => await getPictures(100));

	const updateState = () => {
		if (fetchState.value != null && fetchState.value.length > 0) {
			setState((s) => s.concat(fetchState.value));
		}
	};

	useEffect(() => {
		fetchMore();
	}, []);

	useEffect(
		() => {
			updateState();
		},
		[ fetchState.value ]
	);

	return (
		<InfiniteScroll
			dataLength={state.length} //This is important field to render the next data
			next={fetchMore}
			hasMore={true}
			loader={<h4>Loading...</h4>}
			endMessage={
				<p style={{ textAlign: 'center' }}>
					<b>Yay! You have seen it all</b>
				</p>
			}
			refreshFunction={fetchMore}
			pullDownToRefresh={true}
			pullDownToRefreshContent={<h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>}
			releaseToRefreshContent={<h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>}
		>
			{
				<div className="picture--showcase">
					{state.map((link: string, index: number) => {
						console.log('items', state.length);
						return [ <img key={index} src={link} alt="dog" width={500} />, <b>{index}</b>, <br /> ];
					})}
				</div>
			}
		</InfiniteScroll>
	);
};
