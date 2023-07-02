import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='about'>
        
    <section> <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook fa-4x"></i>
        </a>
       <p> <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter fa-4x"></i>
        </a>
       </p>
       </section>

        <h3>Company Info</h3>
        <p>
          Epic Adventures provides an online ticket booking system
          that simplifies the customer needs. Customers can book bus tickets
          and pay online, saving a lot of time. We have transformed bus travel in the country by bringing ease and convenience to millions of Kenyans who travel using buses.
        </p>
        
      

     
       <h3>Get In Touch</h3>
        <p>
          Located along Prism Towers, 6th Floor, Prism Towers, Third Ngong Avenue, Upperhill, Nairobi, Kenya.
        </p>
        
       <h3>Contact Us</h3>
        <p>
          Telephone: +254723000456
        </p>
        <p>
          Email: info@epictransit.com
        </p>
       
     
      </div>

      <p className="copyright">
        © 2023 Hope Cancer App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;