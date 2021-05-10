import React from 'react';
import { render } from '@testing-library/react';
import NavBar from './NavBar';
import myInfo from '../context/myInfo.json';
import MyInfoContext from '../context/MyInfoContext';
import { MemoryRouter } from 'react-router-dom';

// smoke test
it('renders without crashing', () => {
	render(
		<MemoryRouter>
			<MyInfoContext.Provider value={myInfo}>
				<NavBar />
			</MyInfoContext.Provider>
		</MemoryRouter>
	);
});

// snapshot test
it('matches snapshot', () => {
	const { asFragment } = render(
		<MemoryRouter>
			<MyInfoContext.Provider value={myInfo}>
				<NavBar />
			</MyInfoContext.Provider>
		</MemoryRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});
