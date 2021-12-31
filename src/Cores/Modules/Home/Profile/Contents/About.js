export default function About(props) {
  const imgUrl = '/assets/imgs/profile.jpg'
  const sectionStyle = {
    backgroundImage: 'url(' + imgUrl + ')',
  }
  return (
    <section
      id="about"
      className={
        'relative bg-gradient-to-r from-gray-300 to-white py-32 px-10 pt-48 md:pt-32'
      }
    >
      <div
        className={'absolute top-0 left-0 w-full h-full z-10 bg-cover bg-no-repeat bg-fixed bg-top md:hidden'}
        style={sectionStyle}
      ></div>
      <div
        className={
          'grid grid-cols-1 md:grid-cols-2 w-full lg:max-w-[1200px] mx-auto relative z-50'
        }
      >
        <div className={'flex flex-col justify-center'}>
            <div className={'hidden md:block'}>
               <img src={imgUrl} alt="Profile Avatar" className={'w-full h-auto rounded-lg shadow-md'}></img> 
            </div>
        </div>
        <div className={'px-10 py-10 backdrop-blur rounded-lg flex flex-col justify-center'}>
          <div className={'uppercase text-4xl'}>
            This is <span className={'font-semibold'}>me</span>
          </div>
          <div className={'uppercase text-orange-600 text-5xl mt-4'}>
            Senior <span className={'font-semibold'}>Developer</span>
          </div>
          <div className={'mt-10'}>
            <p className={'my-4'}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam
              erat volutpat.
            </p>
            <p className={'my-4'}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam
              erat volutpat.
            </p>
            <p className={'my-4'}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam
              erat volutpat.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
