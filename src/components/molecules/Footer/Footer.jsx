import React from 'react';
import './styles.scss';

const Footer = () => {

    return (
        <footer className="footer">
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="/kafi-arifin.svg" alt="GoApp Logo" className="logo" />
                {' '}Powered by GoApp{' '}
            </a>
        </footer>
    );
}

export default Footer;