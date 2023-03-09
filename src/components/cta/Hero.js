import stl from './cta.module.scss'
import clsx from 'clsx'
import Button from 'components/Button'
import Image from 'next/image'

const Hero = () => {
  return (
    <main className={clsx(stl.section)}>
      <div className={stl.hero}>
        <div className={stl.heroInfo}>
          <Button
            customClass={stl.heroBtnComunity}
            label={'Netbook community'}
          />

          <h1 className={stl.mainHeader}>Your Solutions For Community!</h1>
          <p>
            More than 2 billion people in over countries use socibook to stay in
            touch with friends & family.
          </p>
          <Button customClass={stl.heroBtnAbout} label={'More About'} />
          <Button customClass={stl.heroBtnInvite} label={'Invite Friend'} />
        </div>
        <Image
          src={`../../assets/comunity.png`}
          alt="comunity img"
          width={585}
          height={501}
        />
      </div>
    </main>
  )
}

export default Hero
