import Content from './Content'
import Header from './Header'
import './Profile.css'

export default function Profile(props) {
  return (
    <div className={'font-poppins font-light text-lg'}>
      <Header></Header>
      <Content></Content>
    </div>
  )
}
