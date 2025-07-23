import React from 'react';

function Footer({ theme }) {
  return (
    <footer className={`app-footer ${theme}`}>
      <p>&copy; 2025 Weather App. All rights reserved.</p>
      <h4>Akmal Khan</h4>
    </footer>
  );
}

export default Footer;