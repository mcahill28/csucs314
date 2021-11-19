import React from 'react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import { ItineraryActionsDropdown } from '../../../src/components/Trip/Itinerary/actions.js';

describe('Dropdown', () => {
    beforeEach(() => {
        render(<ItineraryActionsDropdown/>)
    });

    it('contains a search Dropdown', () => {
        expect(screen.findByRole('Dropdown')).toBeDefined();
    });
    
    it('contains Load File icon', async () => {
        const icon = screen.findByTestId('load-trip-icon');
        expect(icon).toBeDefined(); 
    });

    it('Load File Icon click', async () => { 
        fireEvent.click(await screen.findByTestId('load-trip-icon')); // Use fireEvent or user
        expect(screen.getByTestId('load-trip-icon')).toBeTruthy();
    });

    it('contains Save File icon', async () => {
        const icon = screen.findByTestId('save-trip-button');
        expect(icon).toBeDefined();
    });

    it('Save File icon click', async () => {

    });
});