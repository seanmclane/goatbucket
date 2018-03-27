import {css} from 'glamor';

css.global('body', {
  margin: 0,
  WebkitAppRegion: 'drag',
});

let font = css({
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
  minHeight: '400px'
});

let combinedStyles = css(font, body);

export default combinedStyles;
