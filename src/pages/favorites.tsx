import React from 'react';
import { PictureCard } from '../components/PictureCard';
import { useLikedPictures } from '../store/liked-context';
import { IPictureCard } from '../types/IPictureCard';

/**
 * This screen is so simple we can dispense with creating
 * whole component and just render images from context's state
 * as all like/unlike functionality is prepared within PictureCard
 */

export default () => {
	const { data } = useLikedPictures();

	return (
		<div className="columns body-columns">
			<div className="column is-half is-offset-one-quarter">
				{data!.map(({ link, insertDate }: IPictureCard) => <PictureCard link={link} insertDate={insertDate} />)}
			</div>
		</div>
	);
};
