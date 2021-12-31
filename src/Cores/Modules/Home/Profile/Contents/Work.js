function WorkSectionItem({ iconClass, title, content }) {
  const sectionItemClass =
    'text-center py-28 px-16 border-[1px] border-black mx-4 rounded transition duration-500 hover:border-orange-600 mb-4 lg:mb-0'
  return (
    <div className={sectionItemClass}>
      <div>
        <span className={'text-7xl text-gray-500 ' + iconClass}></span>
      </div>
      <div className={'uppercase mt-10 text-orange-600 font-semibold text-2xl '}>
        {title}
        <div className={'h-[1px] w-[80px] mx-auto my-10 bg-gray-200'}></div>
      </div>
      <div className={'text-lg font-light'}>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default function WorkSection(props) {
  const sectionClass = 'py-[100px] bg-white relative z-10'
  const testContent = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
    nonummy nibh euismod tincidunt ut laoreet. Dolore magna.`
  return (
    <section id="work" className={'work-section ' + sectionClass}>
      <div className={'w-full lg:max-w-[1200px] mx-auto'}>
        <div className={'uppercase text-6xl mb-10 px-20 lg:px-32'}>
          My <span className={'font-bold'}>Work</span>
        </div>
        <div className={'px-10 flex flex-col lg:flex-row'}>
          <WorkSectionItem
            iconClass={'mdi mdi-link-variant'}
            title={'WEB APPLICATION'}
            content={testContent}
          ></WorkSectionItem>
          <WorkSectionItem
            iconClass={'mdi mdi-flash'}
            title={'MOBILE DEVELOPMENT'}
            content={testContent}
          ></WorkSectionItem>
          <WorkSectionItem
            iconClass={'mdi mdi-tablet-dashboard'}
            title={'WEB SERVICES'}
            content={testContent}
          ></WorkSectionItem>
        </div>
      </div>
    </section>
  )
}
