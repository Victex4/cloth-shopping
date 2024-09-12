import React from 'react'
import footerLogo from "../../assets/shopping-bags.png"
import Banner from "../../assets/website/footer-pattern.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaWhatsapp } from 'react-icons/fa6';
import { FaMobileAlt } from 'react-icons/fa';

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "Center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const FooterLinks = [
    {
        title: "Home",
        link: "/#"
    },
    {
        title: "About",
        link: "/#about"
    },
    {
        title: "Contact",
        link: "/#contact"
    },
    {
        title: "Blog",
        link: "/#blog"
    },
]

const MoreInfo = [
    {
        title: "Location Map",
        link: "/#"
    },
    {
        title: "Track My Order",
        link: "/#"
    },
    {
        title: "Privacy Policy",
        link: "/#"
    },
    {
        title: "Authentic Items Policy",
        link: "/#"
    },
]

const Footer = () => {
  return (
    <div
    style={BannerImg}
    className='text-white mb-20'>
      <div className='container'>
        <div 
        data-aos= "zoom-in"
        className='grid md:grid-cols-4 pb-40 pt-12'>
            {/* campany details */}
            <div className='py-8 px-4'>
                <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                <img src={footerLogo} alt="" 
                className='max-w-[50px]'
                />
                    Shopsy
                </h1>
                <p>
                    Dare to be Different Clothing with Attitude, Embrace Your Individuality, Style Meets Comfort, Unleash Your Inner Fashionista.
                </p>
            </div>
            {/* Footer Details */}
            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-5'>
                <div className='flex'>  
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
                            Important Links
                        </h1>
                        <ul className='flex flex-col gap-3'>
                            {
                                FooterLinks.map((link) => (
                                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'
                                    key={link.title}
                                    >
                                        <span>{link.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
                            Links
                        </h1>
                        <ul className='flex flex-col gap-3'>
                            {
                                FooterLinks.map((link) => (
                                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'
                                    key={link.title}
                                    >
                                        <span>{link.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='py-8 px-4'>
                    <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
                         More Info
                    </h1>
                    <ul className='flex flex-col gap-3'>
                        {
                            MoreInfo.map((link) => (
                                <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                                    <span>
                                        {link.title}
                                    </span>
                                </li>
                              )) 
                        }
                    </ul>
                    </div>

                {/* Social Links */}
                <div className='ml-10'>
                    <p className='text-sm font-semibold uppercase mt-6'>
                        Connect Us With
                    </p>
                    <div className="flex items-center gap-3 mt-6">
                        <a href="#">
                            <FaInstagram className='text-3xl'/>
                        </a>
                        <a href="#">
                            <FaFacebook className='text-3xl'/>
                        </a>
                        <a href="#">
                            <FaLinkedin className='text-3xl'/>
                        </a>
                        <a href="#">
                            <FaWhatsapp className='text-3xl'/>
                        </a>
                    </div>
                    <div className='mt-6'>
                        <div className='flex items-center gap-3'>
                            <FaLocationArrow />
                            <p>
                                Nioda, uttar Pradesh
                            </p>
                        </div>
                        <div className='flex items-center gap-3 mt-3'>
                            <FaMobileAlt />
                            <p>
                                +234 8065493663
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
