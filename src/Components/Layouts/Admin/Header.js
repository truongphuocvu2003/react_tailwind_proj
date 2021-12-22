import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
  LayoutContext,
  LayoutActionEnum,
} from '../../../Cores/Contexts/layoutContext'
import logo from '../../../logo.svg'

function Header(props) {
  const [layoutState, layoutDispatch] = useContext(LayoutContext)
  const isSidebarOpened = layoutState.isSidebarOpened

  const headerCss =
    'fixed top-0 left-0 w-screen z-40 transition-colors duration-400 ease-linear'
  const headerNavCss =
    'w-full h-full flex items-center px-2 pr-4 bg-white dark:bg-gray-800 shadow-[0_15px_30px_0px_rgba(82,63,105,0.05)] transition-colors duration-400 ease-linear'
  const headerTitleCss =
    'text-3xl font-bold transition-colors duration-400 ease-linear'
  const menuTogglerCss =
    'lg:hidden hover:text-blue-700 cursor-pointer transition-colors duration-400 ease-linear'
  const menuTogglerIconCss = 'mdi mdi-36px mdi-menu'
  const darkModeTogglerCss =
    'hover:text-blue-700 cursor-pointer -rotate-45 mr-4 transition-colors duration-400 ease-linear'
  const darkModeTogglerIconCss = 'mdi mdi-36px mdi-moon-waning-crescent '

  return (
    <div className={'layout-header ' + headerCss}>
      <div className={'layout-header-nav ' + headerNavCss}>
        <Link to="" className={'flex items-center'}>
          <div className="app-logo">
            <img src={logo} className={'app-logo-img'} alt="logo" />
          </div>
          <div className={'app-title ' + headerTitleCss}>React App</div>
        </Link>
        <div className={'flex-1'}></div>
        <div
          className={darkModeTogglerCss}
          onClick={() => {
            props.onThemeChanged && props.onThemeChanged()
          }}
        >
          <span className={darkModeTogglerIconCss}></span>
        </div>
        <div
          className={'app-menu-toggler ' + menuTogglerCss}
          onClick={() => {
            layoutDispatch({
              type: LayoutActionEnum.ToggleSidebar,
              value: !isSidebarOpened,
            })
          }}
        >
          <span className={menuTogglerIconCss}></span>
        </div>
      </div>
    </div>
  )
}

export default Header
