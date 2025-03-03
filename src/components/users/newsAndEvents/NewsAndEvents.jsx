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
    <section className='relative z-20 overflow-hidden h-[90vh] bg-[#F7F7F1] dark:bg-dark py-14 lg:py-20 border-t'>
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
    </section>
  )
}
