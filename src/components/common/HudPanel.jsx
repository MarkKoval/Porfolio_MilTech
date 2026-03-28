import { Box, Stack, Typography } from '@mui/material';

export function HudPanel({ title, label, children, minHeight, sx }) {
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
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{ mb: 2 }}
      >
        <Typography variant="subtitle1">{title}</Typography>
        {label && (
          <Typography variant="overline" color="text.secondary">
            {label}
          </Typography>
        )}
      </Stack>
      {children}
    </Box>
  );
}
