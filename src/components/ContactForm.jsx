import React from 'react'
import './ContactForm.css'
const ContactForm = () => {
  return (
    <div class="form-container">
    <form class="contact-form">
      <div class="form-row">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name"/>
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="text" id="phone" name="phone"/>
        </div>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email"/>
      </div>

      <div class="form-group">
        <label for="message">Write Message</label>
        <textarea id="message" name="message"></textarea>
      </div>

      <div class="form-group">
        <button type="submit">Send Message</button>
      </div>
    </form>
  </div>
  )
}

export default ContactForm