import React from 'react'
import bgFeature2 from '@animations/bgFeature2.json'
import Lottie from 'lottie-react'
import icon1 from '@assets/images/feature/icon1.json'
import icon2 from '@assets/images/feature/icon2.json'
import icon3 from '@assets/images/feature/icon3.json'
import icon4 from '@assets/images/feature/icon4.json'

export default function Features() {
  const dataFeature = [
    {
      id: 1,
      image: icon1,
      title: 'Dễ dàng sử dụng',
      content: 'Chỉ cần đăng ký tài khoản và chọn quốc gia bạn muốn sử dụng IP hoặc Proxy, không cần cài đặt phức tạp.',
    },
    {
      id: 2,
      image: icon2,
      title: 'Khởi tạo nhanh',
      content:
        'Tạo IP Proxy chỉ với một cú nhấp chuột, hệ thống tự động quản lý và gia hạn giúp bạn tiết kiệm thời gian.',
    },
    {
      id: 3,
      image: icon3,
      title: 'Bảo mật tối đa',
      content: 'Cam kết bảo vệ dữ liệu và quyền riêng tư của khách hàng với các tiêu chuẩn bảo mật cao cấp.',
    },
    {
      id: 4,
      image: icon4,
      title: 'Địa chỉ IP đa dạng',
      content: 'Hơn 190 quốc gia và hơn 2.000 trung tâm dữ liệu giúp bạn dễ dàng lựa chọn IP phù hợp với nhu cầu.',
    },
  ]

  return (
    <section className='relative z-20 pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]'>
      <div className='container'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]'>
              {/* <span className='mb-2 block text-lg font-semibold text-primary'>Features</span> */}
              <h2 className='mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]'>
                Tại sao nên lựa chọn <br /> <span className='text-logo'>SENPROXIES</span>
              </h2>
              <p className='text-base text-body-color dark:text-dark-6'>
                Cung cấp cho bạn một giải pháp IPv4 và IPv6 tại quốc gia mà bạn cần với chi phí tối ưu và trải nghiệm
                dịch vụ tốt nhất
              </p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
          {dataFeature.map((el, index) => {
            return (
              <div className='w-full relative' key={index}>
                <div className='absolute left-0 top-0 w-full'>
                  <Lottie animationData={bgFeature2} loop={true} className='h-96 w-full' />
                </div>
                <div className='bg-compo rounded-lg text-white p-8 text-center flex flex-col gap-4 min-h-96 '>
                  <div className='w-32 h-32 mx-auto bg-white p-4 rounded-full z-20'>
                    <Lottie animationData={el.image} loop={true} className='w-full' />
                  </div>

                  <h3 className='text-largerPrdName uppercase font-semibold mt-4 min-h-10'>{el.title}</h3>

                  <p className='font-medium'>{el.content}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
