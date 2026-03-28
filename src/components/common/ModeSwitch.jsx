import { Stack, Switch, Typography } from '@mui/material';

export function ModeSwitch({ checked, onChange }) {
  return (
    <Stack direction="row" spacing={1.25} alignItems="center">
      <Typography variant="overline" color={!checked ? 'text.primary' : 'text.secondary'}>
        Civil Mode
      </Typography>
      <Switch checked={checked} onChange={onChange} />
      <Typography variant="overline" color={checked ? 'text.primary' : 'text.secondary'}>
        Miltech Mode
      </Typography>
    </Stack>
  );
}
