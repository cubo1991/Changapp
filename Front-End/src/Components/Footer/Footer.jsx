import React from 'react';
import s from '../Footer/Footer.module.css';
import logo from '../../Images/logo.png';

export const Footer = () => {
  return (
    <div className={s.footer}>
      <img className={s.img} src={logo} alt='logo' />
    </div>
  )
}


