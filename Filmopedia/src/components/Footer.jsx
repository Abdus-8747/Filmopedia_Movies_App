import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-primary-clr text-white py-12 mt-12">
      <div className="container mx-auto flex flex-col items-center md:flex-row justify-between px-6">
        <p className="text-center md:text-left mb-4 md:mb-0 text-2xl md:text-4xl font-light">
          Copyright &copy; 2025, All Rights Reserved By
          <a
            href="https://www.linkedin.com/in/abdus-samad-shamsi-a61161286/"
            target="_blank"
            className="text-accent-clr hover:text-secondary-clr transition-colors ease-in-out-400"
          >
            <span className="font-semibold">Abdus Samad Shamsi</span>
          </a>
        </p>
        <div className="social-icons flex justify-center space-x-8 md:space-x-12">
          <a 
            href="https://www.facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:transition-all duration-300 transform hover:scale-110 text-3xl"
          >
            <FaFacebookF />
          </a>
          <a 
            href="https://x.com/Abdus_Samad87" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover: transition-all duration-300 transform hover:scale-110 text-3xl"
          >
            <FaTwitter />
          </a>
          <a 
            href="https://www.instagram.com/abdus_samad_shamsi/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-pink-500 transition-all duration-300 transform hover:scale-110 text-3xl"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://www.linkedin.com/in/abdus-samad-shamsi-a61161286/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-700 transition-all duration-300 transform hover:scale-110 text-3xl"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="text-center text-sm mt-8 opacity-60">
        <p className="font-light">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Abdus Samad</span>. Bringing the magic of movies to life, one frame at a time.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
