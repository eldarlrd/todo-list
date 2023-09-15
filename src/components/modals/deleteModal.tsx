import { type StateUpdater } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

export const DeleteModal = ({
  setIsVisible
}: {
  setIsVisible: StateUpdater<boolean>;
}): JSX.Element => {
  return (
    <div>
      Delete
      <button
        onClick={(): void => {
          setIsVisible(false);
        }}
      />
      <button
        onClick={(): void => {
          setIsVisible(false);
        }}
      />
    </div>
  );
};
