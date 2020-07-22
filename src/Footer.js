import React from 'react';
import './footer.scss';

const Footer = () => {
    return(
        <footer className="footer">
            Copyrights &copy; {new Date().getFullYear()}
        </footer>
    );
};

export default Footer;