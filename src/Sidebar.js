import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return <aside className={`${isSidebarOpen?'sidebar show-sidebar':'sidebar'}`}>
    <div className="sidebar-header">
      <img src="https://react-projects-12-sidebar-modal.netlify.app/static/media/logo.2bb7da65.svg" alt="logo" />
      <button className='close-modal-btn' onClick={closeSidebar}>
        <FaTimes />
      </button>
    </div>
    <ul className='links'>
      {links.map((link) => {
        const { id, url, text, icon } = link;
        return <li key={id}>
          <a href={url}>
            {icon}
            {text}
          </a>
        </li>
      })}
    </ul>
    <ul className='social-icons'>
      {social.map((link) => {
        const {id, url, icon} = link;
        return <li key={id}>
          <a href={url}>{icon}</a>
        </li>
      })}
    </ul>
  </aside>
}

export default Sidebar