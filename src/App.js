import React from 'react';
import { About, Home, Projects, Contact } from './pages';
import { Router } from '@reach/router';

class App extends React.Component {
	render() {
		return (
			<main>
				<Router>
					<Home path="/" />
					<About path="/about" />
					<Projects path="/projects" />
					<Contact path="/contact" />
				</Router>
			</main>
		);
	}
}

export default App;
