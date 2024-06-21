import React, { useState } from 'react';
import classes from './contactPage.module.css';
import { toast } from 'react-toastify';



const ContactForm = () => {
  const [data, setData] = useState({ name: '', email: '', number: '', msg: '' });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (data.number.length !== 10) {
      toast.error('Incorrect Phone Number');
    } else {
      toast.success('Send Successfully!');
      // Clear the input fields
      setData({ name: '', email: '', number: '', msg: '' });
    }
  }

  return (
    <div className={classes.contact}>
      <h1 className={classes.title}>GET IN TOUCH</h1>
      
      <form onSubmit={handleFormSubmit} method='post'>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={data.name}
          className={classes.box}
          required
          placeholder="Enter your name"
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={data.email}
          className={classes.box}
          required
          placeholder="Enter your email"
        />
        <input
          type="number"
          name="number"
          onChange={handleChange}
          value={data.number}
          min="0"
          className={classes.box}
          required
          placeholder="Enter your number"
        />
        <textarea
          name="msg"
          onChange={handleChange}
          value={data.msg}
          className={classes.box}
          required
          placeholder="Enter your message"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit" value="Send message" className={classes.btn}>
          Send message
        </button>
      </form>
    </div>
  );
};


export default ContactForm;
