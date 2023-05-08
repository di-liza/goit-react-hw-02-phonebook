import { Item } from './ContactList.styled';

export function ContactList({ contacts, handleDeleteBTN }) {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ name, id, number }) => {
          return (
            <Item key={id}>
              <p>{name}</p>
              <p>{number}</p>
              <button
                type="button"
                onClick={() => {
                  handleDeleteBTN(id);
                }}
              >
                Delete
              </button>
              <hr />
            </Item>
          );
        })}
      </ul>
    </>
  );
}
