import { Box, Container, Stack, Typography } from '@mui/material';

export function SectionShell({
  id,
  title,
  eyebrow,
  description,
  fullBleed = false,
  children,
  sx,
}) {
  const content = (
    <Stack spacing={{ xs: 3, md: 4 }}>
      {(eyebrow || title || description) && (
        <Stack
          spacing={1.2}
          maxWidth={720}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            alignItems: { xs: 'center', md: 'flex-start' },
            mx: { xs: 'auto', md: 0 },
          }}
        >
          {eyebrow && (
            <Typography variant="overline" color="text.secondary">
              {eyebrow}
            </Typography>
          )}
          {title && <Typography variant="h3">{title}</Typography>}
          {description && (
            <Typography variant="body1" color="text.secondary">
              {description}
            </Typography>
          )}
        </Stack>
      )}
      {children}
    </Stack>
  );

  return (
    <Box
      component="section"
      id={id}
      sx={{
        position: 'relative',
        py: { xs: 8, md: 10 },
        scrollMarginTop: '84px',
        borderTop: '1px solid',
        borderColor: 'divider',
        ...sx,
      }}
    >
      {fullBleed ? content : <Container maxWidth="lg">{content}</Container>}
    </Box>
  );
}
