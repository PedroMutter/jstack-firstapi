import React, { useContext } from 'react'

import { ThemeContext } from '../../contexts/ThemeContext'
import { Container } from './styles'

// Functional Component
export default function Footer() {
  const { theme, handleToggleTheme } = useContext(ThemeContext)

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button
        type="button"
        onClick={handleToggleTheme}
      >
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  )
}
