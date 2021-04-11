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
    fontWeightRegular: 400,
    fontWeightLight: 400,
    fontWeightBold: 400,
    subtitle2: {
      fontWeight: 500,
    },
    body2: {
      fontWeight: 300,
    },
    h5: {
      fontWeight: 500,
    },
    h4: {
      fontWeight: 500,
    },
    h2: {
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
    MuiTimelineContent: {
      root: {
        marginBottom: '2rem',
        ['@media (max-width:780px)']: {
          padding: '6px 0',
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
