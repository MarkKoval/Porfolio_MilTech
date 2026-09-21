import { Box, Grid, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { AnimatedSection, staggerContainerVariants, staggerItemVariants } from '../components/common/AnimatedSection';
import { HudPanel } from '../components/common/HudPanel';
import { SectionShell } from '../components/common/SectionShell';

export function SkillsSection({ groups }) {
  return (
    <SectionShell
      id="skills"
      eyebrow="Capabilities"
      title="Core Capabilities / Tech Stack"
      description="Structured by operational capability, onboard hardware, software layer, and supporting tools."
    >
      <AnimatedSection variants={staggerContainerVariants}>
        <Grid container spacing={{ xs: 2, md: 2.5 }}>
          {groups.map((group) => (
            <Grid key={group.title} item xs={12} md={6} sx={{ display: 'flex' }}>
              <Box component={motion.div} variants={staggerItemVariants} sx={{ width: '100%', height: '100%' }}>
                <HudPanel
                  title={group.title}
                  label="Active"
                  minHeight={{ xs: 'auto', md: 340 }}
                  sx={{ height: '100%' }}
                >
                  <Stack spacing={1.25}>
                    {group.items.map((item) => (
                      <Typography
                        key={item}
                        variant="body1"
                        sx={{ borderBottom: '1px solid', borderColor: 'divider', pb: 1 }}
                      >
                        {item}
                      </Typography>
                    ))}
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
