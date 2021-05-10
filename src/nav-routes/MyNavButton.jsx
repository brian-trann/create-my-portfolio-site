import React from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
const MyNavButton = ({ handleClick, to = '', text = '', target = '' }) => {
	const TARGET = '_blank';
	if (target === TARGET) {
		return (
			<Button
				color='inherit'
				component={Link}
				href={to}
				onClick={handleClick}
				target={target}
			>
				{text}
			</Button>
		);
	} else {
		return (
			<Button
				color='inherit'
				component={NavLink}
				to={to}
				onClick={handleClick}
				target={target}
			>
				{text}
			</Button>
		);
	}
};
export default MyNavButton;
