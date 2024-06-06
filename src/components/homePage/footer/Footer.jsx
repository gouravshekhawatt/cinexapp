import React from 'react';
import * as ROUTES from "../../../constants/routes";
import './footer.scss';

export default function Footer() {
  return (
    <>
      <div  className="footerContainer">
        <div className='footerTitle'>Questions? Contact Us.</div>
        <div className="row" >
          <div className='column'>
            <a href={ROUTES.HOME}>FAQ</a>
            <a href={ROUTES.HOME}>Investor Relations</a>
            <a href={ROUTES.HOME}>Ways to Watch</a>
            <a href={ROUTES.HOME}>Corporate Information</a>
            <a href={ROUTES.HOME}>Cinex Originals</a>
          </div>

          <div className='column'>
            <a href={ROUTES.HOME}>Help Center</a>
            <a href={ROUTES.HOME}>Jobs</a>
            <a href={ROUTES.HOME}>Terms of Use</a>
            <a href={ROUTES.HOME}>Contact Us</a>
          </div>

          <div className='column'>
            <a href={ROUTES.HOME}>Account</a>
            <a href={ROUTES.HOME}>Redeem gift cards</a>
            <a href={ROUTES.HOME}>Privacy</a>
            <a href={ROUTES.HOME}>Speed Test</a>
          </div>

          <div className='column'>
            <a href={ROUTES.HOME}>Media Center</a>
            <a href={ROUTES.HOME}>Buy gift cards</a>
            <a href={ROUTES.HOME}>Cookie Preferences</a>
            <a href={ROUTES.HOME}>Legal Notices</a>
          </div>
        </div>
        
      </div>
      <footer className="custom-footer">
      <div className="custom-footer-cont">
        <div className="custom-follow">
          <h1>Follow me</h1>
        </div>
        <div className="custom-logos">
          <a href="https://www.instagram.com/gouravshekhawatt/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-square-instagram"></i>
            <h1>Instagram</h1>
          </a>
          <a href="https://sprightly-sable-d0cfec.netlify.app/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
            <h1>GitHub</h1>
          </a>
        </div>
        <div className="custom-develop">
  Developed with <i className="fa-solid fa-heart" style={{color: "#ec3232"}}></i> by <span>Gourav Singh and Ankit Nehra</span> || &copy; 2024 All rights reserved
</div>

      </div>
    </footer>
   
    </>
  )
}

