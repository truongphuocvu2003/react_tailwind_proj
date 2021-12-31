import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../Stores/reducers/pageContentSlice'

export default function ContentTitle(props) {
  const title = props.title
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPageTitle(title))
    document.title = title
  }, [title, dispatch])

  return <></>
}
