import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../../../Cores/Stores/reducers/sidebarSlice'

export default function Sidebar(props) {
  const isSidebarOpened = useSelector((state) => state.sidebar.opened)
  const dispatch = useDispatch()

  let sidebarCss = 'fixed left-0 z-50 lg:z-30 lg:block transition-transform'
  const sidebarNavCss =
    'h-full flex bg-white dark:bg-gray-800 px-4 transition-colors duration-400 ease-linear overflow-y-auto overflow-x-hidden overscroll-contain'
  let sidebarBackdropCss =
    'fixed z-[45] lg:z-0 w-screen h-screen lg:hidden bg-gray-600/80 transition-colors duration-400 ease-linear'

  if (!isSidebarOpened) {
    sidebarBackdropCss += ' hidden'
    sidebarCss += ' -translate-x-full lg:translate-x-0'
  }

  return (
    <Fragment>
      <div className={'layout-sidebar ' + sidebarCss}>
        <div className={'layout-sidebar-nav ' + sidebarNavCss}>
          <div className={'app-sidebar w-full'}>
            { props.children }
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          dispatch(closeMenu())
        }}
        className={'layout-sidebar-backdrop ' + sidebarBackdropCss}
      ></div>
    </Fragment>
  )
}
