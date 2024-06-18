import React, { useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import routes from './routes';
import { LikedPicturesProvider } from './store/liked-context';

const appName = 'MiniInstagram';

const App: React.FC = () => {
	return (
		<LikedPicturesProvider>
			<div className="App">
				<Navbar />
				<Router>
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
