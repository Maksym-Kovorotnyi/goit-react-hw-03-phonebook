import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import {Filter} from './Filter/Filter'



export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }
  
  componentDidMount() {
    const localStoregeContacts = JSON.parse(localStorage.getItem('contacts')) 
    if (!localStoregeContacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
    this.setState({ contacts: localStoregeContacts })   
}
  componentDidUpdate() {
  localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
}
  
  setContact = ({ name, number}) => {
    const checkName = this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        if (checkName) {
            return alert(`${name} is already in contacts.`);
        }
    this.setState(prevState => { return { contacts: [...prevState.contacts, { name: name, number: number, id: nanoid() },], } })
  }
  
    filteredContacts = () => {
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
      </>
    }
  }

