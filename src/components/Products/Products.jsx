import React from 'react'
import Img1 from "../../assets/women/img1-removebg-preview.png"
import Img2 from "../../assets/women/img2-removebg-preview.png"
import Img3 from "../../assets/women/img3-removebg-preview.png"
import Img4 from "../../assets/women/img4-removebg-preview.png"
import Img5 from "../../assets/women/img5-removebg-preview.png"
import { FaStar } from 'react-icons/fa6'


const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "White",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Women Western",
        rating: 4.5,
        color: "Red",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Gogglers",
        rating: 3.6,
        color: "Brown",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Printed T-Shirt",
        rating: 4.7,
        color: "Yellow",
        aosDelay: "600",
    },
    {
        id: 5,
        img: Img5,
        title: "Fashin T-Shirt",
        rating: 4.6,
        color: "Pink",
        aosDelay: "800",
    },
]

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
      <div className='container'>
        {/* Header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p 
            data-aos="fade-up"
            className='text-sm text-primary'>
                Top Selling Products For You
            </p>
            <h1 
            data-aos="fade-up"
            className='text-3xl font-bold'>
                Products
            </h1>
            <p 
            data-aos="fade-up"
            className='text-xs text-gray-400'>
            Dare to be Different Clothing with Attitude, Embrace Your Individuality, Style Meets Comfort, Unleash Your Inner Fashionista.
            </p>
        </div>
        {/* Body section */}
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
            {/* Card section */}
                {
                    ProductsData.map((data) => (
                        <div 
                        data-aos="fade-up"
                        data-aos-delay={data.aosDelay}
                        key={data.id} className='space-y-2'>
                            <img src={data.img}  alt="" 
                            className='h-[220px] w-[150px] object-cover rounded-md'
                            />
                            <div className='font-semibold'>
                                {data.title}
                            </div>
                            <p className='text-sm text-gray-600'>
                                {data.color}
                            </p>
                            <div className='flex items-center gap-1'>
                                <FaStar className='text-yellow-400'/>
                                <span>{data.rating}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* view all button */}
            <div className='flex justify-center'>
                <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md '>
                    VIew All Button
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Products
