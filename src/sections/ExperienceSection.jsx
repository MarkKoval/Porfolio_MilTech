import SchoolIcon from '@mui/icons-material/School';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  AnimatedSection,
  drawLineVariants,
  fadeInLeftVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from '../components/common/AnimatedSection';
import { HudPanel } from '../components/common/HudPanel';
import { SectionShell } from '../components/common/SectionShell';

function ServiceRecordEntry({ entry }) {
  return (
    <Box component={motion.div} variants={fadeInLeftVariants} sx={{ position: 'relative', pl: 4, pb: 4 }}>
      <Box
        className={entry.status === 'ACTIVE' ? 'timeline-node timeline-node--active' : 'timeline-node'}
        sx={{ position: 'absolute', left: -1.5, top: 6 }}
      />
      <Stack spacing={1.25}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 0.5, sm: 2 }}
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          justifyContent="space-between"
        >
          <Stack spacing={0.25}>
            <Typography variant="h5">{entry.role}</Typography>
            <Typography variant="body2" color="secondary.main">
              {entry.org}
            </Typography>
          </Stack>
          <Stack alignItems={{ xs: 'flex-start', sm: 'flex-end' }} spacing={0.25}>
            <Typography variant="overline" color="text.secondary">
              {entry.period}
            </Typography>
            <Typography variant="overline" sx={{ color: entry.status === 'ACTIVE' ? 'secondary.main' : 'text.secondary' }}>
              {entry.duration}
            </Typography>
          </Stack>
        </Stack>
        <Stack spacing={0.75}>
          {entry.points.map((point) => (
            <Typography key={point} variant="body2" color="text.secondary">
              — {point}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

export function ExperienceSection({ timeline, education, operational, distinguishing }) {
  return (
    <SectionShell
      id="experience"
      eyebrow="Field Work"
      title="Service Record"
      description="Chronological deployment log — independent R&D, applied engineering roles, and prior software work."
    >
      <Grid container spacing={{ xs: 2, md: 2.5 }}>
        <Grid item xs={12} md={7}>
          <AnimatedSection variants={staggerContainerVariants}>
            <HudPanel title="Timeline" label="Service Log" sx={{ height: '100%' }}>
              <Box sx={{ position: 'relative' }}>
                <Box
                  component={motion.div}
                  variants={drawLineVariants}
                  className="timeline-rail"
                />
                {timeline.map((entry) => (
                  <ServiceRecordEntry key={`${entry.role}-${entry.org}`} entry={entry} />
                ))}
                <Stack direction="row" spacing={1.5} alignItems="flex-start" sx={{ position: 'relative', pl: 4 }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      left: -1.5,
                      top: 4,
                      width: 11,
                      height: 11,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'background.default',
                    }}
                  >
                    <SchoolIcon sx={{ fontSize: 13, color: 'text.secondary' }} />
                  </Box>
                  <Stack spacing={0.25}>
                    <Typography variant="body2">{education.school}</Typography>
                    <Typography variant="overline" color="text.secondary">
                      {education.note}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </HudPanel>
          </AnimatedSection>
        </Grid>

        <Grid item xs={12} md={5}>
          <Stack spacing={{ xs: 2, md: 2.5 }} sx={{ height: '100%' }}>
            <AnimatedSection>
              <HudPanel title="Operational Experience" label="Flight Modes">
                <Stack spacing={1}>
                  {operational.map((point) => (
                    <Typography key={point} variant="body2" color="text.secondary">
                      {point}
                    </Typography>
                  ))}
                </Stack>
              </HudPanel>
            </AnimatedSection>
            <AnimatedSection>
              <HudPanel title="Distinguishing Factors" label="Profile">
                <Stack spacing={1}>
                  {distinguishing.map((point) => (
                    <Typography key={point} variant="body2" color="text.secondary">
                      {point}
                    </Typography>
                  ))}
                </Stack>
              </HudPanel>
            </AnimatedSection>
          </Stack>
        </Grid>
      </Grid>
    </SectionShell>
  );
}
