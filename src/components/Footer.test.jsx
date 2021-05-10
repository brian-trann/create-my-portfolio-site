import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
import myInfo from '../context/myInfo.json';
import MyInfoContext from '../context/MyInfoContext';

// smoke test
it('renders without crashing', () => {
	render(
		<MyInfoContext.Provider value={myInfo}>
			<Footer />
		</MyInfoContext.Provider>
	);
});

// snapshot test
it('matches snapshot', () => {
	const { asFragment } = render(
		<MyInfoContext.Provider value={myInfo}>
			<Footer />
		</MyInfoContext.Provider>
	);
	expect(asFragment()).toMatchSnapshot();
});
