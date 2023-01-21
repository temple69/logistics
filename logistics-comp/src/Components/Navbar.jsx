import React from 'react';
import styles from '../stylesheet/nav.module.css'


const Navbar = () => {
const {shadow} =styles
  return (
    <header className={`h-[60px] ${shadow} px-[50px]`}>
      <nav className='flex flex-justify justify-between items-center h-[60px]'>
        <h2 className='font-bold'>Solid State Logistics</h2>
        <ul className='flex gap-5'>
          <li><a href="#">HOME</a></li>
          <li><a href="#">PAGES</a></li>
          <li><a href="#">SERVICES</a></li>
          <li><a href="#">FLEET</a></li>
          <li><a href="#">NEWS</a></li>
          <li><a href="#">CALCULATOR</a></li>
        </ul>

      </nav>
    </header>
  )
}

export default Navbar