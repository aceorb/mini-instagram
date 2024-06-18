import React from 'react';
import FeedPage from '../pages/feed';
import FavoritesPage from '../pages/favorites';
interface IRoute {
	path: string;
	title: string;
	page: any;
}

const routes: IRoute[] = [
	{
		path: '/feed',
		title: 'Feedd',
		page: <FeedPage />
	},
	{
		path: '/favorites',
		title: 'Favorites',
		page: <FavoritesPage />
	}
];

export default routes;
