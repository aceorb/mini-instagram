import React from 'react';
import PictureCard from '../components/PictureCard';
import { useLikedPictures } from '../store/liked-context';
import { IPictureCard } from '../types/IPictureCard';

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
