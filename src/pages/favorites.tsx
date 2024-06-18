import React from 'react';
import { PictureCard } from '../components/PictureCard';
import { useLikedPictures } from '../store/liked-context';
import { IPictureCard } from '../types/IPictureCard';
import routes from '../routes';

/**
 * This screen is so simple we can dispense with creating
 * whole component and just render images from context's state
 * as all like/unlike functionality is prepared within PictureCard
 */

const NoLikes = () => (
	/**
	 * We want to inform the users
	 * that this is page will be empty unless they like something
	 */

	<p className="favorites--description">
		<a href={routes[0].path}>It's empty in here.<br/> Go like some pictures!</a>
	</p>
);

export default () => {
	const { data } = useLikedPictures();

	return (
		<div className="columns body-columns">
			<div className="column is-half is-offset-one-quarter">
				{!!data && data.length > 0 ? (
					data.map(({ link, insertDate }: IPictureCard) => (
						<PictureCard link={link} insertDate={insertDate} />
					))
				) : (
					<NoLikes />
				)}
			</div>
		</div>
	);
};
