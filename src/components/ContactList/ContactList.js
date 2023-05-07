export function ContactList({ contacts }) {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ name, id, number }) => {
          return (
            <li key={id}>
              <p>{name}</p>
              <p>{number}</p>
              <hr />
            </li>
          );
        })}
      </ul>
    </>
  );
}
