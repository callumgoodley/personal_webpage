import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../hooks';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../global';
import { theme } from '../../theme';
import { Burger, Menu } from '../../components';
import { CSSTransition } from 'react-transition-group';

function About() {
	const node = useRef();
	useOnClickOutside(node, () => setOpen(false));

	const [ open, setOpen ] = useState(false);
	const [ pageAppear, setPageAppear ] = useState(true);

	return (
		<ThemeProvider theme={theme}>
			<main>
				<GlobalStyles />
				<section ref={node}>
					<Burger open={open} setOpen={setOpen} />
					<Menu open={open} setOpen={setOpen} />
				</section>
				<CSSTransition in={pageAppear} appear={true} timeout={1500} classNames="fade">
					<section>
						<h1>Welcome to my about.</h1>
					</section>
				</CSSTransition>
			</main>
		</ThemeProvider>
	);
}

export default About;
