import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <div id='footer'>
          
          {/* <section> 
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-4x"></i>
            </a>
            <p> 
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-4x"></i>
              </a>
            </p>
          </section> */}

          <div>
            <h3>Company Info</h3>
            <p>
              At  Hope Cancer App, we are committed to improving 
              the lives of cancer patients and their families 
              by harnessing the potential of digital health solutions.
              We strive to make cancer care more accessible, personalized
              and empowering, ultimately contributing to better outcomes
              and quality of life for individuals affected by cancer.
            </p> 
          </div>

          <div>
            <h3>Get In Touch</h3>
            <p>
              Located along Afya Center, 6th Floor, Third Ngong Avenue, Upperhill, Nairobi, Kenya.
            </p>
          </div>
          
            
          <div>
            <h3>Contact Us</h3>
            <p>
              Telephone: +254723000456
            </p>
            <p>
              Email: info@hopecancerapp.com
            </p>
          </div>

        </div>

        <p className="copyright">
          © 2023 Hope Cancer App. All rights reserved.
        </p>
    </footer>
  );
};

export default Footer;