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
  const isFilledCard = accentColor === theme.palette.primary.main;
  const cardBackground = isFilledCard ? accentColor : theme.palette.background.paper;
  const titleColor = isFilledCard ? theme.palette.secondary.main : theme.palette.primary.main;
  const bodyColor = isFilledCard
    ? alpha(theme.palette.secondary.main, 0.9)
    : theme.palette.text.secondary;
  const iconColor = isFilledCard ? theme.palette.secondary.main : theme.palette.primary.main;
  const iconBackground = isFilledCard
    ? alpha(theme.palette.secondary.main, 0.14)
    : alpha(theme.palette.primary.main, 0.08);

  return (
    <SectionCard
      sx={{
        height: '100%',
        p: { xs: 3, md: 4 },
        borderRadius: 3,
        backgroundColor: cardBackground,
        border: `1px solid ${
          isFilledCard ? alpha(theme.palette.primary.dark, 0.22) : alpha(theme.palette.primary.main, 0.1)
        }`,
        boxShadow: isFilledCard
          ? `0 20px 40px ${alpha(theme.palette.primary.main, 0.18)}`
          : `0 18px 36px ${alpha(theme.palette.primary.main, 0.08)}`,
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: isFilledCard
            ? `0 26px 46px ${alpha(theme.palette.primary.main, 0.22)}`
            : `0 24px 42px ${alpha(theme.palette.primary.main, 0.12)}`,
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2.25, mb: 2.5 }}>
        <Box
          sx={{
            width: 58,
            height: 58,
            borderRadius: 2.5,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: iconBackground,
            color: iconColor,
            flexShrink: 0,
          }}
        >
          <Icon sx={{ fontSize: 30 }} />
        </Box>
        <Typography
          variant="h4"
          sx={{
            color: titleColor,
            lineHeight: 1.15,
            fontSize: { xs: '1.4rem', md: '1.65rem' },
            pt: 0.75,
          }}
        >
          {title}
        </Typography>
      </Box>
      <Typography
        sx={{
          color: bodyColor,
          lineHeight: 1.85,
          fontSize: '1.02rem',
          maxWidth: '100%',
        }}
      >
        {description}
      </Typography>
    </SectionCard>
  );
};

export default ServiceCard;
