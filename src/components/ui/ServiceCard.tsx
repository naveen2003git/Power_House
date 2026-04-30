import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import type { SvgIconComponent } from '@mui/icons-material';
import SectionCard from './SectionCard';

type ServiceCardProps = {
  icon: SvgIconComponent;
  title: string;
  description: string;
  accentColor: string;
};

const ServiceCard = ({ icon: Icon, title, description, accentColor }: ServiceCardProps) => {
  const theme = useTheme();

  return (
    <SectionCard
      sx={{
        height: '100%',
        p: 3,
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: theme.palette.primary.main,
          transform: 'translateY(-6px)',
        },
      }}
    >
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: alpha(accentColor, 0.15),
          color: accentColor,
          mb: 2.5,
        }}
      >
        <Icon />
      </Box>
      <Typography variant="h5" sx={{ mb: 1.5 }}>
        {title}
      </Typography>
      <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
        {description}
      </Typography>
    </SectionCard>
  );
};

export default ServiceCard;
