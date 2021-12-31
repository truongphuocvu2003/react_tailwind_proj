import { useEffect, useState } from 'react'

export default function HomeSection(props) {
  const sectionClass =
    'pt-[60px] lg:pt-[70px] h-screen flex bg-cover bg-no-repeat bg-fixed bg-center relative z-10 flex items-center justify-center'
  const imgUrl = '/assets/imgs/profile_wall_01.jpg'
  const sectionStyle = {
    backgroundImage: 'url(' + imgUrl + ')',
  }
  const [sectionBackgroundCss, setBackground] = useState(
    'from-white to-white opacity-100',
  )
  useEffect(() => {
    setTimeout(() => {
      setBackground('from-gray-200 to-gray-100 opacity-50')
    }, 100)
  }, [])

  return (
    <section
      id="home"
      className={'home-section ' + sectionClass}
      style={sectionStyle}
    >
      <div
        className={
          'absolute z-10 transition duration-500 w-full h-full top-0 left-0 bg-gradient-to-t ' +
          sectionBackgroundCss
        }
      ></div>
      <div className={'text-center relative z-20 px-4 md:w-4/5 lg:w-3/5'}>
        <div className={'uppercase font-bold text-7xl text-gray-800'}>
          Vu Truong
        </div>
        <div
          className={
            'uppercase font-medium text-4xl text-orange-700 mt-8 mb-20'
          }
        >
          Senior Developer
        </div>
        <div className={'text-xl font-light'}>
          I am a senior{' '}
          <span className={'font-bold'}>Full-Stack Developer</span> creating
          modern and responsive apps for{' '}
          <span className={'font-bold'}>Web</span> and{' '}
          <span className={'font-bold'}>Mobile</span>. Let us work together.
          Thank you.
        </div>
        <div className={'mt-16'}>
          <a
            href="#work"
            className={'btn-default btn-orange transition duration-500'}
          >
            Let's begin
          </a>
        </div>
      </div>
    </section>
  )
}
