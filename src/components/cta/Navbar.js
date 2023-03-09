import stl from './cta.module.scss'
import clsx from 'clsx'
import { Logo, Arrow, Find } from '../../../public/assets'
import { useState } from 'react'
import Button from 'components/Button'

const Navbar = () => {
  const [navIcon, setNavIcon] = useState(false)
  const [expendNav, setExpendNav] = useState(false)

  const handelClick = () => {
    setNavIcon(!navIcon)
    setExpendNav(!expendNav)
  }

  return (
    <header className={clsx(stl.section)}>
      <nav className={clsx(stl.navbar)}>
        <Logo className={stl.navbarLogo} />
        <h3>Netbook</h3>
        <div className={clsx(stl.navbarMenu, `${expendNav ? stl.expend : ''}`)}>
          <a className={clsx(stl.boldDark, stl.navbarItem)} href="#">
            Home
          </a>

          <a className={stl.navbarItem} href="#">
            Community
            <Arrow />
          </a>

          <a className={stl.navbarItem} href="#">
            Blog
          </a>

          <a className={stl.navbarItem} href="#">
            Events
          </a>
        </div>
        <form className={clsx(stl.navbarSearchForm)}>
          <label className={stl.navbarFind}>
            <Find />
          </label>
          <input
            type="text"
            placeholder="Search Here..."
            className={stl.navbarSearch}
          />
        </form>
        <Button customClass={stl.navbarLogin} label={'Log in'} />
      </nav>

      <div
        className={clsx(stl.mobileNav, `${navIcon ? stl.show : ''}`)}
        onClick={handelClick}
      >
        <span />
        <span />
        <span />
      </div>
    </header>
  )
}

export default Navbar
