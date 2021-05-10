import React from 'react';
import { render } from '@testing-library/react';
import Main from './Main';
import myInfo from '../context/myInfo.json';
import MyInfoContext from '../context/MyInfoContext';

// smoke test
it('renders without crashing', () => {
	render(
		<MyInfoContext.Provider value={myInfo}>
			<Main />
		</MyInfoContext.Provider>
	);
});

// snapshot test
it('matches snapshot', () => {
	const { asFragment } = render(
		<MyInfoContext.Provider value={myInfo}>
			<Main />
		</MyInfoContext.Provider>
	);
	expect(asFragment()).toMatchSnapshot();
});
