import { type StateUpdater } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

export const AddTodo = ({
  setIsVisible
}: {
  setIsVisible: StateUpdater<boolean>;
}): JSX.Element => {
  return (
    <div>
      Todo
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
