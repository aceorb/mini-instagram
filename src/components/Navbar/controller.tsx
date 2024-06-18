import React from 'react';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import routes from '../../routes';
import { IRoute } from '../../types/IRoute';
import colors from '../../utils/colors';
import { useLikedPictures } from '../../store/liked-context';
import View from './view';
import config from '../../utils/config';

export default () => {
	const { data } = useLikedPictures();

	const navButtons = (
		<div className="navbar-item is-flex-touch">
			{routes.map(({ title, path, icon }: IRoute) => (
				<a className="navbar-item" href={path}>
					<i
						className="material-icons"
						/**
						 * distinct icon with color if current route is the one provided in href
						 */
						style={{ color: path === window.location.pathname ? colors.blue : 'black' }}
					>
						{icon}
					</i>
					{title === routes[1].title && <sup className="navbar--liked-count">{data!.length}</sup>}
				</a>
			))}
		</div>
	);

	return <View navButtons={navButtons} headerTitle={config.appName} homePath={routes[0].path} />;
};
