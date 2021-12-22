import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound(props) {
  return (
    <div className={'my-4'}>
      <div className={'mx-auto max-w-full w-[500px]'}>
        <div>
          <div className={'ghost-container'}>
            <div className={'ghost-backdrop'}></div>
            <div className={'ghost-object bg-gray-200 dark:bg-white relative'}>
              <div className={'ghost-eyes'}>
                <div className={'ghost-eye-left'}></div>
                <div className={'ghost-eye-right'}></div>
              </div>
              <div className={'ghost-mouth'}></div>
              <div className={'ghost-bottom'}>
                <div className={'one bg-gray-200 dark:bg-white'}></div>
                <div className={'two bg-gray-200 dark:bg-white'}></div>
                <div className={'three bg-gray-200 dark:bg-white'}></div>
                <div className={'four bg-gray-200 dark:bg-white'}></div>
              </div>
            </div>
            <div
              className={
                'ghost-shadow shadow-[0_50px_15px_5px_#d7d7d7] dark:shadow-[0_50px_15px_5px_#3b3769]'
              }
            ></div>
          </div>
        </div>
        <div className={'flex flex-col items-center mt-20'}>
          <div className={'font-bold text-3xl'}>Whoops!</div>
          <div className={'max-auto max-w-full w-[300px] text-center my-6'}>
            <span className={'text-gray-600 dark:text-gray-200'}>
              It seems like we couldn't find the page you were looking for
            </span>
          </div>
        </div>
        <div className={'mt-2 mx-auto flex justify-center'}>
          <Link to="" className={'btn-blue mr-2'}>
            Go Back
          </Link>
          <Link to="" className={'btn-blue'}>
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}
