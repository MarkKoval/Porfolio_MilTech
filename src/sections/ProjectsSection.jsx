import { Box, Grid, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { AnimatedSection, staggerContainerVariants, staggerItemVariants } from '../components/common/AnimatedSection';
import { HudPanel } from '../components/common/HudPanel';
import { SectionShell } from '../components/common/SectionShell';

export function ProjectsSection({ projects }) {
  return (
    <SectionShell
      id="projects"
      eyebrow="Programs"
      title="Selected Projects"
      description="Program cards formatted as system panels with type, role, and implementation details."
    >
      <AnimatedSection variants={staggerContainerVariants}>
        <Grid container spacing={{ xs: 2, md: 2.5 }}>
          {projects.map((project, index) => (
            <Grid key={project.title} item xs={12} md={6} sx={{ display: 'flex' }}>
              <Box component={motion.div} variants={staggerItemVariants} sx={{ width: '100%', height: '100%' }}>
                <HudPanel
                  title={project.code ?? `PROJECT 0${index + 1}`}
                  label={project.type}
                  minHeight={{ xs: 'auto', md: 360 }}
                  sx={{ height: '100%' }}
                >
                  <Stack spacing={2} sx={{ height: '100%' }}>
                    <Stack spacing={0.5}>
                      <Typography variant="h5">{project.title}</Typography>
                      <Typography variant="body1" color="text.secondary">
                        {project.summary}
                      </Typography>
                    </Stack>
                    <Stack spacing={1}>
                      {project.details.map((detail) => (
                        <Typography key={detail} variant="body2">
                          {detail}
                        </Typography>
                      ))}
                    </Stack>
                  </Stack>
                </HudPanel>
              </Box>
            </Grid>
          ))}
        </Grid>
      </AnimatedSection>
    </SectionShell>
  );
}
