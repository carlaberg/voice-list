import { trimUnits } from '../lib/utils'

class Theme {
  constructor() {
    this.colorBackground = '#F7F9E5'
    this.colorAccent = '#DC3248'
    this.colorAccentOpacity = 'rgba(220, 50, 72, 0.7)'
    this.colorAccent2 = '#FF4D80'
    this.colorBlack = '#1E1D1E'
    this.colorWhite = '#FDFDFA'
    this.colorGray = '#B7BCB3'
    this.colorGrayOpacity = 'rgba(183, 188, 179, 0.2)'
    this.colorGreen = '#B5D99C'
    this.colorBlue = '#80ced7'

    this.textColorPrimary = this.colorBlack
    this.textColorSecondary = this.colorGray

    this.gridUnit = '5.5rem'
    this.gutter = '1.5rem'
    this.gutterSmall = `${trimUnits(this.gutter) / 2}rem`
    this.gutterMedium = `${trimUnits(this.gutter) * 1.5}rem`
    this.gutterLarge = `${trimUnits(this.gutter) * 2}rem`
    this.gutterXLarge = `${trimUnits(this.gutter) * 3}rem`

    this.maxWidth = '1440px'
    this.headerHeight = '100px'

    this.fontfamilyPrimary = 'Barlow, Arial, Sans-Serif'

    this.fontsizeRoot = 18
    this.fontsizeMobile = 14

    this.fontsizeResponsive = 'calc(12px + 0.4vw)'

    this.lineheightRegular = '1.4em'

    this.borderRadius = '2px'
    this.borderRadiusLarge = '10px'

    this.iconSize = '1rem'

    this.transitionRegular = '0.7s cubic-bezier(0.19, 1, 0.22, 1)'
    this.transitionSlow = '1.5s cubic-bezier(0.19, 1, 0.22, 1)'

    this.breakpoints = {
      min: 0,
      phone: 668,
      tablet: 769,
      desktop: 1025,
      large: 1440,
      max: trimUnits(this.maxWidth)
    }
  }

  init() {
    return this
  }
}

export const theme = new Theme()