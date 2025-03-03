import React, { useEffect, useState } from 'react'
import worldMap from '@assets/images/about/world-map.webp'
import Lottie from 'lottie-react'
import Animation15 from '@animations/Animation15.json'
import Flag from 'react-world-flags'
import { Statistic, Tooltip } from 'antd'
import CountUp from 'react-countup'

export default function AboutSection() {
  const [fontSize, setFontSize] = useState(window.innerWidth <= 768 ? '50px' : '180px')

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth <= 768 ? '50px' : '180px')
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const locations = [
    {
      name: 'Brazil',
      countryCode: 'br',
      bottom: 'bottom-[30%]',
      left: 'left-[31%]',
      nameProxy: 'Proxy Brazil',
      ipProxy: '103.X.X.X',
      content: 'Proxy located in Brazil',
    },
    {
      name: 'Mỹ',
      countryCode: 'us',
      top: 'top-[35%]',
      left: 'left-[17%]',
      nameProxy: 'Proxy Mỹ',
      ipProxy: '103.X.X.X',
      content: 'Proxy located in USA',
    },
    {
      name: 'Mexico',
      countryCode: 'mx',
      top: 'top-[44%]',
      left: 'left-[16%]',
      nameProxy: 'Proxy Mexico',
      ipProxy: '103.X.X.X',
      content: 'Proxy located in Mexico',
    },
    {
      name: 'Anh',
      countryCode: 'gb',
      top: 'top-[24%]',
      right: 'right-[52%]',
      nameProxy: 'Proxy Anh',
      ipProxy: '103.X.X.X',
      content: 'Proxy located in UK',
    },
    {
      name: 'Ba Lan',
      countryCode: 'pl',
      top: 'top-[24%]',
      right: 'right-[44%]',
      nameProxy: 'Proxy Ba Lan',
      ipProxy: '103.X.X.X',
      content: 'Proxy located in Poland',
    },
    {
      name: 'Libya',
      countryCode: 'ly',
      top: 'top-[42%]',
      right: 'right-[45%]',
      nameProxy: 'Proxy Libya',
      ipProxy: '103.X.X.X',
      content: 'Proxy located in Libya',
    },
    {
      name: 'Nigeria',
      countryCode: 'ng',
      top: 'top-[48%]',
      right: 'right-[46%]',
      nameProxy: 'Proxy Nigeria',
      ipProxy: '103.7.7.7',
      content: 'Proxy located in Nigeria',
    },
    {
      name: 'Trung Quốc',
      countryCode: 'cn',
      top: 'top-[38%]',
      right: 'right-[22%]',
      nameProxy: 'Proxy Trung Quốc',
      ipProxy: '103.8.8.8',
      content: 'Proxy located in China',
    },
    {
      name: 'Thổ Nhĩ Kỳ',
      countryCode: 'tr',
      top: 'top-[38%]',
      right: 'right-[35%]',
      nameProxy: 'Proxy Thổ Nhĩ Kỳ',
      ipProxy: '103.9.9.9',
      content: 'Proxy located in Turkey',
    },
    {
      name: 'Hồng Kông',
      countryCode: 'hk',
      top: 'top-[42%]',
      right: 'right-[17%]',
      nameProxy: 'Proxy Hồng Kông',
      ipProxy: '103.X.X.X',
      content: 'Proxy located in Hong Kong',
    },
    {
      name: 'Việt Nam',
      countryCode: 'vn',
      top: 'top-[46%]',
      right: 'right-[21%]',
      nameProxy: 'Proxy Việt Nam',
      ipProxy: '103.X.X.X',
      content: 'Proxy located in Vietnam',
    },
    {
      name: 'Singapore',
      countryCode: 'sg',
      bottom: 'bottom-[34%]',
      right: 'right-[21%]',
      nameProxy: 'Proxy Singapore',
      ipProxy: '103.X.X.X',
      content: 'Proxy located in Singapore',
    },
    {
      name: 'Thái Lan',
      countryCode: 'th',
      top: 'top-[45%]',
      right: 'right-[24%]',
      nameProxy: 'Proxy Thái Lan',
      ipProxy: '103.X.X.X',
      content: 'Proxy located in Thailand',
    },
    {
      name: 'Australia',
      countryCode: 'au',
      bottom: 'bottom-[20%]',
      right: 'right-[12%]',
      nameProxy: 'Proxy Australia',
      ipProxy: '103.X.X.X',
      content: 'Proxy located in Australia',
    },
    {
      name: 'Nga',
      countryCode: 'ru',
      top: 'top-[16%]',
      right: 'right-[21%]',
      nameProxy: 'Proxy Nga',
      ipProxy: '103.X.X.X',
      content: 'Proxy located in Russia',
    },
  ]

  return (
    <section id='about' className='bg-gray-1 dark:bg-dark-2 pb-14 lg:pb-[60px] z-30 relative'>
      <div className='container z-30'>
        <div className='wow fadeInUp' data-wow-delay='.2s'>
          <div className='text-center z-30'>
            <h2 className='lg:text-4xl text-largerPrdName font-bold'>Mua proxy IPv4, IPv6 toàn thế giới</h2>

            <div className='relative z-20 mt-8'>
              <img src={worldMap} alt='World Map' />
              {locations.map((location, index) => (
                <div
                  key={index}
                  className={`absolute z-20 ${location.top || ''} ${location.bottom || ''} ${location.left || ''} ${
                    location.right || ''
                  } group`}
                >
                  <Tooltip
                    title={
                      <div className=' p-4 rounded shadow-lg w-full'>
                        <div className='flex flex-col gap-4'>
                          <div className='flex items-center gap-6 ml-4'>
                            <div className='w-24 h-18 shadow-sm border rounded-sm'>
                              <Flag code={location.countryCode} className='w-full h-full object-cover' />
                            </div>
                            <div className='flex flex-col items-start'>
                              <strong className='text-largerPrdName font-semibold'>{location.nameProxy}</strong>
                              <p className='text-textPrd font-semibold'>{location.ipProxy}</p>
                            </div>
                          </div>
                          <p className='text-textPrd font-medium mx-auto'>{location.content}</p>
                          <div className='mx-auto'>
                            <button
                              className='lg:w-72 w-60 h-11 text-black text-textPrd font-semibold py-2 px-4 rounded flex items-center justify-center shadow-lg transition-transform transform active:scale-95'
                              style={{
                                background: 'linear-gradient(to right, #2B5876, #4E4376)',
                              }}
                            >
                              Mua Proxy
                            </button>
                          </div>
                        </div>
                      </div>
                    }
                    placement='top'
                    overlayStyle={{ maxWidth: 'unset' }}
                    overlayInnerStyle={{ width: '380px', padding: 0 }}
                  >
                    <Lottie animationData={Animation15} loop={true} className='lg:w-10 md:w-6 w-4' />
                  </Tooltip>
                </div>
              ))}

              <div className='absolute -bottom-[10%] lg:right-[10%]  text-center'>
                <div className='flex lg:flex-row flex-col lg:items-center items-start lg:gap-2'>
                  <div>
                    <Statistic
                      value={195}
                      valueStyle={{
                        fontWeight: 'bold',
                        fontSize: fontSize,
                        background:
                          'linear-gradient(30deg, rgba(24, 17, 75, 1) 30%, rgba(45, 43, 116, 1) 60%, rgba(80, 84, 182, 1) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                      formatter={(value) => <CountUp start={0} end={value} duration={3} />}
                    />
                  </div>
                  <p className='lg:text-bigPrdName text-textPrd font-semibold lg:mt-24 mt-2'>
                    Quốc gia và vùng lãnh thổ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <span className='absolute left-4 top-4 -z-[1] lg:block hidden'>
          <svg width={48} height={134} viewBox='0 0 48 134' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='45.6673' cy={132} r='1.66667' transform='rotate(180 45.6673 132)' fill='#13C296' />
            <circle cx='45.6673' cy='117.333' r='1.66667' transform='rotate(180 45.6673 117.333)' fill='#13C296' />
            <circle cx='45.6673' cy='102.667' r='1.66667' transform='rotate(180 45.6673 102.667)' fill='#13C296' />
            <circle cx='45.6673' cy='88.0001' r='1.66667' transform='rotate(180 45.6673 88.0001)' fill='#13C296' />
            <circle cx='45.6673' cy='73.3335' r='1.66667' transform='rotate(180 45.6673 73.3335)' fill='#13C296' />
            <circle cx='45.6673' cy='45.0001' r='1.66667' transform='rotate(180 45.6673 45.0001)' fill='#13C296' />
            <circle cx='45.6673' cy='16.0001' r='1.66667' transform='rotate(180 45.6673 16.0001)' fill='#13C296' />
            <circle cx='45.6673' cy='59.0001' r='1.66667' transform='rotate(180 45.6673 59.0001)' fill='#13C296' />
            <circle cx='45.6673' cy='30.6668' r='1.66667' transform='rotate(180 45.6673 30.6668)' fill='#13C296' />
            <circle cx='45.6673' cy='1.66683' r='1.66667' transform='rotate(180 45.6673 1.66683)' fill='#13C296' />
            <circle cx='31.0013' cy={132} r='1.66667' transform='rotate(180 31.0013 132)' fill='#13C296' />
            <circle cx='31.0013' cy='117.333' r='1.66667' transform='rotate(180 31.0013 117.333)' fill='#13C296' />
            <circle cx='31.0013' cy='102.667' r='1.66667' transform='rotate(180 31.0013 102.667)' fill='#13C296' />
            <circle cx='31.0013' cy='88.0001' r='1.66667' transform='rotate(180 31.0013 88.0001)' fill='#13C296' />
            <circle cx='31.0013' cy='73.3335' r='1.66667' transform='rotate(180 31.0013 73.3335)' fill='#13C296' />
            <circle cx='31.0013' cy='45.0001' r='1.66667' transform='rotate(180 31.0013 45.0001)' fill='#13C296' />
            <circle cx='31.0013' cy='16.0001' r='1.66667' transform='rotate(180 31.0013 16.0001)' fill='#13C296' />
            <circle cx='31.0013' cy='59.0001' r='1.66667' transform='rotate(180 31.0013 59.0001)' fill='#13C296' />
            <circle cx='31.0013' cy='30.6668' r='1.66667' transform='rotate(180 31.0013 30.6668)' fill='#13C296' />
            <circle cx='31.0013' cy='1.66683' r='1.66667' transform='rotate(180 31.0013 1.66683)' fill='#13C296' />
            <circle cx='16.3333' cy={132} r='1.66667' transform='rotate(180 16.3333 132)' fill='#13C296' />
            <circle cx='16.3333' cy='117.333' r='1.66667' transform='rotate(180 16.3333 117.333)' fill='#13C296' />
            <circle cx='16.3333' cy='102.667' r='1.66667' transform='rotate(180 16.3333 102.667)' fill='#13C296' />
            <circle cx='16.3333' cy='88.0001' r='1.66667' transform='rotate(180 16.3333 88.0001)' fill='#13C296' />
            <circle cx='16.3333' cy='73.3335' r='1.66667' transform='rotate(180 16.3333 73.3335)' fill='#13C296' />
            <circle cx='16.3333' cy='45.0001' r='1.66667' transform='rotate(180 16.3333 45.0001)' fill='#13C296' />
            <circle cx='16.3333' cy='16.0001' r='1.66667' transform='rotate(180 16.3333 16.0001)' fill='#13C296' />
            <circle cx='16.3333' cy='59.0001' r='1.66667' transform='rotate(180 16.3333 59.0001)' fill='#13C296' />
            <circle cx='16.3333' cy='30.6668' r='1.66667' transform='rotate(180 16.3333 30.6668)' fill='#13C296' />
            <circle cx='16.3333' cy='1.66683' r='1.66667' transform='rotate(180 16.3333 1.66683)' fill='#13C296' />
            <circle cx='1.66732' cy={132} r='1.66667' transform='rotate(180 1.66732 132)' fill='#13C296' />
            <circle cx='1.66732' cy='117.333' r='1.66667' transform='rotate(180 1.66732 117.333)' fill='#13C296' />
            <circle cx='1.66732' cy='102.667' r='1.66667' transform='rotate(180 1.66732 102.667)' fill='#13C296' />
            <circle cx='1.66732' cy='88.0001' r='1.66667' transform='rotate(180 1.66732 88.0001)' fill='#13C296' />
            <circle cx='1.66732' cy='73.3335' r='1.66667' transform='rotate(180 1.66732 73.3335)' fill='#13C296' />
            <circle cx='1.66732' cy='45.0001' r='1.66667' transform='rotate(180 1.66732 45.0001)' fill='#13C296' />
            <circle cx='1.66732' cy='16.0001' r='1.66667' transform='rotate(180 1.66732 16.0001)' fill='#13C296' />
            <circle cx='1.66732' cy='59.0001' r='1.66667' transform='rotate(180 1.66732 59.0001)' fill='#13C296' />
            <circle cx='1.66732' cy='30.6668' r='1.66667' transform='rotate(180 1.66732 30.6668)' fill='#13C296' />
            <circle cx='1.66732' cy='1.66683' r='1.66667' transform='rotate(180 1.66732 1.66683)' fill='#13C296' />
          </svg>
        </span>
        <span className='absolute bottom-4 right-4 -z-[1] lg:block hidden'>
          <svg width={48} height={134} viewBox='0 0 48 134' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='45.6673' cy={132} r='1.66667' transform='rotate(180 45.6673 132)' fill='#3758F9' />
            <circle cx='45.6673' cy='117.333' r='1.66667' transform='rotate(180 45.6673 117.333)' fill='#3758F9' />
            <circle cx='45.6673' cy='102.667' r='1.66667' transform='rotate(180 45.6673 102.667)' fill='#3758F9' />
            <circle cx='45.6673' cy='88.0001' r='1.66667' transform='rotate(180 45.6673 88.0001)' fill='#3758F9' />
            <circle cx='45.6673' cy='73.3333' r='1.66667' transform='rotate(180 45.6673 73.3333)' fill='#3758F9' />
            <circle cx='45.6673' cy='45.0001' r='1.66667' transform='rotate(180 45.6673 45.0001)' fill='#3758F9' />
            <circle cx='45.6673' cy='16.0001' r='1.66667' transform='rotate(180 45.6673 16.0001)' fill='#3758F9' />
            <circle cx='45.6673' cy='59.0001' r='1.66667' transform='rotate(180 45.6673 59.0001)' fill='#3758F9' />
            <circle cx='45.6673' cy='30.6668' r='1.66667' transform='rotate(180 45.6673 30.6668)' fill='#3758F9' />
            <circle cx='45.6673' cy='1.66683' r='1.66667' transform='rotate(180 45.6673 1.66683)' fill='#3758F9' />
            <circle cx='31.0006' cy={132} r='1.66667' transform='rotate(180 31.0006 132)' fill='#3758F9' />
            <circle cx='31.0006' cy='117.333' r='1.66667' transform='rotate(180 31.0006 117.333)' fill='#3758F9' />
            <circle cx='31.0006' cy='102.667' r='1.66667' transform='rotate(180 31.0006 102.667)' fill='#3758F9' />
            <circle cx='31.0006' cy='88.0001' r='1.66667' transform='rotate(180 31.0006 88.0001)' fill='#3758F9' />
            <circle cx='31.0008' cy='73.3333' r='1.66667' transform='rotate(180 31.0008 73.3333)' fill='#3758F9' />
            <circle cx='31.0008' cy='45.0001' r='1.66667' transform='rotate(180 31.0008 45.0001)' fill='#3758F9' />
            <circle cx='31.0008' cy='16.0001' r='1.66667' transform='rotate(180 31.0008 16.0001)' fill='#3758F9' />
            <circle cx='31.0008' cy='59.0001' r='1.66667' transform='rotate(180 31.0008 59.0001)' fill='#3758F9' />
            <circle cx='31.0008' cy='30.6668' r='1.66667' transform='rotate(180 31.0008 30.6668)' fill='#3758F9' />
            <circle cx='31.0008' cy='1.66683' r='1.66667' transform='rotate(180 31.0008 1.66683)' fill='#3758F9' />
            <circle cx='16.3341' cy={132} r='1.66667' transform='rotate(180 16.3341 132)' fill='#3758F9' />
            <circle cx='16.3341' cy='117.333' r='1.66667' transform='rotate(180 16.3341 117.333)' fill='#3758F9' />
            <circle cx='16.3341' cy='102.667' r='1.66667' transform='rotate(180 16.3341 102.667)' fill='#3758F9' />
            <circle cx='16.3341' cy='88.0001' r='1.66667' transform='rotate(180 16.3341 88.0001)' fill='#3758F9' />
            <circle cx='16.3338' cy='73.3333' r='1.66667' transform='rotate(180 16.3338 73.3333)' fill='#3758F9' />
            <circle cx='16.3338' cy='45.0001' r='1.66667' transform='rotate(180 16.3338 45.0001)' fill='#3758F9' />
            <circle cx='16.3338' cy='16.0001' r='1.66667' transform='rotate(180 16.3338 16.0001)' fill='#3758F9' />
            <circle cx='16.3338' cy='59.0001' r='1.66667' transform='rotate(180 16.3338 59.0001)' fill='#3758F9' />
            <circle cx='16.3338' cy='30.6668' r='1.66667' transform='rotate(180 16.3338 30.6668)' fill='#3758F9' />
            <circle cx='16.3338' cy='1.66683' r='1.66667' transform='rotate(180 16.3338 1.66683)' fill='#3758F9' />
            <circle cx='1.66732' cy={132} r='1.66667' transform='rotate(180 1.66732 132)' fill='#3758F9' />
            <circle cx='1.66732' cy='117.333' r='1.66667' transform='rotate(180 1.66732 117.333)' fill='#3758F9' />
            <circle cx='1.66732' cy='102.667' r='1.66667' transform='rotate(180 1.66732 102.667)' fill='#3758F9' />
            <circle cx='1.66732' cy='88.0001' r='1.66667' transform='rotate(180 1.66732 88.0001)' fill='#3758F9' />
            <circle cx='1.66732' cy='73.3333' r='1.66667' transform='rotate(180 1.66732 73.3333)' fill='#3758F9' />
            <circle cx='1.66732' cy='45.0001' r='1.66667' transform='rotate(180 1.66732 45.0001)' fill='#3758F9' />
            <circle cx='1.66732' cy='16.0001' r='1.66667' transform='rotate(180 1.66732 16.0001)' fill='#3758F9' />
            <circle cx='1.66732' cy='59.0001' r='1.66667' transform='rotate(180 1.66732 59.0001)' fill='#3758F9' />
            <circle cx='1.66732' cy='30.6668' r='1.66667' transform='rotate(180 1.66732 30.6668)' fill='#3758F9' />
            <circle cx='1.66732' cy='1.66683' r='1.66667' transform='rotate(180 1.66732 1.66683)' fill='#3758F9' />
          </svg>
        </span>
      </div>

      {/* <div className='absolute left-0 bottom-32 z-30'>
        <img src='https://zingproxy.com/template/assets/images/decor-rect-5.png' alt='img' />
      </div> */}
    </section>
  )
}
