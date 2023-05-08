import PropTypes from 'prop-types';

import { Item, DeleteBtn } from './Contact.styled';

export function Contact({ name, id, number, handleDeleteBTN }) {
  return (
    <Item key={id}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <DeleteBtn
        type="button"
        onClick={() => {
          handleDeleteBTN(id);
        }}
      >
        Delete
      </DeleteBtn>
    </Item>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDeleteBTN: PropTypes.func.isRequired,
};
