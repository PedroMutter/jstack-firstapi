import React, { useState, useMemo, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import Layout from './components/Layout'

import themes from './styles/themes'

// Class Component
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'dark',
      oiTudoBem: true
    }

    this.handleToggleTheme =  this.handleToggleTheme.bind(this)
  }

  handleToggleTheme() {
    this.setState(prevState => ({ theme: prevState.theme === 'dark' ? 'light' : 'dark' }))
  }

  render() {
    const { theme } = this.state

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout
          onToggleTheme={this.handleToggleTheme}
          selectedTheme={theme}
        />
      </ThemeProvider>
    )
  }
}

export default App
