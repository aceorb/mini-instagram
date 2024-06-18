import React from 'react';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { INavbar } from './model';
import './style.scss';

export default ({ navButtons, headerTitle, homePath }: INavbar) => (
	<div className="navbar is-inline-flex is-transparent">
		<div className="navbar-brand">
			<a className="navbar-item" href={homePath}>
				<Logo height={30} />
				<span className="navbar--app-title">{headerTitle}</span>
			</a>
		</div>
		{navButtons}
	</div>
);
