import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import AOS from 'aos'
import "aos/dist/aos.css"
import TopProduct from './components/TopProduct/TopProduct';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import PopUp from './components/PopUp/PopUp';


const App = () => {
  const [orderPopUp, setOrderPopUp] = React.useState(false)

  const handleOrderPopUp = () => {
    setOrderPopUp(!orderPopUp)
  }

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh()
  }, []);

  return (
    <div className={`${darkMode && "dark"} bg-white dark:bg-gray-900 dark:text-white duration-200`}>
      <Navbar toggleDarkMode={toggleDarkMode}
      darkmode={darkMode} 
      handleOrderPopUp={handleOrderPopUp}
      />
      <Hero darkmode={darkMode} handleOrderPopUp={handleOrderPopUp}/>
      <Products darkmode={darkMode}/>
      <TopProduct darkmode={darkMode} handleOrderPopUp={handleOrderPopUp}/>
      <Banner darkmode={darkMode}/>
      <Subscribe darkmode={darkMode}/>
      <Products darkmode={darkMode}/>
      <Testimonials darkmode={darkMode}/>
      <Footer darkmode={darkMode}/>
      <PopUp orderPopUp={orderPopUp} setOrderPopUp={setOrderPopUp}/>
    </div>
  )
}

export default App
