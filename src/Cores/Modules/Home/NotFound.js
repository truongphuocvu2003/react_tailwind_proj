import { Link } from 'react-router-dom'

export function NotFound(props) {
  return (
    <div className='p-4'>
      Not Found
      <div className='py-4'>
        <Link to={''} className={'btn-blue'}>
          Return Home
        </Link>
      </div>
    </div>
  )
}
