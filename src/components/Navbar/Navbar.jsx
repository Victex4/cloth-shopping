import React from 'react'
import Logo from "../../assets/shopping-bags.png"
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping, FaMoon, FaSun } from 'react-icons/fa6';

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#"
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services"
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#"
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#"
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#"
  }
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];
const Navbar = ({darkmode, toggleDarkMode, handleOrderPopUp}) => {
  return (
    <div className='shadow-md bg-white dark:gray-800 dark:text-white duration-200 relative z-40'>

      {/* upper Navbar  */}
      <div className='bg-primary/40 py-2 dark:bg-gray-950'>
        <div className='container flex justify-between items-center'>
            <div className='w-10'>
                <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                  <img src={Logo} alt="Logo" />
                   Shopsy
                </a>
            </div>

            {/* search bar */}
            <div className='flex justify-between gap-4 items-center'>
              <div className='relative group hidden sm:block'>
                <input type="text" placeholder='Search' 
                className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary'
                />
                <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
              </div>
              <button onClick={() => handleOrderPopUp()} className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                <span className='group-hover:block hidden transition-all duration-200'>Order</span>
                <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
              </button>

              {/* Darkmode section */}
              <div>
              <button className="dark:bg-slate-50 dark:text-slate-700 rounded-full p-3" onClick={toggleDarkMode}>
              {darkmode ? <FaSun /> : <FaMoon /> }</button>
              </div>
            </div>
        {/* order button */}
        </div>
      </div>
        {/* lower Nav */}
      <div 
      data-aos= "zoom-in"
      className='flex justify-center dark:bg-gray-800 dark:border-gray-500 dark:text-gray-100'>
        <ul className='sm:flex hidden items-center gap-4'>
          {
            Menu.map((data) => (
              <li key={data.id}>
                <a href={data.link} className='inline-block px-4 hover:text-primary duration-200'>{data.name}</a>
              </li>
            ))
          }
          {/* simple dropdown and Links */}
          <li className='group relative cursor-pointer'>
            <a href="#"
            className='flex items-center gap-[2px] py-2'
            >
              Trending Products
              <span>
                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
              </span>
            </a>
            <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md'>
              <ul>
                {
                  DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a href={data.link}
                      className='inline-block w-full rounded-md p-2 hover:bg-primary/20'
                      >{data.name}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
