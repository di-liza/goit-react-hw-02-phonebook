import { Input } from './Filter.styled';

export function Filter({ name, onChangeInput }) {
  return (
    <>
      <p>Find contacts by name</p>
      <Input value={name} name={name} onChange={onChangeInput} />
    </>
  );
}
