import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import type { SvgIconComponent } from '@mui/icons-material';
import SectionCard from './SectionCard';

type StatsCardProps = {
  value: string;
  label: string;
  icon: SvgIconComponent;
};

const StatsCard = ({ value, label, icon: Icon }: StatsCardProps) => {
  const theme = useTheme();

  return (
    <SectionCard sx={{ p: 3, height: '100%' }}>
      <Stack spacing={2}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: 2,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.palette.secondary.main,
              backgroundColor: alpha(theme.palette.secondary.main, 0.12),
            }}
          >
            <Icon fontSize="small" />
          </Box>
        </Box>
        <Stack spacing={0.5} sx={{ alignItems: 'center', textAlign: 'center' }}>
          <Typography color="primary" variant="h3">
            {value}
          </Typography>
          <Typography color="text.secondary">{label}</Typography>
        </Stack>
      </Stack>
    </SectionCard>
  );
};

export default StatsCard;
