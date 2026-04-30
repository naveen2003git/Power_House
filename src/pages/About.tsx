import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import heroImage from '../assets/hero.png';
import SectionCard from '../components/ui/SectionCard';
import StatsCard from '../components/ui/StatsCard';
import {
  aboutHighlights,
  aboutImageBadge,
  companySubheading,
  missionVision,
  stats,
  values,
} from '../content/siteContent';

const About = () => {
  const theme = useTheme();
  const BadgeIcon = aboutImageBadge.icon;

  return (
    <Box component="main">
      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 2 }}>
            About Power House
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 760, lineHeight: 1.8 }}>
            {companySubheading}
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 4,
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography variant="h2" sx={{ mb: 2 }}>
                Who We Are
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
                Power House is a strategic marketing partner for brands that want more than scattered tactics. We connect creative direction, search visibility, paid acquisition, and reporting into one focused growth system.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                {aboutHighlights.map((item) => (
                  <Chip
                    key={item}
                    icon={<AutoAwesomeIcon />}
                    label={item}
                    sx={{
                      borderColor: alpha(theme.palette.secondary.main, 0.35),
                      color: theme.palette.text.primary,
                    }}
                    variant="outlined"
                  />
                ))}
              </Box>
            </Box>

            <Box
              sx={{
                position: 'relative',
                minHeight: { xs: 360, md: 460 },
                borderRadius: 6,
                overflow: 'hidden',
                border: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Box
                component="img"
                src={heroImage}
                alt="About Power House"
                sx={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.72 }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.05)} 0%, ` +
                    `${alpha(theme.palette.background.default, 0.86)} 100%)`,
                }}
              />
              <SectionCard
                sx={{
                  position: 'absolute',
                  left: 24,
                  right: 24,
                  bottom: 24,
                  p: 3,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
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
                    <BadgeIcon fontSize="small" />
                  </Box>
                  <Box>
                    <Typography variant="h6">{aboutImageBadge.title}</Typography>
                    <Typography color="text.secondary" variant="body2">
                      {aboutImageBadge.subtitle}
                    </Typography>
                  </Box>
                </Box>
                <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  We pair strong brand instincts with disciplined execution so digital growth feels both premium and dependable.
                </Typography>
              </SectionCard>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 3,
            }}
          >
            {missionVision.map((item) => (
              <SectionCard key={item.title} sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  {item.title}
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {item.description}
                </Typography>
              </SectionCard>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 2 }}>
            Core Values
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 6, maxWidth: 720, lineHeight: 1.8 }}>
            The way we build strategy is as important as the outcomes we deliver. These values shape every campaign, meeting, and decision.
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
              gap: 3,
            }}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              const accent =
                index % 2 === 0 ? theme.palette.primary.main : theme.palette.secondary.main;

              return (
                <SectionCard key={value.title} sx={{ p: 3, height: '100%' }}>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: 2,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: accent,
                      backgroundColor: alpha(accent, 0.12),
                      mb: 2.5,
                    }}
                  >
                    <Icon />
                  </Box>
                  <Typography variant="h5" sx={{ mb: 1.25 }}>
                    {value.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
                    {value.description}
                  </Typography>
                </SectionCard>
              );
            })}
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
              gap: 3,
            }}
          >
            {stats.map((stat) => (
              <StatsCard key={stat.label} {...stat} />
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
