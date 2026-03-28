import { Box, Grid, Stack, Typography } from '@mui/material';
import { AnimatedSection, staggerContainerVariants, staggerItemVariants } from '../components/common/AnimatedSection';
import { HudPanel } from '../components/common/HudPanel';
import { motion } from 'framer-motion';
import { missionControl } from '../data/portfolio';
import { useMissionControlData } from '../hooks/useMissionControlData';

const panelHeight = { xs: 'auto', md: 320 };

function TelemetryPanel({ telemetry }) {
  const items = [
    { label: 'ALT', value: `${Math.round(telemetry.alt)} m` },
    { label: 'SPD', value: `${Math.round(telemetry.spd)} m/s` },
    { label: 'HDG', value: `${Math.round(telemetry.hdg)} deg` },
    { label: 'BAT', value: `${telemetry.bat.toFixed(1)}%` },
  ];

  return (
    <HudPanel title="Telemetry Panel" label="Realtime" minHeight={panelHeight} sx={{ height: '100%' }}>
      <Grid container spacing={1.5}>
        {items.map((item) => (
          <Grid key={item.label} item xs={6}>
            <Box sx={{ border: '1px solid', borderColor: 'divider', p: 1.5 }}>
              <Typography variant="overline" color="text.secondary">
                {item.label}
              </Typography>
              <Typography className="metric-value" variant="h4">
                {item.value}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </HudPanel>
  );
}

function MapPanel({ map }) {
  const trailPoints = map.trail.map((point) => `${point.x},${point.y}`).join(' ');

  return (
    <HudPanel title="Map Panel" label="Simulated Grid" minHeight={panelHeight} sx={{ height: '100%' }}>
      <Box className="map-panel-body">
        <Box className="map-surface">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="map-svg">
          <polyline points={trailPoints} className="map-trail" />
        </svg>
        <Box className="map-dot" sx={{ left: `${map.position.x}%`, top: `${map.position.y}%` }} />
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            position: 'absolute',
            insetInline: 12,
            bottom: 12,
            zIndex: 2,
          }}
        >
          <Typography variant="overline">LAT {map.coords.lat.toFixed(4)}</Typography>
          <Typography variant="overline">LON {map.coords.lon.toFixed(4)}</Typography>
        </Stack>
        </Box>
      </Box>
    </HudPanel>
  );
}

function SwarmStatusPanel({ swarm }) {
  return (
    <HudPanel title="Swarm Status" label="6 Nodes" minHeight={panelHeight} sx={{ height: '100%' }}>
      <Stack spacing={1.1}>
        {swarm.map((drone) => {
          const color =
            drone.status === 'ACTIVE'
              ? 'primary.main'
              : drone.status === 'RETURNING'
                ? 'secondary.main'
                : '#D96C6C';

          return (
            <Stack
              key={drone.id}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ borderBottom: '1px solid', borderColor: 'divider', pb: 1 }}
            >
              <Typography variant="body2">{drone.id}</Typography>
              <Typography variant="overline" sx={{ color }}>
                {drone.status}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </HudPanel>
  );
}

function SignalPanel({ bars }) {
  const average = bars.reduce((sum, value) => sum + value, 0) / bars.length;

  return (
    <HudPanel title="Signal / Link" label="Interference Model" minHeight={panelHeight} sx={{ height: '100%' }}>
      <Stack spacing={2}>
        <Stack direction="row" alignItems="end" spacing={1} sx={{ height: 120 }}>
          {bars.map((value, index) => (
            <Box
              key={`${index}-${Math.round(value)}`}
              sx={{
                flex: 1,
                height: `${value}%`,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: index < 3 ? 'primary.main' : 'secondary.main',
                transition: 'height 0.5s ease',
                boxShadow: (theme) => `0 0 16px ${theme.palette.secondary.main}22`,
              }}
            />
          ))}
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="overline">Link Stability</Typography>
          <Typography variant="overline">{Math.round(average)}%</Typography>
        </Stack>
      </Stack>
    </HudPanel>
  );
}

function RadarPanel({ blips }) {
  return (
    <HudPanel title="Radar / Scanner" label="Passive Sweep" minHeight={panelHeight} sx={{ height: '100%' }}>
      <Box className="radar-panel-body">
        <Box className="radar-surface">
          <Box className="radar-ring radar-ring--inner" />
          <Box className="radar-ring radar-ring--outer" />
          <Box className="radar-sweep-line" />
          {blips.map((blip) => (
            <Box
              key={blip.id}
              className="radar-blip"
              sx={{
                width: blip.size,
                height: blip.size,
                left: `${blip.x}%`,
                top: `${blip.y}%`,
              }}
            />
          ))}
        </Box>
      </Box>
    </HudPanel>
  );
}

function LogTerminal({ logs }) {
  return (
    <HudPanel title="Log Terminal" label="Rolling Buffer" minHeight={panelHeight} sx={{ height: '100%' }}>
      <Stack spacing={1} sx={{ fontFamily: '"IBM Plex Mono", monospace' }}>
        {logs.map((line, index) => (
          <Typography
            key={`${line}-${index}`}
            variant="body2"
            sx={{
              color: index === 0 ? 'secondary.main' : 'text.secondary',
              borderBottom: '1px solid',
              borderColor: 'divider',
              pb: 0.85,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {line}
          </Typography>
        ))}
      </Stack>
    </HudPanel>
  );
}

export function MissionControlSection() {
  const data = useMissionControlData();

  return (
    <Box
      component="section"
      id="mission-control"
      sx={{
        position: 'relative',
        borderTop: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'rgba(6, 8, 8, 0.58)',
        scrollMarginTop: '84px',
      }}
    >
      <AnimatedSection sx={{ maxWidth: 1200, mx: 'auto', px: 3, py: 10 }}>
        <Box
          sx={{
            mb: { xs: 3, md: 4 },
            width: '100%',
            maxWidth: { xs: '100%', md: 760 },
            mx: { xs: 'auto', md: 0 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
            Mission Control
          </Typography>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Ground Control Surface
          </Typography>
          <Typography variant="overline" color="secondary.main" sx={{ display: 'block', mb: 1.5 }}>
            {missionControl.statusLine}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: { xs: '100%', md: 680 },
              mx: { xs: 'auto', md: 0 },
            }}
          >
            {missionControl.summary}
          </Typography>
        </Box>

        <AnimatedSection variants={staggerContainerVariants}>
          <Grid container spacing={{ xs: 2, md: 2.5 }}>
            <Grid item xs={12} md={6} xl={4} sx={{ display: 'flex' }}>
              <Box component={motion.div} variants={staggerItemVariants} sx={{ width: '100%', height: '100%' }}>
                <TelemetryPanel telemetry={data.telemetry} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: 'flex' }}>
              <Box component={motion.div} variants={staggerItemVariants} sx={{ width: '100%', height: '100%' }}>
                <MapPanel map={data.map} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: 'flex' }}>
              <Box component={motion.div} variants={staggerItemVariants} sx={{ width: '100%', height: '100%' }}>
                <SwarmStatusPanel swarm={data.swarm} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: 'flex' }}>
              <Box component={motion.div} variants={staggerItemVariants} sx={{ width: '100%', height: '100%' }}>
                <SignalPanel bars={data.signalBars} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: 'flex' }}>
              <Box component={motion.div} variants={staggerItemVariants} sx={{ width: '100%', height: '100%' }}>
                <RadarPanel blips={data.blips} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: 'flex' }}>
              <Box component={motion.div} variants={staggerItemVariants} sx={{ width: '100%', height: '100%' }}>
                <LogTerminal logs={data.logs} />
              </Box>
            </Grid>
          </Grid>
        </AnimatedSection>
      </AnimatedSection>
    </Box>
  );
}
