import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
import SendIcon from '@mui/icons-material/Send';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Box, Button, Grid, Link, Stack, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { AnimatedSection, staggerContainerVariants, staggerItemVariants } from '../components/common/AnimatedSection';
import { HudPanel } from '../components/common/HudPanel';
import { SectionShell } from '../components/common/SectionShell';

const iconByLabel = {
  Email: EmailIcon,
  LinkedIn: LinkedInIcon,
  Telegram: TelegramIcon,
  Location: PlaceIcon,
};

export function ContactSection({ items }) {
  const [emailDraft, setEmailDraft] = useState({
    sender: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(emailDraft.subject || 'Portfolio inquiry');
    const body = encodeURIComponent(
      `From: ${emailDraft.sender || 'Not provided'}\n\n${emailDraft.message || ''}`.trim(),
    );

    window.location.href = `mailto:marekmark22@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Contact Link"
      description="Direct communication channels formatted as stable outbound links."
    >
      <AnimatedSection variants={staggerContainerVariants}>
        <Grid container spacing={{ xs: 2, md: 2.5 }}>
          {items.map((item) => {
            const Icon = iconByLabel[item.label];
            return (
            <Grid key={item.label} item xs={12} sm={6} md={3} sx={{ display: 'flex' }}>
              <Box component={motion.div} variants={staggerItemVariants} sx={{ width: '100%', height: '100%' }}>
                <HudPanel title={item.label} label="Stable" minHeight="100%" sx={{ height: '100%' }}>
                  <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
                    {Icon && <Icon sx={{ color: 'secondary.main', fontSize: 22 }} />}
                    {item.href ? (
                      <Link
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                        underline="none"
                        color="inherit"
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.75,
                          justifyContent: { xs: 'center', md: 'flex-start' },
                          fontSize: { xs: '1rem', md: '1.1rem' },
                          wordBreak: 'break-word',
                        }}
                      >
                        {item.value}
                        <ArrowOutwardIcon fontSize="small" />
                      </Link>
                    ) : (
                      <Typography variant="body1">{item.value}</Typography>
                    )}
                  </Stack>
                </HudPanel>
              </Box>
            </Grid>
            );
          })}
          <Grid item xs={12}>
            <Box component={motion.div} variants={staggerItemVariants} sx={{ width: '100%' }}>
              <HudPanel title="Write An Email" label="Direct Link">
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={{ xs: 1.5, md: 2 }}>
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        size="small"
                        label="Your Email"
                        value={emailDraft.sender}
                        onChange={(event) =>
                          setEmailDraft((current) => ({ ...current, sender: event.target.value }))
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        size="small"
                        label="Subject"
                        value={emailDraft.subject}
                        onChange={(event) =>
                          setEmailDraft((current) => ({ ...current, subject: event.target.value }))
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon />} fullWidth sx={{ height: '100%' }}>
                        Prepare Email
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        minRows={4}
                        label="Message"
                        value={emailDraft.message}
                        onChange={(event) =>
                          setEmailDraft((current) => ({ ...current, message: event.target.value }))
                        }
                      />
                    </Grid>
                  </Grid>
                </Box>
              </HudPanel>
            </Box>
          </Grid>
        </Grid>
      </AnimatedSection>
    </SectionShell>
  );
}
