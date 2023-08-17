import { type Ref } from 'preact';
import { type JSX } from 'preact/jsx-runtime';

export const AddProject = ({
  refer
}: {
  refer: Ref<HTMLDivElement>;
}): JSX.Element => {
  return (
    <div id='modalAddProject' ref={refer} class='z-10 w-40 bg-red-500'>
      Project
    </div>
  );
};
