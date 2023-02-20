import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import {Filter} from './Filter/Filter'



export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }
  
  componentDidMount() {
  
}
  componentDidUpdate({name, number}) {
  localStorage.setItem('contacts', this.setState(prevState => { return { contacts: [...prevState.contacts, { name: name, number: number, id: nanoid() },], } }))
}
  
  setContact = ({ name }) => {
    const checkName = this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        if (checkName) {
            return alert(`${name} is already in contacts.`);
        }
    
  }
  
    filteredContacts = (e) => {
      const { contacts, filter } = this.state
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    }
    handleChangedFilter = (e) => {
      this.setState({ filter: e.target.value });
  };
  
  deleteContact = (id) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== id)
      }
      
    });
  };

    render() {
      return <>
        <div>
        <h1>Phonebook</h1>
        <Form
        onSubmit={this.setContact}
        />
        <Filter
          onFilter={this.handleChangedFilter}
        />
        <h2>Contacts</h2>
        <ContactsList
            contacts={this.filteredContacts()}
            onDeleteContact={this.deleteContact}
        />
      </div>
      </>
    }
  }

