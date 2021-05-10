import { render, screen } from '@testing-library/react';
import App from './App';
import myInfo from './context/myInfo.json';

const { work: { categoryName } } = myInfo;
const reg = new RegExp(categoryName, 'i');
test('renders myInfo.work.categoryName value', () => {
	render(<App />);
	const linkElement = screen.getByText(reg);
	expect(linkElement).toBeInTheDocument();
});
