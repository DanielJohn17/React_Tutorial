function ContactList({ contacts, updateContact, updateCallback }) {
  async function onDelete(id) {
    try {
      const options = {
        method: "DELETE",
      };
      const response = await fetch(
        `http://127.0.0.1:5000/delete_contact/${id}`,
        options
      );
      if (response.status === 200) {
        updateCallback();
      } else {
        console.error("Faild to delete");
      }
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div className="container">
      <h1>Contacts</h1>
      <div className="list">
        <div className="list-title">
          <h2>First Name</h2>
          <h2>Last Name</h2>
          <h2>Email</h2>
          <h2>Actions</h2>
        </div>
        <div className="list-body">
          {contacts.map((contact) => (
            <div key={contact.id}>
              <h3>{contact.firstName}</h3>
              <h3>{contact.lastName}</h3>
              <h3>{contact.email}</h3>
              <div className="button-container">
                <button
                  className="update-button"
                  onClick={() => updateContact(contact)}
                >
                  Update
                </button>
                <button
                  className="delete-button"
                  onClick={() => onDelete(contact.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactList;
