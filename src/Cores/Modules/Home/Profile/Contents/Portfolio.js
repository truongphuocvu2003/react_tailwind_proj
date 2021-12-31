import { useEffect, useMemo, useState } from 'react'

const portfolioGroup = {
  web: 'Web',
  mobile: 'Mobile',
  service: 'Services',
}

const portfolioImages = {
  image1: '/assets/imgs/portfolio-img1.jpg',
  image2: '/assets/imgs/portfolio-img2.jpg',
  image3: '/assets/imgs/portfolio-img3.jpg',
  image4: '/assets/imgs/portfolio-img4.jpg',
  image5: '/assets/imgs/portfolio-img5.jpg',
  image6: '/assets/imgs/portfolio-img6.jpg',
  image7: '/assets/imgs/portfolio-img7.jpg',
  image8: '/assets/imgs/portfolio-img8.jpg',
}

const portfolioTitle = {
  web: 'Web Development',
  mobile: 'Mobile Development',
  services: 'Services',
}

const portfolioText = {
  description:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm.',
}

const portfolioData = {
  items: [
    {
      url: portfolioImages.image1,
      group: ['web', 'mobile', 'service'],
      title: portfolioTitle.web,
      description: portfolioText.description,
    },
    {
      url: portfolioImages.image2,
      group: ['mobile'],
      title: portfolioTitle.web,
      description: portfolioText.description,
    },
    {
      url: portfolioImages.image3,
      group: ['web'],
      title: portfolioTitle.web,
      description: portfolioText.description,
    },
    {
      url: portfolioImages.image4,
      group: ['web', 'service'],
      title: portfolioTitle.web,
      description: portfolioText.description,
    },
    {
      url: portfolioImages.image5,
      group: ['mobile'],
      title: portfolioTitle.web,
      description: portfolioText.description,
    },
    {
      url: portfolioImages.image6,
      group: ['service'],
      title: portfolioTitle.web,
      description: portfolioText.description,
    },
    {
      url: portfolioImages.image7,
      group: ['service'],
      title: portfolioTitle.web,
      description: portfolioText.description,
    },
    {
      url: portfolioImages.image8,
      group: ['web', 'mobile', 'service'],
      title: portfolioTitle.web,
      description: portfolioText.description,
    },
  ],
}

function PortfolioFilter(props) {
  const { active, name, text } = props
  const activeClass = ' bg-orange-600 text-white'
  let classes =
    'px-4 py-2 text-lg mr-2 text-gray-400 hover:bg-orange-600 hover:text-white transition duration-200 cursor-pointer'
  if (active) {
    classes += activeClass
  }
  return (
    <div
      className={classes}
      onClick={() => {
        props.onFilterChange(name)
      }}
    >
      {text}
    </div>
  )
}

function PortfolioItem(props) {
  const item = props.item
  return <div className={'w-full relative'}>
      <img src={item.url} className={'w-full h-auto'} alt={item.title}></img>
      <div className={'absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-80 transition duration-500'}>
        <div className={'w-full h-full text-center flex flex-col items-center justify-center bg-orange-600 text-white px-10'}>
            <div className={'uppercase font-bold text-xl lg:text-3xl'}>{item.title}</div>
            <div className={'text-lg mt-4'}>{item.description}</div>
        </div>
      </div>
  </div>
}

export default function Portfolio(props) {
  const [items, setItems] = useState([...portfolioData.items])
  const filters = useMemo(() => {
    const filters = Object.keys(portfolioGroup).map((x) => {
      return {
        name: x,
        text: portfolioGroup[x],
      }
    })

    filters.splice(0, 0, {
      name: '',
      text: 'All',
    })

    return filters
  }, [])

  const [filter, setFilter] = useState('')
  useEffect(() => {
    let filtered = [...portfolioData.items]
    if (filter) {
      filtered = filtered.filter((x) => x.group.indexOf(filter) >= 0)
    }

    setItems(filtered)
  }, [filter])
  return (
    <section id="portfolio" className={'bg-gray-100 pt-16'}>
      <div className={'text-center uppercase pt-20 text-3xl'}>
        My <span className={'font-semibold'}>Portfolio</span>
      </div>
      <div className={'flex justify-center mt-14'}>
        {filters.map((item, index) => {
          return (
            <PortfolioFilter
              key={index}
              active={filter === item.name}
              name={item.name}
              text={item.text}
              onFilterChange={(group) => {
                setFilter(group)
              }}
            ></PortfolioFilter>
          )
        })}
      </div>
      <div className={'grid grid-cols-1 mt-10 mb-6 md:grid-cols-2 lg:grid-cols-4'}>
        {items.map((item, index) => {
          return <PortfolioItem key={index} item={item}></PortfolioItem>
        })}
      </div>
    </section>
  )
}
