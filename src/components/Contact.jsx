import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, feel free to reach out to us.</p>
      <div className="contact-info">
        <p><FaEnvelope /> Email: akmalkhann0@gmail.com</p>
        <p><FaPhone /> Phone: +91 6263XXXXX2</p>
        <p><FaMapMarkerAlt /> Address: 123 Weather Lane, React City, RC 12345</p>
      </div>
    </div>
  );
}

export default Contact;