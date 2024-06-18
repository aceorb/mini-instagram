import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { LikedPicturesProvider } from './store/liked-context';
import { Navbar } from './components/Navbar';
import routes from './routes';
import config from './utils/config';

const App: React.FC = () => (
	// Wrap all children in liked pictures context provider
	<LikedPicturesProvider>
		<div className="container is-fluid">
			<Router>
				{/* Add navbar */}
				<Navbar />
				<Switch>
					{/**
					* Map all routes to the the route component
					* Add dynamic document title based on current route
					*/}
					{routes.map((element) => {
						document.title = `${element.title} | ${config.appName}`;
						return <Route key={element.title} exact path={element!.path} children={element!.page} />;
					})}
					<Redirect from="/" to="/feed" />
				</Switch>
			</Router>
		</div>
	</LikedPicturesProvider>
);

export default App;
