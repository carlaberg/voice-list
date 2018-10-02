import { accentRed, lightWhite } from '../../style/variables';

export default {
  dark: {
    backgroundColor: accentRed.hex,
    textColor: lightWhite.hex,
    border: 'none'
  },
  light: {
    backgroundColor: 'none',
    textColor: accentRed.hex,
    border: `2px solid ${accentRed.hex}`
  }
};
