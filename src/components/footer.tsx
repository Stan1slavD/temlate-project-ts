import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer_nav">
        <div className="footer_nav_item">
          <span className="footer_title">COMPANY</span>
          <a href="/" className="link">
            About Last.fm
          </a>
          <a href="/" className="link">
            Contact Us
          </a>
          <a href="/" className="link">
            Jobs
          </a>
        </div>
        <div className="footer_nav_item">
          <span className="footer_title">HELP</span>
          <a href="/" className="link">
            Track My Music
          </a>
          <a href="/" className="link">
            Community Support
          </a>
          <a href="/" className="link">
            Community Guidelines
          </a>
          <a href="/" className="link">
            Help
          </a>
        </div>
        <div className="footer_nav_item">
          <span className="footer_title">GOODIES</span>
          <a href="/" className="link">
            Download Scobbler
          </a>
          <a href="/" className="link">
            Developer API
          </a>
          <a href="/" className="link">
            Frtt Music Downloads
          </a>
          <a href="/" className="link">
            Merchandise
          </a>
        </div>
        <div className="footer_nav_item">
          <span className="footer_title">ACCOUNT</span>
          <a href="/" className="link">
            Inbox
          </a>
          <a href="/" className="link">
            Settings
          </a>
          <a href="/" className="link">
            Last.fm Pro
          </a>
          <a href="/" className="link">
            Logout
          </a>
        </div>
        <div className="footer_nav_item">
          <span className="footer_title">FOLLOW US</span>
          <a href="/" className="link">
            Facebook
          </a>
          <a href="/" className="link">
            Twitter
          </a>
          <a href="/" className="link">
            Instagram
          </a>
          <a href="/" className="link">
            YouTube
          </a>
        </div>
      </div>
      <hr className="footer_line" />
      <div className="footer_info">
        <div>
          <span className="language selected">English</span>
          <span className="language">Deutsch</span>
          <span className="language">Italiano</span>
          <span className="language">Polski</span>
          <span className="language">Русский</span>
          <span className="language">Svenska</span>
        </div>
        <div className="zone">
          Time zone: <span className="selected">Europe/Moscow</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
