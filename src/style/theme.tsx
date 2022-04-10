import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    black: {
      100: 'rgba(0, 0, 0, 1)',
      90: 'rgba(0, 0, 0, 0.9)',
      80: 'rgba(0, 0, 0, 0.8)',
      70: 'rgba(0, 0, 0, 0.7)',
      60: 'rgba(0, 0, 0, 0.6)',
      50: 'rgba(0, 0, 0, 0.5)',
      40: 'rgba(0, 0, 0, 0.4)',
      30: 'rgba(0, 0, 0, 0.3)',
      20: 'rgba(0, 0, 0, 0.2)',
      10: 'rgba(0, 0, 0, 0.1)'
    },
    white: {
      100: 'rgba(255, 255, 255, 1)',
      90: 'rgba(255, 255, 255, 0.9)',
      80: 'rgba(255, 255, 255, 0.8)',
      70: 'rgba(255, 255, 255, 0.7)',
      60: 'rgba(255, 255, 255, 0.6)',
      50: 'rgba(255, 255, 255, 0.5)',
      40: 'rgba(255, 255, 255, 0.4)',
      30: 'rgba(255, 255, 255, 0.3)',
      20: 'rgba(255, 255, 255, 0.2)',
      10: 'rgba(255, 255, 255, 0.1)'
    },
    gray: {
      50: '#F8F9FC'
    },
    primary: {
      50: '#FFB10A', // default
      40: '#FFBE33',
      30: '#FFCB5C',
      20: '#FFD885',
      10: '#FFE5AD'
    },
    secondary: {
      10: '#323B47'
    }
  },
  borderRadius: {
    s: '4px',
    m: '6px',
    l: '8px',
    circle: '50%'
  }
}
