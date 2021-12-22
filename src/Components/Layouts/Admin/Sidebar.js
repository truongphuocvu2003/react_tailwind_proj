import { Fragment, useContext} from 'react'
import {
  LayoutContext,
  LayoutActionEnum,
} from '../../../Cores/Contexts/layoutContext'
import SidebarMenu from './Sidebar/SidebarMenu'

export default function Sidebar(props) {
  const [layoutState, layoutDispatch] = useContext(LayoutContext)
  let sidebarCss = 'fixed left-0 z-50 lg:z-30 lg:block transition-transform'
  const sidebarNavCss = 'h-full flex bg-white dark:bg-gray-800 px-4 transition-colors duration-400 ease-linear overflow-y-auto overflow-x-hidden overscroll-contain'
  let sidebarBackdropCss =
    'layout-sidebar-backdrop fixed z-[45] lg:z-0 w-screen h-screen lg:hidden bg-gray-600/80 transition-colors duration-400 ease-linear'
  const isSidebarOpened = layoutState.isSidebarOpened
  if (!isSidebarOpened) {
    sidebarBackdropCss += ' hidden'
    sidebarCss += ' -translate-x-full lg:translate-x-0'
  }

  return (
    <Fragment>
      <div className={'layout-sidebar ' + sidebarCss}>
        <div className={'layout-sidebar-nav ' + sidebarNavCss}>
          <div className={'app-sidebar w-full'}>
            <SidebarMenu></SidebarMenu>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          layoutDispatch({
            type: LayoutActionEnum.ToggleSidebar,
            value: false,
          })
        }}
        className={sidebarBackdropCss}
      ></div>
    </Fragment>
  )
}