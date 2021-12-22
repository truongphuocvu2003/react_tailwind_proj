import { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {
  return (
    <Fragment>
      <div className="p-4">
        Home
        <div className="py-4">
          <Link to={'admin'} className={'btn-blue'}>
            Go To Admin Portal
          </Link>
        </div>
      </div>
    </Fragment>
  )
}
