import Navbar from '@/components/Navbar';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('the navbar component behavior on mobile and desktop screens', () => {
	describe('the navigation links', () => {
		render(<Navbar />);

		test('displays the pitch form', async () => {
			const pitch = await screen.findAllByText('Pitch a Global Company');
			expect(pitch).toHaveLength(2);
		});

		test('displays the list of companies ', async () => {
			render(<Navbar />);

			const list = await screen.findAllByText('Companies');
			expect(list).toHaveLength(2);
		});
	});
});
