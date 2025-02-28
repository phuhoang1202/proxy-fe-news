import React from 'react'
import Logo from '@assets/images/logo/LogoBgCaro.png'
import { Link } from 'react-router-dom'
import IconFB from '@assets/icons/user/IconFB.png'
import IconZL from '@assets/icons/user/IconZL.svg'
import IconTelegram from '@assets/icons/user/IconTelegram.svg'

export default function FooterSection() {
  const menuItems = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Giới thiệu', path: '/' },
    { name: 'Dịch vụ proxies', path: '/' },
    { name: 'Bài viết', path: '/' },
    { name: 'Liên hệ', path: '/' },
  ]

  const menuItems2 = [
    { name: 'Mua proxy', path: '/' },
    { name: 'Proxy Việt Nam', path: '/' },
    { name: 'Proxy US (Mỹ)', path: '/' },
    { name: 'Proxy UK (Anh)', path: '/' },
    { name: 'Proxy SG (Singapore)', path: '/' },
    { name: 'Proxy Dân cư IP tĩnh', path: '/' },
    { name: 'Proxy Dân cư xoay IP', path: '/' },
  ]

  const menuItems3 = [
    { name: 'Bảo hành', path: '/' },
    { name: 'Hỗ trợ 1:1', path: '/' },
    { name: 'Liên hệ', path: '/' },
  ]

  const socialNetwork = [
    {
      images: IconFB,
      altImg: 'Facebook',
      linkSocial: '/',
    },
    {
      images: IconZL,
      altImg: 'Zalo',
      linkSocial: '/',
    },
    {
      images: IconTelegram,
      altImg: 'Telegram',
      linkSocial: '/',
    },
  ]

  return (
    <footer className='wow fadeInUp relative z-10 bg-[#090E34] pt-14' data-wow-delay='.15s'>
      <div className='container'>
        <div className='grid grid-cols-5 gap-4'>
          <div className='col-span-2 w-full px-4'>
            <div className='w-full'>
              <Link to={'/'} className='flex items-center gap-0 text-biggerName'>
                <img src={Logo} alt='logo' className='header-logo w-32' />
                <strong className='text-logo-footer'>Senproxies</strong>
              </Link>
              <p className='mb-8 text-primaryPrdName text-gray-7'>
                SENPROXIES cung cấp dịch vụ proxy chất lượng cao, giúp duyệt web ẩn danh và an toàn. Đăng ký ngay để có
                proxy nhanh chóng và đáng tin cậy!
              </p>
              <div className='-mx-3 flex items-center'>
                {socialNetwork.map((social, index) => {
                  return (
                    <Link to={social.linkSocial} className='px-3 text-gray-7 hover:text-white' key={index}>
                      <img src={social.images} alt='icon' className='w-10' />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='w-full px-4 '>
            <div className='mb-10 w-full'>
              <h4 className='mb-9 text-lg font-semibold text-white'>Về chúng tôi</h4>
              <ul>
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className='mb-3 inline-block text-base capitalize text-gray-7 hover:text-primary'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='w-full px-4'>
            <div className='mb-10 w-full'>
              <h4 className='mb-9 text-lg font-semibold text-white'>Mua Proxy</h4>
              <ul>
                {menuItems2.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className='mb-3 inline-block text-base capitalize text-gray-7 hover:text-primary'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='w-full px-4'>
            <div className='mb-10 w-full'>
              <h4 className='mb-9 text-lg font-semibold text-white'>Chính Sách</h4>
              <ul>
                {menuItems3.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className='mb-3 inline-block text-base text-gray-7 capitalize hover:text-primary'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-4 border-t border-[#8890A4] border-opacity-40 py-8'>
        <div className='container'>
          <div className='w-full flex justify-center'>
            <div className='my-1 flex justify-center md:justify-end'>
              <p className='text-base text-gray-7'>
                Designed and Developed by
                <a
                  href='https://tailgrids.com'
                  rel='nofollow noopner'
                  target='_blank'
                  className='text-gray-1 hover:underline'
                >
                  TailGrids and UIdeck
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
