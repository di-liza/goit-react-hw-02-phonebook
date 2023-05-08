import { ListBox } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';

export function ContactList({ contacts, handleDeleteBTN }) {
  return (
    <>
      <ListBox>
        <ul>
          {contacts.map(({ name, id, number }) => {
            return (
              <Contact
                key={id}
                name={name}
                id={id}
                number={number}
                handleDeleteBTN={handleDeleteBTN}
              >
                {/* <div>
                  <p>{name}</p>
                  <p>{number}</p>
                </div> */}
                {/* <DeleteBtn
                  type="button"
                  onClick={() => {
                    handleDeleteBTN(id);
                  }}
                >
                  Delete
                </DeleteBtn> */}
              </Contact>
            );
          })}
        </ul>
      </ListBox>
    </>
  );
}
