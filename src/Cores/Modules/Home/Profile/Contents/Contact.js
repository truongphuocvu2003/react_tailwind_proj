export default function Contact(props) {
  return (
    <section id="contact">
      <div className={'grid grid-cols-1 md:grid-cols-3'}>
        <div
          style={{ backgroundColor: '#3b5998' }}
          className={
            'flex items-center px-10 py-20 hover:bg-black cursor-pointer'
          }
        >
          <div className={'bg-white p-4 rounded-md'}>
            <span className={'mdi mdi-facebook mdi-24px'}></span>
          </div>
          <div className={'text-white px-8'}>
            <div>Follow me on</div>
            <div className={'text-3xl mt-4'}>Facebook</div>
          </div>
        </div>
        <div
          style={{ backgroundColor: '#55acee' }}
          className={
            'flex items-center px-10 py-20 hover:bg-black cursor-pointer'
          }
        >
          <div className={'bg-white p-4 rounded-md'}>
            <span className={'mdi mdi-twitter mdi-24px'}></span>
          </div>
          <div className={'text-white px-8'}>
            <div>Follow me on</div>
            <div>Twitter</div>
          </div>
        </div>
        <div
          style={{ backgroundColor: '#cc2127' }}
          className={
            'flex items-center px-10 py-20 hover:bg-black cursor-pointer'
          }
        >
          <div className={'bg-white p-4 rounded-md'}>
            <span className={'mdi mdi-github mdi-24px'}></span>
          </div>
          <div className={'text-white px-8'}>
            <div>Follow me on</div>
            <div>Github</div>
          </div>
        </div>
      </div>
    </section>
  )
}
