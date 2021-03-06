import {css, $} from 'glamor';
import colors from './colors';

css.global('body', {
  margin: 0,
  WebkitAppRegion: 'drag',
});

let font = css({
  color: '#fff',
  fontFamily: 'Lato',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wXiWtFCc.woff2) format('woff2')`,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
});

let body = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
  minWidth: '400px',
  minHeight: '400px',
});

const button = css({
  fontSize: '16px',
  border: 'none',
  padding: '25px 80px',
  margin: '10px',
  display: 'inline-block',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  fontWeight: 700,
  outline: 'none',
  position: 'relative',
  borderRadius: '5px',
  color: '#fff',
  WebkitTransition: 'none',
  MozTransition: 'none',
  Transition: 'none',
});

export const greenButton = css(
  button,
  {
    boxShadow: `0 6px ${colors.darkGreen}`,
    background: `${colors.green}`,
  },
  $(':hover', {
    boxShadow: `0 4px ${colors.darkGreen}`,
    top: '2px',
  }),
  $(':active', {
    boxShadow: `0 0 ${colors.darkGreen}`,
    top: '6px',
  })
);

export const blueButton = css(
  button,
  {
    boxShadow: `0 6px ${colors.darkBlue}`,
    background: `${colors.blue}`,
  },
  $(':hover', {
    boxShadow: `0 4px ${colors.darkBlue}`,
    top: '2px',
  }),
  $(':active', {
    boxShadow: `0 0 ${colors.darkBlue}`,
    top: '6px',
  })
);

export const centerStyle = css({
  textAlign: 'center',
});

export const errorStyle = css({
  color: `${colors.red}`,
});

export const successStyle = css({
  color: `${colors.green}`,
});

let combinedStyles = css(font, body);

export default combinedStyles;
