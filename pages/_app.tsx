/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import '../styles/global.scss';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Fira Code',
      'monospace',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    fontWeightLight: 300,
    fontWeightBold: 300,
    subtitle2: {
      fontWeight: 500,
    },
  },
  overrides: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    MuiTimelineOppositeContent: {
      root: {
        ['@media (max-width:780px)']: {
          display: 'none',
        },
      },
    },
    MuiTimelineSeparator: {
      root: {
        ['@media (max-width:780px)']: {
          display: 'none',
        },
      },
    },
    MuiTimeline: {
      root: {
        maxWidth: '1200px',
      },
    },
    MuiTimelineItem: {
      alignAlternate: {
        '&:nth-child(even) .MuiTimelineItem-content': {
          ['@media (max-width:780px)']: {
            textAlign: 'left !important',
          },
        },
      },
    },
    MuiCardHeader: {
      avatar: {
        ['@media (min-width:780px)']: {
          display: 'none',
        },
      },
      root: {
        ['@media (max-width:780px)']: {
          flexDirection: 'row-reverse',
          padding: '10px',
        },
      },
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
