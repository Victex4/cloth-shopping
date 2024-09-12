import React from 'react'
import Img1 from "../../assets/Shirt/shirt1-removebg-preview.png"
import Img2 from "../../assets/Shirt/shirt3-removebg-preview.png"
import Img3 from "../../assets/Shirt/shirt4-removebg-preview.png"
import { FaStar } from 'react-icons/fa6'

const ProductsData = [
    {
        id:1,
        img: Img1,
        title: "Casual Wear",
        description: " is a Western dress code that is relaxed, occasional, spontaneous and suited for everyday use.",
    },
    {
        id:2,
        img: Img2,
        title: "Printed Shirt",
        description: "is a simple and inexpensive method of printing your own custom designs or logos onto a t-shirt.",
    },
    {
        id:3,
        img: Img3,
        title: "Women Shirt",
        description: "A blouse is a shirt usually worn by a woman,  item of clothing worn on the top of the body, mainly by girls or women, is sometimes called a blouse.",
    },
]

const TopProduct = ({handleOrderPopUp}) => {
  return (
    <div>
      <div className='container'> 
        {/* Header section */}
        <div>
            <div className='text-left mb-24'>
                <p 
                data-aos="fade-up"
                className='text-sm text-primary'>
                    Top Selling Products For You
                </p>
                <h1 
                data-aos="fade-up"
                className='text-3xl font-bold'>
                   Best Products
                </h1>
                <p 
                data-aos="fade-up"
                className='text-xs text-gray-400'>
                Dare to be Different Clothing with Attitude, Embrace Your Individuality, Style Meets Comfort, Unleash Your Inner Fashionista.
                </p>
            </div>
        </div>
        {/* Body Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
            {
              ProductsData.map((data) => (
                <div 
                data-aos= "zoom-in"
                className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
                    {/* image section */}
                    <div className='h-[100px]'>
                        <img src={data.img} alt="" 
                        className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
                        />
                    {/* details section */}
                    </div>
                    <div className='p-4 text-center'>
                        {/* starRating section */}
                        <div className='w-full flex items-center justify-center gap-1'>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                        </div>
                        <h1 className='text-xl font-bold'>{data.title}</h1>
                        <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                        <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary' 
                        onClick={handleOrderPopUp}
                        >
                            Order Now
                        </button>
                    </div>
                </div>
              ))  
            }
        </div>
      </div>
    </div>
  )
}

export default TopProduct
