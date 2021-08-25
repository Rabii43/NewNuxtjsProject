import colors from 'vuetify/lib/util/colors'

let darkMode = false
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('luxiDarkMode') || false
}

const palette = {
  greenLeaf: {
    primary: '#002E54', // primary Landingpage
    primarylight: colors.green.lighten4, // primary light
    primarydark: colors.green.darken4, // primary dark
    secondary: '#2C67D3', // secondary Landingpage
    secondarylight: colors.blueGrey.lighten4, // secondary light
    secondarydark: colors.blueGrey.darken3, // secondary dark
    anchor: '#3667D4' // link
  }
}

export const theme = {
  ...palette.greenLeaf
}


export default {
  rtl: false,
  theme: {
    dark: darkMode === 'true',
    themes: {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    },
    options: {
      customProperties: true
    }
  }
}
