import { cleanup } from '@testing-library/preact';
import { afterEach } from 'vitest';
import '@testing-library/jest-dom';

// DOM Test Setup
afterEach(() => {
  cleanup();
});
