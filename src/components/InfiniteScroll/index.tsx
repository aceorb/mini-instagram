import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAsyncFn } from 'react-use';
import { getPictures } from '../../lib/fetch-api';
import PictureCard from '../PictureCard';
import { Spinner } from '../Spinner';



export default () => {
	const [ state, setState ] = useState([]);
	const [ fetchState, fetchMore ] = useAsyncFn(async () => await getPictures(10));

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
		[ fetchState.loading ]
	);

	return (
		<div className="columns body-columns">
			<div className="column is-half is-offset-one-quarter">
				<InfiniteScroll
					dataLength={state.length}
					next={fetchMore}
					hasMore={true}
					loader={<Spinner />}
					endMessage={
						<p className="content--centered">
							<b>You are up to date</b>
						</p>
					}
				>
					{state.map((link: string, index: number) => {
						console.log('rerender, images count:', state.length);
						return [ <PictureCard id={index + 1} link={link} key={link + index} />, <br /> ];
					})}
				</InfiniteScroll>
			</div>
		</div>
	);
};
