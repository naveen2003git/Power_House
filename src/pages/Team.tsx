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
    <Box component="main" sx={{mb: 8}}>
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

      <Box >
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 5 }}>
            Partners
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
              gap: 3,
            }}
          >
            {leadershipTeam.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </Box>
        </Container>
      </Box>

      {/* <Box sx={{ py: { xs: 8, md: 14 } }}>
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
      </Box> */}

    </Box>
  );
};

export default Team;
