import { useSelector } from 'react-redux'

function BodyHeaderTitle(props) {
  const pageTitle = props.pageTitle
  return (
    <>
      <h1 className={'text-xl font-bold'}>{pageTitle}</h1>
    </>
  )
}

export default function BodyHeader(props) {
  const pageTitle = useSelector((state) => state.pageContent.title)

  return (
    <div className={'layout-body-header px-4 pt-4'}>
      {pageTitle && <BodyHeaderTitle pageTitle={pageTitle}></BodyHeaderTitle>}
    </div>
  )
}
