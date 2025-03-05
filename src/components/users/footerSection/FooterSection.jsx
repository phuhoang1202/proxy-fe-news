import React from 'react'
import Logo from '@assets/images/logo/LogoBgCaro.png'
import { Link } from 'react-router-dom'
import IconFB from '@assets/icons/user/IconFB.png'
import IconZL from '@assets/icons/user/IconZL.svg'
import IconTelegram from '@assets/icons/user/IconTelegram.svg'
import IconPhone from '@assets/icons/user/IconPhone.svg'

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
    { name: 'Hỗ trợ 1:1', path: 'tel:0368864688' },
    { name: 'Bài viết', path: 'https://app.senproxies.com/posts/news' },
    { name: 'Điều kiện và điều khoản', path: 'https://app.senproxies.com/posts/term' },
    { name: 'Chính sách hoàn tiền', path: 'https://app.senproxies.com/posts/policy' },
    { name: 'Liên hệ', path: 'https://app.senproxies.com/posts/contact' },
  ]

  const socialNetwork = [
    {
      images: IconPhone,
      altImg: 'Phone',
      linkSocial: 'tel:0368864688',
    },
    {
      images: IconZL,
      altImg: 'Zalo',
      linkSocial: 'https://zalo.me/0368864688',
    },
    {
      images: IconTelegram,
      altImg: 'Telegram',
      linkSocial: 'https://t.me/phantoan116',
    },
  ]

  return (
    <footer className='wow fadeInUp relative z-10 bg-[#090E34] py-4 lg:py-16' data-wow-delay='.15s'>
      <div className='container'>
        <div className='flex lg:flex-row flex-col items-center lg:mt-10 gap-8'>
          <div className='w-full px-4'>
            <div className='w-full'>
              <Link to={'/'} className='flex items-center gap-0 text-biggerName'>
                <img src={Logo} alt='logo' className='header-logo w-32' />
                <strong className='text-logo-footer lg:text-biggerName text-bigPrdName'>Senproxies</strong>
              </Link>
              <p className='mb-8 lg:text-primaryPrdName text-gray-7'>
                SENPROXIES cung cấp dịch vụ proxy chất lượng cao, giúp duyệt web ẩn danh và an toàn. Đăng ký ngay để có
                proxy nhanh chóng và đáng tin cậy!
              </p>
              <div className='-mx-3 flex items-center'>
                {socialNetwork.map((social, index) => {
                  return (
                    <a
                      href={social.linkSocial}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='px-3 text-gray-7 hover:text-white cursor-pointer'
                      key={index}
                    >
                      {social.altImg === 'Phone' ? (
                        <div
                          className='rounded-full p-3 w-11 cursor-pointer'
                          style={{ background: 'linear-gradient(#8a82fb, #407ed7)' }}
                        >
                          <img src={social.images} alt='icon' className='w-8' />
                        </div>
                      ) : (
                        <img src={social.images} alt='icon' className='w-10' />
                      )}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='flex w-full'>
            <div className='w-full lg:px-4 px-2'>
              <div className='w-full'>
                <h4 className='lg:mb-9 mb-4 lg:text-primaryPrdName text-normal font-semibold text-white'>
                  Về chúng tôi
                </h4>
                <ul>
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.path}
                        className='mb-3 inline-block lg:text-normal text-small capitalize text-gray-7 hover:text-primary'
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='w-full lg:px-4 px-2'>
              <div className='w-full'>
                <h4 className='lg:mb-9 mb-4 lg:text-primaryPrdName text-normal font-semibold text-white'>Mua Proxy</h4>
                <ul>
                  {menuItems2.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.path}
                        className='mb-3 inline-block lg:text-normal text-small capitalize text-gray-7 hover:text-primary'
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
                <h4 className='lg:mb-9 mb-4 lg:text-primaryPrdName text-normal font-semibold text-white'>Chính Sách</h4>
                <ul>
                  {menuItems3.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.path}
                        className='mb-3 inline-block lg:text-normal text-small text-gray-7 capitalize hover:text-primary'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='mt-4 border-t border-[#8890A4] border-opacity-40 py-8'>
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
      </div> */}

      <div>
        <span className='absolute left-0 top-0'>
          <svg width={200} height={250} viewBox='0 0 495 470' fill='none' xmlns='http://www.w3.org/2000/svg'>
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

        <span className='absolute top-0 right-0'>
          <svg width={200} height={250} viewBox='0 0 495 470' fill='none' xmlns='http://www.w3.org/2000/svg'>
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

        <span className='absolute bottom-0 left-0'>
          <svg width={200} height={250} viewBox='0 0 493 470' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
        <span className='absolute bottom-0 right-0'>
          <svg width={200} height={250} viewBox='0 0 493 470' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
    </footer>
  )
}
