import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  // handleSubmit = evt => {
  //   evt.preventDefault();
  //   const newContact = {
  //     name: this.state.name,
  //     number: this.state.number,
  //     id: nanoid(),
  //   };
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, newContact],
  //     name: '',
  //     number: '',
  //   }));
  // };

  handleAddContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    const { name, number, filter, contacts } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact} />
        <h2>Contacts</h2>
        {/* <Filter /> */}
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          placeholder="Enter name to find"
          value={filter}
          onChange={this.handleChange}
        />
        {/* <ContactList /> */}

        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              {contact.name} {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
