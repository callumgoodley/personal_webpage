import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../hooks';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../global';
import { theme } from '../../theme';
import { Burger, Menu } from '../../components';

function Home() {
	const node = useRef();
	useOnClickOutside(node, () => setOpen(false));

	const [ open, setOpen ] = useState(false);

	return (
		<ThemeProvider theme={theme}>
			<main>
				<GlobalStyles />
				<section ref={node}>
					<Burger open={open} setOpen={setOpen} />
					<Menu open={open} setOpen={setOpen} />
				</section>
				<section>
					<h1>
						Hello.<br />
						My name is Callum Goodley and I am a Junior Software Developer.<br />
						Welcome to my webpage.
					</h1>
				</section>
			</main>
		</ThemeProvider>
	);
}

export default Home;
