import { alpha, createTheme } from '@mui/material/styles';

export function createAppTheme(isMiltechMode) {
  const palette = isMiltechMode
    ? {
        primary: '#4B5320',
        secondary: '#FF8C00',
        background: '#0A0A0A',
        backgroundAlt: '#101314',
        text: '#E0E0E0',
        textSecondary: '#8A8F98',
        panel: 'rgba(16, 19, 20, 0.86)',
        border: 'rgba(126, 145, 92, 0.32)',
        grid: 'rgba(75, 83, 32, 0.12)',
        glow: 'rgba(255, 140, 0, 0.22)',
      }
    : {
        primary: '#3E5C76',
        secondary: '#7C9EB2',
        background: '#111417',
        backgroundAlt: '#161B1F',
        text: '#E6EAF0',
        textSecondary: '#97A3B4',
        panel: 'rgba(22, 27, 31, 0.86)',
        border: 'rgba(124, 158, 178, 0.28)',
        grid: 'rgba(124, 158, 178, 0.08)',
        glow: 'rgba(124, 158, 178, 0.16)',
      };

  const baseTheme = createTheme();

  return createTheme(baseTheme, {
    palette: {
      mode: 'dark',
      primary: { main: palette.primary },
      secondary: { main: palette.secondary },
      background: {
        default: palette.background,
        paper: palette.backgroundAlt,
      },
      text: {
        primary: palette.text,
        secondary: palette.textSecondary,
      },
      divider: palette.border,
    },
    shape: {
      borderRadius: 0,
    },
    typography: {
      fontFamily: '"Rajdhani", "Arial Narrow", sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: '3rem',
        lineHeight: 0.95,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        [baseTheme.breakpoints.down('md')]: {
          fontSize: '2.25rem',
        },
        [baseTheme.breakpoints.down('sm')]: {
          fontSize: '1.75rem',
        },
      },
      h2: {
        fontWeight: 700,
        fontSize: '1.75rem',
        lineHeight: 1.05,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        [baseTheme.breakpoints.down('sm')]: {
          fontSize: '1.375rem',
        },
      },
      h3: {
        fontWeight: 700,
        fontSize: '2rem',
        lineHeight: 1.08,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        [baseTheme.breakpoints.down('md')]: {
          fontSize: '1.6rem',
        },
        [baseTheme.breakpoints.down('sm')]: {
          fontSize: '1.375rem',
        },
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.35rem',
        lineHeight: 1.12,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        [baseTheme.breakpoints.down('sm')]: {
          fontSize: '1.15rem',
        },
      },
      h5: {
        fontWeight: 600,
        fontSize: '1.15rem',
        letterSpacing: '0.05em',
        [baseTheme.breakpoints.down('sm')]: {
          fontSize: '1rem',
        },
      },
      h6: {
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      },
      subtitle1: {
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      },
      button: {
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
      },
      body2: {
        fontSize: '0.95rem',
        letterSpacing: '0.04em',
        [baseTheme.breakpoints.down('sm')]: {
          fontSize: '0.875rem',
        },
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.7,
        [baseTheme.breakpoints.down('sm')]: {
          fontSize: '0.875rem',
          lineHeight: 1.65,
        },
      },
      overline: {
        fontFamily: '"IBM Plex Mono", monospace',
        letterSpacing: '0.18em',
      },
    },
    custom: palette,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ':root': {
            colorScheme: 'dark',
          },
          body: {
            backgroundColor: palette.background,
            color: palette.text,
            overflowX: 'hidden',
            backgroundImage: `
              radial-gradient(circle at top right, ${alpha(palette.primary, 0.18)}, transparent 30%),
              linear-gradient(180deg, ${palette.background} 0%, ${palette.backgroundAlt} 100%)
            `,
          },
          '::selection': {
            backgroundColor: alpha(palette.secondary, 0.4),
          },
          '*::-webkit-scrollbar': {
            width: '10px',
            height: '10px',
          },
          '*::-webkit-scrollbar-track': {
            background: palette.background,
          },
          '*::-webkit-scrollbar-thumb': {
            background: alpha(palette.primary, 0.6),
            border: `1px solid ${alpha(palette.text, 0.08)}`,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderWidth: '1px',
            paddingInline: '1.25rem',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            fontFamily: '"IBM Plex Mono", monospace',
            letterSpacing: '0.08em',
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            padding: 10,
          },
          track: {
            opacity: 1,
            backgroundColor: alpha(palette.textSecondary, 0.18),
          },
          thumb: {
            boxShadow: `0 0 18px ${alpha(palette.secondary, 0.35)}`,
          },
        },
      },
    },
  });
}
