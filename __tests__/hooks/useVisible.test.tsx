import { render, fireEvent } from '@testing-library/preact';
import { type JSX } from 'preact/jsx-runtime';
import { act } from 'preact/test-utils';

import { useVisible } from '@/hooks/useVisible.ts';

describe('use visible', () => {
  const Component = (): JSX.Element => {
    const { refer, isVisible, setIsVisible } = useVisible(true);

    return (
      <div ref={refer}>
        <button
          onClick={(): void => {
            setIsVisible(!isVisible);
          }}>
          Toggle
        </button>
        {isVisible && 'Content'}
      </div>
    );
  };
  it('toggles visibility when clicking toggle', async () => {
    const { getByText, queryByText } = render(<Component />);

    expect(getByText('Content')).toBeInTheDocument();

    await act(() => {
      fireEvent.click(getByText('Toggle'));
    });

    expect(queryByText('Content')).toBeNull();
  });

  it('toggles visibility when clicking outside of parent element', async () => {
    const { getByText, queryByText } = render(<Component />);

    expect(getByText('Content')).toBeInTheDocument();

    await act(() => {
      fireEvent.click(document.body);
    });

    expect(queryByText('Content')).toBeNull();
  });
});
