import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { LikedPicturesProvider } from './store/liked-context';
import './App.css';
import Navbar from './components/Navbar';
import routes from './routes';

const appName = 'MiniInstagram';

const App: React.FC = () => {
	return (
		<LikedPicturesProvider>
			<div className="container is-fluid">
				<Router>
					<Navbar />
					<Switch>
						{routes.map((element) => {
							document.title = `${element.title} | ${appName}`;
							return <Route key={element.title} exact path={element!.path} children={element!.page} />;
						})}
						<Redirect from="/" to="/feed" />
					</Switch>
				</Router>
			</div>
		</LikedPicturesProvider>
	);
};

export default App;
