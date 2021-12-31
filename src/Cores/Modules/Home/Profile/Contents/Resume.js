export default function Resume(props) {
  return (
    <section id="resume" className={'bg-white py-20 px-10'}>
      <div className={'grid grid-cols-1 md:grid-cols-2 w-full lg:max-w-[1200px] mx-auto'}>
        <div>
          <div className={'uppercase text-6xl'}>
            My <span className={'font-semibold'}>Profile</span>
          </div>
          <div className={'mt-16'}>
            <div className={'flex my-6'}>
              <div className={'font-semibold min-w-[80px]'}>Name</div>
              <div>Vu Truong</div>
            </div>
            <div className={'flex my-6'}>
              <div className={'font-semibold min-w-[80px]'}>Birthbay</div>
              <div>February 20, 1993</div>
            </div>
            <div className={'flex my-6'}>
              <div className={'font-semibold min-w-[80px]'}>Address</div>
              <div>Ho Chi Minh City, VietNam</div>
            </div>
            <div className={'flex my-6'}>
              <div className={'font-semibold min-w-[80px]'}>Phone</div>
              <div>+84 1234 567 890</div>
            </div>
            <div className={'flex my-6'}>
              <div className={'font-semibold min-w-[80px]'}>Email</div>
              <div className={'text-orange-500'}>
                <a href="mailto:truongphuocvu2003@gmail.com" target="_blank" rel="noreferrer">
                  truongphuocvu2003@gmail.com
                </a>
              </div>
            </div>
            <div className={'flex my-6'}>
              <div className={'font-semibold min-w-[80px]'}>Website</div>
              <div className={'text-orange-500'}>
                <a href="https://saigontechnology.com/" target="_blank" rel="noreferrer">
                  Saigontechnology
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={'mt-8 md:mt-0'}>
          <div className={'uppercase text-6xl'}>
            <span className={'font-semibold'}>Some</span> Skills
          </div>
          <div className={'mt-16'}>
            <div>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam
              erat volutpat.
            </div>
            <div>
                <div className={'uppercase mt-8'}>
                    <p className={'font-medium'}>.NET</p>
                    <div className={'h-[2px] relative mt-2'}>
                        <div className={'h-full w-full bg-gray-100'}></div>
                        <div className={'h-[4px] w-[80%] bg-orange-600 rounded absolute top-[-1px] left-0'}></div>
                    </div>
                </div>
                <div className={'uppercase  mt-8'}>
                    <p className={'font-medium'}>Angular</p>
                    <div className={'h-[2px] relative mt-2'}>
                        <div className={'h-full w-full bg-gray-100'}></div>
                        <div className={'h-[4px] w-[50%] bg-orange-600 rounded absolute top-[-1px] left-0'}></div>
                    </div>
                </div>
                <div className={'uppercase  mt-8'}>
                    <p className={'font-medium'}>React</p>
                    <div className={'h-[2px] relative mt-2'}>
                        <div className={'h-full w-full bg-gray-100'}></div>
                        <div className={'h-[4px] w-[30%] bg-orange-600 rounded absolute top-[-1px] left-0'}></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
