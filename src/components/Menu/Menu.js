import React from 'react';
import { StyledMenu } from './Menu.styled';
import { Link } from '@reach/router';

const Menu = ({ open }) => {
	return (
		<StyledMenu open={open}>
			<Link className="links" to="/">
				<span role="img" aria-label="home">
					&#x1f3e0;
				</span>
				Home
			</Link>
			<Link className="links" to="/about">
				<span role="img" aria-label="about me">
					&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
				</span>
				About me
			</Link>
			<Link className="links" to="/projects">
				<span role="img" aria-label="projects">
					&#x1f5a5;
				</span>
				Projects
			</Link>
			<Link className="links" to="/contact">
				<span role="img" aria-label="contact">
					&#x1f4e9;
				</span>
				Contact
			</Link>
		</StyledMenu>
	);
};
export default Menu;
