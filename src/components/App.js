import React from 'react';
import './css/App.css'
import Login from './Login';
import SearchSongs from './SearchSongs.js';
import SearchAlbum from './SearchAlbum.js'
import SearchArtist from './SearchArtist.js'
import UserPage from './UserPage'
import History from './history';

import { CookiesProvider } from 'react-cookie';
import { Router, Route, Switch } from 'react-router-dom';
import { withCookies } from 'react-cookie';

// App a modifié. Route à créer avec historique, sidebar sera call par les composants de page et non pas par App.js
class App extends React.Component {
	render () {
		return (
			<CookiesProvider>
				<Router history={History}>
					<Switch>
						<Route exact path="/(|login)" component={Login}/>
						<Route path="/searchsongs" component={SearchSongs}/>
						<Route path="/searchalbum" component={SearchAlbum}/>
						<Route path="/searchartist" component={SearchArtist}/>
						<Route path="/userprofile" component={UserPage}/>
					</Switch>
				</Router>
			</CookiesProvider>
		);
	}
}

export default withCookies(App);
