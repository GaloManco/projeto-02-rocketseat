import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

import Logo from '../../assets/Logo.svg'
import { Timer, Scroll } from '@phosphor-icons/react'
export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="história">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
