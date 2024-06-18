import React from 'react';
import { useLikedPictures } from '../../store/liked-context';
import { IPictureCard } from '../../types/IPictureCard';
import TimeAgo from 'react-timeago';
import colors from '../../utils/colors';
import View from './view';

export interface IPictureCardView {
	likeButton: any;
	link: string;
	pictureDescription: any;
}

const NotLiked = () => <i className="material-icons">favorite_border</i>;
const Liked = () => (
	<i className="material-icons" style={{ color: colors.favoriteRed }}>
		favorite
	</i>
);

export default ({ link, id, insertDate }: IPictureCard) => {
	/**
	 * Here we prepare our UI view component
	 */

	// Consume LIKED PICTURES context
	const { like, unlike, isLiked } = useLikedPictures();

	//Prepare description with conditions - display only present elements
	const description = [
		id != null && <span>Picture #{id}</span>,
		insertDate != null && (
			<span>
				You liked this <TimeAgo date={insertDate} />
			</span>
		)
	];
	//Prepare likeButton variant using context functions - filled or borders only - like or unlike
	const likeButton = isLiked(link) ? (
		<div onClick={() => unlike(link)}>
			<Liked />
		</div>
	) : (
		<div onClick={() => like(link)}>
			<NotLiked />
		</div>
	);

	//Pass all prepared props to UI view of PictureCard
	return <View likeButton={likeButton} link={link} pictureDescription={description} />;
};
