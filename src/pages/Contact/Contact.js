import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../hooks';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../global';
import { theme } from '../../theme';
import { Burger, Menu } from '../../components';
import { CSSTransition } from 'react-transition-group';

function Contact() {
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
					<section>
						<h1>Welcome to my contact page.</h1>
					</section>
				</CSSTransition>
			</main>
		</ThemeProvider>
	);
}

export default Contact;
