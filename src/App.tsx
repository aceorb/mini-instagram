import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import routes from './routes';

const App: React.FC = () => {
	return (
		<div className="App">
			<Router>
				{/* <Navigation /> */}

				<Switch>
					{routes.map((element) => (
						<Route key={element.title} exact path={element!.path} children={element!.page} />
					))}
					<Redirect from="/" to="/feed" />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
