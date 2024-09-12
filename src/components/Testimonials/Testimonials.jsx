import React from 'react'
import Slider from 'react-slick'
import tes1 from "../../assets/user/user02.png"
import tes2 from "../../assets/user/tes3-removebg-preview.png"
import tes3 from "../../assets/user/user01.png"
import tes4 from "../../assets/user/user03.png"
 
const TestimonialData = [
    {
        id: 1,
        name: "Victor",
        text: " My first purchase was a very beautiful saree and the saree got loads of compliments. Based on my experience, I'm making another purchase which is for an in-house wedding. Looking forward to the saree",
        img: tes1,
    },
    {
        id: 2,
        name: "Sonia Nadella",
        text: "For me personally, asianafashion has always been a great store. The collection is great and all the Indian dresses I've ordered from here were exactly like they are shown on the website, would definitely recommend. Thank You for It asianafashion",
        img: tes2,
    },
    {
        id: 3,
        name: "Virat Kohli",
        text: " I Needed a dress for an Engagement party. The price was really good and the dress is perfect. Runs true to size.i got lot of compliments for this dress thank you ashianafashion Made My day.",
        img: tes3,
    },
    {
        id: 4,
        name: "Sachin Tendullar",
        text: " Shopping from this website was a delightful experience. The vibrant colors and unique designs made me feel truly special at my family event",
        img: tes4,
    },
]

const Testimonials = () => {
  
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className='py-10 mb-10'>
      <div className='container'>
      <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p 
            data-aos="fade-up"
            className='text-sm text-primary'>
                What Our Customers Are Saying
            </p>
            <h1 
            data-aos="fade-up"
            className='text-3xl font-bold'>
                Testimonials
            </h1>
            <p 
            data-aos="fade-up"
            className='text-xs text-gray-400'>
            Dare to be Different Clothing with Attitude, Embrace Your Individuality, Style Meets Comfort, Unleash Your Inner Fashionista.
            </p>
        </div>
          {/* testimonial */}
          <div data-aos= "zoom-in">
              <Slider {...settings}>
                {
                  TestimonialData.map((data) => (
                    <div className='my-6'>
                      <div 
                      key={data.id}
                      className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'
                      >
                        <div className='mb-4'>
                            <img src={data.img} alt="" 
                            className='rounded-full w-20 h-20'
                            />
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                          <div className='space-y-3'>
                            <p className='text-xs text-gray-400'>
                              {data.text}
                              <h1 className='text-xl font-bold text-black/80 dark:text-light'>{data.name}</h1>
                            </p>
                          </div>
                        </div>
                        <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>
                          ,,
                        </p>
                      </div>
                    </div>
                  ))
                }
              </Slider>
          </div>

      </div>
    </div>
  )
}

export default Testimonials
