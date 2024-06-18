import React from 'react';
import FeedPage from '../pages/feed';
import FavoritesPage from '../pages/favorites';
import {IRoute} from '../types/IRoute';

const routes: IRoute[] = [
	{
		path: '/feed',
		title: 'Feed',
		page: <FeedPage />,
		icon: 'image'
	},
	{
		path: '/favorites',
		title: 'Favorites',
		page: <FavoritesPage />,
		icon: 'favorite_border'
	}
];

export default routes;
