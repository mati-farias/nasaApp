import React from 'react';
import '@testing-library/jest-dom';
import LandingPage from './LandingPage';
import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('LandingPage', () => {
	afterEach(cleanup);
	it('should render', () => {
		render(
			<BrowserRouter>
				<LandingPage />
			</BrowserRouter>
		);
	});
});
describe('LandingPage', () => {
	it('Should have the text Mars Rovers!', async () => {
		render(
			<BrowserRouter>
				<LandingPage />
			</BrowserRouter>
		);

		screen.getByText('Mars Rovers!');
	});
});
