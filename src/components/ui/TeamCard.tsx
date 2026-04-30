import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import SectionCard from './SectionCard';

type TeamCardProps = {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  linkedin?: string;
  twitter?: string;
};

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const TeamCard = ({ name, role, bio, avatarUrl, linkedin, twitter }: TeamCardProps) => {
  const theme = useTheme();

  return (
    <SectionCard
      sx={{
        p: 3,
        textAlign: 'center',
        height: '100%',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          borderColor: alpha(theme.palette.primary.main, 0.7),
        },
      }}
    >
      <Stack spacing={2.5} sx={{ alignItems: 'center' }}>
        <Avatar
          src={avatarUrl}
          alt={name}
          sx={{
            width: 96,
            height: 96,
            border: `3px solid ${theme.palette.primary.main}`,
            bgcolor: alpha(theme.palette.primary.main, 0.18),
            color: theme.palette.text.primary,
            fontWeight: 700,
            fontSize: theme.typography.h5.fontSize,
          }}
        >
          {!avatarUrl && getInitials(name)}
        </Avatar>
        <Box>
          <Typography variant="h5" sx={{ mb: 1 }}>
            {name}
          </Typography>
          <Chip color="secondary" label={role} size="small" variant="outlined" />
        </Box>
        <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
          {bio}
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconButton
            component="a"
            href={linkedin ?? '#'}
            aria-label={`${name} LinkedIn`}
            sx={{
              color: theme.palette.text.secondary,
              border: `1px solid ${theme.palette.divider}`,
              '&:hover': {
                color: theme.palette.primary.main,
                borderColor: alpha(theme.palette.primary.main, 0.6),
              },
            }}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
          <IconButton
            component="a"
            href={twitter ?? '#'}
            aria-label={`${name} Twitter`}
            sx={{
              color: theme.palette.text.secondary,
              border: `1px solid ${theme.palette.divider}`,
              '&:hover': {
                color: theme.palette.secondary.main,
                borderColor: alpha(theme.palette.secondary.main, 0.6),
              },
            }}
          >
            <TwitterIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
    </SectionCard>
  );
};

export default TeamCard;
