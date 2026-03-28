import { Box, LinearProgress, Stack, Typography } from '@mui/material';

export function LoadingScreen({ progress, classification }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        px: 3,
      }}
    >
      <Box
        sx={{
          width: 'min(560px, 100%)',
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: 'rgba(8, 10, 10, 0.88)',
          p: { xs: 3, md: 4 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box className="scanline" />
        <Stack spacing={1.5}>
          <Typography variant="overline" color="text.secondary">
            {classification}
          </Typography>
          <Typography variant="h3">Initializing System...</Typography>
          <Typography variant="body2" color="text.secondary">
            Loading command interface, telemetry modules, and engineering profile data.
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              mt: 2,
              height: 7,
              bgcolor: 'rgba(255,255,255,0.06)',
              '& .MuiLinearProgress-bar': {
                background:
                  'linear-gradient(90deg, rgba(75,83,32,0.95) 0%, rgba(255,140,0,0.95) 100%)',
              },
            }}
          />
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="overline" color="text.secondary">
              Boot Sequence
            </Typography>
            <Typography variant="overline">{Math.round(progress)}%</Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
