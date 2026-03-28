import { Stack, Typography } from '@mui/material';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { HudPanel } from '../components/common/HudPanel';
import { SectionShell } from '../components/common/SectionShell';

export function ExperienceSection({ experience }) {
  return (
    <SectionShell
      id="experience"
      eyebrow="Field Work"
      title="Experience"
      description="Independent R&D profile with direct integration, testing, and real-flight operational exposure."
    >
      <AnimatedSection>
        <HudPanel title={experience.title} label="ACTIVE">
          <Stack spacing={2.5}>
            {experience.points.map((point) => (
              <Typography key={point} variant="body1" color="text.secondary">
                {point}
              </Typography>
            ))}
            <Stack spacing={1}>
              <Typography variant="overline" color="secondary.main">
                Operational Experience
              </Typography>
              {experience.operational.map((point) => (
                <Typography key={point} variant="body2">
                  {point}
                </Typography>
              ))}
            </Stack>
            <Stack spacing={1}>
              <Typography variant="overline" color="secondary.main">
                Distinguishing Factors
              </Typography>
              {experience.distinguishing.map((point) => (
                <Typography key={point} variant="body2">
                  {point}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </HudPanel>
      </AnimatedSection>
    </SectionShell>
  );
}
