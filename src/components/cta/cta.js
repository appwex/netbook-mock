import clsx from 'clsx'
import stl from './cta.module.scss' // stylesheet

// components
import Navbar from './Navbar'
import Hero from './Hero'

const Cta = () => {
  return (
    <section id="cta-section" className={stl.container}>
      <Navbar />
      <div className={stl.line}></div>
      <Hero />
    </section>
  )
}

export default Cta
