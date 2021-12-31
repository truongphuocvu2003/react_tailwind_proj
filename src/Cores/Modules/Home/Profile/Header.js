import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../../../logo.svg'

export default function Header(props) {
  const [isMenuOpened, setMenuOpened] = useState(false)
  let navigateMenuCss =
    'items-center justify-end fixed w-screen bg-gray-100 lg:bg-white overflow-hidden transition-[max-height] duration-[330ms] max-h-[300px] lg:w-auto left-0 top-100 lg:relative lg:flex lg:mr-20'
  const navigateItemCss =
    'block px-4 py-4 min-w-[80px] text-md font-semibold uppercase cursor-pointer hover:text-orange-600 hover:bg-white lg:py-8 lg:text-center'

  if (!isMenuOpened) {
    navigateMenuCss += ' max-h-0 lg:max-h-full'
  }

  return (
    <header
      className={
        'text-gray-600 body-font fixed z-[1000] top-0 w-screen shadow bg-white'
      }
    >
      <div className={'landing-header flex items-center'}>
        <div className={'lg:ml-20 min-w-[300px]'}>
          <Link to="/profile" className={'flex items-center'}>
            <div className={''}>
              <img
                src={logo}
                className={'w-20 motion-safe:animate-spin-5'}
                alt="logo"
              />
            </div>
            <div
              className={
                'app-title text-4xl font-medium transition-colors duration-400 ease-linear'
              }
            >
              My Profile
            </div>
          </Link>
        </div>
        <div className={'flex-1 relative'}>
          <div className={'lg:hidden flex justify-end mr-8'}>
            <div
              className="inline-block cursor-pointer hover:text-orange-600"
              onClick={() => {
                setMenuOpened(!isMenuOpened)
              }}
            >
              <span className="mdi mdi-36px mdi-menu"></span>
            </div>
          </div>
          <div className={navigateMenuCss}>
            <div
              className={
                'flex flex-col border-b-2 lg:flex-row lg:justify-end lg:border-b-0'
              }
              onClick={() => {
                setMenuOpened(false)
              }}
            >
              <a href="#home" className={'navigate-item ' + navigateItemCss}>
                Home
              </a>
              <a href="#work" className={'navigate-item ' + navigateItemCss}>
                My Work
              </a>
              <a
                href="#portfolio"
                className={'navigate-item ' + navigateItemCss}
              >
                Portfolio
              </a>
              <a href="#resume" className={'navigate-item ' + navigateItemCss}>
                Resume
              </a>
              <a href="#about" className={'navigate-item ' + navigateItemCss}>
                About
              </a>
              <a href="#contact" className={'navigate-item ' + navigateItemCss}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
