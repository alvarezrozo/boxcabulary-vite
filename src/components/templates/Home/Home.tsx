import './Home.scss'
import Layout from "../../organisms/Layout/Layout"
import Bouncer from '../../organisms/Bouncer/Bouncer'
import CardCTA from '../../atoms/CardCTA/CardCTA'
import Cloud from '../../atoms/Icons/Cloud'

const Home = () => {
  return (
    <Layout>
      <div className='bv-home'>
        <Bouncer from='right' className='bv-home__cloud bv-home__first-cloud'>
          <div className='bv-home__first-cloud-position'>
            <Cloud />
          </div>
        </Bouncer>
        <Bouncer from='left' className='bv-home__cloud bv-home__second-cloud'>
          <div className='bv-home__second-cloud-position'>
            <Cloud />
          </div>
        </Bouncer>
        <Bouncer from='left' className='bv-home__first-card'>
          <CardCTA
            imgName='astronaut-write.png'
            label='Traducir palabras'
            alignment='right'
          />
        </Bouncer>
        <Bouncer from='right' className='bv-home__second-card'>
          <CardCTA
            imgName='astronaut-read.png'
            label='Unir palabras'
            backgroundColor='star'
          />
        </Bouncer>
      </div>
    </Layout>
  )
}

export default Home