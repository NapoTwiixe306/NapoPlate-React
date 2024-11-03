import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaGitlab, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-black dark:text-white py-4 px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      <p className="text-center md:text-left">&copy; {currentYear} - JMCorp. Tous droits réservés.</p>
      <div className="flex space-x-4">
        <Link to="https://twitter.com/JulienMl3" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter className=" hover:text-blue-400" size={24} />
        </Link>
        <Link to="https://gitlab.com/NapoTwiixe306" target="_blank" rel="noopener noreferrer" aria-label="GitLab">
          <FaGitlab className="hover:text-orange-500" size={24} />
        </Link>
        <Link to="https://github.com/NapoTwiixe306" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className=" hover:text-gray-400" size={24} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
