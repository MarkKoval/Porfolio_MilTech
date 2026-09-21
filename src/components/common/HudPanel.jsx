import { Box, Stack, Typography } from '@mui/material';

export function HudPanel({ title, label, status, children, minHeight, sx }) {
  return (
    <Box
      className="hud-panel"
      sx={{
        position: 'relative',
        minHeight,
        p: { xs: 2, md: 2.5 },
        bgcolor: 'rgba(7, 9, 10, 0.78)',
        border: '1px solid',
        borderColor: 'divider',
        overflow: 'hidden',
        ...sx,
      }}
    >
      <Box className="panel-corner panel-corner--tl" />
      <Box className="panel-corner panel-corner--tr" />
      <Box className="panel-corner panel-corner--bl" />
      <Box className="panel-corner panel-corner--br" />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{ mb: 2 }}
      >
        <Typography variant="subtitle1">{title}</Typography>
        <Stack direction="row" alignItems="center" spacing={1.25}>
          {status && (
            <Stack direction="row" alignItems="center" spacing={0.6}>
              <Box className={status === 'ACTIVE' ? 'status-dot status-dot--live' : 'status-dot'} />
              <Typography variant="overline" color="text.secondary">
                {status}
              </Typography>
            </Stack>
          )}
          {label && (
            <Typography variant="overline" color="text.secondary">
              {label}
            </Typography>
          )}
        </Stack>
      </Stack>
      {children}
    </Box>
  );
}
