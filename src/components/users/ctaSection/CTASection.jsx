import React from 'react'
import Lottie from 'lottie-react'
import Animation10 from '@animations/Animation10.json'

export default function CTASection() {
  return (
    <section className='relative z-10 overflow-hidden bg-compo2 py-14 lg:py-[115px]'>
      <div className='absolute lg:left-0 lg:top-[-98%] top-[-28%]'>
        <Lottie animationData={Animation10} loop={true} className='z-30' />
      </div>
      <div className='container mx-auto'>
        <div className='relative overflow-hidden'>
          <div className='-mx-4 flex flex-wrap items-stretch'>
            <div className='w-full px-4'>
              <div className='mx-auto text-center'>
                <h2 className='mb-2.5 lg:text-biggerName text-textPrd font-bold text-white md:leading-[1.44]'>
                  <span>Bạn đang tìm kiếm điều gì?</span> <br />
                  <span className='lg:text-biggerName text-largerPrdName font-medium ml-2'>Bắt đầu ngay bây giờ</span>
                </h2>
                <p className='mx-auto mb-6 lg:max-w-[515px] text-base leading-[1.5] text-white mt-6'>
                  Truy cập internet ẩn danh, bảo vệ quyền riêng tư và vượt qua mọi giới hạn địa lý với hệ thống Proxy
                  cao cấp của chúng tôi. Kết nối ổn định, tốc độ nhanh và hỗ trợ 24/7.
                </p>
                {/* <div className='inline-block rounded-md border border-transparent px-7 py-3 text-base font-medium transition cursor-pointer '>
                  Bắt đầu ngay
                </div> */}
                <button className='gap-4 rounded-md bg-white/[0.12] h-14 w-60 px-6 py-[10px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark uppercase mt-4'>
                  Liên hệ CSKH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className='absolute left-0 top-0'>
          <svg width={495} height={470} viewBox='0 0 495 470' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx={55} cy={442} r={138} stroke='white' strokeOpacity='0.04' strokeWidth={50} />
            <circle cx={446} r={39} stroke='white' strokeOpacity='0.04' strokeWidth={20} />
            <path
              d='M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z'
              stroke='white'
              strokeOpacity='0.08'
              strokeWidth={12}
            />
          </svg>
        </span>
        <span className='absolute bottom-0 right-0'>
          <svg width={493} height={470} viewBox='0 0 493 470' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx={462} cy={5} r={138} stroke='white' strokeOpacity='0.04' strokeWidth={50} />
            <circle cx={49} cy={470} r={39} stroke='white' strokeOpacity='0.04' strokeWidth={20} />
            <path
              d='M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z'
              stroke='white'
              strokeOpacity='0.06'
              strokeWidth={13}
            />
          </svg>
        </span>
      </div>
    </section>
  )
}
