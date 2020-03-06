import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../hooks';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../global';
import { theme } from '../../theme';
import { Burger, Menu } from '../../components';
import { CSSTransition } from 'react-transition-group';

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
				<CSSTransition in={true} appear={true} timeout={1500} classNames="fade">
					<h1>
						Hello.<br />
						<br />
						My name is Callum Goodley and I am a Junior Software Developer.<br />
						<br />
						Welcome to my webpage.
						<h2 role="img" aria-label="home emoji">
							&#x1f468;&#x1f3fb;&#x200d;&#x1f4bb;
						</h2>
					</h1>
				</CSSTransition>
				<foot class="foot">
					<text>Social media</text>
				</foot>
			</main>
		</ThemeProvider>
	);
}

export default Home;
