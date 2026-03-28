import EastIcon from '@mui/icons-material/East';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material';
import { AnimatedSection } from '../components/common/AnimatedSection';

export function HeroSection({ data, isMiltechMode }) {
  return (
    <Box
      component="section"
      id="top"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Box className="hero-radar" />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 14, md: 16 } }}>
        <AnimatedSection transition={{ duration: 0.8, ease: 'easeOut' }}>
          <Stack
            spacing={{ xs: 3, md: 4 }}
            maxWidth={760}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              alignItems: { xs: 'center', md: 'flex-start' },
              mx: { xs: 'auto', md: 0 },
            }}
          >
          <Stack direction="row" spacing={1.2} flexWrap="wrap" useFlexGap>
            {isMiltechMode && (
              <Chip
                label={data.classification}
                color="primary"
                variant="outlined"
                sx={{ bgcolor: 'rgba(255,255,255,0.02)' }}
              />
            )}
            {data.labels.map((item) => (
              <Chip
                key={item.key}
                label={`[${item.key}: ${item.value}]`}
                variant="outlined"
                sx={{
                  color: 'text.secondary',
                  borderColor: 'divider',
                  display: !isMiltechMode && item.key === 'MODE' ? 'none' : 'inline-flex',
                }}
              />
            ))}
          </Stack>

          <Stack spacing={2}>
            <Typography variant="h1">
              {data.name}
            </Typography>
            <Typography variant="h2" color="secondary.main" sx={{ maxWidth: 640 }}>
              {data.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 620 }}>
              {data.tagline}
            </Typography>
          </Stack>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            width={{ xs: '100%', sm: 'auto' }}
          >
            <Button href="#mission-control" variant="contained" color="primary" endIcon={<EastIcon />}>
              Open Control Surface
            </Button>
            <Button href="#contact" variant="outlined" color="secondary" endIcon={<KeyboardDoubleArrowDownIcon />}>
              Direct Contact
            </Button>
          </Stack>
          </Stack>
        </AnimatedSection>
      </Container>
    </Box>
  );
}
