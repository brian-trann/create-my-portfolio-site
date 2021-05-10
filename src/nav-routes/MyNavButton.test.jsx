import React from 'react';
import { render } from '@testing-library/react';
import MyNavButton from './MyNavButton';
import MyInfoContext from '../context/MyInfoContext';
import myInfo from '../context/myInfo.json';
import { MemoryRouter } from 'react-router-dom';
// smoke test
it('renders without crashing', () => {
	render(
		<MemoryRouter>
			<MyInfoContext.Provider value={myInfo}>
				<MyNavButton />
			</MyInfoContext.Provider>
		</MemoryRouter>
	);
});

// snapshot test
it('matches snapshot', () => {
	const { asFragment } = render(
		<MemoryRouter>
			<MyInfoContext.Provider value={myInfo}>
				<MyNavButton />
			</MyInfoContext.Provider>
		</MemoryRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});
