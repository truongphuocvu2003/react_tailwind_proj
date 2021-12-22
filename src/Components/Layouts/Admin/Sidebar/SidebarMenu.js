import { useMatch, useResolvedPath } from 'react-router-dom'
import {
  sidebarMenuItems,
  initSidebarMenuItems,
} from '../../../../Cores/Modules/Sidebar/sidebarData'
import SidebarMenuItem from './SidebarMenuItem'

function CalculateActiveItems(item) {
  let resolved = useResolvedPath({ pathname: item.url })
  let match = useMatch({
    path: resolved.pathname,
    end: true,
  })

  if (item.type === 'item' && item.url) {
    const isActive = match ? true : false
    if (isActive) {
      item.active = item.opened = true
    }

    (item.items || []).map((e) => {
      CalculateActiveItems(e)

      if (e.opened) {
        item.opened = true
      }

      return false;
    })
  }
}

export default function SidebarMenu(props) {
  if (!sidebarMenuItems.length) {
    initSidebarMenuItems()
    sidebarMenuItems.map((e) => CalculateActiveItems(e))
  }

  return (
    <div className={'w-full'}>
      {sidebarMenuItems.map((item, index) => (
        <div key={index}>
          <SidebarMenuItem item={item}></SidebarMenuItem>
        </div>
      ))}
    </div>
  )
}
