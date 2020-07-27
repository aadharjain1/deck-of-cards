import React from 'react';
import './footer.scss';

const Footer = () => {
    return(
        <footer className="footer">
            Copyright &copy; {new Date().getFullYear()}. All rights reserved
        </footer>
    );
};

export default Footer;