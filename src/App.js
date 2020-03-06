import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';

function App() {
	const [ open, setOpen ] = useState(false);

	return (
		<ThemeProvider theme={theme}>
			<main>
				<GlobalStyles />
				<section>
					<Burger open={open} setOpen={setOpen} />
					<Menu open={open} setOpen={setOpen} />
				</section>
				<section>
					<h1>
						Hello, my name is Callum Goodley and I am a Junior Software Developer. Welcome to my webpage.
					</h1>
				</section>
			</main>
		</ThemeProvider>
	);
}

export default App;
