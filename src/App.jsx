import { AppBar, Box, Button, Chip, Container, CssBaseline, Stack, Toolbar, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { LoadingScreen } from './components/common/LoadingScreen';
import { ModeSwitch } from './components/common/ModeSwitch';
import { CustomCursor } from './components/common/CustomCursor';
import {
  contactItems,
  distinguishingFactors,
  education,
  experienceTimeline,
  heroData,
  operationalExperience,
  projects,
  skillGroups,
  summaryLines,
} from './data/portfolio';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { HeroSection } from './sections/HeroSection';
import { MissionControlSection } from './sections/MissionControlSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { createAppTheme } from './theme/createAppTheme';

const UAVScene = lazy(() =>
  import('./components/three/UAVScene').then((module) => ({
    default: module.UAVScene,
  })),
);
const uavAssetPath = '/models/uav.glb';

function Header({ isMiltechMode, onToggle }) {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'rgba(10, 10, 10, 0.68)',
      }}
    >
      <Toolbar sx={{ minHeight: '72px !important' }}>
        <Container maxWidth="lg" sx={{ px: '0 !important' }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            sx={{ flexWrap: { xs: 'wrap', sm: 'nowrap' }, rowGap: 1.5 }}
          >
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Stack spacing={0.1}>
                <Typography variant="subtitle1">{heroData.name}</Typography>
                <Typography variant="overline" color="text.secondary" sx={{ display: { xs: 'none', sm: 'block' } }}>
                  {heroData.title}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ width: { xs: '100%', sm: 'auto' }, justifyContent: { xs: 'space-between', sm: 'flex-end' } }}>
              {isMiltechMode && (
                <Chip
                  label={heroData.classification}
                  variant="outlined"
                  color="secondary"
                  sx={{ display: { xs: 'none', md: 'inline-flex' } }}
                />
              )}
              <ModeSwitch checked={isMiltechMode} onChange={onToggle} />
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default function App() {
  const [isMiltechMode, setIsMiltechMode] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isBooted, setIsBooted] = useState(false);

  const theme = useMemo(() => createAppTheme(isMiltechMode), [isMiltechMode]);

  useEffect(() => {
    let bootDelayId;
    const intervalId = window.setInterval(() => {
      setProgress((value) => Math.min(value + 6 + Math.random() * 12, 100));
    }, 95);

    const completeId = window.setTimeout(() => {
      setProgress(100);
      bootDelayId = window.setTimeout(() => setIsBooted(true), 220);
    }, 1350);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(completeId);
      window.clearTimeout(bootDelayId);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!isBooted ? (
        <LoadingScreen progress={progress} classification={heroData.classification} />
      ) : (
        <Box className={isMiltechMode ? 'app-shell miltech-mode' : 'app-shell civil-mode'}>
          <CustomCursor />
          <Suspense fallback={null}>
            <UAVScene isMiltechMode={isMiltechMode} assetPath={uavAssetPath} />
          </Suspense>
          <Box className="camo-overlay" />
          <Box className="grid-overlay" />
          <Box className="noise-overlay" />
          <Header isMiltechMode={isMiltechMode} onToggle={() => setIsMiltechMode((value) => !value)} />
          <Box component="main" sx={{ position: 'relative', zIndex: 1 }}>
            <HeroSection data={heroData} isMiltechMode={isMiltechMode} />
            <AboutSection lines={summaryLines} />
            <SkillsSection groups={skillGroups} />
            <ProjectsSection projects={projects} />
            <MissionControlSection />
            <ExperienceSection
              timeline={experienceTimeline}
              education={education}
              operational={operationalExperience}
              distinguishing={distinguishingFactors}
            />
            <ContactSection items={contactItems} />
          </Box>
          <Box sx={{ position: 'relative', zIndex: 1, borderTop: '1px solid', borderColor: 'divider' }}>
            <Container maxWidth="lg">
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                justifyContent="space-between"
                spacing={1}
                sx={{ py: 3 }}
              >
                <Typography variant="overline" color="text.secondary">
                  Engineering Portfolio // Operational Resume
                </Typography>
                <Button href="#top" color="secondary">
                  Return To Top
                </Button>
              </Stack>
            </Container>
          </Box>
        </Box>
      )}
    </ThemeProvider>
  );
}
