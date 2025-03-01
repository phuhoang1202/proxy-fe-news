import React from 'react'
import { Collapse } from 'antd'
import Animation1 from '@animations/Animation1.json'
import Lottie from 'lottie-react'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import bgFaq6 from '@assets/images/faq/bgFaq6.svg'

export default function NewsAndEvents() {
  const items = [
    {
      key: '1',
      label: <h3 className='text-largerPrdName font-semibold text-white'>Proxy IPv4 Private là gì?</h3>,
      children: (
        <p className='text-textPrd font-semibold text-white'>
          Proxy IPv4 Private là một loại proxy giúp bạn sở hữu được một địa chỉ IPv4 riêng, không dùng chung địa chỉ
          IPv4 với người khác, có kết nối ổn định, bảo mật và an toàn khi truy cập internet thông qua proxy.
        </p>
      ),
    },
    {
      key: '2',
      label: (
        <h3 className='text-largerPrdName font-semibold text-white'>Proxy IPv6 là gì? Proxy Datacenter IPv6 là gì?</h3>
      ),
      children: (
        <p className='text-textPrd font-semibold text-white'>
          Proxy IPv6 là một proxy có địa chỉ IPv6, có thể kết nối đến internet, giúp người sử dụng có thể truy cập
          internet thông qua địa chỉ IPv6. Proxy IPv6 datacenter là thuật ngữ để chỉ các loại proxy có địa chỉ IP từ các
          trung tâm dữ liệu lớn, khác với các khu dân cư, thông thường chúng có tốc độ cao hơn proxy dân cư.
        </p>
      ),
    },
    {
      key: '3',
      label: (
        <h3 className='text-largerPrdName font-semibold text-white'>
          Cách phần biệt IPv4 và IPv6? Nên sử dụng loại IP nào tốt hơn?
        </h3>
      ),
      children: (
        <p className='text-textPrd font-semibold text-white'>
          Cách phân biệt IPv4 và IPv6 đơn giản nhất là nhìn vào độ dài và các ký tự trong địa chỉ IP mà bạn cần phân
          biệt. Địa chỉ IPv6 sẽ dài hơn IPv4 và IPv6 thì có cả ký tự chữ còn IPv4 chỉ bao gồm số. Nên sử dụng loại proxy
          nào còn tùy thuộc vào mục đích hoặc trang web bạn muốn truy cập là gì? Nếu trang web bạn muốn truy cập có hỗ
          trợ IPv6 (có thể truy cập vào được bằng IPv6) thì nên dùng proxy IPv6 sẽ rẻ hơn, tuy nhiên thông thường IPv4
          vẫn mang tính phổ biến hơn, được hỗ trợ nhiều hơn trên internet.
        </p>
      ),
    },
    {
      key: '4',
      label: (
        <h3 className='text-largerPrdName font-semibold text-white'>
          Cách kiểm tra địa chỉ IP có đúng với proxy không?
        </h3>
      ),
      children: (
        <p className='text-textPrd font-semibold text-white'>
          Sau khi mua proxy xong, bạn hãy đăng nhập proxy lên thiết bị hoặc trình duyệt mà bạn muốn thay đổi địa chỉ IP.
          Bây giờ để kiểm tra IP đã đúng với proxy hay chưa bạn có thể truy cập vào trang web kiemtraip.vn để kiểm tra
          IP hiện tại của mình, nếu IP hiện tại trùng với IP của proxy là đạt yêu cầu.
        </p>
      ),
    },
    {
      key: '5',
      label: <h3 className='text-largerPrdName font-semibold text-white'>Proxy có thể giúp vượt tường lửa không?</h3>,
      children: (
        <p className='text-textPrd font-semibold text-white'>
          Proxy có thể giúp bạn vượt qua một số tường lửa bằng cách che giấu IP thật và thay đổi địa chỉ IP theo quốc
          gia khác. Tuy nhiên, một số hệ thống tường lửa nâng cao vẫn có thể phát hiện và chặn proxy.
        </p>
      ),
    },
  ]

  return (
    <section className='relative z-20 overflow-hidden bg-gray-1 h-[90vh] pt-20 dark:bg-dark lg:pt-[80px] border-t'>
      <div className='container mx-auto '>
        <div className='w-full px-4'>
          <div className='mx-auto mb-[60px] max-w-[520px] text-center'>
            {/* <span className='mb-2 block text-lg font-semibold text-primary'>FAQ</span> */}
            <h2 className='mb-3 text-3xl font-bold leading-[1.2] text-[#3B3B3B] dark:text-white sm:text-4xl md:text-[40px]'>
              Tin tức và sự kiện
            </h2>
            {/* <p className='mx-auto max-w-[485px] text-base text-body-color dark:text-dark-6'>
                There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration
                in some form.
              </p> */}
          </div>
        </div>
      </div>

      {/* hero big grid */}
      <div className='py-6'>
        <div className='xl:container mx-auto px-3 sm:px-4 xl:px-2'>
          {/* big grid 1 */}
          <div className='flex flex-row flex-wrap'>
            {/*Start left cover*/}
            <div className='flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1'>
              <div className='relative hover-img max-h-98 overflow-hidden'>
                <a href='#'>
                  <img
                    className='max-w-full w-full mx-auto h-auto'
                    src='https://testrigor.com/wp-content/uploads/2023/11/How-to-Find-Proxy-Settings.jpeg'
                    alt='Image description'
                  />
                </a>
                <div className='absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover'>
                  <a href='#'>
                    <h2 className='text-3xl font-bold capitalize text-white mb-3'>
                      Amazon Shoppers Are Ditching Designer Belts for This Best-Selling
                    </h2>
                  </a>
                  <p className='text-gray-100 hidden sm:inline-block'>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                    very helpfull for generate default content..
                  </p>
                  <div className='pt-2'>
                    <div className='text-gray-100'>
                      <div className='inline-block h-3 border-l-2 border-red-600 mr-2' />
                      Europe
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Start box news*/}
            <div className='flex-shrink max-w-full w-full lg:w-1/2'>
              <div className='box-one flex flex-row flex-wrap'>
                <article className='flex-shrink max-w-full w-full sm:w-1/2'>
                  <div className='relative hover-img max-h-48 overflow-hidden'>
                    <a href='#'>
                      <img
                        className='max-w-full w-full mx-auto h-auto'
                        src='https://testrigor.com/wp-content/uploads/2023/11/How-to-Find-Proxy-Settings.jpeg'
                        alt='Image description'
                      />
                    </a>
                    <div className='absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover'>
                      <a href='#'>
                        <h2 className='text-lg font-bold capitalize leading-tight text-black mb-1'>
                          News magazines are becoming obsolete, replaced by gadgets
                        </h2>
                      </a>
                      <div className='pt-1'>
                        <div className='text-gray-100'>
                          <div className='inline-block h-3 border-l-2 border-red-600 mr-2' />
                          Techno
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className='flex-shrink max-w-full w-full sm:w-1/2'>
                  <div className='relative hover-img max-h-48 overflow-hidden'>
                    <a href='#'>
                      <img
                        className='max-w-full w-full mx-auto h-auto'
                        src='https://testrigor.com/wp-content/uploads/2023/11/How-to-Find-Proxy-Settings.jpeg'
                        alt='Image description'
                      />
                    </a>
                    <div className='absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover'>
                      <a href='#'>
                        <h2 className='text-lg font-bold capitalize leading-tight text-white mb-1'>
                          Minimalist designs are starting to be popular with the next generation
                        </h2>
                      </a>
                      <div className='pt-1'>
                        <div className='text-gray-100'>
                          <div className='inline-block h-3 border-l-2 border-red-600 mr-2' />
                          Architecture
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className='flex-shrink max-w-full w-full sm:w-1/2'>
                  <div className='relative hover-img max-h-48 overflow-hidden'>
                    <a href='#'>
                      <img
                        className='max-w-full w-full mx-auto h-auto'
                        src='https://testrigor.com/wp-content/uploads/2023/11/How-to-Find-Proxy-Settings.jpeg'
                        alt='Image description'
                      />
                    </a>
                    <div className='absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover'>
                      <a href='#'>
                        <h2 className='text-lg font-bold capitalize leading-tight text-white mb-1'>
                          Tips for decorating the interior of the living room
                        </h2>
                      </a>
                      <div className='pt-1'>
                        <div className='text-gray-100'>
                          <div className='inline-block h-3 border-l-2 border-red-600 mr-2' />
                          Interior
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className='flex-shrink max-w-full w-full sm:w-1/2'>
                  <div className='relative hover-img max-h-48 overflow-hidden'>
                    <a href='#'>
                      <img
                        className='max-w-full w-full mx-auto h-auto'
                        src='https://testrigor.com/wp-content/uploads/2023/11/How-to-Find-Proxy-Settings.jpeg'
                        alt='Image description'
                      />
                    </a>
                    <div className='absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover'>
                      <a href='#'>
                        <h2 className='text-lg font-bold capitalize leading-tight text-white mb-1'>
                          Online taxi users are increasing drastically ahead of the new year
                        </h2>
                      </a>
                      <div className='pt-1'>
                        <div className='text-gray-100'>
                          <div className='inline-block h-3 border-l-2 border-red-600 mr-2' />
                          Lifestyle
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <span className='absolute left-4 top-4 -z-[1]'>
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
        <span className='absolute bottom-4 right-4 -z-[1]'>
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

        <span className='absolute top-0 right-0'>
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
        <span className='absolute bottom-0 left-0'>
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
