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
