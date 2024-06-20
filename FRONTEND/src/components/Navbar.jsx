import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiOutlineMenu } from 'react-icons/hi';
import { data } from '../restApi.json';

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="logo">EatWell</div>
      <div className={show ? 'navlinks showmenu' : 'navlinks'}>
        <div className="links">
          {data[0].navbarLinks.map((element) => {
            return (
              <Link
                to={element.link}
                key={element.id}
                spy="true"
                smooth="true"
                duration={500}
              ></Link>
            );
          })}
        </div>
        <div className="menuBtn">OUR MENU</div>
      </div>

      <div className="hamburger" onClick={() => setShow(!show)}>
        <HiOutlineMenu />
      </div>
    </nav>
  );
};

export default Navbar;
