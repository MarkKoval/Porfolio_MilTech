import { Stack, Typography } from '@mui/material';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { HudPanel } from '../components/common/HudPanel';
import { SectionShell } from '../components/common/SectionShell';

export function AboutSection({ lines }) {
  return (
    <SectionShell
      id="about"
      eyebrow="Profile"
      title="Summary"
      description="Technical profile formatted as a concise system brief."
    >
      <AnimatedSection>
        <HudPanel title="Summary Block" label="Profile">
          <Stack spacing={1.5}>
            {lines.map((line, index) => (
              <Stack
                key={line}
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1.5}
                sx={{
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  pb: 1.2,
                  textAlign: { xs: 'center', md: 'left' },
                  alignItems: { xs: 'center', md: 'flex-start' },
                }}
              >
                <Typography variant="overline" color="secondary.main" sx={{ minWidth: 64 }}>
                  {`0${index + 1}`}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {line}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </HudPanel>
      </AnimatedSection>
    </SectionShell>
  );
}
