import { ThemeHandler, ThemeEnum } from '../../../Cores/Modules/Theme/themeData'
import AdminRouter from '../../../Cores/Routes/AdminRouter'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import SidebarMenu from './Sidebar/SidebarMenu'
import BodyHeader from './BodyHeader/BodyHeader'

export default function AdminLayout(props) {
  const bodyCss =
    'bg-gray-100 dark:bg-gray-900 dark:text-gray-300 transition-colors duration-400 ease-linear'
  let theme = ThemeHandler()

  return (
    <div className="app-container font-poppins dark:text-gray-300">
      <Header
        onThemeChanged={() => {
          theme = theme === ThemeEnum.Light ? ThemeEnum.Dark : ThemeEnum.Light
          ThemeHandler(theme)
        }}
      ></Header>
      <Sidebar>
        <SidebarMenu></SidebarMenu>
      </Sidebar>
      <div className={'layout-body layout-body-container ' + bodyCss}>
        <div className={'layout-body-wrapper'}>
          <BodyHeader></BodyHeader>
          <AdminRouter></AdminRouter>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
