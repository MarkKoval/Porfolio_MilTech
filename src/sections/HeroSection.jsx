import EastIcon from '@mui/icons-material/East';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Box, Button, Chip, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { AnimatedSection, staggerContainerVariants, staggerItemVariants } from '../components/common/AnimatedSection';
import { DecryptText } from '../components/common/DecryptText';
import { heroStats } from '../data/portfolio';

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
            maxWidth={780}
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

          {isMiltechMode && data.currentRole && (
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'rgba(255, 140, 0, 0.05)',
                px: 1.5,
                py: 0.6,
              }}
            >
              <Box className="status-dot status-dot--live" />
              <Typography variant="overline" color="text.secondary">
                {data.currentRole.label}:
              </Typography>
              <Typography variant="overline" color="secondary.main">
                {data.currentRole.value}
              </Typography>
            </Stack>
          )}

          <Stack spacing={2}>
            <Typography variant="h1">
              <Box
                component="span"
                className="glitch-text"
                data-text={data.name}
                sx={{ display: 'inline-block' }}
              >
                <DecryptText text={data.name} duration={650} />
              </Box>
            </Typography>
            <Typography variant="h2" color="secondary.main" sx={{ maxWidth: 640 }}>
              <DecryptText text={data.title} duration={550} delay={180} />
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

          <Divider sx={{ width: '100%', maxWidth: 640, borderColor: 'divider' }} />

          <AnimatedSection
            variants={staggerContainerVariants}
            sx={{ width: '100%' }}
          >
            <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent={{ xs: 'center', md: 'flex-start' }}>
              {heroStats.map((stat) => (
                <Grid key={stat.label} item xs={6} sm="auto">
                  <Box
                    component={motion.div}
                    variants={staggerItemVariants}
                    sx={{ textAlign: { xs: 'center', md: 'left' } }}
                  >
                    <Typography
                      className="hero-stat-value metric-value"
                      variant="h3"
                      color="secondary.main"
                      sx={{ fontSize: { xs: '1.5rem', md: '1.85rem' } }}
                    >
                      <DecryptText text={stat.value} duration={500} />
                    </Typography>
                    <Typography variant="overline" color="text.secondary" sx={{ whiteSpace: 'nowrap' }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </AnimatedSection>
          </Stack>
        </AnimatedSection>
      </Container>
    </Box>
  );
}
