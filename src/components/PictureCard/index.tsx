import React from 'react';
import { useLikedPictures } from '../../store/liked-context';
import { IPictureCard } from '../../types/IPictureCard';
import TimeAgo from 'react-timeago';
import colors from '../../utils/colors';

const NotLiked = () => <i className="material-icons">favorite_border</i>;
const Liked = () => (
	<i className="material-icons" style={{ color: colors.favoriteRed }}>
		favorite
	</i>
);

export default ({ link, id, insertDate }: IPictureCard) => {
	const { like, unlike, isLiked } = useLikedPictures();
	return (
		<div className="card card--customized" key={link + id}>
			<div className="card-image ">
				<figure className="image is-4by3 ">
					<img className="responsive-img insta-image" src={link} alt="dog" />
				</figure>
			</div>
			<div className="card-content">
				<div className="level is-mobile">
					<div className="level-left">
						{isLiked(link) ? (
							<div onClick={() => unlike(link)}>
								<Liked />
							</div>
						) : (
							<div onClick={() => like(link)}>
								<NotLiked />
							</div>
						)}
					</div>
					{id != null && <span>Picture #{id}</span>}
					{insertDate != null && (
						<span>
							You liked this <TimeAgo date={insertDate} />
						</span>
					)}
				</div>
			</div>
		</div>
	);
};
