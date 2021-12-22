import { useState, useRef, useContext } from 'react'
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom'
import {
  LayoutContext,
  LayoutActionEnum,
} from '../../../../Cores/Contexts/layoutContext'

export default function SidebarMenuItem(props) {
  const item = props.item
  const [, layoutDispatch] = useContext(LayoutContext)
  const [, setItem] = useState({
    childHeight: 0,
  })
  let element
  let itemRef = useRef(null)
  let children
  let chevron

  let resolved = useResolvedPath({ pathname: item.url })
  let match = useMatch({
    path: resolved.pathname,
    end: true,
  })

  item.active = match ? true : false

  const hasChild = item.items && item.items.length

  if (item.type === 'item') {
    let itemCss =
      'relative flex flex-col w-full pl-3 mt-2 rounded transition-colors duration-400 ease-linear'
    let itemLinkCss =
      'min-h-[2rem] flex items-center w-full h-full group transition-colors duration-400 ease-linear'
    let itemIconCss = 'transition-colors duration-400 ease-linear'
    let itemTextCss =
      'font-medium text-base tracking-wide ml-2 transition-colors duration-200 ease-linear'

    if (item.active === true && !hasChild) {
      itemCss +=
        ' bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
    } else if (item.opened && hasChild) {
      itemCss += ' text-gray-800 dark:text-gray-200'
    } else {
      itemCss +=
        ' text-gray-400 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
      itemTextCss +=
        ' text-gray-400 dark:text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200'
      itemIconCss +=
        ' text-gray-300 dark:text-gray-600 group-hover:text-gray-800 dark:group-hover:text-gray-200'
    }

    itemCss += ' cursor-pointer'

    const onItemActioned = () => {
      item.childHeight =
        (itemRef &&
          itemRef.current &&
          itemRef.current.children[0].clientHeight) ||
        0
      setItem({
        childHeight: item.childHeight,
      })
    }

    if (hasChild) {
      let childItemsCss =
        'pl-2 overflow-hidden transition-[max-height] duration-200 ease-linear'
      let childMaxHeight = 0
      if (!item.opened) {
      } else {
        childMaxHeight = item.childHeight + 50
      }
      children = (
        <div
          className={childItemsCss}
          ref={itemRef}
          style={{ maxHeight: `${childMaxHeight}px` }}
        >
          <div className={'relative overflow-hidden'}>
            {item.items.map((child, index) => {
              child.icon = 'mdi mdi-circle text-[0.3rem] mr-2'
              return (
                <div key={index} className={'menu-children-items'}>
                  <SidebarMenuItem
                    item={child}
                    onItemClicked={() => {
                      setTimeout(() => {
                        onItemActioned()
                      }, 100)
                    }}
                  ></SidebarMenuItem>
                </div>
              )
            })}
          </div>
        </div>
      )

      let chevronCss =
        'absolute right-5 transition-transform duration-200 ease-linear'

      if (item.opened) {
        chevronCss += ' rotate-90'
      }

      chevron = (
        <div className={chevronCss}>
          <span
            className={'mdi mdi-chevron-right text-2xl font-extrabold'}
          ></span>
        </div>
      )
    }

    const itemUrl = !hasChild && item.url
    const NavLinkElement = ({ children }) => {
      if (!hasChild && item.url !== undefined && item.url !== null) {
        return (
          <NavLink
            to={itemUrl}
            className={itemLinkCss}
            onClick={() => {
              layoutDispatch({
                type: LayoutActionEnum.ToggleSidebar,
                value: false,
              })
            }}
          >
            {children}
          </NavLink>
        )
      }

      return (
        <div
          className={itemLinkCss}
          onClick={() => {
            item.opened = !item.opened
            onItemActioned()
            props.onItemClicked && props.onItemClicked()
          }}
        >
          {children}
        </div>
      )
    }

    element = (
      <div className={itemCss}>
        <NavLinkElement>
          {item.icon && <span className={item.icon + ' ' + itemIconCss}></span>}
          <span className={itemTextCss}>{item.text}</span>
          {(hasChild && chevron) || ''}
        </NavLinkElement>
        {(hasChild && children) || ''}
      </div>
    )
  } else if (item.type === 'split') {
    let itemCss = 'w-full h-px px-3 mt-2'
    itemCss += ' bg-gray-700'
    element = <div className={itemCss}></div>
  } else if (item.type === 'spacing') {
    let itemCss = 'w-full h-px px-3 mt-4'
    element = <div className={itemCss}></div>
  } else if (item.type === 'grouping') {
    let itemCss =
      'w-full font-medium text-gray-400 text-xs tracking-wider px-3 mt-4 uppercase'
    element = <div className={itemCss}>{item.text}</div>
  }

  return <div name={item.name}>{element}</div>
}
