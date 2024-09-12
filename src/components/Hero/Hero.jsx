import React from 'react'
import Image1 from "../../assets/woman1-removebg-preview.png"
import Image2 from "../../assets/woman2-removebg-preview.png"
import Image3 from "../../assets/sale3-removebg-preview.png"
import Slider from 'react-slick'
import 'slick-carousel'

const ImageList = [
    {
       id: 1,
       img: Image1,
       title: "50% 0n all Men's Wear",
       description:
            "Affordeable men's Wears With Long-Lasting Asurrance In Different Sizes, Comfortable with Quality Materials On 50% Discount",
    },
    {
       id: 2,
       img: Image2,
       title: "30% 0n all Women's Wear",
       description:
            "Affordeable Women's Wears With Long-Lasting Asurrance In Different Sizes, Comfortable with Quality Materials On 30% Discount",
    },
    {
       id: 3,
       img: Image3,
       title: "70% 0n all Products Sale",
       description:
            "Affordeable With Long-Lasting Asurrance In Different Sizes, Comfortable with Quality Materials On 70% Discount",
    },
]

const Hero = ({handleOrderPopUp}) => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoPlay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnMover: false,
        pauseOnFocus: true,
    };

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-gray-100 duration-200'>
      {/* background Section */}
      <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>

      </div>
      {/* hero Section */}
      <div className="container pb-8 sm:pb-0">
        <Slider { ...settings}>
            {
                ImageList.map((data) => (
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            {/* text content section */}
                            <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-'>
                                <h1
                                data-aos="zoom-out"
                                data-aos-duration= "500"
                                data-aos-once= "true"
                                className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                                    {data.title}
                                </h1>
                                <p 
                                data-aos="fade-up"
                                data-aos-duration= "500"
                                data-aos-delay= "100"
                                className='text-sm py-4'>
                                    {data.description}
                                </p>
                                <div
                                data-aos="fade-up"
                                data-aos-duration= "500"
                                data-aos-delay= "300"
                                >
                                    <button
                                    onClick={handleOrderPopUp}
                                    className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
                                        Order Now
                                    </button>
                                </div>
                            </div>
                            {/* image content section */}
                            <div className='order-2 sm:order-1'>
                                <div className='relative z-10'>
                                    <img src={data.img} alt=""
                                    className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Slider>
      </div>
    </div>
  )
}

export default Hero
