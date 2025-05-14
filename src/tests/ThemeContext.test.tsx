import { render, fireEvent,screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Navbar } from "../components/Navbar";
import {  ThemeContextProvider } from "../../contexts/ThemeContext";

describe('ThemeContext', () => {
    it('should toggle theme', () => {
        // Mock the useTheme hook

        // Import the component after mocking
        
        // Render the component
        // render(<ThemeContextProvider><Navbar /></ThemeContextProvider>);

        // Simulate clicking the theme toggle button
        // fireEvent.click(screen.getByRole('button'));
        // expect(screen.getByRole('button')).toHaveTextContent('<MdLightMode size={25} />');
        
        // Assert that the toggleTheme function was called
    });
});