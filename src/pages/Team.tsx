import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import SecondaryButton from '../components/ui/SecondaryButton';
import TeamCard from '../components/ui/TeamCard';
import { coreTeam, leadershipTeam } from '../content/siteContent';

const Team = () => {
  const theme = useTheme();

  return (
    <Box component="main">
      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 2 }}>
            Meet the Team Behind the Momentum
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 760, lineHeight: 1.8 }}>
            Power House brings together strategists, creatives, analysts, and operators who care about great work and real outcomes.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 5 }}>
            Leadership
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 3,
            }}
          >
            {leadershipTeam.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 5 }}>
            Core Team
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
              gap: 3,
            }}
          >
            {coreTeam.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 6,
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr auto' },
              gap: 3,
              alignItems: 'center',
              border: `1px solid ${theme.palette.divider}`,
              background:
                `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ` +
                `${alpha(theme.palette.primary.main, 0.14)} 50%, ${alpha(theme.palette.secondary.main, 0.12)} 100%)`,
            }}
          >
            <Box>
              <Typography variant="h2" sx={{ mb: 1.5 }}>
                Join Us
              </Typography>
              <Typography color="text.secondary" sx={{ maxWidth: 620, lineHeight: 1.8 }}>
                We&apos;re building a team that loves thoughtful strategy, sharp creative, and measurable digital impact.
              </Typography>
            </Box>
            <SecondaryButton href="/contact" size="large">
              Explore Careers
            </SecondaryButton>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Team;
