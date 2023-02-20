import { Component } from "react";
import css from './Form.module.css'

export class Form extends Component{
  state = {
    name: '',
    number: '',
}

handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value})
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)


  }

  render() {
    return <>
  < form className={css.form} onSubmit={this.handleSubmit} >
<label className={css.label} htmlFor="name">Name</label>
      <input className={css.input}
        onChange={this.handleChange}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required
        />
        
      <label className={css.label} htmlFor="number">Number</label>
      <input className={css.input}
      onChange={this.handleChange}
      type="tel"
          name="number"
           required
      />
      <button className={css.btn} type="submit">Add contact</button>
      </form>

</>
} 
}