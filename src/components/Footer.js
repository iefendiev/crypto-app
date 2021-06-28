import React from 'react';
import GitHubMark from '../assets/GitHubMark.png';

const Footer = () => {
  return (
    <div className="footer">
      <img className="git-logo" src={GitHubMark} alt="git-logo" />
      <a
        className="git-text"
        target="_blank"
        href="https://github.com/iefendiev"
      >
        Made by iefendiev
      </a>
    </div>
  );
};

export default Footer;
