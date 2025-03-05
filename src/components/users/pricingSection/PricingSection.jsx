import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { formatNumber } from '@utils/index'
import bgCard1 from '@assets/images/pricing/bgCard1.svg'
import bgCard2 from '@assets/images/pricing/bgCard2.svg'
import iconArrowLeft from '@assets/images/pricing/iconArrowLeft.svg'
import iconArrowRight from '@assets/images/pricing/iconArrowRight.svg'
import iconCheck from '@assets/images/pricing/iconCheck.png'
import { Link } from 'react-router-dom'

export default function PricingSection() {
  const pricingPlans = [
    {
      name: 'Gói 50 Proxy',
      price: 475000,
      address: ['Mỹ', 'Anh', 'Singapore', 'Úc'],
      ipv4: '50 IPv4 Datacenter',
      networkSpeed: '10 Gbps',
      option: 'HTTP(S)/SOCKS5',
      security: 'Có User & Pass',
      recommended: true,
    },
    {
      name: 'Gói 100 Proxy',
      price: 900000,
      address: ['Mỹ', 'Anh', 'Singapore', 'Úc'],
      ipv4: '100 IPv4 Datacenter',
      networkSpeed: '10 Gbps',
      option: 'HTTP(S)/SOCKS5',
      security: 'Có User & Pass',
      recommended: true,
    },
    {
      name: 'Gói 200 Proxy',
      price: 1700000,
      address: ['Mỹ', 'Anh', 'Singapore', 'Úc'],
      ipv4: '200 IPv4 Datacenter',
      networkSpeed: '10 Gbps',
      option: 'HTTP(S)/SOCKS5',
      security: 'Có User & Pass',
      recommended: true,
    },
    {
      name: 'Gói 500 Proxy',
      price: 4000000,
      address: ['Mỹ', 'Anh', 'Singapore', 'Úc'],
      ipv4: '500 IPv4 Datacenter',
      networkSpeed: '10 Gbps',
      option: 'HTTP(S)/SOCKS5',
      security: 'Có User & Pass',
    },
    {
      name: 'Gói 20 Proxy',
      price: 200000,
      address: ['Mỹ', 'Anh', 'Singapore', 'Úc'],
      ipv4: '20 IPv4 Datacenter',
      networkSpeed: '10 Gbps',
      option: 'HTTP(S)/SOCKS5',
      security: 'Có User & Pass',
      recommended: false,
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className='absolute lg:left-[-50px] left-[-15px] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full w-14 h-14 transition-shadow duration-300 shadow-md hover:shadow-[0px_7px_29px_rgba(100,100,111,0.2)]'
    >
      <img src={iconArrowLeft} alt='icon' className='w-full h-full object-cover' />
    </button>
  )

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className='absolute lg:right-[-50px] right-[-15px] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full w-14 h-14 shadow-md hover:shadow-[0px_7px_29px_rgba(100,100,111,0.2)]'
    >
      <img src={iconArrowRight} alt='icon' className='w-full h-full object-cover' />
    </button>
  )

  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    // slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    afterChange: (index) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section id='pricing' className='relative z-20 overflow-hidden bg-[#F7F7F1] dark:bg-dark py-10 lg:py-16'>
      <div className='container mx-auto'>
        <div className='text-center mb-10'>
          <span className='mb-2 block text-largerPrdName text-[#3B3B3B] font-semibold'>Bảng giá</span>
          <h2 className='text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]'>
            Các gói Proxy phổ biến
          </h2>
        </div>

        <div className='mt-10'>
          <Slider {...settings}>
            {pricingPlans.map((plan, index) => {
              const isActive = index === currentSlide

              return (
                <div key={index} className='p-2 mt-4'>
                  <div
                    className={`${
                      isActive ? ' scale-110' : ' scale-100'
                    } relative z-50 mb-10 overflow-hidden mx-2 text-white bg-white rounded-lg p-1 border shadow-lg dark:bg-dark-2 transition-transform duration-100`}
                    style={{
                      position: 'relative',
                      borderRadius: '12px',
                      padding: '2px',
                      background: 'linear-gradient(90deg, #cda14b, #b38728, #c3ba5a, #aa771c)',
                      maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'exclude',
                      WebkitMaskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                    }}
                  >
                    {plan.recommended && (
                      <p
                        className='absolute lg:right-[-40px] right-[-30px] top-[55px] inline-block -rotate-90  bg-[#213A57] lg:px-4 px-2 lg:py-2 py-1 lg:text-small text-[12px] font-medium text-white'
                        style={{ borderRadius: '8px 8px 0 0' }}
                      >
                        Khuyến khích
                      </p>
                    )}
                    <div className='w-full bg-white px-4 py-6 rounded-lg text-[#3B3B3B]'>
                      <h3 className='text-largerPrdName font-bold text-center'>{plan.name}</h3>

                      <ul className='mt-6 flex flex-col gap-2 w-full'>
                        <li className='lg:text-normal text-small flex items-center gap-1'>
                          <img src={iconCheck} alt='icon' className='h-4 w-4' />
                          <strong>IPv4:</strong> {plan.ipv4}
                        </li>
                        <li className='lg:text-normal text-small flex items-center gap-1'>
                          <img src={iconCheck} alt='icon' className='h-4 w-4' />
                          <strong>Tốc độ mạng:</strong> {plan.networkSpeed}
                        </li>
                        <li className='lg:text-normal text-small flex items-center gap-1'>
                          <img src={iconCheck} alt='icon' className='h-4 w-4' />
                          <strong>Vị trí:</strong> <span>{plan.address.join(', ')}</span>
                        </li>
                        <li className='lg:text-normal text-small flex items-center gap-1'>
                          <img src={iconCheck} alt='icon' className='h-4 w-4' />
                          <strong>Tùy chọn:</strong> {plan.option}
                        </li>
                        <li className='lg:text-normal text-small flex items-center gap-1'>
                          <img src={iconCheck} alt='icon' className='h-4 w-4' />
                          <strong>Bảo mật:</strong> {plan.security}
                        </li>
                      </ul>

                      <div className='flex flex-col gap-4 justify-center mt-8 '>
                        <h2 className='mb-4 lg:text-biggerName text-largerPrdName mx-auto font-semibold text-dark dark:text-white xl:leading-[1.21]'>
                          <span className='text-[#3B3B3B] font-bold'>{formatNumber(plan.price)}</span>
                          <span className={`text-[#3B3B3B] text-base font-normal`}> VNĐ/ Tháng</span>
                        </h2>

                        <Link to={'https://app.senproxies.com/'}>
                          <button className='btn-777'>Mua ngay</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </section>
  )
}
