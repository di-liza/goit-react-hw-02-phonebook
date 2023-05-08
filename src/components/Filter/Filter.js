import PropTypes from 'prop-types';

import { Input, FilterBox } from './Filter.styled';

export function Filter({ name, onChangeInput }) {
  return (
    <FilterBox>
      <p>Find contacts by name</p>
      <Input value={name} name={name} onChange={onChangeInput} />
    </FilterBox>
  );
}

Filter.propTypes = {
  name: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};
