import React from 'react';

import navData from '../data/NavData.json';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer text-center font-small mt-4 wow fadeIn">
        <div className="pt-4 pb-4">
          {navData.socialLinks.map(social => (
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={`footer-${social.icon}`}
            >
              <i className={`fab fa-${social.icon} mr-3`} />
            </a>
          ))}
        </div>

        <div className="footer-copyright py-3">
          © 2019 Copyright Bradley Harker
        </div>
      </footer>
    );
  }
}
