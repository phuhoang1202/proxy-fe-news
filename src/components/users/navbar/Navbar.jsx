import React, { useEffect, useState } from 'react'
import Logo from '@assets/images/logo/LogoBgCaro.png'
import IconDark from '@assets/icons/IconDark'
import IconUnDark from '@assets/icons/IconUnDark'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches),
  )

  const [scrolling, setScrolling] = useState(false)

  const menuItems = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'Mua proxy', href: '#about' },
    { name: 'Giá proxy', href: '#pricing' },
    { name: 'FAQ', href: '#question' },
    { name: 'Bài viết', href: '#content' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [darkMode])

  return (
    <div
      className={`fixed left-0 top-0 z-50 flex w-full items-center transition-all duration-300 ${
        scrolling ? 'sticky' : ''
      }`}
    >
      <div className='container'>
        <div className='relative -mx-4 flex items-center justify-between'>
          <div className='px-4'>
            <Link to={'/'} className='flex items-center gap-0'>
              <img src={Logo} alt='logo' className='header-logo w-20' />
              <strong className='text-logo lg:text-[32px] text-textPrd'>Senproxies</strong>
            </Link>
          </div>
          <div className='flex w-full items-center justify-between px-4'>
            <div>
              <button
                id='navbarToggler'
                className='absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden'
              >
                <span className='relative my-[6px] block h-[2px] w-[30px] bg-white' />
                <span className='relative my-[6px] block h-[2px] w-[30px] bg-white' />
                <span className='relative my-[6px] block h-[2px] w-[30px] bg-white' />
              </button>
              <nav
                id='navbarCollapse'
                className='absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6'
              >
                <ul className='blcok lg:flex 2xl:ml-20'>
                  {menuItems.map((item, index) => (
                    <li key={index} className='group relative'>
                      <button
                        onClick={() => {
                          const element = document.getElementById(item.href.replace('#', ''))
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' })
                          }
                        }}
                        className={`${
                          scrolling ? 'text-[#3B3B3B]' : 'text-white'
                        } mx-8 flex py-2  text-primaryPrdName font-medium lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:group-hover:opacity-70 xl:ml-10`}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div
              className='flex items-center justify-end pr-16 lg:pr-0 cursor-pointer'
              onClick={() => setDarkMode(!darkMode)}
            >
              {/* <span className=' text-white '>{darkMode ? <IconUnDark /> : <IconDark />}</span> */}
            </div>

            <div className='hidden sm:flex'>
              <Link
                to='https://app.senproxies.com'
                className='loginBtn px-[22px] py-2 text-primaryPrdName font-medium text-white hover:opacity-70'
              >
                Đăng nhập
              </Link>
              <Link
                to='https://app.senproxies.com'
                className='signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-primaryPrdName font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark'
              >
                Đăng ký
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
