// src/setupTests.js
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Home } from '../Home';


describe('Home component test', () => {
    it('should render without crashing', () => {
        render(<Home />);
        expect(screen.getByText(/Software Developer & System Administrator/i)).toBeInTheDocument();
    });

    it('should render the call to action button', () => {
        render(<Home />);
        expect(
            screen.getByRole('link', { name: /View My Work/i })
        ).toBeInTheDocument();
    });
});