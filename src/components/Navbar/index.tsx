import React from 'react';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import routes from '../../routes';
import { IRoute } from '../../types/IRoute';
import colors from '../../utils/colors';
const NavButtons = () => {
	return (
		<div className="navbar-item is-flex-touch">
			{routes.map(({ title, path, icon }: IRoute) => (
				<a className="navbar-item" href={path}>
					<i
						className="material-icons"
						style={{ color: path === window.location.pathname ? colors.blue : 'black' }}
					>
						{icon}
					</i>
				</a>
			))}
		</div>
	);
};

export default () => (
	<div className="navbar is-inline-flex is-transparent">
		<div className="navbar-brand">
			<a className="navbar-item app-title" href="/feed">
				<Logo height="40" />
				<span>mini</span>Instagram
			</a>
		</div>
		<NavButtons />
	</div>
);
