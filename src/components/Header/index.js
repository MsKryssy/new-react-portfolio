import React from 'react';
import Nav from '../Nav';
import bannerImg from '../../assets/images/travel.jpg';
import './style.css';

const Header = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <header className="container-fluid">
      <img src={bannerImg} alt='Traveling Around the World' />
      <div className="container d-lg-flex justify-content-lg-between py-3">
        <h1 className='text-left'>Krystal Richardson</h1>

        <Nav pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </header>
  );
};

export default Header;