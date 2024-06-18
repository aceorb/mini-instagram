import React from 'react';
import { IPictureCardView } from './model';
import './style.scss';
import config from '../../utils/config';

export default ({ likeButton, link, pictureDescription }: IPictureCardView) => (
	<div className="card card--customized">
		<div className="card-image ">
			<figure className="image is-4by3 ">
				<img className="responsive-img card--insta-image" src={link} alt={config.imageAlt} />
			</figure>
		</div>
		<div className="card-content">
			<div className="level is-mobile">
				<div className="level-left">{likeButton}</div>
				{pictureDescription}
			</div>
		</div>
	</div>
);
