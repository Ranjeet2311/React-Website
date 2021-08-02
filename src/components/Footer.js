<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <div className="container">
          <div className="part">
            <p>
              This is just a written paragraph in the footer section, so it
              could make it look occupied. It's nothing specific but just
              somethig written to take this space and give a good view.
            </p>
          </div>
          <div className="part">
            <div className="links">
              <Link to="/">Home</Link>
            </div>
            <div className="links">
              <Link to="/about">About us</Link>
            </div>
            <div className="links">
              <Link to="/contact">Contact</Link>
            </div>
            <div className="links">
              <Link to="/services">Services</Link>
            </div>
            <div className="links">
              <Link to="/services">Join Our team</Link>
            </div>
          </div>
          <div className="part">
            <h4>Connect on Social Media</h4>
            <div className="social-media">
              <Link>
                <i class="fab fa-facebook-square"></i>
              </Link>
              <Link>
                <i class="fab fa-youtube"></i>
              </Link>
              <Link>
                <i class="fab fa-twitter-square"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
=======
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <div className="container">
          <div className="part">
            <p>
              This is just a written paragraph in the footer section, so it
              could make it look occupied. It's nothing specific but just
              somethig written to take this space and give a good view.
            </p>
          </div>
          <div className="part">
            <div className="links">
              <Link to="/">Home</Link>
            </div>
            <div className="links">
              <Link to="/about">About us</Link>
            </div>
            <div className="links">
              <Link to="/contact">Contact</Link>
            </div>
            <div className="links">
              <Link to="/services">Services</Link>
            </div>
            <div className="links">
              <Link to="/services">Join Our team</Link>
            </div>
          </div>
          <div className="part">
            <h4>Connect on Social Media</h4>
            <div className="social-media">
              <Link>
                <i class="fab fa-facebook-square"></i>
              </Link>
              <Link>
                <i class="fab fa-youtube"></i>
              </Link>
              <Link>
                <i class="fab fa-twitter-square"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
>>>>>>> ee56e13143c03270ea1b249340d4ee36222102db
