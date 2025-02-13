import React from 'react';
import './Contacts.css';
import { CONTACTS } from '../data/content';

const Contacts = () => {
  return (
    <div className="container-contacts">
<h2>Contact</h2>
<div className="contacts-text">
    <p>{CONTACTS.address}</p>
    <p>{CONTACTS.phoneNo}</p>
    <a href="#">{CONTACTS.email}</a>
</div>
    </div>
  )
}

export default Contacts