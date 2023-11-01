import { cleanup } from '@testing-library/preact';
import { afterEach } from 'vitest';
import '@testing-library/jest-dom';

// Test Setup
afterEach(() => {
  cleanup();
});
