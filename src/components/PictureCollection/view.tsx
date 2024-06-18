import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from '../Spinner';
import { IPictureCollectionView } from './model';
import { PictureCard } from '../PictureCard';
import config from '../../utils/config';

const EndMessage = () => <p className="content--centered">{config.contentEndMessage}</p>;
/**
 * Here we use InfiniteScroll component
 * to lazy-load more images as user progress
 * in scrolling through content
 */

export default ({ fetchMore, data }: IPictureCollectionView) => (
	<div className="columns body-columns">
		<div className="column is-half is-offset-one-quarter">
			<InfiniteScroll
				dataLength={data.length}
				/**
				 * If user is nearing content's
				 * end then run function that will provide more
				 * content: fetchMore will run api call again, then useEffect from component controller
				 * will update the state and this component will render data based on updated state
				 * from controller
				 */
				next={fetchMore}
				hasMore={true}
				loader={<Spinner />}
				endMessage={<EndMessage />}
			>
				{/* Map all data into picture cards */}
				{data.map((link: string, index: number) => {
					console.log('rerender, images count:', data.length);
					return [ <PictureCard id={index + 1} link={link} key={link + index} />, <br /> ];
				})}
			</InfiniteScroll>
		</div>
	</div>
);
