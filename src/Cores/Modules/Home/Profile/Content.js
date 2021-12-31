import About from './Contents/About'
import Contact from './Contents/Contact'
import HomeSection from './Contents/Home'
import Portfolio from './Contents/Portfolio'
import Resume from './Contents/Resume'
import WorkSection from './Contents/Work'

export default function Content(props) {
  return (
    <>
      <HomeSection></HomeSection>
      <WorkSection></WorkSection>
      <Portfolio></Portfolio>
      <Resume></Resume>
      <About></About>
      <Contact></Contact>
    </>
  )
}
