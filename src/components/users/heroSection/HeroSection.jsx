import React from 'react'
import Lottie from 'lottie-react'
import bgBanner4 from '@animations/bgBanner4.json'
import bgBanner5 from '@animations/bgBanner5.json'
import { Link } from 'react-router-dom'
import ParticlesComponent from '../particlesBg/ParticlesBackground'
import polygonMesh from '@assets/images/hero/polygonMesh.mp4'
import rainfallParticles from '@assets/images/hero/rainfallParticles.mp4'
import polygonLinesDark from '@assets/images/hero/polygonLinesDark.mp4'
import stringWave from '@assets/images/hero/stringWave.mp4'
import Animation11 from '@animations/Animation11.json'

export default function HeroSection() {
  return (
    <div id='home' className='relative overflow-hidden lg:py-20 lg:h-screen h-[95vh] dark:bg-dark bg-compo'>
      <div className='z-10'>
        <ParticlesComponent />
      </div>

      <div className='absolute bottom-10 left-1/2 -translate-x-1/2 z-30'>
        <Lottie animationData={Animation11} loop={true} className='lg:w-[150px] w-[120px]' />
      </div>

      {/* Video Background */}
      {/* <video
        className='absolute top-0 left-0 w-full h-full object-cover z-0 transform scale-x-[-1]'
        src={polygonLinesDark}
        autoPlay
        loop
        muted
        playsInline
      /> */}

      <div className='absolute left-0 lg:bottom-32 bottom-4 z-30'>
        <img src='https://zingproxy.com/template/assets/images/decor-rect-5.png' alt='img' className='lg:w-full w-24' />
      </div>

      <div className='container max-w-7xl'>
        <div className='lg:mt-20 mt-20 relative'>
          <div className='absolute left-0 top-20 px-4 z-50'>
            <div className=' flex flex-col gap-8'>
              <h1
                style={{
                  background: 'linear-gradient(to bottom, #FE881C 60%, #FDCE1C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  // fontSize: '60px',
                }}
                className='font-bold uppercase lg:text-[50px] md:text-[30px] text-largerPrdName'
              >
                Dịch Vụ Proxy chất lượng cao
              </h1>

              <p className='mb-9 lg:max-w-[600px] font-medium text-white lg:text-[24px]  text-textPrd sm:leading-[1.44]'>
                Giải pháp bảo vệ tài khoản thương mại điện tử, nâng cao hiệu quả hoạt động thương mại điện tử xuyên biên
                giới.
              </p>

              <div className='flex lg:flex-row flex-col items-center gap-4'>
                <button className='btn-77 w-60 h-14'>Khám phá thêm</button>

                <button className='flex items-center justify-center gap-4 rounded-md bg-white/[0.12] h-14 w-60 px-6 py-[10px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark uppercase'>
                  Liên hệ CSKH
                </button>
              </div>

              {/* <ul className='mb-10 flex items-center gap-4'>
                <li>
                  <Link
                    to={'/'}
                    className='inline-flex items-center justify-center rounded-md px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:text-body-color uppercase bg-white hover:bg-[linear-gradient(to_bottom,_#fe881c,_#fdce1c)] hover:text-white'
                  >
                    Khám phá thêm
                  </Link>
                </li>

                <li>
                  <a
                    target='_blank'
                    class='flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark uppercase'
                  >
                    Liên hệ CSKH
                  </a>
                </li>
              </ul> */}
            </div>
          </div>

          <div className='absolute lg:-right-80 -right-40 lg:-top-40 z-30'>
            <div className='wow fadeInUp mx-auto' data-wow-delay='.25s'>
              <div className='mt-16'>
                <Lottie animationData={bgBanner4} loop={true} className='lg:w-[1300px] w-[700px] z-30' />
              </div>
            </div>
          </div>
        </div>

        <div className='absolute right-0 lg:top-20 top-10 z-30'>
          <img
            src='https://zingproxy.com/template/assets/images/decor-rect-7.png'
            alt='img'
            className='lg:w-full w-24'
          />
        </div>
      </div>
    </div>
  )
}
